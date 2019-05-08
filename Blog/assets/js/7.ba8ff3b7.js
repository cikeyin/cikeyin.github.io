(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{169:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("JavaScript语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。 那么，为什么JavaScript不能有多个线程呢？效率！")]),t._v(" "),a("p",[t._v("JavaScript的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定JavaScript同时有两个线程，一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？")]),t._v(" "),a("p",[t._v("所以，为了避免复杂性，从一诞生，JavaScript就是单线程，这已经成了这门语言的核心特征，将来也不会改变。")]),t._v(" "),a("p",[t._v("为了利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。所以，这个新标准并没有改变JavaScript单线程的本质。")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v('所有任务可以分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）。同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；异步任务指的是，不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。')]),t._v(" "),a("p",[t._v("具体来说，异步执行的运行机制如下。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),a("p"),t._v(" "),a("p",[t._v("图中的stack表示我们所说的执行栈，web apis则是代表一些异步事件，而callback queue即事件队列。")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("异步任务被分为两类：微任务（microtasks）和宏任务（macrotasks）,在最新标准中，它们被分别称为task与jobs。")]),t._v(" "),a("p",[t._v("macro-task大概包括：script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering。")]),t._v(" "),a("p",[t._v("micro-task大概包括: process.nextTick, Promise, Object.observe(已废弃), MutationObserver(html5新特性)。")]),t._v(" "),a("p",[t._v("事件循环的顺序，决定了JavaScript代码的执行顺序。它从script(整体代码)开始第一次循环。之后全局上下文进入执行栈，直到执行栈清空(只剩全局)，然后执行所有的micro-task。当所有可执行的micro-task执行完毕之后。循环再次从macro-task开始，找到其中一个任务队列执行完毕，然后再执行所有的micro-task，这样一直循环下去 。")]),t._v(" "),t._m(7),t._v(" "),t._m(8),a("hr"),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("因为 DOM 至少会在当前线程里面的代码全部执行完毕再更新。所以不可能做到在修改数据后并且 DOM 更新后再执行，要保证在 DOM 更新以后再执行某一块代码，就必须把这块代码放到下一次事件循环里面，比如 setTimeout(fn, 0)，这样 DOM 更新后，就会立即执行这块代码。")]),t._v(" "),a("p",[t._v("Vue 的 nextTick方法，从 "),a("a",{attrs:{href:"https://github.com/vuejs/vue/blob/dev/src/core/util/next-tick.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码"),a("OutboundLink")],1),t._v("不难发现，Vue 在内部尝试对异步队列使用原生的setImmediate、Promise.then和MessageChannel，如果当前执行环境不支持，就采用setTimeout(fn, 0)代替。")]),t._v(" "),a("blockquote",[a("p",[t._v("参考"),a("br"),t._v(" "),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/10/event-loop.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.ruanyifeng.com/blog/2014/10/event-loop.html"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://juejin.im/post/5bac87b6f265da0a906f78d8",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.im/post/5bac87b6f265da0a906f78d8"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://juejin.im/entry/58d3f7a944d9040068600c49",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.im/entry/58d3f7a944d9040068600c49"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/33058983",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zhuanlan.zhihu.com/p/33058983"),a("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"javascript事件循环机制（event-loop）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript事件循环机制（event-loop）","aria-hidden":"true"}},[this._v("#")]),this._v(" JavaScript事件循环机制（Event Loop）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"一、为什么javascript是单线程？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、为什么javascript是单线程？","aria-hidden":"true"}},[this._v("#")]),this._v(" 一、为什么JavaScript是单线程？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"二、执行栈与任务队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、执行栈与任务队列","aria-hidden":"true"}},[this._v("#")]),this._v(" 二、执行栈与任务队列")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("p",[this._v("所有同步任务都在主线程上执行，形成一个 ** 执行栈 ** （execution context stack）。")])]),this._v(" "),s("li",[s("p",[this._v('主线程之外，还存在一个 ** 任务队列 ** （task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。')])]),this._v(" "),s("li",[s("p",[this._v('一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。')])]),this._v(" "),s("li",[s("p",[this._v("主线程不断重复上面的第三步。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("js引擎遇到一个异步事件后并不会一直等待其返回结果，而是会将这个事件挂起，继续执行执行栈中的其他任务。当一个异步事件返回结果后，js会将这个事件加入与当前执行栈不同的另一个队列，我们称之为事件队列。被放入事件队列不会立刻执行其回调，而是等待当前执行栈中的所有任务都执行完毕， 主线程处于闲置状态时，主线程会去查找事件队列是否有任务。如果有，那么主线程会从中取出排在第一位的事件，并把这个事件对应的回调放入执行栈中，然后执行其中的同步代码...，如此反复，这样就形成了一个无限的循环。这就是这个过程被称为“事件循环（Event Loop）”的原因。"),s("br")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://ws3.sinaimg.cn/large/b9236829gy1g11cl6k56nj20gp0entaa.jpg",alt:"image"}}),s("br")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"三、宏任务（macrotasks）与微任务（microtasks）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、宏任务（macrotasks）与微任务（microtasks）","aria-hidden":"true"}},[this._v("#")]),this._v(" 三、宏任务（macrotasks）与微任务（microtasks）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"四、题目分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、题目分析","aria-hidden":"true"}},[this._v("#")]),this._v(" 四、题目分析")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'B'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'D'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'E'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("答案："),s("br"),this._v("\nC"),s("br"),this._v("\nE"),s("br"),this._v("\nD"),s("br"),this._v("\nA"),s("br"),this._v("\nB")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"五、vue-nexttick"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、vue-nexttick","aria-hidden":"true"}},[this._v("#")]),this._v(" 五、vue.$nexttick")])}],!1,null,null,null);s.default=e.exports}}]);