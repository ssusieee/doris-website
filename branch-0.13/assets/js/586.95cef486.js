(window.webpackJsonp=window.webpackJsonp||[]).push([[586],{1026:function(e,a,t){"use strict";t.r(a);var s=t(55),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"show-alter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-alter"}},[e._v("#")]),e._v(" SHOW ALTER")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("该语句用于展示当前正在进行的各类修改任务的执行情况\n语法：\n    SHOW ALTER [CLUSTER | TABLE [COLUMN | ROLLUP] [FROM db_name]];\n    \n说明：\n    TABLE COLUMN：展示修改列的 ALTER 任务\n                  支持语法[WHERE TableName|CreateTime|FinishTime|State] [ORDER BY] [LIMIT]\n    TABLE ROLLUP：展示创建或删除 ROLLUP index 的任务\n    如果不指定 db_name，使用当前默认 db\n    CLUSTER: 展示集群操作相关任务情况（仅管理员使用！待实现...）\n")])])]),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('1. 展示默认 db 的所有修改列的任务执行情况\n    SHOW ALTER TABLE COLUMN;\n\n2. 展示某个表最近一次修改列的任务执行情况\n    SHOW ALTER TABLE COLUMN WHERE TableName = "table1" ORDER BY CreateTime DESC LIMIT 1;\n\n3. 展示指定 db 的创建或删除 ROLLUP index 的任务执行情况\n    SHOW ALTER TABLE ROLLUP FROM example_db;\n    \n4. 展示集群操作相关任务（仅管理员使用！待实现...）\n    SHOW ALTER CLUSTER;\n')])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("SHOW,ALTER\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);