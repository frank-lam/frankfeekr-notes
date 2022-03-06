# Object

## 属性简洁表示法

在 ES6 之前 Object 的属性必须是 key-value 形式，如下：

```js
  let name = 'xiecheng'
  let age = 34
  let obj = {
      name: name,
      age: age,
      study: function() {
          console.log(this.name + '正在学习')
      }
  }
```

在 ES6 之后是可以用简写的形式来表达：

```js
  let name = 'xiecheng'
  let age = 34
  let obj = {
      name,
      age,
      study() {
          console.log(this.name + '正在学习')
      }
  }
```

## 属性名表达式

在 ES6 可以直接用变量或者表达式来定义Object的 key。

```js
  let s = 'school'
  let obj = {
      foo: 'bar',
      [s]: 'imooc'
  }
```

## 

判断两个对象是否相等。

```js
let obj1 = { // new Object()
    name: 'xiecheng',
    age: 34
}

let obj2 = { // new Object()
    name: 'xiecheng',
    age: 34
}
console.log(obj1 == obj2) // false

console.log(Object.is(obj1, obj2)) // false

let obj2 = obj1

console.log(Object.is(obj1, obj2)) // true
```

## 

Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象，它将返回目标对象。

```js
const target = {
    a: 1,
    b: 2
}
const source = {
    b: 4,
    c: 5
}

const returnedTarget = Object.assign(target, source)

console.log(target)
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget)
// expected output: Object { a: 1, b: 4, c: 5 }
```

**基本语法**

> Object.assign(target, ...sources)

|  参数   |   含义   | 必选 |
| :-----: | :------: | :--: |
| target  | 目标对象 |  Y   |
| sources |  源对象  |  N   |

TIP

从语法上可以看出源对象的个数是不限制的（零个或多个），如果是零个直接返回目的对象，如果是多个相同属性的会被后边的源对象的属相覆盖。

```js
let s = Object.assign({
    a: 1
})
// {a: 1}
```

注意

如果目的对象不是对象，则会自动转换为对象

```js
let t = Object.assign(2)
// Number {2}
let s = Object.assign(2, {
    a: 2
})
// Number {2, a: 2}
```

如果对象属性具有多层嵌套，这时使用Object.assign()合并对象会怎么样呢？

```js
let target = {
    a: {
        b: {
            c: 1
        },
        e: 4,
        f: 5,
        g: 6
    }
}
let source = {
    a: {
        b: {
            c: 1
        },
        e: 2,
        f: 3
    }
}
Object.assign(target, source)
console.log(target)
```

我们惊奇的发现， `g` 属性消失了...

注意

Object.assign()对于引用数据类型属于浅拷贝。

TIP

对象的浅拷贝：浅拷贝是对象共用的一个内存地址，对象的变化相互印象。
对象的深拷贝：简单理解深拷贝是将对象放到新的内存中，两个对象的改变不会相互影响。

### 思考

1. 如果目标对象传入的是 undefined 和 null 将会怎样呢？
2. 如果源对象的参数是 undefined 和 null 又会怎样呢？
3. 如果目标对象是个嵌套的对象，子对象的属性会被覆盖吗？

## 对象的遍历方式

如何能够遍历出对象中每个key和value的值呢？

```js
let obj = {
    name: 'xiecheng',
    age: 34,
    school: 'imooc'
}
```

Array中演示过，for...in不能够用于遍历Array，for...in的作用是用于遍历对象的。

```js
for (let key in obj) {
    console.log(key, obj[key])
}
```

Object.keys()用于返回对象所有key组成的数组。

```js
Object.keys(obj).forEach(key => {
    console.log(key, obj[key])
})
```

Object.getOwnPropertyNames()用于返回对象所有key组成的数组。

```js
Object.getOwnPropertyNames(obj).forEach(key => {
    console.log(key, obj[key])
})
```

Reflect.ownKeys()用于返回对象所有key组成的数组。

```js
Reflect.ownKeys(obj).forEach(key => {
    console.log(key, obj[key])
})
```

### 推荐阅读

1. [es6-enhanced-object-literals](https://www.sitepoint.com/es6-enhanced-object-literals/)
2. [es6-features](https://codetower.github.io/es6-features/)
3. [Object.assign()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)