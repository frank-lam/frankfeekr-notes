"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9682],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return y}});var o=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=o.createContext({}),m=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=m(e.components);return o.createElement(c.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=m(t),y=l,b=p["".concat(c,".").concat(y)]||p[y]||i[y]||r;return t?o.createElement(b,s(s({ref:n},u),{},{components:t})):o.createElement(b,s({ref:n},u))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,s=new Array(r);s[0]=p;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:l,s[1]=a;for(var m=2;m<r;m++)s[m]=t[m];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},753:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return a},metadata:function(){return m},toc:function(){return i}});var o=t(7462),l=t(3366),r=(t(7294),t(3905)),s=["components"],a={},c="Symbol",m={unversionedId:"frontend/es6/es2015/Symbol",id:"frontend/es6/es2015/Symbol",title:"Symbol",description:"ES6 \u5f15\u5165\u4e86\u4e00\u79cd\u65b0\u7684\u539f\u59cb\u6570\u636e\u7c7b\u578b Symbol \uff0c\u8868\u793a\u72ec\u4e00\u65e0\u4e8c\u7684\u503c\u3002\u5b83\u662f JavaScript \u8bed\u8a00\u7684\u7b2c\u4e03\u79cd\u6570\u636e\u7c7b\u578b\uff0c\u524d\u516d\u79cd\u662f\uff1aundefined\u3001null\u3001\u5e03\u5c14\u503c\uff08Boolean\uff09\u3001\u5b57\u7b26\u4e32\uff08String\uff09\u3001\u6570\u503c\uff08Number\uff09\u3001\u5bf9\u8c61\uff08Object\uff09\u3002",source:"@site/docs/frontend/es6/02-es2015/07-Symbol.md",sourceDirName:"frontend/es6/02-es2015",slug:"/frontend/es6/es2015/Symbol",permalink:"/docs/frontend/es6/es2015/Symbol",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/es6/02-es2015/07-Symbol.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"frontend_es6",previous:{title:"Class",permalink:"/docs/frontend/es6/es2015/Class"},next:{title:"Set",permalink:"/docs/frontend/es6/es2015/Set"}},u={},i=[{value:"#\u58f0\u660e\u65b9\u5f0f",id:"\u58f0\u660e\u65b9\u5f0f",level:2},{value:"#Symbol.for()",id:"symbolfor",level:2},{value:"#Symbol.keyFor()",id:"symbolkeyfor",level:2},{value:"#\u4f5c\u4e3a\u5c5e\u6027\u540d",id:"\u4f5c\u4e3a\u5c5e\u6027\u540d",level:2},{value:"#\u5c5e\u6027\u904d\u5386",id:"\u5c5e\u6027\u904d\u5386",level:2},{value:"#\u6d88\u9664\u9b54\u672f\u5b57\u7b26\u4e32",id:"\u6d88\u9664\u9b54\u672f\u5b57\u7b26\u4e32",level:2},{value:"#\u63a8\u8350\u9605\u8bfb",id:"\u63a8\u8350\u9605\u8bfb",level:3}],p={toc:i};function y(e){var n=e.components,t=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"symbol"},"Symbol"),(0,r.kt)("p",null,"ES6 \u5f15\u5165\u4e86\u4e00\u79cd\u65b0\u7684\u539f\u59cb\u6570\u636e\u7c7b\u578b ",(0,r.kt)("inlineCode",{parentName:"p"},"Symbol")," \uff0c\u8868\u793a\u72ec\u4e00\u65e0\u4e8c\u7684\u503c\u3002\u5b83\u662f JavaScript \u8bed\u8a00\u7684\u7b2c\u4e03\u79cd\u6570\u636e\u7c7b\u578b\uff0c\u524d\u516d\u79cd\u662f\uff1aundefined\u3001null\u3001\u5e03\u5c14\u503c\uff08Boolean\uff09\u3001\u5b57\u7b26\u4e32\uff08String\uff09\u3001\u6570\u503c\uff08Number\uff09\u3001\u5bf9\u8c61\uff08Object\uff09\u3002"),(0,r.kt)("p",null,"Symbol \u503c\u901a\u8fc7Symbol\u51fd\u6570\u751f\u6210\u3002\u8fd9\u5c31\u662f\u8bf4\uff0c\u5bf9\u8c61\u7684\u5c5e\u6027\u540d\u73b0\u5728\u53ef\u4ee5\u6709\u4e24\u79cd\u7c7b\u578b\uff0c\u4e00\u79cd\u662f\u539f\u6765\u5c31\u6709\u7684\u5b57\u7b26\u4e32\uff0c\u53e6\u4e00\u79cd\u5c31\u662f\u65b0\u589e\u7684 Symbol \u7c7b\u578b\u3002\u51e1\u662f\u5c5e\u6027\u540d\u5c5e\u4e8e Symbol \u7c7b\u578b\uff0c\u5c31\u90fd\u662f\u72ec\u4e00\u65e0\u4e8c\u7684\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u4e0d\u4f1a\u4e0e\u5176\u4ed6\u5c5e\u6027\u540d\u4ea7\u751f\u51b2\u7a81\u3002"),(0,r.kt)("h2",{id:"\u58f0\u660e\u65b9\u5f0f"},(0,r.kt)("a",{parentName:"h2",href:"http://es.xiecheng.live/es6/symbol.html#%E5%A3%B0%E6%98%8E%E6%96%B9%E5%BC%8F"},"#"),"\u58f0\u660e\u65b9\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let s = Symbol()\n\ntypeof s\n// "symbol"\n')),(0,r.kt)("p",null,"\u53d8\u91cfs\u5c31\u662f\u4e00\u4e2a\u72ec\u4e00\u65e0\u4e8c\u7684\u503c\u3002typeof\u7684\u7ed3\u679c\u8bf4\u660es\u662f Symbol \u6570\u636e\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"\u65e2\u7136\u662f\u72ec\u4e00\u65e0\u4e8c\u7684\uff0c\u90a3\u4e48\u4e24\u4e2aSymbol()\u5c31\u4e00\u5b9a\u662f\u4e0d\u76f8\u7b49\u7684\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let s1 = Symbol()\nlet s2 = Symbol()\nconsole.log(s1)\nconsole.log(s2)\nconsole.log(s1 === s2) // false\n")),(0,r.kt)("p",null,"\u6ce8\u610f"),(0,r.kt)("p",null,"Symbol\u51fd\u6570\u524d\u4e0d\u80fd\u4f7f\u7528new\u547d\u4ee4\uff0c\u5426\u5219\u4f1a\u62a5\u9519\u3002\u8fd9\u662f\u56e0\u4e3a\u751f\u6210\u7684 Symbol \u662f\u4e00\u4e2a\u539f\u59cb\u7c7b\u578b\u7684\u503c\uff0c\u4e0d\u662f\u5bf9\u8c61\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u7531\u4e8e Symbol \u503c\u4e0d\u662f\u5bf9\u8c61\uff0c\u6240\u4ee5\u4e0d\u80fd\u6dfb\u52a0\u5c5e\u6027\u3002\u57fa\u672c\u4e0a\uff0c\u5b83\u662f\u4e00\u79cd\u7c7b\u4f3c\u4e8e\u5b57\u7b26\u4e32\u7684\u6570\u636e\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"Symbol\u51fd\u6570\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a\u5b57\u7b26\u4e32\u4f5c\u4e3a\u53c2\u6570\uff0c\u8868\u793a\u5bf9 Symbol \u5b9e\u4f8b\u7684\u63cf\u8ff0\uff0c\u4e3b\u8981\u662f\u4e3a\u4e86\u5728\u63a7\u5236\u53f0\u663e\u793a\uff0c\u6216\u8005\u8f6c\u4e3a\u5b57\u7b26\u4e32\u65f6\uff0c\u6bd4\u8f83\u5bb9\u6613\u533a\u5206\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let s1 = Symbol('foo')\nlet s2 = Symbol('foo')\nconsole.log(s1)\nconsole.log(s2)\nconsole.log(s1 === s2) // false\n")),(0,r.kt)("h2",{id:"symbolfor"},(0,r.kt)("a",{parentName:"h2",href:"http://es.xiecheng.live/es6/symbol.html#symbol-for"},"#"),"Symbol.for()"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Symbol.for()")," \u63a5\u53d7\u4e00\u4e2a\u5b57\u7b26\u4e32\u4f5c\u4e3a\u53c2\u6570\uff0c\u7136\u540e\u641c\u7d22\u6709\u6ca1\u6709\u4ee5\u8be5\u53c2\u6570\u4f5c\u4e3a\u540d\u79f0\u7684 Symbol \u503c\u3002\u5982\u679c\u6709\uff0c\u5c31\u8fd4\u56de\u8fd9\u4e2a Symbol \u503c\uff0c\u5426\u5219\u5c31\u65b0\u5efa\u4e00\u4e2a\u4ee5\u8be5\u5b57\u7b26\u4e32\u4e3a\u540d\u79f0\u7684 Symbol \u503c\uff0c\u5e76\u5c06\u5176\u6ce8\u518c\u5230\u5168\u5c40\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let s1 = Symbol.for('foo')\nlet s2 = Symbol.for('foo')\nconsole.log(s1 === s2) // true\n")),(0,r.kt)("p",null,"\u6ce8\u610f"),(0,r.kt)("p",null,"Symbol.for()\u4e0eSymbol()\u8fd9\u4e24\u79cd\u5199\u6cd5\uff0c\u90fd\u4f1a\u751f\u6210\u65b0\u7684 Symbol\u3002\u5b83\u4eec\u7684\u533a\u522b\u662f\uff0c\u524d\u8005\u4f1a\u88ab\u767b\u8bb0\u5728\u5168\u5c40\u73af\u5883\u4e2d\u4f9b\u641c\u7d22\uff0c\u540e\u8005\u4e0d\u4f1a\u3002Symbol.for()\u4e0d\u4f1a\u6bcf\u6b21\u8c03\u7528\u5c31\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 Symbol \u7c7b\u578b\u7684\u503c\uff0c\u800c\u662f\u4f1a\u5148\u68c0\u67e5\u7ed9\u5b9a\u7684key\u662f\u5426\u5df2\u7ecf\u5b58\u5728\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u624d\u4f1a\u65b0\u5efa\u4e00\u4e2a\u503c\u3002"),(0,r.kt)("h2",{id:"symbolkeyfor"},(0,r.kt)("a",{parentName:"h2",href:"http://es.xiecheng.live/es6/symbol.html#symbol-keyfor"},"#"),"Symbol.keyFor()"),(0,r.kt)("p",null,"Symbol.keyFor()\u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u5df2\u767b\u8bb0\u7684 Symbol \u7c7b\u578b\u503c\u7684key\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const s1 = Symbol('foo')\nconsole.log(Symbol.keyFor(s1)) // undefined\n\nconst s2 = Symbol.for('foo')\nconsole.log(Symbol.keyFor(s2)) // foo\n")),(0,r.kt)("h2",{id:"\u4f5c\u4e3a\u5c5e\u6027\u540d"},(0,r.kt)("a",{parentName:"h2",href:"http://es.xiecheng.live/es6/symbol.html#%E4%BD%9C%E4%B8%BA%E5%B1%9E%E6%80%A7%E5%90%8D"},"#"),"\u4f5c\u4e3a\u5c5e\u6027\u540d"),(0,r.kt)("p",null,"\u7531\u4e8e\u6bcf\u4e00\u4e2a Symbol \u503c\u90fd\u662f\u4e0d\u76f8\u7b49\u7684\uff0c\u8fd9\u610f\u5473\u7740 Symbol \u503c\u53ef\u4ee5\u4f5c\u4e3a\u6807\u8bc6\u7b26\uff0c\u7528\u4e8e\u5bf9\u8c61\u7684\u5c5e\u6027\u540d\uff0c\u5c31\u80fd\u4fdd\u8bc1\u4e0d\u4f1a\u51fa\u73b0\u540c\u540d\u7684\u5c5e\u6027\u3002\u8fd9\u5bf9\u4e8e\u4e00\u4e2a\u5bf9\u8c61\u7531\u591a\u4e2a\u6a21\u5757\u6784\u6210\u7684\u60c5\u51b5\u975e\u5e38\u6709\u7528\uff0c\u80fd\u9632\u6b62\u67d0\u4e00\u4e2a\u952e\u88ab\u4e0d\u5c0f\u5fc3\u6539\u5199\u6216\u8986\u76d6\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\u5728\u4e00\u4e2a\u73ed\u7ea7\u4e2d\uff0c\u53ef\u80fd\u4f1a\u6709\u540c\u5b66\u540d\u5b57\u76f8\u540c\u7684\u60c5\u51b5\uff0c\u8fd9\u65f6\u5019\u4f7f\u7528\u5bf9\u8c61\u6765\u63cf\u8ff0\u5b66\u751f\u4fe1\u606f\u7684\u65f6\u5019\uff0c\u5982\u679c\u76f4\u63a5\u4f7f\u7528\u5b66\u751f\u59d3\u540d\u4f5c\u4e3akey\u4f1a\u6709\u6709\u95ee\u9898\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const grade = {\n    \u5f20\u4e09: {\n        address: 'xxx',\n        tel: '111'\n    },\n    \u674e\u56db: {\n        address: 'yyy',\n        tel: '222'\n    },\n    \u674e\u56db: {\n        address: 'zzz',\n        tel: '333'\n    },\n}\nconsole.log(grade)\n// \u53ea\u4f1a\u4fdd\u7559\u6700\u540e\u4e00\u4e2a\u674e\u56db\n")),(0,r.kt)("p",null,"\u5982\u679c\u4f7f\u7528Symbol\uff0c\u540c\u540d\u7684\u5b66\u751f\u4fe1\u606f\u5c31\u4e0d\u4f1a\u88ab\u8986\u76d6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const stu1 = Symbol('\u674e\u56db')\nconst stu2 = Symbol('\u674e\u56db')\nconst grade = {\n    [stu1]: {\n        address: 'yyy',\n        tel: '222'\n    },\n    [stu2]: {\n        address: 'zzz',\n        tel: '333'\n    },\n}\nconsole.log(grade)\nconsole.log(grade[stu1])\nconsole.log(grade[stu2])\n")),(0,r.kt)("h2",{id:"\u5c5e\u6027\u904d\u5386"},(0,r.kt)("a",{parentName:"h2",href:"http://es.xiecheng.live/es6/symbol.html#%E5%B1%9E%E6%80%A7%E9%81%8D%E5%8E%86"},"#"),"\u5c5e\u6027\u904d\u5386"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const sym = Symbol('imooc')\nclass User {\n    constructor(name) {\n        this.name = name\n        this[sym] = 'imooc.com'\n    }\n    getName() {\n        return this.name + this[sym]\n    }\n}\nconst user = new User('xiecheng')\nconsole.log(user.getName())\n\nfor (let key in user) {\n    console.log(key)\n}\n\nfor (let key of Object.keys(user)) {\n    console.log(key)\n}\n\nfor (let key of Object.getOwnPropertySymbols(user)) {\n    console.log(key)\n}\n\nfor (let key of Reflect.ownKeys(user)) {\n    console.log(key)\n}\n")),(0,r.kt)("h2",{id:"\u6d88\u9664\u9b54\u672f\u5b57\u7b26\u4e32"},(0,r.kt)("a",{parentName:"h2",href:"http://es.xiecheng.live/es6/symbol.html#%E6%B6%88%E9%99%A4%E9%AD%94%E6%9C%AF%E5%AD%97%E7%AC%A6%E4%B8%B2"},"#"),"\u6d88\u9664\u9b54\u672f\u5b57\u7b26\u4e32"),(0,r.kt)("p",null,"\u9b54\u672f\u5b57\u7b26\u4e32\u6307\u7684\u662f\uff0c\u5728\u4ee3\u7801\u4e4b\u4e2d\u591a\u6b21\u51fa\u73b0\u3001\u4e0e\u4ee3\u7801\u5f62\u6210\u5f3a\u8026\u5408\u7684\u67d0\u4e00\u4e2a\u5177\u4f53\u7684\u5b57\u7b26\u4e32\u6216\u8005\u6570\u503c\u3002\u98ce\u683c\u826f\u597d\u7684\u4ee3\u7801\uff0c\u5e94\u8be5\u5c3d\u91cf\u6d88\u9664\u9b54\u672f\u5b57\u7b26\u4e32\uff0c\u6539\u7531\u542b\u4e49\u6e05\u6670\u7684\u53d8\u91cf\u4ee3\u66ff\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function getArea(shape) {\n    let area = 0\n    switch (shape) {\n        case 'Triangle':\n            area = 1\n            break\n        case 'Circle':\n            area = 2\n            break\n    }\n    return area\n}\nconsole.log(getArea('Triangle'))\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u5b57\u7b26\u4e32Triangle\u548cCircle\u5c31\u662f\u9b54\u672f\u5b57\u7b26\u4e32\u3002\u5b83\u591a\u6b21\u51fa\u73b0\uff0c\u4e0e\u4ee3\u7801\u5f62\u6210\u201c\u5f3a\u8026\u5408\u201d\uff0c\u4e0d\u5229\u4e8e\u5c06\u6765\u7684\u4fee\u6539\u548c\u7ef4\u62a4\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528Symbol\u5c31\u53ef\u4ee5\u5f88\u597d\u7684\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const shapeType = {\n    triangle: Symbol(),\n    circle: Symbol()\n}\n\nfunction getArea(shape) {\n    let area = 0\n    switch (shape) {\n        case shapeType.triangle:\n            area = 1\n            break\n        case shapeType.circle:\n            area = 2\n            break\n    }\n    return area\n}\nconsole.log(getArea(shapeType.triangle))\n")),(0,r.kt)("h3",{id:"\u63a8\u8350\u9605\u8bfb"},(0,r.kt)("a",{parentName:"h3",href:"http://es.xiecheng.live/es6/symbol.html#%E6%8E%A8%E8%8D%90%E9%98%85%E8%AF%BB"},"#"),"\u63a8\u8350\u9605\u8bfb"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Symbol"},"Symbol"))))}y.isMDXComponent=!0}}]);