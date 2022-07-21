"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[72223],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"Query Detail Action",language:"en"},l=void 0,o={unversionedId:"admin-manual/http-actions/fe/query-detail-action",id:"admin-manual/http-actions/fe/query-detail-action",title:"Query Detail Action",description:"\x3c!--",source:"@site/docs/admin-manual/http-actions/fe/query-detail-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/query-detail-action",permalink:"/docs/admin-manual/http-actions/fe/query-detail-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Query Detail Action",language:"en"},sidebar:"docs",previous:{title:"Profile Action",permalink:"/docs/admin-manual/http-actions/fe/profile-action"},next:{title:"Query Profile Action",permalink:"/docs/admin-manual/http-actions/fe/query-profile-action"}},c={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"query-detail-action"},"Query Detail Action"),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/query_detail")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Used to obtain information about all queries after a specified time point"),(0,r.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,r.kt)("p",null,"None"),(0,r.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"event_time")),(0,r.kt)("p",{parentName:"li"},"  At the specified time point (Unix timestamp, in milliseconds), obtain query information after that time point.\n"))),(0,r.kt)("h2",{id:"request-body"},"Request body"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "query_details": [{\n            "eventTime": 1596462699216,\n            "queryId": "f732084bc8e74f39-8313581c9c3c0b58",\n            "startTime": 1596462698969,\n            "endTime": 1596462699216,\n            "latency": 247,\n            "state": "FINISHED",\n            "database": "db1",\n            "sql": "select * from tbl1"\n        }, {\n            "eventTime": 1596463013929,\n            "queryId": "ed2d0d80855d47a5-8b518a0f1472f60c",\n            "startTime": 1596463013913,\n            "endTime": 1596463013929,\n            "latency": 16,\n            "state": "FINISHED",\n            "database": "db1",\n            "sql": "select k1 from tbl1"\n        }]\n    },\n    "count": 0\n}\n')),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get query details after the specified time point."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'GET /api/query_detail?event_time=1596462079958\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "query_details": [{\n            "eventTime": 1596462699216,\n            "queryId": "f732084bc8e74f39-8313581c9c3c0b58",\n            "startTime": 1596462698969,\n            "endTime": 1596462699216,\n            "latency": 247,\n            "state": "FINISHED",\n            "database": "db1",\n            "sql": "select * from tbl1"\n        }, {\n            "eventTime": 1596463013929,\n            "queryId": "ed2d0d80855d47a5-8b518a0f1472f60c",\n            "startTime": 1596463013913,\n            "endTime": 1596463013929,\n            "latency": 16,\n            "state": "FINISHED",\n            "database": "db1",\n            "sql": "select k1 from tbl1"\n        }]\n    },\n    "count": 0\n}\n')))))}u.isMDXComponent=!0}}]);