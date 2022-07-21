"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[24006],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),d=l,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(b,o(o({ref:n},c),{},{components:t})):r.createElement(b,o({ref:n},c))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=u;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},81384:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=t(87462),l=(t(67294),t(3905));const a={title:"explode_bitmap",language:"en"},o=void 0,p={unversionedId:"sql-reference/sql-functions/table-functions/explode-bitmap",id:"version-1.0/sql-reference/sql-functions/table-functions/explode-bitmap",title:"explode_bitmap",description:"\x3c!--",source:"@site/versioned_docs/version-1.0/sql-reference/sql-functions/table-functions/explode-bitmap.md",sourceDirName:"sql-reference/sql-functions/table-functions",slug:"/sql-reference/sql-functions/table-functions/explode-bitmap",permalink:"/docs/1.0/sql-reference/sql-functions/table-functions/explode-bitmap",draft:!1,tags:[],version:"1.0",frontMatter:{title:"explode_bitmap",language:"en"},sidebar:"docs",previous:{title:"pmod",permalink:"/docs/1.0/sql-reference/sql-functions/math-functions/pmod"},next:{title:"explode_split",permalink:"/docs/1.0/sql-reference/sql-functions/table-functions/explode-split"}},i={},s=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],c={toc:s};function m(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"explode_bitmap"},"explode_bitmap"),(0,l.kt)("h2",{id:"description"},"description"),(0,l.kt)("p",null,"Table functions must be used in conjunction with Lateral View."),(0,l.kt)("p",null,"Expand a bitmap type."),(0,l.kt)("p",null,"grammar:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"explode_bitmap(bitmap)\n")),(0,l.kt)("h2",{id:"example"},"example"),(0,l.kt)("p",null,"Original table data:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> select k1 from example1 order by k1;\n+------+\n| k1   |\n+------+\n|    1 |\n|    2 |\n|    3 |\n|    4 |\n|    5 |\n|    6 |\n+------+\n")),(0,l.kt)("p",null,"Lateral View:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'mysql> select k1, e1 from example1 lateral view explode_bitmap(bitmap_empty()) tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n|    4 | NULL |\n|    5 | NULL |\n|    6 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_bitmap(bitmap_from_string("1")) tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 |    1 |\n|    2 |    1 |\n|    3 |    1 |\n|    4 |    1 |\n|    5 |    1 |\n|    6 |    1 |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_bitmap(bitmap_from_string("1,2")) tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 |    1 |\n|    1 |    2 |\n|    2 |    1 |\n|    2 |    2 |\n|    3 |    1 |\n|    3 |    2 |\n|    4 |    1 |\n|    4 |    2 |\n|    5 |    1 |\n|    5 |    2 |\n|    6 |    1 |\n|    6 |    2 |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_bitmap(bitmap_from_string("1,1000")) tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 |    1 |\n|    1 | 1000 |\n|    2 |    1 |\n|    2 | 1000 |\n|    3 |    1 |\n|    3 | 1000 |\n|    4 |    1 |\n|    4 | 1000 |\n|    5 |    1 |\n|    5 | 1000 |\n|    6 |    1 |\n|    6 | 1000 |\n+------+------+\n\nmysql> select k1, e1, e2 from example1\nlateral view explode_bitmap(bitmap_from_string("1,1000")) tmp1 as e1\nlateral view explode_split("a,b", ",") tmp2 as e2 order by k1, e1, e2;\n+------+------+------+\n| k1   | e1   | e2   |\n+------+------+------+\n|    1 |    1 | a    |\n|    1 |    1 | b    |\n|    1 | 1000 | a    |\n|    1 | 1000 | b    |\n|    2 |    1 | a    |\n|    2 |    1 | b    |\n|    2 | 1000 | a    |\n|    2 | 1000 | b    |\n|    3 |    1 | a    |\n|    3 |    1 | b    |\n|    3 | 1000 | a    |\n|    3 | 1000 | b    |\n|    4 |    1 | a    |\n|    4 |    1 | b    |\n|    4 | 1000 | a    |\n|    4 | 1000 | b    |\n|    5 |    1 | a    |\n|    5 |    1 | b    |\n|    5 | 1000 | a    |\n|    5 | 1000 | b    |\n|    6 |    1 | a    |\n|    6 |    1 | b    |\n|    6 | 1000 | a    |\n|    6 | 1000 | b    |\n+------+------+------+\n')),(0,l.kt)("h2",{id:"keyword"},"keyword"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"explode_bitmap\n")))}m.isMDXComponent=!0}}]);