# globalThis

Javascript 在不同的环境获取全局对象有不通的方式：

- node 中通过 global
- web 中通过 window, self 等.

TIP

self：打开任何一个网页，浏览器会首先创建一个窗口，这个窗口就是一个window对象，也是js运行所依附的全局环境对象和全局作用域对象。self 指窗口本身，它返回的对象跟window对象是一模一样的。也正因为如此，window对象的常用方法和函数都可以用self代替window。

```js
self.setTimeout(() => {
    console.log(123)
}, 1000)
```

以前想要获取全局对象，可通过一个全局函数

```js
const getGlobal = () => {
    if (typeof self !== 'undefined') {
        return self
    }
    if (typeof window !== 'undefined') {
        return window
    }
    if (typeof global !== 'undefined') {
        return global
    }
    throw new Error('无法找到全局对象')
}

const globals = getGlobal()
console.log(globals)
```

globalThis 提供了一个标准的方式来获取不同环境下的全局 this 对象（也就是全局对象自身）。不像 window 或者 self 这些属性，它确保可以在有无窗口的各种环境下正常工作。所以，你可以安心的使用 globalThis，不必担心它的运行环境。为便于记忆，你只需要记住，全局作用域中的 this 就是 globalThis。

```js
console.log(globalThis)
```

### 推荐阅读

- [globalThis](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis)