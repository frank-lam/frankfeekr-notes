"use strict";(self.webpackChunknotes_frankfeekr_cn=self.webpackChunknotes_frankfeekr_cn||[]).push([[9725],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(m,c(c({ref:n},p),{},{components:t})):r.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={},c="\u53ef\u9009\u7684Catch Binding",s={unversionedId:"frontend/es6/es2019/\u53ef\u9009\u7684Catch Binding",id:"frontend/es6/es2019/\u53ef\u9009\u7684Catch Binding",title:"\u53ef\u9009\u7684Catch Binding",description:"\u5728 ES10 \u4e4b\u524d\u6211\u4eec\u90fd\u662f\u8fd9\u6837\u6355\u83b7\u5f02\u5e38\u7684\uff1a",source:"@site/docs/03.frontend/es6/06-es2019/05-\u53ef\u9009\u7684Catch Binding.md",sourceDirName:"03.frontend/es6/06-es2019",slug:"/frontend/es6/es2019/\u53ef\u9009\u7684Catch Binding",permalink:"/docs/frontend/es6/es2019/\u53ef\u9009\u7684Catch Binding",draft:!1,editUrl:"https://github.com/frank-lam/frankfeekr-notes/tree/master/docs/03.frontend/es6/06-es2019/05-\u53ef\u9009\u7684Catch Binding.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"frontend_es6",previous:{title:"\u4fee\u8ba2 Function.prototype.toString()",permalink:"/docs/frontend/es6/es2019/\u4fee\u8ba2 Function.prototype.toString()"},next:{title:"JSON\u6269\u5c55",permalink:"/docs/frontend/es6/es2019/JSON\u6269\u5c55"}},i={},l=[{value:"\u6848\u4f8b\uff1a\u9a8c\u8bc1\u53c2\u6570\u662f\u5426\u4e3ajson\u683c\u5f0f",id:"\u6848\u4f8b\u9a8c\u8bc1\u53c2\u6570\u662f\u5426\u4e3ajson\u683c\u5f0f",level:3}],p={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u53ef\u9009\u7684catch-binding"},"\u53ef\u9009\u7684Catch Binding"),(0,o.kt)("p",null,"\u5728 ES10 \u4e4b\u524d\u6211\u4eec\u90fd\u662f\u8fd9\u6837\u6355\u83b7\u5f02\u5e38\u7684\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"try {\n    // tryCode\n} catch (err) {\n    // catchCode\n}\n")),(0,o.kt)("p",null,"\u5728\u8fd9\u91cc err \u662f\u5fc5\u987b\u7684\u53c2\u6570\uff0c\u5728 ES10 \u53ef\u4ee5\u7701\u7565\u8fd9\u4e2a\u53c2\u6570\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"try {\n    console.log('Foobar')\n} catch {\n    console.error('Bar')\n}\n")),(0,o.kt)("h3",{id:"\u6848\u4f8b\u9a8c\u8bc1\u53c2\u6570\u662f\u5426\u4e3ajson\u683c\u5f0f"},"\u6848\u4f8b\uff1a\u9a8c\u8bc1\u53c2\u6570\u662f\u5426\u4e3ajson\u683c\u5f0f"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u9700\u6c42\u6211\u4eec\u53ea\u9700\u8981\u8fd4\u56detrue\u6216false\uff0c\u5e76\u4e0d\u5173\u5fc3catch\u7684\u53c2\u6570\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const validJSON = json => {\n    try {\n        JSON.parse(json)\n        return true\n    } catch {\n        return false\n    }\n}\n\nconst json = \'{"name":"imooc", "course": "es"}\'\nconsole.log(validJSON(json))\n')))}d.isMDXComponent=!0}}]);