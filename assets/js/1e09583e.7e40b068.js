"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1483],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(m,s(s({ref:n},u),{},{components:t})):r.createElement(m,s({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7065:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),s=["components"],i={},c="\u53ef\u9009\u94fe Optional chaining",l={unversionedId:"frontend/es6/es2020/\u53ef\u9009\u94fe Optional chaining",id:"frontend/es6/es2020/\u53ef\u9009\u94fe Optional chaining",title:"\u53ef\u9009\u94fe Optional chaining",description:"\u53ef\u8ba9\u6211\u4eec\u5728\u67e5\u8be2\u5177\u6709\u591a\u5c42\u7ea7\u7684\u5bf9\u8c61\u65f6\uff0c\u4e0d\u518d\u9700\u8981\u8fdb\u884c\u5197\u4f59\u7684\u5404\u79cd\u524d\u7f6e\u6821\u9a8c\u3002",source:"@site/docs/frontend/es6/07-es2020/06-\u53ef\u9009\u94fe Optional chaining.md",sourceDirName:"frontend/es6/07-es2020",slug:"/frontend/es6/es2020/\u53ef\u9009\u94fe Optional chaining",permalink:"/docs/frontend/es6/es2020/\u53ef\u9009\u94fe Optional chaining",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/es6/07-es2020/06-\u53ef\u9009\u94fe Optional chaining.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"frontend_es6",previous:{title:"globalThis",permalink:"/docs/frontend/es6/es2020/globalThis"},next:{title:"\u7a7a\u503c\u5408\u5e76\u8fd0\u7b97\u7b26\uff08Nullish coalescing Operator\uff09",permalink:"/docs/frontend/es6/es2020/\u7a7a\u503c\u5408\u5e76\u8fd0\u7b97\u7b26\uff08Nullish coalescing Operator\uff09"}},u={},p=[{value:"\u63a8\u8350\u9605\u8bfb",id:"\u63a8\u8350\u9605\u8bfb",level:3}],d={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u53ef\u9009\u94fe-optional-chaining"},"\u53ef\u9009\u94fe Optional chaining"),(0,a.kt)("p",null,"\u53ef\u8ba9\u6211\u4eec\u5728\u67e5\u8be2\u5177\u6709\u591a\u5c42\u7ea7\u7684\u5bf9\u8c61\u65f6\uff0c\u4e0d\u518d\u9700\u8981\u8fdb\u884c\u5197\u4f59\u7684\u5404\u79cd\u524d\u7f6e\u6821\u9a8c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const user = {\n    address: {\n        street: 'xx\u8857\u9053',\n        getNum() {\n            return '80\u53f7'\n        }\n    }\n}\n")),(0,a.kt)("p",null,"\u5728\u4e4b\u524d\u7684\u8bed\u6cd5\u4e2d\uff0c\u60f3\u83b7\u53d6\u5230\u6df1\u5c42\u5c5e\u6027\u6216\u65b9\u6cd5\uff0c\u4e0d\u5f97\u4e0d\u505a\u7684\u524d\u7f6e\u6821\u9a8c\uff0c\u5426\u5219\u5f88\u5bb9\u6613\u547d\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"Uncaught TypeError: Cannot read property...")," \u8fd9\u79cd\u9519\u8bef\uff0c\u8fd9\u6781\u6709\u53ef\u80fd\u8ba9\u4f60\u6574\u4e2a\u5e94\u7528\u6302\u6389\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const street = user && user.address && user.address.street\nconst num = user && user.address && user.address.getNum && user.address.getNum()\nconsole.log(street, num)\n")),(0,a.kt)("p",null,"\u7528\u4e86 Optional Chaining \uff0c\u4e0a\u9762\u4ee3\u7801\u4f1a\u53d8\u6210"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const street2 = user?.address?.street\nconst num2 = user?.address?.getNum?.()\nconsole.log(street2, num2)\n")),(0,a.kt)("p",null,"\u53ef\u9009\u94fe\u4e2d\u7684 ? \u8868\u793a\u5982\u679c\u95ee\u53f7\u5de6\u8fb9\u8868\u8fbe\u5f0f\u6709\u503c, \u5c31\u4f1a\u7ee7\u7eed\u67e5\u8be2\u95ee\u53f7\u540e\u9762\u7684\u5b57\u6bb5\u3002\u6839\u636e\u4e0a\u9762\u53ef\u4ee5\u770b\u51fa\uff0c\u7528\u53ef\u9009\u94fe\u53ef\u4ee5\u5927\u91cf\u7b80\u5316\u7c7b\u4f3c\u7e41\u7410\u7684\u524d\u7f6e\u6821\u9a8c\u64cd\u4f5c\uff0c\u800c\u4e14\u66f4\u5b89\u5168\u3002"),(0,a.kt)("h3",{id:"\u63a8\u8350\u9605\u8bfb"},"\u63a8\u8350\u9605\u8bfb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/%E5%8F%AF%E9%80%89%E9%93%BE"},"Optional chaining"))))}f.isMDXComponent=!0}}]);