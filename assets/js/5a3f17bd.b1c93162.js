"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[7859],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),u=a,m=f["".concat(s,".").concat(u)]||f[u]||d[u]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},15398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"DROP DATABASE",language:"en"},i=void 0,l={unversionedId:"sql-reference/sql-statements/Data-Definition/DROP-DATABASE",id:"version-1.0/sql-reference/sql-statements/Data-Definition/DROP-DATABASE",title:"DROP DATABASE",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-statements/Data-Definition/DROP-DATABASE.md",sourceDirName:"sql-reference/sql-statements/Data-Definition",slug:"/sql-reference/sql-statements/Data-Definition/DROP-DATABASE",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Definition/DROP-DATABASE",draft:!1,tags:[],version:"1.0",frontMatter:{title:"DROP DATABASE",language:"en"},sidebar:"docs",previous:{title:"Colocate Join",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Definition/Colocate-Join"},next:{title:"DROP ENCRYPTKEY",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Definition/DROP-ENCRYPTKEY"}},s={},c=[{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"drop-database"},"DROP DATABASE"),(0,a.kt)("p",null,"##Description\nThis statement is used to delete the database\nGrammar:\nDROP DATABASE ","[IF EXISTS]"," db_name;"),(0,a.kt)("p",null,"Explain:\n1) After executing DROP DATABASE for a period of time, the deleted database can be restored through the RECOVER statement. See RECOVER statement for details\n2) If DROP DATABASE FORCE is executed, the system will not check whether the database has unfinished transactions, the database will be deleted directly and cannot be recovered, generally this operation is not recommended"),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Delete database db_test\nDROP DATABASE db_test;")),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("p",null,"DROP,DATABASE"))}d.isMDXComponent=!0}}]);