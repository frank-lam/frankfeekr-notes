"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9691],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2112:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],a={},c="JSON\u6269\u5c55",u={unversionedId:"frontend/es6/es2019/JSON\u6269\u5c55",id:"frontend/es6/es2019/JSON\u6269\u5c55",title:"JSON\u6269\u5c55",description:"JSON superset",source:"@site/docs/frontend/es6/06-es2019/06-JSON\u6269\u5c55.md",sourceDirName:"frontend/es6/06-es2019",slug:"/frontend/es6/es2019/JSON\u6269\u5c55",permalink:"/docs/frontend/es6/es2019/JSON\u6269\u5c55",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/es6/06-es2019/06-JSON\u6269\u5c55.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"frontend_es6",previous:{title:"\u53ef\u9009\u7684Catch Binding",permalink:"/docs/frontend/es6/es2019/\u53ef\u9009\u7684Catch Binding"},next:{title:"Symbol \u6269\u5c55",permalink:"/docs/frontend/es6/es2019/Symbol \u6269\u5c55"}},l={},p=[{value:"JSON superset",id:"json-superset",level:2},{value:"\u589e\u5f3a\u80fd\u529b",id:"\u589e\u5f3a\u80fd\u529b",level:2},{value:"\u63a8\u8350\u9605\u8bfb",id:"\u63a8\u8350\u9605\u8bfb",level:3}],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"json\u6269\u5c55"},"JSON\u6269\u5c55"),(0,i.kt)("h2",{id:"json-superset"},"JSON superset"),(0,i.kt)("p",null,"\u4ec0\u4e48\u662f JSON \u8d85\u96c6\uff1f\uff0c\u7b80\u800c\u8a00\u4e4b\u5c31\u662f\u8ba9 ECMAScript \u517c\u5bb9\u6240\u6709JSON\u652f\u6301\u7684\u6587\u672c\u3002 ECMAScript \u66fe\u5728\u6807\u51c6 JSON.parse \u90e8\u5206\u9610\u660e JSON \u786e\u4e3a\u5176\u4e00\u4e2a\u5b50\u96c6\uff0c\u4f46\u7531\u4e8e JSON \u5185\u5bb9\u53ef\u4ee5\u6b63\u5e38\u5305\u542b U+2028\u884c\u5206\u9694\u7b26 \u4e0e U+2029\u6bb5\u5206\u9694\u7b26\uff0c\u800cECMAScript \u5374\u4e0d\u884c\u3002"),(0,i.kt)("h2",{id:"\u589e\u5f3a\u80fd\u529b"},"\u589e\u5f3a\u80fd\u529b"),(0,i.kt)("p",null,"JSON.stringify \u5728 ES10 \u4fee\u590d\u4e86\u5bf9\u4e8e\u4e00\u4e9b\u8d85\u51fa\u8303\u56f4\u7684 Unicode \u5c55\u793a\b\u9519\u8bef\u7684\u95ee\u9898\u3002\u56e0\u4e3a JSON \u90fd\u662f\u88ab\u7f16\u7801\u6210 UTF-8\uff0c\u6240\u4ee5\u9047\u5230 0xD800\u20130xDFFF \u4e4b\u5185\u7684\u5b57\u7b26\u4f1a\u56e0\u4e3a\u65e0\u6cd5\u7f16\u7801\u6210 UTF-8 \u8fdb\u800c\u5bfc\u81f4\u663e\u793a\u9519\u8bef\u3002\u5728 ES10 \u5b83\u4f1a\u7528\u8f6c\u4e49\u5b57\u7b26\u7684\u65b9\u5f0f\u6765\u5904\u7406\u8fd9\u90e8\u5206\u5b57\u7b26\u800c\u975e\u7f16\u7801\u7684\u65b9\u5f0f\uff0c\u8fd9\u6837\u5c31\u4f1a\u6b63\u5e38\u663e\u793a\u4e86\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \\uD83D\\uDE0E  emoji \u591a\u5b57\u8282\u7684\u4e00\u4e2a\u5b57\u7b26\nconsole.log(JSON.stringify('\\uD83D\\uDE0E')) // \u7b11\u8138\n\n// \u5982\u679c\u6211\u4eec\u53ea\u53bb\u5176\u4e2d\u7684\u4e00\u90e8\u5206  \\uD83D \u8fd9\u5176\u5b9e\u662f\u4e2a\u65e0\u6548\u7684\u5b57\u7b26\u4e32\n// \u4e4b\u524d\u7684\u7248\u672c \uff0c\u8fd9\u4e9b\u5b57\u7b26\u5c06\u66ff\u6362\u4e3a\u7279\u6b8a\u5b57\u7b26\uff0c\u800c\u73b0\u5728\u5c06\u672a\u914d\u5bf9\u7684\u4ee3\u7406\u4ee3\u7801\u70b9\u8868\u793a\u4e3aJSON\u8f6c\u4e49\u5e8f\u5217\nconsole.log(JSON.stringify('\\uD83D')) // \"\\ud83d\"\n")),(0,i.kt)("h3",{id:"\u63a8\u8350\u9605\u8bfb"},"\u63a8\u8350\u9605\u8bfb"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://2ality.com/2019/01/well-formed-stringify.html"},"Well-formed JSON.stringify"))))}d.isMDXComponent=!0}}]);