"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8710],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||c;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},859:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=t(7462),o=t(3366),c=(t(7294),t(3905)),a=["components"],i={},s="\u53ef\u9009\u7684Catch Binding",u={unversionedId:"frontend/es6/es2019/\u53ef\u9009\u7684Catch Binding",id:"frontend/es6/es2019/\u53ef\u9009\u7684Catch Binding",title:"\u53ef\u9009\u7684Catch Binding",description:"\u5728 ES10 \u4e4b\u524d\u6211\u4eec\u90fd\u662f\u8fd9\u6837\u6355\u83b7\u5f02\u5e38\u7684\uff1a",source:"@site/docs/frontend/es6/06-es2019/05-\u53ef\u9009\u7684Catch Binding.md",sourceDirName:"frontend/es6/06-es2019",slug:"/frontend/es6/es2019/\u53ef\u9009\u7684Catch Binding",permalink:"/docs/frontend/es6/es2019/\u53ef\u9009\u7684Catch Binding",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/es6/06-es2019/05-\u53ef\u9009\u7684Catch Binding.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"frontend_es6",previous:{title:"\u4fee\u8ba2 Function.prototype.toString()",permalink:"/docs/frontend/es6/es2019/\u4fee\u8ba2 Function.prototype.toString()"},next:{title:"JSON\u6269\u5c55",permalink:"/docs/frontend/es6/es2019/JSON\u6269\u5c55"}},l={},p=[{value:"\u6848\u4f8b\uff1a\u9a8c\u8bc1\u53c2\u6570\u662f\u5426\u4e3ajson\u683c\u5f0f",id:"\u6848\u4f8b\u9a8c\u8bc1\u53c2\u6570\u662f\u5426\u4e3ajson\u683c\u5f0f",level:3}],f={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u53ef\u9009\u7684catch-binding"},"\u53ef\u9009\u7684Catch Binding"),(0,c.kt)("p",null,"\u5728 ES10 \u4e4b\u524d\u6211\u4eec\u90fd\u662f\u8fd9\u6837\u6355\u83b7\u5f02\u5e38\u7684\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"try {\n    // tryCode\n} catch (err) {\n    // catchCode\n}\n")),(0,c.kt)("p",null,"\u5728\u8fd9\u91cc err \u662f\u5fc5\u987b\u7684\u53c2\u6570\uff0c\u5728 ES10 \u53ef\u4ee5\u7701\u7565\u8fd9\u4e2a\u53c2\u6570\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"try {\n    console.log('Foobar')\n} catch {\n    console.error('Bar')\n}\n")),(0,c.kt)("h3",{id:"\u6848\u4f8b\u9a8c\u8bc1\u53c2\u6570\u662f\u5426\u4e3ajson\u683c\u5f0f"},"\u6848\u4f8b\uff1a\u9a8c\u8bc1\u53c2\u6570\u662f\u5426\u4e3ajson\u683c\u5f0f"),(0,c.kt)("p",null,"\u8fd9\u4e2a\u9700\u6c42\u6211\u4eec\u53ea\u9700\u8981\u8fd4\u56detrue\u6216false\uff0c\u5e76\u4e0d\u5173\u5fc3catch\u7684\u53c2\u6570\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},'const validJSON = json => {\n    try {\n        JSON.parse(json)\n        return true\n    } catch {\n        return false\n    }\n}\n\nconst json = \'{"name":"imooc", "course": "es"}\'\nconsole.log(validJSON(json))\n')))}d.isMDXComponent=!0}}]);