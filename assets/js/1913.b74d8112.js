(window.webpackJsonp=window.webpackJsonp||[]).push([[1913],{2540:function(s,a,e){"use strict";e.r(a);var n=e(15),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"array-remove"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#array-remove"}},[s._v("#")]),s._v(" array_remove")]),s._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" description")]),s._v(" "),e("h4",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ARRAY<T> array_remove(ARRAY<T> arr, T val)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Remove all elements that equal to element from array.")]),s._v(" "),e("h3",{attrs:{id:"notice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notice"}},[s._v("#")]),s._v(" notice")]),s._v(" "),e("p",[e("code",[s._v("Only supported in vectorized engine")])]),s._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql> set enable_vectorized_engine=true;\n\nmysql> select array_remove(['test', NULL, 'value'], 'value');\n+-----------------------------------------------------+\n| array_remove(ARRAY('test', NULL, 'value'), 'value') |\n+-----------------------------------------------------+\n| [test, NULL]                                        |\n+-----------------------------------------------------+\n\nmysql> select k1, k2, array_remove(k2, 1) from array_type_table_1;\n+------+--------------------+-----------------------+\n| k1   | k2                 | array_remove(`k2`, 1) |\n+------+--------------------+-----------------------+\n|    1 | [1, 2, 3]          | [2, 3]                |\n|    2 | [1, 3]             | [3]                   |\n|    3 | NULL               | NULL                  |\n|    4 | [1, 3]             | [3]                   |\n|    5 | [NULL, 1, NULL, 2] | [NULL, NULL, 2]       |\n+------+--------------------+-----------------------+\n\nmysql> select k1, k2, array_remove(k2, k1) from array_type_table_1;\n+------+--------------------+--------------------------+\n| k1   | k2                 | array_remove(`k2`, `k1`) |\n+------+--------------------+--------------------------+\n|    1 | [1, 2, 3]          | [2, 3]                   |\n|    2 | [1, 3]             | [1, 3]                   |\n|    3 | NULL               | NULL                     |\n|    4 | [1, 3]             | [1, 3]                   |\n|    5 | [NULL, 1, NULL, 2] | [NULL, 1, NULL, 2]       |\n+------+--------------------+--------------------------+\n\nmysql> select k1, k2, array_remove(k2, date('2022-10-10')) from array_type_table_date;\n+------+--------------------------+-------------------------------------------------+\n| k1   | k2                       | array_remove(`k2`, date('2022-10-10 00:00:00')) |\n+------+--------------------------+-------------------------------------------------+\n|    1 | [2021-10-10, 2022-10-10] | [2021-10-10]                                    |\n|    2 | [NULL, 2022-05-14]       | [NULL, 2022-05-14]                              |\n+------+--------------------------+-------------------------------------------------+\n\nmysql> select k1, k2, array_remove(k2, k1) from array_type_table_nullable;\n+------+-----------+--------------------------+\n| k1   | k2        | array_remove(`k2`, `k1`) |\n+------+-----------+--------------------------+\n| NULL | [1, 2, 3] | NULL                     |\n|    1 | NULL      | NULL                     |\n| NULL | [NULL, 1] | NULL                     |\n|    1 | [NULL, 1] | [NULL]                   |\n+------+-----------+--------------------------+\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br")])]),e("h3",{attrs:{id:"keywords"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" keywords")]),s._v(" "),e("p",[s._v("ARRAY,REMOVE,ARRAY_REMOVE")])])}),[],!1,null,null,null);a.default=r.exports}}]);