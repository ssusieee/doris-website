(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{879:function(e,a,t){"use strict";t.r(a);var s=t(15),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"topn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#topn"}},[e._v("#")]),e._v(" TOPN")]),e._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),t("h4",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),t("p",[t("code",[e._v("topn(expr, INT top_num[, INT space_expand_rate])")])]),e._v(" "),t("p",[e._v("The topn function uses the Space-Saving algorithm to calculate the top_num frequent items in expr, and the result is the\nfrequent items and their occurrence times, which is an approximation")]),e._v(" "),t("p",[e._v("The space_expand_rate parameter is optional and is used to set the number of counters used in the Space-Saving algorithm")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("counter numbers = top_num * space_expand_rate\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("The higher value of space_expand_rate, the more accurate result will be. The default value is 50")]),e._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("MySQL [test]> select topn(keyword,10) from keyword_table where date>= '2020-06-01' and date <= '2020-06-19' ;\n+------------------------------------------------------------------------------------------------------------+\n| topn(`keyword`, 10)                                                                                        |\n+------------------------------------------------------------------------------------------------------------+\n| a:157, b:138, c:133, d:133, e:131, f:127, g:124, h:122, i:117, k:117                                       |\n+------------------------------------------------------------------------------------------------------------+\n\nMySQL [test]> select date,topn(keyword,10,100) from keyword_table where date>= '2020-06-17' and date <= '2020-06-19' group by date;\n+------------+-----------------------------------------------------------------------------------------------+\n| date       | topn(`keyword`, 10, 100)                                                                      |\n+------------+-----------------------------------------------------------------------------------------------+\n| 2020-06-19 | a:11, b:8, c:8, d:7, e:7, f:7, g:7, h:7, i:7, j:7                                             |\n| 2020-06-18 | a:10, b:8, c:7, f:7, g:7, i:7, k:7, l:7, m:6, d:6                                             |\n| 2020-06-17 | a:9, b:8, c:8, j:8, d:7, e:7, f:7, h:7, i:7, k:7                                              |\n+------------+-----------------------------------------------------------------------------------------------+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br")])]),t("h3",{attrs:{id:"keywords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[e._v("#")]),e._v(" keywords")]),e._v(" "),t("p",[e._v("TOPN")])])}),[],!1,null,null,null);a.default=n.exports}}]);