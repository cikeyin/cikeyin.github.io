### 浏览器缓存
> 缓存定义：缓存是一种保存资源副本并在下次请求时直接使用该副本的技术

#### 一、浏览器缓存的用处
浏览器缓存是Web性能优化的重要方式，具有以下优点：  
1. 减少冗余的数据传输
2. 减少服务器负担
3. 加快客户端加载网页的速度

#### 二、缓存的资源放在哪里  
-  |memory cache|disk cache   
---|---|---  
相同点|只能存储一些派生类资源文件 |只能存储一些派生类资源文件
不同点|退出进程时数据会被清除|退出进程时数据不会被清除  
存储资源|一般脚本、字体、图片会存在内存当中	|一般非脚本会存在内存当中，如css等  

#### 三、缓存访问优先级(三级缓存原理)
1. 先在内存中查找，如果有，直接加载  
2. 如果内存中没有，则在硬盘中查找，如果有，直接加载  
3. 如果硬盘中也没有，则进行网络请求  
4. 请求获取的资源缓存到硬盘或内存中


#### 四、浏览器缓存的过程 
1. 浏览器第一次请求 
在浏览器第一次发起请求时，本地无缓存，向web服务器发送请求，服务器起端响应请求，浏览器端缓存。 
在第一次请求时，服务器会将页面最后修改时间通过Last-Modified标识由服务器发送给客户端，客户端记录修改时间；服务器还会生成一个Etag，并发送给客户端。  
<div  align="center">  
![image](https://wx3.sinaimg.cn/large/b9236829gy1g102torl3dj20bf0a9dg9.jpg)  
</div>

2. 浏览器再次请求  
<div  align="center">  
![image](https://ws3.sinaimg.cn/large/b9236829gy1g102todwazj20fe0eot9w.jpg)  
</div>

浏览器缓存分为<font color="#ff3333"> 强缓存（本地缓存） </font> 和<font color="#ff3333"> 协商缓存（若缓存） </font>。
根据上图，浏览器在第一次请求发生后，再次发送请求时：
+ 浏览器请求某一资源时，会先获取该资源缓存的header信息，然后根据header中的<font color="#ff3333"> Cache-Control </font>和<font color="#ff3333"> Expires </font>来判断是否过期。若没过期则直接从缓存中获取资源信息，包括缓存的header的信息，所以此次请求不会与服务器进行通信。这里判断是否过期，则是强缓存相关。后面会讲<font color="#ff3333"> Cache-Control </font>和<font color="#ff3333"> Expires </font> 相关。

+ 如果显示已过期，浏览器会向服务器端发送请求，这个请求会携带第一次请求返回的有关缓存的header字段信息，比如客户端会通过<font color="#ff3333"> If-None-Match </font>头将先前服务器端发送过来的Etag发送给服务器，服务会对比这个客户端发过来的<font color="#ff3333"> Etag </font>是否与服务器的相同，若相同，就将<font color="#ff3333"> If-None-Match </font>的值设为false，返回状态304，客户端继续使用本地缓存，不解析服务器端发回来的数据，若不相同就将<font color="#ff3333"> If-None-Match </font>的值设为true，返回状态为200，客户端重新机械服务器端返回的数据；客户端还会通过<font color="#ff3333"> If-Modified-Since </font>头将先前服务器端发过来的最后修改时间戳发送给服务器，服务器端通过这个时间戳判断客户端的页面是否是最新的，如果不是最新的，则返回最新的内容，如果是最新的，则返回304，客户端继续使用本地缓存。


#### 强缓存
强缓存是利用http头中的<font color="#ff3333"> Expires </font> 和<font color="#ff3333"> Cache-Control </font>两个字段来控制的，用来表示资源的缓存时间。强缓存中，普通刷新会忽略它，但不会清除它，需要强制刷新。浏览器强制刷新，请求会带上<font color="#ff3333"> Cache-Control:no-cache </font> 和<font color="#ff3333"> Pragma:no-cache </font>

#### Expires  
Expires是http1.0的规范，它的值是一个绝对时间的GMT格式的时间字符串。如我现在这个网页的Expires值是：expires:Fri, 14 Apr 2017 10:47:02 GMT。这个时间代表这这个资源的失效时间，只要发送请求时间是在Expires之前，那么本地缓存始终有效，则在缓存中读取数据。所以这种方式有一个明显的缺点，由于失效的时间是一个绝对时间，所以当服务器与客户端时间偏差较大时，就会导致缓存混乱。如果同时出现Cache-Control:max-age和Expires，那么max-age优先级更高.

#### Cache-Control
Cache-Control是在http1.1中出现的，主要是利用该字段的max-age值来进行判断，它是一个相对时间，例如Cache-Control:max-age=3600，代表着资源的有效期是3600秒。cache-control除了该字段外，还有下面几个比较常用的设置值：

+ no-cache：不使用本地缓存。需要使用缓存协商，先与服务器确认返回的响应是否被更改，如果之前的响应中存在ETag，那么请求的时候会与服务端验证，如果资源未被更改，则可以避免重新下载。

+ no-store：直接禁止游览器缓存数据，每次用户请求该资源，都会向服务器发送一个请求，每次都会下载完整的资源。

+ public：可以被所有的用户缓存，包括终端用户和CDN等中间代理服务器。

+ private：只能被终端用户的浏览器缓存，不允许CDN等中继缓存服务器对其缓存。  

Cache-Control与Expires可以在服务端配置同时启用，同时启用的时候Cache-Control优先级高。


#### 协商缓存
这个主要涉及到两组header字段：<font color="#ff3333"> Etag </font> 和<font color="#ff3333"> If-None-Match </font>、<font color="#ff3333"> Last-Modified </font>和<font color="#ff3333"> If-Modified-Since </font>。

Last-Modified与ETag是可以一起使用的，服务器会优先验证ETag，一致的情况下，才会继续比对Last-Modified，最后才决定是否返回304。

### 参考
<https://segmentfault.com/a/1190000008956069>  
<https://juejin.im/post/5c4528a6f265da611a4822cc>  
<https://mp.weixin.qq.com/s/qOMO0LIdA47j3RjhbCWUEQ?utm_source=caibaojian.com>  