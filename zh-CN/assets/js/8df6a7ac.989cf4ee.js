"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[24911],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>O});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),O=a,m=d["".concat(c,".").concat(O)]||d[O]||u[O]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"SHOW ALTER",language:"zh-CN"},l=void 0,i={unversionedId:"sql-reference/sql-statements/Data-Manipulation/SHOW-ALTER",id:"version-1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-ALTER",title:"SHOW ALTER",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-ALTER.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/SHOW-ALTER",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-ALTER",draft:!1,tags:[],version:"1.0",frontMatter:{title:"SHOW ALTER",language:"zh-CN"},sidebar:"docs",previous:{title:"ROUTINE LOAD",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Data-Manipulation/ROUTINE-LOAD"},next:{title:"SHOW BACKUP",permalink:"/zh-CN/docs/1.0/sql-reference/sql-statements/Data-Manipulation/SHOW-BACKUP"}},c={},s=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"show-alter"},"SHOW ALTER"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u5f53\u524d\u6b63\u5728\u8fdb\u884c\u7684\u5404\u7c7b\u4fee\u6539\u4efb\u52a1\u7684\u6267\u884c\u60c5\u51b5\n\u8bed\u6cd5\uff1a\n    SHOW ALTER [CLUSTER | TABLE [COLUMN | ROLLUP] [FROM db_name]];\n    \n\u8bf4\u660e\uff1a\n    TABLE COLUMN\uff1a\u5c55\u793a\u4fee\u6539\u5217\u7684 ALTER \u4efb\u52a1\n                  \u652f\u6301\u8bed\u6cd5[WHERE TableName|CreateTime|FinishTime|State] [ORDER BY] [LIMIT]\n    TABLE ROLLUP\uff1a\u5c55\u793a\u521b\u5efa\u6216\u5220\u9664 ROLLUP index \u7684\u4efb\u52a1\n    \u5982\u679c\u4e0d\u6307\u5b9a db_name\uff0c\u4f7f\u7528\u5f53\u524d\u9ed8\u8ba4 db\n    CLUSTER: \u5c55\u793a\u96c6\u7fa4\u64cd\u4f5c\u76f8\u5173\u4efb\u52a1\u60c5\u51b5\uff08\u4ec5\u7ba1\u7406\u5458\u4f7f\u7528\uff01\u5f85\u5b9e\u73b0...\uff09\n    \n")),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'1. \u5c55\u793a\u9ed8\u8ba4 db \u7684\u6240\u6709\u4fee\u6539\u5217\u7684\u4efb\u52a1\u6267\u884c\u60c5\u51b5\n    SHOW ALTER TABLE COLUMN;\n\n2. \u5c55\u793a\u67d0\u4e2a\u8868\u6700\u8fd1\u4e00\u6b21\u4fee\u6539\u5217\u7684\u4efb\u52a1\u6267\u884c\u60c5\u51b5\n    SHOW ALTER TABLE COLUMN WHERE TableName = "table1" ORDER BY CreateTime DESC LIMIT 1;\n\n3. \u5c55\u793a\u6307\u5b9a db \u7684\u521b\u5efa\u6216\u5220\u9664 ROLLUP index \u7684\u4efb\u52a1\u6267\u884c\u60c5\u51b5\n    SHOW ALTER TABLE ROLLUP FROM example_db;\n    \n4. \u5c55\u793a\u96c6\u7fa4\u64cd\u4f5c\u76f8\u5173\u4efb\u52a1\uff08\u4ec5\u7ba1\u7406\u5458\u4f7f\u7528\uff01\u5f85\u5b9e\u73b0...\uff09\n    SHOW ALTER CLUSTER;\n    \n')),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW,ALTER\n")))}u.isMDXComponent=!0}}]);