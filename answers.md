
#Common
##1. Select one of following keyword why you are applying for the job
  1. technical curiosity
  2. developer fame
  3. working for famous company
  4. jumping on a ‘Rocket’
  5. make tons of money
  6. experience in new area（选择）
  7. (your choice)

##2. Given the following variables: time, budget, customer happiness and best practices which are most important in a project? Give them an order and explain why based on your experience。
在有限的时间和金钱情况下，使用已经得到认可的最佳实践，最大限度减少开发时间和开发成本，以此最大限度地获得用户满足度。
时间和金钱是对用户的承诺。
使用者满意度是对产品使用者的承诺。
最佳时间是减少开发时间，减少开发错误，提高用户体验的一种方法。



在这里的customer是指产品的用户（产品的启动者，项目经理，老板等等），还是指产品的直接使用者？假设这里的customer是两者。

customer happiness > time > budget > best priactices.
制造产品的过程就是定义我们要做什么，怎么做的过程。
分析cuotomer happiness就是定义我们要做的产品是什么的过程。任何一个产品都会有需求，产品的终极目标是满足用户（customer）的需求。若是达不到用户的需求，那一定是失败的产品。就像用户需要的是苹果，你费力做了一个梨，你的梨再甜，也是失败的产品。时间和预算应该是在充分分析产品的需求后，得出的结论（理想状态）。有时候也会遇到老板给了一笔钱作为预算，却不知道该做什么和什么时候做完的情况，就算在这种情况下，也应该首先进行市场调查，了解用户需求，根据预算量入为出，设计产品规划。通过分析costomer happiness，再结合开发团队等开发情况，计算出时间和预算。

所以遵守通过customer happiness 计算出来的时间就自然排在了第二位。时间就是金钱，延长开发时间就是增加开发经费。增加开发费用就无法使customer happy（对于经费固定的情况，增加开发时间，就是减少开发者的收入。）。违反了第一条。所以在计算开发时间时，需要充分分析用户需求。在开发时间有限的情况下，customer happiness也是最重要的。不能使customer高兴，就算遵守了时间完成了项目，也是失败的产品（苹果和梨）。在开发时间有限的情况下，我们更应该仔细分析用户需求，设定customer happiness范围和优先度，以此来规划产品项目。

经费和时间比较类似，都是应该在充分分析用户需求的情况下计算出来。之所以把经费排在时间的后面是因为，在满足customer happiness的情况下，超出经费的话，虽然不会引起用户的不满，但是会引起老板的不满。而超过时间没有上线产品的话，不仅会让老板不满，更会让期待产品的用户不满，也就将违反第一条。

best practices是满足以上条件的手段。合适的best practice可以有效地节约开发者的开发时间，减小产品的错误率，提高产品的质量等。但是，假设，我们要做的产品前无古人，还没有任何best practice，那么还将回归到分析customer hapiness的阶段去。就算有很多的practice，要找到合适的best practice也是要回归到分析用户需求和开发团队等因素中去。所以best practice是充分不必要条件。





##3. What do you dislike about our website/product/service? How would you improve it? Which of those changes would likely have the biggest customer benefit?
关于网站两点： 
没有中国相关社交分享服务。（中国市场巨大，本地化的社交分享服务可以是用户有效地分享信息。从而提高我们的知名度。）
支付手段（没有针对中国用户的支付宝支付手段，stripe）
以上两个问题的解决方案：雇佣一个有中国本地社交分享api开发经验的中国开发者（我是其中一个有力竞争者，曾经使用过weibo api。尝试过使用QQ和wetchat api，但是要想使用这两个api的话，必须要有中国公司运行许可证）。
首先，众所周知，在中国无法使用fb和推特。当一个用户发起make，想分享时，由于没有本地的社交分享的支持，将会面临一系列的不方便，用户体验不高，无法通过分享扩大公司的影响力， 无法建立中国本土粉丝生态圈。支付手段同上，没有本土支付手段支持的话，将会给很多想支付的用户带来不方便。所以解决了以上两个问题以后，用户可以通过本地的分享，使更多的人参与到make活动中来，而本土化的便捷支付手段则能够让更多的用户为自己的明星make活动付费。
网页加载速度慢：
![alt tag](https://github.com/jcdby/Answer/blob/master/Screen Shot 2016-11-24 at 1.38.01 PM.png)
上图是主页加载时的所需时间，等待了将近一秒（经过多次测试，几乎达到了平均800ms的样子。）
首页发起的request的数量过多。很多图片本身容量不大，下载时间不长，但从发起请求，到开始下载所花的时间比下载本身还长，影响用户体验。
1.使用css sprites，减少网站对图片的下载请求，以此提高网页的load speed
2.使用Expire标签，减少网站对图片的下载请求。
3.优化服务器（服务器性能，服务器距离）。
通过优化网页的加载速度，可以让更多不同性能设备的用户都能得到最优的体验，不会因为网络延迟等问题错失一些用户权益。







#FE
##1. If you were starting a new project and could choose a frontend framework (Backbone, React, Angular, etc), which would you choose and why? Particularly, what makes this framework better than other choices?

![alt tag](https://github.com/jcdby/Answer/blob/master/Screen Shot 2016-11-24 at 8.23.40 PM.png)
从最新的谷歌趋势图可以看到，在backbonejs, polymerjs,angular2, reactjs,knockoutjs的比较中，react和angular是较为流行的。更多的开发者使用，意味着开发社区更佳活跃，遇到相关问题时，可以获得更多的支持；更多开发者使用，也体现了开发者对其的认可（性能，生产性，架构等方面。），所以如果我正好要开始一个新的项目时，我就会从最流行的框架中去选择。正好我在过去的开发过程中使用过react和angular2，我会选择angular2.



1. 学习成本，选择成本低
其实react和angular2没法相比。react是view端的类库，而angular2是一整套前端框架，包括完整程序所应该有的所有模块。这一点也是选择angular2的一个重要原因，你不必像react一样要为选择flux还是redux而苦恼，也不用考虑是选择birdblue还是fetch苦恼。angular2的官方文档已经详细介绍使用angular2的pattern和相关module支持，而且有详尽的教程帮助开发者熟悉angular2开发。

在实际学习过程中发现，学习angular2的时间要大大小于学习reactjs的时间。就如上文所说，使用react做spa，你得考虑很多的事情，比如，是否应用flux还是应用MVC， MVVC，blabla；如是选择flux，你又得考虑，是选择自己实现flux，还是使用现成的flux实现（redux，等flux实现类库）。选择好了具体pattetn后， 若不是MVC pattern而是flux pattern的话，你又将面临flux pattern的学习成本，或redux的学习成本。特别是当你选择了redux，那就意味着你选择了函数式编程范式，这时候，你又得从OOP大脑转换成FFP大脑。在工作中发现，越是具有OOP思想的人，想改用FFP编程是一件非常费时费力的事情。因为具有OOP大脑的人，当遇到要解决问题的时候，首先会想到相应问题的客体，和相应课题具备的属性和行为，这一切都与FFP思想相异。

你会发现开发者选择angular2会节约相当长的学习时间（我本身自己使用了1周左右熟悉了angular2， 而reactjs和redux, flux则花了将近一个月甚至更长时间熟悉。）。你不需要考虑使用哪一个Router Module， Pattern， API module等等，就像你买了个Mac，开箱就能工作啦～


2. HTML-中心，增加团队分工合作和代码阅读性（个人体会）
Angular2 和 React的模版书写方式不同。
angular2的方式：
```javascript
  <template ngFor #todo [ngForOf]="todoList | todosFilter:filter">
    <li [todo]="todo"></li>
  </template>
```
react的方式：
```typescript
   render(): JSX.Element {
        return (
            <ul className="todo-list">
                {todosFilter(this.props.todoList, this.props.filter)
                    .map(todo => <Todo todo={todo} key={todo.id} />)}
            </ul>
        );
    }
```

这两种方式谁好谁坏因人而异，本人喜欢angular2的方式。因为更加像html文档，在我看来阅读性更强。这种方式的不同亦即是Imperative和Declarative编程方式的不同。我相信现今更多的HTML markup开发者更适应declarative的编程方式。在以前的工作经验中，由于markup开发者不熟悉react的javascript式的模版书写方式，导致markup开发者不得不用Jquery+Html的方式先写一遍UI和UI logic，然后再交给我们把他们的工作物转换成react文档。在这个工程中，浪费了开发时间，而且导致非常容易出错， 特别是对于新的团队来说（成熟的团队由于沟通的高效，错误率会相对少一点）。但是使用Angular2的书写方式，则会相应改善上述问题。毕竟对于markup开发者来说，是熟悉的方式。他们会很快学会angular2模版的书写方式，这样会大大提高开发时间，合作也成为可能。

3. Angular2天然拥抱OOP，MVC,系统架构更佳清晰
OOP相对于FFP最大的好处就是让系统的架构更佳利于人类思考方式理解。一个容易被开发者理解的架构将会减少更多错误的发生。虽然你也可以在React里面使用OOP，但是官方建议是使用Flux和Redux。你使用了Redux就会知道，你在架构系统时，你不可能以OOP的方式去架构，你会首先想data structure，函数等等。当函数的数量极大增加时，管理就会出现问题。而且，在redux中，每一个远程API呼出，都必须要写3个action，分别为开始抓去数据，数据成功，数据失败，复杂度升高。而且当action的数量变大时，管理也会成为问题。你不知道你要写的action之前是否会重复。而天然拥抱OOP的angular2则没有这些问题，因为系统架构按照客体来组织，开发者理解系统更佳容易。

当然React和相应的flux也有其自身的特点，比如渲染速度，性能，还有类库的大小等都很优越，但在我选择的时候，我更看重开发者的开发效率和方便性，有效率也就意味着更快的开发速度和更少的错误。


##2. Describe 3 to 5 ways you haved improve page load time on your experience. Describe as detailed as possible

说实话，之前并没有优化页面load时间的经验。在工作中也正好遇到了要解决页面加载时间问题，所以把整理出来的方法和我的看法整理如下。

1. 尽可能的减少服务器请求。
很多时候，发起请求到开始下载的等待时间大于下载的时间。合并js和css文件，使用css sprites合并图片。
2. 使用缓存tag
给不常变化的静态文件加上缓存tag。java情况如下。
spa的情况，尽量把静态内容页面，没有用户交互的页面使用server rendering 的方式加载。
下面是在JAVA代码中设置这些参数的方法：
//不允许浏览器端或缓存服务器缓存当前页面信息。    
response.setDateHeader("Expires", 0);  
response.addHeader( "Cache-Control", "no-cache" );
//本页面允许在浏览器端或缓存服务器中缓存，时限为10秒。
java.util.Date date = new java.util.Date();  
response.setDateHeader("Expires",date.getTime()+10000); 
response.addHeader( "Cache-Control", "max-age=10" ); 
//设置修改时间
response.setDateHeader("Last-Modified",date.getTime());
我认为对于像公司logo这样的图像可以设置很长的缓存时间，所以设置Expire和cache-control比较好。在Expire和cache-control中，我偏向于使用cache-control,因为cache-control使用的是相对时间过期，保证过期时间的准确性。由于cache-control具有更高的优先级，所以我偏向于同时写下两个标签，以应对不支持cache-control标签的时候。这两个标签不需要向服务器请求，会大大节约page load时间。但同时也会带来一定的问题。比如说在过期时间内，更新了资源，如何保证客户端能够拿到最新的资源。所以，在设置过期时间之前，一定要充分分析资源的性质。像logo这些资源可以设置一个相对较长的时间。而像内容相关的图片，由于经常会变化，所以设置为一天或者一周比较合理。

对于last-modified和etag标签，Etag

3. 使用Gzip
Gzip压缩是相当不错的。最大可以压缩70%的大小。大大缩减了资源的网络传输速度。若我要改善page load time的话，我会让服务器支持gzip压缩。根据浏览器请求头文件的Accept-Encoding信息判断是否需要response压缩的资源。

4. 将css放在顶部，js放在底部。减少inline style，inline js。
不用解释，就是best practice



请求数量

合并脚本和样式表，CSS Sprites，拆分初始化负载，划分主域

请求带宽

开启GZip，精简JavaScript，移除重复脚本，图像优化

缓存利用

使用CDN，使用外部JavaScript和CSS，添加Expires头，减少DNS查找，配置ETag，使AjaX可缓存

页面结构

将样式表放在顶部，将脚本放在底部，尽早刷新文档的输出

代码校验

避免CSS表达式，避免重定向


##3. What are the advantages of client side rendering vs. server side rendering? If you were building our site which would you use and why?

client rendering比较server side rendering的优点： 对于用户的每次交互，省去了网络通信。提高用户体验。用户会得到更快的反馈。也因此减少了服务器的负担。slow once fast later. 主要用于交互多，有一定的bussness logic的web app。用户不会关心网站是client rendering 还是server rendering.用户只考虑是否能在最短的时间内获得最准确的信息和良好简洁的交互。

同一张网页，可以根据用户不同的选择，通过ajax的方式获取信息，然后给不同的用户展示不同的网页。进入页面后，根据用户不同的选择，呈现完全截然不同的内容。

一致性：
All modern websites, even server-rendered ones, need JavaScript. There is just a lot of dynamic stuff you need to do that can only be done in JavaScript. If you build your UI entirely in JavaScript with a sane architecture, it’s easy to reason about how the different dynamic behavior interacts.

The traditional approach of sprinkling JavaScript on top of server-rendered HTML was fine for a long time,<strong> but the more AJAX and other ad hoc dynamic behavior you have, the more it turns into a giant ball of mud.(这一段还没有想清楚问什么和例子)</strong>

Worst of all, you now have state and behavior for the same task—UI rendering—implemented in two languages and running on two computers separated by a high-latency network. Congratulations, you’ve just signed up to solve one of the hardest problems in distributed computing（jsp和js混用后不方便的例子，不同的部分使用不同的开发者，带来开发成本的提高。而是一个开发者使用两种开发语言，容易出现错误，和开发周期的增长。）.

Performance

Client-side JavaScript applications are damn fast. In a traditional server-rendered application, every user interaction has to confer with a server far away in a data center about what to do. This can be fast under optimal scenarios, if you have a fast server in a fast data center connected to a user with a fast connection and a fast device. That’s a lot of “ifs” to be hanging the performance of your UI on.

Imagine if you were using an app on your mobile phone and after every tap or swipe, nothing happened until the app sent a request over the network and received a response. You’d be pissed! Yet this is exactly what people have historically been willing to put up with on the web.

Client-side rendered web apps are different. These apps load the entire payload upfront, so once it’s booted, it has all of the templates, business logic, etc. necessary to respond instantly to a user’s interactions. The only time it needs to confer with a server is to fetch data it hasn’t seen before–and frameworks like Ember make it trivially easy to show a loading spinner while that data loads, keeping the UI responsive so the user knows that their tap or click was received. If the data doesn’t need to be loaded, clicks feel insanely fast.

There’s a misconception that client-rendered JavaScript apps are only useful for more “application-y” sites and not so-called “content” sites; Vine and Bustle are two frequently cited examples. But client-side routing, where you have all of the templates and logic available at the moment of the user’s click, provides performance benefits to every site, and users are beginning to become conditioned to the idea that interactions on the web should be near-instaneous. If you don’t start building for client-side rendering today, my bet is your site is going to feel like a real clunker in just a few years’ time. This is going to be the norm for all sites, and in the not-too-distant-future, server-rendered stuff will feel very “legacy.”

There's one obvious scenario where it makes sense: when you render based on existing data. That is, if you don't need to go to the server to render, say because you are going to display known data in a different perspective, client-side rendering makes sense.




server side rendering 相比较于 client rendering的优点： SEO，提高搜索引擎排名。若某用户只想查看某一页面的信息，那么就没有必要下载整个web application。随着client rendering code base的增加，下载速度就必然成问题。
1.SEO 越高，用户在搜索我们公司相关关键字时，我们的网站就越有可能在搜索结果中出现。client rendering有一个特点就是使用ajax的方式获取内容，换句话说，在页面没有执行ajax获取到内容时，页面将会时空页面。搜索引擎在爬取我们网站时，只能获得有限很少的信息，这样会大大减小用户搜索到我们网站的可能性。不利于我们竞争。
2.client rendering初始加载速度。网页在第一次加载完静态资源以后，执行ajax呼出api获取内容，所需要的网络时间。
3.对于使用javascript有限制的环境下，client rendering几乎没有任何作用。

Unpredictable Performance

At TXJS many years ago, I had a long chat with Dan Webb at Twitter about client-side vs. server-side rendering. He had just finished working on migrating Twitter away from their 100% client-side app back to a more traditional server-rendered approach, and I was mad about their blog post. In my experience, client-side JavaScript apps were almost always faster, and the new Twitter site felt like a regression. I just didn’t understand where they were coming from.

Thankfully, Dan helped me see the bubble I was living in. For me, who always had a relatively modern device, this stuff was super fast. But Dan explained that they had users all around the world clicking on links to Twitter, some of them in internet cafes in remote areas running PCs from 1998. They were seeing times of over 10 seconds just to download, evaluate, and run the JavaScript before the user saw anything. (Forgive me for not having exact numbers, this was years ago and there was definitely beer involved.)

Say what you will about server-rendered apps, the performance of your server is much more predictable, and more easily upgraded, than the many, many different device configurations of your users. Server-rendering is important to ensure that users who are not on the latest-and-greatest can see your content immediately when they click a link.

Crawlers

Client-side rendered apps require, by definition, a JavaScript runtime to work correctly. There is a common misconception that screen readers and other accessibility tools don’t work with JavaScript, but this is just flat-out not true, so don’t let people shame you for using JavaScript for this reason.

That being said, there is a vast world of tools out there that consume and scrape content delivered over HTTP that don’t implement a JavaScript runtime. I don’t think it’s worth going out of our way to cater to this case, at least not at the sake of developer productivity. But if we can solve the problem and make these JavaScript apps available to JavaScript-less clients, why the hell not? Frameworks like Ember should be solving hard problems like this so developers can get back to work.



如果我构建我们的网站时，我会尽可能的选择server rendering的方式。
1.首先，不是所有的页面都需要大量用户交互和
