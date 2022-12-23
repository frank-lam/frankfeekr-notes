"use strict";(self.webpackChunknotes_frankfeekr_cn=self.webpackChunknotes_frankfeekr_cn||[]).push([[8230],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=i(r),f=o,u=p["".concat(c,".").concat(f)]||p[f]||m[f]||l;return r?n.createElement(u,a(a({ref:t},d),{},{components:r})):n.createElement(u,a({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var i=2;i<l;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3611:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const l={},a="Promise.allSettled()",s={unversionedId:"frontend/es6/es2020/Promise.allSettled()",id:"frontend/es6/es2020/Promise.allSettled()",title:"Promise.allSettled()",description:"\u5b66\u4e60\u4e86ES\u65b0\u7279\u6027\uff0c\u6211\u4eec\u90fd\u77e5\u9053 Promise.all() \u5177\u6709\u5e76\u53d1\u6267\u884c\u5f02\u6b65\u4efb\u52a1\u7684\u80fd\u529b\u3002\u4f46\u5b83\u7684\u6700\u5927\u95ee\u9898\u5c31\u662f\u5982\u679c\u5176\u4e2d\u67d0\u4e2a\u4efb\u52a1\u51fa\u73b0\u5f02\u5e38(reject)\uff0c\u6240\u6709\u4efb\u52a1\u90fd\u4f1a\u6302\u6389\uff0cPromise\u76f4\u63a5\u8fdb\u5165\b reject \u72b6\u6001\u3002",source:"@site/docs/03.frontend/es6/07-es2020/04-Promise.allSettled().md",sourceDirName:"03.frontend/es6/07-es2020",slug:"/frontend/es6/es2020/Promise.allSettled()",permalink:"/docs/frontend/es6/es2020/Promise.allSettled()",draft:!1,editUrl:"https://github.com/frank-lam/frankfeekr-notes/tree/master/docs/03.frontend/es6/07-es2020/04-Promise.allSettled().md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"frontend_es6",previous:{title:"BigInt",permalink:"/docs/frontend/es6/es2020/BigInt"},next:{title:"globalThis",permalink:"/docs/frontend/es6/es2020/globalThis"}},c={},i=[{value:"\u63a8\u8350\u9605\u8bfb",id:"\u63a8\u8350\u9605\u8bfb",level:3}],d={toc:i};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"promiseallsettled"},"Promise.allSettled()"),(0,o.kt)("p",null,"\u5b66\u4e60\u4e86ES\u65b0\u7279\u6027\uff0c\u6211\u4eec\u90fd\u77e5\u9053 Promise.all() \u5177\u6709\u5e76\u53d1\u6267\u884c\u5f02\u6b65\u4efb\u52a1\u7684\u80fd\u529b\u3002\u4f46\u5b83\u7684\u6700\u5927\u95ee\u9898\u5c31\u662f\u5982\u679c\u5176\u4e2d\u67d0\u4e2a\u4efb\u52a1\u51fa\u73b0\u5f02\u5e38(reject)\uff0c\u6240\u6709\u4efb\u52a1\u90fd\u4f1a\u6302\u6389\uff0cPromise\u76f4\u63a5\u8fdb\u5165\b reject \u72b6\u6001\u3002"),(0,o.kt)("p",null,"\u573a\u666f\uff1a\u73b0\u5728\u9875\u9762\u4e0a\u6709\u4e09\u4e2a\u8bf7\u6c42\uff0c\u5206\u522b\u8bf7\u6c42\u4e0d\u540c\u7684\u6570\u636e\uff0c\u5982\u679c\u4e00\u4e2a\u63a5\u53e3\u670d\u52a1\u5f02\u5e38\uff0c\u6574\u4e2a\u90fd\u662f\u5931\u8d25\u7684\uff0c\u90fd\u65e0\u6cd5\u6e32\u67d3\u51fa\u6570\u636e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Promise.all([\n    Promise.reject({\n        code: 500,\n        msg: '\u670d\u52a1\u5f02\u5e38'\n    }),\n    Promise.resolve({\n        code: 200,\n        data: ['1', '2', '3']\n    }),\n    Promise.resolve({\n        code: 200,\n        data: ['4', '5', '6']\n    })\n]).then(res => {\n    console.log(res)\n    console.log('\u6210\u529f')\n}).catch(err => {\n    console.log(err)\n    console.log('\u5931\u8d25')\n})\n")),(0,o.kt)("p",null,"\u6211\u4eec\u9700\u8981\u4e00\u79cd\u673a\u5236\uff0c\u5982\u679c\u5e76\u53d1\u4efb\u52a1\u4e2d\uff0c\u65e0\u8bba\u4e00\u4e2a\u4efb\u52a1\u6b63\u5e38\u6216\u8005\u5f02\u5e38\uff0c\u90fd\u4f1a\u8fd4\u56de\u5bf9\u5e94\u7684\u7684\u72b6\u6001"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Promise.allSettled([\n    Promise.reject({\n        code: 500,\n        msg: '\u670d\u52a1\u5f02\u5e38'\n    }),\n    Promise.resolve({\n        code: 200,\n        data: ['1', '2', '3']\n    }),\n    Promise.resolve({\n        code: 200,\n        data: ['4', '5', '6']\n    })\n]).then(res => {\n    console.log(res)\n    // console.log('\u6210\u529f')\n    const data = res.filter(item => item.status === 'fulfilled')\n    console.log(data)\n}).catch(err => {\n    console.log(err)\n    console.log('\u5931\u8d25')\n})\n")),(0,o.kt)("h3",{id:"\u63a8\u8350\u9605\u8bfb"},"\u63a8\u8350\u9605\u8bfb"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled"},"Promise.allSettled()"))))}p.isMDXComponent=!0}}]);