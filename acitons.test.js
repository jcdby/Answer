import * as Actions from '../Actions';
import * as Types from '../Types';
import nock from 'nock';
import config from '../config';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import FetchError from 'node-fetch/lib/fetch-error';



describe('Actions', ()=>{
  describe('Search Actions', ()=>{
    it('Should trigger action for searching compounds according to its id', () => {
      const id = '2';
      const e_actions = {
        type: Types.SEARCH_COMP_BY_ID,
        id
      };
      expect(e_actions.type).not.toBe(undefined);
      expect(Actions.searchCompsById(id)).toEqual(e_actions);
    })

    it('Should trigger action for searching compounds according to its name', ()=>{
      const name = 'comp_name';
      const e_actions ={
        type: Types.SEARCH_COMP_BY_NAME,
        name
      };
      expect(e_actions.type).not.toBe(undefined);
      expect(Actions.searchCompsByName(name)).toEqual(e_actions);
    })

    it('Should trigger action for searching compounds according to its fomula', ()=>{
      const fomula = 'C15';
      const e_actions = {
        type: Types.SEARCH_COMP_BY_FOMULA,
        fomula
      };
      expect(e_actions.type).not.toBe(undefined);
      expect(Actions.searchCompsByFomula(fomula)).toEqual(e_actions);
    })

    describe('Async Search Actions', () => {
      const TOTAL_COMPOUNDS = 1000;
      const LIMITS = 20;
      const OFFSET = 1;
      let Basic_URL;
      let API_URL;
      const middlewares = [thunk];
      const mockStore = configureMockStore(middlewares);
      let store;
      let category;
      let search_value;
      let errReason;
      let search_type;
      let limits;
      let offset;


      beforeEach(()=>{
        store = mockStore({compounds:[]});
        Basic_URL = config.URL;
        API_URL = config.API_URL;
        category = 'ktpt';
        search_value = '2';
        search_type = 'ID'
        errReason = 'can not get anything'
        limits = 20;
        offset = 2;
        expect(Basic_URL).toBeTruthy();
        expect(API_URL).toBeTruthy();

      })
      beforeAll(() => {

      })
      afterEach(()=> {
        nock.cleanAll();
      })

      it('Creates FETCH_COMPOUNDS_SUCCESS when fetching compounds list has been done(limits and offset are empty)', () => {
        limits = false;
        offset = false;
        let successCB = Actions.fetchCompsSuccess;
        let startCB = Actions.searchingComps;
        let failCB = Actions.fetchCompsFail;
        let fetch_url =  API_URL + '/' + category + '/' + search_type;
        search_value ? fetch_url = fetch_url + '?search_value=' + search_value : fetch_url
        limits ? fetch_url = fetch_url + '&limits=' + limits : fetch_url;
        offset ? fetch_url = fetch_url + '&offset=' + offset : fetch_url;


        nock(Basic_URL)
          .get(fetch_url)
          .reply(200, {body: {compounds: ['do somthing'], total_compounds: TOTAL_COMPOUNDS, limits: LIMITS, offset: OFFSET}});
        const e_actions = [
          {type: Types.SEARCHING_COMPS},
          {type: Types.FETCH_COMP_SUCCESS, body: {compounds: ['do somthing'], total_compounds: TOTAL_COMPOUNDS, limits: LIMITS, offset: OFFSET}}
        ];




        return store.dispatch(Actions.searchComps(category, search_value,search_type,limits, offset,startCB, successCB, failCB))
                  .then(() => {
                      expect(store.getActions()).toEqual(e_actions);
                  })
      })

      it('Should return all compounds even though search value is empty(limits and offset are not empty)', () => {
        search_value='f';
        let successCB = Actions.fetchCompsSuccess;
        let startCB = Actions.searchingComps;
        let failCB = Actions.fetchCompsFail;
        let fetch_url =  API_URL + '/' + category + '/' + search_type + '?search_value=';
        search_value ? fetch_url = fetch_url + search_value : fetch_url;
        limits ? fetch_url = fetch_url + '&limits=' + limits : fetch_url;
        offset ? fetch_url = fetch_url + '&offset=' + offset : fetch_url;

        nock(Basic_URL)
          .get(fetch_url)
          .reply(200, {body: {compounds: ['do somthing'], total_compounds: TOTAL_COMPOUNDS, limits: limits, offset: offset}});
        const e_actions = [
          {type: Types.SEARCHING_COMPS},
          {type: Types.FETCH_COMP_SUCCESS, body: {compounds: ['do somthing'], total_compounds: TOTAL_COMPOUNDS, limits: limits, offset: offset}}
        ];
        return store.dispatch(Actions.searchComps(category, search_value,search_type,limits, offset, startCB, successCB, failCB))
                  .then(() => {
                      expect(store.getActions()).toEqual(e_actions);
                  })
      })



      it('Creates FETCH_COMPOUNDS_FAIL when fetching compounds list has been fail', ()=> {
        let successCB = Actions.fetchCompsSuccess;
        let startCB = Actions.searchingComps;
        let failCB = Actions.fetchCompsFail;
        let fetch_url =  API_URL + '/' + category + '/' + search_type + '?search_value=';
        search_value ? fetch_url = fetch_url + search_value : fetch_url;
        limits ? fetch_url = fetch_url + '&limits=' + limits : fetch_url;
        offset ? fetch_url = fetch_url + '&offset=' + offset : fetch_url;
        const ex = new Error('request to ' + Basic_URL + fetch_url +' failed, reason: ' + errReason);
        nock(Basic_URL)
          .get(fetch_url)
          .replyWithError(errReason);

        const e_actions = [
          {type: Types.SEARCHING_COMPS},
          {type: Types.FETCH_COMPOUNDS_FAIL, ex: ex}
        ];

        return store.dispatch(Actions.searchComps(category,search_value, search_type,limits, offset,startCB, successCB, failCB))
                .then(() => {
                  expect(store.getActions()).toEqual(e_actions);
                })
      })

      it('Should throw empty Error when category  is empty', ()=> {
        expect(()=> store.dispatch(Actions.searchComps())).toThrowError(new Error('category should not empty or it should be string type'));
        expect(()=> store.dispatch(Actions.searchComps(''))).toThrowError(new Error('category should not empty or it should be string type'));
        expect(()=> store.dispatch(Actions.searchComps(false))).toThrowError(new Error('category should not empty or it should be string type'));

      })
      it('Should throw empty Error when search type is empty', ()=> {
        expect(()=> store.dispatch(Actions.searchComps(category, 1))).toThrowError(new Error('search_value should not empty or it should be string type'));
        expect(()=> store.dispatch(Actions.searchComps(category, 'd'))).not.toThrowError(new Error('search_value should not empty or it should be string type'));

      })

      it('Should throw startCB is missing.', ()=>{
        expect(()=> store.dispatch(Actions.searchComps(category,search_value,search_type))).toThrowError(new Error('startCB is missing'));
      })




    })
  })
})
