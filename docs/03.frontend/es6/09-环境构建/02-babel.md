# babel

Babel 是一个编译器（输入源码 => 输出编译后的代码）。

官网 https://www.babeljs.cn/

安装：

```text
npm i -D babel-loader @babel/core @babel/preset-env 
```

配置：

```js
module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        'useBuiltIns': 'entry'
                    }]
                ]
            }
        }
    }]
},
```