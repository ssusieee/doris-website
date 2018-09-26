(window.webpackJsonp=window.webpackJsonp||[]).push([[2210],{2835:function(a,e,t){"use strict";t.r(e);var s=t(15),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"show-snapshot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-snapshot"}},[a._v("#")]),a._v(" SHOW SNAPSHOT")]),a._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('该语句用于查看仓库中已存在的备份。\n语法：\n    SHOW SNAPSHOT ON `repo_name`\n    [WHERE SNAPSHOT = "snapshot" [AND TIMESTAMP = "backup_timestamp"]];\n    \n说明：\n    1. 各列含义如下：\n        Snapshot：   备份的名称\n        Timestamp：  对应备份的时间版本\n        Status：     如果备份正常，则显示 OK，否则显示错误信息\n        \n    2. 如果指定了 TIMESTAMP，则会额外显示如下信息：\n        Database：   备份数据原属的数据库名称\n        Details：    以 Json 的形式，展示整个备份的数据目录及文件结构\n')])])]),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('1. 查看仓库 example_repo 中已有的备份：\n    SHOW SNAPSHOT ON example_repo;\n    \n2. 仅查看仓库 example_repo 中名称为 backup1 的备份：\n    SHOW SNAPSHOT ON example_repo WHERE SNAPSHOT = "backup1";\n    \n2. 查看仓库 example_repo 中名称为 backup1 的备份，时间版本为 "2018-05-05-15-34-26" 的详细信息：\n    SHOW SNAPSHOT ON example_repo\n    WHERE SNAPSHOT = "backup1" AND TIMESTAMP = "2018-05-05-15-34-26";\n')])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("SHOW, SNAPSHOT\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);