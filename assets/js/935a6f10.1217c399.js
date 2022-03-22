"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2750],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,b=f["".concat(s,".").concat(d)]||f[d]||p[d]||l;return t?r.createElement(b,a(a({ref:n},u),{},{components:t})):r.createElement(b,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2817:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=t(7462),o=t(3366),l=(t(7294),t(3905)),a=["components"],i={},s="globalThis",c={unversionedId:"frontend/es6/es2020/globalThis",id:"frontend/es6/es2020/globalThis",title:"globalThis",description:"Javascript \u5728\u4e0d\u540c\u7684\u73af\u5883\u83b7\u53d6\u5168\u5c40\u5bf9\u8c61\u6709\u4e0d\u901a\u7684\u65b9\u5f0f\uff1a",source:"@site/docs/frontend/es6/07-es2020/05-globalThis.md",sourceDirName:"frontend/es6/07-es2020",slug:"/frontend/es6/es2020/globalThis",permalink:"/docs/frontend/es6/es2020/globalThis",editUrl:"https://github.com/frank-lam/frankfeekr-notes/tree/master/docs/frontend/es6/07-es2020/05-globalThis.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"frontend_es6",previous:{title:"Promise.allSettled()",permalink:"/docs/frontend/es6/es2020/Promise.allSettled()"},next:{title:"\u53ef\u9009\u94fe Optional chaining",permalink:"/docs/frontend/es6/es2020/\u53ef\u9009\u94fe Optional chaining"}},u={},p=[{value:"\u63a8\u8350\u9605\u8bfb",id:"\u63a8\u8350\u9605\u8bfb",level:3}],f={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"globalthis"},"globalThis"),(0,l.kt)("p",null,"Javascript \u5728\u4e0d\u540c\u7684\u73af\u5883\u83b7\u53d6\u5168\u5c40\u5bf9\u8c61\u6709\u4e0d\u901a\u7684\u65b9\u5f0f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"node \u4e2d\u901a\u8fc7 global"),(0,l.kt)("li",{parentName:"ul"},"web \u4e2d\u901a\u8fc7 window, self \u7b49.")),(0,l.kt)("p",null,"TIP"),(0,l.kt)("p",null,"self\uff1a\u6253\u5f00\u4efb\u4f55\u4e00\u4e2a\u7f51\u9875\uff0c\u6d4f\u89c8\u5668\u4f1a\u9996\u5148\u521b\u5efa\u4e00\u4e2a\u7a97\u53e3\uff0c\u8fd9\u4e2a\u7a97\u53e3\u5c31\u662f\u4e00\u4e2awindow\u5bf9\u8c61\uff0c\u4e5f\u662fjs\u8fd0\u884c\u6240\u4f9d\u9644\u7684\u5168\u5c40\u73af\u5883\u5bf9\u8c61\u548c\u5168\u5c40\u4f5c\u7528\u57df\u5bf9\u8c61\u3002self \u6307\u7a97\u53e3\u672c\u8eab\uff0c\u5b83\u8fd4\u56de\u7684\u5bf9\u8c61\u8ddfwindow\u5bf9\u8c61\u662f\u4e00\u6a21\u4e00\u6837\u7684\u3002\u4e5f\u6b63\u56e0\u4e3a\u5982\u6b64\uff0cwindow\u5bf9\u8c61\u7684\u5e38\u7528\u65b9\u6cd5\u548c\u51fd\u6570\u90fd\u53ef\u4ee5\u7528self\u4ee3\u66ffwindow\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"self.setTimeout(() => {\n    console.log(123)\n}, 1000)\n")),(0,l.kt)("p",null,"\u4ee5\u524d\u60f3\u8981\u83b7\u53d6\u5168\u5c40\u5bf9\u8c61\uff0c\u53ef\u901a\u8fc7\u4e00\u4e2a\u5168\u5c40\u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const getGlobal = () => {\n    if (typeof self !== 'undefined') {\n        return self\n    }\n    if (typeof window !== 'undefined') {\n        return window\n    }\n    if (typeof global !== 'undefined') {\n        return global\n    }\n    throw new Error('\u65e0\u6cd5\u627e\u5230\u5168\u5c40\u5bf9\u8c61')\n}\n\nconst globals = getGlobal()\nconsole.log(globals)\n")),(0,l.kt)("p",null,"globalThis \u63d0\u4f9b\u4e86\u4e00\u4e2a\u6807\u51c6\u7684\u65b9\u5f0f\u6765\u83b7\u53d6\u4e0d\u540c\u73af\u5883\u4e0b\u7684\u5168\u5c40 this \u5bf9\u8c61\uff08\u4e5f\u5c31\u662f\u5168\u5c40\u5bf9\u8c61\u81ea\u8eab\uff09\u3002\u4e0d\u50cf window \u6216\u8005 self \u8fd9\u4e9b\u5c5e\u6027\uff0c\u5b83\u786e\u4fdd\u53ef\u4ee5\u5728\u6709\u65e0\u7a97\u53e3\u7684\u5404\u79cd\u73af\u5883\u4e0b\u6b63\u5e38\u5de5\u4f5c\u3002\u6240\u4ee5\uff0c\u4f60\u53ef\u4ee5\u5b89\u5fc3\u7684\u4f7f\u7528 globalThis\uff0c\u4e0d\u5fc5\u62c5\u5fc3\u5b83\u7684\u8fd0\u884c\u73af\u5883\u3002\u4e3a\u4fbf\u4e8e\u8bb0\u5fc6\uff0c\u4f60\u53ea\u9700\u8981\u8bb0\u4f4f\uff0c\u5168\u5c40\u4f5c\u7528\u57df\u4e2d\u7684 this \u5c31\u662f globalThis\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"console.log(globalThis)\n")),(0,l.kt)("h3",{id:"\u63a8\u8350\u9605\u8bfb"},"\u63a8\u8350\u9605\u8bfb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis"},"globalThis"))))}d.isMDXComponent=!0}}]);