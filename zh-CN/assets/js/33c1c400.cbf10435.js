"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[20889],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,u=c["".concat(p,".").concat(d)]||c[d]||k[d]||i;return n?a.createElement(u,l(l({ref:t},s),{},{components:n})):a.createElement(u,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},55881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const i={title:"ALTER ROUTINE LOAD",language:"zh-CN"},l=void 0,o={unversionedId:"sql-reference/sql-statements/Data-Manipulation/alter-routine-load",id:"version-0.15/sql-reference/sql-statements/Data-Manipulation/alter-routine-load",title:"ALTER ROUTINE LOAD",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-statements/Data-Manipulation/alter-routine-load.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/alter-routine-load",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/alter-routine-load",draft:!1,tags:[],version:"0.15",frontMatter:{title:"ALTER ROUTINE LOAD",language:"zh-CN"},sidebar:"docs",previous:{title:"STREAM LOAD",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/STREAM-LOAD"},next:{title:"INSERT",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/insert"}},p={},m=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],s={toc:m};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"alter-routine-load"},"ALTER ROUTINE LOAD"),(0,r.kt)("h2",{id:"description"},"description"),(0,r.kt)("p",null,"\u8be5\u8bed\u6cd5\u7528\u4e8e\u4fee\u6539\u5df2\u7ecf\u521b\u5efa\u7684\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\u3002"),(0,r.kt)("p",null,"\u53ea\u80fd\u4fee\u6539\u5904\u4e8e PAUSED \u72b6\u6001\u7684\u4f5c\u4e1a\u3002"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ALTER ROUTINE LOAD FOR [db.]job_name\n[job_properties]\nFROM data_source\n[data_source_properties]\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"[db.]job_name")),(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a\u8981\u4fee\u6539\u7684\u4f5c\u4e1a\u540d\u79f0\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"tbl_name")),(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a\u9700\u8981\u5bfc\u5165\u7684\u8868\u7684\u540d\u79f0\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"job_properties")),(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a\u9700\u8981\u4fee\u6539\u7684\u4f5c\u4e1a\u53c2\u6570\u3002\u76ee\u524d\u4ec5\u652f\u6301\u5982\u4e0b\u53c2\u6570\u7684\u4fee\u6539\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"desired_concurrent_number")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"max_error_number")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"max_batch_interval")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"max_batch_rows")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"max_batch_size")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"jsonpaths")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"json_root")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"strip_outer_array")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"strict_mode")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"timezone")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"num_as_string")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"fuzzy_parse"))))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"data_source")),(0,r.kt)("p",{parentName:"li"},"\u6570\u636e\u6e90\u7684\u7c7b\u578b\u3002\u5f53\u524d\u652f\u6301\uff1a"),(0,r.kt)("p",{parentName:"li"},"KAFKA")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"data_source_properties")),(0,r.kt)("p",{parentName:"li"},"\u6570\u636e\u6e90\u7684\u76f8\u5173\u5c5e\u6027\u3002\u76ee\u524d\u4ec5\u652f\u6301\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"kafka_partitions")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"kafka_offsets")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"kafka_broker_list")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"kafka_topic")),(0,r.kt)("li",{parentName:"ol"},"\u81ea\u5b9a\u4e49 property\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"property.group.id"))),(0,r.kt)("p",{parentName:"li"},"\u6ce8\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"kafka_partitions")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"kafka_offsets")," \u7528\u4e8e\u4fee\u6539\u5f85\u6d88\u8d39\u7684 kafka partition \u7684offset\uff0c\u4ec5\u80fd\u4fee\u6539\u5f53\u524d\u5df2\u7ecf\u6d88\u8d39\u7684 partition\u3002\u4e0d\u80fd\u65b0\u589e partition\u3002")))),(0,r.kt)("h2",{id:"example"},"example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"desired_concurrent_number")," \u4fee\u6539\u4e3a 1"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'ALTER ROUTINE LOAD FOR db1.label1\nPROPERTIES\n(\n    "desired_concurrent_number" = "1"\n);\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"desired_concurrent_number")," \u4fee\u6539\u4e3a 10\uff0c\u4fee\u6539 partition \u7684offset\uff0c\u4fee\u6539 group id\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'ALTER ROUTINE LOAD FOR db1.label1\nPROPERTIES\n(\n    "desired_concurrent_number" = "10"\n)\nFROM kafka\n(\n    "kafka_partitions" = "0, 1, 2",\n    "kafka_offsets" = "100, 200, 100",\n    "property.group.id" = "new_group"\n);\n')))),(0,r.kt)("h2",{id:"keyword"},"keyword"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ALTER,ROUTINE,LOAD\n")))}k.isMDXComponent=!0}}]);