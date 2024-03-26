"use strict";(self.webpackChunknotes_frankfeekr_cn=self.webpackChunknotes_frankfeekr_cn||[]).push([[9059],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=i(t),u=o,f=m["".concat(c,".").concat(u)]||m[u]||y[u]||l;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,s=new Array(l);s[0]=u;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[m]="string"==typeof e?e:o,s[1]=a;for(var i=2;i<l;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7957:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>a,toc:()=>i});var r=t(8168),o=(t(6540),t(5680));const l={},s="Symbol \u6269\u5c55",a={unversionedId:"frontend/es6/es2019/Symbol \u6269\u5c55",id:"frontend/es6/es2019/Symbol \u6269\u5c55",title:"Symbol \u6269\u5c55",description:"Symbol.prototype.description",source:"@site/docs/03.frontend/es6/06-es2019/07-Symbol \u6269\u5c55.md",sourceDirName:"03.frontend/es6/06-es2019",slug:"/frontend/es6/es2019/Symbol \u6269\u5c55",permalink:"/docs/frontend/es6/es2019/Symbol \u6269\u5c55",draft:!1,editUrl:"https://github.com/frank-lam/frankfeekr-notes/tree/master/docs/03.frontend/es6/06-es2019/07-Symbol \u6269\u5c55.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"frontend_es6",previous:{title:"JSON\u6269\u5c55",permalink:"/docs/frontend/es6/es2019/JSON\u6269\u5c55"},next:{title:"ECMAScript 2020 (ES11)",permalink:"/docs/category/ecmascript-2020-es11-1"}},c={},i=[{value:"Symbol.prototype.description",id:"symbolprototypedescription",level:2}],p={toc:i},m="wrapper";function y(e){let{components:n,...t}=e;return(0,o.yg)(m,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"symbol-\u6269\u5c55"},"Symbol \u6269\u5c55"),(0,o.yg)("h2",{id:"symbolprototypedescription"},"Symbol.prototype.description"),(0,o.yg)("p",null,"\u6211\u4eec\u77e5\u9053\uff0cSymbol \u7684\u63cf\u8ff0\u53ea\u88ab\u5b58\u50a8\u5728\u5185\u90e8\u7684 ",(0,o.yg)("inlineCode",{parentName:"p"},"Description")," \uff0c\u6ca1\u6709\u76f4\u63a5\u5bf9\u5916\u66b4\u9732\uff0c\u6211\u4eec\u53ea\u6709\u8c03\u7528 Symbol \u7684 toString() \u65f6\u624d\u53ef\u4ee5\u8bfb\u53d6\u8fd9\u4e2a\u5c5e\u6027\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"const name = Symbol('es')\nconsole.log(name.toString()) // Symbol(es)\nconsole.log(name) // Symbol(es)\nconsole.log(name === 'Symbol(es)') // false\nconsole.log(name.toString() === 'Symbol(es)') // true\n")),(0,o.yg)("p",null,"\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7 description \u65b9\u6cd5\u83b7\u53d6 Symbol \u7684\u63cf\u8ff0:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"const name = Symbol('es')\nconsole.log(name.description) // es\nconsole.log(name.description === 'es') // true\n")))}y.isMDXComponent=!0}}]);