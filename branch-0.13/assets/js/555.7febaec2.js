(window.webpackJsonp=window.webpackJsonp||[]).push([[555],{995:function(e,a,t){"use strict";t.r(a);var s=t(55),l=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"create-materialized-view"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-materialized-view"}},[e._v("#")]),e._v(" CREATE MATERIALIZED VIEW")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("该语句用于创建物化视图。\n")])])]),t("p",[e._v("说明:\n异步语法，调用成功后仅表示创建物化视图的任务提交成功，用户需要先通过 "),t("code",[e._v("show alter table rollup")]),e._v(" 来查看物化视图的创建进度。\n在显示 FINISHED 后既可通过 "),t("code",[e._v("desc [table_name] all")]),e._v(" 命令来查看物化视图的 schema 了。")]),e._v(" "),t("p",[e._v("语法:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('```\n\nCREATE MATERIALIZED VIEW [MV name] as [query]\n[PROPERTIES ("key" = "value")]\n\n```\n')])])]),t("ol",[t("li",[t("p",[e._v("MV name")]),e._v(" "),t("p",[e._v("物化视图的名称，必填项。")]),e._v(" "),t("p",[e._v("相同表的物化视图名称不可重复。")])]),e._v(" "),t("li",[t("p",[e._v("query")]),e._v(" "),t("p",[e._v("用于构建物化视图的查询语句，查询语句的结果既物化视图的数据。目前支持的 query 格式为:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\nSELECT select_expr[, select_expr ...]\nFROM [Base view name]\nGROUP BY column_name[, column_name ...]\nORDER BY column_name[, column_name ...]\n\n语法和查询语句语法一致。\n\n")])])]),t("p",[e._v("select_expr: 物化视图的 schema 中所有的列。\n+ 仅支持不带表达式计算的单列，聚合列。\n+ 其中聚合函数目前仅支持 SUM, MIN, MAX 三种，且聚合函数的参数只能是不带表达式计算的单列。\n+ 至少包含一个单列。\n+ 所有涉及到的列，均只能出现一次。")]),e._v(" "),t("p",[e._v("base view name: 物化视图的原始表名，必填项。\n+ 必须是单表，且非子查询")]),e._v(" "),t("p",[e._v("group by: 物化视图的分组列，选填项。\n+ 不填则数据不进行分组。")]),e._v(" "),t("p",[e._v("order by: 物化视图的排序列，选填项。\n+ 排序列的声明顺序必须和 select_expr 中列声明顺序一致。\n+ 如果不声明 order by，则根据规则自动补充排序列。\n如果物化视图是聚合类型，则所有的分组列自动补充为排序列。\n如果物化视图是非聚合类型，则前 36 个字节自动补充为排序列。如果自动补充的排序个数小于3个，则前三个作为排序列。\n+ 如果 query 中包含分组列的话，则排序列必须和分组列一致。")])]),e._v(" "),t("li",[t("p",[e._v("properties")]),e._v(" "),t("p",[e._v("声明物化视图的一些配置，选填项。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('\nPROPERTIES ("key" = "value", "key" = "value" ...)\n\n')])])]),t("p",[e._v("以下几个配置，均可声明在此处：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(" short_key: 排序列的个数。\n timeout: 物化视图构建的超时时间。\n")])])])])]),e._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("p",[e._v("Base 表结构为")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mysql> desc duplicate_table;\n+-------+--------+------+------+---------+-------+\n| Field | Type   | Null | Key  | Default | Extra |\n+-------+--------+------+------+---------+-------+\n| k1    | INT    | Yes  | true | N/A     |       |\n| k2    | INT    | Yes  | true | N/A     |       |\n| k3    | BIGINT | Yes  | true | N/A     |       |\n| k4    | BIGINT | Yes  | true | N/A     |       |\n+-------+--------+------+------+---------+-------+\n")])])]),t("ol",[t("li",[t("p",[e._v("创建一个仅包含原始表 （k1, k2）列的物化视图")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("create materialized view k1_k2 as\n    select k1, k2 from duplicate_table;\n")])])]),t("p",[e._v("物化视图的 schema 如下图，物化视图仅包含两列 k1, k2 且不带任何聚合")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+-----------------+-------+--------+------+------+---------+-------+\n| IndexName       | Field | Type   | Null | Key  | Default | Extra |\n+-----------------+-------+--------+------+------+---------+-------+\n| k1_k2           | k1    | INT    | Yes  | true | N/A     |       |\n|                 | k2    | INT    | Yes  | true | N/A     |       |\n+-----------------+-------+--------+------+------+---------+-------+\n")])])])]),e._v(" "),t("li",[t("p",[e._v("创建一个以 k2 为排序列的物化视图")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("create materialized view k2_order as\n    select k2, k1 from duplicate_table order by k2;\n")])])]),t("p",[e._v("物化视图的 schema 如下图，物化视图仅包含两列 k2, k1，其中 k2 列为排序列，不带任何聚合。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+-----------------+-------+--------+------+-------+---------+-------+\n| IndexName       | Field | Type   | Null | Key   | Default | Extra |\n+-----------------+-------+--------+------+-------+---------+-------+\n| k2_order        | k2    | INT    | Yes  | true  | N/A     |       |\n|                 | k1    | INT    | Yes  | false | N/A     | NONE  |\n+-----------------+-------+--------+------+-------+---------+-------+\n")])])])]),e._v(" "),t("li",[t("p",[e._v("创建一个以 k1, k2 分组，k3 列为 SUM 聚合的物化视图")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("create materialized view k1_k2_sumk3 as\n    select k1, k2, sum(k3) from duplicate_table group by k1, k2;\n")])])]),t("p",[e._v("物化视图的 schema 如下图，物化视图包含两列 k1, k2，sum(k3) 其中 k1, k2 为分组列，sum(k3) 为根据 k1, k2 分组后的 k3 列的求和值。")]),e._v(" "),t("p",[e._v("由于物化视图没有声明排序列，且物化视图带聚合数据，系统默认补充分组列 k1, k2 为排序列。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+-----------------+-------+--------+------+-------+---------+-------+\n| IndexName       | Field | Type   | Null | Key   | Default | Extra |\n+-----------------+-------+--------+------+-------+---------+-------+\n| k1_k2_sumk3     | k1    | INT    | Yes  | true  | N/A     |       |\n|                 | k2    | INT    | Yes  | true  | N/A     |       |\n|                 | k3    | BIGINT | Yes  | false | N/A     | SUM   |\n+-----------------+-------+--------+------+-------+---------+-------+\n")])])])]),e._v(" "),t("li",[t("p",[e._v("创建一个去除重复行的物化视图")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("create materialized view deduplicate as\n    select k1, k2, k3, k4 from duplicate_table group by k1, k2, k3, k4;\n")])])]),t("p",[e._v("物化视图 schema 如下图，物化视图包含 k1, k2, k3, k4列，且不存在重复行。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+-----------------+-------+--------+------+-------+---------+-------+\n| IndexName       | Field | Type   | Null | Key   | Default | Extra |\n+-----------------+-------+--------+------+-------+---------+-------+\n| deduplicate     | k1    | INT    | Yes  | true  | N/A     |       |\n|                 | k2    | INT    | Yes  | true  | N/A     |       |\n|                 | k3    | BIGINT | Yes  | true  | N/A     |       |\n|                 | k4    | BIGINT | Yes  | true  | N/A     |       |\n+-----------------+-------+--------+------+-------+---------+-------+\n\n")])])])]),e._v(" "),t("li",[t("p",[e._v("创建一个不声明排序列的非聚合型物化视图")]),e._v(" "),t("p",[e._v("all_type_table 的 schema 如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+-------+--------------+------+-------+---------+-------+\n| Field | Type         | Null | Key   | Default | Extra |\n+-------+--------------+------+-------+---------+-------+\n| k1    | TINYINT      | Yes  | true  | N/A     |       |\n| k2    | SMALLINT     | Yes  | true  | N/A     |       |\n| k3    | INT          | Yes  | true  | N/A     |       |\n| k4    | BIGINT       | Yes  | true  | N/A     |       |\n| k5    | DECIMAL(9,0) | Yes  | true  | N/A     |       |\n| k6    | DOUBLE       | Yes  | false | N/A     | NONE  |\n| k7    | VARCHAR(20)  | Yes  | false | N/A     | NONE  |\n+-------+--------------+------+-------+---------+-------+\n")])])]),t("p",[e._v("物化视图包含 k3, k4, k5, k6, k7 列，且不声明排序列，则创建语句如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("create materialized view mv_1 as\n    select k3, k4, k5, k6, k7 from all_type_table;\n")])])]),t("p",[e._v("系统默认补充的排序列为 k3, k4, k5 三列。这三列类型的字节数之和为 4(INT) + 8(BIGINT) + 16(DECIMAL) = 28 < 36。所以补充的是这三列作为排序列。\n物化视图的 schema 如下，可以看到其中 k3, k4, k5 列的 key 字段为 true，也就是排序列。k6, k7 列的 key 字段为 false，也就是非排序列。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+----------------+-------+--------------+------+-------+---------+-------+\n| IndexName      | Field | Type         | Null | Key   | Default | Extra |\n+----------------+-------+--------------+------+-------+---------+-------+\n| mv_1           | k3    | INT          | Yes  | true  | N/A     |       |\n|                | k4    | BIGINT       | Yes  | true  | N/A     |       |\n|                | k5    | DECIMAL(9,0) | Yes  | true  | N/A     |       |\n|                | k6    | DOUBLE       | Yes  | false | N/A     | NONE  |\n|                | k7    | VARCHAR(20)  | Yes  | false | N/A     | NONE  |\n+----------------+-------+--------------+------+-------+---------+-------+\n")])])])])]),e._v(" "),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("CREATE, MATERIALIZED, VIEW\n")])])])])}),[],!1,null,null,null);a.default=l.exports}}]);