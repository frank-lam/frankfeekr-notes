"use strict";(self.webpackChunknotes_frankfeekr_cn=self.webpackChunknotes_frankfeekr_cn||[]).push([[8032],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),i=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=i(t),d=o,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return t?r.createElement(m,c(c({ref:n},p),{},{components:t})):r.createElement(m,c({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=t[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7835:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],l={},s="\u5e42\u8fd0\u7b97\u7b26**",i={unversionedId:"frontend/es6/es2016/\u5e42\u8fd0\u7b97\u7b26",id:"frontend/es6/es2016/\u5e42\u8fd0\u7b97\u7b26",title:"\u5e42\u8fd0\u7b97\u7b26**",description:"\u5982\u679c\u4e0d\u4f7f\u7528\u4efb\u4f55\u51fd\u6570\uff0c\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u6570\u7684\u6c42\u5e42\u8fd0\u7b97\uff1f",source:"@site/docs/03.frontend/es6/03-es2016/02-\u5e42\u8fd0\u7b97\u7b26.md",sourceDirName:"03.frontend/es6/03-es2016",slug:"/frontend/es6/es2016/\u5e42\u8fd0\u7b97\u7b26",permalink:"/docs/frontend/es6/es2016/\u5e42\u8fd0\u7b97\u7b26",editUrl:"https://github.com/frank-lam/frankfeekr-notes/tree/master/docs/03.frontend/es6/03-es2016/02-\u5e42\u8fd0\u7b97\u7b26.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"frontend_es6",previous:{title:"Array.prototype.includes()",permalink:"/docs/frontend/es6/es2016/Array.prototype.includes()"},next:{title:"ECMAScript 2017 (ES8)",permalink:"/docs/category/ecmascript-2017-es8-1"}},p={},u=[],f={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5e42\u8fd0\u7b97\u7b26"},"\u5e42\u8fd0\u7b97\u7b26**"),(0,a.kt)("p",null,"\u5982\u679c\u4e0d\u4f7f\u7528\u4efb\u4f55\u51fd\u6570\uff0c\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u6570\u7684\u6c42\u5e42\u8fd0\u7b97\uff1f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function pow(x, y) {\n    let res = 1\n    for (let i = 0; i < y; i++) {\n        res *= x\n    }\n    return res\n}\n\npow(2, 10)\n// 1024\n")),(0,a.kt)("p",null,"\u9664\u4e86\u81ea\u5df1\u5c01\u88c5\u51fd\u6570\u6765\u5b9e\u73b0\uff0c\u4e5f\u53ef\u662f\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Math.pow()")," \u6765\u5b8c\u6210\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Math.pow() \u51fd\u6570\u8fd4\u56de\u57fa\u6570\uff08base\uff09\u7684\u6307\u6570\uff08exponent\uff09\u6b21\u5e42\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log(Math.pow(2, 10)) // 1024\n")),(0,a.kt)("p",null,"\u5728 ES7 \u53ef\u4ee5\u8fd9\u6837\u5199\u4e86\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log(2 ** 10) // 1024\n")),(0,a.kt)("p",null,"\u6ce8\u610f"),(0,a.kt)("p",null,"\u5e42\u8fd0\u7b97\u7b26\u7684\u4e24\u4e2a*\u53f7\u4e4b\u95f4\u4e0d\u80fd\u51fa\u73b0\u7a7a\u683c\uff0c\u5426\u5219\u8bed\u6cd5\u4f1a\u62a5\u9519\u3002"))}d.isMDXComponent=!0}}]);