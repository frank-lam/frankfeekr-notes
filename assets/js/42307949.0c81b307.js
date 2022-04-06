"use strict";(self.webpackChunknotes_frankfeekr_cn=self.webpackChunknotes_frankfeekr_cn||[]).push([[126],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),k=p(t),d=a,g=k["".concat(o,".").concat(d)]||k[d]||i[d]||l;return t?r.createElement(g,u(u({ref:n},c),{},{components:t})):r.createElement(g,u({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,u=new Array(l);u[0]=k;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var p=2;p<l;p++)u[p]=t[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},4625:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return i}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),u=["components"],s={},o=void 0,p={unversionedId:"frontend/es6/es2015/RegExp",id:"frontend/es6/es2015/RegExp",title:"RegExp",description:"y\u4fee\u9970\u7b26",source:"@site/docs/03.frontend/es6/02-es2015/10-RegExp.md",sourceDirName:"03.frontend/es6/02-es2015",slug:"/frontend/es6/es2015/RegExp",permalink:"/docs/frontend/es6/es2015/RegExp",editUrl:"https://github.com/frank-lam/frankfeekr-notes/tree/master/docs/03.frontend/es6/02-es2015/10-RegExp.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"frontend_es6",previous:{title:"String",permalink:"/docs/frontend/es6/es2015/String"},next:{title:"Number",permalink:"/docs/frontend/es6/es2015/Number"}},c={},i=[{value:"y\u4fee\u9970\u7b26",id:"y\u4fee\u9970\u7b26",level:2},{value:"u\u4fee\u9970\u7b26",id:"u\u4fee\u9970\u7b26",level:2},{value:"\u63a8\u8350\u9605\u8bfb",id:"\u63a8\u8350\u9605\u8bfb",level:3}],k={toc:i};function d(e){var n=e.components,t=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"regexp"},"RegExp"),(0,l.kt)("h2",{id:"y\u4fee\u9970\u7b26"},"y\u4fee\u9970\u7b26"),(0,l.kt)("p",null,"ES6\u4e3a\u6b63\u5219\u8868\u8fbe\u5f0f\u6dfb\u52a0\u4e86y\u4fee\u9970\u7b26\uff0c\u53eb\u505a\u201c\u7c98\u8fde\u201d\uff08sticky\uff09\u4fee\u9970\u7b26\u3002"),(0,l.kt)("p",null,"y\u4fee\u9970\u7b26\u7684\u4f5c\u7528\u4e0eg\u4fee\u9970\u7b26\u7c7b\u4f3c\uff0c\u4e5f\u662f\u5168\u5c40\u5339\u914d\uff0c\u540e\u4e00\u6b21\u5339\u914d\u90fd\u4ece\u4e0a\u4e00\u6b21\u5339\u914d\u6210\u529f\u7684\u4e0b\u4e00\u4e2a\u4f4d\u7f6e\u5f00\u59cb\u3002\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\uff0cg\u4fee\u9970\u7b26\u53ea\u8981\u5269\u4f59\u4f4d\u7f6e\u4e2d\u5b58\u5728\u5339\u914d\u5c31\u53ef\uff0c\u800cy\u4fee\u9970\u7b26\u786e\u4fdd\u5339\u914d\u5fc5\u987b\u4ece\u5269\u4f59\u7684\u7b2c\u4e00\u4e2a\u4f4d\u7f6e\u5f00\u59cb\uff0c\u8fd9\u4e5f\u5c31\u662f\u201c\u7c98\u8fde\u201d\u7684\u6db5\u4e49\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const s = \'aaa_aa_a\'\nconst r1 = /a+/g\nconst r2 = /a+/y\n\nr1.exec(s) // ["aaa"]\nr2.exec(s) // ["aaa"]\n\nr1.exec(s) // ["aa"]\nr2.exec(s) // null\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u6709\u4e24\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u4e00\u4e2a\u4f7f\u7528g\u4fee\u9970\u7b26\uff0c\u53e6\u4e00\u4e2a\u4f7f\u7528y\u4fee\u9970\u7b26\u3002\u8fd9\u4e24\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\u5404\u6267\u884c\u4e86\u4e24\u6b21\uff0c\u7b2c\u4e00\u6b21\u6267\u884c\u7684\u65f6\u5019\uff0c\u4e24\u8005\u884c\u4e3a\u76f8\u540c\uff0c\u5269\u4f59\u5b57\u7b26\u4e32\u90fd\u662f_aa_a\u3002\u7531\u4e8eg\u4fee\u9970\u6ca1\u6709\u4f4d\u7f6e\u8981\u6c42\uff0c\u6240\u4ee5\u7b2c\u4e8c\u6b21\u6267\u884c\u4f1a\u8fd4\u56de\u7ed3\u679c\uff0c\u800cy\u4fee\u9970\u7b26\u8981\u6c42\u5339\u914d\u5fc5\u987b\u4ece\u5934\u90e8\u5f00\u59cb\uff0c\u6240\u4ee5\u8fd4\u56denull\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u6539\u4e00\u4e0b\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u4fdd\u8bc1\u6bcf\u6b21\u90fd\u80fd\u5934\u90e8\u5339\u914d\uff0cy\u4fee\u9970\u7b26\u5c31\u4f1a\u8fd4\u56de\u7ed3\u679c\u4e86\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const s = \'aaa_aa_a\'\nconst r = /a+_/y\n\nr.exec(s) // ["aaa_"]\nr.exec(s) // ["aa_"]\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u6bcf\u6b21\u5339\u914d\uff0c\u90fd\u662f\u4ece\u5269\u4f59\u5b57\u7b26\u4e32\u7684\u5934\u90e8\u5f00\u59cb\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528lastIndex\u5c5e\u6027\uff0c\u53ef\u4ee5\u66f4\u597d\u5730\u8bf4\u660ey\u4fee\u9970\u7b26\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const regexp = /a/g\n\n// \u6307\u5b9a\u4ece2\u53f7\u4f4d\u7f6e\uff08y\uff09\u5f00\u59cb\u5339\u914d\nregexp.lastIndex = 2\n\n// \u5339\u914d\u6210\u529f\nconst match = regexp.exec('xaya')\n\n// \u57283\u53f7\u4f4d\u7f6e\u5339\u914d\u6210\u529f\nconsole.log(match.index) // 3\n\n// \u4e0b\u4e00\u6b21\u5339\u914d\u4ece4\u53f7\u4f4d\u5f00\u59cb\nconsole.log(regexp.lastIndex) // 4\n\n// 4\u53f7\u4f4d\u5f00\u59cb\u5339\u914d\u5931\u8d25\nregexp.exec('xaxa') // null\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0clastIndex\u5c5e\u6027\u6307\u5b9a\u6bcf\u6b21\u641c\u7d22\u7684\u5f00\u59cb\u4f4d\u7f6e\uff0cg\u4fee\u9970\u7b26\u4ece\u8fd9\u4e2a\u4f4d\u7f6e\u5f00\u59cb\u5411\u540e\u641c\u7d22\uff0c\u76f4\u5230\u53d1\u73b0\u5339\u914d\u4e3a\u6b62\u3002"),(0,l.kt)("p",null,"y\u4fee\u9970\u7b26\u540c\u6837\u9075\u5b88lastIndex\u5c5e\u6027\uff0c\u4f46\u662f\u8981\u6c42\u5fc5\u987b\u5728lastIndex\u6307\u5b9a\u7684\u4f4d\u7f6e\u53d1\u73b0\u5339\u914d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const regexp = /a/y\n\n// \u6307\u5b9a\u4ece2\u53f7\u4f4d\u7f6e\u5f00\u59cb\u5339\u914d\nregexp.lastIndex = 2\n\n// \u4e0d\u662f\u7c98\u8fde\uff0c\u5339\u914d\u5931\u8d25\nregexp.exec('xaya') // null\n\n// \u6307\u5b9a\u4ece3\u53f7\u4f4d\u7f6e\u5f00\u59cb\u5339\u914d\nregexp.lastIndex = 3\n\n// 3\u53f7\u4f4d\u7f6e\u662f\u7c98\u8fde\uff0c\u5339\u914d\u6210\u529f\nconst match = regexp.exec('xaxa')\nconsole.log(match.index) // 3\nconsole.log(regexp.lastIndex) // 4\n")),(0,l.kt)("p",null,"\u8fdb\u4e00\u6b65\u8bf4\uff0cy\u4fee\u9970\u7b26\u53f7\u9690\u542b\u4e86\u5934\u90e8\u5339\u914d\u7684\u6807\u5fd7^\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const reg = /b/y\nreg.exec('aba')\n// null\nconsole.log(reg.lastIndex)\n")),(0,l.kt)("p",null,"TIP"),(0,l.kt)("p",null,"sticky \u6a21\u5f0f\u5728\u6b63\u5219\u5339\u914d\u8fc7\u7a0b\u4e2d\u53ea\u4f1a\u5f71\u54cd\u4e24\u4ef6\u4e8b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5339\u914d\u5fc5\u987b\u4ece re.lastIndex \u5f00\u59cb\uff08\u76f8\u5f53\u4e8e\u6b63\u5219\u8868\u8fbe\u4e2d\u7684 ^\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u5339\u914d\u5230\u4f1a\u4fee\u6539 re.lastIndex\uff08\u76f8\u5f53\u4e8e g \u6a21\u5f0f\uff09")),(0,l.kt)("h2",{id:"u\u4fee\u9970\u7b26"},"u\u4fee\u9970\u7b26"),(0,l.kt)("p",null,"ES6\u4e3a\u6b63\u5219\u8868\u8fbe\u5f0f\u6dfb\u52a0\u4e86u\u4fee\u9970\u7b26\uff0c\u542b\u4e49\u4e3a\u201cUnicode\u6a21\u5f0f\u201d\uff0c\u7528\u6765\u6b63\u786e\u5904\u7406\u5927\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"\\uFFFF")," \u7684Unicode\u5b57\u7b26\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u4f1a\u6b63\u786e\u5904\u7406\u56db\u4e2a\u5b57\u8282\u7684UTF-16\u7f16\u7801\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/^\\uD83D/u.test('\\uD83D\\uDC2A') // false\n\n/^\\uD83D/.test('\\uD83D\\uDC2A') // true\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"\\uD83D\\uDC2A"),' \u662f\u4e00\u4e2a\u56db\u4e2a\u5b57\u8282\u7684UTF-16\u7f16\u7801\uff0c\u4ee3\u8868\u4e00\u4e2a\u5b57\u7b26 "\ud83d\udc2a"\u3002\u4f46\u662f\uff0cES5\u4e0d\u652f\u6301\u56db\u4e2a\u5b57\u8282\u7684UTF-16\u7f16\u7801\uff0c\u4f1a\u5c06\u5176\u8bc6\u522b\u4e3a\u4e24\u4e2a\u5b57\u7b26\uff0c\u5bfc\u81f4\u7b2c\u4e8c\u884c\u4ee3\u7801\u7ed3\u679c\u4e3atrue\u3002\u52a0\u4e86u\u4fee\u9970\u7b26\u4ee5\u540e\uff0cES6\u5c31\u4f1a\u8bc6\u522b\u5176\u4e3a\u4e00\u4e2a\u5b57\u7b26\uff0c\u6240\u4ee5\u7b2c\u4e00\u884c\u4ee3\u7801\u7ed3\u679c\u4e3afalse\u3002'),(0,l.kt)("p",null,"\u4e00\u65e6\u52a0\u4e0au\u4fee\u9970\u7b26\u53f7\uff0c\u5c31\u4f1a\u4fee\u6539\u4e0b\u9762\u8fd9\u4e9b\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u884c\u4e3a\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"(1) \u70b9\u5b57\u7b26")),(0,l.kt)("p",null,"\u70b9\uff08.\uff09\u5b57\u7b26\u5728\u6b63\u5219\u8868\u8fbe\u5f0f\u4e2d\uff0c\u542b\u4e49\u662f\u9664\u4e86\u6362\u884c\u7b26\u4ee5\u5916\u7684\u4efb\u610f\u5355\u4e2a\u5b57\u7b26\u3002\u5bf9\u4e8e\u7801\u70b9\u5927\u4e8e 0xFFFF \u7684 Unicode \u5b57\u7b26\uff0c\u70b9\u5b57\u7b26\u4e0d\u80fd\u8bc6\u522b\uff0c\u5fc5\u987b\u52a0\u4e0au\u4fee\u9970\u7b26\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let s = '\ud842\udfb7'\n\n/^.$/.test(s) // false\n\n/^.$/u.test(s) // true\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u8868\u793a\uff0c\u5982\u679c\u4e0d\u6dfb\u52a0u\u4fee\u9970\u7b26\uff0c\u6b63\u5219\u8868\u8fbe\u5f0f\u5c31\u4f1a\u8ba4\u4e3a\u5b57\u7b26\u4e32\u4e3a\u4e24\u4e2a\u5b57\u7b26\uff0c\u4ece\u800c\u5339\u914d\u5931\u8d25\u3002"),(0,l.kt)("p",null,"TIP"),(0,l.kt)("p",null,"'\ud842\udfb7'\u8fd9\u4e2a\u5b57\u8bfb j\xed\uff0c\u662f'\u5409'\u5b57\u7684\u5f02\u5f62\u4f53\uff0cUnicode \u7801\u70b9 ",(0,l.kt)("a",{parentName:"p",href:"https://www.fileformat.info/info/unicode/char/20bb7/index.htm"},"U+20BB7")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"(2) Unicode\u5b57\u7b26\u8868\u793a\u6cd5")),(0,l.kt)("p",null,"ES6\u65b0\u589e\u4e86\u4f7f\u7528\u5927\u62ec\u53f7\u8868\u793aUnicode\u5b57\u7b26\uff0c\u8fd9\u79cd\u8868\u793a\u6cd5\u5728\u6b63\u5219\u8868\u8fbe\u5f0f\u4e2d\u5fc5\u987b\u52a0\u4e0au\u4fee\u9970\u7b26\uff0c\u624d\u80fd\u8bc6\u522b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/\\u{61}/.test('a') // false\n\n/\\u{61}/u.test('a') / / true\n\n/\\u{20BB7}/u.test('\ud842\udfb7') / / true\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u8868\u793a\uff0c\u5982\u679c\u4e0d\u52a0u\u4fee\u9970\u7b26\uff0c\u6b63\u5219\u8868\u8fbe\u5f0f\u65e0\u6cd5\u8bc6\u522b\\u{61}\u8fd9\u79cd\u8868\u793a\u6cd5\uff0c\u53ea\u4f1a\u8ba4\u4e3a\u8fd9\u5339\u914d61\u4e2a\u8fde\u7eed\u7684u\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"(3) \u91cf\u8bcd")),(0,l.kt)("p",null,"\u4f7f\u7528u\u4fee\u9970\u7b26\u540e\uff0c\u6240\u6709\u91cf\u8bcd\u90fd\u4f1a\u6b63\u786e\u8bc6\u522b\u7801\u70b9\u5927\u4e8e0xFFFF\u7684Unicode\u5b57\u7b26\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/a{2}/.test('aa') // true\n\n/a{2}/u.test('aa') // true\n\n/\ud842\udfb7{2}/.test('\ud842\udfb7\ud842\udfb7') // false\n\n/\ud842\udfb7{2}/u.test('\ud842\udfb7\ud842\udfb7') // true\n")),(0,l.kt)("p",null,"\u53e6\u5916\uff0c\u53ea\u6709\u5728\u4f7f\u7528u\u4fee\u9970\u7b26\u7684\u60c5\u51b5\u4e0b\uff0cUnicode\u8868\u8fbe\u5f0f\u5f53\u4e2d\u7684\u5927\u62ec\u53f7\u624d\u4f1a\u88ab\u6b63\u786e\u89e3\u8bfb\uff0c\u5426\u5219\u4f1a\u88ab\u89e3\u8bfb\u4e3a\u91cf\u8bcd\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/^\\u{3}$/.test('uuu') // true\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u7531\u4e8e\u6b63\u5219\u8868\u8fbe\u5f0f\u6ca1\u6709u\u4fee\u9970\u7b26\uff0c\u6240\u4ee5\u5927\u62ec\u53f7\u88ab\u89e3\u8bfb\u4e3a\u91cf\u8bcd\u3002\u52a0\u4e0au\u4fee\u9970\u7b26\uff0c\u5c31\u4f1a\u88ab\u89e3\u8bfb\u4e3aUnicode\u8868\u8fbe\u5f0f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/\\u{20BB7}{2}/u.test('\ud842\udfb7\ud842\udfb7') // true\n")),(0,l.kt)("p",null,"\u4f7f\u7528 u \u4fee\u9970\u7b26\u4e4b\u540e Unicode \u8868\u8fbe\u5f0f+\u91cf\u8bcd\u4e5f\u662f\u53ef\u4ee5\u7684\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"(4) \u9884\u5b9a\u4e49\u6a21\u5f0f")),(0,l.kt)("p",null,"u\u4fee\u9970\u7b26\u4e5f\u5f71\u54cd\u5230\u9884\u5b9a\u4e49\u6a21\u5f0f\uff0c\u80fd\u5426\u6b63\u786e\u8bc6\u522b\u7801\u70b9\u5927\u4e8e0xFFFF\u7684Unicode\u5b57\u7b26\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/^\\S$/.test('\ud842\udfb7') // false\n\n/^\\S$/u.test('\ud842\udfb7') // true\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u7684\\S\u662f\u9884\u5b9a\u4e49\u6a21\u5f0f\uff0c\u5339\u914d\u6240\u6709\u4e0d\u662f\u7a7a\u683c\u7684\u5b57\u7b26\u3002\u53ea\u6709\u52a0\u4e86u\u4fee\u9970\u7b26\uff0c\u5b83\u624d\u80fd\u6b63\u786e\u5339\u914d\u7801\u70b9\u5927\u4e8e0xFFFF\u7684Unicode\u5b57\u7b26\u3002"),(0,l.kt)("p",null,"\u5229\u7528\u8fd9\u4e00\u70b9\uff0c\u53ef\u4ee5\u5199\u51fa\u4e00\u4e2a\u6b63\u786e\u8fd4\u56de\u5b57\u7b26\u4e32\u957f\u5ea6\u7684\u51fd\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function codePointLength(text) {\n    const result = text.match(/[\\s\\S]/gu)\n    return result ? result.length : 0\n}\n\nconst s = '\ud842\udfb7\ud842\udfb7'\n\ns.length // 4\ncodePointLength(s) // 2\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"(5) i\u4fee\u9970\u7b26")),(0,l.kt)("p",null,"\u6709\u4e9bUnicode\u5b57\u7b26\u7684\u7f16\u7801\u4e0d\u540c\uff0c\u4f46\u662f\u5b57\u578b\u5f88\u76f8\u8fd1\uff0c\u6bd4\u5982\uff0c\\u004B\u4e0e\\u212A\u90fd\u662f\u5927\u5199\u7684K\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/[a-z]/i.test('\\u212A') // false\n\n/[a-z]/iu.test('\\u212A') // true\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u4e0d\u52a0u\u4fee\u9970\u7b26\uff0c\u5c31\u65e0\u6cd5\u8bc6\u522b\u975e\u89c4\u8303\u7684K\u5b57\u7b26\u3002"),(0,l.kt)("h3",{id:"\u63a8\u8350\u9605\u8bfb"},"\u63a8\u8350\u9605\u8bfb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.ruanyifeng.com/blog/2014/12/unicode.html"},"Unicode\u4e0eJavaScript\u8be6\u89e3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://2ality.com/2015/07/regexp-es6.html"},"New regular expression features in ECMAScript 6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky"},"sticky"))))}d.isMDXComponent=!0}}]);