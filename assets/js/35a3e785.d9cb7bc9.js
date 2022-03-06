"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7962],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var a=t(7294);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,p=function(e,n){if(null==e)return{};var t,a,p={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,p=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=c(t),d=p,m=k["".concat(i,".").concat(d)]||k[d]||u[d]||l;return t?a.createElement(m,r(r({ref:n},s),{},{components:t})):a.createElement(m,r({ref:n},s))}));function d(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var l=t.length,r=new Array(l);r[0]=k;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:p,r[1]=o;for(var c=2;c<l;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},2840:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=t(7462),p=t(3366),l=(t(7294),t(3905)),r=["components"],o={},i="Webpack",c={unversionedId:"frontend/es6/\u73af\u5883\u6784\u5efa/Webpack",id:"frontend/es6/\u73af\u5883\u6784\u5efa/Webpack",title:"Webpack",description:"\u73b0\u5982\u4eca\u524d\u7aef\u4e3b\u6d41\u7684\u4e09\u5927\u6846\u67b6VueJs\u3001ReactJs\u3001AngularJs\u90fd\u63a8\u8350\u4e0ewebpack\u5171\u540c\u4f7f\u7528\uff0c\u6240\u4ee5\u4e0d\u7ba1\u4f7f\u7528\u54ea\u79cd\u6280\u672f\u8def\u7ebf\u90fd\u4e0d\u5f97\u4e0d\u53bb\u5b66\u4e60\u4e86\u89e3webpack\u3002\u90a3\u4e48webpack\u5230\u5e95\u662f\u4f55\u65b9\u795e\u5723\uff1f",source:"@site/docs/frontend/es6/09-\u73af\u5883\u6784\u5efa/01-Webpack.md",sourceDirName:"frontend/es6/09-\u73af\u5883\u6784\u5efa",slug:"/frontend/es6/\u73af\u5883\u6784\u5efa/Webpack",permalink:"/docs/frontend/es6/\u73af\u5883\u6784\u5efa/Webpack",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/es6/09-\u73af\u5883\u6784\u5efa/01-Webpack.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"frontend_es6",previous:{title:"\u73af\u5883\u6784\u5efa",permalink:"/docs/category/\u73af\u5883\u6784\u5efa-1"},next:{title:"babel",permalink:"/docs/frontend/es6/\u73af\u5883\u6784\u5efa/babel"}},s={},u=[{value:"\u5b98\u65b9\u7f51\u7ad9",id:"\u5b98\u65b9\u7f51\u7ad9",level:3},{value:"\u6838\u5fc3\u6982\u5ff5",id:"\u6838\u5fc3\u6982\u5ff5",level:2},{value:"loader",id:"loader",level:3},{value:"\u5f00\u53d1\u73af\u5883\u4e0e\u751f\u4ea7\u73af\u5883",id:"\u5f00\u53d1\u73af\u5883\u4e0e\u751f\u4ea7\u73af\u5883",level:2},{value:"\u5f00\u53d1\u6a21\u5f0f --save-dev",id:"\u5f00\u53d1\u6a21\u5f0f---save-dev",level:3},{value:"\u751f\u4ea7\u6a21\u5f0f --save",id:"\u751f\u4ea7\u6a21\u5f0f---save",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"webpack.base.config.js",id:"webpackbaseconfigjs",level:4},{value:"webpack.dev.config.js",id:"webpackdevconfigjs",level:4},{value:"webpack.pro.config.js",id:"webpackproconfigjs",level:4},{value:"webpack.config.js",id:"webpackconfigjs",level:4}],k={toc:u};function d(e){var n=e.components,t=(0,p.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"webpack"},"Webpack"),(0,l.kt)("p",null,"\u73b0\u5982\u4eca\u524d\u7aef\u4e3b\u6d41\u7684\u4e09\u5927\u6846\u67b6VueJs\u3001ReactJs\u3001AngularJs\u90fd\u63a8\u8350\u4e0ewebpack\u5171\u540c\u4f7f\u7528\uff0c\u6240\u4ee5\u4e0d\u7ba1\u4f7f\u7528\u54ea\u79cd\u6280\u672f\u8def\u7ebf\u90fd\u4e0d\u5f97\u4e0d\u53bb\u5b66\u4e60\u4e86\u89e3webpack\u3002\u90a3\u4e48webpack\u5230\u5e95\u662f\u4f55\u65b9\u795e\u5723\uff1f"),(0,l.kt)("p",null,"\u5b98\u65b9\u8bf4\u6cd5\u662fwebpack\u662f\u4e00\u4e2a\u6a21\u5757\u6253\u5305\u673a\uff0c\u6211\u4e2a\u4eba\u7406\u89e3\u662f\u5b83\u53ef\u4ee5\u628a\u6211\u4eec\u5728\u5f00\u53d1\u73af\u5883\u4e0b\u7684\u4ee3\u7801\u4ee5\u53ca\u4f9d\u8d56\u6587\u4ef6\u7b49\u6253\u5305\u6210\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u7684\u6587\u4ef6\u3002\u4e5f\u53ef\u4ee5\u628a\u4e00\u4e9b\u6d4f\u89c8\u5668\u4e0d\u80fd\u76f4\u63a5\u8fd0\u884c\u7684\u6587\u4ef6\u8fdb\u884c\u8f6c\u5316\uff0c\u6bd4\u5982\u662fts\u3001vue\u3001less\u3001scss\u7b49\u3002\u540c\u65f6webpack\u4e5f\u53ef\u4ee5\u5bf9\u4ee3\u7801\u8fdb\u884c\u4f18\u5316\uff0c\u6bd4\u5982\u538b\u7f29\u3001\u5408\u5e76\u3001\u6587\u4ef6\u7f13\u5b58\u7b49\u7b49\u3002\u5728\u9879\u76ee\u4e2d\u6211\u4eec\u53ea\u9700\u8981\u628a\u76f8\u5e94\u7684\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u597d\uff0c\u90a3\u4e48\u63a5\u4e0b\u6765\u7684\u5de5\u4f5c\u5c31\u90fd\u53ef\u4ee5\u4ea4\u7ed9webpack\u8fd9\u4e2a\u5168\u80fd\u5927\u795e\u53bb\u5b8c\u6210\u4e86\u3002"),(0,l.kt)("h3",{id:"\u5b98\u65b9\u7f51\u7ad9"},"\u5b98\u65b9\u7f51\u7ad9"),(0,l.kt)("p",null,"\u82f1\u6587\uff1a ",(0,l.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"https://webpack.js.org/")),(0,l.kt)("p",null,"\u4e2d\u6587\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://webpack.docschina.org/"},"https://webpack.docschina.org/")),(0,l.kt)("p",null,"Github\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack"},"https://github.com/webpack/webpack")),(0,l.kt)("h2",{id:"\u6838\u5fc3\u6982\u5ff5"},"\u6838\u5fc3\u6982\u5ff5"),(0,l.kt)("h3",{id:""}),(0,l.kt)("p",null,"\u5165\u53e3\u8d77\u70b9(entry point)\u6307\u793a webpack \u5e94\u8be5\u4f7f\u7528\u54ea\u4e2a\u6a21\u5757\uff0c\u6765\u4f5c\u4e3a\u6784\u5efa\u5176\u5185\u90e8 \u4f9d\u8d56\u56fe(dependency graph) \u7684\u5f00\u59cb\u3002\u8fdb\u5165\u5165\u53e3\u8d77\u70b9\u540e\uff0cwebpack \u4f1a\u627e\u51fa\u6709\u54ea\u4e9b\u6a21\u5757\u548c\u5e93\u662f\u5165\u53e3\u8d77\u70b9\uff08\u76f4\u63a5\u548c\u95f4\u63a5\uff09\u4f9d\u8d56\u7684\u3002"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u503c\u662f ./src/index.js\uff0c\u4f46\u53ef\u4ee5\u901a\u8fc7\u5728 webpack configuration \u4e2d\u914d\u7f6e entry \u5c5e\u6027\uff0c\u6765\u6307\u5b9a\u4e00\u4e2a\uff08\u6216\u591a\u4e2a\uff09\u4e0d\u540c\u7684\u5165\u53e3\u8d77\u70b9\u3002\u4f8b\u5982\uff1a"),(0,l.kt)("p",null,"webpack.config.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n    entry: './path/to/my/entry/file.js'\n}\n")),(0,l.kt)("h3",{id:"-1"}),(0,l.kt)("p",null,"output \u5c5e\u6027\u544a\u8bc9 webpack \u5728\u54ea\u91cc\u8f93\u51fa\u5b83\u6240\u521b\u5efa\u7684 bundle\uff0c\u4ee5\u53ca\u5982\u4f55\u547d\u540d\u8fd9\u4e9b\u6587\u4ef6\u3002\u4e3b\u8981\u8f93\u51fa\u6587\u4ef6\u7684\u9ed8\u8ba4\u503c\u662f ./dist/main.js\uff0c\u5176\u4ed6\u751f\u6210\u6587\u4ef6\u9ed8\u8ba4\u653e\u7f6e\u5728 ./dist \u6587\u4ef6\u5939\u4e2d\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5728\u914d\u7f6e\u4e2d\u6307\u5b9a\u4e00\u4e2a output \u5b57\u6bb5\uff0c\u6765\u914d\u7f6e\u8fd9\u4e9b\u5904\u7406\u8fc7\u7a0b\uff1a"),(0,l.kt)("p",null,"webpack.config.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path')\n\nmodule.exports = {\n    entry: './path/to/my/entry/file.js',\n    output: {\n        path: path.resolve(__dirname, 'dist'),\n        filename: 'my-first-webpack.bundle.js'\n    }\n}\n")),(0,l.kt)("h3",{id:"loader"},"loader"),(0,l.kt)("p",null,"webpack \u53ea\u80fd\u7406\u89e3 JavaScript \u548c JSON \u6587\u4ef6\u3002loader \u8ba9 webpack \u80fd\u591f\u53bb\u5904\u7406\u5176\u4ed6\u7c7b\u578b\u7684\u6587\u4ef6\uff0c\u5e76\u5c06\u5b83\u4eec\u8f6c\u6362\u4e3a\u6709\u6548 \u6a21\u5757\uff0c\u4ee5\u4f9b\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528\uff0c\u4ee5\u53ca\u88ab\u6dfb\u52a0\u5230\u4f9d\u8d56\u56fe\u4e2d\u3002"),(0,l.kt)("p",null,"\u6ce8\u610f"),(0,l.kt)("p",null,"loader \u80fd\u591f import \u5bfc\u5165\u4efb\u4f55\u7c7b\u578b\u7684\u6a21\u5757\uff08\u4f8b\u5982 .css \u6587\u4ef6\uff09\uff0c\u8fd9\u662f webpack \u7279\u6709\u7684\u529f\u80fd\uff0c\u5176\u4ed6\u6253\u5305\u7a0b\u5e8f\u6216\u4efb\u52a1\u6267\u884c\u5668\u7684\u53ef\u80fd\u5e76\u4e0d\u652f\u6301\u3002\u6211\u4eec\u8ba4\u4e3a\u8fd9\u79cd\u8bed\u8a00\u6269\u5c55\u662f\u5f88\u6709\u5fc5\u8981\u7684\uff0c\u56e0\u4e3a\u8fd9\u53ef\u4ee5\u4f7f\u5f00\u53d1\u4eba\u5458\u521b\u5efa\u51fa\u66f4\u51c6\u786e\u7684\u4f9d\u8d56\u5173\u7cfb\u56fe\u3002"),(0,l.kt)("p",null,"\u5728\u66f4\u9ad8\u5c42\u9762\uff0c\u5728 webpack \u7684\u914d\u7f6e\u4e2d loader \u6709\u4e24\u4e2a\u5c5e\u6027\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"test \u5c5e\u6027\uff0c\u7528\u4e8e\u6807\u8bc6\u51fa\u5e94\u8be5\u88ab\u5bf9\u5e94\u7684 loader \u8fdb\u884c\u8f6c\u6362\u7684\u67d0\u4e2a\u6216\u67d0\u4e9b\u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"use \u5c5e\u6027\uff0c\u8868\u793a\u8fdb\u884c\u8f6c\u6362\u65f6\uff0c\u5e94\u8be5\u4f7f\u7528\u54ea\u4e2a loader\u3002")),(0,l.kt)("p",null,"webpack.config.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\n\nmodule.exports = {\n    output: {\n        filename: 'my-first-webpack.bundle.js'\n    },\n    module: {\n        rules: [{\n            test: /\\.txt$/,\n            use: 'raw-loader'\n        }]\n    }\n}\n")),(0,l.kt)("h3",{id:"-2"}),(0,l.kt)("p",null,"loader \u7528\u4e8e\u8f6c\u6362\u67d0\u4e9b\u7c7b\u578b\u7684\u6a21\u5757\uff0c\u800c\u63d2\u4ef6\u5219\u53ef\u4ee5\u7528\u4e8e\u6267\u884c\u8303\u56f4\u66f4\u5e7f\u7684\u4efb\u52a1\u3002\u5305\u62ec\uff1a\u6253\u5305\u4f18\u5316\uff0c\u8d44\u6e90\u7ba1\u7406\uff0c\u6ce8\u5165\u73af\u5883\u53d8\u91cf\u3002"),(0,l.kt)("p",null,"\u60f3\u8981\u4f7f\u7528\u4e00\u4e2a\u63d2\u4ef6\uff0c\u53ea\u9700\u8981 require() \u5b83\uff0c\u7136\u540e\u628a\u5b83\u6dfb\u52a0\u5230 plugins \u6570\u7ec4\u4e2d\u3002\u591a\u6570\u63d2\u4ef6\u53ef\u4ee5\u901a\u8fc7\u9009\u9879(option)\u81ea\u5b9a\u4e49\u3002\u4e5f\u53ef\u4ee5\u5728\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u4e2d\u56e0\u4e3a\u4e0d\u540c\u76ee\u7684\u800c\u591a\u6b21\u4f7f\u7528\u540c\u4e00\u4e2a\u63d2\u4ef6\uff0c\u8fd9\u65f6\u9700\u8981\u901a\u8fc7\u4f7f\u7528 new \u64cd\u4f5c\u7b26\u6765\u521b\u5efa\u5b83\u7684\u4e00\u4e2a\u5b9e\u4f8b\u3002"),(0,l.kt)("p",null,"webpack.config.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const HtmlWebpackPlugin = require('html-webpack-plugin'); // \u901a\u8fc7 npm \u5b89\u88c5\nconst webpack = require('webpack'); // \u7528\u4e8e\u8bbf\u95ee\u5185\u7f6e\u63d2\u4ef6\n\nmodule.exports = {\n    module: {\n        rules: [{\n            test: /\\.txt$/,\n            use: 'raw-loader'\n        }]\n    },\n    plugins: [\n        new HtmlWebpackPlugin({\n            template: './src/index.html'\n        })\n    ]\n}\n")),(0,l.kt)("h3",{id:"-3"}),(0,l.kt)("p",null,"\u901a\u8fc7\u9009\u62e9 development, production \u6216 none \u4e4b\u4e2d\u7684\u4e00\u4e2a\uff0c\u6765\u8bbe\u7f6e mode \u53c2\u6570\uff0c\u53ef\u4ee5\u542f\u7528 webpack \u5185\u7f6e\u5728\u76f8\u5e94\u73af\u5883\u4e0b\u7684\u4f18\u5316\u3002\u5176\u9ed8\u8ba4\u503c\u4e3a production\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n    mode: 'production'\n}\n")),(0,l.kt)("h2",{id:"\u5f00\u53d1\u73af\u5883\u4e0e\u751f\u4ea7\u73af\u5883"},"\u5f00\u53d1\u73af\u5883\u4e0e\u751f\u4ea7\u73af\u5883"),(0,l.kt)("p",null,"\u521d\u5b66\u8005\u4f1a\u6709\u4e00\u4e2a\u7591\u95ee\uff0c\u4e3a\u4ec0\u4e48\u6709\u7684\u65f6\u5019\u5b89\u88c5\u4f9d\u8d56\u5305\u7684\u65f6\u5019\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"--save-dev")," \uff0c\u800c\u6709\u7684\u65f6\u5019\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"--save")," \uff0c\u8fd9\u4e24\u4e2a\u6709\u4ec0\u4e48\u533a\u522b\u5462\uff1f\u4ec0\u4e48\u65f6\u5019\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"dev")," \u5462\uff1f \u8fd9\u5c31\u9700\u8981\u641e\u6e05\u695a\u4e00\u4e2a\u6982\u5ff5\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"\u5f00\u53d1\u6a21\u5f0f")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"\u751f\u4ea7\u6a21\u5f0f")," \u3002"),(0,l.kt)("h3",{id:"\u5f00\u53d1\u6a21\u5f0f---save-dev"},"\u5f00\u53d1\u6a21\u5f0f --save-dev"),(0,l.kt)("p",null,"\u9879\u76ee\u5728\u5f00\u53d1\u7f16\u7801\u8fc7\u7a0b\u4e2d\u8fd8\u672a\u4e0a\u7ebf\u4f7f\u7528\u5c31\u5c5e\u4e8e\u5f00\u53d1\u6a21\u5f0f\uff0c\u8be5\u6a21\u5f0f\u4e0b\u4ee3\u7801\u4e0d\u9700\u8981\u538b\u7f29\u3001\u5408\u5e76\u7b49\u3002\u6bd4\u5982\u7f16\u5199\u53ef\u4ee5\u4f7f\u7528sass\u8fdb\u884ccss\u9884\u5904\u7406\uff0c\u4f7f\u7528ES6\u7684\u8bed\u6cd5\u6765\u7f16\u5199js\u4ee3\u7801\u3002\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\u4f9d\u8d56\u7684\u5305\u5b89\u88c5\u7684\u65f6\u5019\u5c31\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--save-dev")," \uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"dev")," \u8868\u793a\u5f00\u53d1\u7684\u610f\u601d\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--save-dev")," \u5b89\u88c5\u7684\u4f9d\u8d56\u5305\uff0c\u4f1a\u5b89\u88c5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u4e2d\uff0c\u8fd9\u4e9b\u4f9d\u8d56\u5305\u53ea\u5728\u5f00\u53d1\u65f6\u5019\u4f1a\u4f7f\u7528\u5230\uff0c\u5728\u4e0a\u7ebf\u751f\u6210\u73af\u5883\u4e0b\u5c31\u4e0d\u9700\u8981\u4e86\u3002"),(0,l.kt)("h3",{id:"\u751f\u4ea7\u6a21\u5f0f---save"},"\u751f\u4ea7\u6a21\u5f0f --save"),(0,l.kt)("p",null,"\u9879\u76ee\u5df2\u7ecf\u5f00\u53d1\u6d4b\u8bd5\u5b8c\u6210\u9700\u8981\u6253\u5305\u4e0a\u7ebf\u8fdb\u884c\u8fd0\u8425\u4e86\uff0c\u8fd9\u65f6\u5019\u5c31\u5c5e\u4e8e\u751f\u4ea7\u6a21\u5f0f\uff0c\u6539\u6a21\u5f0f\u4e0b\u7684\u6587\u4ef6\u9700\u8981\u662f\u6700\u7ec8\u6d4f\u89c8\u5668\u53ef\u4ee5\u76f4\u63a5\u89e3\u6790\u7684\u6587\u4ef6\uff0c\u4e0d\u80fd\u518d\u7528\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},".scss")," \u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},".vue")," \u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},".jsx")," \u7b49\u8fd9\u6837\u7684\u6587\u4ef6\u4e86\u3002\u5728\u751f\u4ea7\u6a21\u5f0f\u4e0b\u4f9d\u8d56\u7684\u5305\u5b89\u88c5\u7684\u65f6\u5019\u5c31\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--save")," \uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--save")," \u5b89\u88c5\u7684\u4f9d\u8d56\u5305\uff0c\u4f1a\u5b89\u88c5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies")," \u4e2d\uff0c\u8fd9\u4e9b\u4f9d\u8d56\u5305\u662f\u6700\u7ec8\u5728\u4e0a\u7ebf\u65f6\u5019\u4f7f\u7528\u5230\u7684\uff0c\u6bd4\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"jquery.js")," \u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"vue.js")," \u7b49\u3002"),(0,l.kt)("p",null,"TIP"),(0,l.kt)("p",null,"\u5927\u5bb6\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u5b89\u88c5\u6bcf\u4e2a\u4f9d\u8d56\u5305\u7684\u65f6\u5019\uff0c\u90fd\u4e00\u5b9a\u5148\u8003\u8651\u8fd9\u4e2a\u5305\u662f\u53ea\u6709\u5f00\u53d1\u6a21\u5f0f\u4e0b\u80fd\u7528\u5230\uff0c\u8fd8\u662f\u5728\u751f\u4ea7\u6a21\u5f0f\u4e0b\u4e5f\u9700\u8981\u7528\u5230\uff0c\u5176\u5b9e\u5927\u5bb6\u6309\u7167\u8fd9\u4e2a\u601d\u8def\u628a\u4e0b\u9762\u7684\u6587\u7ae0\u90fd\u770b\u5b8c\uff0c\u5e94\u8be5\u5c31\u53ef\u4ee5\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"--save-dev")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"--save")," \u6709\u4e00\u4e2a\u81ea\u5df1\u7684\u7406\u89e3\u4e86"),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u521d\u59cb\u5316package.json")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm init \n")),(0,l.kt)("p",null,"TIP"),(0,l.kt)("p",null,"\u76ee\u7684\u662f\u751f\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," \u6587\u4ef6\u3002 \u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"npm init -y")," \u6240\u6709\u914d\u7f6e\u90fd\u9009\u62e9\u9ed8\u8ba4\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9879\u76ee\u5b89\u88c5webpack")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm i webpack webpack-cli webpack-dev-server --save-dev\n")),(0,l.kt)("p",null,"\u6ce8\u610f"),(0,l.kt)("p",null,"\u5b89\u88c5webpack\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a\u9879\u76ee\u5b89\u88c5 \u548c \u5168\u5c40\u5b89\u88c5\u3002"),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u547d\u4ee4\u662f\u5728\u672c\u9879\u76ee\u5b89\u88c5webpack\uff0c\u4e0d\u63a8\u8350\u5168\u5c40\u5b89\u88c5webpack\uff0c\u56e0\u4e3a\u5168\u5c40\u5b89\u88c5\u4ee5\u540e\u7248\u672c\u5c31\u56fa\u5b9a\u4e86\uff0c\u6bd4\u5982\u5f53\u524d\u7535\u8111\u4e2d\u5168\u5c40\u5b89\u88c5\u4e86V4.43.0\u8fd9\u4e2a\u7248\u672c\u7684webpack\uff0c\u5982\u679c\u9700\u8981\u8fd0\u884c\u4e00\u4e2a\u6bd4\u8f83\u65e9\u671f\u7248\u672c\u7684\u9879\u76ee\uff0c\u6bd4\u5982webpack3.X\u7684\u9879\u76ee\uff0c\u5c31\u4f1a\u6709\u95ee\u9898\u3002\u53e6\u5916\uff0c\u5982\u679c\u5f53\u524d\u9879\u76ee\u662f\u4f7f\u7528V4.43.0\u7248\u672c\u5199\u7684\uff0c\u5982\u679c\u6709\u4e00\u5929webpack\u7684\u7248\u672c\u5347\u7ea7\u4e86\uff0c\u6bd4\u5982\u5347\u7ea7\u5230\u4e86V5. X\uff0c\u90a3\u4e48\u4e4b\u524d\u7684\u9879\u76ee\u5f88\u6709\u53ef\u80fd\u5c31\u8dd1\u4e0d\u8d77\u6765\u4e86\u3002\u6240\u4ee5\u5e76\u4e0d\u5efa\u8bae\u5168\u5c40\u5b89\u88c5\uff0c\u800c\u662f\u5efa\u8bae\u9879\u76ee\u5b89\u88c5\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"li"},"webpack.config.js")," \u6587\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n    mode: 'development',\n    entry: './src/index.js',\n    output: {\n        filename: 'index.js'\n    },\n}\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7f16\u8bd1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npx webpack\n")),(0,l.kt)("p",null,"TIP"),(0,l.kt)("p",null,"npx \u7684\u4f5c\u7528\u5c31\u662f\u8c03\u7528\u9879\u76ee\u5185\u90e8\u5b89\u88c5\u7684\u6a21\u5757\uff0c\u56e0\u4e3a\u6211\u4eec\u7684webpack\u9009\u62e9\u7684\u662f\u9879\u76ee\u5b89\u88c5\uff0c\u800c\u4e0d\u662f\u5168\u5c40\u5b89\u88c5\u3002\u5982\u679c\u662f\u5168\u5c40\u5b89\u88c5\u76f4\u63a5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"webpack")," \u547d\u4ee4\u5373\u53ef\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u914d\u7f6ehtml-webpack-plugin")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"html-webpack-plugin")," \u4e3b\u8981\u6709\u4e24\u4e2a\u4f5c\u7528"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e3ahtml\u6587\u4ef6\u4e2d\u5f15\u5165\u7684\u5916\u90e8\u8d44\u6e90\u5982script\u3001link\u52a8\u6001\u6dfb\u52a0\u6bcf\u6b21compile\u540e\u7684hash\uff0c\u9632\u6b62\u5f15\u7528\u7f13\u5b58\u7684\u5916\u90e8\u6587\u4ef6\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u751f\u6210\u521b\u5efahtml\u5165\u53e3\u6587\u4ef6")),(0,l.kt)("p",null,"\u5b89\u88c5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm i html-webpack-plugin --save-dev\n")),(0,l.kt)("p",null,"\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const HtmlWebpackPlugin = require('html-webpack-plugin')\nmodule.exports = {\n    mode: 'development',\n    entry: './src/index.js',\n    output: {\n        filename: 'index.js'\n    },\n    plugins: [\n        new HtmlWebpackPlugin()\n    ]\n}\n")),(0,l.kt)("p",null,"\u914d\u7f6e\u6a21\u677f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new HtmlWebpackPlugin({\n    template: './src/index.html'\n})\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u914d\u7f6ecopy-webpack-plugin")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"copy-webpack-plugin")," \u7684\u4f5c\u7528\u5c31\u662f\u62f7\u8d1d\u6587\u4ef6\uff0c\u6216\u8005\u6587\u4ef6\u5939\u3002"),(0,l.kt)("p",null,"\u5b89\u88c5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install copy-webpack-plugin --save-dev\n")),(0,l.kt)("p",null,"\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const HtmlWebpackPlugin = require('html-webpack-plugin')\nconst CopyWebpackPlugin = require('copy-webpack-plugin');\n\nmodule.exports = {\n    mode: 'production',\n    entry: './src/index.js',\n    output: {\n        filename: 'index.js'\n    },\n    plugins: [\n        new HtmlWebpackPlugin({\n            template: './src/index.html'\n        }),\n        new CopyWebpackPlugin([{\n            from: 'static',\n            to: 'static'\n        }, ])\n    ]\n}\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u6587\u4ef6\u62c6\u5206")),(0,l.kt)("p",null,"\u5927\u578b\u9879\u76ee\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," \u6587\u4ef6\u7684\u914d\u7f6e\u4f1a\u975e\u5e38\u590d\u6742\uff0c\u6240\u4ee5\u4e00\u822c\u4f1a\u62c6\u5206\u4e3a\u591a\u4e2a\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u521b\u5efabuild\u6587\u4ef6\u5939\uff0c\u5728build\u4e2d\u628a ",(0,l.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," \u62c6\u5206\u4e3a\u56db\u4e2a\u6587\u4ef6\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"webpack.base.config.js \u57fa\u7840\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"webpack.dev.config.js \u5f00\u53d1\u73af\u5883\u4e0b\u7684\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"webpack.pro.config.js \u751f\u6210\u73af\u5883\u4e0b\u7684\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"webpack.config.js \u603b\u7684\u914d\u7f6e\u6587\u4ef6")),(0,l.kt)("h4",{id:"webpackbaseconfigjs"},"webpack.base.config.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const HtmlWebpackPlugin = require('html-webpack-plugin')\nconst CopyWebpackPlugin = require('copy-webpack-plugin');\n\nmodule.exports = {\n    entry: './src/index.js',\n    output: {\n        filename: 'index.js'\n    },\n    plugins: [\n        new HtmlWebpackPlugin({\n            template: './src/index.html'\n        }),\n        new CopyWebpackPlugin([{\n            from: 'static',\n            to: 'static'\n        }, ])\n    ]\n}\n")),(0,l.kt)("h4",{id:"webpackdevconfigjs"},"webpack.dev.config.js"),(0,l.kt)("p",null,"\u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"p"},"cheap-module-eval-source-map")," \u4f7f\u7528 cheap \u6a21\u5f0f\u53ef\u4ee5\u5927\u5e45\u63d0\u9ad8 souremap \u751f\u6210\u7684\u6548\u7387"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n    devtool: 'cheap-module-eval-source-map'\n}\n")),(0,l.kt)("h4",{id:"webpackproconfigjs"},"webpack.pro.config.js"),(0,l.kt)("p",null,"\u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"p"},"clean-webpack-plugin")," \u81ea\u52a8\u5220\u9664webpack\u91cc\u7684dist\u76ee\u5f55\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm i clean-webpack-plugin -D\nconst {\n    CleanWebpackPlugin\n} = require('clean-webpack-plugin')\n\nmodule.exports = {\n    plugins: [\n        new CleanWebpackPlugin()\n    ]\n}\n")),(0,l.kt)("h4",{id:"webpackconfigjs"},"webpack.config.js"),(0,l.kt)("p",null,"\u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"p"},"webpack-merge")," \u628a\u914d\u7f6e\u6587\u4ef6\u5408\u5e76"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm i webpack-merge -D\nconst merge = require('webpack-merge')\nconst baseConfig = require('./webpack.base.config')\nconst devConfig = require('./webpack.dev.config')\nconst proConfig = require('./webpack.pro.config')\n\nmodule.exports = (env, argv) => {\n    let config = argv.mode === 'development' ? devConfig : proConfig;\n    return merge(baseConfig, config);\n}\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u542f\u52a8\u547d\u4ee4")),(0,l.kt)("p",null,"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts")," \u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "start": "webpack-dev-server --mode=development --config ./build/webpack.config.js",\n    "build": "webpack --mode=production --config ./build/webpack.config.js"\n}\n')))}d.isMDXComponent=!0}}]);