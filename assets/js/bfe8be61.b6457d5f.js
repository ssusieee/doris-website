"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[10659],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>d});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=s(r),d=a,f=y["".concat(c,".").concat(d)]||y[d]||p[d]||o;return r?t.createElement(f,i(i({ref:n},u),{},{components:r})):t.createElement(f,i({ref:n},u))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},67590:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=r(87462),a=(r(67294),r(3905));const o={title:"array_contains",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/array-functions/array_contains",id:"sql-manual/sql-functions/array-functions/array_contains",title:"array_contains",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/array-functions/array_contains.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_contains",permalink:"/docs/sql-manual/sql-functions/array-functions/array_contains",draft:!1,tags:[],version:"current",frontMatter:{title:"array_contains",language:"en"},sidebar:"docs",previous:{title:"WINDOW-FUNCTION-NTILE",permalink:"/docs/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-NTILE"},next:{title:"array_position",permalink:"/docs/sql-manual/sql-functions/array-functions/array_position"}},c={},s=[{value:"array_contains",id:"array_contains",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_contains"},"array_contains"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BOOLEAN array_contains(ARRAY<T> arr, T value)")),(0,a.kt)("p",null,"Check if a value presents in an array column. Return below values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1    - if value presents in an array;\n0    - if value does not present in an array;\nNULL - when array is NULL;\n")),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Only supported in vectorized engine")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> SELECT id,c_array,array_contains(c_array, 5) FROM `array_test`;\n+------+-----------------+------------------------------+\n| id   | c_array         | array_contains(`c_array`, 5) |\n+------+-----------------+------------------------------+\n|    1 | [1, 2, 3, 4, 5] |                            1 |\n|    2 | [6, 7, 8]       |                            0 |\n|    3 | []              |                            0 |\n|    4 | NULL            |                         NULL |\n+------+-----------------+------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY_CONTAINS"))}p.isMDXComponent=!0}}]);