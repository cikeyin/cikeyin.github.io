### 前端算法 

#### 一、排序  

+ 基本排序算法  

    1. 冒泡排序

        + 排序原理：  
        冒泡排序（Bubble Sort）也是一种简单直观的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。  

        + 动画演示：
        <div style="align:center">
        ![image](https://wx2.sinaimg.cn/large/b9236829gy1g16vdpct4tg20my075thy.gif)
        </div>

        + 代码：  
        ```js
        function bubbleSort(arr){
            for(let i=0; i<arr.length-1; i++){
                for(let j=0; j<arr.length-1-i; j++){
                    if(arr[j]>arr[j+1]){
                        let temp = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = temp;
                    }
                }
            }
            return arr;
        }
        ```  

        + 注意事项  
        在比较交换的时候ES6有没有简单的方法实现？ 
        有的，如下：

        ```js
        arr = [1,2,3,4];
        [arr[0],arr[1]] = [arr[1],arr[0]]; //ES6解构赋值
        ```

    2. 选择排序  

        + 排序原理：  
        选择排序是一种简单直观的排序算法，无论什么数据进去都是 O(n²) 的时间复杂度。所以用到它的时候，数据规模越小越好。唯一的好处可能就是不占用额外的内存空间了吧。  

            + 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置；  
            + 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾；  
            + 重复第二步，直到所有元素均排序完毕。   

        + 动画演示：
        <div style="align:center"> 
        ![image](http://wx1.sinaimg.cn/large/b9236829gy1g16wlxfcy3g20mj06wdsb.gif)
        </div>

        + 代码：  
        ```js
        function selectionSort(arr){
            let l = arr.length;
            let minIndex;
            for(let i=0;i<l-1;i++){
                minIndex = i; 
                for(let j=i;j<l;j++){ 
                    if(arr[minIndex]>arr[j]){
                        minIndex = j;
                    }
                }
                [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]];
            }
            return arr;
        }
        ```  
    3. 插入排序  

        + 排序原理：  
        插入排序的代码实现虽然没有冒泡排序和选择排序那么简单粗暴，但它的原理应该是最容易理解的了，因为只要打过扑克牌的人都应该能够秒懂。插入排序是一种最简单直观的排序算法，它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

        插入排序和冒泡排序一样，也有一种优化算法，叫做拆半插入  

            + 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。

            + 从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）

        + 动画演示：
        <div style="align:center"> 
        ![image](https://wx1.sinaimg.cn/large/b9236829gy1g17077od7sg20mj0e1n6v.gif)
        </div>

        + 代码：  
        ```js
        function insertSort(arr){
            let len = arr.length;
            let tempIndex;
            for(let i=1; i<len; i++){
                tempIndex = i;
                for(let j=i-1; j>=0; j--){
                    if(arr[tempIndex]<arr[j]){
                        [arr[tempIndex],arr[j]] = [arr[j],arr[tempIndex]]
                        tempIndex = j;
                    }
                }
            }
            return arr;
        }
        ``` 
    4. 时间复杂度  
    <div style="align:center"> 
    ![image](https://wx4.sinaimg.cn/large/b9236829gy1g1a5ssmr3qj20m80djn24.jpg)
    </div>

+ 高级排序算法  

    1. 快速排序  
    ```js
    function quickSort(arr){
        if(arr.length<=1){
            return arr;
        }
        
        let pivot = arr[pivotIndex];

        let left = [],
            right = []; 
       
        for(let i=0,l=arr.length; i<l; i++){
            let current = arr[i];
            if(current<pivot){
                left.push(current);
            }else{
                right.push(current);
            }
        }
        return quickSort(left).concat(quickSort(right));
    }
    ```
    > [快速排序-阮一峰](http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html)

    2. 希尔排序  

    3. 时间复杂度总结  

> 参考：  
> [十大经典排序算法的 JavaScript 实现](https://segmentfault.com/a/1190000009332932)   
> [前端笔试&面试爬坑系列---算法](https://juejin.im/post/5b72f0caf265da282809f3b5#heading-1)    

