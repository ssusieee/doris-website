(window.webpackJsonp=window.webpackJsonp||[]).push([[746],{1176:function(s,a,t){"use strict";t.r(a);var r=t(2),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"导入分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入分析"}},[s._v("#")]),s._v(" 导入分析")]),s._v(" "),t("p",[s._v("Doris 提供了一个图形化的命令以帮助用户更方便的分析一个具体的导入。本文介绍如何使用该功能。")]),s._v(" "),t("blockquote",[t("p",[s._v("该功能目前仅针对 Broker Load 的分析。")])]),s._v(" "),t("h2",{attrs:{id:"导入计划树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入计划树"}},[s._v("#")]),s._v(" 导入计划树")]),s._v(" "),t("p",[s._v("如果你对 Doris 的查询计划树还不太了解，请先阅读之前的文章 "),t("RouterLink",{attrs:{to:"/zh-CN/docs/advanced/best-practice/query-analysis.html"}},[s._v("DORIS/最佳实践/查询分析")]),s._v("。")],1),s._v(" "),t("p",[s._v("一个 "),t("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-way/broker-load-manual.html"}},[s._v("Broker Load")]),s._v(" 请求的执行过程，也是基于 Doris 的查询框架的。一个Broker Load 作业会根据导入请求中 DATA INFILE 子句的个数讲作业拆分成多个子任务。每个子任务可以视为是一个独立的导入执行计划。一个导入计划的组成只会有一个 Fragment，其组成如下：")],1),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("┌─────────────┐\n│OlapTableSink│\n└─────────────┘\n        │\n┌──────────────┐\n│BrokerScanNode│\n└──────────────┘\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("BrokerScanNode 主要负责去读源数据并发送给 OlapTableSink，而 OlapTableSink 负责将数据按照分区分桶规则发送到对应的节点，由对应的节点负责实际的数据写入。")]),s._v(" "),t("p",[s._v("而这个导入执行计划的 Fragment 会根据导入源文件的数量、BE节点的数量等参数，划分成一个或多个 Instance。每个 Instance 负责一部分数据导入。")]),s._v(" "),t("p",[s._v("多个子任务的执行计划是并发执行的，而一个执行计划的多个 Instance 也是并行执行。")]),s._v(" "),t("h2",{attrs:{id:"查看导入-profile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看导入-profile"}},[s._v("#")]),s._v(" 查看导入 Profile")]),s._v(" "),t("p",[s._v("用户可以通过以下命令打开会话变量 "),t("code",[s._v("is_report_success")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" is_report_success"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后提交一个 Broker Load 导入请求，并等到导入执行完成。Doris 会产生该导入的一个 Profile。Profile 包含了一个导入各个子任务、Instance 的执行详情，有助于我们分析导入瓶颈。")]),s._v(" "),t("blockquote",[t("p",[s._v("目前不支持查看未执行成功的导入作业的 Profile。")])]),s._v(" "),t("p",[s._v("我们可以通过如下命令先获取 Profile 列表：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("load")]),s._v(" profile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------+------+-----------+------+-----------+---------------------+---------------------+-----------+------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" QueryId "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("User")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" DefaultDb "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SQL")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" QueryType "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" StartTime           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" EndTime             "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" TotalTime "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" QueryState "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------+------+-----------+------+-----------+---------------------+---------------------+-----------+------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10441")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("A  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("A       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("A  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Load")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("04")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("04")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("54")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("m17s     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("A        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------+------+-----------+------+-----------+---------------------+---------------------+-----------+------------+")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("这个命令会列出当前保存的所有导入 Profile。每行对应一个导入。其中 QueryId 列为导入作业的 ID。这个 ID 也可以通过 SHOW LOAD 语句查看拿到。我们可以选择我们想看的 Profile 对应的 QueryId，查看具体情况。")]),s._v(" "),t("p",[t("strong",[s._v("查看一个Profile分为3个步骤：")])]),s._v(" "),t("ol",[t("li",[t("p",[s._v("查看子任务总览")]),s._v(" "),t("p",[s._v("通过以下命令查看有导入作业的子任务概况：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("load")]),s._v(" profile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/10441"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------------+------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" TaskId                            "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ActiveTime "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------------+------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("980014623046410")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("88")]),s._v("e260f0c43031f1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("m14s      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------------+------------+")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("如上图，表示 10441 这个导入作业总共有一个子任务，其中 ActiveTime 表示这个子任务中耗时最长的 Instance 的执行时间。")])]),s._v(" "),t("li",[t("p",[s._v("查看指定子任务的 Instance 概况")]),s._v(" "),t("p",[s._v("当我们发现一个子任务耗时较长时，可以进一步查看该子任务的各个 Instance 的执行耗时：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("load")]),s._v(" profile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/10441/980014623046410a-88e260f0c43031f1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------------+------------------+------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Instances                         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Host             "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ActiveTime "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------------+------------------+------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("980014623046410")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("88")]),s._v("e260f0c43031f2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.81")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".85")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".89")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9067")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("m7s       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("980014623046410")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("88")]),s._v("e260f0c43031f3 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.81")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".85")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".89")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9067")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("m6s       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("980014623046410")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("88")]),s._v("e260f0c43031f4 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.81")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".85")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".89")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9067")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("m10s      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("980014623046410")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("88")]),s._v("e260f0c43031f5 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.81")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".85")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".89")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9067")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("m14s      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------------+------------------+------------+")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("这里展示了 980014623046410a-88e260f0c43031f1 这个子任务的四个 Instance 耗时，并且还展示了 Instance 所在的执行节点。")])]),s._v(" "),t("li",[t("p",[s._v("查看具体 Instance")]),s._v(" "),t("p",[s._v("我们可以继续查看某一个具体的 Instance 上各个算子的详细 Profile：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("load")]),s._v(" profile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/10441/980014623046410a-88e260f0c43031f1/980014623046410a-88e260f0c43031f5"')]),s._v("\\G\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\nInstance:\n      ┌"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------------------┐")]),s._v("\n      │"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": OlapTableSink"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("                      │\n      │"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Active: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("m17s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" non"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("child: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("70.91")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        │\n      │  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" Counters:                            │\n      │      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" CloseWaitTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("m53s             │\n      │      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" ConvertBatchTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("ns            │\n      │      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" MaxAddBatchExecTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("m46s       │\n      │      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" NonBlockingSendTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("m11s       │\n      │      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" NumberBatchAdded: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("782")]),s._v("            │\n      │      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" NumberNodeChannels: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("            │\n      │      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" OpenTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("743.822")]),s._v("us              │\n      │      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" RowsFiltered: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                  │\n      │      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" RowsRead: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.599729")]),s._v("M "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1599729")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    │\n      │      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" RowsReturned: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.599729")]),s._v("M "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1599729")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("│\n      │      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" SendDataTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("s761ms           │\n      │      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" TotalAddBatchExecTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("m46s     │\n      │      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" ValidateDataTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("s802ms        │\n      └"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------------------┘")]),s._v("\n                           │\n┌"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------------------------------┐")]),s._v("\n│"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(": BROKER_SCAN_NODE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("                                │\n│"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Active: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v("s537ms"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" non"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("child: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("29.06")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                 │\n│  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" Counters:                                        │\n│      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" BytesDecompressed: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("                      │\n│      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" BytesRead: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.77")]),s._v(" GB                           │\n│      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" DecompressTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("ns                          │\n│      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" FileReadTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("34")]),s._v("s263ms                       │\n│      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" MaterializeTupleTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("45")]),s._v("s54ms             │\n│      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" NumDiskAccess: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                             │\n│      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" PeakMemoryUsage: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("33.03")]),s._v(" MB                    │\n│      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" RowsRead: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.599729")]),s._v("M "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1599729")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                │\n│      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" RowsReturned: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.599729")]),s._v("M "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1599729")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("            │\n│      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" RowsReturnedRate: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28.295")]),s._v("K "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sec               │\n│      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" TotalRawReadTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("m20s                   │\n│      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" TotalReadThroughput: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30.39858627319336")]),s._v(" MB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sec│\n│      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" WaitScannerTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v("s528ms                    │\n└"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------------------------------┘")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br")])]),t("p",[s._v("上图展示了子任务 980014623046410a-88e260f0c43031f1 中，Instance 980014623046410a-88e260f0c43031f5 的各个算子的具体 Profile。")])])]),s._v(" "),t("p",[s._v("通过以上3个步骤，我们可以逐步排查一个导入任务的执行瓶颈。")])])}),[],!1,null,null,null);a.default=e.exports}}]);