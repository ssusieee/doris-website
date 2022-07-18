(window.webpackJsonp=window.webpackJsonp||[]).push([[2874],{3504:function(s,e,t){"use strict";t.r(e);var a=t(15),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"insert-into"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#insert-into"}},[s._v("#")]),s._v(" Insert Into")]),s._v(" "),t("p",[s._v("Insert Into 语句的使用方式和 MySQL 等数据库中 Insert Into 语句的使用方式类似。但在 Doris 中，所有的数据写入都是一个独立的导入作业。所以这里将 Insert Into 也作为一种导入方式介绍。")]),s._v(" "),t("p",[s._v("主要的 Insert Into 命令包含以下两种；")]),s._v(" "),t("ul",[t("li",[s._v("INSERT INTO tbl SELECT ...")]),s._v(" "),t("li",[s._v("INSERT INTO tbl (col1, col2, ...) VALUES (1, 2, ...), (1,3, ...);")])]),s._v(" "),t("p",[s._v("其中第二种命令仅用于 Demo，不要使用在测试或生产环境中。")]),s._v(" "),t("h2",{attrs:{id:"基本操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本操作"}},[s._v("#")]),s._v(" 基本操作")]),s._v(" "),t("h3",{attrs:{id:"创建导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建导入"}},[s._v("#")]),s._v(" 创建导入")]),s._v(" "),t("p",[s._v("Insert Into 命令需要通过 MySQL 协议提交，创建导入请求会同步返回导入结果。")]),s._v(" "),t("p",[s._v("语法：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("INSERT INTO table_name [partition_info] [WITH LABEL label] [col_list] [query_stmt] [VALUES];\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("示例：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('INSERT INTO tbl2 WITH LABEL label1 SELECT * FROM tbl3;\nINSERT INTO tbl1 VALUES ("qweasdzxcqweasdzxc"), ("a");\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("注意")])]),s._v(" "),t("p",[s._v("当需要使用 "),t("code",[s._v("CTE(Common Table Expressions)")]),s._v(" 作为 insert 操作中的查询部分时，必须指定 "),t("code",[s._v("WITH LABEL")]),s._v(" 和 column list 部分。示例")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("INSERT INTO tbl1 WITH LABEL label1\nWITH cte1 AS (SELECT * FROM tbl1), cte2 AS (SELECT * FROM tbl2)\nSELECT k1 FROM cte1 JOIN cte2 WHERE cte1.k1 = 1;\n\n\nINSERT INTO tbl1 (k1)\nWITH cte1 AS (SELECT * FROM tbl1), cte2 AS (SELECT * FROM tbl2)\nSELECT k1 FROM cte1 JOIN cte2 WHERE cte1.k1 = 1;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("下面主要介绍创建导入语句中使用到的参数：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("partition_info")]),s._v(" "),t("p",[s._v("导入表的目标分区，如果指定目标分区，则只会导入符合目标分区的数据。如果没有指定，则默认值为这张表的所有分区。")])]),s._v(" "),t("li",[t("p",[s._v("col_list")]),s._v(" "),t("p",[s._v("导入表的目标列，可以以任意的顺序存在。如果没有指定目标列，那么默认值是这张表的所有列。如果待表中的某个列没有存在目标列中，那么这个列需要有默认值，否则 Insert Into 就会执行失败。")]),s._v(" "),t("p",[s._v("如果查询语句的结果列类型与目标列的类型不一致，那么会调用隐式类型转化，如果不能够进行转化，那么 Insert Into 语句会报语法解析错误。")])]),s._v(" "),t("li",[t("p",[s._v("query_stmt")]),s._v(" "),t("p",[s._v("通过一个查询语句，将查询语句的结果导入到 Doris 系统中的其他表。查询语句支持任意 Doris 支持的 SQL 查询语法。")])]),s._v(" "),t("li",[t("p",[s._v("VALUES")]),s._v(" "),t("p",[s._v("用户可以通过 VALUES 语法插入一条或者多条数据。")]),s._v(" "),t("p",[t("em",[s._v("注意：VALUES 方式仅适用于导入几条数据作为导入 DEMO 的情况，完全不适用于任何测试和生产环境。Doris 系统本身也不适合单条数据导入的场景。建议使用 INSERT INTO SELECT 的方式进行批量导入。")])])])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("WITH LABEL")]),s._v(" "),t("p",[s._v("INSERT 操作作为一个导入任务，也可以指定一个 label。如果不指定，则系统会自动指定一个 UUID 作为 label。")]),s._v(" "),t("p",[s._v("该功能需要 0.11+ 版本。")]),s._v(" "),t("p",[t("em",[s._v("注意：建议指定 Label 而不是由系统自动分配。如果由系统自动分配，但在 Insert Into 语句执行过程中，因网络错误导致连接断开等，则无法得知 Insert Into 是否成功。而如果指定 Label，则可以再次通过 Label 查看任务结果。")])])])]),s._v(" "),t("h3",{attrs:{id:"导入结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入结果"}},[s._v("#")]),s._v(" 导入结果")]),s._v(" "),t("p",[s._v("Insert Into 本身就是一个 SQL 命令，其返回结果会根据执行结果的不同，分为以下几种：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("结果集为空")]),s._v(" "),t("p",[s._v("如果 insert 对应 select 语句的结果集为空，则返回如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> insert into tbl1 select * from empty_tbl;\nQuery OK, 0 rows affected (0.02 sec)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("code",[s._v("Query OK")]),s._v(" 表示执行成功。"),t("code",[s._v("0 rows affected")]),s._v(" 表示没有数据被导入。")])]),s._v(" "),t("li",[t("p",[s._v("结果集不为空")]),s._v(" "),t("p",[s._v("在结果集不为空的情况下。返回结果分为如下几种情况：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("Insert 执行成功并可见：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> insert into tbl1 select * from tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label':'insert_8510c568-9eda-4173-9e36-6adc7d35291c', 'status':'visible', 'txnId':'4005'}\n\nmysql> insert into tbl1 with label my_label1 select * from tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'visible', 'txnId':'4005'}\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[t("code",[s._v("Query OK")]),s._v(" 表示执行成功。"),t("code",[s._v("4 rows affected")]),s._v(" 表示总共有4行数据被导入。"),t("code",[s._v("2 warnings")]),s._v(" 表示被过滤的行数。")]),s._v(" "),t("p",[s._v("同时会返回一个 json 串：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("{'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n{'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n{'label':'my_label1', 'status':'visible', 'txnId':'4005', 'err':'some other error'}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("code",[s._v("label")]),s._v(" 为用户指定的 label 或自动生成的 label。Label 是该 Insert Into 导入作业的标识。每个导入作业，都有一个在单 database 内部唯一的 Label。")]),s._v(" "),t("p",[t("code",[s._v("status")]),s._v(" 表示导入数据是否可见。如果可见，显示 "),t("code",[s._v("visible")]),s._v("，如果不可见，显示 "),t("code",[s._v("committed")]),s._v("。")]),s._v(" "),t("p",[t("code",[s._v("txnId")]),s._v(" 为这个 insert 对应的导入事务的 id。")]),s._v(" "),t("p",[t("code",[s._v("err")]),s._v(" 字段会显示一些其他非预期错误。")]),s._v(" "),t("p",[s._v("当需要查看被过滤的行时，用户可以通过如下语句")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('show load where label="xxx";\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("返回结果中的 URL 可以用于查询错误的数据，具体见后面 "),t("strong",[s._v("查看错误行")]),s._v(" 小结。")]),s._v(" "),t("p",[t("strong",[s._v("数据不可见是一个临时状态，这批数据最终是一定可见的")])]),s._v(" "),t("p",[s._v("可以通过如下语句查看这批数据的可见状态：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("show transaction where id=4005;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("返回结果中的 "),t("code",[s._v("TransactionStatus")]),s._v(" 列如果为 "),t("code",[s._v("visible")]),s._v("，则表述数据可见。")])]),s._v(" "),t("li",[t("p",[s._v("Insert 执行失败")]),s._v(" "),t("p",[s._v("执行失败表示没有任何数据被成功导入，并返回如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('mysql> insert into tbl1 select * from tbl2 where k1 = "a";\nERROR 1064 (HY000): all partitions have no load data. url: http://10.74.167.16:8042/api/_load_error_log?file=__shard_2/error_log_insert_stmt_ba8bb9e158e4879-ae8de8507c0bf8a2_ba8bb9e158e4879_ae8de8507c0bf8a2\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("其中 "),t("code",[s._v("ERROR 1064 (HY000): all partitions have no load data")]),s._v(" 显示失败原因。后面的 url 可以用于查询错误的数据，具体见后面 "),t("strong",[s._v("查看错误行")]),s._v(" 小结。")])])])])]),s._v(" "),t("p",[t("strong",[s._v("综上，对于 insert 操作返回结果的正确处理逻辑应为：")])]),s._v(" "),t("ol",[t("li",[s._v("如果返回结果为 "),t("code",[s._v("ERROR 1064 (HY000)")]),s._v("，则表示导入失败。")]),s._v(" "),t("li",[s._v("如果返回结果为 "),t("code",[s._v("Query OK")]),s._v("，则表示执行成功。\n"),t("ol",[t("li",[s._v("如果 "),t("code",[s._v("rows affected")]),s._v(" 为 0，表示结果集为空，没有数据被导入。")]),s._v(" "),t("li",[s._v("如果 "),t("code",[s._v("rows affected")]),s._v(" 大于 0：\n"),t("ol",[t("li",[s._v("如果 "),t("code",[s._v("status")]),s._v(" 为 "),t("code",[s._v("committed")]),s._v("，表示数据还不可见。需要通过 "),t("code",[s._v("show transaction")]),s._v(" 语句查看状态直到 "),t("code",[s._v("visible")])]),s._v(" "),t("li",[s._v("如果 "),t("code",[s._v("status")]),s._v(" 为 "),t("code",[s._v("visible")]),s._v("，表示数据导入成功。")])])]),s._v(" "),t("li",[s._v("如果 "),t("code",[s._v("warnings")]),s._v(" 大于 0，表示有数据被过滤，可以通过 "),t("code",[s._v("show load")]),s._v(" 语句获取 url 查看被过滤的行。")])])])]),s._v(" "),t("h3",{attrs:{id:"show-last-insert"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-last-insert"}},[s._v("#")]),s._v(" SHOW LAST INSERT")]),s._v(" "),t("p",[s._v("在上一小节中我们介绍了如何根据 insert 操作的返回结果进行后续处理。但一些语言的mysql类库中很难获取返回结果的中的 json 字符串。因此，Doris 还提供了 "),t("code",[s._v("SHOW LAST INSERT")]),s._v(" 命令来显式的获取最近一次 insert 操作的结果。")]),s._v(" "),t("p",[s._v("当执行完一个 insert 操作后，可以在同一 session 连接中执行 "),t("code",[s._v("SHOW LAST INSERT")]),s._v("。该命令会返回最近一次insert 操作的结果，如：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> show last insert\\G\n*************************** 1. row ***************************\n    TransactionId: 64067\n            Label: insert_ba8f33aea9544866-8ed77e2844d0cc9b\n         Database: default_cluster:db1\n            Table: t1\nTransactionStatus: VISIBLE\n       LoadedRows: 2\n     FilteredRows: 0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("该命令会返回 insert 以及对应事务的详细信息。因此，用户可以在每次执行完 insert 操作后，继续执行 "),t("code",[s._v("show last insert")]),s._v(" 命令来获取 insert 的结果。")]),s._v(" "),t("blockquote",[t("p",[s._v("注意：该命令只会返回在同一 session 连接中，最近一次 insert 操作的结果。如果连接断开或更换了新的连接，则将返回空集。")])]),s._v(" "),t("h2",{attrs:{id:"相关系统配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关系统配置"}},[s._v("#")]),s._v(" 相关系统配置")]),s._v(" "),t("h3",{attrs:{id:"fe-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fe-配置"}},[s._v("#")]),s._v(" FE 配置")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("timeout")]),s._v(" "),t("p",[s._v("导入任务的超时时间(以秒为单位)，导入任务在设定的 timeout 时间内未完成则会被系统取消，变成 CANCELLED。")]),s._v(" "),t("p",[s._v("目前 Insert Into 并不支持自定义导入的 timeout 时间，所有 Insert Into 导入的超时时间是统一的，默认的 timeout 时间为1小时。如果导入的源文件无法再规定时间内完成导入，则需要调整 FE 的参数"),t("code",[s._v("insert_load_default_timeout_second")]),s._v("。")]),s._v(" "),t("p",[s._v("同时 Insert Into 语句收到 Session 变量 "),t("code",[s._v("query_timeout")]),s._v(" 的限制。可以通过 "),t("code",[s._v("SET query_timeout = xxx;")]),s._v(" 来增加超时时间，单位是秒。")])])]),s._v(" "),t("h3",{attrs:{id:"session-变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#session-变量"}},[s._v("#")]),s._v(" Session 变量")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("enable_insert_strict")]),s._v(" "),t("p",[s._v("Insert Into 导入本身不能控制导入可容忍的错误率。用户只能通过 "),t("code",[s._v("enable_insert_strict")]),s._v(" 这个 Session 参数用来控制。")]),s._v(" "),t("p",[s._v("当该参数设置为 false 时，表示至少有一条数据被正确导入，则返回成功。如果有失败数据，则还会返回一个 Label。")]),s._v(" "),t("p",[s._v("当该参数设置为 true 时，表示如果有一条数据错误，则导入失败。")]),s._v(" "),t("p",[s._v("默认为 false。可通过 "),t("code",[s._v("SET enable_insert_strict = true;")]),s._v(" 来设置。")])]),s._v(" "),t("li",[t("p",[s._v("query_timeout")]),s._v(" "),t("p",[s._v("Insert Into 本身也是一个 SQL 命令，因此 Insert Into 语句也受到 Session 变量 "),t("code",[s._v("query_timeout")]),s._v(" 的限制。可以通过 "),t("code",[s._v("SET query_timeout = xxx;")]),s._v(" 来增加超时时间，单位是秒。")])])]),s._v(" "),t("h2",{attrs:{id:"最佳实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[s._v("#")]),s._v(" 最佳实践")]),s._v(" "),t("h3",{attrs:{id:"应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[s._v("#")]),s._v(" 应用场景")]),s._v(" "),t("ol",[t("li",[s._v("用户希望仅导入几条假数据，验证一下 Doris 系统的功能。此时适合使用 INSERT INTO VALUES 的语法。")]),s._v(" "),t("li",[s._v("用户希望将已经在 Doris 表中的数据进行 ETL 转换并导入到一个新的 Doris 表中，此时适合使用 INSERT INTO SELECT 语法。")]),s._v(" "),t("li",[s._v("用户可以创建一种外部表，如 MySQL 外部表映射一张 MySQL 系统中的表。或者创建 Broker 外部表来映射 HDFS 上的数据文件。然后通过 INSERT INTO SELECT 语法将外部表中的数据导入到 Doris 表中存储。")])]),s._v(" "),t("h3",{attrs:{id:"数据量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据量"}},[s._v("#")]),s._v(" 数据量")]),s._v(" "),t("p",[s._v("Insert Into 对数据量没有限制，大数据量导入也可以支持。但 Insert Into 有默认的超时时间，用户预估的导入数据量过大，就需要修改系统的 Insert Into 导入超时时间。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("导入数据量 = 36G 约≤ 3600s * 10M/s \n其中 10M/s 是最大导入限速，用户需要根据当前集群情况计算出平均的导入速度来替换公式中的 10M/s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"完整例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完整例子"}},[s._v("#")]),s._v(" 完整例子")]),s._v(" "),t("p",[s._v("用户有一张表 store_sales 在数据库 sales 中，用户又创建了一张表叫 bj_store_sales 也在数据库 sales 中，用户希望将 store_sales 中销售记录在 bj 的数据导入到这张新建的表 bj_store_sales 中。导入的数据量约为：10G。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("store_sales schema：\n(id, total, user_id, sale_timestamp, region)\n\nbj_store_sales schema:\n(id, total, user_id, sale_timestamp)\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("集群情况：用户当前集群的平均导入速度约为 5M/s")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Step1: 判断是否要修改 Insert Into 的默认超时时间")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("计算导入的大概时间\n10G / 5M/s = 2000s\n\n修改 FE 配置\ninsert_load_default_timeout_second = 2000\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("Step2：创建导入任务")]),s._v(" "),t("p",[s._v("由于用户是希望将一张表中的数据做 ETL 并导入到目标表中，所以应该使用 Insert into query_stmt 方式导入。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('INSERT INTO bj_store_sales WITH LABEL `label` SELECT id, total, user_id, sale_timestamp FROM store_sales where region = "bj";\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("查看错误行")]),s._v(" "),t("p",[s._v("由于 Insert Into 无法控制错误率，只能通过 "),t("code",[s._v("enable_insert_strict")]),s._v(" 设置为完全容忍错误数据或完全忽略错误数据。因此如果 "),t("code",[s._v("enable_insert_strict")]),s._v(" 设为 true，则 Insert Into 可能会失败。而如果 "),t("code",[s._v("enable_insert_strict")]),s._v(" 设为 false，则可能出现仅导入了部分合格数据的情况。")]),s._v(" "),t("p",[s._v("当返回结果中提供了 url 字段时，可以通过以下命令查看错误行：")]),s._v(" "),t("p",[t("code",[s._v('SHOW LOAD WARNINGS ON "url";')])]),s._v(" "),t("p",[s._v("示例：")]),s._v(" "),t("p",[t("code",[s._v('SHOW LOAD WARNINGS ON "http://ip:port/api/_load_error_log?file=__shard_13/error_log_insert_stmt_d2cac0a0a16d482d-9041c949a4b71605_d2cac0a0a16d482d_9041c949a4b71605";')])]),s._v(" "),t("p",[s._v("错误的原因通常如：源数据列长度超过目的数据列长度、列类型不匹配、分区不匹配、列顺序不匹配等等。")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);