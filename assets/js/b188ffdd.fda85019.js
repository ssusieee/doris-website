"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[31846],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"SHOW BACKUP",language:"en"},i=void 0,l={unversionedId:"sql-reference/sql-statements/Data-Manipulation/SHOW-BACKUP",id:"version-1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-BACKUP",title:"SHOW BACKUP",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-BACKUP.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/SHOW-BACKUP",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-BACKUP",draft:!1,tags:[],version:"1.0",frontMatter:{title:"SHOW BACKUP",language:"en"},sidebar:"docs",previous:{title:"SHOW ALTER",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-ALTER"},next:{title:"SHOW CREATE FUNCTION",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-CREATE-FUNCTION"}},s={},p=[{value:"Description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"show-backup"},"SHOW BACKUP"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"This statement is used to view BACKUP tasks\nGrammar:\nSHOW BACKUP ","[FROM db_name]"),(0,r.kt)("p",null,"Explain:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Only the last BACKUP task is saved in Palo."),(0,r.kt)("li",{parentName:"ol"},"Each column has the following meanings:\nJobId: Unique job ID\nSnapshotName: The name of the backup\nDbName: Subordinate database\nState: Current phase\nPENDING: The initial state after submitting a job\nSNAPSHOTTING: In the execution snapshot\nUPLOAD_SNAPSHOT: Snapshot completed, ready for upload\nUPLOADING: Snapshot uploading\nSAVE_META: Save job meta-information as a local file\nUPLOAD_INFO: Upload job meta-information\nFINISHED: Operation Successful\nCANCELLED: Job Failure\nBackup Objs: Backup tables and partitions\nCreateTime: Task submission time\nSnapshot Finished Time: Snapshot completion time\nUpload Finished Time: Snapshot Upload Completion Time\nFinishedTime: Job End Time\nUnfinished Tasks: The unfinished sub-task ID is displayed in the SNAPSHOTTING and UPLOADING phases\nStatus: Display failure information if the job fails\nTimeout: Job timeout, per second")),(0,r.kt)("h2",{id:"example"},"example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"See the last BACKUP task under example_db.\nSHOW BACKUP FROM example_db;")),(0,r.kt)("h2",{id:"keyword"},"keyword"),(0,r.kt)("p",null,"SHOW, BACKUP"))}u.isMDXComponent=!0}}]);