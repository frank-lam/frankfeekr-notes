"use strict";(self.webpackChunknotes_frankfeekr_cn=self.webpackChunknotes_frankfeekr_cn||[]).push([[6028],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>f});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return r?t.createElement(d,i(i({ref:n},p),{},{components:r})):t.createElement(d,i({ref:n},p))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2781:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var t=r(7462),a=(r(7294),r(3905));const o={},i="\u5c3e\u9017\u53f7 Trailing commas",c={unversionedId:"frontend/es6/es2017/\u5c3e\u9017\u53f7 Trailing commas",id:"frontend/es6/es2017/\u5c3e\u9017\u53f7 Trailing commas",title:"\u5c3e\u9017\u53f7 Trailing commas",description:"ES8 \u5141\u8bb8\u51fd\u6570\u7684\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u6709\u5c3e\u9017\u53f7\uff08Trailing comma\uff09\u3002",source:"@site/docs/03.frontend/es6/04-es2017/04-\u5c3e\u9017\u53f7 Trailing commas.md",sourceDirName:"03.frontend/es6/04-es2017",slug:"/frontend/es6/es2017/\u5c3e\u9017\u53f7 Trailing commas",permalink:"/docs/frontend/es6/es2017/\u5c3e\u9017\u53f7 Trailing commas",draft:!1,editUrl:"https://github.com/frank-lam/frankfeekr-notes/tree/master/docs/03.frontend/es6/04-es2017/04-\u5c3e\u9017\u53f7 Trailing commas.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"frontend_es6",previous:{title:"String \u6269\u5c55",permalink:"/docs/frontend/es6/es2017/String \u6269\u5c55"},next:{title:"ECMAScript 2018 (ES9)",permalink:"/docs/category/ecmascript-2018-es9-1"}},l={},s=[{value:"\u63a8\u8350\u9605\u8bfb",id:"\u63a8\u8350\u9605\u8bfb",level:3}],p={toc:s};function m(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5c3e\u9017\u53f7-trailing-commas"},"\u5c3e\u9017\u53f7 Trailing commas"),(0,a.kt)("p",null,"ES8 \u5141\u8bb8\u51fd\u6570\u7684\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u6709\u5c3e\u9017\u53f7\uff08Trailing comma\uff09\u3002"),(0,a.kt)("p",null,"\u6b64\u524d\uff0c\u51fd\u6570\u5b9a\u4e49\u548c\u8c03\u7528\u65f6\uff0c\u90fd\u4e0d\u5141\u8bb8\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u540e\u9762\u51fa\u73b0\u9017\u53f7\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function clownsEverywhere(\n    param1,\n    param2\n) {\n    /* ... */\n}\n\nclownsEverywhere(\n    'foo',\n    'bar'\n)\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u5982\u679c\u5728param2\u6216bar\u540e\u9762\u52a0\u4e00\u4e2a\u9017\u53f7\uff0c\u5c31\u4f1a\u62a5\u9519\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u50cf\u4e0a\u9762\u8fd9\u6837\uff0c\u5c06\u53c2\u6570\u5199\u6210\u591a\u884c\uff08\u5373\u6bcf\u4e2a\u53c2\u6570\u5360\u636e\u4e00\u884c\uff09\uff0c\u4ee5\u540e\u4fee\u6539\u4ee3\u7801\u7684\u65f6\u5019\uff0c\u60f3\u4e3a\u51fd\u6570clownsEverywhere\u6dfb\u52a0\u7b2c\u4e09\u4e2a\u53c2\u6570\uff0c\u6216\u8005\u8c03\u6574\u53c2\u6570\u7684\u6b21\u5e8f\uff0c\u5c31\u52bf\u5fc5\u8981\u5728\u539f\u6765\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u540e\u9762\u6dfb\u52a0\u4e00\u4e2a\u9017\u53f7\u3002\u8fd9\u5bf9\u4e8e\u7248\u672c\u7ba1\u7406\u7cfb\u7edf\u6765\u8bf4\uff0c\u5c31\u4f1a\u663e\u793a\u6dfb\u52a0\u9017\u53f7\u7684\u90a3\u4e00\u884c\u4e5f\u53d1\u751f\u4e86\u53d8\u52a8\u3002\u8fd9\u770b\u4e0a\u53bb\u6709\u70b9\u5197\u4f59\uff0c\u56e0\u6b64\u65b0\u7684\u8bed\u6cd5\u5141\u8bb8\u5b9a\u4e49\u548c\u8c03\u7528\u65f6\uff0c\u5c3e\u90e8\u76f4\u63a5\u6709\u4e00\u4e2a\u9017\u53f7\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function clownsEverywhere(\n    param1,\n    param2,\n) {\n    /* ... */\n}\n\nclownsEverywhere(\n    'foo',\n    'bar',\n)\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u7684\u89c4\u5b9a\u4e5f\u4f7f\u5f97\uff0c\u51fd\u6570\u53c2\u6570\u4e0e\u6570\u7ec4\u548c\u5bf9\u8c61\u7684\u5c3e\u9017\u53f7\u89c4\u5219\uff0c\u4fdd\u6301\u4e00\u81f4\u4e86\u3002"),(0,a.kt)("h3",{id:"\u63a8\u8350\u9605\u8bfb"},"\u63a8\u8350\u9605\u8bfb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Trailing_commas"},"Trailing_commas"))))}m.isMDXComponent=!0}}]);