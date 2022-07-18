(window.webpackJsonp=window.webpackJsonp||[]).push([[3294],{3924:function(e,a,t){"use strict";t.r(a);var n=t(15),s=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"create-view"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-view"}},[e._v("#")]),e._v(" CREATE VIEW")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('该语句用于创建一个逻辑视图\n语法：\n    CREATE VIEW [IF NOT EXISTS]\n    [db_name.]view_name\n    (column1[ COMMENT "col comment"][, column2, ...])\n    AS query_stmt\n    \n说明：\n    1. 视图为逻辑视图，没有物理存储。所有在视图上的查询相当于在视图对应的子查询上进行。\n    2. query_stmt 为任意支持的 SQL\n')])])]),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('1. 在 example_db 上创建视图 example_view\n\n    CREATE VIEW example_db.example_view (k1, k2, k3, v1)\n    AS\n    SELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\n    WHERE k1 = 20160112 GROUP BY k1,k2,k3;\n    \n2. 创建一个包含 comment 的 view\n\n    CREATE VIEW example_db.example_view\n    (\n        k1 COMMENT "first key",\n        k2 COMMENT "second key",\n        k3 COMMENT "third key",\n        v1 COMMENT "first value"\n    )\n    COMMENT "my first view"\n    AS\n    SELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\n    WHERE k1 = 20160112 GROUP BY k1,k2,k3;\n')])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("CREATE,VIEW\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);