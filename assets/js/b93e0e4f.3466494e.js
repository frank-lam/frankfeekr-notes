"use strict";(self.webpackChunknotes_frankfeekr_cn=self.webpackChunknotes_frankfeekr_cn||[]).push([[9908],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=l,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(k,o(o({ref:t},i),{},{components:n})):r.createElement(k,o({ref:t},i))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:l,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const a={},o="Module",s={unversionedId:"frontend/es6/es2015/Module",id:"frontend/es6/es2015/Module",title:"Module",description:"\u6a21\u5757\u5316\u7684\u53d1\u5c55",source:"@site/docs/03.frontend/es6/02-es2015/17-Module.md",sourceDirName:"03.frontend/es6/02-es2015",slug:"/frontend/es6/es2015/Module",permalink:"/docs/frontend/es6/es2015/Module",draft:!1,editUrl:"https://github.com/frank-lam/frankfeekr-notes/tree/master/docs/03.frontend/es6/02-es2015/17-Module.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{},sidebar:"frontend_es6",previous:{title:"Iterator",permalink:"/docs/frontend/es6/es2015/Iterator"},next:{title:"ECMAScript 2016 (ES7)",permalink:"/docs/category/ecmascript-2016-es7-1"}},p={},u=[{value:"\u6a21\u5757\u5316\u7684\u53d1\u5c55",id:"\u6a21\u5757\u5316\u7684\u53d1\u5c55",level:2},{value:"export",id:"export",level:2},{value:"as",id:"as",level:2},{value:"export default",id:"export-default",level:2},{value:"import",id:"import",level:2},{value:"\u63a8\u8350\u9605\u8bfb",id:"\u63a8\u8350\u9605\u8bfb",level:3}],i={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"module"},"Module"),(0,l.kt)("h2",{id:"\u6a21\u5757\u5316\u7684\u53d1\u5c55"},"\u6a21\u5757\u5316\u7684\u53d1\u5c55"),(0,l.kt)("p",null,"\u6280\u672f\u7684\u8bde\u751f\u662f\u4e3a\u4e86\u89e3\u51b3\u67d0\u4e2a\u95ee\u9898\uff0c\u6a21\u5757\u5316\u4e5f\u662f\u3002 \u968f\u7740\u524d\u7aef\u7684\u53d1\u5c55\uff0cweb\u6280\u672f\u65e5\u8d8b\u6210\u719f\uff0cjs\u529f\u80fd\u8d8a\u6765\u8d8a\u591a\uff0c\u4ee3\u7801\u91cf\u4e5f\u8d8a\u6765\u8d8a\u5927\u3002\u4e4b\u524d\u4e00\u4e2a\u9879\u76ee\u901a\u5e38\u5404\u4e2a\u9875\u9762\u516c\u7528\u4e00\u4e2ajs\uff0c\u4f46\u662fjs\u9010\u6e10\u62c6\u5206\uff0c\u9879\u76ee\u4e2d\u5f15\u5165\u7684js\u8d8a\u6765\u8d8a\u591a. \u5728js\u6a21\u5757\u5316\u8bde\u751f\u4e4b\u524d\uff0c\u5f00\u53d1\u8005\u9762\u4e34\u5f88\u591a\u95ee\u9898:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5168\u5c40\u53d8\u91cf\u6c61\u67d3\uff1a\u5404\u4e2a\u6587\u4ef6\u7684\u53d8\u91cf\u90fd\u662f\u6302\u8f7d\u5230window\u5bf9\u8c61\u4e0a\uff0c\u6c61\u67d3\u5168\u5c40\u53d8\u91cf\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u53d8\u91cf\u91cd\u540d\uff1a\u4e0d\u540c\u6587\u4ef6\u4e2d\u7684\u53d8\u91cf\u5982\u679c\u91cd\u540d\uff0c\u540e\u9762\u7684\u4f1a\u8986\u76d6\u524d\u9762\u7684\uff0c\u9020\u6210\u7a0b\u5e8f\u8fd0\u884c\u9519\u8bef\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u4f9d\u8d56\u987a\u5e8f\uff1a\u591a\u4e2a\u6587\u4ef6\u4e4b\u95f4\u5b58\u5728\u4f9d\u8d56\u5173\u7cfb\uff0c\u9700\u8981\u4fdd\u8bc1\u4e00\u5b9a\u52a0\u8f7d\u987a\u5e8f\u95ee\u9898\u4e25\u91cd\u3002")),(0,l.kt)("p",null,"\u6a21\u5757\u5316\u662f\u6307\u89e3\u51b3\u4e00\u4e2a\u590d\u6742\u95ee\u9898\u65f6\u81ea\u9876\u5411\u4e0b\u9010\u5c42\u628a\u7cfb\u7edf\u5212\u5206\u6210\u82e5\u5e72\u6a21\u5757\u7684\u8fc7\u7a0b\uff0c \u6709\u591a\u79cd\u5c5e\u6027\uff0c\u5206\u522b\u53cd\u6620\u5176\u5185\u90e8\u7279\u6027\u3002\u767e\u5ea6\u767e\u79d1\u4e2d\uff0c\u6a21\u5757\u5316\u7684\u5b9a\u4e49\u662f\uff1a \u6a21\u5757\u5316\u662f\u4e00\u79cd\u5904\u7406\u590d\u6742\u7cfb\u7edf\u5206\u89e3\u4e3a\u66f4\u597d\u7684\u53ef\u7ba1\u7406\u6a21\u5757\u7684\u65b9\u5f0f\u3002 \u7b80\u5355\u7684\u8bf4\uff0c\u628a\u4e00\u4e2a\u590d\u6742\u7684\u4e1c\u897f\u5206\u89e3\u6210\u591a\u4e2a\u751a\u81f3\u591a\u5c42\u6b21\u7684\u7ec4\u6210\u90e8\u5206\uff0c\u4ee5\u4e00\u79cd\u826f\u597d\u7684\u673a\u5236\u7ba1\u7406\u8d77\u6765\uff0c\u5c31\u53ef\u4ee5\u8ba4\u4e3a\u662f\u6a21\u5757\u5316\u3002\u800c\u5bf9\u4e8e\u8f6f\u4ef6\u5f00\u53d1\u6765\u8bf4\uff0c\u51fd\u6570\uff08\u8fc7\u7a0b\uff09\u5c31\u662f\u6700\u5e38\u89c1\u4e5f\u662f\u6700\u57fa\u672c\u7684\u6a21\u5757\u4e4b\u4e00\u3002"),(0,l.kt)("p",null,"\u6211\u89c9\u5f97\u7528\u4e50\u9ad8\u79ef\u6728\u6765\u6bd4\u55bb\u6a21\u5757\u5316\u518d\u597d\u4e0d\u8fc7\u4e86\u3002\u6bcf\u4e2a\u79ef\u6728\u90fd\u662f\u56fa\u5b9a\u7684\u989c\u8272\u5f62\u72b6\uff0c\u60f3\u8981\u7ec4\u5408\u79ef\u6728\u5fc5\u987b\u4f7f\u7528\u79ef\u6728\u51f8\u8d77\u548c\u51f9\u9677\u7684\u90e8\u5206\u8fdb\u884c\u8fde\u63a5\uff0c\u6700\u540e\u591a\u4e2a\u79ef\u6728\u7d2f\u79ef\u6210\u4f60\u60f3\u8981\u7684\u5f62\u72b6\u3002"),(0,l.kt)("p",null,"\u6a21\u5757\u5316\u5176\u5b9e\u662f\u4e00\u79cd\u89c4\u8303\uff0c\u4e00\u79cd\u7ea6\u675f\uff0c\u8fd9\u79cd\u7ea6\u675f\u4f1a\u5927\u5927\u63d0\u5347\u5f00\u53d1\u6548\u7387\u3002\u5c06\u6bcf\u4e2ajs\u6587\u4ef6\u770b\u4f5c\u662f\u4e00\u4e2a\u6a21\u5757\uff0c\u6bcf\u4e2a\u6a21\u5757\u901a\u8fc7\u56fa\u5b9a\u7684\u65b9\u5f0f\u5f15\u5165\uff0c\u5e76\u4e14\u901a\u8fc7\u56fa\u5b9a\u7684\u65b9\u5f0f\u5411\u5916\u66b4\u9732\u6307\u5b9a\u7684\u5185\u5bb9\u3002 \u6309\u7167js\u6a21\u5757\u5316\u7684\u8bbe\u60f3\uff0c\u4e00\u4e2a\u4e2a\u6a21\u5757\u6309\u7167\u5176\u4f9d\u8d56\u5173\u7cfb\u7ec4\u5408\uff0c\u6700\u7ec8\u63d2\u5165\u5230\u4e3b\u7a0b\u5e8f\u4e2d\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u68b3\u7406\u4e00\u4e0b\u6a21\u5757\u5316\u7684\u53d1\u5c55\u60c5\u51b5\uff1a"),(0,l.kt)("p",null,"\u65e0\u6a21\u5757\u5316--\x3eCommonJS\u89c4\u8303--\x3eAMD\u89c4\u8303--\x3eCMD\u89c4\u8303--\x3eES6\u6a21\u5757\u5316"),(0,l.kt)("p",null,"1\u3001CommonJS\u89c4\u8303 Node\u4e2d\u6a21\u5757\u5316\u89c4\u8303"),(0,l.kt)("p",null,"Commonjs\u7684\u8bde\u751f\u7ed9js\u6a21\u5757\u5316\u53d1\u5c55\u6709\u4e86\u91cd\u8981\u7684\u542f\u53d1\uff0cCommonjs\u975e\u5e38\u53d7\u6b22\u8fce\uff0c \u4f46\u662f\u5c40\u9650\u6027\u5f88\u660e\u663e\uff1aCommonjs\u57fa\u4e8eNode\u539f\u751fapi\u5728\u670d\u52a1\u7aef\u53ef\u4ee5\u5b9e\u73b0\u6a21\u5757\u540c\u6b65\u52a0\u8f7d\uff0c \u4f46\u662f\u4ec5\u4ec5\u5c40\u9650\u4e8e\u670d\u52a1\u7aef\uff0c\u5ba2\u6237\u7aef\u5982\u679c\u540c\u6b65\u52a0\u8f7d\u4f9d\u8d56\u7684\u8bdd\u65f6\u95f4\u6d88\u8017\u975e\u5e38\u5927\uff0c\u6240\u4ee5\u9700\u8981\u4e00\u4e2a \u5728\u5ba2\u6237\u7aef\u4e0a\u57fa\u4e8eCommonjs\u4f46\u662f\u5bf9\u4e8e\u52a0\u8f7d\u6a21\u5757\u505a\u6539\u8fdb\u7684\u65b9\u6848\uff0c\u4e8e\u662fAMD\u89c4\u8303\u8bde\u751f\u4e86\u3002"),(0,l.kt)("p",null,"2\u3001AMD\u89c4\u8303, \u5f02\u6b65\u6a21\u5757\u5b9a\u4e49, \u5141\u8bb8\u6307\u5b9a\u56de\u8c03\u51fd\u6570\uff0cAMD \u662f RequireJS \u5728\u63a8\u5e7f\u8fc7\u7a0b\u4e2d\u5bf9\u6a21\u5757\u5b9a\u4e49\u7684\u89c4\u8303\u5316\u4ea7\u51fa\u3002\u5b83\u91c7\u7528\u5f02\u6b65\u65b9\u5f0f\u52a0\u8f7d\u6a21\u5757\uff0c\u6a21\u5757\u7684\u52a0\u8f7d\u4e0d\u5f71\u54cd\u5b83\u540e\u9762\u8bed\u53e5\u7684\u8fd0\u884c\u3002\u6240\u6709\u4f9d\u8d56\u8fd9\u4e2a\u6a21\u5757\u7684\u8bed\u53e5\uff0c\u90fd\u5b9a\u4e49\u5728\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u4e2d\uff0c\u7b49\u5230\u6240\u6709\u4f9d\u8d56\u52a0\u8f7d\u5b8c\u6210\u4e4b\u540e\uff08\u524d\u7f6e\u4f9d\u8d56\uff09\uff0c\u8fd9\u4e2a\u56de\u8c03\u51fd\u6570\u624d\u4f1a\u8fd0\u884c\u3002"),(0,l.kt)("p",null,"3\u3001CMD\u89c4\u8303\uff0c\u540c\u6837\u662f\u53d7\u5230Commonjs\u7684\u542f\u53d1\uff0c\u56fd\u5185\uff08\u963f\u91cc\uff09\u8bde\u751f\u4e86\u4e00\u4e2aCMD\uff08Common Module Definition\uff09\u89c4\u8303\u3002\u8be5\u89c4\u8303\u501f\u9274\u4e86Commonjs\u7684\u89c4\u8303\u4e0eAMD\u89c4\u8303\uff0c\u5728\u4e24\u8005\u57fa\u7840\u4e0a\u505a\u4e86\u6539\u8fdb\u3002"),(0,l.kt)("p",null,"CMD \u662f SeaJS \u5728\u63a8\u5e7f\u8fc7\u7a0b\u4e2d\u5bf9\u6a21\u5757\u5b9a\u4e49\u7684\u89c4\u8303\u5316\u4ea7\u51fa\u3002"),(0,l.kt)("p",null,"AMD \u63a8\u5d07\u4f9d\u8d56\u524d\u7f6e\u3001\u63d0\u524d\u6267\u884c CMD\u63a8\u5d07\u4f9d\u8d56\u5c31\u8fd1\u3001\u5ef6\u8fdf\u6267\u884c\u3002"),(0,l.kt)("p",null,"4\u3001 \u5230\u4e862015\u5e74\uff0cES6\u89c4\u8303\u4e2d\uff0c\u7ec8\u4e8e\u5c06\u6a21\u5757\u5316\u7eb3\u5165JavaScript\u6807\u51c6\uff0c\u4ece\u6b64js\u6a21\u5757\u5316\u88ab\u5b98\u65b9\u6276\u6b63\uff0c\u4e5f\u662f\u672a\u6765js\u7684\u6807\u51c6. \u5728ES6\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 import \u5173\u952e\u5b57\u5f15\u5165\u6a21\u5757\uff0c\u901a\u8fc7 exprot \u5173\u952e\u5b57\u5bfc\u51fa\u6a21\u5757\uff0c\u529f\u80fd\u8f83\u4e4b\u4e8e\u524d\u51e0\u4e2a\u65b9\u6848\u66f4\u4e3a\u5f3a\u5927\uff0c\u4e5f\u662f\u6211\u4eec\u6240\u63a8\u5d07\u7684\uff0c \u4f46\u662f\u7531\u4e8eES6\u76ee\u524d\u65e0\u6cd5\u5728\u6d4f\u89c8\u5668\u4e2d\u6267\u884c\uff0c\u6240\u4ee5\uff0c\u6211\u4eec\u53ea\u80fd\u901a\u8fc7babel\u5c06\u4e0d\u88ab\u652f\u6301\u7684import\u7f16\u8bd1\u4e3a\u5f53\u524d\u53d7\u5230\u5e7f\u6cdb\u652f\u6301\u7684 require\u3002"),(0,l.kt)("h2",{id:"export"},"export"),(0,l.kt)("p",null,"\u6a21\u5757\u529f\u80fd\u4e3b\u8981\u7531\u4e24\u4e2a\u547d\u4ee4\u6784\u6210\uff1aexport\u548cimport\u3002export\u547d\u4ee4\u7528\u4e8e\u89c4\u5b9a\u6a21\u5757\u7684\u5bf9\u5916\u63a5\u53e3\uff0cimport\u547d\u4ee4\u7528\u4e8e\u8f93\u5165\u5176\u4ed6\u6a21\u5757\u63d0\u4f9b\u7684\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a\u6a21\u5757\u5c31\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u6587\u4ef6\u3002\u8be5\u6587\u4ef6\u5185\u90e8\u7684\u6240\u6709\u53d8\u91cf\uff0c\u5916\u90e8\u65e0\u6cd5\u83b7\u53d6\u3002\u5982\u679c\u4f60\u5e0c\u671b\u5916\u90e8\u80fd\u591f\u8bfb\u53d6\u6a21\u5757\u5185\u90e8\u7684\u67d0\u4e2a\u53d8\u91cf\uff0c\u5c31\u5fc5\u987b\u4f7f\u7528export\u5173\u952e\u5b57\u8f93\u51fa\u8be5\u53d8\u91cf\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5bfc\u51fa\u53d8\u91cf\u6216\u8005\u5e38\u91cf")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  export const name = 'hello'\n  export let addr = 'BeiJing City'\n  export var list = [1, 2, 3]\n")),(0,l.kt)("p",null,"\u6216\u8005"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  const name = 'hello'\n  let addr = 'BeiJing City'\n  var list = [1, 2, 3]\n  export {\n      name,\n      addr,\n      list\n  }\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5bfc\u51fa\u51fd\u6570")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  export function say(content) {\n      console.log(content)\n  }\n  export function run() {\n      console.log('run')\n  }\n")),(0,l.kt)("p",null,"\u6216\u8005"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  const say = (content) => {\n      console.log(content)\n  }\n  let run = () => {\n      console.log('run')\n  }\n  export {\n      say,\n      run\n  }\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5bfc\u51fa Object")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  export ({\n      code: 0,\n      message: 'success'\n  })\n")),(0,l.kt)("p",null,"\u6216\u8005"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  let data = {\n      code: 0,\n      message: 'success'\n  }\n  export {\n      data\n  }\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5bfc\u51fa Class")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  class Test {\n      constructor() {\n          this.id = 2\n      }\n  }\n  export {\n      Test\n  }\n")),(0,l.kt)("p",null,"\u6216\u8005"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  export class Test {\n      constructor() {\n          this.id = 2\n      }\n  }\n")),(0,l.kt)("h2",{id:"as"},"as"),(0,l.kt)("p",null,"\u5982\u679c\u60f3\u4e3a\u8f93\u5165\u7684\u53d8\u91cf\u91cd\u65b0\u53d6\u4e00\u4e2a\u540d\u5b57\uff0cimport\u547d\u4ee4\u8981\u4f7f\u7528as\u5173\u952e\u5b57\uff0c\u5c06\u8f93\u5165\u7684\u53d8\u91cf\u91cd\u547d\u540d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  const name = 'hello'\n  let addr = 'BeiJing City'\n  var list = [1, 2, 3]\n  export {\n      name as cname,\n      addr as caddr,\n      list\n  }\n")),(0,l.kt)("h2",{id:"export-default"},"export default"),(0,l.kt)("p",null,"\u4f7f\u7528import\u547d\u4ee4\u7684\u65f6\u5019\uff0c\u7528\u6237\u9700\u8981\u77e5\u9053\u6240\u8981\u52a0\u8f7d\u7684\u53d8\u91cf\u540d\u6216\u51fd\u6570\u540d\uff0c\u5426\u5219\u65e0\u6cd5\u52a0\u8f7d\u3002\u4f46\u662f\uff0c\u7528\u6237\u80af\u5b9a\u5e0c\u671b\u5feb\u901f\u4e0a\u624b\uff0c\u672a\u5fc5\u613f\u610f\u9605\u8bfb\u6587\u6863\uff0c\u53bb\u4e86\u89e3\u6a21\u5757\u6709\u54ea\u4e9b\u5c5e\u6027\u548c\u65b9\u6cd5\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u7ed9\u7528\u6237\u63d0\u4f9b\u65b9\u4fbf\uff0c\u8ba9\u4ed6\u4eec\u4e0d\u7528\u9605\u8bfb\u6587\u6863\u5c31\u80fd\u52a0\u8f7d\u6a21\u5757\uff0c\u5c31\u8981\u7528\u5230export default\u547d\u4ee4\uff0c\u4e3a\u6a21\u5757\u6307\u5b9a\u9ed8\u8ba4\u8f93\u51fa\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  const name = 'hello'\n  let addr = 'BeiJing City'\n  var list = [1, 2, 3]\n  export {\n      name as cname,\n      addr as caddr\n  }\n  export default list\n")),(0,l.kt)("h2",{id:"import"},"import"),(0,l.kt)("p",null,"\u4f7f\u7528export\u547d\u4ee4\u5b9a\u4e49\u4e86\u6a21\u5757\u7684\u5bf9\u5916\u63a5\u53e3\u4ee5\u540e\uff0c\u5176\u4ed6 JS \u6587\u4ef6\u5c31\u53ef\u4ee5\u901a\u8fc7import\u547d\u4ee4\u52a0\u8f7d\u8fd9\u4e2a\u6a21\u5757\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u76f4\u63a5\u5bfc\u5165")),(0,l.kt)("p",null,"\u5047\u8bbe\u5bfc\u51fa\u6a21\u5757 A \u662f\u8fd9\u6837\u7684\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  const name = 'hello'\n  let addr = 'BeiJing City'\n  var list = [1, 2, 3]\n  export {\n      name as cname,\n      addr as caddr\n  }\n  export default list\n")),(0,l.kt)("p",null,"\u5219\u5bfc\u5165\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  import list, {\n      cname,\n      caddr\n  } from A\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539\u5bfc\u5165\u540d\u79f0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  import list, {\n      cname as name,\n      caddr\n  } from A\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6279\u91cf\u5bfc\u5165")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  import list, * as mod from A\n  console.log(list)\n  console.log(mod.cname)\n  console.log(mod.caddr)\n")),(0,l.kt)("h3",{id:"\u63a8\u8350\u9605\u8bfb"},"\u63a8\u8350\u9605\u8bfb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://exploringjs.com/es6/ch_modules.html"},"Modules")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hackernoon.com/import-export-default-require-commandjs-javascript-nodejs-es6-vs-cheatsheet-different-tutorial-example-5a321738b50f"},"import, export, default cheatsheet")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://2ality.com/2014/09/es6-modules-final.html"},"ECMAScript 6 modules: the final syntax"))))}m.isMDXComponent=!0}}]);