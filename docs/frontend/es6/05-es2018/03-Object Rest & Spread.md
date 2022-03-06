# Object Rest & Spread

前面在讲 function 的 Rest & Spread 方法，忘记的同学可以去复习下。

在 ES9 新增 Object 的 Rest & Spread 方法，直接看下示例：

```js
const input = {
  a: 1,
  b: 2
}

const output = {
  ...input,
  c: 3
}

console.log(output) // {a: 1, b: 2, c: 3}
```

这块代码展示了 spread 语法，可以把 input 对象的数据都拓展到 output 对象，这个功能很实用。

我们再来看下 Object rest 的示例：

```js
const input = {
  a: 1,
  b: 2,
  c: 3
}

let { a, ...rest } = input

console.log(a, rest) // 1 {b: 2, c: 3}
```

当对象 key-value 不确定的时候，把必选的 key 赋值给变量，用一个变量收敛其他可选的 key 数据，这在之前是做不到的。