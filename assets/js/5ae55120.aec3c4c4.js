"use strict";(self.webpackChunknotes_frankfeekr_cn=self.webpackChunknotes_frankfeekr_cn||[]).push([[6888],{5680:(e,n,r)=>{r.d(n,{xA:()=>i,yg:()=>d});var t=r(6540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},i=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,d=u["".concat(s,".").concat(f)]||u[f]||b[f]||o;return r?t.createElement(d,l(l({ref:n},i),{},{components:r})):t.createElement(d,l({ref:n},i))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5401:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var t=r(8168),a=(r(6540),r(5680));const o={},l="babel",c={unversionedId:"frontend/es6/\u73af\u5883\u6784\u5efa/babel",id:"frontend/es6/\u73af\u5883\u6784\u5efa/babel",title:"babel",description:"Babel \u662f\u4e00\u4e2a\u7f16\u8bd1\u5668\uff08\u8f93\u5165\u6e90\u7801 => \u8f93\u51fa\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\uff09\u3002",source:"@site/docs/03.frontend/es6/09-\u73af\u5883\u6784\u5efa/02-babel.md",sourceDirName:"03.frontend/es6/09-\u73af\u5883\u6784\u5efa",slug:"/frontend/es6/\u73af\u5883\u6784\u5efa/babel",permalink:"/docs/frontend/es6/\u73af\u5883\u6784\u5efa/babel",draft:!1,editUrl:"https://github.com/frank-lam/frankfeekr-notes/tree/master/docs/03.frontend/es6/09-\u73af\u5883\u6784\u5efa/02-babel.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"frontend_es6",previous:{title:"Webpack",permalink:"/docs/frontend/es6/\u73af\u5883\u6784\u5efa/Webpack"}},s={},p=[],i={toc:p},u="wrapper";function b(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,t.A)({},i,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"babel"},"babel"),(0,a.yg)("p",null,"Babel \u662f\u4e00\u4e2a\u7f16\u8bd1\u5668\uff08\u8f93\u5165\u6e90\u7801 => \u8f93\u51fa\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\uff09\u3002"),(0,a.yg)("p",null,"\u5b98\u7f51 ",(0,a.yg)("a",{parentName:"p",href:"https://www.babeljs.cn/"},"https://www.babeljs.cn/")),(0,a.yg)("p",null,"\u5b89\u88c5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"npm i -D babel-loader @babel/core @babel/preset-env \n")),(0,a.yg)("p",null,"\u914d\u7f6e\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"module: {\n    rules: [{\n        test: /\\.js$/,\n        exclude: /node_modules/,\n        use: {\n            loader: 'babel-loader',\n            options: {\n                presets: [\n                    ['@babel/preset-env', {\n                        'useBuiltIns': 'entry'\n                    }]\n                ]\n            }\n        }\n    }]\n},\n")))}b.isMDXComponent=!0}}]);