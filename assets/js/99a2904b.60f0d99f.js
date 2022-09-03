"use strict";(self.webpackChunknotes_frankfeekr_cn=self.webpackChunknotes_frankfeekr_cn||[]).push([[4687],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=l.createContext({}),p=function(e){var n=l.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return l.createElement(u.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),f=a,k=m["".concat(u,".").concat(f)]||m[f]||i[f]||o;return t?l.createElement(k,r(r({ref:n},c),{},{components:t})):l.createElement(k,r({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6369:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>i,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var l=t(7462),a=(t(7294),t(3905));const o={},r="Function",s={unversionedId:"frontend/es6/es2015/Function",id:"frontend/es6/es2015/Function",title:"Function",description:"\u9ed8\u8ba4\u53c2\u6570",source:"@site/docs/03.frontend/es6/02-es2015/04-Function.md",sourceDirName:"03.frontend/es6/02-es2015",slug:"/frontend/es6/es2015/Function",permalink:"/docs/frontend/es6/es2015/Function",draft:!1,editUrl:"https://github.com/frank-lam/frankfeekr-notes/tree/master/docs/03.frontend/es6/02-es2015/04-Function.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"frontend_es6",previous:{title:"Array",permalink:"/docs/frontend/es6/es2015/Array"},next:{title:"Object",permalink:"/docs/frontend/es6/es2015/Object"}},u={},p=[{value:"\u9ed8\u8ba4\u53c2\u6570",id:"\u9ed8\u8ba4\u53c2\u6570",level:2},{value:"\u62d3\u5c55",id:"\u62d3\u5c55",level:3},{value:"Rest \u53c2\u6570",id:"rest-\u53c2\u6570",level:2},{value:"\u6269\u5c55\u8fd0\u7b97\u7b26",id:"\u6269\u5c55\u8fd0\u7b97\u7b26",level:2},{value:"length\u5c5e\u6027",id:"length\u5c5e\u6027",level:2},{value:"name\u5c5e\u6027",id:"name\u5c5e\u6027",level:2},{value:"\u7bad\u5934\u51fd\u6570",id:"\u7bad\u5934\u51fd\u6570",level:2},{value:"\u62d3\u5c55",id:"\u62d3\u5c55-1",level:3},{value:"\u7ec3\u4e60",id:"\u7ec3\u4e60",level:3},{value:"\u63a8\u8350\u9605\u8bfb",id:"\u63a8\u8350\u9605\u8bfb",level:3}],c={toc:p};function i(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"function"},"Function"),(0,a.kt)("h2",{id:"\u9ed8\u8ba4\u53c2\u6570"},"\u9ed8\u8ba4\u53c2\u6570"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u51fd\u6570\u800c\u8a00\uff0c\u7ecf\u5e38\u4f1a\u7528\u5230\u53c2\u6570\uff0c\u5173\u4e8e\u53c2\u6570\u7684\u9ed8\u8ba4\u503c\u901a\u5e38\u90fd\u662f\u5199\u5728\u51fd\u6570\u4f53\u4e2d\uff0c\u5982\u5728 ES5 \u7684\u65f6\u5019\u5927\u5bb6\u90fd\u4f1a\u8fd9\u4e48\u5199\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function foo(x, y) {\n    y = y || 'world'\n    console.log(x, y)\n}\nfoo('hello', 'imooc')\nfoo('hello', 0)\n")),(0,a.kt)("p",null,"\u5f53\u4e00\u4e2a\u51fd\u6570\u6709\u5f88\u591a\u53c2\u6570\u6d89\u53ca\u521d\u59cb\u5316\u7684\u65f6\u5019\uff0c\u8fd9\u6837\u5199\u4ee3\u7801\u6781\u5176\u4e11\u964b\uff0c\u6240\u4ee5\u5728 ES6 \u4e2d\u6539\u53d8\u4e86\u5bf9\u8fd9\u79cd\u77e5\u8bc6\u7684\u5199\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function foo(x, y = 'world') {\n    console.log(x, y)\n}\nfoo('hello', 0)\n")),(0,a.kt)("p",null,"TIP"),(0,a.kt)("p",null,"\u51fd\u6570\u53c2\u6570\u662f\u4ece\u5de6\u5230\u53f3\u89e3\u6790\uff0c\u5982\u679c\u6ca1\u6709\u9ed8\u8ba4\u503c\u4f1a\u88ab\u89e3\u6790\u6210 undefined"),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u60f3\u8ba9\u5177\u4f53\u67d0\u4e2a\u53c2\u6570\u4f7f\u7528\u9ed8\u8ba4\u503c\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 undefined \u8fdb\u884c\u8d4b\u503c\uff0c\u5982\u4e0b\u6bb5\u4ee3\u7801\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function f(x, y = 7, z = 42) {\n    return x + y + z\n}\nconsole.log(f(1, undefined, 43)) // 51\n")),(0,a.kt)("p",null,"\u5728ES6\u4e2d\u6211\u4eec\u4e0d\u4ec5\u53ef\u4ee5\u7ed9\u53c2\u6570\u9ed8\u8ba4\u8d4b\u503c\u5177\u4f53\u7684\u6570\u503c\uff0c\u540c\u65f6\u53c2\u6570\u8d4b\u503c\u652f\u6301\u53c2\u6570\u7684\u903b\u8f91\u8fd0\u7b97\u8fdb\u884c\u8d4b\u503c\uff0c\u5982\u4e0b\u6bb5\u4ee3\u7801\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function f(x, y = 7, z = x + y) {\n    return z * 0.5\n}\n\nconsole.log(f(1, 7)) // 4\n")),(0,a.kt)("p",null,"\u518d\u770b\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function ajax(url, {\n    body = '',\n    method = 'GET',\n    headers = {}\n} = {}) {\n    console.log(method)\n}\n\najax('http://www.imooc.com', {\n    method: 'POST'\n})\n")),(0,a.kt)("h3",{id:"\u62d3\u5c55"},"\u62d3\u5c55"),(0,a.kt)("p",null,"\u5728\u51fd\u6570\u4f53\u5185\uff0c\u6709\u65f6\u5019\u9700\u8981\u5224\u65ad\u51fd\u6570\u6709\u51e0\u4e2a\u53c2\u6570\uff0c\u4e00\u5171\u67092\u4e2a\u529e\u6cd5\u3002\u5728 ES5 \u4e2d\u53ef\u4ee5\u5728\u51fd\u6570\u4f53\u5185\u4f7f\u7528 arguments \u6765\u5224\u65ad\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function foo(a, b = 1, c) {\n    console.log(arguments.length)\n}\nfoo('a', 'b') //2\n")),(0,a.kt)("p",null,"\u7136\u800c\u5728 ES6 \u4e2d\u4e0d\u80fd\u518d\u4f7f\u7528 arguments \u6765\u5224\u65ad\u4e86\uff0c\u4f46\u53ef\u4ee5\u501f\u52a9 Function.length \u6765\u5224\u65ad\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function foo(a, b = 1, c) {\n    console.log(foo.length)\n}\nfoo('a', 'b') // 1\n")),(0,a.kt)("p",null,"\u7ec6\u5fc3\u7684\u540c\u5b66\u53d1\u73b0 Function.length \u7ed3\u679c\u548c arguments \u7684\u7ed3\u679c\u4e0d\u540c\uff01\u6ca1\u9519\uff0cFunction.length \u662f\u7edf\u8ba1\u7b2c\u4e00\u4e2a\u9ed8\u8ba4\u53c2\u6570\u524d\u9762\u7684\u53d8\u91cf\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function foo(a = 2, b = 1, c) {\n    console.log(foo.length)\n}\nfoo('a', 'b') // 0\n")),(0,a.kt)("h2",{id:"rest-\u53c2\u6570"},"Rest \u53c2\u6570"),(0,a.kt)("p",null,"\u5728\u5199\u51fd\u6570\u7684\u65f6\u5019\uff0c\u90e8\u5206\u60c5\u51b5\u6211\u4eec\u4e0d\u662f\u5f88\u786e\u5b9a\u53c2\u6570\u6709\u591a\u5c11\u4e2a\uff0c\u6bd4\u5982\u6c42\u548c\u8fd0\u7b97\uff0c\u4e4b\u524d\u90fd\u662f\u8fd9\u4e48\u505a\u7684\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function sum() {\n    let num = 0\n    Array.prototype.forEach.call(arguments, function(item) {\n        num += item * 1\n    })\n    return num\n}\n\nconsole.log(sum(1, 2, 3)) // 6\nconsole.log(sum(1, 2, 3, 4)) // 10\n")),(0,a.kt)("p",null,"\u5176\u5b9e\u5728\u4e0a\u9762\u8bf4\u8fc7\uff0c\u8fd9\u4e2a\u4ee3\u7801\u5728 ES5 \u4e2d\u53ef\u4ee5\u8fd9\u4e48\u5199\uff0c\u5728 ES6 \u5c31\u4e0d\u80fd\u8fd9\u4e48\u5199\u4e86\uff0c\u56e0\u4e3a arguments \u7684\u95ee\u9898\u3002\u73b0\u5728\u9700\u8981\u8fd9\u6837\u5199\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function sum(...nums) {\n    let num = 0\n    nums.forEach(function(item) {\n        num += item * 1\n    })\n    return num\n}\n\nconsole.log(sum(1, 2, 3)) // 6\nconsole.log(sum(1, 2, 3, 4)) // 10\n")),(0,a.kt)("p",null,"\u5f53\u7136\uff0cRest Parameter \u4e5f\u53ef\u4ee5\u548c\u5176\u4ed6\u53c2\u6570\u4e00\u8d77\u6765\u7528\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function sum(base, ...nums) {\n    let num = base\n    nums.forEach(function(item) {\n        num += item * 1\n    })\n    return num\n}\n\nconsole.log(sum(30, 1, 2, 3)) // 36\nconsole.log(sum(30, 1, 2, 3, 4)) // 40\n")),(0,a.kt)("p",null,"\u6ce8\u610f"),(0,a.kt)("p",null,"arguments \u4e0d\u662f\u6570\u7ec4\uff0c\u6240\u4ee5\u4e0d\u80fd\u76f4\u63a5\u4f7f\u7528\u6570\u7ec4\u7684\u539f\u751f API \u5982 forEach\uff0c\u800c Rest Parameter \u662f\u6570\u7ec4\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u6570\u7ec4\u7684\u539f\u751f API\u3002"),(0,a.kt)("h2",{id:"\u6269\u5c55\u8fd0\u7b97\u7b26"},"\u6269\u5c55\u8fd0\u7b97\u7b26"),(0,a.kt)("p",null,"Spread Operator \u548c Rest Parameter \u662f\u5f62\u4f3c\u4f46\u76f8\u53cd\u610f\u4e49\u7684\u64cd\u4f5c\u7b26\uff0c\u7b80\u5355\u7684\u6765\u8bf4 Rest Parameter \u662f\u628a\u4e0d\u5b9a\u7684\u53c2\u6570\u201c\u6536\u655b\u201d\u5230\u6570\u7ec4\uff0c\u800c Spread Operator \u662f\u628a\u56fa\u5b9a\u7684\u6570\u7ec4\u5185\u5bb9\u201c\u6253\u6563\u201d\u5230\u5bf9\u5e94\u7684\u53c2\u6570\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function sum(x = 1, y = 2, z = 3) {\n    return x + y + z\n}\n\nconsole.log(sum(...[4])) // 9\nconsole.log(sum(...[4, 5])) // 12\nconsole.log(sum(...[4, 5, 6])) // 15\n")),(0,a.kt)("p",null,"\u5927\u5bb6\u53ef\u4ee5\u597d\u597d\u4f53\u4f1a\u4e0b\u524d\u9762\u4e24\u4e2a\u793a\u4f8b\uff0cRest Parameter \u7528\u6765\u89e3\u51b3\u51fd\u6570\u53c2\u6570\u4e0d\u786e\u5b9a\u7684\u573a\u666f\uff0cSpread Operator \u7528\u6765\u89e3\u51b3\u5df2\u77e5\u53c2\u6570\u96c6\u5408\u5e94\u7528\u5230\u56fa\u5b9a\u53c2\u6570\u7684\u51fd\u6570\u4e0a\uff0c\u5982\u679c\u6ca1\u6709\u8fd9\u4e2a\u8bed\u6cd5\uff0c\u53ef\u80fd\u9700\u8981\u8fd9\u6837\u505a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function sum(x = 1, y = 2, z = 3) {\n    return x + y + z\n}\n\nconsole.log(sum.apply(null, [4])) // 9\nconsole.log(sum.apply(null, [4, 5])) // 12\nconsole.log(sum.apply(null, [4, 5, 6])) // 15\n")),(0,a.kt)("p",null,"\u8fd9\u79cd\u4ee3\u7801\u662f\u5426\u4f3c\u66fe\u76f8\u8bc6\uff1f\u6240\u4ee5\u6709\u4e86 Spread Operator \u4f60\u7684\u64cd\u4f5c\u5c06\u66f4\u52a0\u7b80\u5355\uff01"),(0,a.kt)("h2",{id:"length\u5c5e\u6027"},"length\u5c5e\u6027"),(0,a.kt)("p",null,"\u51fd\u6570\u6307\u5b9a\u4e86\u9ed8\u8ba4\u503c\u4ee5\u540e\uff0c\u51fd\u6570\u7684length\u5c5e\u6027\uff0c\u5c06\u8fd4\u56de\u6ca1\u6709\u6307\u5b9a\u9ed8\u8ba4\u503c\u7684\u53c2\u6570\u4e2a\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function foo(x = 1, y = 2, z = 3) {\n    console.log(x, y)\n}\nconsole.log(foo.length)\n// 0\n")),(0,a.kt)("h2",{id:"name\u5c5e\u6027"},"name\u5c5e\u6027"),(0,a.kt)("p",null,"\u51fd\u6570\u7684name\u5c5e\u6027\uff0c\u8fd4\u56de\u8be5\u51fd\u6570\u7684\u51fd\u6570\u540d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function foo() {}\n\nfoo.name // "foo"\n')),(0,a.kt)("h2",{id:"\u7bad\u5934\u51fd\u6570"},"\u7bad\u5934\u51fd\u6570"),(0,a.kt)("p",null,"\u7bad\u5934\u51fd\u6570\u53ef\u4ee5\u8bf4\u662f ES6 \u5f88\u5927\u7684\u798f\u5229\u4e86\uff0c\u4e0d\u7ba1\u4f60\u662f\u51fd\u6570\u5f0f\u7231\u597d\u8005\u8fd8\u662f\u9762\u5411\u5bf9\u8c61\u5f00\u53d1\u8005\uff0c\u51fd\u6570\u662f\u5fc5\u987b\u8981\u7528\u5230\u7684\u4e1c\u897f\u3002\u4e4b\u524d\u58f0\u660e\u51fd\u6570\u9700\u8981\u4f7f\u7528 function\uff0c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function hello() {\n    console.log('say hello')\n}\n// \u6216\n\nlet hello = function() {\n    console.log('say hello')\n}\n")),(0,a.kt)("p",null,"\u73b0\u5728\u53ef\u4ee5\u8fd9\u6837\u505a\u4e86\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let hello = () => {\n    console.log('say hello')\n}\n")),(0,a.kt)("p",null,"\u5982\u679c\u5e26\u53c2\u6570\u8be5\u600e\u4e48\u505a\u5462\uff1f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let hello = (name) => {\n    console.log('say hello', name)\n}\n// \u6216\u8005\n\nlet hello = name => {\n    console.log('say hello', name)\n}\n")),(0,a.kt)("p",null,"TIP"),(0,a.kt)("p",null,"\u5982\u679c\u53ea\u6709\u4e00\u4e2a\u53c2\u6570\uff0c\u53ef\u4ee5\u7701\u7565\u62ec\u53f7\uff0c\u5982\u679c\u5927\u4e8e\u4e00\u4e2a\u53c2\u6570\u4e00\u5b9a\u8981\u8bb0\u5f97\u5e26\u62ec\u53f7"),(0,a.kt)("p",null,"\u51fd\u6570\u7684\u58f0\u660e\u548c\u53c2\u6570\u5199\u7684\u5f88\u6e05\u695a\u4e86\uff0c\u90a3\u4e48\u5bf9\u4e8e\u8fd4\u56de\u503c\u6709\u4ec0\u4e48\u8981\u6ce8\u610f\u7684\u5730\u65b9\u5462\uff1f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5982\u679c\u8fd4\u56de\u503c\u662f\u8868\u8fbe\u5f0f")),(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u8fd4\u56de\u503c\u662f\u8868\u8fbe\u5f0f\u53ef\u4ee5\u7701\u7565 return \u548c {}"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  let pow = x => x * x\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5982\u679c\u8fd4\u56de\u503c\u662f\u5b57\u9762\u91cf\u5bf9\u8c61")),(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u8fd4\u56de\u503c\u662f\u5b57\u9762\u91cf\u5bf9\u8c61\uff0c\u4e00\u5b9a\u8981\u7528\u5c0f\u62ec\u53f7\u5305\u8d77\u6765"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  let person = (name) => ({\n      age: 20,\n      addr: 'Beijing City'\n  })\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5176\u4ed6")),(0,a.kt)("p",{parentName:"li"},"\u5176\u4ed6\u60c5\u51b5\u5c31\u8981\u4e2d\u89c4\u4e2d\u77e9\u7684\u5199\u597d\u5566\uff01"))),(0,a.kt)("h3",{id:"\u62d3\u5c55-1"},"\u62d3\u5c55"),(0,a.kt)("p",null,"\u770b\u4e0a\u53bb\u7bad\u5934\u51fd\u6570\u771f\u7684\u5f88\u6f02\u4eae\uff0c\u53ef\u662f\u5b83\u6709\u4ec0\u4e48\u795e\u79d8\u4e4b\u5904\u5417\uff1fthis\uff0c\u5bf9\uff0c\u5c31\u662f\u5b83\u3002\u666e\u901a\u51fd\u6570\u548c\u7bad\u5934\u51fd\u6570\u5bf9 this \u7684\u5904\u7406\u65b9\u5f0f\u662f\u622a\u7136\u4e0d\u540c\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let foo = {\n    name: 'es',\n    say: function() {\n        console.log(this.name)\n    }\n}\n\nconsole.log(foo.say()) // es\n")),(0,a.kt)("p",null,"\u8fd9\u662f\u7528\u666e\u901a\u51fd\u6570\u7684\u5199\u6cd5\uff0csay \u5728\u88ab\u8c03\u7528\u4e4b\u540e\uff0cthis \u6307\u5411\u7684\u662f\u8c03\u7528 say \u65b9\u6cd5\u7684\u5bf9\u8c61\uff0c\u663e\u793a\u662f foo \u5bf9\u8c61\uff0c\u6240\u4ee5 this === foo this.name \u4e5f\u5c31\u662f foo.name\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let foo = {\n    name: 'es',\n    say: () => {\n        console.log(this.name, this)\n    }\n}\nconsole.log(foo.say()) // undefined\n")),(0,a.kt)("p",null,"\u56e0\u4e3a\u7bad\u5934\u51fd\u6570\u4e2d\u5bf9 this \u7684\u5904\u7406\u662f\u5b9a\u4e49\u65f6\uff0cthis \u7684\u6307\u5411\u4e5f\u5c31\u662f foo \u5916\u5c42\u7684\u6240\u6307\u5411\u7684 window\uff0c\u800c window \u6ca1\u6709 name \u5c5e\u6027\uff0c\u6240\u4ee5\u7ed3\u679c\u662f undefined\u3002"),(0,a.kt)("p",null,"\u603b\u7ed3"),(0,a.kt)("p",null,"1\u3001\u7bad\u5934\u51fd\u6570\u4e2dthis\u6307\u5411\u5b9a\u4e49\u65f6\u6240\u5728\u7684\u5bf9\u8c61\uff0c\u800c\u4e0d\u662f\u8c03\u7528\u65f6\u6240\u5728\u7684\u5bf9\u8c61"),(0,a.kt)("p",null,"2\u3001\u7bad\u5934\u51fd\u6570\u4e0d\u53ef\u4ee5\u5f53\u4f5c\u6784\u9020\u51fd\u6570"),(0,a.kt)("p",null,"3\u3001\u7bad\u5934\u51fd\u6570\u4e0d\u53ef\u4ee5\u4f7f\u7528arguments\u5bf9\u8c61"),(0,a.kt)("h3",{id:"\u7ec3\u4e60"},"\u7ec3\u4e60"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5982\u4f55\u7528\u7bad\u5934\u51fd\u6570\u6765\u5b9e\u73b0\u4e00\u4e2a\u6570\u7ec4\u6392\u5e8f\u7684\u95ee\u9898"),(0,a.kt)("li",{parentName:"ol"},"\u7bad\u5934\u51fd\u6570\u5bf9 this \u7684\u5904\u7406\u8fd8\u6709\u4ec0\u4e48\u5999\u7528")),(0,a.kt)("h3",{id:"\u63a8\u8350\u9605\u8bfb"},"\u63a8\u8350\u9605\u8bfb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions"},"\u7bad\u5934\u51fd\u6570")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters"},"\u9ed8\u8ba4\u53c2\u6570")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://alligator.io/js/rest-parameters-es6/"},"rest-parameters")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dev.to/sagar/three-dots---in-javascript-26ci"},"Three dots ( \u2026 ) in JavaScript"))))}i.isMDXComponent=!0}}]);