"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[44587],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(h,r(r({ref:e},p),{},{components:n})):a.createElement(h,r({ref:e},p))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51494:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={title:"Compaction Action",language:"en"},r=void 0,l={unversionedId:"admin-manual/http-actions/compaction-action",id:"admin-manual/http-actions/compaction-action",title:"Compaction Action",description:"\x3c!--",source:"@site/docs/admin-manual/http-actions/compaction-action.md",sourceDirName:"admin-manual/http-actions",slug:"/admin-manual/http-actions/compaction-action",permalink:"/docs/admin-manual/http-actions/compaction-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Compaction Action",language:"en"},sidebar:"docs",previous:{title:"CHECK/RESET Stub Cache",permalink:"/docs/admin-manual/http-actions/check-reset-rpc-cache"},next:{title:"CONNECTION",permalink:"/docs/admin-manual/http-actions/connection-action"}},s={},c=[{value:"View Compaction status",id:"view-compaction-status",level:2},{value:"The overall compaction status of the node",id:"the-overall-compaction-status-of-the-node",level:3},{value:"Specify the compaction status of the tablet",id:"specify-the-compaction-status-of-the-tablet",level:3},{value:"Examples",id:"examples",level:3},{value:"Manually trigger Compaction",id:"manually-trigger-compaction",level:2},{value:"Examples",id:"examples-1",level:3},{value:"Manual Compaction execution status",id:"manual-compaction-execution-status",level:2},{value:"Examples",id:"examples-2",level:3}],p={toc:c};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"compaction-action"},"Compaction Action"),(0,o.kt)("p",null,"This API is used to view the overall compaction status of a BE node or the compaction status of a specified tablet. It can also be used to manually trigger Compaction."),(0,o.kt)("h2",{id:"view-compaction-status"},"View Compaction status"),(0,o.kt)("h3",{id:"the-overall-compaction-status-of-the-node"},"The overall compaction status of the node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X GET http://be_host:webserver_port/api/compaction/run_status\n")),(0,o.kt)("p",null,"Return JSON:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "CumulativeCompaction": {\n         "/home/disk1" : [10001, 10002],\n         "/home/disk2" : [10003]\n  },\n  "BaseCompaction": {\n         "/home/disk1" : [10001, 10002],\n         "/home/disk2" : [10003]\n  }\n}\n')),(0,o.kt)("p",null,"This structure represents the id of the tablet that is performing the compaction task in a certain data directory, and the type of compaction."),(0,o.kt)("h3",{id:"specify-the-compaction-status-of-the-tablet"},"Specify the compaction status of the tablet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X GET http://be_host:webserver_port/api/compaction/show?tablet_id=xxxx\n")),(0,o.kt)("p",null,"If the tablet does not exist, an error in JSON format is returned:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')),(0,o.kt)("p",null,"If the tablet exists, the result is returned in JSON format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "cumulative policy type": "NUM_BASED",\n    "cumulative point": 50,\n    "last cumulative failure time": "2019-12-16 18:13:43.224",\n    "last base failure time": "2019-12-16 18:13:23.320",\n    "last cumu success time": "2019-12-16 18:12:15.110",\n    "last base success time": "2019-12-16 18:11:50.780",\n    "rowsets": [\n        "[0-48] 10 DATA OVERLAPPING 574.00 MB",\n        "[49-49] 2 DATA OVERLAPPING 574.00 B",\n        "[50-50] 0 DELETE NONOVERLAPPING 574.00 B",\n        "[51-51] 5 DATA OVERLAPPING 574.00 B"\n    ],\n    "missing_rowsets": [],\n    "stale version path": [\n        {\n            "path id": "2",\n            "last create time": "2019-12-16 18:11:15.110 +0800",\n            "path list": "2-> [0-24] -> [25-48]"\n        }, \n        {\n            "path id": "1",\n            "last create time": "2019-12-16 18:13:15.110 +0800",\n            "path list": "1-> [25-40] -> [40-48]"\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"Explanation of results:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"cumulative policy type: The cumulative compaction policy type which is used by current tablet."),(0,o.kt)("li",{parentName:"ul"},"cumulative point: The version boundary between base and cumulative compaction. Versions before (excluding) points are handled by base compaction. Versions after (inclusive) are handled by cumulative compaction."),(0,o.kt)("li",{parentName:"ul"},"last cumulative failure time: The time when the last cumulative compaction failed. After 10 minutes by default, cumulative compaction is attempted on the this tablet again."),(0,o.kt)("li",{parentName:"ul"},"last base failure time: The time when the last base compaction failed. After 10 minutes by default, base compaction is attempted on the this tablet again."),(0,o.kt)("li",{parentName:"ul"},"rowsets: The current rowsets collection of this tablet. ","[0-48]"," means a rowset with version 0-48. The second number is the number of segments in a rowset. The ",(0,o.kt)("inlineCode",{parentName:"li"},"DELETE")," indicates the delete version. ",(0,o.kt)("inlineCode",{parentName:"li"},"OVERLAPPING")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"NONOVERLAPPING")," indicates whether data between segments is overlap."),(0,o.kt)("li",{parentName:"ul"},"missing_rowset: The missing rowsets."),(0,o.kt)("li",{parentName:"ul"},"stale version path: The merged version path of the rowset collection currently merged in the tablet. It is an array structure and each element represents a merged path. Each element contains three attributes: path id indicates the version path id, and last create time indicates the creation time of the most recent rowset on the path. By default, all rowsets on this path will be deleted after half an hour at the last create time.")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X GET http://192.168.10.24:8040/api/compaction/show?tablet_id=10015\n")),(0,o.kt)("h2",{id:"manually-trigger-compaction"},"Manually trigger Compaction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X POST http://be_host:webserver_port/api/compaction/run?tablet_id=xxxx\\&compact_type=cumulative\n")),(0,o.kt)("p",null,"The only one manual compaction task that can be performed at a moment, and the value range of compact_type is base or cumulative"),(0,o.kt)("p",null,"If the tablet does not exist, an error in JSON format is returned:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')),(0,o.kt)("p",null,"If the compaction execution task fails to be triggered, an error in JSON format is returned:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "status": "Fail",\n    "msg": "fail to execute compaction, error = -2000"\n}\n')),(0,o.kt)("p",null,"If the compaction execution task successes to be triggered, an error in JSON format is returned:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "status": "Success",\n    "msg": "compaction task is successfully triggered."\n}\n')),(0,o.kt)("p",null,"Explanation of results:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"status: Trigger task status, when it is successfully triggered, it is Success; when for some reason (for example, the appropriate version is not obtained), it returns Fail."),(0,o.kt)("li",{parentName:"ul"},"msg: Give specific success or failure information.")),(0,o.kt)("h3",{id:"examples-1"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X POST http://192.168.10.24:8040/api/compaction/run?tablet_id=10015\\&compact_type=cumulative\n")),(0,o.kt)("h2",{id:"manual-compaction-execution-status"},"Manual Compaction execution status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X GET http://be_host:webserver_port/api/compaction/run_status?tablet_id=xxxx\n")),(0,o.kt)("p",null,"If the tablet does not exist, an error in JSON format is returned:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')),(0,o.kt)("p",null,"If the tablet exists and the tablet is not running, JSON format is returned:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "status" : "Success",\n    "run_status" : false,\n    "msg" : "this tablet_id is not running",\n    "tablet_id" : 11308,\n    "compact_type" : ""\n}\n')),(0,o.kt)("p",null,"If the tablet exists and the tablet is running, JSON format is returned:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "status" : "Success",\n    "run_status" : true,\n    "msg" : "this tablet_id is running",\n    "tablet_id" : 11308,\n    "compact_type" : "cumulative"\n}\n')),(0,o.kt)("p",null,"Explanation of results:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"run_status: Get the current manual compaction task execution status.")),(0,o.kt)("h3",{id:"examples-2"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X GET http://192.168.10.24:8040/api/compaction/run_status?tablet_id=10015\n")))}u.isMDXComponent=!0}}]);