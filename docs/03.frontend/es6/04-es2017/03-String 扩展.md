# String 扩展

在 ES8 中 String 新增了两个实例函数 String.prototype.padStart 和 String.prototype.padEnd，允许将空字符串或其他字符串添加到原始字符串的开头或结尾。

## 

把指定字符串填充到字符串头部，返回新字符串。

语法：

> str.padStart(targetLength [, padString])

|     参数     |                      含义                      | 必选 |
| :----------: | :--------------------------------------------: | :--: |
| targetLength |             目标字符要保持的长度值             |  Y   |
|  padString   | 如果目标字符的长度不够需要的补白字符，默认为空 |  N   |

```js
const str = 'imooc'
console.log(str.padStart(8, 'x'))
console.log(str.padEnd(8, 'y'))
console.log(str.padStart(8))
```

### 场景1：日期格式化

希望把当前日期格式化城：yyyy-mm-dd的格式：

```js
const now = new Date()
const year = now.getFullYear()
const month = (now.getMonth() + 1).toString().padStart(2, '0')
const day = (now.getDate()).toString().padStart(2, '0')
console.log(year, month, day)
console.log( `${year}-${month}-${day}` )
```

### 场景2：数字替换

```js
// 数字替换，比如手机号，身份证号
const tel = '13012345678'
const newTel = tel.slice(-4).padStart(tel.length, '*')
console.log(newTel) // *******5678
```

## 

方法会用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。 语法：

> str.padEnd(targetLength [, padString])

|     参数     |                      含义                      | 必选 |
| :----------: | :--------------------------------------------: | :--: |
| targetLength |             目标字符要保持的长度值             |  Y   |
|  padString   | 如果目标字符的长度不够需要的补白字符，默认为空 |  N   |

```js
const str1 = 'I am learning es in imooc'
console.log(str1.padEnd(30, '.'))
// I am learning es in imooc.....

const str2 = '200'
console.log(str2.padEnd(5))
// "200  "
```

### 场景：时间戳统一长度

在JS前端我们处理时间戳的时候单位都是ms毫秒，但是，后端同学返回的时间戳则不一样是毫秒，可能只有10位，以s秒为单位。所以，我们在前端处理这个时间戳的时候，保险起见，要先做一个13位的补全，保证单位是毫秒。

```js
// 伪代码
console.log(new Date().getTime()) // 时间戳 13位的
timestamp = +String(timestamp).padEnd(13, '0')
```

### 推荐阅读

- [String.prototype.padStart()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
- [String.prototype.padEnd()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)