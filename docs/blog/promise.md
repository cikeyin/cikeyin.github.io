### Promise原理与实现  

#### 一、Promise是什么？  

Promise是一种异步编程解决方案，比传统的异步解决方案【回调函数】和【事件】更合理、更强大。现已被 ES6 纳入进规范中。  

+ 从语法上讲，promise是一个对象，从它可以获取异步操作的消息。

+ promise有三种状态：pending、fulfiled、rejected，状态一旦改变，就不会再变。  

+ 创造promise实例后，它会立即执行。 

+ Promise可以解决异步问题，但是不能说Promise是异步的。  

#### 二、几种常见的异步解决方案

+ 回调函数  

+ 事件监听  

+ 发布/订阅  

+ Promise对象 

>  参考： [四种异步编程方案](http://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html)

#### 三、Promise解决的痛点  

处理多个相互关联的异步请求，回调嵌套很多时，出现 **毁掉地狱** 的情况，这种编码模式有以下问题： 

+ 多级嵌套导致代码繁杂，不利于阅读与维护  

+ 异步操作顺序变更时，需要大规模的代码重构  

+ 回调函数基本都是匿名函数，bug追踪困难   

#### 四、Promise使用 

1. Promise构造函数  

Promise 是一个构造函数，new Promise 返回一个 promise对象，接收一个excutor执行函数作为参数。 

executor是带有 resolve 和 reject 两个参数的函数 。Promise构造函数执行时立即调用executor 函数， resolve 和 reject 两个函数作为参数传递给executor（executor 函数在Promise构造函数返回新建对象前被调用）。resolve 和 reject 函数被调用时，分别将promise的状态改为fulfilled（完成）或rejected（失败）。executor 内部通常会执行一些异步操作，一旦完成，可以调用resolve函数来将promise状态改成fulfilled，或者在发生错误时将它的状态改为rejected。 

如果在executor函数中抛出一个错误，那么该promise 状态为rejected。executor函数的返回值被忽略。

```js
const promise = new Promise((resolve, reject)=>{
    //异步处理  
    //处理结束后，调用resolve或reject 
})
``` 
2. promise对象方法  

（1）then方法 当resolve或reject时的回调函数 

```js
promise.then(onFulfilled,onRejected);
```

> 注意：then方法是异步执行的

（2）resolve时onFulfilled被调用

```js
const promise = new Promise((resolve, reject) => {
   resolve('fulfilled'); // 状态由 pending => fulfilled
});
promise.then(result => { // onFulfilled
    console.log(result); // 'fulfilled' 
}, reason => { // onRejected 不会被调用
    
})
```

（3）reject时onRejected被调用

```js
onst promise = new Promise((resolve, reject) => {
   reject('rejected'); // 状态由 pending => rejected
});
promise.then(result => { // onFulfilled 不会被调用
  
}, reason => { // onRejected 
    console.log(reason); // 'rejected'
})
```

(4) promise.catch  

在链式写法中可以捕获前面then中发送的异常  

```js
promise.catch(onRejected)
相当于
promise.then(null, onRrejected);
```

2. promise chain

promise.then方法每次调用,都返回一个新的promise对象,所以可以链式写法

3. Promise的静态方法 

（1） Promise.resolve 返回一个fulfilled状态的promise对象。

（2） Promise.reject 返回一个rejected状态的promise对象。

（3） Promise.all 接收一个promise对象数组为参数，只有全部为resolve才会调用，通常会用来处理多个并行异步操作。

（4） Promise.race 接收一个promise对象数组为参数，Promise.rac 只要有一个promise对象进入 FulFilled 或者 Rejected 状态的话，就会继续进行后面的处理。


#### 五、手写一个Promise


#### 六、回调转换为Promise

 
> 参考：  
> [面试精选之Promise](https://juejin.im/post/5aa7868b6fb9a028dd4de672#heading-4)  
> [Promise原理讲解 && 实现一个Promise对象 ](https://juejin.im/post/5b31a4b7f265da595725f322#heading-6)  
> [八段代码彻底掌握 Promise](https://juejin.im/post/597724c26fb9a06bb75260e8)  
> [史上最通俗易懂的Promise](https://juejin.im/post/5afe6d3bf265da0b9e654c4b)  


