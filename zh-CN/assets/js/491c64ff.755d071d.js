"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[97367],{3905:(t,n,e)=>{e.d(n,{Zo:()=>l,kt:()=>u});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var m=a.createContext({}),s=function(t){var n=a.useContext(m),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},l=function(t){var n=s(t.components);return a.createElement(m.Provider,{value:n},t.children)},c={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,i=t.originalType,m=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),b=s(e),u=r,_=b["".concat(m,".").concat(u)]||b[u]||c[u]||i;return e?a.createElement(_,o(o({ref:n},l),{},{components:e})):a.createElement(_,o({ref:n},l))}));function u(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var i=e.length,o=new Array(i);o[0]=b;var p={};for(var m in n)hasOwnProperty.call(n,m)&&(p[m]=n[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var s=2;s<i;s++)o[s]=e[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,e)}b.displayName="MDXCreateElement"},29658:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=e(87462),r=(e(67294),e(3905));const i={title:"bitmap_and",language:"zh-CN"},o=void 0,p={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_and",id:"sql-manual/sql-functions/bitmap-functions/bitmap_and",title:"bitmap_and",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/bitmap-functions/bitmap_and.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_and",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap_and",draft:!1,tags:[],version:"current",frontMatter:{title:"bitmap_and",language:"zh-CN"},sidebar:"docs",previous:{title:"VARIANCE,VAR_POP,VARIANCE_POP",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/variance"},next:{title:"bitmap_contains",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap_contains"}},m={},s=[{value:"bitmap_and",id:"bitmap_and",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],l={toc:s};function c(t){let{components:n,...e}=t;return(0,r.kt)("wrapper",(0,a.Z)({},l,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"bitmap_and"},"bitmap_and"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BITMAP BITMAP_AND(BITMAP lhs, BITMAP rhs)")),(0,r.kt)("p",null,"\u8ba1\u7b97\u4e24\u4e2a\u53ca\u4ee5\u4e0a\u8f93\u5165bitmap\u7684\u4ea4\u96c6\uff0c\u8fd4\u56de\u65b0\u7684bitmap."),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> select bitmap_count(bitmap_and(to_bitmap(1), to_bitmap(2))) cnt;\n+------+\n| cnt  |\n+------+\n|    0 |\n+------+\n\nmysql> select bitmap_count(bitmap_and(to_bitmap(1), to_bitmap(1))) cnt;\n+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n\nMySQL> select bitmap_to_string(bitmap_and(to_bitmap(1), to_bitmap(1)));\n+----------------------------------------------------------+\n| bitmap_to_string(bitmap_and(to_bitmap(1), to_bitmap(1))) |\n+----------------------------------------------------------+\n| 1                                                        |\n+----------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5')));\n+-----------------------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'))) |\n+-----------------------------------------------------------------------------------------------------------------------+\n| 1,2                                                                                                                   |\n+-----------------------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'),bitmap_empty()));\n+---------------------------------------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'), bitmap_empty())) |\n+---------------------------------------------------------------------------------------------------------------------------------------+\n|                                                                                                                                       |\n+---------------------------------------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'),NULL));\n+-----------------------------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'), NULL)) |\n+-----------------------------------------------------------------------------------------------------------------------------+\n| NULL                                                                                                                        |\n+-----------------------------------------------------------------------------------------------------------------------------+\n")),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"BITMAP_AND,BITMAP\n")))}c.isMDXComponent=!0}}]);