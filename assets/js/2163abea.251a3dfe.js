"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[27529],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),c=n,b=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return r?a.createElement(b,l(l({ref:t},u),{},{components:r})):a.createElement(b,l({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},65415:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"Use mysqldump data to export table structure or data",language:"en"},l=void 0,i={unversionedId:"administrator-guide/export_with_mysql_dump",id:"version-1.0/administrator-guide/export_with_mysql_dump",title:"Use mysqldump data to export table structure or data",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/administrator-guide/export_with_mysql_dump.md",sourceDirName:"administrator-guide",slug:"/administrator-guide/export_with_mysql_dump",permalink:"/docs/1.0/administrator-guide/export_with_mysql_dump",draft:!1,tags:[],version:"1.0",frontMatter:{title:"Use mysqldump data to export table structure or data",language:"en"},sidebar:"docs",previous:{title:"Data export",permalink:"/docs/1.0/administrator-guide/export-manual"},next:{title:"Export Query Result",permalink:"/docs/1.0/administrator-guide/outfile"}},s={},p=[{value:"Example",id:"example",level:2},{value:"Export",id:"export",level:3},{value:"Import",id:"import",level:3},{value:"Notice",id:"notice",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-mysqldump-data-to-export-table-structure-or-data"},"Use mysqldump data to export table structure or data"),(0,n.kt)("p",null,"Doris has supported exporting data or table structures through the ",(0,n.kt)("inlineCode",{parentName:"p"},"mysqldump")," tool after version 0.15"),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("h3",{id:"export"},"Export"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Export the table1 table in the test database: ",(0,n.kt)("inlineCode",{parentName:"li"},"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test --tables table1")),(0,n.kt)("li",{parentName:"ol"},"Export the table1 table structure in the test database: ",(0,n.kt)("inlineCode",{parentName:"li"},"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test --tables table1 --no-data")),(0,n.kt)("li",{parentName:"ol"},"Export all tables in the test1, test2 database: ",(0,n.kt)("inlineCode",{parentName:"li"},"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test1 test2")),(0,n.kt)("li",{parentName:"ol"},"Export all databases and tables ",(0,n.kt)("inlineCode",{parentName:"li"},"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --all-databases"),"\nFor more usage parameters, please refer to the manual of ",(0,n.kt)("inlineCode",{parentName:"li"},"mysqldump"))),(0,n.kt)("h3",{id:"import"},"Import"),(0,n.kt)("p",null,"The results exported by ",(0,n.kt)("inlineCode",{parentName:"p"},"mysqldump")," can be redirected to a file, which can then be imported into Doris through the source command ",(0,n.kt)("inlineCode",{parentName:"p"},"source filename.sql")),(0,n.kt)("h2",{id:"notice"},"Notice"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Since there is no concept of tablespace in mysql in Doris, add the ",(0,n.kt)("inlineCode",{parentName:"li"},"--no-tablespaces")," parameter when using ",(0,n.kt)("inlineCode",{parentName:"li"},"mysqldump")),(0,n.kt)("li",{parentName:"ol"},"Using mysqldump to export data and table structure is only used for development and testing or when the amount of data is small. Do not use it in a production environment with a large amount of data.")))}d.isMDXComponent=!0}}]);