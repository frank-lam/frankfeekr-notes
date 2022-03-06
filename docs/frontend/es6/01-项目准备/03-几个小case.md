我们通过几个案例，来对比ES6+语法新特性的魅力所在。

### 案例1：可选链

读取一个被连接对象的深层次的属性的值

```js
const user = {
    address: {
        street: 'xx街道',
        getNum() {
            return '80号'
        }
    }
}
```

ES5语法：

```js
const street = user && user.address && user.address.street
const num = user && user.address && user.address.getNum && user.address.getNum()
```

ES6+语法：

```js
const street = user?.address?.street
const num = user?.address?.getNum?.()
```

### 案例2：消除魔术字符串

魔术字符串指的是在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。风格良好的代码，应该尽量消除魔术字符串，改由含义清晰的变量代替。

ES5语法：

```js
function getArea(shape) {
    let area = 0
    switch (shape) {
        case 'Triangle':
            area = 1
            break
        case 'Circle':
            area = 2
            break
    }
    return area
}
getArea('Triangle')
```

ES6+语法：

```js
const shapeType = {
    triangle: Symbol(),
    circle: Symbol()
}
function getArea(shape) {
    let area = 0
    switch (shape) {
        case shapeType.triangle:
            area = 1
            break
        case shapeType.circle:
            area = 2
            break
    }
    return area
}
getArea(shapeType.triangle)
```

### 案例3：将类数组转化为数组

```js
const arrayLike = document.querySelectorAll('.item')
```

ES5语法

```js
Array.prototype.slice.call(arrayLike)
```

ES6+语法

```js
Array.from(arrayLike)
```

### 案例4：优雅的异步操作与解构赋值

ES5语法

```js
function getData (url) {
    ajax(url, function (res) {
        var data = res.data
        this.list = data
    })
}
```

ES6+语法

```js
async function getData (url) {
    const { data } = await axios.get(url)
    this.list = data
}
```