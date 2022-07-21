"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[16461],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||i;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"`ST_LineFromText`,`ST_LineStringFromText`",language:"en"},l=void 0,a={unversionedId:"sql-reference/sql-functions/spatial-functions/st_linefromtext",id:"version-1.0/sql-reference/sql-functions/spatial-functions/st_linefromtext",title:"`ST_LineFromText`,`ST_LineStringFromText`",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-functions/spatial-functions/st_linefromtext.md",sourceDirName:"sql-reference/sql-functions/spatial-functions",slug:"/sql-reference/sql-functions/spatial-functions/st_linefromtext",permalink:"/docs/1.0/sql-reference/sql-functions/spatial-functions/st_linefromtext",draft:!1,tags:[],version:"1.0",frontMatter:{title:"`ST_LineFromText`,`ST_LineStringFromText`",language:"en"},sidebar:"docs",previous:{title:"`ST_GeometryFromText`,`ST GeomFromText`",permalink:"/docs/1.0/sql-reference/sql-functions/spatial-functions/st_geometryfromtext"},next:{title:"St_Point'",permalink:"/docs/1.0/sql-reference/sql-functions/spatial-functions/st_point"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"st_linefromtextst_linestringfromtext"},(0,o.kt)("inlineCode",{parentName:"h1"},"ST_LineFromText"),",",(0,o.kt)("inlineCode",{parentName:"h1"},"ST_LineStringFromText")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GEOMETRY ST LineFromText (VARCHAR wkt)")),(0,o.kt)("p",null,"Converting a WKT (Well Known Text) into a Line-style memory representation"),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> SELECT ST_AsText(ST_LineFromText(\"LINESTRING (1 1, 2 2)\"));\n+---------------------------------------------------------+\n| st_astext(st_geometryfromtext('LINESTRING (1 1, 2 2)')) |\n+---------------------------------------------------------+\n| LINESTRING (1 1, 2 2)                                   |\n+---------------------------------------------------------+\n")),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("p",null,"ST_LINEFROMTEXT, ST_LINESTRINGFROMTEXT,ST,LINEFROMTEXT,LINESTRINGFROMTEXT"))}f.isMDXComponent=!0}}]);