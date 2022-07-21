(window.webpackJsonp=window.webpackJsonp||[]).push([[3361],{3990:function(e,a,s){"use strict";s.r(a);var t=s(15),l=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"lateral-view"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lateral-view"}},[e._v("#")]),e._v(" Lateral View")]),e._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),s("p",[e._v("Lateral view 语法可以搭配 Table Function，完成将一行数据扩展成多行（列转行）的需求。")]),e._v(" "),s("p",[e._v("语法：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("...\nFROM table_name\nlateral_view_ref[ lateral_view_ref ...]\n\nlateral_view_ref:\n\nLATERAL VIEW table_function(...) view_alias as col_name\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("p",[e._v("Lateral view 子句必须跟随在表名或子查询之后。可以包含多个 Lateral view 子句。"),s("code",[e._v("view_alias")]),e._v(" 是对应 Lateral View 的名称。"),s("code",[e._v("col_name")]),e._v(" 是表函数 "),s("code",[e._v("table_function")]),e._v(" 产出的列名。")]),e._v(" "),s("p",[e._v("目前支持的表函数：")]),e._v(" "),s("ol",[s("li",[s("code",[e._v("explode_split")])]),e._v(" "),s("li",[s("code",[e._v("explode_bitmap")])]),e._v(" "),s("li",[s("code",[e._v("explode_json_array")])])]),e._v(" "),s("p",[e._v("具体函数说明可参阅对应语法帮助文档。")]),e._v(" "),s("p",[e._v("table 中的数据会和各个 Lateral View 产生的结果集做笛卡尔积后返回上层。")]),e._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),s("p",[e._v("这里只给出 Lateral View 的语法示例，具体含义和产出的结果说明，可参阅对应表函数帮助文档。")]),e._v(" "),s("ol",[s("li")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("select k1, e1 from tbl1\nlateral view explode_split(v1, ',') tmp1 as e1 where e1 = \"abc\";\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("select k1, e1, e2 from tbl2\nlateral view explode_split(v1, ',') tmp1 as e1\nlateral view explode_bitmap(bitmap1) tmp2 as e2\nwhere e2 > 3;\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('select k1, e1, e2 from tbl3\nlateral view explode_json_array_int("[1,2,3]") tmp1 as e1\nlateral view explode_bitmap(bitmap_from_string("4,5,6")) tmp2 as e2;\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("ol",{attrs:{start:"4"}},[s("li")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("select k1, e1 from (select k1, bitmap_union(members) as x from tbl1 where k1=10000 group by k1)tmp1\nlateral view explode_bitmap(x) tmp2 as e1;\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("LATERAL, VIEW\n")])])])])}),[],!1,null,null,null);a.default=l.exports}}]);