# 可选的Catch Binding

在 ES10 之前我们都是这样捕获异常的：

```js
try {
    // tryCode
} catch (err) {
    // catchCode
}
```

在这里 err 是必须的参数，在 ES10 可以省略这个参数：

```js
try {
    console.log('Foobar')
} catch {
    console.error('Bar')
}
```

### 案例：验证参数是否为json格式

这个需求我们只需要返回true或false，并不关心catch的参数。

```js
const validJSON = json => {
    try {
        JSON.parse(json)
        return true
    } catch {
        return false
    }
}

const json = '{"name":"imooc", "course": "es"}'
console.log(validJSON(json))
```