# A History of JavaScript

## Notes

**_Mosaic_** was the first browser to bring the internet to the mainstream, but there was no JS just the document object model (DOM).

**_Netscape_** then controlled abut 80% of browser market share and this is around when it was thought that browsers needed to become more dynamic. This is when they first turned to the **java** programming language. This did not last long and they started to create a schema language in the browser that still resembled java.

The first version of JS was born, called **_Mocha_**. It was a language using curly braces like java and C, but under the hood it had some of the features we know if today for JS. These features were things such as:

1. First Class Functions.
2. Dynamic Typing.
3. Prototypal Inheritance (inspired by self programming language).

They wanted JS programming language to be created in 10 days, which is impossible, so it was created as a language which developers could build upon.

Mocha was then renamed to **_Livescript_** and shipped as Beta releases to Netscape. Around 1995 it was renamed yet again to _**JavaScript**_.

In 1996, Microsoft started creating their own browser (Internet Explorer) and they started reverse engineering JS. They called this **_JScript_**.

Since there were two near identical languages in 1996 (JScript and JavaScript) there became a need to standardize it. This is when Netscape turned to the European Computer Manufacturers Association or **_ecma international_**. This birthed ECMA 262 (Or **ECMAScript**) in 1997.

ECMAScript 262 is similar to modern JS except for that it is missing some things, such as exception handling or try/catch blocks, regular expressions (regex), and the strict equality operator.

1999 was an interesting year for tech in general. This was the impending dot.com crash and y2K. But right before all of this we got ECMAScript version 3 (ES3). ES3 contained things such as better error handling and the strict equality operator `===`. However, we do not see another major version of ECMAScript published for 10 years.

In 2000 the stock crashed, we had a solid standardization to JS, but Netscape was acquired by AOL, and the browser market share is being devoured by Microsoft Internet Explorer (IE). This caused a problem because Microsoft basically created their own rules with JS causing fragmentation. Some revolutionary features were created though, such as AJAX, which allowed JS to be implemented asynchronously.

In early 2000s work started on ES4, which had features similar to TypeScript (i.e. optional type annotation, classes, interfaces, and many more features designed to use JS at the Enterprise scale). The creator of JSON was becoming concerned that JS was getting very large and out of control, Microsoft agreed and did not want anything to do with ES4, which resulted in ES3.1 and ES4 proposals. This issue carried forward to 2008 when ES4 was scrapped for good. However it did somewhat find its way into the market as a language called **_ActionScript_** developed by Adobe as the scripting language supported by **Flash**.

Developers were starting to get frustrated with developing apps for multiple different browsers and in 2006 it was starting to look better with the creation of jQuery. It was one of the first JS libraries to have great documentation and empowered developers to create more complex apps, and it was far more reliable on all browsers.

In 2008 a big change was made with the release of _**Google Chrome**_ and the _**V8 Engine**_. V8 completely changed how JS was compiled and interpreted, which made it a viable option for high performance apps in the browser and server-side.

In 2009 NodeJS was introduced. This a server side runtime for JS built on top of V8 that included an **_event loop_**. Event loops allowed developers to write event-driven non-blocking code. This allowed NodeJS to be a solution to build realtime web apps that scale and also allowed developers to build an entire web application stack with a **single** programming language (The JS Everywhere Paradigm).

In 2009 ES5 was released. It came with some very important features:

1. JSON support.
2. Functional Array.
3. Object Methods.
4. Strict Mode.
5. Accessors.
6. And many other features.

In 2010 we start to see JS Frameworks developed for single page apps. The two most popular were **Backbone** and **AngularJS**. They were both trying to solve a similar problem, but in very different ways. Backbone was lightweight and handled DOM updates with an **imperative** programming style. AngularJS was a little more all inclusive using a **declarative** programming style. The creator of backbone also created coffeeScript and underscore.js. CoffeeScript was an important historical language because it was the first to make _**compiling**_ go mainstream.

In 2015 ES6 or **_ES2015_** was released which continued with the transpilers importance. A bunch of new features landed in this version:

1. Promises.
2. Let and Const.
3. Arrow Functions.
4. Spread Syntax.
5. Destructuring.
6. And more.

This release was a hugh leap forward for developers, but it was hard to utilize them due to the lack of browser support. This problem led to the prolific use of _**Babel**_ and _**TypeScript**_, which target any flavour of JS dating back to ES3 and allowing developers to write their code with modern features.

Another big moment in 2015 was the rise in **ReactJS**. It took some of the declarative UI of AngularJS and improved them with a _**uni-directional data flow**_, _**immutability**_ and the use of the _**virtual DOM**_. It has solidified modern day declarative UI patterns. There are many competitors such as Svelte, Vue, and Angular.

Around the same time as ReactJS we start to see tools or _**bundlers**_ to help with the complexity of heavy weight JS apps (i.e. Webpack and Rollup as well as TypeScript and Flow). The were bundle dependencies and added type systems to JS. ImmutableJS and RXJS to help apply functional patterns to code.

In 2019 TC39 or the committee in charge of ECMAScript is now on a regular schedule of JS updates.

An interesting development is **_WebAssembly_**. It is a binary format that low level languages (i.e. C++) can compile to in order to deliver high performance apps to the web. It does not replace JS, but it offers a whole new way to build web apps.

### More info on the History of JS

<https://dev.to/codediodeio/the-weird-history-of-javascript-2bnb>
