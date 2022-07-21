"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[43101],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,b=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},55969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={title:"bitand",language:"en"},a=void 0,l={unversionedId:"sql-reference/sql-functions/bitwise-functions/bitand",id:"version-1.0/sql-reference/sql-functions/bitwise-functions/bitand",title:"bitand",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-functions/bitwise-functions/bitand.md",sourceDirName:"sql-reference/sql-functions/bitwise-functions",slug:"/sql-reference/sql-functions/bitwise-functions/bitand",permalink:"/docs/1.0/sql-reference/sql-functions/bitwise-functions/bitand",draft:!1,tags:[],version:"1.0",frontMatter:{title:"bitand",language:"en"},sidebar:"docs",previous:{title:"orthogonal_bitmap_union_count",permalink:"/docs/1.0/sql-reference/sql-functions/bitmap-functions/orthogonal_bitmap_union_count"},next:{title:"bitor",permalink:"/docs/1.0/sql-reference/sql-functions/bitwise-functions/bitor"}},s={},c=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bitand"},"bitand"),(0,i.kt)("h2",{id:"description"},"description"),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BITAND(Integer-type lhs, Integer-type rhs)")),(0,i.kt)("p",null,"Returns the result of the AND operation of two integers."),(0,i.kt)("p",null,"Integer range: TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT"),(0,i.kt)("h2",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select bitand(3,5) ans;\n+------+\n| ans  |\n+------+\n|    1 |\n+------+\n\nmysql> select bitand(4,7) ans;\n+------+\n| ans  |\n+------+\n|    4 |\n+------+\n")),(0,i.kt)("h2",{id:"keyword"},"keyword"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"BITAND\n")))}u.isMDXComponent=!0}}]);