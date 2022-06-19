(window.webpackJsonp=window.webpackJsonp||[]).push([[773],{1399:function(s,t,a){"use strict";a.r(t);var n=a(15),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"订阅kafka日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#订阅kafka日志"}},[s._v("#")]),s._v(" 订阅Kafka日志")]),s._v(" "),a("p",[s._v("用户可以通过提交例行导入作业，直接订阅Kafka中的消息数据，以近实时的方式进行数据同步。")]),s._v(" "),a("p",[s._v("Doris 自身能够保证不丢不重的订阅 Kafka 中的消息，即 "),a("code",[s._v("Exactly-Once")]),s._v(" 消费语义。")]),s._v(" "),a("h2",{attrs:{id:"订阅-kafka-消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#订阅-kafka-消息"}},[s._v("#")]),s._v(" 订阅 Kafka 消息")]),s._v(" "),a("p",[s._v("订阅 Kafka 消息使用了 Doris 中的例行导入（Routine Load）功能。")]),s._v(" "),a("p",[s._v("用户首先需要创建一个"),a("strong",[s._v("例行导入作业")]),s._v("。作业会通过例行调度，不断地发送一系列的"),a("strong",[s._v("任务")]),s._v("，每个任务会消费一定数量 Kafka 中的消息。")]),s._v(" "),a("p",[s._v("请注意以下使用限制：")]),s._v(" "),a("ol",[a("li",[s._v("支持无认证的 Kafka 访问，以及通过 SSL 方式认证的 Kafka 集群。")]),s._v(" "),a("li",[s._v("支持的消息格式如下：\n"),a("ul",[a("li",[s._v("csv 文本格式。每一个 message 为一行，且行尾"),a("strong",[s._v("不包含")]),s._v("换行符。")]),s._v(" "),a("li",[s._v("Json 格式，详见 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-way/load-json-format.html"}},[s._v("导入 Json 格式数据")]),s._v("。")],1)])]),s._v(" "),a("li",[s._v("仅支持 Kafka 0.10.0.0(含) 以上版本。")])]),s._v(" "),a("h3",{attrs:{id:"访问-ssl-认证的-kafka-集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问-ssl-认证的-kafka-集群"}},[s._v("#")]),s._v(" 访问 SSL 认证的 Kafka 集群")]),s._v(" "),a("p",[s._v("例行导入功能支持无认证的 Kafka 集群，以及通过 SSL 认证的 Kafka 集群。")]),s._v(" "),a("p",[s._v("访问 SSL 认证的 Kafka 集群需要用户提供用于认证 Kafka Broker 公钥的证书文件（ca.pem）。如果 Kafka 集群同时开启了客户端认证，则还需提供客户端的公钥（client.pem）、密钥文件（client.key），以及密钥密码。这里所需的文件需要先通过 "),a("code",[s._v("CREAE FILE")]),s._v(" 命令上传到 Plao 中，并且 catalog 名称为 "),a("code",[s._v("kafka")]),s._v("。"),a("code",[s._v("CREATE FILE")]),s._v(" 命令的具体帮助可以参见 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE.html"}},[s._v("CREATE FILE")]),s._v(" 命令手册。这里给出示例：")],1),s._v(" "),a("ul",[a("li",[a("p",[s._v("上传文件")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FILE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ca.pem"')]),s._v(" PROPERTIES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://example_url/kafka-key/ca.pem"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"catalog"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FILE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"client.key"')]),s._v(" PROPERTIES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://example_urlkafka-key/client.key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"catalog"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FILE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"client.pem"')]),s._v(" PROPERTIES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://example_url/kafka-key/client.pem"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"catalog"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])]),s._v(" "),a("p",[s._v("上传完成后，可以通过 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-FILE.html"}},[s._v("SHOW FILES")]),s._v(" 命令查看已上传的文件。")],1),s._v(" "),a("h3",{attrs:{id:"创建例行导入作业"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建例行导入作业"}},[s._v("#")]),s._v(" 创建例行导入作业")]),s._v(" "),a("p",[s._v("创建例行导入任务的具体命令，请参阅 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD.html"}},[s._v("ROUTINE LOAD")]),s._v(" 命令手册。这里给出示例：")],1),s._v(" "),a("ol",[a("li",[a("p",[s._v("访问无认证的 Kafka 集群")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROUTINE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOAD")]),s._v(" demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("my_first_routine_load_job "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" test_1\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMNS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TERMINATED")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),s._v("\nPROPERTIES\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max_batch_interval"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"20"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max_batch_rows"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"300000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max_batch_size"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"209715200"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" KAFKA\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka_broker_list"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"broker1:9092,broker2:9092,broker3:9092"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka_topic"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my_topic"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"property.group.id"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"property.client.id"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"property.kafka_default_offsets"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"OFFSET_BEGINNING"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("max_batch_interval/max_batch_rows/max_batch_size")]),s._v(" 用于控制一个子任务的运行周期。一个子任务的运行周期由最长运行时间、最多消费行数和最大消费数据量共同决定。")])])]),s._v(" "),a("li",[a("p",[s._v("访问 SSL 认证的 Kafka 集群")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROUTINE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOAD")]),s._v(" demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("my_first_routine_load_job "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" test_1\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMNS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TERMINATED")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nPROPERTIES\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max_batch_interval"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"20"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max_batch_rows"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"300000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max_batch_size"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"209715200"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" KAFKA\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka_broker_list"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"broker1:9091,broker2:9091"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka_topic"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my_topic"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"property.security.protocol"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ssl"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"property.ssl.ca.location"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"FILE:ca.pem"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"property.ssl.certificate.location"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"FILE:client.pem"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"property.ssl.key.location"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"FILE:client.key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"property.ssl.key.password"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abcdefg"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"查看导入作业状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看导入作业状态"}},[s._v("#")]),s._v(" 查看导入作业状态")]),s._v(" "),a("p",[s._v("查看"),a("strong",[s._v("作业")]),s._v("状态的具体命令和示例请参阅 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD.html"}},[s._v("SHOW ROUTINE LOAD")]),s._v(" 命令文档。")],1),s._v(" "),a("p",[s._v("查看某个作业的"),a("strong",[s._v("任务")]),s._v("运行状态的具体命令和示例请参阅 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD-TASK.html"}},[s._v("SHOW ROUTINE LOAD TASK")]),s._v(" 命令文档。")],1),s._v(" "),a("p",[s._v("只能查看当前正在运行中的任务，已结束和未开始的任务无法查看。")]),s._v(" "),a("h3",{attrs:{id:"修改作业属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改作业属性"}},[s._v("#")]),s._v(" 修改作业属性")]),s._v(" "),a("p",[s._v("用户可以修改已经创建的作业的部分属性。具体说明请参阅 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/ALTER-ROUTINE-LOAD.html"}},[s._v("ALTER ROUTINE LOAD")]),s._v(" 命令手册。")],1),s._v(" "),a("h3",{attrs:{id:"作业控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作业控制"}},[s._v("#")]),s._v(" 作业控制")]),s._v(" "),a("p",[s._v("用户可以通过 "),a("code",[s._v("STOP/PAUSE/RESUME")]),s._v(" 三个命令来控制作业的停止，暂停和重启。")]),s._v(" "),a("p",[s._v("具体命令请参阅 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-ROUTINE-LOAD.html"}},[s._v("STOP ROUTINE LOAD")]),s._v("，"),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-ROUTINE-LOAD.html"}},[s._v("PAUSE ROUTINE LOAD")]),s._v("，"),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/RESUME-ROUTINE-LOAD.html"}},[s._v("RESUME ROUTINE LOAD")]),s._v(" 命令文档。")],1),s._v(" "),a("h2",{attrs:{id:"更多帮助"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多帮助"}},[s._v("#")]),s._v(" 更多帮助")]),s._v(" "),a("p",[s._v("关于 ROUTINE LOAD 的更多详细语法和最佳实践，请参阅 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD.html"}},[s._v("ROUTINE LOAD")]),s._v(" 命令手册。")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);