# JSON扩展

## JSON superset

什么是 JSON 超集？，简而言之就是让 ECMAScript 兼容所有JSON支持的文本。 ECMAScript 曾在标准 JSON.parse 部分阐明 JSON 确为其一个子集，但由于 JSON 内容可以正常包含 U+2028行分隔符 与 U+2029段分隔符，而ECMAScript 却不行。

##  增强能力

JSON.stringify 在 ES10 修复了对于一些超出范围的 Unicode 展示错误的问题。因为 JSON 都是被编码成 UTF-8，所以遇到 0xD800–0xDFFF 之内的字符会因为无法编码成 UTF-8 进而导致显示错误。在 ES10 它会用转义字符的方式来处理这部分字符而非编码的方式，这样就会正常显示了。

```js
// \uD83D\uDE0E  emoji 多字节的一个字符
console.log(JSON.stringify('\uD83D\uDE0E')) // 笑脸

// 如果我们只去其中的一部分  \uD83D 这其实是个无效的字符串
// 之前的版本 ，这些字符将替换为特殊字符，而现在将未配对的代理代码点表示为JSON转义序列
console.log(JSON.stringify('\uD83D')) // "\ud83d"
```

### 推荐阅读

- [Well-formed JSON.stringify](http://2ality.com/2019/01/well-formed-stringify.html)