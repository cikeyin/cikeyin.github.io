### 正则表达式
JS中常用正则表达式总结 
#### 1.用户名
```js
//用户名正则，4到16位（字母，数字，下划线，减号）
let uPattern =/^[a-zA-Z0-9_-]{4,16}$/;
console.log(uPattern.test("$123jiasl"))
```

#### 2.密码强度
```js
//密码强度正则，6-16位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
let uPattern =/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_]).{6,16}$/;
console.log(uPattern.test("$123jiasl"))
```

#### 3.整数
```js
//正整数
let uPattern =/^\d+$/;
console.log(uPattern.test("1232"))
```

```js
//负整数
let uPattern =/^-\d+$/;
console.log(uPattern.test("-1232"))
```

```js
//整数
let uPattern =/^-?\d+$/;
console.log(uPattern.test("-1232"))
```

#### 4.数字
```js
//正数
let uPattern =/^\d+(\.\d+)?$/;
console.log(uPattern.test("1232"))
```

```js
//负数
let uPattern =/^-\d+(\.\d+)?$/;
console.log(uPattern.test("-1232"))
```

```js
//数字
let uPattern =/^-?\d+(\.\d+)?$/;
console.log(uPattern.test("-1232"))
```

#### 5.Email
```js
let uPattern =/^[a-zA-z0-9_\-\.]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
console.log(uPattern.test("9971525461@qq.com"))
```

#### 6.手机号
```js
//手机号正则
var mPattern = /^1[345789]\d{9}$/; 
//输出 true
console.log(mPattern.test("15507621888"));
```

#### 7.身份证
```js
//身份证正则：第一位不能为0,
var mPattern = /^[1-9][0-9]{5}(18|19|20)\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/; 
//输出 true
console.log(mPattern.test("11010519880605371X"));
```

#### 8.日期正则
```js
//简单的格式判断 2019-03-08
var mPattern = /^\d{4}\-\d{2}\-\d{2}$/;
//对日期进行判断
var mPattern = /^\d{4}\-((0[1-9])|(10|11|12))\-(([0-2][1-9])|10|20|30|31)$/;
console.log(mPattern.test("11010519880605371X"));
```
