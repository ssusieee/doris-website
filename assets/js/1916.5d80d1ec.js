(window.webpackJsonp=window.webpackJsonp||[]).push([[1916],{2546:function(a,e,s){"use strict";s.r(e);var t=s(15),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"arrays-overlap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arrays-overlap"}},[a._v("#")]),a._v(" arrays_overlap")]),a._v(" "),s("h3",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),s("h4",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[a._v("#")]),a._v(" Syntax")]),a._v(" "),s("p",[s("code",[a._v("BOOLEAN arrays_overlap(ARRAY<T> left, ARRAY<T> right)")])]),a._v(" "),s("p",[a._v("Check if there is any common element for left and right array. Return below values:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("1    - if any common element inside left and right array;\n0    - if no common element inside left and right array;\nNULL - when left or right array is NULL; OR any element inside left and right array is NULL;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h3",{attrs:{id:"notice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notice"}},[a._v("#")]),a._v(" notice")]),a._v(" "),s("p",[s("code",[a._v("Only supported in vectorized engine")])]),a._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mysql> set enable_vectorized_engine=true;\n\nmysql> select c_left,c_right,arrays_overlap(c_left,c_right) from array_test;\n+--------------+-----------+-------------------------------------+\n| c_left       | c_right   | arrays_overlap(`c_left`, `c_right`) |\n+--------------+-----------+-------------------------------------+\n| [1, 2, 3]    | [3, 4, 5] |                                   1 |\n| [1, 2, 3]    | [5, 6]    |                                   0 |\n| [1, 2, NULL] | [1]       |                                NULL |\n| NULL         | [1, 2]    |                                NULL |\n| [1, 2, 3]    | [1, 2]    |                                   1 |\n+--------------+-----------+-------------------------------------+\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("h3",{attrs:{id:"keywords"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[a._v("#")]),a._v(" keywords")]),a._v(" "),s("p",[a._v("ARRAY,ARRAYS,OVERLAP,ARRAYS_OVERLAP")])])}),[],!1,null,null,null);e.default=r.exports}}]);