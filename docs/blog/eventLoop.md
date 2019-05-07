### JavaScript事件循环机制（Event Loop）
#### 一、为什么JavaScript是单线程？
JavaScript语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。 那么，为什么JavaScript不能有多个线程呢？效率！  

JavaScript的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定JavaScript同时有两个线程，一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？  

所以，为了避免复杂性，从一诞生，JavaScript就是单线程，这已经成了这门语言的核心特征，将来也不会改变。  

为了利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。所以，这个新标准并没有改变JavaScript单线程的本质。  

#### 二、执行栈与任务队列  
所有任务可以分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）。同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；异步任务指的是，不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。  

具体来说，异步执行的运行机制如下。 
 
1. 所有同步任务都在主线程上执行，形成一个 ** 执行栈 ** （execution context stack）。  

2. 主线程之外，还存在一个 ** 任务队列 ** （task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。   

3. 一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。  

4. 主线程不断重复上面的第三步。  

js引擎遇到一个异步事件后并不会一直等待其返回结果，而是会将这个事件挂起，继续执行执行栈中的其他任务。当一个异步事件返回结果后，js会将这个事件加入与当前执行栈不同的另一个队列，我们称之为事件队列。被放入事件队列不会立刻执行其回调，而是等待当前执行栈中的所有任务都执行完毕， 主线程处于闲置状态时，主线程会去查找事件队列是否有任务。如果有，那么主线程会从中取出排在第一位的事件，并把这个事件对应的回调放入执行栈中，然后执行其中的同步代码...，如此反复，这样就形成了一个无限的循环。这就是这个过程被称为“事件循环（Event Loop）”的原因。  
<div align="center">
![image](https://ws3.sinaimg.cn/large/b9236829gy1g11cl6k56nj20gp0entaa.jpg)  
</div>

图中的stack表示我们所说的执行栈，web apis则是代表一些异步事件，而callback queue即事件队列。  

#### 三、宏任务（macrotasks）与微任务（microtasks） 

异步任务被分为两类：微任务（microtasks）和宏任务（macrotasks）,在最新标准中，它们被分别称为task与jobs。 

macro-task大概包括：script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering。   

micro-task大概包括: process.nextTick, Promise, Object.observe(已废弃), MutationObserver(html5新特性)。 

事件循环的顺序，决定了JavaScript代码的执行顺序。它从script(整体代码)开始第一次循环。之后全局上下文进入执行栈，直到执行栈清空(只剩全局)，然后执行所有的micro-task。当所有可执行的micro-task执行完毕之后。循环再次从macro-task开始，找到其中一个任务队列执行完毕，然后再执行所有的micro-task，这样一直循环下去 。

#### 四、题目分析 

``` js 
setTimeout(()=>{
    console.log('A');
},0);
var obj={
    func:function () {
        setTimeout(function () {
            console.log('B')
        },0);
        return new Promise(function (resolve) {
            console.log('C');
            resolve();
        })
    }
};
obj.func().then(function () {
    console.log('D')
});
console.log('E');

``` 
        
********************  
     
答案：  
C   
E  
D  
A  
B  
   
#### 五、vue.$nexttick   

因为 DOM 至少会在当前线程里面的代码全部执行完毕再更新。所以不可能做到在修改数据后并且 DOM 更新后再执行，要保证在 DOM 更新以后再执行某一块代码，就必须把这块代码放到下一次事件循环里面，比如 setTimeout(fn, 0)，这样 DOM 更新后，就会立即执行这块代码。   

Vue 的 nextTick方法，从 [源码](https://github.com/vuejs/vue/blob/dev/src/core/util/next-tick.js)不难发现，Vue 在内部尝试对异步队列使用原生的setImmediate、Promise.then和MessageChannel，如果当前执行环境不支持，就采用setTimeout(fn, 0)代替。 
   
> 参考  
> <http://www.ruanyifeng.com/blog/2014/10/event-loop.html>
> <https://juejin.im/post/5bac87b6f265da0a906f78d8>
> <https://juejin.im/entry/58d3f7a944d9040068600c49>
> <https://zhuanlan.zhihu.com/p/33058983>

