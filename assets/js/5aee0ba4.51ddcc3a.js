"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[48586],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>d});var n=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},s=Object.keys(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var a=n.createContext({}),c=function(t){var e=n.useContext(a),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(a.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,s=t.originalType,a=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),f=c(r),d=i,g=f["".concat(a,".").concat(d)]||f[d]||p[d]||s;return r?n.createElement(g,l(l({ref:e},u),{},{components:r})):n.createElement(g,l({ref:e},u))}));function d(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var s=r.length,l=new Array(s);l[0]=f;var o={};for(var a in e)hasOwnProperty.call(e,a)&&(o[a]=e[a]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var c=2;c<s;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},15143:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const s={title:"strright",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-functions/string-functions/strright",id:"sql-manual/sql-functions/string-functions/strright",title:"strright",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/string-functions/strright.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/strright",permalink:"/docs/sql-manual/sql-functions/string-functions/strright",draft:!1,tags:[],version:"current",frontMatter:{title:"strright",language:"en"},sidebar:"docs",previous:{title:"strleft",permalink:"/docs/sql-manual/sql-functions/string-functions/strleft"},next:{title:"substring",permalink:"/docs/sql-manual/sql-functions/string-functions/substring"}},a={},c=[{value:"strright",id:"strright",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c};function p(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"strright"},"strright"),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR strright (VARCHAR str)")),(0,i.kt)("p",null,"It returns the right part of a string of specified length, length is char length not the byte size."),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select strright(\"Hello doris\",5);\n+-------------------------+\n| strright('Hello doris', 5) |\n+-------------------------+\n| doris                   |\n+-------------------------+\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("p",null,"STRRIGHT"))}p.isMDXComponent=!0}}]);