# String扩展

## Unicode表示法

ES6 加强了对 Unicode 的支持，允许采用\uxxxx形式表示一个字符，其中xxxx表示字符的 Unicode 码点。

```js
"\u0061"
// "a"
```

但是，这种表示法只限于码点在\u0000~\uFFFF之间的字符。超出这个范围的字符，必须用两个双字节的形式表示。

```js
"\uD842\uDFB7"
// "𠮷"

"\u20BB7"
// " 7"
```

上面代码表示，如果直接在\u后面跟上超过0xFFFF的数值（比如\u20BB7），JavaScript 会理解成\u20BB+7。由于\u20BB是一个不可打印字符，所以只会显示一个空格，后面跟着一个7。

ES6 对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符。

```js
"\u{20BB7}"
// "𠮷"
```

有了这种表示法之后，JavaScript 共有 6 种方法可以表示一个字符。

```js
'\z' === 'z' // true
'\172' === 'z' // true
'\x7A' === 'z' // true
'\u007A' === 'z' // true
'\u{7A}' === 'z' // true
```

## 遍历器接口

ES6 为字符串添加了遍历器接口，详见Iterator一节，使得字符串可以被for...of循环遍历。

```js
for (let item of 'imooc') {
    console.log(item)
}
```

## 模板字符串

在 ES6 之前对字符串的处理是相当的麻烦，看如下场景：

**1. 字符串很长要换行**

字符串很长包括几种情形一个是开发时输入的文本内容，一个是接口数据返回的文本内容。如果对换行符处理不当，就会带来异常。

**2. 字符串中有变量或者表达式**

如果字符串不是静态内容，往往是需要加载变量或者表达式，这个也是很常见的需求。之前的做法是字符串拼接：

```js
  var a = 20
  var b = 10
  var c = 'JavaScript'
  var str = 'My age is ' + (a + b) + ' and I love ' + c
  console.log(str)
```

如果字符串有大量的变量和表达式，这个拼接简直是噩梦。

**3. 字符串中有逻辑运算**

我们通常写代码都是有逻辑运算的，对于字符串也是一样，它包含的内容不是静态的，通常是根据一定的规则在动态变化。

```js
  var retailPrice = 20
  var wholesalePrice = 16
  var type = 'retail'

  var showTxt = ''

  if (type === 'retail') {
      showTxt += '您此次的购买单价是：' + retailPrice
  } else {
      showTxt += '您此次的批发价是：' + wholesalePrice
  }
```

看到这样的代码一定会感到很熟悉，通常大家的做法是使用上述的字符串拼接+逻辑判断，或者采用字符串模板类库来操作。

### String Literals

看了上述的应用场景，就要引入 String Literals 话题，这个是用来解决字符串拼接问题，从 ES6 开始可以这样定义字符串了。

```js
`string text` 

`string text line 1
 string text line 2`

`string text ${expression} string text` 
```

在这里你可以任意插入变量或者表达式，只要用 ```${}` ``包起来就好。

注意

这里的符号是反引号，也就是数字键 1 左边的键，不是单引号或者双引号

这样就可以轻松解决字符串包含变量或者表达式的问题了，对于多行的字符串，之前是这样处理

```js
console.log('string text line 1\n' +
    'string text line 2')
// "string text line 1
// string text line 2"
```

现在可以这样做了

```js
console.log(`string text line 1
string text line 2`)
// "string text line 1
// string text line 2"
```

完全不需要 ```\n` ``来参与。

### Tag Literals

前面的字符串字面量解决了字符串拼接的问题，对于包含复杂逻辑的字符串并不是简单的表达式能搞定的。所以需要另一种解决方案：Tag Literals，还是看上述那个例子:

```js
var retailPrice = 20
var wholesalePrice = 16
var type = 'retail'

var showTxt = ''

if (type === 'retail') {
    showTxt += '您此次的购买单价是：' + retailPrice
} else {
    showTxt += '您此次的批发价是：' + wholesalePrice
}
```

现在可以定义一个 Tag 函数，然后用这个 Tag 函数来充当一个模板引擎：

```js
function Price(strings, type) {
    let s1 = strings[0]
    const retailPrice = 20
    const wholesalePrice = 16
    let txt = ''
    if (type === 'retail') {
        txt = `购买单价是：${retailPrice}` 
    } else {
        txt = `批发价是：${wholesalePrice}` 
    }
    return `${s1}${txt}` 
}

let showTxt = Price `您此次的${'retail'}` 

console.log(showTxt) //您此次的购买单价是：20
```

TIP

strings 参数指的是 Tag 函数后面被变量分割开的字符串集合，type 参数是对应第一个变量，Tag 函数可以有多个 type 类似的参数

## 扩展方法

### 

用于从 Unicode 码点返回对应字符，并且可以识别大于0xFFFF的字符。

```js
// ES5
console.log(String.fromCharCode(0x20BB7))

// ES6
console.log(String.fromCodePoint(0x20BB7))
```

### 

ES5中可以使用indexOf方法来判断一个字符串是否包含在另一个字符串中，indexOf返回出现的下标位置，如果不存在则返回-1。

```js
const str = 'imooc'

console.log(str.indexOf('mo'))
```

ES6提供了includes方法来判断一个字符串是否包含在另一个字符串中，返回boolean类型的值。

```js
const str = 'imooc'

console.log(str.includes('mo'))
```

### 

判断参数字符串是否在原字符串的头部, 返回boolean类型的值。

```js
const str = 'imooc'

console.log(str.startsWith('im'))
```

### 

判断参数字符串是否在原字符串的尾部, 返回boolean类型的值。

```js
const str = 'imooc'

console.log(str.endsWith('mooc'))
```

### 

repeat方法返回一个新字符串，表示将原字符串重复n次。

```js
const str = 'imooc'

const newStr = str.repeat(10)

console.log(newStr)
```

### 推荐阅读

- [模板字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings)
- [A guide to JavaScript Template Literals](https://flaviocopes.com/javascript-template-literals/)