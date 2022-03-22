"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2108],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,s=new Array(l);s[0]=p;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8067:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return d}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),s=["components"],a={},i="Promise.allSettled()",c={unversionedId:"frontend/es6/es2020/Promise.allSettled()",id:"frontend/es6/es2020/Promise.allSettled()",title:"Promise.allSettled()",description:"\u5b66\u4e60\u4e86ES\u65b0\u7279\u6027\uff0c\u6211\u4eec\u90fd\u77e5\u9053 Promise.all() \u5177\u6709\u5e76\u53d1\u6267\u884c\u5f02\u6b65\u4efb\u52a1\u7684\u80fd\u529b\u3002\u4f46\u5b83\u7684\u6700\u5927\u95ee\u9898\u5c31\u662f\u5982\u679c\u5176\u4e2d\u67d0\u4e2a\u4efb\u52a1\u51fa\u73b0\u5f02\u5e38(reject)\uff0c\u6240\u6709\u4efb\u52a1\u90fd\u4f1a\u6302\u6389\uff0cPromise\u76f4\u63a5\u8fdb\u5165\b reject \u72b6\u6001\u3002",source:"@site/docs/frontend/es6/07-es2020/04-Promise.allSettled().md",sourceDirName:"frontend/es6/07-es2020",slug:"/frontend/es6/es2020/Promise.allSettled()",permalink:"/docs/frontend/es6/es2020/Promise.allSettled()",editUrl:"https://github.com/frank-lam/frankfeekr-notes/tree/master/docs/frontend/es6/07-es2020/04-Promise.allSettled().md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"frontend_es6",previous:{title:"BigInt",permalink:"/docs/frontend/es6/es2020/BigInt"},next:{title:"globalThis",permalink:"/docs/frontend/es6/es2020/globalThis"}},u={},d=[{value:"\u63a8\u8350\u9605\u8bfb",id:"\u63a8\u8350\u9605\u8bfb",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"promiseallsettled"},"Promise.allSettled()"),(0,l.kt)("p",null,"\u5b66\u4e60\u4e86ES\u65b0\u7279\u6027\uff0c\u6211\u4eec\u90fd\u77e5\u9053 Promise.all() \u5177\u6709\u5e76\u53d1\u6267\u884c\u5f02\u6b65\u4efb\u52a1\u7684\u80fd\u529b\u3002\u4f46\u5b83\u7684\u6700\u5927\u95ee\u9898\u5c31\u662f\u5982\u679c\u5176\u4e2d\u67d0\u4e2a\u4efb\u52a1\u51fa\u73b0\u5f02\u5e38(reject)\uff0c\u6240\u6709\u4efb\u52a1\u90fd\u4f1a\u6302\u6389\uff0cPromise\u76f4\u63a5\u8fdb\u5165\b reject \u72b6\u6001\u3002"),(0,l.kt)("p",null,"\u573a\u666f\uff1a\u73b0\u5728\u9875\u9762\u4e0a\u6709\u4e09\u4e2a\u8bf7\u6c42\uff0c\u5206\u522b\u8bf7\u6c42\u4e0d\u540c\u7684\u6570\u636e\uff0c\u5982\u679c\u4e00\u4e2a\u63a5\u53e3\u670d\u52a1\u5f02\u5e38\uff0c\u6574\u4e2a\u90fd\u662f\u5931\u8d25\u7684\uff0c\u90fd\u65e0\u6cd5\u6e32\u67d3\u51fa\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Promise.all([\n    Promise.reject({\n        code: 500,\n        msg: '\u670d\u52a1\u5f02\u5e38'\n    }),\n    Promise.resolve({\n        code: 200,\n        data: ['1', '2', '3']\n    }),\n    Promise.resolve({\n        code: 200,\n        data: ['4', '5', '6']\n    })\n]).then(res => {\n    console.log(res)\n    console.log('\u6210\u529f')\n}).catch(err => {\n    console.log(err)\n    console.log('\u5931\u8d25')\n})\n")),(0,l.kt)("p",null,"\u6211\u4eec\u9700\u8981\u4e00\u79cd\u673a\u5236\uff0c\u5982\u679c\u5e76\u53d1\u4efb\u52a1\u4e2d\uff0c\u65e0\u8bba\u4e00\u4e2a\u4efb\u52a1\u6b63\u5e38\u6216\u8005\u5f02\u5e38\uff0c\u90fd\u4f1a\u8fd4\u56de\u5bf9\u5e94\u7684\u7684\u72b6\u6001"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Promise.allSettled([\n    Promise.reject({\n        code: 500,\n        msg: '\u670d\u52a1\u5f02\u5e38'\n    }),\n    Promise.resolve({\n        code: 200,\n        data: ['1', '2', '3']\n    }),\n    Promise.resolve({\n        code: 200,\n        data: ['4', '5', '6']\n    })\n]).then(res => {\n    console.log(res)\n    // console.log('\u6210\u529f')\n    const data = res.filter(item => item.status === 'fulfilled')\n    console.log(data)\n}).catch(err => {\n    console.log(err)\n    console.log('\u5931\u8d25')\n})\n")),(0,l.kt)("h3",{id:"\u63a8\u8350\u9605\u8bfb"},"\u63a8\u8350\u9605\u8bfb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled"},"Promise.allSettled()"))))}m.isMDXComponent=!0}}]);