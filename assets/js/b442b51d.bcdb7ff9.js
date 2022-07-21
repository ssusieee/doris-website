"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[65828],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>E});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),E=o,m=u["".concat(i,".").concat(E)]||u[E]||c[E]||a;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function E(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},74654:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"ALTER SYSTEM",language:"en"},s=void 0,l={unversionedId:"sql-reference/sql-statements/Administration/ALTER-SYSTEM",id:"version-1.0/sql-reference/sql-statements/Administration/ALTER-SYSTEM",title:"ALTER SYSTEM",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-statements/Administration/ALTER-SYSTEM.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ALTER-SYSTEM",permalink:"/docs/1.0/sql-reference/sql-statements/Administration/ALTER-SYSTEM",draft:!1,tags:[],version:"1.0",frontMatter:{title:"ALTER SYSTEM",language:"en"},sidebar:"docs",previous:{title:"ALTER CLUSTER",permalink:"/docs/1.0/sql-reference/sql-statements/Administration/ALTER-CLUSTER"},next:{title:"CANCEL DECOMMISSION",permalink:"/docs/1.0/sql-reference/sql-statements/Administration/CANCEL-DECOMMISSION"}},i={},p=[{value:"Description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"alter-system"},"ALTER SYSTEM"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,'This statement is used to operate on nodes in a system. (Administrator only!)\nGrammar:\n1) Adding nodes (without multi-tenant functionality, add in this way)\nALTER SYSTEM ADD BACKEND "host:heartbeat_port"','[,"host:heartbeat_port"...]',';\n2) Adding idle nodes (that is, adding BACKEND that does not belong to any cluster)\nALTER SYSTEM ADD FREE BACKEND "host:heartbeat_port"','[,"host:heartbeat_port"...]',';\n3) Adding nodes to a cluster\nALTER SYSTEM ADD BACKEND TO cluster_name "host:heartbeat_port"','[,"host:heartbeat_port"...]',';\n4) Delete nodes\nALTER SYSTEM DROP BACKEND "host:heartbeat_port"','[,"host:heartbeat_port"...]',';\n5) Node offline\nALTER SYSTEM DECOMMISSION BACKEND "host:heartbeat_port"','[,"host:heartbeat_port"...]',';\n6)226;- 21152;-Broker\nALTER SYSTEM ADD BROKER broker_name "host:port"','[,"host:port"...]',';\n(7) 20943;"23569;" Broker\nALTER SYSTEM DROP BROKER broker_name "host:port"','[,"host:port"...]',';\n8) Delete all Brokers\nALTER SYSTEM DROP ALL BROKER broker_name\n9) Set up a Load error hub for centralized display of import error information\nALTER SYSTEM SET LOAD ERRORS HUB PROPERTIES ("key" = "value"',"[, ...]",');\n10) Modify property of BE\nALTER SYSTEM MODIFY BACKEND "host:heartbeat_port" SET ("key" = "value"',"[, ...]",");"),(0,o.kt)("p",null,'Explain:\n1) Host can be hostname or IP address\n2) heartbeat_port is the heartbeat port of the node\n3) Adding and deleting nodes are synchronous operations. These two operations do not take into account the existing data on the node, the node is directly deleted from the metadata, please use cautiously.\n4) Node offline operations are used to secure offline nodes. This operation is asynchronous. If successful, the node will eventually be removed from the metadata. If it fails, the offline will not be completed.\n5) The offline operation of the node can be cancelled manually. See CANCEL DECOMMISSION for details\n6) Load error hub:\nCurrently, two types of Hub are supported: Mysql and Broker. You need to specify "type" = "mysql" or "type" = "broker" in PROPERTIES.\nIf you need to delete the current load error hub, you can set type to null.\n1) When using the Mysql type, the error information generated when importing will be inserted into the specified MySQL library table, and then the error information can be viewed directly through the show load warnings statement.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," Hub of Mysql type needs to specify the following parameters:\n host: mysql host\n port: mysql port\n user: mysql user\n password: mysql password\n database mysql database\n table: mysql table\n")),(0,o.kt)("p",null,"   2) When the Broker type is used, the error information generated when importing will form a file and be written to the designated remote storage system through the broker. Make sure that the corresponding broker is deployed\nHub of Broker type needs to specify the following parameters:\nBroker: Name of broker\nPath: Remote Storage Path\nOther properties: Other information necessary to access remote storage, such as authentication information."),(0,o.kt)("p",null,"7) Modify BE node attributes currently supports the following attributes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"tag.location\uff1aResource tag"),(0,o.kt)("li",{parentName:"ol"},"disable_query: Query disabled attribute"),(0,o.kt)("li",{parentName:"ol"},"disable_load: Load disabled attribute")),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Add a node\nALTER SYSTEM ADD BACKEND "host:port";')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Adding an idle node\nALTER SYSTEM ADD FREE BACKEND "host:port";')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Delete two nodes\nALTER SYSTEM DROP BACKEND "host1:port", "host2:port";')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'offline two nodes\nALTER SYSTEM DECOMMISSION BACKEND "host1:port", "host2:port";')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Add two Hdfs Broker\nALTER SYSTEM ADD BROKER hdfs "host1:port", "host2:port";')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Add a load error hub of Mysql type\nALTER SYSTEM SET LOAD ERRORS HUB PROPERTIES\n("type"= "mysql",\n"host" = "192.168.1.17"\n"port" = "3306",\n"User" = "my" name,\n"password" = "my_passwd",\n"database" = "doris_load",\n"table" = "load_errors"\n);')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'\u6dfb\u52a0\u4e00\u4e2a Broker \u7c7b\u578b\u7684 load error hub\nALTER SYSTEM SET LOAD ERRORS HUB PROPERTIES\n("type"= "broker",\n"Name" = BOS,\n"path" = "bos://backup-cmy/logs",\n"bos_endpoint" ="',(0,o.kt)("a",{parentName:"p",href:"http://gz.bcebos.com%22"},'http://gz.bcebos.com"'),',\n"bos_accesskey" = "069fc278xxxxxx24ddb522",\n"bos_secret_accesskey"="700adb0c6xxxxxx74d59eaa980a"\n);')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Delete the current load error hub\nALTER SYSTEM SET LOAD ERRORS HUB PROPERTIES\n("type"= "null");')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Modify BE resource tag"))),(0,o.kt)("p",null,'ALTER SYSTEM MODIFY BACKEND "host1:9050" SET ("tag.location" = "group_a");'),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},"Modify the query disabled attribute of BE")),(0,o.kt)("p",null,'ALTER SYSTEM MODIFY BACKEND "host1:9050" SET ("disable_query" = "true");'),(0,o.kt)("ol",{start:11},(0,o.kt)("li",{parentName:"ol"},"Modify the load disabled attribute of BE\n")),(0,o.kt)("p",null,'ALTER SYSTEM MODIFY BACKEND "host1:9050" SET ("disable_load" = "true"); '),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("p",null,"AGE,SYSTEM,BACKGROUND,BROKER,FREE"))}c.isMDXComponent=!0}}]);