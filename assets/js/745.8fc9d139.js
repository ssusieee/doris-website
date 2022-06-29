(window.webpackJsonp=window.webpackJsonp||[]).push([[745],{1174:function(s,a,e){"use strict";e.r(a);var t=e(2),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"schema-change"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#schema-change"}},[s._v("#")]),s._v(" Schema Change")]),s._v(" "),e("p",[s._v("用户可以通过 Schema Change 操作来修改已存在表的 Schema。目前 Doris 支持以下几种修改:")]),s._v(" "),e("ul",[e("li",[s._v("增加、删除列")]),s._v(" "),e("li",[s._v("修改列类型")]),s._v(" "),e("li",[s._v("调整列顺序")]),s._v(" "),e("li",[s._v("增加、修改 Bloom Filter")]),s._v(" "),e("li",[s._v("增加、删除 bitmap index")])]),s._v(" "),e("p",[s._v("本文档主要介绍如何创建 Schema Change 作业，以及进行 Schema Change 的一些注意事项和常见问题。")]),s._v(" "),e("h2",{attrs:{id:"名词解释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[s._v("#")]),s._v(" 名词解释")]),s._v(" "),e("ul",[e("li",[s._v("Base Table：基表。每一个表被创建时，都对应一个基表。")]),s._v(" "),e("li",[s._v("Rollup：基于基表或者其他 Rollup 创建出来的上卷表。")]),s._v(" "),e("li",[s._v("Index：物化索引。Rollup 或 Base Table 都被称为物化索引。")]),s._v(" "),e("li",[s._v("Transaction：事务。每一个导入任务都是一个事务，每个事务有一个唯一递增的 Transaction ID。")])]),s._v(" "),e("h2",{attrs:{id:"原理介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原理介绍"}},[s._v("#")]),s._v(" 原理介绍")]),s._v(" "),e("p",[s._v("执行 Schema Change 的基本过程，是通过原 Index 的数据，生成一份新 Schema 的 Index 的数据。其中主要需要进行两部分数据转换，一是已存在的历史数据的转换，二是在 Schema Change 执行过程中，新到达的导入数据的转换。")]),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+----------+\n| Load Job |\n+----+-----+\n     |\n     | Load job generates both origin and new index data\n     |\n     |      +------------------+ +---------------+\n     |      | Origin Index     | | Origin Index  |\n     +------\x3e New Incoming Data| | History Data  |\n     |      +------------------+ +------+--------+\n     |                                  |\n     |                                  | Convert history data\n     |                                  |\n     |      +------------------+ +------v--------+\n     |      | New Index        | | New Index     |\n     +------\x3e New Incoming Data| | History Data  |\n            +------------------+ +---------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("p",[s._v("在开始转换历史数据之前，Doris 会获取一个最新的 Transaction ID。并等待这个 Transaction ID 之前的所有导入事务完成。这个 Transaction ID 成为分水岭。意思是，Doris 保证在分水岭之后的所有导入任务，都会同时为原 Index 和新 Index 生成数据。这样当历史数据转换完成后，可以保证新的 Index 中的数据是完整的。")]),s._v(" "),e("h2",{attrs:{id:"创建作业"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建作业"}},[s._v("#")]),s._v(" 创建作业")]),s._v(" "),e("p",[s._v("创建 Schema Change 的具体语法可以查看帮助 "),e("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN.html"}},[s._v("ALTER TABLE COLUMN")]),s._v(" 中 Schema Change 部分的说明。")],1),s._v(" "),e("p",[s._v("Schema Change 的创建是一个异步过程，作业提交成功后，用户需要通过 "),e("code",[s._v("SHOW ALTER TABLE COLUMN")]),s._v(" 命令来查看作业进度。")]),s._v(" "),e("h2",{attrs:{id:"查看作业"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看作业"}},[s._v("#")]),s._v(" 查看作业")]),s._v(" "),e("p",[e("code",[s._v("SHOW ALTER TABLE COLUMN")]),s._v(" 可以查看当前正在执行或已经完成的 Schema Change 作业。当一次 Schema Change 作业涉及到多个 Index 时，该命令会显示多行，每行对应一个 Index。举例如下：")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("mysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v("\\G"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n        JobId: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20021")]),s._v("\n    TableName: tbl1\n   CreateTime: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("05")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("03")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v("\n   FinishTime: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("05")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("03")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),s._v("\n    IndexName: tbl1\n      IndexId: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20022")]),s._v("\nOriginIndexId: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20017")]),s._v("\nSchemaVersion: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("792557838")]),s._v("\nTransactionId: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10023")]),s._v("\n        State: FINISHED\n          Msg: \n     Progress: "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("\n      Timeout: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("86400")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("ul",[e("li",[s._v("JobId：每个 Schema Change 作业的唯一 ID。")]),s._v(" "),e("li",[s._v("TableName：Schema Change 对应的基表的表名。")]),s._v(" "),e("li",[s._v("CreateTime：作业创建时间。")]),s._v(" "),e("li",[s._v('FinishedTime：作业结束时间。如未结束，则显示 "N/A"。')]),s._v(" "),e("li",[s._v("IndexName： 本次修改所涉及的某一个 Index 的名称。")]),s._v(" "),e("li",[s._v("IndexId：新的 Index 的唯一 ID。")]),s._v(" "),e("li",[s._v("OriginIndexId：旧的 Index 的唯一 ID。")]),s._v(" "),e("li",[s._v("SchemaVersion：以 M:N 的格式展示。其中 M 表示本次 Schema Change 变更的版本，N 表示对应的 Hash 值。每次 Schema Change，版本都会递增。")]),s._v(" "),e("li",[s._v("TransactionId：转换历史数据的分水岭 transaction ID。")]),s._v(" "),e("li",[s._v("State：作业所在阶段。\n"),e("ul",[e("li",[s._v("PENDING：作业在队列中等待被调度。")]),s._v(" "),e("li",[s._v("WAITING_TXN：等待分水岭 transaction ID 之前的导入任务完成。")]),s._v(" "),e("li",[s._v("RUNNING：历史数据转换中。")]),s._v(" "),e("li",[s._v("FINISHED：作业成功。")]),s._v(" "),e("li",[s._v("CANCELLED：作业失败。")])])]),s._v(" "),e("li",[s._v("Msg：如果作业失败，这里会显示失败信息。")]),s._v(" "),e("li",[s._v("Progress：作业进度。只有在 RUNNING 状态才会显示进度。进度是以 M/N 的形式显示。其中 N 为 Schema Change 涉及的总副本数。M 为已完成历史数据转换的副本数。")]),s._v(" "),e("li",[s._v("Timeout：作业超时时间。单位秒。")])]),s._v(" "),e("h2",{attrs:{id:"取消作业"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#取消作业"}},[s._v("#")]),s._v(" 取消作业")]),s._v(" "),e("p",[s._v("在作业状态不为 FINISHED 或 CANCELLED 的情况下，可以通过以下命令取消 Schema Change 作业：")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("CANCEL "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tbl_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"最佳实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[s._v("#")]),s._v(" 最佳实践")]),s._v(" "),e("p",[s._v("Schema Change 可以在一个作业中，对多个 Index 进行不同的修改。举例如下：")]),s._v(" "),e("p",[s._v("源 Schema：")]),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------+-------+------+------+------+---------+-------+\n| IndexName | Field | Type | Null | Key  | Default | Extra |\n+-----------+-------+------+------+------+---------+-------+\n| tbl1      | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n|           | k3    | INT  | No   | true | N/A     |       |\n|           |       |      |      |      |         |       |\n| rollup2   | k2    | INT  | No   | true | N/A     |       |\n|           |       |      |      |      |         |       |\n| rollup1   | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n+-----------+-------+------+------+------+---------+-------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("可以通过以下命令给 rollup1 和 rollup2 都加入一列 k4，并且再给 rollup2 加入一列 k5：")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" tbl1\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" k4 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" rollup1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" k4 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" rollup2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" k5 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" rollup2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("完成后，Schema 变为：")]),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------+-------+------+------+------+---------+-------+\n| IndexName | Field | Type | Null | Key  | Default | Extra |\n+-----------+-------+------+------+------+---------+-------+\n| tbl1      | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n|           | k3    | INT  | No   | true | N/A     |       |\n|           | k4    | INT  | No   | true | 1       |       |\n|           | k5    | INT  | No   | true | 1       |       |\n|           |       |      |      |      |         |       |\n| rollup2   | k2    | INT  | No   | true | N/A     |       |\n|           | k4    | INT  | No   | true | 1       |       |\n|           | k5    | INT  | No   | true | 1       |       |\n|           |       |      |      |      |         |       |\n| rollup1   | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n|           | k4    | INT  | No   | true | 1       |       |\n+-----------+-------+------+------+------+---------+-------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("p",[s._v("可以看到，Base 表 tbl1 也自动加入了 k4, k5 列。即给任意 rollup 增加的列，都会自动加入到 Base 表中。")]),s._v(" "),e("p",[s._v("同时，不允许向 Rollup 中加入 Base 表已经存在的列。如果用户需要这样做，可以重新建立一个包含新增列的 Rollup，之后再删除原 Rollup。")]),s._v(" "),e("h2",{attrs:{id:"注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("一张表在同一时间只能有一个 Schema Change 作业在运行。")])]),s._v(" "),e("li",[e("p",[s._v("Schema Change 操作不阻塞导入和查询操作。")])]),s._v(" "),e("li",[e("p",[s._v("分区列和分桶列不能修改。")])]),s._v(" "),e("li",[e("p",[s._v("如果 Schema 中有 REPLACE 方式聚合的 value 列，则不允许删除 Key 列。")]),s._v(" "),e("p",[s._v("如果删除 Key 列，Doris 无法决定 REPLACE 列的取值。")]),s._v(" "),e("p",[s._v("Unique 数据模型表的所有非 Key 列都是 REPLACE 聚合方式。")])]),s._v(" "),e("li",[e("p",[s._v("在新增聚合类型为 SUM 或者 REPLACE 的 value 列时，该列的默认值对历史数据没有含义。")]),s._v(" "),e("p",[s._v("因为历史数据已经失去明细信息，所以默认值的取值并不能实际反映聚合后的取值。")])]),s._v(" "),e("li",[e("p",[s._v("当修改列类型时，除 Type 以外的字段都需要按原列上的信息补全。")]),s._v(" "),e("p",[s._v("如修改列 "),e("code",[s._v('k1 INT SUM NULL DEFAULT "1"')]),s._v(" 类型为 BIGINT，则需执行命令如下：")]),s._v(" "),e("p",[e("code",[s._v("ALTER TABLE tbl1 MODIFY COLUMN")]),s._v("k1"),e("code",[s._v('BIGINT SUM NULL DEFAULT "1";')])]),s._v(" "),e("p",[s._v("注意，除新的列类型外，如聚合方式，Nullable 属性，以及默认值都要按照原信息补全。")])]),s._v(" "),e("li",[e("p",[s._v("不支持修改列名称、聚合类型、Nullable 属性、默认值以及列注释。")])])]),s._v(" "),e("h2",{attrs:{id:"常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("Schema Change 的执行速度")]),s._v(" "),e("p",[s._v("目前 Schema Change 执行速度按照最差效率估计约为 10MB/s。保守起见，用户可以根据这个速率来设置作业的超时时间。")])]),s._v(" "),e("li",[e("p",[s._v("提交作业报错 "),e("code",[s._v("Table xxx is not stable. ...")])]),s._v(" "),e("p",[s._v("Schema Change 只有在表数据完整且非均衡状态下才可以开始。如果表的某些数据分片副本不完整，或者某些副本正在进行均衡操作，则提交会被拒绝。")]),s._v(" "),e("p",[s._v("数据分片副本是否完整，可以通过以下命令查看：")]),s._v(" "),e("p",[e("code",[s._v('ADMIN SHOW REPLICA STATUS FROM tbl WHERE STATUS != "OK";')])]),s._v(" "),e("p",[s._v("如果有返回结果，则说明有副本有问题。通常系统会自动修复这些问题，用户也可以通过以下命令优先修复这个表：")]),s._v(" "),e("p",[e("code",[s._v("ADMIN REPAIR TABLE tbl1;")])]),s._v(" "),e("p",[s._v("用户可以通过以下命令查看是否有正在运行的均衡任务：")]),s._v(" "),e("p",[e("code",[s._v('SHOW PROC "/cluster_balance/pending_tablets";')])]),s._v(" "),e("p",[s._v("可以等待均衡任务完成，或者通过以下命令临时禁止均衡操作：")]),s._v(" "),e("p",[e("code",[s._v('ADMIN SET FRONTEND CONFIG ("disable_balance" = "true");')])])])]),s._v(" "),e("h2",{attrs:{id:"相关配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关配置"}},[s._v("#")]),s._v(" 相关配置")]),s._v(" "),e("h3",{attrs:{id:"fe-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fe-配置"}},[s._v("#")]),s._v(" FE 配置")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("alter_table_timeout_second")]),s._v("：作业默认超时时间，86400 秒。")])]),s._v(" "),e("h3",{attrs:{id:"be-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#be-配置"}},[s._v("#")]),s._v(" BE 配置")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("alter_tablet_worker_count")]),s._v("：在 BE 端用于执行历史数据转换的线程数。默认为 3。如果希望加快 Schema Change 作业的速度，可以适当调大这个参数后重启 BE。但过多的转换线程可能会导致 IO 压力增加，影响其他操作。该线程和 Rollup 作业共用。")])]),s._v(" "),e("h2",{attrs:{id:"更多帮助"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更多帮助"}},[s._v("#")]),s._v(" 更多帮助")]),s._v(" "),e("p",[s._v("关于Schema Change使用的更多详细语法及最佳实践，请参阅 "),e("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN.html"}},[s._v("ALTER TABLE COLUMN")]),s._v(" 命令手册，你也可以在 MySql 客户端命令行下输入 "),e("code",[s._v("HELP ALTER TABLE COLUMN")]),s._v("  获取更多帮助信息。")],1)])}),[],!1,null,null,null);a.default=r.exports}}]);