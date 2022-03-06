# Array

在 ES6 中新增了很多实用的原生 API，方便开发者对 Array 的操控性更强，如 for...of、from、of、fill、find、findIndex等。

## [#](http://es.xiecheng.live/es6/array.html#es5-中数组遍历方式)ES5 中数组遍历方式

```js
let arr = [1, 2, 3, 2, 4]
```

### [#](http://es.xiecheng.live/es6/array.html#for循环)for循环

```js
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
```

后来语法有所升级，到 ES5 遍历数组的 API 多了起来，其中有 forEach、every、filter等，同样的功能可以用 forEach 、 map 、 every 等方法来实现。

### [#](http://es.xiecheng.live/es6/array.html#foreach-没有返回值-只是针对每个元素调用func)forEach() 没有返回值，只是针对每个元素调用func

```js
arr.forEach(function(elem, index, array) {
    if (arr[i] == 2) {
        continue
    }
    console.log(elem, index)
})
```

这个语法看起来要简洁很多，不需要通过索引去访问数组项，然而它的缺点也是很明显，不支持 break、continue 等。

```js
[1, 2, 3, 4, 5].forEach(function(i) {
    if (i === 2) {
        return;
    } else {
        console.log(i)
    }
})
```

这段代码的"本意"是从第一个元素开始遍历，遇到数组项 2 之后就结束遍历，不然打印出所遍历过的数值项。可是，事实让你大跌眼镜，因为它的输出是 1, 3, 4, 5。

注意

forEach 的代码块中不能使用 break、continue，它会抛出异常。

### [#](http://es.xiecheng.live/es6/array.html#map-返回新的数组-每个元素为调用func的结果)map() 返回新的数组，每个元素为调用func的结果

```js
let result = arr.map(function(value) {
    value += 1
    console.log(value)
    return value
})
console.log(arr, result)
```

### [#](http://es.xiecheng.live/es6/array.html#filter-返回符合func条件的元素数组)filter() 返回符合func条件的元素数组

```js
let result = arr.filter(function(value) {
    console.log(value)
    return value == 2
})
console.log(arr, result)
```

### [#](http://es.xiecheng.live/es6/array.html#some-返回boolean-判断是否有元素符合func条件)some() 返回boolean，判断是否有元素符合func条件

```js
let result = arr.some(function(value) {
    console.log(value)
    return value == 4
})
console.log(arr, result)
```

### [#](http://es.xiecheng.live/es6/array.html#every-返回boolean-判断每个元素都符合func条件)every() 返回boolean，判断每个元素都符合func条件

```js
let result = arr.every(function(value) {
    console.log(value)
    return value == 2
})
console.log(arr, result)
```

同样完成刚才的目标，使用 every 遍历就可以做到 break 那样的效果，简单的说 return false 等同于 break，return true 等同于 continue。如果不写，默认是 return false。

注意

every 的代码块中不能使用 break、continue，它会抛出异常。

### [#](http://es.xiecheng.live/es6/array.html#reduce-接收一个函数作为累加器)reduce() 接收一个函数作为累加器

```js
let sum = arr.reduce(function(prev, cur, index, array) {
    return prev + cur
}, 0)
console.log(sum)
let max = arr.reduce(function(prev, cur) {
    return Math.max(prev, cur)
})
console.log(max)
let res = arr.reduce(function(prev, cur) {
    prev.indexOf(cur) == -1 && prev.push(cur)
    return prev
}, [])
console.log(res)
```

有的同学会说，还有 for...in 可以遍历数组。

```js
for (var index in array) {
    console.log(array[index]);
}
```

说的没错，for...in 确实可以遍历数组，而且还支持 continue、break等功能，但是它真的没有瑕疵吗？如果 array 有自定义属性，你发现也会被遍历出来(显然不合理)。这是因为 for...in 是为遍历对象创造的（{a:1, b:2}），不是为数组设计的。

注意

for...in不能用于遍历数组。
for...in代码块中不能有 return，不然会抛出异常。

## [#](http://es.xiecheng.live/es6/array.html#es6-中数组遍历方式-for-of)ES6 中数组遍历方式 for...of

接下来就要步入正题，说说我们今天的主角：for...of。

```js
for (let val of [1, 2, 3]) {
    console.log(val);
}
// 1,2,3
```

上述代码中轻松实现了数组的遍历，乍一看没有绝对它有非常强大之处。我们不得不强调下，for...of 的来历和作用。

```js
for (variable of iterable) {

}
```

看下这个伪代码，of 后面是 iterable 既不是 for 循环规定的 array，也不是 for...in 规定的 Object，而是 iterable。如果查查 iterable 的含义就很直观的感受到 for...of 遍历的是一切可遍历的元素（数组、对象、集合）等，不要小瞧这个功能，因为在 ES6 中允许开发者自定义遍历，换句话说任何数据结构都可以自定义一个遍历，这个遍历是不能被 for、for...in 理解和实现的。很抽象吧？Iterator 是如何实现的这是ES6的新增语法，后面课程中 `Iterator` 一节会讲。

```js
for (let item of arr) {
    console.log(item)
}

for (let item of arr.values()) {
    console.log(item)
}

for (let item of arr.keys()) {
    console.log(item)
}

for (let [index, item] of arr.entries()) {
    console.log(index, item)
}
```

TIP

for...of是支持 break、continue、return的，所以在功能上非常贴近原生的 for。

## [#](http://es.xiecheng.live/es6/array.html#array-from)Array.from()

数组是开发中经常用到的数据结构，它非常好用。在 JavaScript 的世界里有些对象被理解为数组，然而缺不能使用数组的原生 API，比如函数中的 arguments、DOM中的 NodeList等。当然，还有一些可遍历的对象，看上去都像数组却不能直接使用数组的 API，因为它们是伪数组（Array-Like）。要想对这些对象使用数组的 API 就要想办法把它们转化为数组，传统的做法是这样的：

```js
let args = [].slice.call(arguments);
let imgs = [].slice.call(document.querySelectorAll('img'));
```

基本原理是使用 call 将数组的 api 应用在新的对象上，换句话说是利用改变函数的上下文来间接使用数组的 api。在 ES6 中提供了新的 api 来解决这个问题，就是 Array.from，代码如下：

```js
let args = Array.from(arguments);
let imgs = Array.from(document.querySelectorAll('img'));
```

TIP

伪数组具备两个特征，1. 按索引方式储存数据 2. 具有length属性；如：

```js
let arrLike = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
}
```

### [#](http://es.xiecheng.live/es6/array.html#惊喜)惊喜

难道 Array.from 只能用来将伪数组转换成数组吗，还有其他用法吗？这要来看下 Array.from 的几个参数：

**语法：**`Array.from(arrayLike[, mapFn[, thisArg]])`

|   参数    |                         含义                         | 必选 |
| :-------: | :--------------------------------------------------: | :--: |
| arrayLike |        想要转换成数组的伪数组对象或可迭代对象        |  Y   |
|   mapFn   | 如果指定了该参数，新数组中的每个元素会执行该回调函数 |  N   |
|  thisArg  |      可选参数，执行回调函数 mapFn 时 this 对象       |  N   |

看了这几个参数至少能看到 Array.from 还具备 map 的功能，比如我们想初始化一个长度为 5 的数组，每个数组元素默认为 1，之前的做法是这样的：

```js
let arr = Array(6).join(' ').split('').map(item => 1)
// [1,1,1,1,1]
```

这样写虽然也能实现，但是用起来比较繁琐，使用 Array.from 就会简洁很多。

```js
Array.from({
    length: 5
}, function() {
    return 1
})
```

这个代码看起来既简洁还容易理解，有咩有？

## [#](http://es.xiecheng.live/es6/array.html#array-of)Array.of()

Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。

Array.of() 和 Array 构造函数之间的区别在于处理整数参数：Array.of(7) 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个长度为7的空数组（注意：这是指一个有7个空位(empty)的数组，而不是由7个undefined组成的数组）。

```js
Array.of(7); // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7); // [ , , , , , , ]
Array(1, 2, 3); // [1, 2, 3]
```

**语法：**`Array.of(element0[, element1[, ...[, elementN]]])`

|   参数   |                   含义                   | 必选 |
| :------: | :--------------------------------------: | :--: |
| elementN | 任意个参数，将按顺序成为返回数组中的元素 |  Y   |

## [#](http://es.xiecheng.live/es6/array.html#array-prototype-fill)Array.prototype.fill()

fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

```js
let array = [1, 2, 3, 4]
array.fill(0, 1, 2)
// [1,0,3,4]
```

这个操作是将 array 数组的第二个元素（索引为1）到第三个元素（索引为2）内的数填充为 0，不包括第三个元素，所以结果是 [1, 0, 3, 4]

### [#](http://es.xiecheng.live/es6/array.html#技巧)技巧

我们前面有提到用 Array.from 初始化为一个长度固定，元素为指定值的数组。如果用 fill 是否可以达到同样的效果呢？

```js
Array(5).fill(1)
// [1,1,1,1,1]
```

TIP

fill 不具备遍历的功能，它是通过指定要操作的索引范围来进行，通过这道题目可以看出不指定索引会对所有元素进行操作

**语法：**`arr.fill(value[, start[, end]])`

| 参数  |              含义              | 必选 |
| :---: | :----------------------------: | :--: |
| value |      用来填充数组元素的值      |  Y   |
| start |      起始索引，默认值为0       |  N   |
|  end  | 终止索引，默认值为 this.length |  N   |

## [#](http://es.xiecheng.live/es6/array.html#array-prototype-find)Array.prototype.find()

find() 方法返回数组中满足提供的测试函数的第一个元素的值，否则返回 undefined。

```js
let array = [5, 12, 8, 130, 44];

let found = array.find(function(element) {
    return element > 10;
});

console.log(found);
// 12
```

**语法：**`arr.find(callback[, thisArg])`

|   参数   |                             含义                             | 必选 |
| :------: | :----------------------------------------------------------: | :--: |
| callback | 在数组每一项上执行的函数，接收 3 个参数，element、index、array |  Y   |
| thisArg  |                  执行回调时用作 this 的对象                  |  N   |

## [#](http://es.xiecheng.live/es6/array.html#array-prototype-findindex)Array.prototype.findIndex()

findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。其实这个和 find() 是成对的，不同的是它返回的是索引而不是值。

```js
let array = [5, 12, 8, 130, 44];

let found = array.find(function(element) {
    return element > 10;
});

console.log(found);
// 1
```

**语法：**`arr.findIndex(callback[, thisArg])`

|   参数   |                             含义                             | 必选 |
| :------: | :----------------------------------------------------------: | :--: |
| callback | 在数组每一项上执行的函数，接收 3 个参数，element、index、array |  Y   |
| thisArg  |                  执行回调时用作 this 的对象                  |  N   |

## [#](http://es.xiecheng.live/es6/array.html#array-prototype-copywithin)Array.prototype.copyWithin()

在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。

**语法：**`arr.copyWithin(target, start = 0, end = this.length)`

|  参数  |                             含义                             | 必选 |
| :----: | :----------------------------------------------------------: | :--: |
| target |          从该位置开始替换数据。如果为负值，表示倒数          |  Y   |
| start  | 从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算 |  N   |
|  end   | 到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算 |  N   |

```js
let arr = [1, 2, 3, 4, 5]
console.log(arr.copyWithin(1, 3))
// [1, 4, 5, 4, 5]
```

### [#](http://es.xiecheng.live/es6/array.html#推荐阅读)推荐阅读

- [Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)