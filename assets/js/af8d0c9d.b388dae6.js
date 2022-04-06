"use strict";(self.webpackChunknotes_frankfeekr_cn=self.webpackChunknotes_frankfeekr_cn||[]).push([[9548],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(t),g=o,m=f["".concat(c,".").concat(g)]||f[g]||p[g]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6192:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],l={},c=void 0,s={unversionedId:"frontend/es6/es2020/BigInt",id:"frontend/es6/es2020/BigInt",title:"BigInt",description:"\u5728 ES10 \u589e\u52a0\u4e86\u65b0\u7684\u539f\u59cb\u6570\u636e\u7c7b\u578b\uff1aBigInt\uff0c\u8868\u793a\u4e00\u4e2a\u4efb\u610f\u7cbe\u5ea6\u7684\u6574\u6570\uff0c\u53ef\u4ee5\u8868\u793a\u8d85\u957f\u6570\u636e\uff0c\u53ef\u4ee5\u8d85\u51fa2\u768453\u6b21\u65b9\u3002",source:"@site/docs/03.frontend/es6/07-es2020/03-BigInt.md",sourceDirName:"03.frontend/es6/07-es2020",slug:"/frontend/es6/es2020/BigInt",permalink:"/docs/frontend/es6/es2020/BigInt",editUrl:"https://github.com/frank-lam/frankfeekr-notes/tree/master/docs/03.frontend/es6/07-es2020/03-BigInt.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"frontend_es6",previous:{title:"Dynamic Import",permalink:"/docs/frontend/es6/es2020/Dynamic Import"},next:{title:"Promise.allSettled()",permalink:"/docs/frontend/es6/es2020/Promise.allSettled()"}},u={},p=[{value:"\u65b9\u5f0f\u4e00\uff1a\u6570\u5b57\u540e\u9762\u589e\u52a0n",id:"\u65b9\u5f0f\u4e00\u6570\u5b57\u540e\u9762\u589e\u52a0n",level:4},{value:"\u65b9\u5f0f\u4e8c\uff1a\u4f7f\u7528 BigInt \u51fd\u6570",id:"\u65b9\u5f0f\u4e8c\u4f7f\u7528-bigint-\u51fd\u6570",level:4},{value:"\u63a8\u8350\u9605\u8bfb",id:"\u63a8\u8350\u9605\u8bfb",level:3}],f={toc:p};function g(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bigint"},"BigInt"),(0,i.kt)("p",null,"\u5728 ES10 \u589e\u52a0\u4e86\u65b0\u7684\u539f\u59cb\u6570\u636e\u7c7b\u578b\uff1aBigInt\uff0c\u8868\u793a\u4e00\u4e2a\u4efb\u610f\u7cbe\u5ea6\u7684\u6574\u6570\uff0c\u53ef\u4ee5\u8868\u793a\u8d85\u957f\u6570\u636e\uff0c\u53ef\u4ee5\u8d85\u51fa2\u768453\u6b21\u65b9\u3002"),(0,i.kt)("p",null,"Js \u4e2d Number\u7c7b\u578b\u53ea\u80fd\u5b89\u5168\u7684\u8868\u793a-(2^53-1)\u81f3 2^53-1 \u8303\u7684\u503c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"console.log(2 ** 53) // es7 \u5e42\u8fd0\u7b97\u7b26\nconsole.log(Number.MAX_SAFE_INTEGER) // \u6700\u5927\u503c-1\n")),(0,i.kt)("p",null,"\u4f7f\u7528 BigInt \u6709\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,i.kt)("h4",{id:"\u65b9\u5f0f\u4e00\u6570\u5b57\u540e\u9762\u589e\u52a0n"},"\u65b9\u5f0f\u4e00\uff1a\u6570\u5b57\u540e\u9762\u589e\u52a0n"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const bigInt = 9007199254740993n\nconsole.log(bigInt)\nconsole.log(typeof bigInt) // bigint\n\nconsole.log(1n == 1) // true\nconsole.log(1n === 1) // false\n")),(0,i.kt)("h4",{id:"\u65b9\u5f0f\u4e8c\u4f7f\u7528-bigint-\u51fd\u6570"},"\u65b9\u5f0f\u4e8c\uff1a\u4f7f\u7528 BigInt \u51fd\u6570"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const bigIntNum = BigInt(9007199254740993n)\nconsole.log(bigIntNum)\n")),(0,i.kt)("h3",{id:"\u63a8\u8350\u9605\u8bfb"},"\u63a8\u8350\u9605\u8bfb"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://v8.dev/features/bigint"},"BigInt: arbitrary-precision integers in JavaScript")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt"},"BigInt"))))}g.isMDXComponent=!0}}]);