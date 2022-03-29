"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7500],{3905:function(e,n,t){t.d(n,{Zo:function(){return f},kt:function(){return p}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},f=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),m=c(t),p=o,d=m["".concat(l,".").concat(p)]||m[p]||u[p]||a;return t?r.createElement(d,i(i({ref:n},f),{},{components:t})):r.createElement(d,i({ref:n},f))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9523:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={},l="for await of",c={unversionedId:"frontend/es6/es2018/for await of",id:"frontend/es6/es2018/for await of",title:"for await of",description:"\u5f02\u6b65\u8fed\u4ee3\u5668(for-await-of)\uff1a\u5faa\u73af\u7b49\u5f85\u6bcf\u4e2aPromise\u5bf9\u8c61\u53d8\u4e3aresolved\u72b6\u6001\u624d\u8fdb\u5165\u4e0b\u4e00\u6b65\u3002",source:"@site/docs/frontend/es6/05-es2018/01-for await of.md",sourceDirName:"frontend/es6/05-es2018",slug:"/frontend/es6/es2018/for await of",permalink:"/docs/frontend/es6/es2018/for await of",editUrl:"https://github.com/frank-lam/frankfeekr-notes/tree/master/docs/frontend/es6/05-es2018/01-for await of.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"frontend_es6",previous:{title:"ECMAScript 2018 (ES9)",permalink:"/docs/category/ecmascript-2018-es9-1"},next:{title:"RegExp Updates",permalink:"/docs/frontend/es6/es2018/RegExp Updates"}},f={},u=[{value:"\u63a8\u8350\u9605\u8bfb",id:"\u63a8\u8350\u9605\u8bfb",level:3}],m={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"for-await-of"},"for await of"),(0,a.kt)("p",null,"\u5f02\u6b65\u8fed\u4ee3\u5668(for-await-of)\uff1a\u5faa\u73af\u7b49\u5f85\u6bcf\u4e2aPromise\u5bf9\u8c61\u53d8\u4e3aresolved\u72b6\u6001\u624d\u8fdb\u5165\u4e0b\u4e00\u6b65\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u77e5\u9053 for...of \u662f\u540c\u6b65\u8fd0\u884c\u7684\uff0c\u6709\u65f6\u5019\u4e00\u4e9b\u4efb\u52a1\u96c6\u5408\u662f\u5f02\u6b65\u7684\uff0c\u90a3\u8fd9\u79cd\u904d\u5386\u600e\u4e48\u529e\u5462\uff1f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function Gen(time) {\n    return new Promise(function(resolve, reject) {\n        setTimeout(function() {\n            resolve(time)\n        }, time)\n    })\n}\n\nasync function test() {\n    let arr = [Gen(2000), Gen(100), Gen(3000)]\n    for (let item of arr) {\n        console.log(Date.now(), item.then(console.log))\n    }\n}\n\ntest()\n// 1560090138232 Promise {<pending>}\n// 1560090138234 Promise {<pending>}\n// 1560090138235 Promise {<pending>}\n// 100\n// 2000\n// 3000\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u5199\u4e86\u51e0\u4e2a\u5c0f\u4efb\u52a1\uff0c\u5206\u522b\u662f 2000ms \u3001100ms\u30013000ms\u540e\u4efb\u52a1\u7ed3\u675f\u3002\u5728\u4e0a\u8ff0\u904d\u5386\u7684\u8fc7\u7a0b\u4e2d\u53ef\u4ee5\u770b\u5230\u4e09\u4e2a\u4efb\u52a1\u662f\u540c\u6b65\u542f\u52a8\u7684\uff0c\u7136\u540e\u8f93\u51fa\u4e0a\u4e5f\u4e0d\u662f\u6309\u4efb\u52a1\u7684\u6267\u884c\u987a\u5e8f\u8f93\u51fa\u7684\uff0c\u8fd9\u663e\u7136\u4e0d\u592a\u7b26\u5408\u6211\u4eec\u7684\u8981\u6c42\u3002"),(0,a.kt)("p",null,"\u806a\u660e\u7684\u540c\u5b66\u4e00\u5b9a\u80fd\u60f3\u8d77\u6765 await \u7684\u4f5c\u7528\uff0c\u5b83\u53ef\u4ee5\u4e2d\u65ad\u7a0b\u5e8f\u7684\u6267\u884c\u76f4\u5230\u8fd9\u4e2a Promise \u5bf9\u8c61\u7684\u72b6\u6001\u53d1\u751f\u6539\u53d8\uff0c\u6211\u4eec\u4fee\u6539\u4e0a\u9762\u7684\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function Gen(time) {\n    return new Promise(function(resolve, reject) {\n        setTimeout(function() {\n            resolve(time)\n        }, time)\n    })\n}\n\nasync function test() {\n    let arr = [Gen(2000), Gen(100), Gen(3000)]\n    for (let item of arr) {\n        console.log(Date.now(), await item.then(console.log))\n    }\n}\n\ntest()\n// 2000\n// 1560091834772 undefined\n// 100\n// 1560091836774 undefined\n// 3000\n// 1560091836775 undefined\n")),(0,a.kt)("p",null,"\u4ece\u8fd4\u56de\u503c\u770b\u786e\u5b9e\u662f\u6309\u7167\u4efb\u52a1\u7684\u5148\u540e\u987a\u5e8f\u8fdb\u884c\u7684\uff0c\u5176\u4e2d\u539f\u7406\u4e5f\u6709\u8bf4\u660e\u662f\u5229\u7528\u4e86 await \u4e2d\u65ad\u7a0b\u5e8f\u7684\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u5728 ES9 \u4e2d\u4e5f\u53ef\u4ee5\u7528 for...await...of \u7684\u8bed\u6cd5\u6765\u64cd\u4f5c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function Gen(time) {\n    return new Promise(function(resolve, reject) {\n        setTimeout(function() {\n            resolve(time)\n        }, time)\n    })\n}\n\nasync function test() {\n    let arr = [Gen(2000), Gen(100), Gen(3000)]\n    for await (let item of arr) {\n        console.log(Date.now(), item)\n    }\n}\n\ntest()\n// 1560092345730 2000\n// 1560092345730 100\n// 1560092346336 3000\n")),(0,a.kt)("p",null,"\u4ece\u8fd9\u4e2a\u7ed3\u679c\u6765\u770b\u548c\u7b2c\u4e8c\u79cd\u5199\u6cd5\u6548\u679c\u5dee\u4e0d\u591a\uff0c\u4f46\u662f\u5de5\u4f5c\u539f\u7406\u786e\u5b8c\u5168\u4e0d\u540c\uff0c\u91cd\u70b9\u89c2\u5bdf\u4e0b\u8f93\u51fa\u7684\u65f6\u95f4\uff08Chrome Console\uff09, \u7b2c\u4e8c\u79cd\u5199\u6cd5\u662f\u4ee3\u7801\u5757\u4e2d\u6709 await \u5bfc\u81f4\u7b49\u5f85 Promise \u7684\u72b6\u6001\u800c\u4e0d\u518d\u7ee7\u7eed\u6267\u884c\uff1b\u7b2c\u4e09\u79cd\u5199\u6cd5\u662f\u6574\u4e2a\u4ee3\u7801\u5757\u90fd\u4e0d\u6267\u884c\uff0c\u7b49\u5f85 arr \u5f53\u524d\u7684\u503c\uff08Promise\u72b6\u6001\uff09\u53d1\u751f\u53d8\u5316\u4e4b\u540e\uff0c\u624d\u6267\u884c\u4ee3\u7801\u5757\u7684\u5185\u5bb9\u3002"),(0,a.kt)("p",null,"\u56de\u60f3\u6211\u4eec\u4e4b\u524d\u7ed9\u6570\u636e\u7ed3\u6784\u81ea\u5b9a\u4e49\u904d\u5386\u5668\u662f\u540c\u6b65\u7684\uff0c\u5982\u679c\u60f3\u5b9a\u4e49\u9002\u5408 for...await...of \u7684\u5f02\u6b65\u904d\u5386\u5668\u8be5\u600e\u4e48\u505a\u5462\uff1f\u7b54\u6848\u662f Symbol.asyncIterator\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let obj = {\n  count: 0, \n  Gen (time) {\n\n    return new Promise(function (resolve, reject) {\n      setTimeout(function () {\n        resolve({ done: false, value: time })\n      }, time)\n    })\n\n  }, \n  [Symbol.asyncIterator] () {\n\n    let self = this\n    return {\n      next () {\n        self.count++\n        if (self.count < 4) {\n          return self.Gen(Math.random() * 1000)\n        } else {\n          return Promise.resolve({\n            done: true,\n            value: ''\n          })\n        }\n      }\n    }\n\n  }\n}\n\nasync function test () {\n  for await (let item of obj) {\n\n    console.log(Date.now(), item)\n\n  }\n}\n// 1560093560200 649.3946561938179\n// 1560093560828 624.6310222512955\n// 1560093561733 901.9497480464518\n")),(0,a.kt)("h3",{id:"\u63a8\u8350\u9605\u8bfb"},"\u63a8\u8350\u9605\u8bfb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://exploringjs.com/es2018-es2019/ch_asynchronous-iteration.html#for-await-of-and-rejections"},"Asynchronous iteration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for-await...of"},"for await...of"))))}p.isMDXComponent=!0}}]);