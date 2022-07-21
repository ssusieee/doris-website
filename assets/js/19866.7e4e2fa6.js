"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[19866],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,p=d["".concat(o,".").concat(f)]||d[f]||m[f]||l;return t?r.createElement(p,i(i({ref:n},u),{},{components:t})):r.createElement(p,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92503:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(87462),a=t(67294),l=t(86010),i=t(95999),c=t(86668);const o="anchorWithStickyNavbar_LWe7",s="anchorWithHideOnScrollNavbar_WYt5";function u(e){let{as:n,id:t,...u}=e;const{navbar:{hideOnScroll:m}}=(0,c.L)();return"h1"!==n&&t?a.createElement(n,(0,r.Z)({},u,{className:(0,l.Z)("anchor",m?s:o),id:t}),u.children,a.createElement("a",{className:"hash-link",href:"#"+t,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(n,(0,r.Z)({},u,{id:void 0}))}},40076:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(67294),a=t(3905),l=t(87462),i=t(35742);var c=t(13066);var o=t(39960);var s=t(86010),u=t(72389),m=t(86043);const d="details_lb9f",f="isBrowser_bmU9",p="collapsibleContent_i85q";function v(e){return!!e&&("SUMMARY"===e.tagName||v(e.parentElement))}function h(e,n){return!!e&&(e===n||h(e.parentElement,n))}function g(e){let{summary:n,children:t,...a}=e;const i=(0,u.Z)(),c=(0,r.useRef)(null),{collapsed:o,setCollapsed:g}=(0,m.u)({initialState:!a.open}),[E,y]=(0,r.useState)(a.open);return r.createElement("details",(0,l.Z)({},a,{ref:c,open:E,"data-collapsed":o,className:(0,s.Z)(d,i&&f,a.className),onMouseDown:e=>{v(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;v(n)&&h(n,c.current)&&(e.preventDefault(),o?(g(!1),y(!0)):g(!0))}}),null!=n?n:r.createElement("summary",null,"Details"),r.createElement(m.z,{lazy:!1,collapsed:o,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{g(e),y(!e)}},r.createElement("div",{className:p},t)))}const E="details_b_Ee";function y(e){let{...n}=e;return r.createElement(g,(0,l.Z)({},n,{className:(0,s.Z)("alert alert--info",E,n.className)}))}var b=t(92503);function N(e){return r.createElement(b.Z,e)}const L="containsTaskList_mC6p";const O="img_ev3q";const Z={head:function(e){const n=r.Children.map(e.children,(e=>r.isValidElement(e)?function(e){var n;if(null!=(n=e.props)&&n.mdxType&&e.props.originalType){const{mdxType:n,originalType:t,...a}=e.props;return r.createElement(e.props.originalType,a)}return e}(e):e));return r.createElement(i.Z,e,n)},code:function(e){const n=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&n.includes(e.props.mdxType)))?r.createElement("code",e):r.createElement(c.Z,e)},a:function(e){return r.createElement(o.Z,e)},pre:function(e){var n;return r.createElement(c.Z,(0,r.isValidElement)(e.children)&&"code"===(null==(n=e.children.props)?void 0:n.originalType)?e.children.props:{...e})},details:function(e){const n=r.Children.toArray(e.children),t=n.find((e=>{var n;return r.isValidElement(e)&&"summary"===(null==(n=e.props)?void 0:n.mdxType)})),a=r.createElement(r.Fragment,null,n.filter((e=>e!==t)));return r.createElement(y,(0,l.Z)({},e,{summary:t}),a)},ul:function(e){return r.createElement("ul",(0,l.Z)({},e,{className:(n=e.className,(0,s.Z)(n,(null==n?void 0:n.includes("contains-task-list"))&&L))}));var n},img:function(e){return r.createElement("img",(0,l.Z)({loading:"lazy"},e,{className:(n=e.className,(0,s.Z)(n,O))}));var n},h1:e=>r.createElement(N,(0,l.Z)({as:"h1"},e)),h2:e=>r.createElement(N,(0,l.Z)({as:"h2"},e)),h3:e=>r.createElement(N,(0,l.Z)({as:"h3"},e)),h4:e=>r.createElement(N,(0,l.Z)({as:"h4"},e)),h5:e=>r.createElement(N,(0,l.Z)({as:"h5"},e)),h6:e=>r.createElement(N,(0,l.Z)({as:"h6"},e))};function k(e){let{children:n}=e;return r.createElement(a.Zo,{components:Z},n)}},32244:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(67294),a=t(86010),l=t(39960);function i(e){const{permalink:n,title:t,subLabel:i,isNext:c}=e;return r.createElement(l.Z,{className:(0,a.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n},i&&r.createElement("div",{className:"pagination-nav__sublabel"},i),r.createElement("div",{className:"pagination-nav__label"},t))}},39407:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(87462),a=t(67294),l=t(86010),i=t(93743);const c="tableOfContents_bqdL";function o(e){let{className:n,...t}=e;return a.createElement("div",{className:(0,l.Z)(c,"thin-scrollbar",n)},a.createElement(i.Z,(0,r.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},93743:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(87462),a=t(67294);function l(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const r=t.slice(2,e.level);e.parentIndex=Math.max(...r),t[e.level]=n}));const r=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):r.push(a)})),r}function i(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return n.flatMap((e=>{const n=i({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[{...e,children:n}]:n}))}var c=t(86668);function o(e){const n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function s(e,n){var t;let{anchorTopOffset:r}=n;const a=e.find((e=>o(e).top>=r));if(a){var l;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(a))?a:null!=(l=e[e.indexOf(a)-1])?l:null}return null!=(t=e[e.length-1])?t:null}function u(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,c.L)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function m(e){const n=(0,a.useRef)(void 0),t=u();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:a,minHeadingLevel:l,maxHeadingLevel:i}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const r=[];for(let a=n;a<=t;a+=1)r.push("h"+a+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),o=s(c,{anchorTopOffset:t.current}),u=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===u)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}function d(e){let{toc:n,className:t,linkClassName:r,isChild:l}=e;return n.length?a.createElement("ul",{className:l?void 0:t},n.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(d,{isChild:!0,toc:e.children,className:t,linkClassName:r}))))):null}const f=a.memo(d);function p(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:u,maxHeadingLevel:d,...p}=e;const v=(0,c.L)(),h=null!=u?u:v.tableOfContents.minHeadingLevel,g=null!=d?d:v.tableOfContents.maxHeadingLevel,E=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>i({toc:l(n),minHeadingLevel:t,maxHeadingLevel:r})),[n,t,r])}({toc:n,minHeadingLevel:h,maxHeadingLevel:g});return m((0,a.useMemo)((()=>{if(o&&s)return{linkClassName:o,linkActiveClassName:s,minHeadingLevel:h,maxHeadingLevel:g}}),[o,s,h,g])),a.createElement(f,(0,r.Z)({toc:E,className:t,linkClassName:o},p))}}}]);