"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1128],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),k=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=k(e.components);return n.createElement(c.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=k(r),u=a,g=m["".concat(c,".").concat(u)]||m[u]||i[u]||l;return r?n.createElement(g,p(p({ref:t},s),{},{components:r})):n.createElement(g,p({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var k=2;k<l;k++)p[k]=r[k];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7930:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return o},metadata:function(){return k},toc:function(){return i}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),p=["components"],o={},c="Reflect",k={unversionedId:"frontend/es6/es2015/Reflect",id:"frontend/es6/es2015/Reflect",title:"Reflect",description:"Reflect\u5bf9\u8c61\u4e0eProxy\u5bf9\u8c61\u4e00\u6837\uff0c\u4e5f\u662f ES6 \u4e3a\u4e86\u64cd\u4f5c\u5bf9\u8c61\u800c\u63d0\u4f9b\u7684\u65b0 API\u3002",source:"@site/docs/frontend/es6/02-es2015/13-Reflect.md",sourceDirName:"frontend/es6/02-es2015",slug:"/frontend/es6/es2015/Reflect",permalink:"/docs/frontend/es6/es2015/Reflect",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/es6/02-es2015/13-Reflect.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"frontend_es6",previous:{title:"Proxy",permalink:"/docs/frontend/es6/es2015/Proxy"},next:{title:"Promise",permalink:"/docs/frontend/es6/es2015/Promise"}},s={},i=[{value:"#\u8bbe\u8ba1\u76ee\u7684",id:"\u8bbe\u8ba1\u76ee\u7684",level:2},{value:"#\u5e38\u7528\u65b9\u6cd5",id:"\u5e38\u7528\u65b9\u6cd5",level:2},{value:"#Reflect.apply()",id:"reflectapply",level:3},{value:"#Reflect.construct()",id:"reflectconstruct",level:3},{value:"#Reflect.defineProperty()",id:"reflectdefineproperty",level:3},{value:"#Reflect.deleteProperty()",id:"reflectdeleteproperty",level:3},{value:"#Reflect.get()",id:"reflectget",level:3},{value:"#Reflect.getOwnPropertyDescriptor()",id:"reflectgetownpropertydescriptor",level:3},{value:"#Reflect.getPrototypeOf()",id:"reflectgetprototypeof",level:3},{value:"#Reflect.has()",id:"reflecthas",level:3},{value:"#Reflect.isExtensible()",id:"reflectisextensible",level:3},{value:"#Reflect.ownKeys()",id:"reflectownkeys",level:3},{value:"#Reflect.preventExtensions()",id:"reflectpreventextensions",level:3},{value:"#Reflect.set()",id:"reflectset",level:3},{value:"#Reflect.setPrototypeOf()",id:"reflectsetprototypeof",level:3},{value:"#\u63a8\u8350\u9605\u8bfb",id:"\u63a8\u8350\u9605\u8bfb",level:3}],m={toc:i};function u(e){var t=e.components,r=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"reflect"},"Reflect"),(0,l.kt)("p",null,"Reflect\u5bf9\u8c61\u4e0eProxy\u5bf9\u8c61\u4e00\u6837\uff0c\u4e5f\u662f ES6 \u4e3a\u4e86\u64cd\u4f5c\u5bf9\u8c61\u800c\u63d0\u4f9b\u7684\u65b0 API\u3002"),(0,l.kt)("h2",{id:"\u8bbe\u8ba1\u76ee\u7684"},(0,l.kt)("a",{parentName:"h2",href:"http://es.xiecheng.live/es6/reflect.html#%E8%AE%BE%E8%AE%A1%E7%9B%AE%E7%9A%84"},"#"),"\u8bbe\u8ba1\u76ee\u7684"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c06Object\u5c5e\u4e8e\u8bed\u8a00\u5185\u90e8\u7684\u65b9\u6cd5\u653e\u5230Reflect\u4e0a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let obj = {}\nlet newVal = ''\nReflect.defineProperty(obj, 'name', {\n    get() {\n        return newVal\n    },\n    set(val) {\n        console.log('set')\n        // this.name = val\n        newVal = val\n    }\n})\nobj.name = 'es'\nconsole.log(obj.name)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539\u67d0\u4e9bObject\u65b9\u6cd5\u7684\u8fd4\u56de\u7ed3\u679c\uff0c\u8ba9\u5176\u53d8\u5f97\u66f4\u5408\u7406")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u8001\u5199\u6cd5\ntry {\n    Object.defineProperty(target, property, attributes)\n    // success\n} catch (e) {\n    // failure\n}\n\n// \u65b0\u5199\u6cd5\nif (Reflect.defineProperty(target, property, attributes)) {\n    // success\n} else {\n    // failure\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8ba9Object\u64cd\u4f5c\u53d8\u6210\u51fd\u6570\u884c\u4e3a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u8001\u5199\u6cd5\n'assign' in Object // true\n\n// \u65b0\u5199\u6cd5\nReflect.has(Object, 'assign') // true\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Reflect\u5bf9\u8c61\u7684\u65b9\u6cd5\u4e0eProxy\u5bf9\u8c61\u7684\u65b9\u6cd5\u4e00\u4e00\u5bf9\u5e94\uff0c\u53ea\u8981\u662fProxy\u5bf9\u8c61\u7684\u65b9\u6cd5\uff0c\u5c31\u80fd\u5728Reflect\u5bf9\u8c61\u4e0a\u627e\u5230\u5bf9\u5e94\u7684\u65b9\u6cd5\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Proxy(target, {\n    set: function(target, name, value, receiver) {\n        var success = Reflect.set(target, name, value, receiver)\n        if (success) {\n            console.log('property ' + name + ' on ' + target + ' set to ' + value)\n        }\n        return success\n    }\n})\n")),(0,l.kt)("p",null,"Reflect \u662f\u4e00\u4e2a\u5185\u7f6e\u7684\u5bf9\u8c61\uff0c\u5b83\u63d0\u4f9b\u62e6\u622a JavaScript \u64cd\u4f5c\u7684\u65b9\u6cd5\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u4e0e\u5904\u7406\u5668\u5bf9\u8c61\u7684\u65b9\u6cd5\u76f8\u540c\u3002Reflect\u4e0d\u662f\u4e00\u4e2a\u51fd\u6570\u5bf9\u8c61\uff0c\u56e0\u6b64\u5b83\u662f\u4e0d\u53ef\u6784\u9020\u7684\u3002"),(0,l.kt)("p",null,"TIP"),(0,l.kt)("p",null,"\u4e0e\u5927\u591a\u6570\u5168\u5c40\u5bf9\u8c61\u4e0d\u540c\uff0cReflect\u6ca1\u6709\u6784\u9020\u51fd\u6570\u3002\u4f60\u4e0d\u80fd\u5c06\u5176\u4e0e\u4e00\u4e2anew\u8fd0\u7b97\u7b26\u4e00\u8d77\u4f7f\u7528\uff0c\u6216\u8005\u5c06Reflect\u5bf9\u8c61\u4f5c\u4e3a\u4e00\u4e2a\u51fd\u6570\u6765\u8c03\u7528\u3002Reflect\u7684\u6240\u6709\u5c5e\u6027\u548c\u65b9\u6cd5\u90fd\u662f\u9759\u6001\u7684\uff08\u5c31\u50cfMath\u5bf9\u8c61\uff09"),(0,l.kt)("h2",{id:"\u5e38\u7528\u65b9\u6cd5"},(0,l.kt)("a",{parentName:"h2",href:"http://es.xiecheng.live/es6/reflect.html#%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95"},"#"),"\u5e38\u7528\u65b9\u6cd5"),(0,l.kt)("h3",{id:"reflectapply"},(0,l.kt)("a",{parentName:"h3",href:"http://es.xiecheng.live/es6/reflect.html#reflect-apply"},"#"),"Reflect.apply()"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Reflect.apply(target, thisArgument, argumentsList)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u9009"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"target"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u76ee\u6807\u51fd\u6570"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"thisArgument"),(0,l.kt)("td",{parentName:"tr",align:"center"},"target\u51fd\u6570\u8c03\u7528\u65f6\u7ed1\u5b9a\u7684this\u5bf9\u8c61"),(0,l.kt)("td",{parentName:"tr",align:"center"},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"argumentsList"),(0,l.kt)("td",{parentName:"tr",align:"center"},"target\u51fd\u6570\u8c03\u7528\u65f6\u4f20\u5165\u7684\u5b9e\u53c2\u5217\u8868\uff0c\u8be5\u53c2\u6570\u5e94\u8be5\u662f\u4e00\u4e2a\u7c7b\u6570\u7ec4\u7684\u5bf9\u8c61"),(0,l.kt)("td",{parentName:"tr",align:"center"},"N")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Reflect.apply(Math.floor, undefined, [1.75])\n// 1\n\nReflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111])\n// \"hello\"\n\nReflect.apply(RegExp.prototype.exec, /ab/, ['confabulation']).index\n// 4\n\nReflect.apply(''.charAt, 'ponies', [3])\n// \"i\"\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ES5 \u5bf9\u6bd4")),(0,l.kt)("p",null,"\u8be5\u65b9\u6cd5\u4e0eES5\u4e2dFunction.prototype.apply()\u65b9\u6cd5\u7c7b\u4f3c\uff1a\u8c03\u7528\u4e00\u4e2a\u65b9\u6cd5\u5e76\u4e14\u663e\u5f0f\u5730\u6307\u5b9athis\u53d8\u91cf\u548c\u53c2\u6570\u5217\u8868(arguments) \uff0c\u53c2\u6570\u5217\u8868\u53ef\u4ee5\u662f\u6570\u7ec4\uff0c\u6216\u7c7b\u4f3c\u6570\u7ec4\u7684\u5bf9\u8c61\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Function.prototype.apply.call(Math.floor, undefined, [1.75])\n")),(0,l.kt)("h3",{id:"reflectconstruct"},(0,l.kt)("a",{parentName:"h3",href:"http://es.xiecheng.live/es6/reflect.html#reflect-construct"},"#"),"Reflect.construct()"),(0,l.kt)("p",null,"Reflect.construct() \u65b9\u6cd5\u7684\u884c\u4e3a\u6709\u70b9\u50cf new \u64cd\u4f5c\u7b26 \u6784\u9020\u51fd\u6570 \uff0c \u76f8\u5f53\u4e8e\u8fd0\u884c new target(...args)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Reflect.construct(target, argumentsList","[, newTarget]",")")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u9009"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"target"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u88ab\u8fd0\u884c\u7684\u76ee\u6807\u51fd\u6570"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"argumentsList"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u8c03\u7528\u6784\u9020\u51fd\u6570\u7684\u6570\u7ec4\u6216\u8005\u4f2a\u6570\u7ec4"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"newTarget"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u8be5\u53c2\u6570\u4e3a\u6784\u9020\u51fd\u6570\uff0c \u53c2\u8003 new.target \u64cd\u4f5c\u7b26\uff0c\u5982\u679c\u6ca1\u6709newTarget\u53c2\u6570\uff0c \u9ed8\u8ba4\u548ctarget\u4e00\u6837"),(0,l.kt)("td",{parentName:"tr",align:"center"},"N")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"[! WARNING]"," \u5982\u679ctarget\u6216\u8005newTarget\u4e0d\u662f\u6784\u9020\u51fd\u6570\uff0c\u629b\u51faTypeError")),(0,l.kt)("p",null,"Reflect.construct\u5141\u8bb8\u4f60\u4f7f\u7528\u53ef\u53d8\u7684\u53c2\u6570\u6765\u8c03\u7528\u6784\u9020\u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var obj = new Foo(...args)\nvar obj = Reflect.construct(Foo, args)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var d = Reflect.construct(Date, [1776, 6, 4])\nd instanceof Date // true\nd.getFullYear() // 1776\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f7f\u7528 newTarget \u53c2\u6570\uff0c\u5219\u8868\u793a\u7ee7\u627f\u4e86 newTarget \u8fd9\u4e2a\u8d85\u7c7b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function someConstructor() {}\nvar result = Reflect.construct(Array, [], someConstructor)\n\nReflect.getPrototypeOf(result) // \u8f93\u51fa\uff1asomeConstructor.prototype\nArray.isArray(result) // true\n")),(0,l.kt)("h3",{id:"reflectdefineproperty"},(0,l.kt)("a",{parentName:"h3",href:"http://es.xiecheng.live/es6/reflect.html#reflect-defineproperty"},"#"),"Reflect.defineProperty()"),(0,l.kt)("p",null,"\u9759\u6001\u65b9\u6cd5 Reflect.defineProperty() \u57fa\u672c\u7b49\u540c\u4e8e Object.defineProperty() \u65b9\u6cd5\uff0c\u552f\u4e00\u4e0d\u540c\u662f\u8fd4\u56de Boolean \u503c\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Reflect.defineProperty(target, propertyKey, attributes)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u9009"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"target"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u76ee\u6807\u5bf9\u8c61"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"propertyKey"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u8981\u5b9a\u4e49\u6216\u4fee\u6539\u7684\u5c5e\u6027\u7684\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"attributes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u8981\u5b9a\u4e49\u6216\u4fee\u6539\u7684\u5c5e\u6027\u7684\u63cf\u8ff0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Y")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const student = {}\nReflect.defineProperty(student, 'name', {\n    value: 'Mike'\n}) // true\nstudent.name // \"Mike\"\n")),(0,l.kt)("h3",{id:"reflectdeleteproperty"},(0,l.kt)("a",{parentName:"h3",href:"http://es.xiecheng.live/es6/reflect.html#reflect-deleteproperty"},"#"),"Reflect.deleteProperty()"),(0,l.kt)("p",null,"Reflect.deleteProperty \u5141\u8bb8\u4f60\u5220\u9664\u4e00\u4e2a\u5bf9\u8c61\u4e0a\u7684\u5c5e\u6027\u3002\u8fd4\u56de\u4e00\u4e2a Boolean \u503c\u8868\u793a\u8be5\u5c5e\u6027\u662f\u5426\u88ab\u6210\u529f\u5220\u9664\u3002\u5b83\u51e0\u4e4e\u4e0e\u975e\u4e25\u683c\u7684 delete operator \u76f8\u540c\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Reflect.deleteProperty(target, propertyKey)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u9009"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"target"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5220\u9664\u5c5e\u6027\u7684\u76ee\u6807\u5bf9\u8c61"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"propertyKey"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5c06\u88ab\u5220\u9664\u7684\u5c5e\u6027\u7684\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Y")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'var obj = {\n    x: 1,\n    y: 2\n}\nReflect.deleteProperty(obj, "x") // true\nobj // { y: 2 }\n\nvar arr = [1, 2, 3, 4, 5]\nReflect.deleteProperty(arr, "3") // true\narr // [1, 2, 3, , 5]\n\n// \u5982\u679c\u5c5e\u6027\u4e0d\u5b58\u5728\uff0c\u8fd4\u56de true\nReflect.deleteProperty({}, "foo") // true\n\n// \u5982\u679c\u5c5e\u6027\u4e0d\u53ef\u914d\u7f6e\uff0c\u8fd4\u56de false\nReflect.deleteProperty(Object.freeze({\n    foo: 1\n}), "foo") // false\n')),(0,l.kt)("h3",{id:"reflectget"},(0,l.kt)("a",{parentName:"h3",href:"http://es.xiecheng.live/es6/reflect.html#reflect-get"},"#"),"Reflect.get()"),(0,l.kt)("p",null,"Reflect.get() \u65b9\u6cd5\u7684\u5de5\u4f5c\u65b9\u5f0f\uff0c\u5c31\u50cf\u4ece object (target","[propertyKey]",") \u4e2d\u83b7\u53d6\u5c5e\u6027\uff0c\u4f46\u5b83\u662f\u4f5c\u4e3a\u4e00\u4e2a\u51fd\u6570\u6267\u884c\u7684\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Reflect.get(target, propertyKey","[, receiver]",")")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u9009"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"target"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u9700\u8981\u53d6\u503c\u7684\u76ee\u6807\u5bf9\u8c61"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"propertyKey"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u9700\u8981\u83b7\u53d6\u7684\u503c\u7684\u952e\u503c"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"receiver"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5982\u679c\u9047\u5230 getter\uff0c\u6b64\u503c\u5c06\u63d0\u4f9b\u7ed9\u76ee\u6807\u8c03\u7528"),(0,l.kt)("td",{parentName:"tr",align:"center"},"N")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Object\nvar obj = {\n    x: 1,\n    y: 2\n}\nReflect.get(obj, 'x') // 1\n\n// Array\nReflect.get(['zero', 'one'], 1) // \"one\"\n\n// Proxy with a get handler\nvar x = {\n    p: 1\n}\nvar obj = new Proxy(x, {\n    get(t, k, r) {\n        return k + 'bar'\n    }\n})\nReflect.get(obj, 'foo') // \"foobar\"\n")),(0,l.kt)("h3",{id:"reflectgetownpropertydescriptor"},(0,l.kt)("a",{parentName:"h3",href:"http://es.xiecheng.live/es6/reflect.html#reflect-getownpropertydescriptor"},"#"),"Reflect.getOwnPropertyDescriptor()"),(0,l.kt)("p",null,"\u9759\u6001\u65b9\u6cd5 Reflect.getOwnPropertyDescriptor() \u4e0e Object.getOwnPropertyDescriptor() \u65b9\u6cd5\u76f8\u4f3c\u3002\u5982\u679c\u5728\u5bf9\u8c61\u4e2d\u5b58\u5728\uff0c\u5219\u8fd4\u56de\u7ed9\u5b9a\u7684\u5c5e\u6027\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\uff0c\u5426\u5219\u8fd4\u56de undefined\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Reflect.getOwnPropertyDescriptor(target, propertyKey)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u9009"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"target"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u9700\u8981\u5bfb\u627e\u5c5e\u6027\u7684\u76ee\u6807\u5bf9\u8c61"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"propertyKey"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u83b7\u53d6\u81ea\u5df1\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\u7684\u5c5e\u6027\u7684\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"N")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Reflect.getOwnPropertyDescriptor({\n    x: 'hello'\n}, 'x')\n// {value: \"hello\", writable: true, enumerable: true, configurable: true}\n\nReflect.getOwnPropertyDescriptor({\n    x: 'hello'\n}, 'y')\n// undefined\n\nReflect.getOwnPropertyDescriptor([], 'length')\n// {value: 0, writable: true, enumerable: false, configurable: false}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5bf9\u6bd4")),(0,l.kt)("p",null,"\u5982\u679c\u8be5\u65b9\u6cd5\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e0d\u662f\u4e00\u4e2a\u5bf9\u8c61\uff08\u4e00\u4e2a\u539f\u59cb\u503c\uff09\uff0c\u90a3\u4e48\u5c06\u9020\u6210 TypeError \u9519\u8bef\u3002\u800c\u5bf9\u4e8e Object.getOwnPropertyDescriptor\uff0c\u975e\u5bf9\u8c61\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u5c06\u88ab\u5f3a\u5236\u8f6c\u6362\u4e3a\u4e00\u4e2a\u5bf9\u8c61\u5904\u7406\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'Reflect.getOwnPropertyDescriptor("foo", 0)\n// TypeError: "foo" is not non-null object\n\nObject.getOwnPropertyDescriptor("foo", 0)\n// { value: "f", writable: false, enumerable: true, configurable: false }\n')),(0,l.kt)("h3",{id:"reflectgetprototypeof"},(0,l.kt)("a",{parentName:"h3",href:"http://es.xiecheng.live/es6/reflect.html#reflect-getprototypeof"},"#"),"Reflect.getPrototypeOf()"),(0,l.kt)("p",null,"\u9759\u6001\u65b9\u6cd5 Reflect.getPrototypeOf() \u4e0e Object.getPrototypeOf() \u65b9\u6cd5\u662f\u4e00\u6837\u7684\u3002\u90fd\u662f\u8fd4\u56de\u6307\u5b9a\u5bf9\u8c61\u7684\u539f\u578b\uff08\u5373\uff0c\u5185\u90e8\u7684 [","[Prototype]","] \u5c5e\u6027\u7684\u503c\uff09\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Reflect.getPrototypeOf(target)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u9009"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"target"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u83b7\u53d6\u539f\u578b\u7684\u76ee\u6807\u5bf9\u8c61"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Y")))),(0,l.kt)("h3",{id:"reflecthas"},(0,l.kt)("a",{parentName:"h3",href:"http://es.xiecheng.live/es6/reflect.html#reflect-has"},"#"),"Reflect.has()"),(0,l.kt)("p",null,"Reflect.has \u7528\u4e8e\u68c0\u67e5\u4e00\u4e2a\u5bf9\u8c61\u662f\u5426\u62e5\u6709\u67d0\u4e2a\u5c5e\u6027\uff0c \u76f8\u5f53\u4e8ein \u64cd\u4f5c\u7b26"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Reflect.has(target, propertyKey)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u9009"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"target"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u83b7\u53d6\u539f\u578b\u7684\u76ee\u6807\u5bf9\u8c61"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"propertyKey"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5c5e\u6027\u540d\uff0c\u9700\u8981\u68c0\u67e5\u76ee\u6807\u5bf9\u8c61\u662f\u5426\u5b58\u5728\u6b64\u5c5e\u6027"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Y")))),(0,l.kt)("h3",{id:"reflectisextensible"},(0,l.kt)("a",{parentName:"h3",href:"http://es.xiecheng.live/es6/reflect.html#reflect-isextensible"},"#"),"Reflect.isExtensible()"),(0,l.kt)("p",null,"Reflect.isExtensible \u5224\u65ad\u4e00\u4e2a\u5bf9\u8c61\u662f\u5426\u53ef\u6269\u5c55 \uff08\u5373\u662f\u5426\u80fd\u591f\u6dfb\u52a0\u65b0\u7684\u5c5e\u6027\uff09\uff0c\u5b83\u4e0e Object.isExtensible() \u65b9\u6cd5\u4e00\u6837\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Reflect.isExtensible(target)")),(0,l.kt)("p",null,"*\u89e3\u91ca**"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u9009"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"target"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u83b7\u53d6\u539f\u578b\u7684\u76ee\u6807\u5bf9\u8c61"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Y")))),(0,l.kt)("h3",{id:"reflectownkeys"},(0,l.kt)("a",{parentName:"h3",href:"http://es.xiecheng.live/es6/reflect.html#reflect-ownkeys"},"#"),"Reflect.ownKeys()"),(0,l.kt)("p",null,"Reflect.ownKeys \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u7531\u76ee\u6807\u5bf9\u8c61\u81ea\u8eab\u7684\u5c5e\u6027\u952e\u7ec4\u6210\u7684\u6570\u7ec4\u3002\u5b83\u7684\u8fd4\u56de\u503c\u7b49\u540c\u4e8e Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Reflect.ownKeys(target)")),(0,l.kt)("p",null,"*\u89e3\u91ca**"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u9009"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"target"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u83b7\u53d6\u539f\u578b\u7684\u76ee\u6807\u5bf9\u8c61"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Y")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'Reflect.ownKeys({\n    z: 3,\n    y: 2,\n    x: 1\n}) // [ "z", "y", "x" ]\nReflect.ownKeys([]) // ["length"]\n\nvar sym = Symbol.for("comet")\nvar sym2 = Symbol.for("meteor")\nvar obj = {\n    [sym]: 0,\n    "str": 0,\n    "773": 0,\n    "0": 0,\n    [sym2]: 0,\n    "-1": 0,\n    "8": 0,\n    "second str": 0\n}\nReflect.ownKeys(obj)\n// [ "0", "8", "773", "str", "-1", "second str", Symbol(comet), Symbol(meteor) ]\n// Indexes in numeric order,\n// strings in insertion order,\n// symbols in insertion order\n')),(0,l.kt)("h3",{id:"reflectpreventextensions"},(0,l.kt)("a",{parentName:"h3",href:"http://es.xiecheng.live/es6/reflect.html#reflect-preventextensions"},"#"),"Reflect.preventExtensions()"),(0,l.kt)("p",null,"Reflect.preventExtensions \u65b9\u6cd5\u963b\u6b62\u65b0\u5c5e\u6027\u6dfb\u52a0\u5230\u5bf9\u8c61 \u4f8b\u5982\uff1a\u9632\u6b62\u5c06\u6765\u5bf9\u5bf9\u8c61\u7684\u6269\u5c55\u88ab\u6dfb\u52a0\u5230\u5bf9\u8c61\u4e2d)\u3002\u8be5\u65b9\u6cd5\u4e0e Object.preventExtensions() \u65b9\u6cd5\u4e00\u81f4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Reflect.preventExtensions(target)")),(0,l.kt)("p",null,"*\u89e3\u91ca**"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u9009"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"target"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u83b7\u53d6\u539f\u578b\u7684\u76ee\u6807\u5bf9\u8c61"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Y")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Objects are extensible by default.\nvar empty = {}\nReflect.isExtensible(empty) // === true\n\n// ...but that can be changed.\nReflect.preventExtensions(empty)\nReflect.isExtensible(empty) // === false\nReflect.preventExtensions(1)\n// TypeError: 1 is not an object\n\nObject.preventExtensions(1)\n// 1\n")),(0,l.kt)("h3",{id:"reflectset"},(0,l.kt)("a",{parentName:"h3",href:"http://es.xiecheng.live/es6/reflect.html#reflect-set"},"#"),"Reflect.set()"),(0,l.kt)("p",null,"Reflect.set \u65b9\u6cd5\u5141\u8bb8\u4f60\u5728\u5bf9\u8c61\u4e0a\u8bbe\u7f6e\u5c5e\u6027\u3002\u5b83\u7684\u4f5c\u7528\u662f\u7ed9\u5c5e\u6027\u8d4b\u503c\u5e76\u4e14\u5c31\u50cf property accessor \u8bed\u6cd5\u4e00\u6837\uff0c\u4f46\u662f\u5b83\u662f\u4ee5\u51fd\u6570\u7684\u65b9\u5f0f\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Reflect.set(target, propertyKey, value","[, receiver]",")")),(0,l.kt)("p",null,"*\u89e3\u91ca**"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u9009"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"target"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u83b7\u53d6\u539f\u578b\u7684\u76ee\u6807\u5bf9\u8c61"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"propertyKey"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u8bbe\u7f6e\u7684\u5c5e\u6027\u7684\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"value"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u8bbe\u7f6e\u7684\u503c"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"receiver"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5982\u679c\u9047\u5230 setter\uff0cthis \u5c06\u63d0\u4f9b\u7ed9\u76ee\u6807\u8c03\u7528"),(0,l.kt)("td",{parentName:"tr",align:"center"},"N")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// Object\nvar obj = {}\nReflect.set(obj, "prop", "value") // true\nobj.prop // "value"\n\n// Array\nvar arr = ["duck", "duck", "duck"]\nReflect.set(arr, 2, "goose") // true\narr[2] // "goose"\n\n// It can truncate an array.\nReflect.set(arr, "length", 1) // true\narr // ["duck"]\n\n// With just one argument, propertyKey and value are "undefined".\nvar obj = {}\nReflect.set(obj) // true\nReflect.getOwnPropertyDescriptor(obj, "undefined")\n// { value: undefined, writable: true, enumerable: true, configurable: true }\n')),(0,l.kt)("h3",{id:"reflectsetprototypeof"},(0,l.kt)("a",{parentName:"h3",href:"http://es.xiecheng.live/es6/reflect.html#reflect-setprototypeof"},"#"),"Reflect.setPrototypeOf()"),(0,l.kt)("p",null,"Reflect.setPrototypeOf \u65b9\u6cd5\u6539\u53d8\u6307\u5b9a\u5bf9\u8c61\u7684\u539f\u578b \uff08\u5373\uff0c\u5185\u90e8\u7684 [","[Prototype]","] \u5c5e\u6027\u503c\uff09"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Reflect.setPrototypeOf(target, prototype)")),(0,l.kt)("p",null,"*\u89e3\u91ca**"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u9009"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"target"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u83b7\u53d6\u539f\u578b\u7684\u76ee\u6807\u5bf9\u8c61"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"prototype"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5bf9\u8c61\u7684\u65b0\u539f\u578b \uff08\u4e00\u4e2a\u5bf9\u8c61\u6216 null\uff09"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Y")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Reflect.setPrototypeOf({}, Object.prototype) // true\n\n// It can change an object's [[Prototype]] to null.\nReflect.setPrototypeOf({}, null) // true\n\n// Returns false if target is not extensible.\nReflect.setPrototypeOf(Object.freeze({}), null) // false\n\n// Returns false if it cause a prototype chain cycle.\nvar target = {}\nvar proto = Object.create(target)\nReflect.setPrototypeOf(target, proto) // false\n")),(0,l.kt)("p",null,"\u6ce8\u610f"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u4ee5\u4e0a\u6240\u6709 API \u7b2c\u4e00\u4e2a\u53c2\u6570\u662f Object \u7684\uff0c\u5982\u679c\u7ed9\u5b9a\u7684\u4e0d\u662f Object \u5219\u629b\u51fa\u4e00\u4e2a TypeError \u5f02\u5e38"),(0,l.kt)("h3",{id:"\u63a8\u8350\u9605\u8bfb"},(0,l.kt)("a",{parentName:"h3",href:"http://es.xiecheng.live/es6/reflect.html#%E6%8E%A8%E8%8D%90%E9%98%85%E8%AF%BB"},"#"),"\u63a8\u8350\u9605\u8bfb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://ponyfoo.com/articles/es6-reflection-in-depth"},"ES6 Reflection in Depth")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.stefanjudis.com/today-i-learned/the-global-reflect-object-its-use-cases-and-things-to-watch-out-for/"},"Reflect Usage")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect"},"Reflect"))))}u.isMDXComponent=!0}}]);