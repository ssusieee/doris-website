(window.webpackJsonp=window.webpackJsonp||[]).push([[3182],{3810:function(s,a,n){"use strict";n.r(a);var t=n(15),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"not-like"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#not-like"}},[s._v("#")]),s._v(" not like")]),s._v(" "),n("h3",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" description")]),s._v(" "),n("h4",{attrs:{id:"syntax"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" syntax")]),s._v(" "),n("p",[n("code",[s._v("BOOLEAN not like(VARCHAR str, VARCHAR pattern)")])]),s._v(" "),n("p",[s._v("对字符串 str 进行模糊匹配，匹配上的则返回 false，没匹配上则返回 true。")]),s._v(" "),n("p",[s._v("like 匹配/模糊匹配，会与 % 和 _ 结合使用。")]),s._v(" "),n("p",[s._v("百分号 '%' 代表零个、一个或多个字符。")]),s._v(" "),n("p",[s._v("下划线 '_' 代表单个字符。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("'a'      // 精准匹配，和 `=` 效果一致\n'%a'     // 以a结尾的数据\n'a%'     // 以a开头的数据\n'%a%'    // 含有a的数据\n'_a_'    // 三位且中间字母是 a 的数据\n'_a'     // 两位且结尾字母是 a 的数据\n'a_'     // 两位且开头字母是 a 的数据\n'a__b'  // 四位且以字符a开头、b结尾的数据\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// table test\n+-------+\n| k1    |\n+-------+\n| b     |\n| bb    |\n| bab   |\n| a     |\n+-------+\n\n// 返回 k1 字符串中不包含 a 的数据\nmysql > select k1 from test where k1 not like '%a%';\n+-------+\n| k1    |\n+-------+\n| b     |\n| bb    |\n+-------+\n\n// 返回 k1 字符串中不等于 a 的数据\nmysql > select k1 from test where k1 not like 'a';\n+-------+\n| k1    |\n+-------+\n| b     |\n| bb    |\n| bab   |\n+-------+\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("h3",{attrs:{id:"keywords"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" keywords")]),s._v(" "),n("p",[s._v("LIKE, NOT, NOT LIKE")])])}),[],!1,null,null,null);a.default=e.exports}}]);