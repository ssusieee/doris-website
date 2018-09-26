(window.webpackJsonp=window.webpackJsonp||[]).push([[2759],{3387:function(e,t,a){"use strict";a.r(t);var n=a(15),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"delete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[e._v("#")]),e._v(" DELETE")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("该语句用于按条件删除指定 table（base index） partition 中的数据。\n该操作会同时删除和此 base index 相关的 rollup index 的数据。\n语法：\n    DELETE FROM table_name [PARTITION partition_name | PARTITIONS (p1, p2)]\n    WHERE\n    column_name1 op { value | value_list } [ AND column_name2 op { value | value_list } ...];\n    \n说明：\n    1) op 的可选类型包括：=, >, <, >=, <=, !=, in, not in\n    2) 只能指定 key 列上的条件。\n    2) 当选定的 key 列不存在于某个 rollup 中时，无法进行 delete。\n    3) 条件之间只能是“与”的关系。\n       若希望达成“或”的关系，需要将条件分写在两个 DELETE 语句中。\n    4) 如果为分区表，可以指定分区，如不指定，且会话变量 delete_without_partition 为 true，则会应用到所有分区。如果是单分区表，可以不指定。\n       \n注意：\n    该语句可能会降低执行后一段时间内的查询效率。\n    影响程度取决于语句中指定的删除条件的数量。\n    指定的条件越多，影响越大。\n")])])]),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('1. 删除 my_table partition p1 中 k1 列值为 3 的数据行\n    DELETE FROM my_table PARTITION p1\n    WHERE k1 = 3;\n    \n2. 删除 my_table partition p1 中 k1 列值大于等于 3 且 k2 列值为 "abc" 的数据行\n    DELETE FROM my_table PARTITION p1\n    WHERE k1 >= 3 AND k2 = "abc";\n\n3. 删除 my_table partition p1, p2 中 k1 列值大于等于 3 且 k2 列值为 "abc" 的数据行\n    DELETE FROM my_table PARTITIONS (p1, p2)\n    WHERE k1 >= 3 AND k2 = "abc";\n')])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("DELETE\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);