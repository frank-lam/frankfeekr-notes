"use strict";(self.webpackChunknotes_frankfeekr_cn=self.webpackChunknotes_frankfeekr_cn||[]).push([[5437],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=u(r),m=i,d=s["".concat(c,".").concat(m)]||s[m]||y[m]||o;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[s]="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var n=r(8168),i=(r(6540),r(5680));const o={},l=void 0,a={unversionedId:"tools/\u5feb\u4e50\u7684Linux\u547d\u4ee4\u884c/\u5e38\u7528\u7684 Linux \u547d\u4ee4\u884c",id:"tools/\u5feb\u4e50\u7684Linux\u547d\u4ee4\u884c/\u5e38\u7528\u7684 Linux \u547d\u4ee4\u884c",title:"\u5e38\u7528\u7684 Linux \u547d\u4ee4\u884c",description:"systemctl",source:"@site/docs/04.tools/12.\u5feb\u4e50\u7684Linux\u547d\u4ee4\u884c/02.\u5e38\u7528\u7684 Linux \u547d\u4ee4\u884c.md",sourceDirName:"04.tools/12.\u5feb\u4e50\u7684Linux\u547d\u4ee4\u884c",slug:"/tools/\u5feb\u4e50\u7684Linux\u547d\u4ee4\u884c/\u5e38\u7528\u7684 Linux \u547d\u4ee4\u884c",permalink:"/docs/tools/\u5feb\u4e50\u7684Linux\u547d\u4ee4\u884c/\u5e38\u7528\u7684 Linux \u547d\u4ee4\u884c",draft:!1,editUrl:"https://github.com/frank-lam/frankfeekr-notes/tree/master/docs/04.tools/12.\u5feb\u4e50\u7684Linux\u547d\u4ee4\u884c/02.\u5e38\u7528\u7684 Linux \u547d\u4ee4\u884c.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tools",previous:{title:"Vim",permalink:"/docs/tools/\u5feb\u4e50\u7684Linux\u547d\u4ee4\u884c/Vim"},next:{title:"Linux \u4f7f\u7528\u6280\u5de7",permalink:"/docs/tools/\u5feb\u4e50\u7684Linux\u547d\u4ee4\u884c/Linux \u4f7f\u7528\u6280\u5de7"}},c={},u=[{value:"systemctl",id:"systemctl",level:2},{value:"yum",id:"yum",level:2},{value:"curl",id:"curl",level:2},{value:"watch",id:"watch",level:2},{value:"tar",id:"tar",level:2},{value:"zip / unzip",id:"zip--unzip",level:2}],p={toc:u},s="wrapper";function y(e){let{components:t,...r}=e;return(0,i.yg)(s,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"systemctl"},"systemctl"),(0,i.yg)("p",null,"\u5f00\u673a\u542f\u52a8"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"systemctl enable docker --now\n")),(0,i.yg)("h2",{id:"yum"},"yum"),(0,i.yg)("h2",{id:"curl"},"curl"),(0,i.yg)("p",null,"\u3010\u524d\u540e\u7aef\u5fc5\u5b66\u3011\u5982\u4f55\u4f7f\u7528cURL\u547d\u4ee4\uff1f\u6709\u54ea\u4e9b\u5e38\u89c1\u7684\u7528\u6cd5\uff1f_\u54d4\u54e9\u54d4\u54e9_bilibili\n",(0,i.yg)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1n94y1U7Eu/?spm_id_from=333.337.search-card.all.click"},"https://www.bilibili.com/video/BV1n94y1U7Eu/?spm_id_from=333.337.search-card.all.click")),(0,i.yg)("h2",{id:"watch"},"watch"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"watch -n 1 kubectl get pods -A\n")),(0,i.yg)("h2",{id:"tar"},"tar"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"tar zcvf kubekey.tar.gz ./kubekey\n")),(0,i.yg)("h2",{id:"zip--unzip"},"zip / unzip"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"unzip zipped_file.zip\n")))}y.isMDXComponent=!0}}]);