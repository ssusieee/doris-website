(window.webpackJsonp=window.webpackJsonp||[]).push([[2775],{3403:function(a,t,e){"use strict";e.r(t);var s=e(15),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"show-data-skew"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-data-skew"}},[a._v("#")]),a._v(" SHOW DATA SKEW")]),a._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("该语句用于查看表或某个分区的数据倾斜情况。\n\n语法：\n\n    SHOW DATA SKEW FROM [db_name.]tbl_name PARTITION (partition_name);\n\n说明：\n\n    1. 必须指定且仅指定一个分区。对于非分区表，分区名称同表名。\n    2. 结果将展示指定分区下，各个分桶的数据量，以及每个分桶数据量在总数据量中的占比。\n")])])]),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("1. 查看表的数据倾斜情况\n\n    SHOW DATA SKEW FROM db1.test PARTITION(p1);\n")])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("SHOW,DATA,SKEW\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);