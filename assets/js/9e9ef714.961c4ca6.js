"use strict";(self.webpackChunknotes_frankfeekr_cn=self.webpackChunknotes_frankfeekr_cn||[]).push([[8697],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>b});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),i=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=i(t),y=a,b=g["".concat(s,".").concat(y)]||g[y]||u[y]||o;return t?r.createElement(b,l(l({ref:n},p),{},{components:t})):r.createElement(b,l({ref:n},p))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=y;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[g]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},5827:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=t(8168),a=(t(6540),t(5680));const o={},l="Object \u6269\u5c55",c={unversionedId:"frontend/es6/es2017/Object \u6269\u5c55",id:"frontend/es6/es2017/Object \u6269\u5c55",title:"Object \u6269\u5c55",description:"\u4e4b\u524d\u7684\u8bed\u6cd5\u5982\u4f55\u83b7\u53d6\u5bf9\u8c61\u7684\u6bcf\u4e00\u4e2a\u5c5e\u6027\u503c",source:"@site/docs/03.frontend/es6/04-es2017/02-Object \u6269\u5c55.md",sourceDirName:"03.frontend/es6/04-es2017",slug:"/frontend/es6/es2017/Object \u6269\u5c55",permalink:"/docs/frontend/es6/es2017/Object \u6269\u5c55",draft:!1,editUrl:"https://github.com/frank-lam/frankfeekr-notes/tree/master/docs/03.frontend/es6/04-es2017/02-Object \u6269\u5c55.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"frontend_es6",previous:{title:"async / await",permalink:"/docs/frontend/es6/es2017/async  await"},next:{title:"String \u6269\u5c55",permalink:"/docs/frontend/es6/es2017/String \u6269\u5c55"}},s={},i=[{value:"\u63a8\u8350\u9605\u8bfb",id:"\u63a8\u8350\u9605\u8bfb",level:3}],p={toc:i},g="wrapper";function u(e){let{components:n,...o}=e;return(0,a.yg)(g,(0,r.A)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"object-\u6269\u5c55"},"Object \u6269\u5c55"),(0,a.yg)("p",null,"\u4e4b\u524d\u7684\u8bed\u6cd5\u5982\u4f55\u83b7\u53d6\u5bf9\u8c61\u7684\u6bcf\u4e00\u4e2a\u5c5e\u6027\u503c"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const obj = {\n    name: 'imooc',\n    web: 'www.imooc.com',\n    course: 'es'\n}\nconsole.log(Object.keys(obj))\nconst res = Object.keys(obj).map(key => obj[key])\nconsole.log(res)\n// [\"imooc\", \"www.imooc.com\", \"es\"]\n")),(0,a.yg)("p",null,"ES8\u4e2d\u5bf9\u8c61\u6269\u5c55\u8865\u5145\u4e86\u4e24\u4e2a\u9759\u6001\u65b9\u6cd5\uff0c\u7528\u4e8e\u904d\u5386\u5bf9\u8c61\uff1aObject.values()\uff0cObject.entries()"),(0,a.yg)("h2",{id:""}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Object.values() \u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5176\u5143\u7d20\u662f\u5728\u5bf9\u8c61\u4e0a\u627e\u5230\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\u503c\u3002\u5c5e\u6027\u7684\u987a\u5e8f\u4e0e\u901a\u8fc7\u624b\u52a8\u5faa\u73af\u5bf9\u8c61\u7684\u5c5e\u6027\u503c\u6240\u7ed9\u51fa\u7684\u987a\u5e8f\u76f8\u540c(for...in\uff0c\u4f46\u662ffor...in\u8fd8\u4f1a\u904d\u5386\u539f\u578b\u4e0a\u7684\u5c5e\u6027\u503c)\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const obj = {\n    name: 'imooc',\n    web: 'www.imooc.com',\n    course: 'es'\n}\n\nconsole.log(Object.values(obj))\n// [\"imooc\", \"www.imooc.com\", \"es\"]\n")),(0,a.yg)("p",null,"TIP"),(0,a.yg)("p",null,"Object.values \u662f\u5728\u5bf9\u8c61\u4e0a\u627e\u5230\u53ef\u679a\u4e3e\u7684\u5c5e\u6027\u7684\u503c\uff0c\u6240\u4ee5\u53ea\u8981\u8fd9\u4e2a\u5bf9\u8c61\u662f\u53ef\u679a\u4e3e\u7684\u5c31\u53ef\u4ee5\uff0c\u4e0d\u53ea\u662f {} \u8fd9\u79cd\u5f62\u5f0f\u3002"),(0,a.yg)("h2",{id:"-1"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Object.entries()\u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u7ed9\u5b9a\u5bf9\u8c61\u81ea\u8eab\u53ef\u679a\u4e3e\u5c5e\u6027\u7684\u952e\u503c\u5bf9\u6570\u7ec4\uff0c\u5176\u6392\u5217\u4e0e\u4f7f\u7528 for...in \u5faa\u73af\u904d\u5386\u8be5\u5bf9\u8c61\u65f6\u8fd4\u56de\u7684\u987a\u5e8f\u4e00\u81f4\u3002\uff08\u533a\u522b\u5728\u4e8e for-in \u5faa\u73af\u4e5f\u679a\u4e3e\u539f\u578b\u94fe\u4e2d\u7684\u5c5e\u6027\uff09")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"let grade = {\n    'lilei': 98,\n    'hanmei': 87\n}\n\nfor (let [key, value] of grade) {\n    console.log(key, value) // Uncaught TypeError: grade is not iterable\n}\n")),(0,a.yg)("p",null,"\u6211\u4eec\u77e5\u9053 Object \u662f\u4e0d\u53ef\u76f4\u63a5\u904d\u5386\u7684\uff0c\u4e0a\u8ff0\u4ee3\u7801\u8db3\u4ee5\u8bf4\u660e\u76f4\u63a5\u904d\u5386\u89e6\u53d1\u4e86\u9519\u8bef\u3002\u5982\u679c\u4f7f\u7528 Object.entries() \u5219\u53ef\u4ee5\u5b8c\u6210\u904d\u5386\u4efb\u52a1\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"let grade = {\n    'lilei': 98,\n    'hanmei': 87\n}\n\nfor (let [k, v] of Object.entries(grade)) {\n    console.log(k, v)\n    // lilei 98\n    // hanmei 87\n}\n")),(0,a.yg)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u786e\u5b9e\u6210\u529f\u7684\u904d\u5386\u4e86\u51fa\u6765\uff0c\u4f46\u662f\u4e0a\u8fb9\u8bf4\u8fc7 Object.entries \u8fd4\u56de\u7684\u662f\u6570\u7ec4\uff0c\u8fd9\u91cc\u9762\u8fd8\u7528\u4e86\u6570\u7ec4\u7684\u89e3\u6784\u8d4b\u503c\uff0c\u5f88\u591a\u540c\u5b66\u4e0d\u660e\u767d\u662f\u600e\u4e48\u7ed3\u5408\u7684\uff0c\u5176\u5b9e\u5f88\u7b80\u5355\uff0c\u770b\u4e0b Object.entries \u7684\u8fd4\u56de\u503c\u5c31\u597d\u4e86\uff1a"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"img",src:t(7792).A,width:"418",height:"174"})),(0,a.yg)("p",null,"\u7ed3\u5408\u8fd9\u4e2a\u56fe\u8fd8\u6709\u89e3\u6784\u8d4b\u503c\u7684\u539f\u7406\uff0c\u5c31\u660e\u767d\u4e0a\u8ff0\u7684\u4ee3\u7801\u662f\u600e\u4e48\u5de5\u4f5c\u7684\u4e86\u3002"),(0,a.yg)("h2",{id:"-2"}),(0,a.yg)("p",null,"\u60f3\u7406\u89e3 Object.getOwnPropertyDescriptors \u8fd9\u4e2a\u65b9\u6cd5\u4e4b\u524d\uff0c\u9996\u5148\u8981\u5f04\u61c2\u4ec0\u4e48\u662f\u63cf\u8ff0\u7b26(descriptor)\uff1f"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const data = {\n    Portland: '78/50',\n    Dublin: '88/52',\n    Lima: '58/40'\n}\n")),(0,a.yg)("p",null,"\u8fd8\u662f\u4e0a\u8ff0\u90a3\u4e2a\u5bf9\u8c61\uff0c\u8fd9\u91cc\u6709 key \u548c value\uff0c\u4e0a\u8fb9\u7684\u4ee3\u7801\u628a\u6240\u6709\u7684 key\u3001value \u904d\u5386\u51fa\u6765\uff0c\u5982\u679c\u6211\u4eec\u4e0d\u60f3\u8ba9 Lima \u8fd9\u4e2a\u5c5e\u6027\u548c\u503c\u88ab\u679a\u4e3e\u600e\u4e48\u529e\uff1f"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"Object.defineProperty(data, 'Lima', {\n    enumerable: false\n})\n\nObject.entries(data).map(([city, temp]) => {\n    console.log( `City: ${city.padEnd(16)} Weather: ${temp}` )\n    // City: Portland         Weather: 78/50\n    // City: Dublin           Weather: 88/52\n})\n")),(0,a.yg)("p",null,"\u5f88\u6210\u529f\uff0cLima \u6ca1\u6709\u88ab\u904d\u5386\u51fa\u6765\uff0c\u90a3\u4e48 defineProperty \u7684\u7b2c\u4e09\u4e2a\u53c2\u6570\u5c31\u662f\u63cf\u8ff0\u7b26(descriptor)\u3002\u8fd9\u4e2a\u63cf\u8ff0\u7b26\u5305\u62ec\u51e0\u4e2a\u5c5e\u6027\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"value ","[\u5c5e\u6027\u7684\u503c]"),(0,a.yg)("li",{parentName:"ul"},"writable ","[\u5c5e\u6027\u7684\u503c\u662f\u5426\u53ef\u88ab\u6539\u53d8]"),(0,a.yg)("li",{parentName:"ul"},"enumerable ","[\u5c5e\u6027\u7684\u503c\u662f\u5426\u53ef\u88ab\u679a\u4e3e]"),(0,a.yg)("li",{parentName:"ul"},"configurable ","[\u63cf\u8ff0\u7b26\u672c\u8eab\u662f\u5426\u53ef\u88ab\u4fee\u6539\uff0c\u5c5e\u6027\u662f\u5426\u53ef\u88ab\u5220\u9664]")),(0,a.yg)("p",null,"\u5982\u679c\u60f3\u67e5\u770b\u66f4\u591a\u7ec6\u8282\uff0c\u8bbf\u95ee ",(0,a.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"},"Object.defineProperty"),"\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"console.log(Object.getOwnPropertyDescriptor(data, 'Lima'))\n// {value: \"58/40\", writable: true, enumerable: false, configurable: true}\n")),(0,a.yg)("p",null,"\u8fd9\u4e2a\u662f\u83b7\u53d6\u5bf9\u8c61\u6307\u5b9a\u5c5e\u6027\u7684\u63cf\u8ff0\u7b26\uff0c\u5982\u679c\u60f3\u83b7\u53d6\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027\u7684\u63cf\u8ff0\u7b26\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"console.log(Object.getOwnPropertyDescriptors(data))\n")),(0,a.yg)("p",null,"\u8fd4\u56de\u6570\u636e\uff1a ",(0,a.yg)("img",{alt:"img",src:t(4379).A,width:"1250",height:"166"})),(0,a.yg)("h3",{id:"\u63a8\u8350\u9605\u8bfb"},"\u63a8\u8350\u9605\u8bfb"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values"},"Object.values()")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"},"Object.entries()")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors"},"Object.getOwnPropertyDescriptors()"))))}u.isMDXComponent=!0},7792:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/entries.45cb18b2-638c2433bf9865ad28d8b87c187f8d8b.png"},4379:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/getownproperty.4847f943-5312f19295592a6334bbaabdd42d58e6.png"}}]);