(window.webpackJsonp=window.webpackJsonp||[]).push([[881],{1509:function(s,t,a){"use strict";a.r(t);var n=a(15),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"bitmap-or-count"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-or-count"}},[s._v("#")]),s._v(" bitmap_or_count")]),s._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" description")]),s._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),a("p",[a("code",[s._v("BigIntVal bitmap_or_count(BITMAP lhs, BITMAP rhs, ...)")])]),s._v(" "),a("p",[s._v("计算两个及以上输入bitmap的并集，返回并集的个数.")]),s._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("MySQL> select bitmap_or_count(bitmap_from_string('1,2,3'),bitmap_empty());\n+--------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_empty()) |\n+--------------------------------------------------------------+\n|                                                            3 |\n+--------------------------------------------------------------+\n\n\nMySQL> select bitmap_or_count(bitmap_from_string('1,2,3'),bitmap_from_string('1,2,3'));\n+---------------------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2,3')) |\n+---------------------------------------------------------------------------+\n|                                                                         3 |\n+---------------------------------------------------------------------------+\n\nMySQL> select bitmap_or_count(bitmap_from_string('1,2,3'),bitmap_from_string('3,4,5'));\n+---------------------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5')) |\n+---------------------------------------------------------------------------+\n|                                                                         5 |\n+---------------------------------------------------------------------------+\n\nMySQL> select bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'), to_bitmap(100), bitmap_empty());\n+-----------------------------------------------------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'), to_bitmap(100), bitmap_empty()) |\n+-----------------------------------------------------------------------------------------------------------+\n|                                                                                                         6 |\n+-----------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'), to_bitmap(100), NULL);\n+-------------------------------------------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'), to_bitmap(100), NULL) |\n+-------------------------------------------------------------------------------------------------+\n|                                                                                            NULL |\n+-------------------------------------------------------------------------------------------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br")])]),a("h3",{attrs:{id:"keywords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" keywords")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("BITMAP_OR_COUNT,BITMAP\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);