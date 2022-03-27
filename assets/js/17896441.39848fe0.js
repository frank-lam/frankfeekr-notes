"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7918],{4067:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),l=a(7556),r={breadcrumbsContainer:"breadcrumbsContainer_Xlws"},i=a(6010),s=a(9960),c=a(4996);function o(e){var t=e.children,a=e.href,l="breadcrumbs__link";return a?n.createElement(s.Z,{className:l,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:l,itemProp:"item name"},t)}function d(e){var t=e.children,a=e.active,l=e.index;return n.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,i.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function m(){var e=(0,c.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(s.Z,{className:(0,i.Z)("breadcrumbs__link",r.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function u(){var e=(0,l.s1)(),t=(0,l.Ns)();return e?n.createElement("nav",{className:(0,i.Z)(l.kM.docs.docBreadcrumbs,r.breadcrumbsContainer),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(m,null),e.map((function(t,a){return n.createElement(d,{key:a,active:a===e.length-1,index:a},n.createElement(o,{href:a<e.length-1?t.href:void 0},t.label))})))):null}},9153:function(e,t,a){a.r(t),a.d(t,{default:function(){return B}});var n=a(7294),l=a(6010),r=a(1101),i=a(4474),s=a(7597),c=a(5999),o=a(7556);function d(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(c.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function m(e){var t=e.lastUpdatedBy;return n.createElement(c.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function u(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:o.kM.common.lastUpdated},n.createElement(c.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(d,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(m,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var v=a(6753),b=a(62),p="lastUpdated_foO9";function E(e){return n.createElement("div",{className:(0,l.Z)(o.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(b.Z,e)))}function g(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(o.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(v.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",p)},(a||r)&&n.createElement(u,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:r})))}function h(e){var t=e.content.metadata,a=t.editUrl,r=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,s=t.lastUpdatedBy,c=t.tags,d=c.length>0,m=!!(a||r||s);return d||m?n.createElement("footer",{className:(0,l.Z)(o.kM.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(E,{tags:c}),m&&n.createElement(g,{editUrl:a,lastUpdatedAt:r,lastUpdatedBy:s,formattedLastUpdatedAt:i})):null}var f=a(1575),N="tocCollapsible_jdIR",Z="tocCollapsibleButton_Fzxq",_="tocCollapsibleContent_MpvI",k="tocCollapsibleExpanded_laf4",L=a(5002);function C(e){var t=e.toc,a=e.className,r=e.minHeadingLevel,i=e.maxHeadingLevel,s=(0,o.uR)({initialState:!0}),d=s.collapsed,m=s.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(N,!d&&k,a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",Z),onClick:m},n.createElement(c.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(o.zF,{lazy:!0,className:_,collapsed:d},n.createElement(L.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:i})))}var U=a(9649),T="docItemContainer_vinB",y="docItemCol_DM6M",M="tocMobile_TmEX",w=a(4067),A=a(7459);function x(e){var t,a=e.content,l=a.metadata,r=a.frontMatter,i=a.assets,s=r.keywords,c=l.description,d=l.title,m=null!=(t=i.image)?t:r.image;return n.createElement(o.d,{title:d,description:c,keywords:s,image:m})}function H(e){var t=e.content,a=t.metadata,c=t.frontMatter,d=c.hide_title,m=c.hide_table_of_contents,u=c.toc_min_heading_level,v=c.toc_max_heading_level,b=a.title,p=!d&&void 0===t.contentTitle,E=(0,o.iP)(),g=!m&&t.toc&&t.toc.length>0,N=g&&("desktop"===E||"ssr"===E);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!m&&y)},n.createElement(i.Z,null),n.createElement("div",{className:T},n.createElement("article",null,n.createElement(w.Z,null),n.createElement(s.Z,null),g&&n.createElement(C,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:v,className:(0,l.Z)(o.kM.docs.docTocMobile,M)}),n.createElement("div",{className:(0,l.Z)(o.kM.docs.docMarkdown,"markdown")},p&&n.createElement("header",null,n.createElement(U.Z,{as:"h1"},b)),n.createElement(A.Z,null,n.createElement(t,null))),n.createElement(h,e)),n.createElement(r.Z,{previous:a.previous,next:a.next}))),N&&n.createElement("div",{className:"col col--3"},n.createElement(f.Z,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:v,className:o.kM.docs.docTocDesktop})))}function B(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(o.FG,{className:t},n.createElement(x,e),n.createElement(H,e))}},1101:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7462),l=a(7294),r=a(5999),i=a(1750);function s(e){var t=e.previous,a=e.next;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},l.createElement("div",{className:"pagination-nav__item"},t&&l.createElement(i.Z,(0,n.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&l.createElement(i.Z,(0,n.Z)({},a,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}},7597:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),l=a(5999),r=a(7556),i=a(6010);function s(e){var t=e.className,a=(0,r.E6)();return a.badge?n.createElement("span",{className:(0,i.Z)(t,r.kM.docs.docVersionBadge,"badge badge--secondary")},n.createElement(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},4474:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(7294),l=a(2263),r=a(9960),i=a(5999),s=a(5551),c=a(7556),o=a(6010);var d={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function m(e){var t=d[e.versionMetadata.banner];return n.createElement(t,e)}function u(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.Z,{to:a,onClick:l},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){var t,a=e.className,r=e.versionMetadata,i=(0,l.Z)().siteConfig.title,d=(0,s.gA)({failfast:!0}).pluginId,v=(0,c.J)(d).savePreferredVersionName,b=(0,s.Jo)(d),p=b.latestDocSuggestion,E=b.latestVersionSuggestion,g=null!=p?p:(t=E).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,o.Z)(a,c.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(m,{siteTitle:i,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(u,{versionLabel:E.label,to:g.path,onClick:function(){return v(E.name)}})))}function b(e){var t=e.className,a=(0,c.E6)();return a.banner?n.createElement(v,{className:t,versionMetadata:a}):null}},6753:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),l=a(5999),r=a(7462),i=a(3366),s=a(6010),c="iconEdit_dcUD",o=["className"];function d(e){var t=e.className,a=(0,i.Z)(e,o);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var m=a(7556);function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(d,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1750:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),l=a(9960);function r(e){var t=e.permalink,a=e.title,r=e.subLabel;return n.createElement(l.Z,{className:"pagination-nav__link",to:t},r&&n.createElement("div",{className:"pagination-nav__sublabel"},r),n.createElement("div",{className:"pagination-nav__label"},a))}},1575:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7462),l=a(3366),r=a(7294),i=a(6010),s=a(5002),c="tableOfContents_cNA8",o=["className"];function d(e){var t=e.className,a=(0,l.Z)(e,o);return r.createElement("div",{className:(0,i.Z)(c,"thin-scrollbar",t)},r.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7462),l=a(3366),r=a(7294),i=a(7556),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function c(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(c,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function o(e){var t=e.toc,a=e.className,o=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,v=void 0===u?void 0:u,b=e.minHeadingLevel,p=e.maxHeadingLevel,E=(0,l.Z)(e,s),g=(0,i.LU)(),h=null!=b?b:g.tableOfContents.minHeadingLevel,f=null!=p?p:g.tableOfContents.maxHeadingLevel,N=(0,i.b9)({toc:t,minHeadingLevel:h,maxHeadingLevel:f}),Z=(0,r.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:h,maxHeadingLevel:f}}),[m,v,h,f]);return(0,i.Si)(Z),r.createElement(c,(0,n.Z)({toc:N,className:o,linkClassName:m},E))}},7774:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(6010),r=a(9960),i="tag_hD8n",s="tagRegular_D6E_",c="tagWithCount_i0QQ";function o(e){var t=e.permalink,a=e.name,o=e.count;return n.createElement(r.Z,{href:t,className:(0,l.Z)(i,o?c:s)},a,o&&n.createElement("span",null,o))}},62:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(6010),r=a(5999),i=a(7774),s="tags_XVD_",c="tag_JSN8";function o(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(s,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:c},n.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);