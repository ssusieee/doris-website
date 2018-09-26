(window.webpackJsonp=window.webpackJsonp||[]).push([[2119],{2744:function(a,e,t){"use strict";t.r(e);var s=t(15),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"admin-show-replica-status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#admin-show-replica-status"}},[a._v("#")]),a._v(" ADMIN SHOW REPLICA STATUS")]),a._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('该语句用于展示一个表或分区的副本状态信息\n\n语法：\n\n    ADMIN SHOW REPLICA STATUS FROM [db_name.]tbl_name [PARTITION (p1, ...)]\n    [where_clause];\n\n    where_clause:\n        WHERE STATUS [!]= "replica_status"\n\n    replica_status:\n        OK:             replica 处于健康状态\n        DEAD:           replica 所在 Backend 不可用\n        VERSION_ERROR:  replica 数据版本有缺失\n        SCHEMA_ERROR:   replica 的 schema hash 不正确\n        MISSING:        replica 不存在\n')])])]),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('1. 查看表全部的副本状态\n\n    ADMIN SHOW REPLICA STATUS FROM db1.tbl1;\n\n2. 查看表某个分区状态为 VERSION_ERROR 的副本\n\n    ADMIN SHOW REPLICA STATUS FROM tbl1 PARTITION (p1, p2)\n    WHERE STATUS = "VERSION_ERROR";\n    \n3. 查看表所有状态不健康的副本\n\n    ADMIN SHOW REPLICA STATUS FROM tbl1\n    WHERE STATUS != "OK";\n')])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("ADMIN,SHOW,REPLICA,STATUS\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);