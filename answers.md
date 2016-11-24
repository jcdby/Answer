
#Common
##1.Select one of following keyword why you are applying for the job
  1.technical curiosity
  2.developer fame
  3.working for famous company
  4.jumping on a ‘Rocket’
  5.make tons of money
  6.experience in new area
  7.(your choice)

##2.Given the following variables: time, budget, customer happiness and best practices which are most important in a project? Give them an order and explain why based on your experience。
在有限的时间和金钱情况下，使用已经得到认可的最佳实践，最大限度减少开发时间和开发成本，以此最大限度地获得用户满足度。
时间和金钱是对用户的承诺。
使用者满意度是对产品使用者的承诺。
最佳时间是减少开发时间，减少开发错误，提高用户体验的一种方法。

在这里的customer是指产品的用户，还是指产品的直接使用者？假设是

customer happiness > time > budget > best priactices.
产品的终极目的是满足用户的需求。若是达不到用户的需求，那一定是失败的产品。就像用户需要的是苹果，你费力做了一个梨，你的梨再甜，也是失败的产品。所以我认为当启动一个产品项目时，应该首先定下产品的用户满足度。




##3.What do you dislike about our website/product/service? How would you improve it? Which of those changes would likely have the biggest customer benefit?
关于网站两点： 
没有中国相关社交分享服务。（中国市场巨大，本地化的社交分享服务可以是用户有效地分享信息。从而提高我们的知名度。）
支付手段（没有针对中国用户的支付宝支付手段，stripe）
网页加载速度慢：
![alt tag](https://github.com/jcdby/Answer/blob/master／Screen Shot 2016-11-24 at 1.38.01 PM.png)
1.使用css sprites，减少网站对图片的下载请求，以此提高网页的load speed
2.使用Expire标签，减少网站对图片的下载请求。






#FE
##1.If you were starting a new project and could choose a frontend framework (Backbone, React, Angular, etc), which would you choose and why? Particularly, what makes this framework better than other choices?

我会选择React. Reactjs不仅是一种前端框架，更是一种方式。在工作中，我深深地体会到了什么叫做Learn Once, Write Anywhere。（复用， reactjs和react native的使用）
virtual DOM: 提高renderring速度。


![alt tag](https://github.com/jcdby/Answer/blob/master/front-end-trend.png)

为什么选择React而不是其它框架。首先看google的trend比较。react以压倒性的优势领先其它的框架。

##2.Describe 3 to 5 ways you haved improve page load time on your experience. Describe as detailed as possible

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


##3.What are the advantages of client side rendering vs. server side rendering? If you were building our site which would you use and why?

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
