# Promise.prototype.finally()

指定不管最后状态如何都会执行的回调函数。

Promise.prototype.finally() 方法返回一个Promise，在promise执行结束时，无论结果是fulfilled或者是rejected，在执行then()和catch()后，都会执行finally指定的回调函数。这为指定执行完promise后，无论结果是fulfilled还是rejected都需要执行的代码提供了一种方式，避免同样的语句需要在then()和catch()中各写一次的情况。

**基本语法**

> p.finally(onFinally)

**示例**

```js
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
        // reject('fail')
    }, 1000)
}).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
}).finally(() => {
    console.log('finally')
})
```

### 场景1：loading关闭

需要每次发送请求，都会有loading提示，请求发送完毕，就需要关闭loading提示框，不然界面就无法被点击。不管请求成功或是失败，这个loading都需要关闭掉，这时把关闭loading的代码写在finally里再合适不过了。

### 场景2：数据库断开链接

```js
let connection
db.open()
    .then(conn => {
        connection = conn
        return connection.select({
            name: 'Jane'
        })
    })
    .then(result => {
        // Process result
        // Use `connection` to make more queries
    })···
    .catch(error => {
        // handle errors
    })
    .finally(() => {
        connection.close()
    })
```

### 推荐阅读

- [Promise.prototype.finally()](http://2ality.com/2017/07/promise-prototype-finally.html)
- [finally()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)