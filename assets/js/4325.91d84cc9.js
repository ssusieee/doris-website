(window.webpackJsonp=window.webpackJsonp||[]).push([[4325],{4952:function(s,e,a){"use strict";a.r(e);var n=a(15),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"explode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explode"}},[s._v("#")]),s._v(" explode")]),s._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" description")]),s._v(" "),a("p",[s._v("表函数，需配合 Lateral View 使用。")]),s._v(" "),a("p",[s._v("将 array 列展开成多行。当 array 为NULL或者为空时，"),a("code",[s._v("explode_outer")]),s._v(" 返回NULL。\n"),a("code",[s._v("explode")]),s._v(" 和 "),a("code",[s._v("explode_outer")]),s._v(" 均会返回 array 内部的NULL元素。")]),s._v(" "),a("p",[s._v("语法：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("explode(expr)\nexplode_outer(expr)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> set enable_vectorized_engine = true\nmysql> set enable_array_type = true\n\nmysql> select e1 from (select 1 k1) as t lateral view explode([1,2,3]) tmp1 as e1;\n+------+\n| e1   |\n+------+\n|    1 |\n|    2 |\n|    3 |\n+------+\n\nmysql> select e1 from (select 1 k1) as t lateral view explode_outer(null) tmp1 as e1;\n+------+\n| e1   |\n+------+\n| NULL |\n+------+\n\nmysql> select e1 from (select 1 k1) as t lateral view explode([]) tmp1 as e1;\nEmpty set (0.010 sec)\n\nmysql> select e1 from (select 1 k1) as t lateral view explode([null,1,null]) tmp1 as e1;\n+------+\n| e1   |\n+------+\n| NULL |\n|    1 |\n| NULL |\n+------+\n\nmysql> select e1 from (select 1 k1) as t lateral view explode_outer([null,1,null]) tmp1 as e1;\n+------+\n| e1   |\n+------+\n| NULL |\n|    1 |\n| NULL |\n+------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br")])]),a("h3",{attrs:{id:"keywords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" keywords")]),s._v(" "),a("p",[s._v("EXPLODE,EXPLODE_OUTER,ARRAY")])])}),[],!1,null,null,null);e.default=t.exports}}]);