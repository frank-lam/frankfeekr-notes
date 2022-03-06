# RegExp Updates

## dotAll 模式

正则表达式中，点（.）是一个特殊字符，代表任意的单个字符，但是有两个例外。一个是四个字节的 UTF-16 字符，这个可以用u修饰符解决；另一个是行终止符（line terminator character）。

- U+000A 换行符（\n）
- U+000D 回车符（\r）
- U+2028 行分隔符（line separator）
- U+2029 段分隔符（paragraph separator）

```js
console.log(/foo.bar/.test('foo\nbar')) // false
console.log(/foo.bar/s.test('foo\nbar')) // true
```

在 ES5 中我们都是这么解决的：

```js
console.log(/foo[^]bar/.test('foo\nbar')) // true
// or
console.log(/foo[\s\S]bar/.test('foo\nbar')) // true
```

那如何判断当前正则是否使用了 dotAll 模式呢？

```js
const re = /foo.bar/s // Or, `const re = new RegExp('foo.bar', 's')` .
console.log(re.test('foo\nbar')) // true
console.log(re.dotAll) // true
console.log(re.flags) // 's'
```

TIP

记住一句话就可以理解 dotAll 模式：它让 . 名副其实。

## 具名组匹配

我们在写正则表达式的时候，可以把一部分用()包裹起来，被包裹起来的这部分称作“分组捕获”。

```js
console.log('2020-05-01'.match(/(\d{4})-(\d{2})-(\d{2})/))
// ["2020-05-01", "2020", "05", "01", index: 0, input: "2020-05-01", groups: undefined]
```

这个正则匹配很简单，按照 match 的语法，没有使用 g 标识符，所以返回值第一个数值是正则表达式的完整匹配，接下来的第二个值到第四个值是分组匹配（2020, 05, 01）。

此外 match 返回值还有几个属性，分别是 index、input、groups。

TIP

1. index [匹配的结果的开始位置]
2. input [搜索的字符串]
3. groups [一个捕获组数组 或 undefined（如果没有定义命名捕获组）]

我们通过数组来获取这些捕获：

```js
let t = '2020-05-01'.match(/(\d{4})-(\d{2})-(\d{2})/)
console.log(t[1]) // 2020
console.log(t[2]) // 05
console.log(t[3]) // 01
```

上文中重点看下 groups 的解释，这里提到了命名捕获组的概念，如果没有定义 groups 就是 undefined。很明显，我们上述的返回值就是 undefined 间接说明没有定义命名捕获分组。那什么是命名捕获分组呢？

```js
console.log('2020-05-01'.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/))
// ["2020-05-01", "2020", "05", "01", index: 0, input: "2020-05-01", groups: {…}]
```

这段代码的返回值 groups 已经是 Object 了，具体的值是：

```js
groups: {
    year: "2020",
    month: "05",
    day: "01"
}
```

这个 Object 的 key 就是正则表达式中定义的，也就是把捕获分组进行了命名。想获取这些捕获可以这样做：

```js
let t = '2020-05-01'.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/)
// ["2020-05-01", "2020", "05", "01", index: 0, input: "2020-05-01", groups: {…}]
console.log(t.groups.year) // 2020
console.log(t.groups.month) // 05
console.log(t.groups.day) // 01
```

## 后行断言

在 ES9 之前 JavaScript 正则只支持先行断言，不支持后行断言。简单复习下先行断言的知识：

```js
let test = 'hello world'
console.log(test.match(/hello(?=\sworld)/))
// ["hello", index: 0, input: "hello world", groups: undefined]
```

这段代码要匹配后面是 world 的 hello，但是反过来就不成：

```js
let test = 'world hello'
console.log(test.match(/hello(?=\sworld)/))
// null
```

比如我们想判断前面是 world 的 hello，这个代码是实现不了的。在 ES9 就支持这个后行断言了：

```js
let test = 'world hello'
console.log(test.match(/(?<=world\s)hello/))
// ["hello", index: 6, input: "world hello", groups: undefined]
```

(?<...)是后行断言的符号，(?...)是先行断言的符号，然后结合 =(等于)、!(不等)、\1(捕获匹配)。