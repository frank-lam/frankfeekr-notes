# String 扩展

## 

matchAll() 方法返回一个包含所有匹配正则表达式及分组捕获结果的迭代器

**语法**

> str.matchAll(regexp)

**解释**

|  参数  |      含义      | 必选 |
| :----: | :------------: | :--: |
| regexp | 正则表达式对象 |  Y   |

注意

1. 如果所传参数不是一个正则表达式对象，则会隐式地使用 new RegExp(obj) 将其转换为一个 RegExp
2. 返回值一个迭代器，但是不可重用，结果耗尽需要再次调用方法，获取一个新的迭代器

**示例**

在了解 matchAll 之前，我们回顾下 ES10 之前一共有多少种正则全部遍历的方法。

**1. RegExp.prototype.exec() with /g**

如何用一个正则表达式来得到所有匹配项，可以使用exec与g修饰符，如果正则表达式有/g标志，那么多次调用.exec()就会得到所有匹配的结果。 如果没有匹配的结果，.exec()就会返回null。在这之前会返回每个匹配的匹配对象。 这个对象包含捕获的子字符串和更多信息。

```js
const str = `
  <html>
    <body>
      <div>第一个div</div>
      <p>这是一个p</p>
      <span>span</span>
      <div>第二个div</div>
    <body>
  </html>
`
```

请找出所有的div元素。

```js
function selectDiv(regExp, str) {
    let matches = []
    while (true) {
        // console.log(regExp.lastIndex)
        const match = regExp.exec(str)
        // console.log(match)
        if (match == null) {
            break
        }
        matches.push(match[1])
    }
    return matches
}
const regExp = /<div>(.*)<\/div>/g
const res = selectDiv(regExp, str)
console.log(res)
```

**2. String.prototype.match() with /g**

如果用 .match 方法结合 /g 的正则模式，将会把所有的匹配打包成一个数组返回，换句话说所有的捕获被忽略。

```js
console.log(str.match(regExp))
```

#### /g作用

因为正则表达式有一个lastIndex(初始值为0)属性，每次.exec()前，都会根据lastIndex属性的值来决定开始匹配的位置。如果正则表达式没有/g标志，那么运行一次.exec()时，不会改变lastIndex的值，导致下一次运行exec()时，匹配仍旧是从字符串0的位置开始。当正则表达式加了/g标志后，运行一次exec()，正则表达式的lastIndex就会改变，下次运行exec()就会从前一次的结果之后开始匹配。

不过如果没有使用 /g 的正则模式，.match 的效果和 RegExp.prototype.exec() 是一致的。

**3. String.prototype.replace()**

您可以使用一个技巧通过 .replace() 收集捕获，我们使用一个函数来计算替换值。

```js
function selectDiv(regExp, str) {
    let matches = []
    str.replace(regExp, (all, first) => {
        matches.push(first)
    })
    return matches
}
const res = selectDiv(regExp, str)
console.log(res)
```

现在看下 .matchAll 方法，可以这样做：

```js
function selectDiv(regExp, str) {
    let matches = []
    for (let match of str.matchAll(regExp)) {
        matches.push(match[1])
    }
    return matches
}
const res = selectDiv(regExp, str)
console.log(res)
```

### 推荐阅读

- [String.prototype.matchAll()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)