(window.webpackJsonp=window.webpackJsonp||[]).push([[2246],{2873:function(s,a,t){"use strict";t.r(a);var e=t(15),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"show-alter-table-materialized-view"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-alter-table-materialized-view"}},[s._v("#")]),s._v(" SHOW ALTER TABLE MATERIALIZED VIEW")]),s._v(" "),t("h3",{attrs:{id:"name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[s._v("#")]),s._v(" Name")]),s._v(" "),t("p",[s._v("SHOW ALTER TABLE MATERIALIZED VIEW")]),s._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),t("p",[s._v("This command is used to view the execution of the Create Materialized View job submitted through the "),t("RouterLink",{attrs:{to:"/docs/sql-manual/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW.html"}},[s._v("CREATE-MATERIALIZED-VIEW")]),s._v(" statement.")],1),s._v(" "),t("blockquote",[t("p",[s._v("This statement is equivalent to "),t("code",[s._v("SHOW ALTER TABLE ROLLUP")]),s._v(";")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" MATERIALIZED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OFFSET")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[s._v("database: View jobs under the specified database. If not specified, the current database is used.")]),s._v(" "),t("li",[s._v("WHERE: You can filter the result column, currently only the following columns are supported:\n"),t("ul",[t("li",[s._v("TableName: Only equal value filtering is supported.")]),s._v(" "),t("li",[s._v("State: Only supports equivalent filtering.")]),s._v(" "),t("li",[s._v("Createtime/FinishTime: Support =, >=, <=, >, <, !=")])])]),s._v(" "),t("li",[s._v("ORDER BY: The result set can be sorted by any column.")]),s._v(" "),t("li",[s._v("LIMIT: Use ORDER BY to perform page-turning query.")])]),s._v(" "),t("p",[s._v("Return result description:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" materialized "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("view")]),s._v("\\G\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n          JobId: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11001")]),s._v("\n      TableName: tbl1\n     CreateTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v("\n     FinishTime: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("\n  BaseIndexName: tbl1\nRollupIndexName: r1\n       RollupId: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11002")]),s._v("\n  TransactionId: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5070")]),s._v("\n          State: WAITING_TXN\n            Msg:\n       Progress: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("\n        Timeout: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("86400")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("ul",[t("li",[t("p",[t("code",[s._v("JobId")]),s._v(": Job unique ID.")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("TableName")]),s._v(": base table name")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("CreateTime/FinishTime")]),s._v(": Job creation time and end time.")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("BaseIndexName/RollupIndexName")]),s._v(": Base table name and materialized view name.")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("RollupId")]),s._v(": The unique ID of the materialized view.")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("TransactionId")]),s._v(": See the description of the State field.")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("State")]),s._v(": job status.")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("PENDING: The job is in preparation.")])]),s._v(" "),t("li",[t("p",[s._v("WAITING_TXN:")]),s._v(" "),t("p",[s._v("Before officially starting to generate materialized view data, it will wait for the current running import transaction on this table to complete. And the "),t("code",[s._v("TransactionId")]),s._v(" field is the current waiting transaction ID. When all previous imports for this ID are complete, the job will actually start.")])]),s._v(" "),t("li",[t("p",[s._v("RUNNING: The job is running.")])]),s._v(" "),t("li",[t("p",[s._v("FINISHED: The job ran successfully.")])]),s._v(" "),t("li",[t("p",[s._v("CANCELLED: The job failed to run.")])])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("Msg")]),s._v(": error message")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("Progress")]),s._v(": job progress. The progress here means "),t("code",[s._v("completed tablets/total tablets")]),s._v(". Materialized views are created at tablet granularity.")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("Timeout")]),s._v(": Job timeout, in seconds.")])])]),s._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("View the materialized view jobs under the database example_db")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" MATERIALIZED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" example_db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"keywords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" Keywords")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("SHOW, ALTER, TABLE, MATERIALIZED, VIEW\n")])])]),t("h3",{attrs:{id:"best-practice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[s._v("#")]),s._v(" Best Practice")])])}),[],!1,null,null,null);a.default=r.exports}}]);