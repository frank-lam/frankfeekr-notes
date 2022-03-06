# Object.fromEntries()

方法 Object.fromEntries() 把键值对列表转换为一个对象，这个方法是和 Object.entries() 相对的。

```js
Object.fromEntries([
    ['foo', 1],
    ['bar', 2]
])
// {foo: 1, bar: 2}
```

#### 案例1：Object 转换操作

```js
const obj = {
    name: 'imooc',
    course: 'es'
}
const entries = Object.entries(obj)
console.log(entries)
// [Array(2), Array(2)]

// ES10
const fromEntries = Object.fromEntries(entries)
console.log(fromEntries)
// {name: "imooc", course: "es"}
```

#### 案例2：Map 转 Object

```js
const map = new Map()
map.set('name', 'imooc')
map.set('course', 'es')
console.log(map)

const obj = Object.fromEntries(map)
console.log(obj)
// {name: "imooc", course: "es"}
```

#### 案例2：过滤

course表示所有课程，想请求课程分数大于80的课程组成的对象：

```js
const course = {
    math: 80,
    english: 85,
    chinese: 90
}
const res = Object.entries(course).filter(([key, val]) => val > 80)
console.log(res)
console.log(Object.fromEntries(res))
```

### 推荐阅读

- [proposal-object-from-entries](https://github.com/tc39/proposal-object-from-entries)