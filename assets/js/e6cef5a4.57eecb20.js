"use strict";(self.webpackChunknotes_frankfeekr_cn=self.webpackChunknotes_frankfeekr_cn||[]).push([[2196],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=l,f=m["".concat(u,".").concat(d)]||m[d]||i[d]||a;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3989:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>i,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),l=(t(7294),t(3905));const a={},o=void 0,s={unversionedId:"frontend/node-install/nvm - node \u7248\u672c\u7ba1\u7406\u5de5\u5177",id:"frontend/node-install/nvm - node \u7248\u672c\u7ba1\u7406\u5de5\u5177",title:"nvm - node \u7248\u672c\u7ba1\u7406\u5de5\u5177",description:"\u5b98\u65b9 Github\uff1anvm-sh/nvm: Node Version Manager",source:"@site/docs/03.frontend/node-install/nvm - node \u7248\u672c\u7ba1\u7406\u5de5\u5177.md",sourceDirName:"03.frontend/node-install",slug:"/frontend/node-install/nvm - node \u7248\u672c\u7ba1\u7406\u5de5\u5177",permalink:"/docs/frontend/node-install/nvm - node \u7248\u672c\u7ba1\u7406\u5de5\u5177",draft:!1,editUrl:"https://github.com/frank-lam/frankfeekr-notes/tree/master/docs/03.frontend/node-install/nvm - node \u7248\u672c\u7ba1\u7406\u5de5\u5177.md",tags:[],version:"current",frontMatter:{},sidebar:"frontend",previous:{title:"nrm - npm \u955c\u50cf\u6e90\u7ba1\u7406\u5de5\u5177",permalink:"/docs/frontend/node-install/nrm - npm \u955c\u50cf\u6e90\u7ba1\u7406\u5de5\u5177"},next:{title:"Angular",permalink:"/docs/frontend/angular/"}},u={},c=[],p={toc:c};function i(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5b98\u65b9 Github\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm-sh/nvm: Node Version Manager"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Install & Update Script")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u5b8c\u6210\u540e\u52a0\u5165\u7cfb\u7edf\u73af\u5883")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"source ~/.bashrc\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u67e5\u770b nvm \u7248\u672c list")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nvm list-romote\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u9700\u8981\u7684node\u7248\u672c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nvm install 16\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u67e5\u770b\u5f53\u524d\u673a\u5668\u5df2\u5b89\u88c5\u7248\u672c\u53f7")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nvm list\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5207\u6362node\u7248\u672c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nvm use 16\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u9ed8\u8ba4\u7684node\u7248\u672c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nvm alias default v16.14.0\n")))}i.isMDXComponent=!0}}]);