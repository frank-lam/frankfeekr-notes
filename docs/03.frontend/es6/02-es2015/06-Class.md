# Class

> Javascript是一种基于对象（object-based）的语言，你遇到的所有东西几乎都是对象。但是，它又不是一种真正的面向对象编程（OOP）语言，因为它的语法中没有class（类）。

这是摘自阮一峰老师的博客，这句话放在 ES5 可以说不为过，然而到了 ES6 这么说就已经不严谨了。因为 ES6 中已经有了专属的 class 语法了。

有的同学喜欢函数式的编程方式，有的同学喜欢面向对象的编程思维，我们今天不论长短，重点讲述怎么使用 ES6 的 class 语法完成面向对象的开发。

对于面向对象编程而言，更关注类的声明、属性、方法、静态方法、继承、多态、私有属性。

## 声明类

首先我们要先来说明在 JavaScript 世界里如何声明一个 “类”。在 ES6 之前大家都是这么做的：

```js
let Animal = function(type) {
    this.type = type
    this.walk = function() {
        console.log( `I am walking` )
    }
}

let dog = new Animal('dog')
let monkey = new Animal('monkey')
```

在上述代码中，我们定义了一个叫 Animal 的类，类中声明了一个属性 type、一个方法 walk；然后通过 new Animal 这个类生成实例，完成了类的定义和实例化。当然你也可以这样写：

```js
let Animal = function(type) {
    this.type = type
}

Animal.prototype.walk = function() {
    console.log( `I am walking` )
}

let dog = new Animal('dog')
let monkey = new Animal('monkey')
```

在 ES6 中把类的声明专业化了，不在用 function 的方式了，请看：

```js
class Animal {
    constructor(type) {
        this.type = type
    }
    walk() {
        console.log( `I am walking` )
    }
}
let dog = new Animal('dog')
let monkey = new Animal('monkey')
```

很明显，从定义上就很专业了，有构造函数、方法，但是 ES6 增加了新的数据类型 class 吗？

```js
console.log(typeof Animal) //function
```

可以发现 class 的类型还是 function，和 ES5 貌似并没有什么区别，那么 class 中定义的方法在哪呢？我们知道只要是函数，就一定会有 prototype 对象。那么类的方法和 prototype 对象有什么关系呢？

```js
console.log(Animal.prototype)
// {constructor: ƒ, walk: ƒ}
//   constructor: class Animal
//   walk: ƒ walk()
//   __proto__:
//   constructor: ƒ Object()
//   hasOwnProperty: ƒ hasOwnProperty()
//   isPrototypeOf: ƒ isPrototypeOf()
//   propertyIsEnumerable: ƒ propertyIsEnumerable()
//   toLocaleString: ƒ toLocaleString()
//   toString: ƒ toString()
//   valueOf: ƒ valueOf()
//   __defineGetter__: ƒ __defineGetter__()
//   __defineSetter__: ƒ __defineSetter__()
//   __lookupGetter__: ƒ __lookupGetter__()
//   __lookupSetter__: ƒ __lookupSetter__()
//   get __proto__: ƒ __proto__()
//   set __proto__: ƒ __proto__()
```

可以看出在 Animal.prototype 对象上有两个方法，一个是构造函数（constructor）、一个是自定义的方法（walk）。这是不是和 ES5 的第二种写法一模一样？我们再来看下属性，在 ES5 中有个 API 用来判断对象的自有属性（hasOwnProperty）。

```js
console.log(dog.hasOwnProperty('type')) //true
```

这个表现也和 ES5 中直接使用 function 定义类的方式相同，所以得出一个结论：class 的方式是 function 方式的语法糖。

## Setters & Getters

对于类中的属性，可以直接在 constructor 中通过 this 直接定义，还可以直接在类的顶层来定义：

```js
class Animal {
    constructor(type, age) {
        this.type = type
        this._age = age
    }
    get age() {
        return this._age
    }
    set age(val) {
        this._age = val
    }
}
```

这个代码演示了，通过 get/set 来给类定一个属性，不过貌似没有说服力。因为 age 和 `_age` 都是类的属性，而且是相同的含义这样做感觉没有实际用途。但是如果一个属性是个只读的呢？

```js
class Animal {
    constructor(type) {
        this.type = type
    }
    get addr() {
        return '北京动物园'
    }
}
```

毋庸赘述，大家都能看出来含义。再来看下如下的应用场景：

```js
class CustomHTMLElement {
    constructor(element) {
        this.element = element
    }
    get html() {
        return this.element.innerHTML
    }
    set html(value) {
        this.element.innerHTML = value
    }
}
```

利用 set/get 实现了对 element.innerHTML 的简单封装。

可是，有时候我们真的需要设置一个私有属性(闭包)，然后通过一定的规则来限制对它的修改，利用 set/get就可以轻松实现。

```js
let #age = 1
class Animal {
    constructor(type) {
        this.type = type
    }
    get age() {
        return #age
    }
    set age(val) {
        if (val > 0 && val < 10) {
            #age = val
        }
    }
}
```

## 静态方法

静态方法是面向对象最常用的功能，在 ES5 中利用 function 实现的类是这样实现一个静态方法的。

```js
let Animal = function(type) {
    this.type = type
    this.walk = function() {
        console.log( `I am walking` )
    }
}

Animal.eat = function(food) {
    console.log( `I am eating` )
}
```

在 ES6 中使用 static 的标记是不是静态方法，代码如下：

```js
class Animal {
    constructor(type) {
        this.type = type
    }
    walk() {
        console.log( `I am walking` )
    }
    static eat() {
        console.log( `I am eating` )
    }
}
```

有没有很清爽，代码可读性一下子就上来了。

## 继承

面向对象只所以可以应对复杂的项目实现，很大程度上要归功于继承。如果对继承概念不熟悉的同学，可以自行查询。在 ES5 中怎么实现继承呢？

```js
// 定义父类
let Animal = function(type) {
    this.type = type
}
// 定义方法
Animal.prototype.walk = function() {
    console.log( `I am walking` )
}
// 定义静态方法
Animal.eat = function(food) {
    console.log( `I am eating` )
}
// 定义子类
let Dog = function() {
    // 初始化父类
    Animal.call(this, 'dog')
    this.run = function() {
        console.log('I can run')
    }
}
// 继承
Dog.prototype = Animal.prototype
```

从代码上看，是不是很繁琐？而且阅读性也较差。再看看 ES6 是怎么解决这些问题的：

```js
class Animal {
    constructor(type) {
        this.type = type
    }
    walk() {
        console.log( `I am walking` )
    }
    static eat() {
        console.log( `I am eating` )
    }
}

class Dog extends Animal {
  constructor () {
    super('dog')
  }
  run () {
    console.log('I can run')
  }
}
```

虽然 ES6 在类的定义上仅是 ES5 定义类的语法糖，但是从开发者的角度而言，开发更有效率了，代码可阅读性大大提升。

### 练习

1. 请实现一个堆栈类，具备 push、pop 功能。
2. 请回忆下自己在业务中有哪些场景可以用类来实现。

### 推荐阅读

- [类](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)
- [Classes (ES6) Sample](https://googlechrome.github.io/samples/classes-es6/)
- [ES6 class](https://www.kancloud.cn/kancloud/you-dont-know-js-this-object-prototypes/516675)
- [Classes](https://exploringjs.com/es6/ch_classes.html#sec_private-data-for-classes)