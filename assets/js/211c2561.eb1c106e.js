"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2130],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),i=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=i(t),k=l,d=m["".concat(p,".").concat(k)]||m[k]||u[k]||o;return t?r.createElement(d,s(s({ref:n},c),{},{components:t})):r.createElement(d,s({ref:n},c))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,s=new Array(o);s[0]=m;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:l,s[1]=a;for(var i=2;i<o;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1132:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return u}});var r=t(7462),l=t(3366),o=(t(7294),t(3905)),s=["components"],a={},p="Promise",i={unversionedId:"frontend/es6/es2015/Promise",id:"frontend/es6/es2015/Promise",title:"Promise",description:"\u5f02\u6b65\u64cd\u4f5c\u524d\u7f6e\u77e5\u8bc6",source:"@site/docs/frontend/es6/02-es2015/14-Promise.md",sourceDirName:"frontend/es6/02-es2015",slug:"/frontend/es6/es2015/Promise",permalink:"/docs/frontend/es6/es2015/Promise",editUrl:"https://github.com/frank-lam/frankfeekr-notes/tree/master/docs/frontend/es6/02-es2015/14-Promise.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{},sidebar:"frontend_es6",previous:{title:"Reflect",permalink:"/docs/frontend/es6/es2015/Reflect"},next:{title:"Generator",permalink:"/docs/frontend/es6/es2015/Generator"}},c={},u=[{value:"\u5f02\u6b65\u64cd\u4f5c\u524d\u7f6e\u77e5\u8bc6",id:"\u5f02\u6b65\u64cd\u4f5c\u524d\u7f6e\u77e5\u8bc6",level:2},{value:"JS\u662f\u5355\u7ebf\u7a0b\u7684",id:"js\u662f\u5355\u7ebf\u7a0b\u7684",level:3},{value:"Ajax\u539f\u7406",id:"ajax\u539f\u7406",level:3},{value:"Callback Hell",id:"callback-hell",level:3},{value:"\u57fa\u672c\u8bed\u6cd5",id:"\u57fa\u672c\u8bed\u6cd5",level:2},{value:"\u7ec3\u4e60",id:"\u7ec3\u4e60",level:2},{value:"\u63a8\u8350\u9605\u8bfb",id:"\u63a8\u8350\u9605\u8bfb",level:3}],m={toc:u};function k(e){var n=e.components,t=(0,l.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"promise"},"Promise"),(0,o.kt)("h2",{id:"\u5f02\u6b65\u64cd\u4f5c\u524d\u7f6e\u77e5\u8bc6"},"\u5f02\u6b65\u64cd\u4f5c\u524d\u7f6e\u77e5\u8bc6"),(0,o.kt)("h3",{id:"js\u662f\u5355\u7ebf\u7a0b\u7684"},"JS\u662f\u5355\u7ebf\u7a0b\u7684"),(0,o.kt)("p",null,"\u5c31\u662f\u540c\u4e00\u4e2a\u65f6\u95f4\u53ea\u80fd\u5904\u7406\u4e00\u4e2a\u4efb\u52a1\u3002\u5c31\u7c7b\u4f3c\u751f\u6d3b\u4e2d\u7684\u53bb\u8d85\u5e02\u6392\u961f\u7ed3\u8d26\uff0c\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u4e00\u4f4d\u6536\u94f6\u5458\u53ea\u80fd\u4e3a\u4e00\u4f4d\u987e\u5ba2\u7ed3\u8d26\uff0c\u5176\u4ed6\u987e\u5ba2\u9700\u8981\u5728\u540e\u9762\u6392\u961f\u7b49\u5019\u3002"),(0,o.kt)("p",null,"\u4e3a\u4ec0\u4e48 JS \u662f\u5355\u7ebf\u7a0b\u7684\uff1f\u4f5c\u4e3a\u6d4f\u89c8\u5668\u811a\u672c\u8bed\u8a00\uff0cJavaScript \u7684\u4e3b\u8981\u7528\u9014\u662f\u4e0e\u7528\u6237\u4e92\u52a8\uff0c\u4ee5\u53ca\u64cd\u4f5c DOM \u3002\u8fd9\u51b3\u5b9a\u4e86\u5b83\u53ea\u80fd\u662f\u5355\u7ebf\u7a0b\uff0c\u5426\u5219\u4f1a\u5e26\u6765\u5f88\u590d\u6742\u7684\u540c\u6b65\u95ee\u9898\u3002\u6bd4\u5982\uff0c\u5047\u5b9a JavaScript\u540c\u65f6\u6709\u4e24\u4e2a\u7ebf\u7a0b\uff0c\u4e00\u4e2a\u7ebf\u7a0b\u5728\u67d0\u4e2a DOM \u8282\u70b9\u4e0a\u6dfb\u52a0\u5185\u5bb9\uff0c\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u5220\u9664\u4e86\u8fd9\u4e2a\u8282\u70b9\uff0c\u8fd9\u65f6\u6d4f\u89c8\u5668\u5e94\u8be5\u4ee5\u54ea\u4e2a\u7ebf\u7a0b\u4e3a\u51c6\uff1f"),(0,o.kt)("p",null,"\u5355\u7ebf\u7a0b\u5c31\u610f\u5473\u7740\uff0c\u6240\u6709\u4efb\u52a1\u90fd\u9700\u8981\u6392\u961f\uff0c\u524d\u4e00\u4e2a\u4efb\u52a1\u7ed3\u675f\uff0c\u624d\u80fd\u6267\u884c\u540e\u4e00\u4e2a\u4efb\u52a1\u3002\u5982\u679c\u524d\u4e00\u4e2a\u4efb\u52a1\u8017\u65f6\u5f88\u957f\uff0c\u90a3\u4e48\u540e\u4e00\u4e2a\u4efb\u52a1\u5c31\u4e0d\u5f97\u4e0d\u4e00\u76f4\u7b49\u5f85\uff0c\u4e8e\u662f\u4e4e\uff0cJS \u8bbe\u8ba1\u8005\u4eec\u628a\u6240\u6709\u4efb\u5206\u6210\u4e24\u7c7b\uff0c\u540c\u6b65\u548c\u5f02\u6b65\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u540c\u6b65\uff1a\u53ea\u6709\u524d\u4e00\u4e2a\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\uff0c\u624d\u80fd\u6267\u884c\u540e\u4e00\u4e2a\u4efb\u52a1"),(0,o.kt)("li",{parentName:"ul"},"\u5f02\u6b65\uff1a\u5f53\u540c\u6b65\u4efb\u52a1\u6267\u884c\u5230\u67d0\u4e2a WebAPI \u65f6\uff0c\u5c31\u4f1a\u89e6\u53d1\u5f02\u6b65\u64cd\u4f5c\uff0c\u6b64\u65f6\u6d4f\u89c8\u5668\u4f1a\u5355\u72ec\u5f00\u7ebf\u7a0b\u53bb\u5904\u7406\u8fd9\u4e9b\u5f02\u6b65\u4efb\u52a1\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"}," // \u540c\u6b65\n const a = 2\n const b = 3\n console.log(a + b)\n\n // \u5f02\u6b65\n setTimeout(() => {\n     console.log(a + b)\n }, 1000)\n")),(0,o.kt)("p",null,"\u8bf7\u601d\u8003\u4e0b\u9762\u7684\u8f93\u51fa\u7ed3\u679c\u662f\u4ec0\u4e48\uff1f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"console.log(1)\nsetTimeout(() => { // \u5f02\u6b65\u4efb\u52a1\uff0c\u653e\u5165\u4efb\u52a1\u961f\u5217\u4e2d\n    console.log(2)\n}, 0)\nconsole.log(3)\n\n// 1\u30013\u30012\n")),(0,o.kt)("p",null,"\u4e0b\u56fe\u8bf4\u660e\u4e86\u540c\u6b65\u4efb\u52a1\u548c\u5f02\u6b65\u4efb\u52a1\u7684\u6267\u884c\u8fc7\u7a0b\uff1a ",(0,o.kt)("img",{parentName:"p",src:"http://es.xiecheng.live/assets/img/task.9fef93a6.png",alt:"img"})),(0,o.kt)("h3",{id:"ajax\u539f\u7406"},"Ajax\u539f\u7406"),(0,o.kt)("p",null,"Ajax \u5373\u201cAsynchronous Javascript And XML\u201d\uff08\u5f02\u6b65 JavaScript \u548c XML\uff09\uff0c\u662f\u6307\u4e00\u79cd\u521b\u5efa\u4ea4\u4e92\u5f0f\u3001\u5feb\u901f\u52a8\u6001\u7f51\u9875\u5e94\u7528\u7684\u7f51\u9875\u5f00\u53d1\u6280\u672f\uff0c\u65e0\u9700\u91cd\u65b0\u52a0\u8f7d\u6574\u4e2a\u7f51\u9875\u7684\u60c5\u51b5\u4e0b\uff0c\u80fd\u591f\u66f4\u65b0\u90e8\u5206\u7f51\u9875\u7684\u6280\u672f\u3002\u901a\u8fc7\u5728\u540e\u53f0\u4e0e\u670d\u52a1\u5668\u8fdb\u884c\u5c11\u91cf\u6570\u636e\u4ea4\u6362\uff0cAjax \u53ef\u4ee5\u4f7f\u7f51\u9875\u5b9e\u73b0\u5f02\u6b65\u66f4\u65b0\u3002\u8fd9\u610f\u5473\u7740\u53ef\u4ee5\u5728\u4e0d\u91cd\u65b0\u52a0\u8f7d\u6574\u4e2a\u7f51\u9875\u7684\u60c5\u51b5\u4e0b\uff0c\u5bf9\u7f51\u9875\u7684\u67d0\u90e8\u5206\u8fdb\u884c\u66f4\u65b0\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// \u521b\u5efa XMLHttpRequest \u5bf9\u8c61\nconst url = \'http://jsonplaceholder.typicode.com/users\'\nlet xmlhttp\nif (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari\n    xmlhttp = new XMLHttpRequest()\n} else { // code for IE6, IE5\n    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")\n}\n\n// \u53d1\u9001\u8bf7\u6c42\nxmlhttp.open("GET", url, true)\nxmlhttp.send()\n\n// \u670d\u52a1\u7aef\u54cd\u5e94\nxmlhttp.onreadystatechange = function() {\n    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {\n        //    console.log(xmlhttp.responseText)\n        let obj = JSON.parse(xmlhttp.responseText)\n        console.log(obj)\n    }\n}\n')),(0,o.kt)("h3",{id:"callback-hell"},"Callback Hell"),(0,o.kt)("p",null,"JavaScipt \u4e2d\u7684\u8bb8\u591a\u64cd\u4f5c\u90fd\u662f\u5f02\u6b65\u7684\uff0c\u6211\u4eec\u628a\u4e0a\u9762\u7684Ajax\u5c01\u88c5\u6210\u4e00\u4e2a\u51fd\u6570\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function ajax(url, callback) {\n    let xmlhttp\n    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari\n        xmlhttp = new XMLHttpRequest()\n    } else { // code for IE6, IE5\n        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")\n    }\n    // \u53d1\u9001\u8bf7\u6c42\n    xmlhttp.open("GET", url, true)\n    xmlhttp.send()\n    // \u670d\u52a1\u7aef\u54cd\u5e94\n    xmlhttp.onreadystatechange = function() {\n        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {\n            //    console.log(xmlhttp.responseText)\n            let obj = JSON.parse(xmlhttp.responseText)\n            callback(obj)\n        }\n    }\n}\n')),(0,o.kt)("p",null,"\u6211\u4eec\u5728static\u6587\u4ef6\u5939\u4e0b\u653e\u5165\u4e09\u4e2ajson\u6587\u4ef6\uff1a"),(0,o.kt)("p",null,"a.json:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "a": "\u6211\u662fA"\n}\n')),(0,o.kt)("p",null,"b.json:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "b": "\u6211\u662fB"\n}\n')),(0,o.kt)("p",null,"c.json:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "c": "\u6211\u662fC"\n}\n')),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u50cf\u8fd9\u6837\u4f7f\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u52a0\u8f7d\u5e76\u6267\u884c\u811a\u672c\najax('/static/a.json')\n")),(0,o.kt)("p",null,"\u51fd\u6570\u662f\u5f02\u6b65\u8c03\u7528\u7684\uff0c\u56e0\u4e3a\u64cd\u4f5c\u4e0d\u662f\u7acb\u5373\u5b8c\u6210\u7684\uff0c\u800c\u662f\u4e4b\u540e\u624d\u4f1a\u5b8c\u6210\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"ajax('/static/a.json')\n// \u4e0b\u9762\u7684\u4ee3\u7801\u4e0d\u4f1a\u7b49\u5230ajax\u6267\u884c\u5b8c\u624d\u6267\u884c\n// ...\n")),(0,o.kt)("p",null,"\u8fd9\u4e2a\u8fc7\u7a0b\u5927\u5bb6\u5e76\u4e0d\u964c\u751f\uff0c\u53ef\u662f\u5982\u679c\u5728\u56de\u8c03\u4e4b\u540e\u518d\u56de\u8c03\u5462\uff1f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"ajax('static/a.json', res => {\n    console.log(res)\n    ajax('static/b.json', res => {\n        console.log(res)\n        ajax('static/c.json', res => {\n            console.log(res)\n        })\n    })\n})\n")),(0,o.kt)("p",null,"\u5982\u679c\u5d4c\u5957\u53d8\u591a\uff0c\u4ee3\u7801\u5c42\u6b21\u5c31\u4f1a\u53d8\u6df1\uff0c\u7ef4\u62a4\u96be\u5ea6\u4e5f\u968f\u4e4b\u589e\u52a0\u3002"),(0,o.kt)("p",null,"\u8fd9\u5c31\u88ab\u79f0\u4e3a \u201c\u56de\u8c03\u5730\u72f1\u201d \u6216\u8005\u201c\u56de\u8c03\u6df1\u6e0a\u201d\u3002"),(0,o.kt)("h2",{id:"\u57fa\u672c\u8bed\u6cd5"},"\u57fa\u672c\u8bed\u6cd5"),(0,o.kt)("p",null,"Promise \u5c31\u662f\u4e3a\u4e86\u89e3\u51b3\u201c\u56de\u8c03\u5730\u72f1\u201d\u95ee\u9898\u7684\uff0c\u5b83\u53ef\u4ee5\u5c06\u5f02\u6b65\u64cd\u4f5c\u7684\u5904\u7406\u53d8\u5f97\u5f88\u4f18\u96c5\u3002\u56de\u8c03\u5730\u72f1\uff0c\u4ee3\u7801\u96be\u4ee5\u7ef4\u62a4\uff0c \u5e38\u5e38\u7b2c\u4e00\u4e2a\u7684\u51fd\u6570\u7684\u8f93\u51fa\u662f\u7b2c\u4e8c\u4e2a\u51fd\u6570\u7684\u8f93\u5165\u8fd9\u79cd\u73b0\u8c61promise\u53ef\u4ee5\u652f\u6301\u591a\u4e2a\u5e76\u53d1\u7684\u8bf7\u6c42\uff0c\u83b7\u53d6\u5e76\u53d1\u8bf7\u6c42\u4e2d\u7684\u6570\u636e\u8fd9\u4e2apromise\u53ef\u4ee5\u89e3\u51b3\u5f02\u6b65\u7684\u95ee\u9898\uff0c\u672c\u8eab\u4e0d\u80fd\u8bf4promise\u662f\u5f02\u6b65\u7684\u3002"),(0,o.kt)("p",null,"\u521b\u5efaPromise\u5b9e\u4f8b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const promise = new Promise(function(resolve, reject) {\n    // ... some code\n\n    if ( /* \u5f02\u6b65\u64cd\u4f5c\u6210\u529f */ ) {\n        resolve(value)\n    } else {\n        reject(error)\n    }\n})\n")),(0,o.kt)("p",null,"Promise\u6784\u9020\u51fd\u6570\u63a5\u53d7\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u8be5\u51fd\u6570\u7684\u4e24\u4e2a\u53c2\u6570\u5206\u522b\u662fresolve\u548creject\u3002\u5b83\u4eec\u662f\u4e24\u4e2a\u51fd\u6570\uff0c\u7531 JavaScript \u5f15\u64ce\u63d0\u4f9b\uff0c\u4e0d\u7528\u81ea\u5df1\u90e8\u7f72\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5904\u7406\u7ed3\u679c\u6b63\u5e38\u7684\u8bdd\uff0c\u8c03\u7528resolve(\u5904\u7406\u7ed3\u679c\u503c)\uff0c\u5c06Promise\u5bf9\u8c61\u7684\u72b6\u6001\u4ece\u201c\u672a\u5b8c\u6210\u201d\u53d8\u4e3a\u201c\u6210\u529f\u201d\uff08\u5373\u4ece pending \u53d8\u4e3a resolved\uff09\uff0c\u5728\u5f02\u6b65\u64cd\u4f5c\u6210\u529f\u65f6\u8c03\u7528\uff0c\u5e76\u5c06\u5f02\u6b65\u64cd\u4f5c\u7684\u7ed3\u679c\uff0c\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u51fa\u53bb"),(0,o.kt)("li",{parentName:"ul"},"\u5904\u7406\u7ed3\u679c\u9519\u8bef\u7684\u8bdd\uff0c\u8c03\u7528reject(Error\u5bf9\u8c61)\uff0c\u5c06Promise\u5bf9\u8c61\u7684\u72b6\u6001\u4ece\u201c\u672a\u5b8c\u6210\u201d\u53d8\u4e3a\u201c\u5931\u8d25\u201d\uff08\u5373\u4ece pending \u53d8\u4e3a rejected\uff09\uff0c\u5728\u5f02\u6b65\u64cd\u4f5c\u5931\u8d25\u65f6\u8c03\u7528\uff0c\u5e76\u5c06\u5f02\u6b65\u64cd\u4f5c\u62a5\u51fa\u7684\u9519\u8bef\uff0c\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u51fa\u53bb\u3002")),(0,o.kt)("p",null,"Promise\u5b9e\u4f8b\u751f\u6210\u4ee5\u540e\uff0c\u53ef\u4ee5\u7528then\u65b9\u6cd5\u5206\u522b\u6307\u5b9aresolved\u72b6\u6001\u548crejected\u72b6\u6001\u7684\u56de\u8c03\u51fd\u6570\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"promise.then(function(value) {\n    // success\n}, function(error) {\n    // failure\n})\n")),(0,o.kt)("p",null,"TIP"),(0,o.kt)("p",null,"\u5b9e\u9645\u4e0a Promise \u7528\u8d77\u6765\u8fd8\u662f\u6bd4\u8f83\u7b80\u5355\u7684\uff0c\u662f\u4e0d\u662f\u53ef\u4ee5\u52a8\u624b\u8bd5\u4e00\u8bd5\u53bb\u5c01\u88c5\u81ea\u5df1\u4e1a\u52a1\u4e2d\u5e94\u7528\u5230\u7684\u5f02\u6b65\u64cd\u4f5c\u4e86\uff08\u4e4b\u524d\u7528\u56de\u8c03\u5199\u7684\uff09\uff1f"),(0,o.kt)("p",null,"\u5728\u8fd9\u91cc\u5fc5\u987b\u8bf4\u660e\u4e0b Promise \u5185\u90e8\u662f\u6709\u72b6\u6001\u7684(pending\u3001fulfilled\u3001rejected)\uff0cPromise \u5bf9\u8c61\u6839\u636e\u72b6\u6001\u6765\u786e\u5b9a\u6267\u884c\u54ea\u4e2a\u65b9\u6cd5\u3002Promise \u5728\u5b9e\u4f8b\u5316\u7684\u65f6\u5019\u72b6\u6001\u662f\u9ed8\u8ba4 pending \u7684\uff0c\u5f53\u5f02\u6b65\u64cd\u4f5c\u662f\u5b8c\u6210\u7684\uff0c\u72b6\u6001\u4f1a\u88ab\u4fee\u6539\u4e3a fulfilled\uff0c\u5982\u679c\u5f02\u6b65\u64cd\u4f5c\u9047\u5230\u5f02\u5e38\uff0c\u72b6\u6001\u4f1a\u88ab\u4fee\u6539\u4e3a rejected\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e0b\u56fe\u6765\u770b\u4e0b\u72b6\u6001\u7684\u8d70\u5411\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://es.xiecheng.live/assets/img/promise.04ed9cc2.png",alt:"img"})),(0,o.kt)("p",null,"\u6ce8\u610f"),(0,o.kt)("p",null,"\u72b6\u6001\u8f6c\u5316\u662f\u5355\u5411\u7684\uff0c\u4e0d\u53ef\u9006\u8f6c\uff0c\u5df2\u7ecf\u786e\u5b9a\u7684\u72b6\u6001\uff08fulfilled/rejected\uff09\u65e0\u6cd5\u8f6c\u56de\u521d\u59cb\u72b6\u6001\uff08pending\uff09\uff0c\u800c\u4e14\u53ea\u80fd\u662f\u4ece pending \u5230 fulfilled \u6216\u8005 rejected"),(0,o.kt)("h2",{id:""}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u57fa\u672c\u8bed\u6cd5")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"promise.then(onFulfilled, onRejected)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var promise = new Promise(function(resolve, reject) {\n    resolve('\u4f20\u9012\u7ed9then\u7684\u503c')\n})\npromise.then(function(value) {\n    console.log(value)\n}, function(error) {\n    console.error(error)\n})\n")),(0,o.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u521b\u5efa\u4e00\u4e2a Promise \u5bf9\u8c61\uff0c\u5b9a\u4e49\u4e86\u5904\u7406 onFulfilled \u548c onRejected \u7684\u51fd\u6570\uff08handler\uff09\uff0c\u7136\u540e\u8fd4\u56de\u8fd9\u4e2a Promise \u5bf9\u8c61\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e2a Promise \u5bf9\u8c61\u4f1a\u5728\u53d8\u4e3a resolve \u6216\u8005 reject \u7684\u65f6\u5019\u5206\u522b\u8c03\u7528\u76f8\u5e94\u6ce8\u518c\u7684\u56de\u8c03\u51fd\u6570\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5f53 handler \u8fd4\u56de\u4e00\u4e2a\u6b63\u5e38\u503c\u7684\u65f6\u5019\uff0c\u8fd9\u4e2a\u503c\u4f1a\u4f20\u9012\u7ed9 Promise \u5bf9\u8c61\u7684 onFulfilled \u65b9\u6cd5\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u7684 handler \u4e2d\u4ea7\u751f\u5f02\u5e38\u7684\u65f6\u5019\uff0c\u8fd9\u4e2a\u503c\u5219\u4f1a\u4f20\u9012\u7ed9 Promise \u5bf9\u8c61\u7684 onRejected \u65b9\u6cd5\u3002")),(0,o.kt)("h2",{id:"-1"}),(0,o.kt)("p",null,"\u6355\u83b7\u5f02\u5e38\u662f\u7a0b\u5e8f\u8d28\u91cf\u4fdd\u969c\u6700\u57fa\u672c\u7684\u8981\u6c42\uff0c\u53ef\u4ee5\u4f7f\u7528 Promise \u5bf9\u8c61\u7684 catch \u65b9\u6cd5\u6765\u6355\u83b7\u5f02\u6b65\u64cd\u4f5c\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u7684\u4efb\u4f55\u5f02\u5e38\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u57fa\u672c\u8bed\u6cd5")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"p.catch(onRejected)")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"p.catch(function(reason) {")),(0,o.kt)("p",null,"// rejection })"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function test() {\n    return new Promise((resolve, reject) => {\n        reject(new Error('es'))\n    })\n}\n\ntest().catch((e) => {\n    console.log(e.message) // es\n})\n")),(0,o.kt)("p",null,"\u8fd9\u4e2a\u4ee3\u7801\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528 catch \u6355\u83b7 Promise \u5bf9\u8c61\u4e2d\u7684\u5f02\u5e38\uff0c\u6709\u7684\u540c\u5b66\u4f1a\u95ee catch \u6355\u83b7\u7684\u662f Promise \u5185\u90e8\u7684 Error \u8fd8\u662f Reject\uff1f\u4e0a\u9762\u7684\u793a\u4f8b\u65e2\u7528\u4e86 reject \u4e5f\u7528\u4e86 Error\uff0c\u5230\u5e95\u662f\u54ea\u4e2a\u89e6\u53d1\u7684\u8fd9\u4e2a\u6355\u83b7\u5462\uff1f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function test() {\n    return new Promise((resolve, reject) => {\n        throw new Error('wrong')\n    })\n}\n\ntest().catch((e) => {\n    console.log(e.message) // wrong\n})\n")),(0,o.kt)("p",null,"\u8fd9\u4e2a\u4ee3\u7801\u5bf9\u6bd4\u7740\u4e0a\u4e2a\u4ee3\u7801\u5c31\u80fd\u660e\u663e\u611f\u53d7\u51fa\u6765\u7684\uff0cthrow Error \u548c reject \u90fd\u89e6\u53d1\u4e86 catch \u7684\u6355\u83b7\uff0c\u800c\u7b2c\u4e00\u4e2a\u7528\u6cd5\u4e2d\u867d\u7136\u4e5f\u6709 Error \u4f46\u662f\u5b83\u4e0d\u662f throw\uff0c\u53ea\u662f reject \u7684\u53c2\u6570\u662f Error \u5bf9\u8c61\uff0c\u6362\u53e5\u8bdd\u8bf4 new Error \u4e0d\u4f1a\u89e6\u53d1 catch\uff0c\u800c\u662f reject\u3002"),(0,o.kt)("p",null,"\u6ce8\u610f"),(0,o.kt)("p",null,"\u4e0d\u5efa\u8bae\u5728 Promise \u5185\u90e8\u4f7f\u7528 throw \u6765\u89e6\u53d1\u5f02\u5e38\uff0c\u800c\u662f\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"reject(new Error())")," \u7684\u65b9\u5f0f\u6765\u505a\uff0c\u56e0\u4e3a throw \u7684\u65b9\u5f0f\u5e76\u6ca1\u6709\u6539\u53d8 Pronise \u7684\u72b6\u6001"),(0,o.kt)("h2",{id:"-2"}),(0,o.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\u6211\u4eec\u90fd\u4f1a\u4f7f\u7528 `",(0,o.kt)("inlineCode",{parentName:"p"},"new Promise()` "),"\u6765\u521b\u5efa Promise \u5bf9\u8c61\uff0c\u4f46\u662f\u9664\u6b64\u4e4b\u5916\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u65b9\u6cd5\u3002"),(0,o.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u5c06\u4f1a\u5b66\u4e60\u5982\u4f55\u4f7f\u7528 Promise.resolve \u548c Promise.reject \u8fd9\u4e24\u4e2a\u65b9\u6cd5\u3002"),(0,o.kt)("p",null,"\u9759\u6001\u65b9\u6cd5 Promise.resolve(value) \u53ef\u4ee5\u8ba4\u4e3a\u662f new Promise() \u65b9\u6cd5\u7684\u5feb\u6377\u65b9\u5f0f\u3002"),(0,o.kt)("p",null,"\u6bd4\u5982 Promise.resolve(42) \u53ef\u4ee5\u8ba4\u4e3a\u662f\u4ee5\u4e0b\u4ee3\u7801\u7684\u8bed\u6cd5\u7cd6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"new Promise(function(resolve) {\n    resolve(42)\n})\n")),(0,o.kt)("p",null,"\u5728\u8fd9\u6bb5\u4ee3\u7801\u4e2d\u7684 resolve(42) \u4f1a\u8ba9\u8fd9\u4e2a Promise \u5bf9\u8c61\u7acb\u5373\u8fdb\u5165\u786e\u5b9a\uff08\u5373resolved\uff09\u72b6\u6001\uff0c\u5e76\u5c06 42 \u4f20\u9012\u7ed9\u540e\u9762 then \u91cc\u6240\u6307\u5b9a\u7684 onFulfilled \u51fd\u6570\u3002"),(0,o.kt)("p",null,"\u65b9\u6cd5 Promise.resolve(value) \u7684\u8fd4\u56de\u503c\u4e5f\u662f\u4e00\u4e2a Promise \u5bf9\u8c61\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u50cf\u4e0b\u9762\u90a3\u6837\u63a5\u7740\u5bf9\u5176\u8fd4\u56de\u503c\u8fdb\u884c .then \u8c03\u7528\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Promise.resolve(42).then(function(value) {\n    console.log(value)\n})\n")),(0,o.kt)("p",null,"Promise.resolve \u4f5c\u4e3a new Promise() \u7684\u5feb\u6377\u65b9\u5f0f\uff0c\u5728\u8fdb\u884c Promise \u5bf9\u8c61\u7684\u521d\u59cb\u5316\u6216\u8005\u7f16\u5199\u6d4b\u8bd5\u4ee3\u7801\u7684\u65f6\u5019\u90fd\u975e\u5e38\u65b9\u4fbf\u3002"),(0,o.kt)("h2",{id:"-3"}),(0,o.kt)("p",null,"Promise.reject(error) \u662f\u548c Promise.resolve(value) \u7c7b\u4f3c\u7684\u9759\u6001\u65b9\u6cd5\uff0c\u662f new Promise() \u65b9\u6cd5\u7684\u5feb\u6377\u65b9\u5f0f\u3002"),(0,o.kt)("p",null,'\u6bd4\u5982 Promise.reject(new Error("\u51fa\u9519\u4e86")) \u5c31\u662f\u4e0b\u9762\u4ee3\u7801\u7684\u8bed\u6cd5\u7cd6\u5f62\u5f0f\u3002'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"new Promise(function(resolve, reject) {\n    reject(new Error('\u51fa\u9519\u4e86'))\n})\n")),(0,o.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u7684\u529f\u80fd\u662f\u8c03\u7528\u8be5Promise \u5bf9\u8c61\u901a\u8fc7then\u6307\u5b9a\u7684 onRejected \u51fd\u6570\uff0c\u5e76\u5c06\u9519\u8bef\uff08Error\uff09\u5bf9\u8c61\u4f20\u9012\u7ed9\u8fd9\u4e2a onRejected \u51fd\u6570\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Promise.reject(new Error('BOOM!'))\n")),(0,o.kt)("h2",{id:"-4"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u57fa\u672c\u8bed\u6cd5")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Promise.all(promiseArray)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var p1 = Promise.resolve(1)\nvar p2 = Promise.resolve(2)\nvar p3 = Promise.resolve(3)\nPromise.all([p1, p2, p3]).then(function(results) {\n    console.log(results) // [1, 2, 3]\n})\n")),(0,o.kt)("p",null,"Promise.all \u751f\u6210\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 Promise \u5bf9\u8c61\uff0c\u6240\u4ee5\u5b83\u53ef\u4ee5\u4f7f\u7528 Promise \u5b9e\u4f8b\u7684\u6240\u6709\u65b9\u6cd5\u3002\u53c2\u6570\u4f20\u9012promise\u6570\u7ec4\u4e2d\u6240\u6709\u7684 Promise \u5bf9\u8c61\u90fd\u53d8\u4e3aresolve\u7684\u65f6\u5019\uff0c\u8be5\u65b9\u6cd5\u624d\u4f1a\u8fd4\u56de\uff0c \u65b0\u521b\u5efa\u7684 Promise \u5219\u4f1a\u4f7f\u7528\u8fd9\u4e9b promise \u7684\u503c\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u53c2\u6570\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2apromise\u4e3areject\u7684\u8bdd\uff0c\u5219\u6574\u4e2aPromise.all\u8c03\u7528\u4f1a\u7acb\u5373\u7ec8\u6b62\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2areject\u7684\u65b0\u7684 Promise \u5bf9\u8c61\u3002"),(0,o.kt)("p",null,"\u7531\u4e8e\u53c2\u6570\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u90fd\u662f\u7531 Promise.resolve \u5305\u88c5\uff08wrap\uff09\u7684\uff0c\u6240\u4ee5Promise.all \u53ef\u4ee5\u5904\u7406\u4e0d\u540c\u7c7b\u578b\u7684 Promise \u5bf9\u8c61\u3002"),(0,o.kt)("h2",{id:"-5"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u57fa\u672c\u8bed\u6cd5")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Promise.race(promiseArray)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var p1 = Promise.resolve(1)\nvar p2 = Promise.resolve(2)\nvar p3 = Promise.resolve(3)\nPromise.race([p1, p2, p3]).then(function(value) {\n    console.log(value) // 1\n})\n")),(0,o.kt)("p",null,"Promise.race \u751f\u6210\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 Promise \u5bf9\u8c61\u3002"),(0,o.kt)("p",null,"\u53c2\u6570 promise \u6570\u7ec4\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a Promise \u5bf9\u8c61\u5982\u679c\u53d8\u4e3a resolve \u6216\u8005 reject \u7684\u8bdd\uff0c \u8be5\u51fd\u6570\u5c31\u4f1a\u8fd4\u56de\uff0c\u5e76\u4f7f\u7528\u8fd9\u4e2a Promise \u5bf9\u8c61\u7684\u503c\u8fdb\u884c resolve \u6216\u8005 reject\u3002"),(0,o.kt)("h2",{id:"\u7ec3\u4e60"},"\u7ec3\u4e60"),(0,o.kt)("p",null,"\u5982\u4f55\u628a\u524d\u9762Callback Hell\u7684\u4ee3\u7801\u6539\u5199\u6210promise\u7684\u5199\u6cd5\u5462\uff1f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function getPromise(url) {\n    return new Promise((resolve, reject) => {\n        ajax(url, res => {\n            resolve(res)\n        }, err => {\n            reject(err)\n        })\n    })\n}\n\ngetPromise('static/a.json')\n    .then(res => {\n        console.log(res)\n        return getPromise('static/b.json')\n    }).then(res => {\n        console.log(res)\n        return getPromise('static/c.json')\n    }).then(res => {\n        console.log(res)\n    }).catch(err => {\n        console.log(err)\n    })\n")),(0,o.kt)("h3",{id:"\u63a8\u8350\u9605\u8bfb"},"\u63a8\u8350\u9605\u8bfb"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"Promise")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch"},"fetch")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ponyfoo.com/articles/es6-promises-in-depth"},"ES6 Promises in Depth")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://scotch.io/tutorials/javascript-promises-for-dummies"},"JavaScript Promises for Dummies"))))}k.isMDXComponent=!0}}]);