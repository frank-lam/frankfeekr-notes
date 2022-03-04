"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7918],{4067:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(7294),l=a(9366),r="breadcrumbsContainer_Xlws",i="breadcrumbsItemLink_e5ie",s=a(6010),c=a(9960),o=a(4996);function d(e){var t=e.children,a=e.href,l=(0,s.Z)("breadcrumbs__link",i);return a?n.createElement(c.Z,{className:l,href:a},t):n.createElement("span",{className:l},t)}function m(e){var t=e.children,a=e.active;return n.createElement("li",{className:(0,s.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t)}function u(){var e=(0,o.Z)("/");return n.createElement(m,null,n.createElement(d,{href:e},"\ud83c\udfe0"))}function v(){var e=(0,l.s1)(),t=(0,l.Ns)();return e?n.createElement("nav",{className:(0,s.Z)(l.kM.docs.docBreadcrumbs,r),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs"},t&&n.createElement(u,null),e.map((function(t,a){return n.createElement(m,{key:a,active:a===e.length-1},n.createElement(d,{href:t.href},t.label))})))):null}},9153:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var n=a(7294),l=a(6010),r=a(1101),i=a(4474),s=a(7597),c=a(1217),o=a(5999),d=a(9366);function m(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function u(e){var t=e.lastUpdatedBy;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function v(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:d.kM.common.lastUpdated},n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(m,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(u,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var b=a(6753),h=a(62),E="lastUpdated_foO9";function g(e){return n.createElement("div",{className:(0,l.Z)(d.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(h.Z,e)))}function f(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(d.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(b.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",E)},(a||r)&&n.createElement(v,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:r})))}function p(e){var t=e.content.metadata,a=t.editUrl,r=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,s=t.lastUpdatedBy,c=t.tags,o=c.length>0,m=!!(a||r||s);return o||m?n.createElement("footer",{className:(0,l.Z)(d.kM.docs.docFooter,"docusaurus-mt-lg")},o&&n.createElement(g,{tags:c}),m&&n.createElement(f,{editUrl:a,lastUpdatedAt:r,lastUpdatedBy:s,formattedLastUpdatedAt:i})):null}var Z=a(1575),N="tocCollapsible_jdIR",k="tocCollapsibleButton_Fzxq",_="tocCollapsibleContent_MpvI",L="tocCollapsibleExpanded_laf4",U=a(5002);function C(e){var t,a=e.toc,r=e.className,i=e.minHeadingLevel,s=e.maxHeadingLevel,c=(0,d.uR)({initialState:!0}),m=c.collapsed,u=c.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(N,(t={},t[L]=!m,t),r)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",k),onClick:u},n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(d.zF,{lazy:!0,className:_,collapsed:m},n.createElement(U.Z,{toc:a,minHeadingLevel:i,maxHeadingLevel:s})))}var T=a(9649),w="docItemContainer_vinB",y="docItemCol_DM6M",M="tocMobile_TmEX",A=a(4067);function x(e){var t,a,o=e.content,m=o.metadata,u=o.frontMatter,v=o.assets,b=u.keywords,h=u.hide_title,E=u.hide_table_of_contents,g=u.toc_min_heading_level,f=u.toc_max_heading_level,N=m.description,k=m.title,_=null!=(t=v.image)?t:u.image,L=!h&&void 0===o.contentTitle,U=(0,d.iP)(),x=!E&&o.toc&&o.toc.length>0,H=x&&("desktop"===U||"ssr"===U);return n.createElement(n.Fragment,null,n.createElement(c.Z,{title:k,description:N,keywords:b,image:_}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(a={},a[y]=!E,a))},n.createElement(i.Z,null),n.createElement("div",{className:w},n.createElement("article",null,n.createElement(A.Z,null),n.createElement(s.Z,null),x&&n.createElement(C,{toc:o.toc,minHeadingLevel:g,maxHeadingLevel:f,className:(0,l.Z)(d.kM.docs.docTocMobile,M)}),n.createElement("div",{className:(0,l.Z)(d.kM.docs.docMarkdown,"markdown")},L&&n.createElement("header",null,n.createElement(T.Z,{as:"h1"},k)),n.createElement(o,null)),n.createElement(p,e)),n.createElement(r.Z,{previous:m.previous,next:m.next}))),H&&n.createElement("div",{className:"col col--3"},n.createElement(Z.Z,{toc:o.toc,minHeadingLevel:g,maxHeadingLevel:f,className:d.kM.docs.docTocDesktop}))))}},1101:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7462),l=a(7294),r=a(5999),i=a(1750);function s(e){var t=e.previous,a=e.next;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},l.createElement("div",{className:"pagination-nav__item"},t&&l.createElement(i.Z,(0,n.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&l.createElement(i.Z,(0,n.Z)({},a,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}},7597:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),l=a(5999),r=a(9366),i=a(6010);function s(e){var t=e.className,a=(0,r.E6)();return a.badge?n.createElement("span",{className:(0,i.Z)(t,r.kM.docs.docVersionBadge,"badge badge--secondary")},n.createElement(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},4474:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(7294),l=a(2263),r=a(9960),i=a(5999),s=a(5551),c=a(9366),o=a(6010);var d={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function m(e){var t=d[e.versionMetadata.banner];return n.createElement(t,e)}function u(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.Z,{to:a,onClick:l},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){var t,a=e.className,r=e.versionMetadata,i=(0,l.Z)().siteConfig.title,d=(0,s.gA)({failfast:!0}).pluginId,v=(0,c.J)(d).savePreferredVersionName,b=(0,s.Jo)(d),h=b.latestDocSuggestion,E=b.latestVersionSuggestion,g=null!=h?h:(t=E).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,o.Z)(a,c.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(m,{siteTitle:i,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(u,{versionLabel:E.label,to:g.path,onClick:function(){return v(E.name)}})))}function b(e){var t=e.className,a=(0,c.E6)();return a.banner?n.createElement(v,{className:t,versionMetadata:a}):null}},6753:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),l=a(5999),r=a(7462),i=a(3366),s=a(6010),c="iconEdit_dcUD",o=["className"];function d(e){var t=e.className,a=(0,i.Z)(e,o);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var m=a(9366);function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(d,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},9649:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(7462),l=a(3366),r=a(7294),i=a(6010),s=a(5999),c=a(9366),o="anchorWithStickyNavbar_mojV",d="anchorWithHideOnScrollNavbar_R0VQ",m=["as","id"],u=["as"];function v(e){var t,a=e.as,u=e.id,v=(0,l.Z)(e,m),b=(0,c.LU)().navbar.hideOnScroll;return u?r.createElement(a,(0,n.Z)({},v,{className:(0,i.Z)("anchor",(t={},t[d]=b,t[o]=!b,t)),id:u}),v.children,r.createElement("a",{className:"hash-link",href:"#"+u,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(a,v)}function b(e){var t=e.as,a=(0,l.Z)(e,u);return"h1"===t?r.createElement("h1",(0,n.Z)({},a,{id:void 0}),a.children):r.createElement(v,(0,n.Z)({as:t},a))}},1750:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),l=a(9960);function r(e){var t=e.permalink,a=e.title,r=e.subLabel;return n.createElement(l.Z,{className:"pagination-nav__link",to:t},r&&n.createElement("div",{className:"pagination-nav__sublabel"},r),n.createElement("div",{className:"pagination-nav__label"},a))}},1575:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7462),l=a(3366),r=a(7294),i=a(6010),s=a(5002),c="tableOfContents_cNA8",o=["className"];function d(e){var t=e.className,a=(0,l.Z)(e,o);return r.createElement("div",{className:(0,i.Z)(c,"thin-scrollbar",t)},r.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7462),l=a(3366),r=a(7294),i=a(9366),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function c(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(c,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function o(e){var t=e.toc,a=e.className,o=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,v=void 0===u?void 0:u,b=e.minHeadingLevel,h=e.maxHeadingLevel,E=(0,l.Z)(e,s),g=(0,i.LU)(),f=null!=b?b:g.tableOfContents.minHeadingLevel,p=null!=h?h:g.tableOfContents.maxHeadingLevel,Z=(0,i.b9)({toc:t,minHeadingLevel:f,maxHeadingLevel:p}),N=(0,r.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:f,maxHeadingLevel:p}}),[m,v,f,p]);return(0,i.Si)(N),r.createElement(c,(0,n.Z)({toc:Z,className:o,linkClassName:m},E))}},7774:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(6010),r=a(9960),i="tag_hD8n",s="tagRegular_D6E_",c="tagWithCount_i0QQ";function o(e){var t,a=e.permalink,o=e.name,d=e.count;return n.createElement(r.Z,{href:a,className:(0,l.Z)(i,(t={},t[s]=!d,t[c]=d,t))},o,d&&n.createElement("span",null,d))}},62:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(6010),r=a(5999),i=a(7774),s="tags_XVD_",c="tag_JSN8";function o(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(s,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:c},n.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);