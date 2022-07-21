"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[89360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>A});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),A=a,d=m["".concat(s,".").concat(A)]||m[A]||u[A]||l;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function A(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"ADMIN SHOW REPLICA STATUS",language:"en"},i=void 0,o={unversionedId:"sql-reference/sql-statements/Administration/ADMIN-SHOW-REPLICA-STATUS",id:"version-0.15/sql-reference/sql-statements/Administration/ADMIN-SHOW-REPLICA-STATUS",title:"ADMIN SHOW REPLICA STATUS",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Administration/ADMIN-SHOW-REPLICA-STATUS.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADMIN-SHOW-REPLICA-STATUS",permalink:"/docs/0.15/sql-reference/sql-statements/Administration/ADMIN-SHOW-REPLICA-STATUS",draft:!1,tags:[],version:"0.15",frontMatter:{title:"ADMIN SHOW REPLICA STATUS",language:"en"},sidebar:"docs",previous:{title:"ADMIN SHOW REPLICA DISTRIBUTION",permalink:"/docs/0.15/sql-reference/sql-statements/Administration/ADMIN-SHOW-REPLICA-DISTRIBUTION"},next:{title:"ADMIN SHOW DATA SKEW",permalink:"/docs/0.15/sql-reference/sql-statements/Administration/ADMIN-SHOW-DATA-SKEW"}},s={},c=[{value:"Description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"admin-show-replica-status"},"ADMIN SHOW REPLICA STATUS"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This statement is used to display copy status information for a table or partition"),(0,a.kt)("p",null,"Grammar:"),(0,a.kt)("p",null,"ADMIN SHOW REPLICA STATUS FROM ","[dbu name.]","tbl name ","[PARTITION (p1,...)][where_clause]",";"),(0,a.kt)("p",null,"where_clause:\nWHERE STATUS ","[!]",'= "replica_status"'),(0,a.kt)("p",null,"Reply status:\nOK: Replica 22788;'20581;' 29366;'24577;\nDEAD: The Backend of replica is not available\nVERSION_ERROR: The replica data version is missing\nSCHEMA ERROR: replica schema hash\nMISSING: replica does not exist"),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"View the status of all copies of the table")),(0,a.kt)("p",null,"ADMIN SHOW REPLICA STATUS FROM db1.tbl1;"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"View a copy of a partition state of the table as VERSION_ERROR")),(0,a.kt)("p",null,"ADMIN SHOW REPLICA STATUS FROM tbl1 PARTITION (p1, p2)"),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Check all unhealthy copies of the table")),(0,a.kt)("p",null,'ADMIN SHOW REPLICA STATUS FROM tbl1\nWHERE STATUS != "OK";'),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("p",null,"ADMIN,SHOW,REPLICA,STATUS"))}u.isMDXComponent=!0}}]);