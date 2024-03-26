"use strict";(self.webpackChunknotes_frankfeekr_cn=self.webpackChunknotes_frankfeekr_cn||[]).push([[7687],{5680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>y});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,y=u["".concat(l,".").concat(d)]||u[d]||f[d]||i;return t?n.createElement(y,s(s({ref:r},p),{},{components:t})):n.createElement(y,s({ref:r},p))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=d;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5782:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=t(8168),o=(t(6540),t(5680));const i={},s="JSON\u6269\u5c55",a={unversionedId:"frontend/es6/es2019/JSON\u6269\u5c55",id:"frontend/es6/es2019/JSON\u6269\u5c55",title:"JSON\u6269\u5c55",description:"JSON superset",source:"@site/docs/03.frontend/es6/06-es2019/06-JSON\u6269\u5c55.md",sourceDirName:"03.frontend/es6/06-es2019",slug:"/frontend/es6/es2019/JSON\u6269\u5c55",permalink:"/docs/frontend/es6/es2019/JSON\u6269\u5c55",draft:!1,editUrl:"https://github.com/frank-lam/frankfeekr-notes/tree/master/docs/03.frontend/es6/06-es2019/06-JSON\u6269\u5c55.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"frontend_es6",previous:{title:"\u53ef\u9009\u7684Catch Binding",permalink:"/docs/frontend/es6/es2019/\u53ef\u9009\u7684Catch Binding"},next:{title:"Symbol \u6269\u5c55",permalink:"/docs/frontend/es6/es2019/Symbol \u6269\u5c55"}},l={},c=[{value:"JSON superset",id:"json-superset",level:2},{value:"\u589e\u5f3a\u80fd\u529b",id:"\u589e\u5f3a\u80fd\u529b",level:2},{value:"\u63a8\u8350\u9605\u8bfb",id:"\u63a8\u8350\u9605\u8bfb",level:3}],p={toc:c},u="wrapper";function f(e){let{components:r,...t}=e;return(0,o.yg)(u,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"json\u6269\u5c55"},"JSON\u6269\u5c55"),(0,o.yg)("h2",{id:"json-superset"},"JSON superset"),(0,o.yg)("p",null,"\u4ec0\u4e48\u662f JSON \u8d85\u96c6\uff1f\uff0c\u7b80\u800c\u8a00\u4e4b\u5c31\u662f\u8ba9 ECMAScript \u517c\u5bb9\u6240\u6709JSON\u652f\u6301\u7684\u6587\u672c\u3002 ECMAScript \u66fe\u5728\u6807\u51c6 JSON.parse \u90e8\u5206\u9610\u660e JSON \u786e\u4e3a\u5176\u4e00\u4e2a\u5b50\u96c6\uff0c\u4f46\u7531\u4e8e JSON \u5185\u5bb9\u53ef\u4ee5\u6b63\u5e38\u5305\u542b U+2028\u884c\u5206\u9694\u7b26 \u4e0e U+2029\u6bb5\u5206\u9694\u7b26\uff0c\u800cECMAScript \u5374\u4e0d\u884c\u3002"),(0,o.yg)("h2",{id:"\u589e\u5f3a\u80fd\u529b"},"\u589e\u5f3a\u80fd\u529b"),(0,o.yg)("p",null,"JSON.stringify \u5728 ES10 \u4fee\u590d\u4e86\u5bf9\u4e8e\u4e00\u4e9b\u8d85\u51fa\u8303\u56f4\u7684 Unicode \u5c55\u793a\b\u9519\u8bef\u7684\u95ee\u9898\u3002\u56e0\u4e3a JSON \u90fd\u662f\u88ab\u7f16\u7801\u6210 UTF-8\uff0c\u6240\u4ee5\u9047\u5230 0xD800\u20130xDFFF \u4e4b\u5185\u7684\u5b57\u7b26\u4f1a\u56e0\u4e3a\u65e0\u6cd5\u7f16\u7801\u6210 UTF-8 \u8fdb\u800c\u5bfc\u81f4\u663e\u793a\u9519\u8bef\u3002\u5728 ES10 \u5b83\u4f1a\u7528\u8f6c\u4e49\u5b57\u7b26\u7684\u65b9\u5f0f\u6765\u5904\u7406\u8fd9\u90e8\u5206\u5b57\u7b26\u800c\u975e\u7f16\u7801\u7684\u65b9\u5f0f\uff0c\u8fd9\u6837\u5c31\u4f1a\u6b63\u5e38\u663e\u793a\u4e86\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"// \\uD83D\\uDE0E  emoji \u591a\u5b57\u8282\u7684\u4e00\u4e2a\u5b57\u7b26\nconsole.log(JSON.stringify('\\uD83D\\uDE0E')) // \u7b11\u8138\n\n// \u5982\u679c\u6211\u4eec\u53ea\u53bb\u5176\u4e2d\u7684\u4e00\u90e8\u5206  \\uD83D \u8fd9\u5176\u5b9e\u662f\u4e2a\u65e0\u6548\u7684\u5b57\u7b26\u4e32\n// \u4e4b\u524d\u7684\u7248\u672c \uff0c\u8fd9\u4e9b\u5b57\u7b26\u5c06\u66ff\u6362\u4e3a\u7279\u6b8a\u5b57\u7b26\uff0c\u800c\u73b0\u5728\u5c06\u672a\u914d\u5bf9\u7684\u4ee3\u7406\u4ee3\u7801\u70b9\u8868\u793a\u4e3aJSON\u8f6c\u4e49\u5e8f\u5217\nconsole.log(JSON.stringify('\\uD83D')) // \"\\ud83d\"\n")),(0,o.yg)("h3",{id:"\u63a8\u8350\u9605\u8bfb"},"\u63a8\u8350\u9605\u8bfb"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"http://2ality.com/2019/01/well-formed-stringify.html"},"Well-formed JSON.stringify"))))}f.isMDXComponent=!0}}]);