"use strict";(self.webpackChunknotes_frankfeekr_cn=self.webpackChunknotes_frankfeekr_cn||[]).push([[8032],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(m,c(c({ref:t},i),{},{components:n})):r.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},c="\u5e42\u8fd0\u7b97\u7b26**",l={unversionedId:"frontend/es6/es2016/\u5e42\u8fd0\u7b97\u7b26",id:"frontend/es6/es2016/\u5e42\u8fd0\u7b97\u7b26",title:"\u5e42\u8fd0\u7b97\u7b26**",description:"\u5982\u679c\u4e0d\u4f7f\u7528\u4efb\u4f55\u51fd\u6570\uff0c\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u6570\u7684\u6c42\u5e42\u8fd0\u7b97\uff1f",source:"@site/docs/03.frontend/es6/03-es2016/02-\u5e42\u8fd0\u7b97\u7b26.md",sourceDirName:"03.frontend/es6/03-es2016",slug:"/frontend/es6/es2016/\u5e42\u8fd0\u7b97\u7b26",permalink:"/docs/frontend/es6/es2016/\u5e42\u8fd0\u7b97\u7b26",draft:!1,editUrl:"https://github.com/frank-lam/frankfeekr-notes/tree/master/docs/03.frontend/es6/03-es2016/02-\u5e42\u8fd0\u7b97\u7b26.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"frontend_es6",previous:{title:"Array.prototype.includes()",permalink:"/docs/frontend/es6/es2016/Array.prototype.includes()"},next:{title:"ECMAScript 2017 (ES8)",permalink:"/docs/category/ecmascript-2017-es8-1"}},s={},p=[],i={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5e42\u8fd0\u7b97\u7b26"},"\u5e42\u8fd0\u7b97\u7b26**"),(0,o.kt)("p",null,"\u5982\u679c\u4e0d\u4f7f\u7528\u4efb\u4f55\u51fd\u6570\uff0c\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u6570\u7684\u6c42\u5e42\u8fd0\u7b97\uff1f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function pow(x, y) {\n    let res = 1\n    for (let i = 0; i < y; i++) {\n        res *= x\n    }\n    return res\n}\n\npow(2, 10)\n// 1024\n")),(0,o.kt)("p",null,"\u9664\u4e86\u81ea\u5df1\u5c01\u88c5\u51fd\u6570\u6765\u5b9e\u73b0\uff0c\u4e5f\u53ef\u662f\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Math.pow()")," \u6765\u5b8c\u6210\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Math.pow() \u51fd\u6570\u8fd4\u56de\u57fa\u6570\uff08base\uff09\u7684\u6307\u6570\uff08exponent\uff09\u6b21\u5e42\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"console.log(Math.pow(2, 10)) // 1024\n")),(0,o.kt)("p",null,"\u5728 ES7 \u53ef\u4ee5\u8fd9\u6837\u5199\u4e86\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"console.log(2 ** 10) // 1024\n")),(0,o.kt)("p",null,"\u6ce8\u610f"),(0,o.kt)("p",null,"\u5e42\u8fd0\u7b97\u7b26\u7684\u4e24\u4e2a*\u53f7\u4e4b\u95f4\u4e0d\u80fd\u51fa\u73b0\u7a7a\u683c\uff0c\u5426\u5219\u8bed\u6cd5\u4f1a\u62a5\u9519\u3002"))}u.isMDXComponent=!0}}]);