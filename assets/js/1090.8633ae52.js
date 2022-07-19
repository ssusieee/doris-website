(window.webpackJsonp=window.webpackJsonp||[]).push([[1090],{1718:function(t,s,a){"use strict";a.r(s);var e=a(15),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"create-table-like"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-table-like"}},[t._v("#")]),t._v(" CREATE-TABLE-LIKE")]),t._v(" "),a("h3",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" Name")]),t._v(" "),a("p",[t._v("CREATE TABLE LIKE")]),t._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("该语句用于创建一个表结构和另一张表完全相同的空表，同时也能够可选复制一些rollup。")]),t._v(" "),a("p",[t._v("语法：")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("EXTERNAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("table_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("table_name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH ROLLUP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("r2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("r3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("说明:")]),t._v(" "),a("ul",[a("li",[t._v("复制的表结构包括Column Definition、Partitions、Table Properties等")]),t._v(" "),a("li",[t._v("用户需要对复制的原表有"),a("code",[t._v("SELECT")]),t._v("权限")]),t._v(" "),a("li",[t._v("支持复制MySQL等外表")]),t._v(" "),a("li",[t._v("支持复制OLAP Table的rollup")])]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在test1库下创建一张表结构和table1相同的空表，表名为table2")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" test1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" test1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table1\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("在test2库下创建一张表结构和test1.table1相同的空表，表名为table2")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" test2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" test1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table1\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("在test1库下创建一张表结构和table1相同的空表，表名为table2，同时复制table1的r1，r2两个rollup")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" test1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" test1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH ROLLUP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("r2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("在test1库下创建一张表结构和table1相同的空表，表名为table2，同时复制table1的所有rollup")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" test1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" test1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH ROLLUP")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("在test2库下创建一张表结构和test1.table1相同的空表，表名为table2，同时复制table1的r1，r2两个rollup")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" test2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" test1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH ROLLUP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("r2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("在test2库下创建一张表结构和test1.table1相同的空表，表名为table2，同时复制table1的所有rollup")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" test2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" test1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH ROLLUP")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("在test1库下创建一张表结构和MySQL外表table1相同的空表，表名为table2")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" test1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" test1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table1\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])]),t._v(" "),a("h3",{attrs:{id:"keywords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[t._v("#")]),t._v(" Keywords")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("CREATE, TABLE, LIKE\n")])])]),a("h3",{attrs:{id:"best-practice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[t._v("#")]),t._v(" Best Practice")])])}),[],!1,null,null,null);s.default=n.exports}}]);