(window.webpackJsonp=window.webpackJsonp||[]).push([[2761],{3391:function(a,e,t){"use strict";t.r(e);var n=t(15),l=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"show-load"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-load"}},[a._v("#")]),a._v(" SHOW LOAD")]),a._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('该语句用于展示指定的导入任务的执行情况\n语法：\n    SHOW LOAD\n    [FROM db_name]\n    [\n        WHERE \n        [LABEL [ = "your_label" | LIKE "label_matcher"]]\n        [STATE = ["PENDING"|"ETL"|"LOADING"|"FINISHED"|"CANCELLED"|]]\n    ]\n    [ORDER BY ...]\n    [LIMIT limit][OFFSET offset];\n    \n说明：\n    1) 如果不指定 db_name，使用当前默认db\n    2) 如果使用 LABEL LIKE，则会匹配导入任务的 label 包含 label_matcher 的导入任务\n    3) 如果使用 LABEL = ，则精确匹配指定的 label\n    4) 如果指定了 STATE，则匹配 LOAD 状态\n    5) 可以使用 ORDER BY 对任意列组合进行排序\n    6) 如果指定了 LIMIT，则显示 limit 条匹配记录。否则全部显示\n    7) 如果指定了 OFFSET，则从偏移量offset开始显示查询结果。默认情况下偏移量为0。\n    8) 如果是使用 broker/mini load，则 URL 列中的连接可以使用以下命令查看：\n\n        SHOW LOAD WARNINGS ON \'url\'\n')])])]),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('1. 展示默认 db 的所有导入任务\n    SHOW LOAD;\n\n2. 展示指定 db 的导入任务，label 中包含字符串 "2014_01_02"，展示最老的10个\n    SHOW LOAD FROM example_db WHERE LABEL LIKE "2014_01_02" LIMIT 10;\n    \n3. 展示指定 db 的导入任务，指定 label 为 "load_example_db_20140102" 并按 LoadStartTime 降序排序\n    SHOW LOAD FROM example_db WHERE LABEL = "load_example_db_20140102" ORDER BY LoadStartTime DESC;\n    \n4. 展示指定 db 的导入任务，指定 label 为 "load_example_db_20140102" ，state 为 "loading", 并按 LoadStartTime 降序排序\n    SHOW LOAD FROM example_db WHERE LABEL = "load_example_db_20140102" AND STATE = "loading" ORDER BY LoadStartTime DESC;\n    \n5. 展示指定 db 的导入任务 并按 LoadStartTime 降序排序,并从偏移量5开始显示10条查询结果\n    SHOW LOAD FROM example_db ORDER BY LoadStartTime DESC limit 5,10;\n    SHOW LOAD FROM example_db ORDER BY LoadStartTime DESC limit 10 offset 5;\n\n6. 小批量导入是查看导入状态的命令\n    curl --location-trusted -u {user}:{passwd} http://{hostname}:{port}/api/{database}/_load_info?label={labelname}\n')])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("SHOW,LOAD\n")])])])])}),[],!1,null,null,null);e.default=l.exports}}]);