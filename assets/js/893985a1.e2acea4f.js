"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[39298],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60308:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={title:"SHOW BROKER",language:"en"},o=void 0,s={unversionedId:"sql-reference/sql-statements/Administration/SHOW-BROKER",id:"version-1.0/sql-reference/sql-statements/Administration/SHOW-BROKER",title:"SHOW BROKER",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-statements/Administration/SHOW-BROKER.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/SHOW-BROKER",permalink:"/docs/1.0/sql-reference/sql-statements/Administration/SHOW-BROKER",draft:!1,tags:[],version:"1.0",frontMatter:{title:"SHOW BROKER",language:"en"},sidebar:"docs",previous:{title:"SHOW BACKENDS",permalink:"/docs/1.0/sql-reference/sql-statements/Administration/SHOW-BACKENDS"},next:{title:"SHOW FILE",permalink:"/docs/1.0/sql-reference/sql-statements/Administration/SHOW-FILE"}},l={},c=[{value:"Description",id:"description",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"show-broker"},"SHOW BROKER"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"This statement is used to view the existing broker\nGrammar:\nSHOW BROKER;"),(0,i.kt)("p",null,"Explain:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"LastStartTime indicates the last BE start-up time."),(0,i.kt)("li",{parentName:"ol"},"LastHeartbeat represents the latest heartbeat."),(0,i.kt)("li",{parentName:"ol"},"Alive indicates whether the node survives."),(0,i.kt)("li",{parentName:"ol"},"ErrMsg is used to display error messages when the heartbeat fails.")),(0,i.kt)("h2",{id:"keyword"},"keyword"),(0,i.kt)("p",null,"SHOW, BROKER"))}u.isMDXComponent=!0}}]);