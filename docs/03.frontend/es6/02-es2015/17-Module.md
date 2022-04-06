# Module

## 模块化的发展

技术的诞生是为了解决某个问题，模块化也是。 随着前端的发展，web技术日趋成熟，js功能越来越多，代码量也越来越大。之前一个项目通常各个页面公用一个js，但是js逐渐拆分，项目中引入的js越来越多. 在js模块化诞生之前，开发者面临很多问题:

- 全局变量污染：各个文件的变量都是挂载到window对象上，污染全局变量。
- 变量重名：不同文件中的变量如果重名，后面的会覆盖前面的，造成程序运行错误。
- 文件依赖顺序：多个文件之间存在依赖关系，需要保证一定加载顺序问题严重。

模块化是指解决一个复杂问题时自顶向下逐层把系统划分成若干模块的过程， 有多种属性，分别反映其内部特性。百度百科中，模块化的定义是： 模块化是一种处理复杂系统分解为更好的可管理模块的方式。 简单的说，把一个复杂的东西分解成多个甚至多层次的组成部分，以一种良好的机制管理起来，就可以认为是模块化。而对于软件开发来说，函数（过程）就是最常见也是最基本的模块之一。

我觉得用乐高积木来比喻模块化再好不过了。每个积木都是固定的颜色形状，想要组合积木必须使用积木凸起和凹陷的部分进行连接，最后多个积木累积成你想要的形状。

模块化其实是一种规范，一种约束，这种约束会大大提升开发效率。将每个js文件看作是一个模块，每个模块通过固定的方式引入，并且通过固定的方式向外暴露指定的内容。 按照js模块化的设想，一个个模块按照其依赖关系组合，最终插入到主程序中。

我们梳理一下模块化的发展情况：

无模块化-->CommonJS规范-->AMD规范-->CMD规范-->ES6模块化

1、CommonJS规范 Node中模块化规范

Commonjs的诞生给js模块化发展有了重要的启发，Commonjs非常受欢迎， 但是局限性很明显：Commonjs基于Node原生api在服务端可以实现模块同步加载， 但是仅仅局限于服务端，客户端如果同步加载依赖的话时间消耗非常大，所以需要一个 在客户端上基于Commonjs但是对于加载模块做改进的方案，于是AMD规范诞生了。

2、AMD规范, 异步模块定义, 允许指定回调函数，AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。它采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到所有依赖加载完成之后（前置依赖），这个回调函数才会运行。

3、CMD规范，同样是受到Commonjs的启发，国内（阿里）诞生了一个CMD（Common Module Definition）规范。该规范借鉴了Commonjs的规范与AMD规范，在两者基础上做了改进。

CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。

AMD 推崇依赖前置、提前执行 CMD推崇依赖就近、延迟执行。

4、 到了2015年，ES6规范中，终于将模块化纳入JavaScript标准，从此js模块化被官方扶正，也是未来js的标准. 在ES6中，我们可以使用 import 关键字引入模块，通过 exprot 关键字导出模块，功能较之于前几个方案更为强大，也是我们所推崇的， 但是由于ES6目前无法在浏览器中执行，所以，我们只能通过babel将不被支持的import编译为当前受到广泛支持的 require。

## export

模块功能主要由两个命令构成：export和import。export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。

一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量。

1. 导出变量或者常量

```js
  export const name = 'hello'
  export let addr = 'BeiJing City'
  export var list = [1, 2, 3]
```

或者

```js
  const name = 'hello'
  let addr = 'BeiJing City'
  var list = [1, 2, 3]
  export {
      name,
      addr,
      list
  }
```

1. 导出函数

```js
  export function say(content) {
      console.log(content)
  }
  export function run() {
      console.log('run')
  }
```

或者

```js
  const say = (content) => {
      console.log(content)
  }
  let run = () => {
      console.log('run')
  }
  export {
      say,
      run
  }
```

1. 导出 Object

```js
  export ({
      code: 0,
      message: 'success'
  })
```

或者

```js
  let data = {
      code: 0,
      message: 'success'
  }
  export {
      data
  }
```

1. 导出 Class

```js
  class Test {
      constructor() {
          this.id = 2
      }
  }
  export {
      Test
  }
```

或者

```js
  export class Test {
      constructor() {
          this.id = 2
      }
  }
```

## as

如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名。

```js
  const name = 'hello'
  let addr = 'BeiJing City'
  var list = [1, 2, 3]
  export {
      name as cname,
      addr as caddr,
      list
  }
```

## export default

使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。但是，用户肯定希望快速上手，未必愿意阅读文档，去了解模块有哪些属性和方法。

为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到export default命令，为模块指定默认输出。

```js
  const name = 'hello'
  let addr = 'BeiJing City'
  var list = [1, 2, 3]
  export {
      name as cname,
      addr as caddr
  }
  export default list
```

## import

使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块。

1. 直接导入

假设导出模块 A 是这样的：

```js
  const name = 'hello'
  let addr = 'BeiJing City'
  var list = [1, 2, 3]
  export {
      name as cname,
      addr as caddr
  }
  export default list
```

则导入：

```js
  import list, {
      cname,
      caddr
  } from A
```

1. 修改导入名称

```js
  import list, {
      cname as name,
      caddr
  } from A
```

1. 批量导入

```js
  import list, * as mod from A
  console.log(list)
  console.log(mod.cname)
  console.log(mod.caddr)
```

### 推荐阅读

- [Modules](https://exploringjs.com/es6/ch_modules.html)
- [import, export, default cheatsheet](https://hackernoon.com/import-export-default-require-commandjs-javascript-nodejs-es6-vs-cheatsheet-different-tutorial-example-5a321738b50f)
- [ECMAScript 6 modules: the final syntax](https://2ality.com/2014/09/es6-modules-final.html)