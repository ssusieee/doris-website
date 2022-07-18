(window.webpackJsonp=window.webpackJsonp||[]).push([[4508],{5138:function(s,a,e){"use strict";e.r(a);var t=e(15),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"show-routine-load"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-routine-load"}},[s._v("#")]),s._v(" SHOW-ROUTINE-LOAD")]),s._v(" "),e("h3",{attrs:{id:"name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[s._v("#")]),s._v(" Name")]),s._v(" "),e("p",[s._v("SHOW ROUTINE LOAD")]),s._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),e("p",[s._v("该语句用于展示 Routine Load 作业运行状态")]),s._v(" "),e("p",[s._v("语法：")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROUTINE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOAD")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" jobName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("结果说明：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("                  Id: 作业ID\n                Name: 作业名称\n          CreateTime: 作业创建时间\n           PauseTime: 最近一次作业暂停时间\n             EndTime: 作业结束时间\n              DbName: 对应数据库名称\n           TableName: 对应表名称\n               State: 作业运行状态\n      DataSourceType: 数据源类型：KAFKA\n      CurrentTaskNum: 当前子任务数量\n       JobProperties: 作业配置详情\nDataSourceProperties: 数据源配置详情\n    CustomProperties: 自定义配置\n           Statistic: 作业运行状态统计信息\n            Progress: 作业运行进度\n                 Lag: 作业延迟状态\nReasonOfStateChanged: 作业状态变更的原因\n        ErrorLogUrls: 被过滤的质量不合格的数据的查看地址\n            OtherMsg: 其他错误信息\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("ul",[e("li",[e("p",[s._v("State")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("  有以下4种State：\n  * NEED_SCHEDULE：作业等待被调度\n  * RUNNING：作业运行中\n  * PAUSED：作业被暂停\n  * STOPPED：作业已结束\n  * CANCELLED：作业已取消\n")])])])]),s._v(" "),e("li",[e("p",[s._v("Progress")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v('  对于Kafka数据源，显示每个分区当前已消费的offset。如 {"0":"2"} 表示Kafka分区0的消费进度为2。\n')])])])]),s._v(" "),e("li",[e("p",[s._v("Lag")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v('  对于Kafka数据源，显示每个分区的消费延迟。如{"0":10} 表示Kafka分区0的消费延迟为10。\n')])])])])]),s._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("展示名称为 test1 的所有例行导入作业（包括已停止或取消的作业）。结果为一行或多行。")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROUTINE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOAD")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" test1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("展示名称为 test1 的当前正在运行的例行导入作业")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROUTINE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOAD")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" test1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("显示 example_db 下，所有的例行导入作业（包括已停止或取消的作业）。结果为一行或多行。")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" example_db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROUTINE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOAD")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("显示 example_db 下，所有正在运行的例行导入作业")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" example_db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROUTINE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOAD")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("显示 example_db 下，名称为 test1 的当前正在运行的例行导入作业")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROUTINE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOAD")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" example_db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("显示 example_db 下，名称为 test1 的所有例行导入作业（包括已停止或取消的作业）。结果为一行或多行。")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROUTINE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOAD")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" example_db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("h3",{attrs:{id:"keywords"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" Keywords")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("SHOW, ROUTINE, LOAD\n")])])]),e("h3",{attrs:{id:"best-practice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[s._v("#")]),s._v(" Best Practice")])])}),[],!1,null,null,null);a.default=n.exports}}]);