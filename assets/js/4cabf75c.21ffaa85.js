"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[13711],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,E=m["".concat(s,".").concat(f)]||m[f]||d[f]||i;return r?n.createElement(E,o(o({ref:t},c),{},{components:r})):n.createElement(E,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54780:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"CREATE DATABASE",language:"en"},o=void 0,l={unversionedId:"sql-reference/sql-statements/Data-Definition/CREATE-DATABASE",id:"version-1.0/sql-reference/sql-statements/Data-Definition/CREATE-DATABASE",title:"CREATE DATABASE",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-statements/Data-Definition/CREATE-DATABASE.md",sourceDirName:"sql-reference/sql-statements/Data-Definition",slug:"/sql-reference/sql-statements/Data-Definition/CREATE-DATABASE",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Definition/CREATE-DATABASE",draft:!1,tags:[],version:"1.0",frontMatter:{title:"CREATE DATABASE",language:"en"},sidebar:"docs",previous:{title:"CANCEL RESTORE",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Definition/CANCEL-RESTORE"},next:{title:"CREATE INDEX",permalink:"/docs/1.0/sql-reference/sql-statements/Data-Definition/CREATE-INDEX"}},s={},p=[{value:"Description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-database"},"CREATE DATABASE"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'This statement is used to create a new database  \nSyntax:  \n    CREATE DATABASE [IF NOT EXISTS] db_name  \n    [PROPERTIES ("key"="value", ...)] ;\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"PROPERTIES\nAdditional information of a database, can be defaulted.\n1) In case of iceberg, the following information needs to be provided in the properties."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'    PROPERTIES (\n        "iceberg.database" = "iceberg_db_name",\n        "iceberg.hive.metastore.uris" = "thrift://127.0.0.1:9083",\n        "iceberg.catalog.type" = "HIVE_CATALOG"\n        )\n\n')),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"iceberg.database")," is the name of the database corresponding to Iceberg.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"iceberg.hive.metastore.uris")," is the address of the hive metastore service.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"iceberg.catalog.type")," defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"HIVE_CATALOG"),". Currently, only ",(0,a.kt)("inlineCode",{parentName:"p"},"HIVE_CATALOG")," is supported, more Iceberg catalog types will be supported later."))),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a new database db_test"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"CREATE DATABASE db_test;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a new Iceberg database iceberg_test"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'CREATE DATABASE `iceberg_test`\nPROPERTIES (\n"iceberg.database" = "doris",\n"iceberg.hive.metastore.uris" = "thrift://127.0.0.1:9083",\n"iceberg.catalog.type" = "HIVE_CATALOG"\n);\n')))),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("p",null,"CREATE,DATABASE"))}d.isMDXComponent=!0}}]);