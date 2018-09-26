(window.webpackJsonp=window.webpackJsonp||[]).push([[2320],{2945:function(s,e,a){"use strict";a.r(e);var n=a(15),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"sequence列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sequence列"}},[s._v("#")]),s._v(" sequence列")]),s._v(" "),a("p",[s._v("sequence列目前只支持Uniq模型，Uniq模型主要针对需要唯一主键的场景，可以保证主键唯一性约束，但是由于使用REPLACE聚合方式，在同一批次中导入的数据，替换顺序不做保证，详细介绍可以参考"),a("RouterLink",{attrs:{to:"/zh-CN/1.0/getting-started/data-model-rollup.html"}},[s._v("这里")]),s._v("。替换顺序无法保证则无法确定最终导入到表中的具体数据，存在了不确定性。")],1),s._v(" "),a("p",[s._v("为了解决这个问题，Doris支持了sequence列，通过用户在导入时指定sequence列，相同key列下，REPLACE聚合类型的列将按照sequence列的值进行替换，较大值可以替换较小值，反之则无法替换。该方法将顺序的确定交给了用户，由用户控制替换顺序。")]),s._v(" "),a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),a("p",[s._v("通过增加一个隐藏列"),a("code",[s._v("__DORIS_SEQUENCE_COL__")]),s._v("实现，该列的类型由用户在建表时指定，在导入时确定该列具体值，并依据该值对REPLACE列进行替换。")]),s._v(" "),a("h3",{attrs:{id:"建表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建表"}},[s._v("#")]),s._v(" 建表")]),s._v(" "),a("p",[s._v("创建Uniq表时，将按照用户指定类型自动添加一个隐藏列"),a("code",[s._v("__DORIS_SEQUENCE_COL__")])]),s._v(" "),a("h3",{attrs:{id:"导入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入"}},[s._v("#")]),s._v(" 导入")]),s._v(" "),a("p",[s._v("导入时，fe在解析的过程中将隐藏列的值设置成 "),a("code",[s._v("order by")]),s._v(" 表达式的值(broker load和routine load)，或者"),a("code",[s._v("function_column.sequence_col")]),s._v("表达式的值(stream load), value列将按照该值进行替换。隐藏列"),a("code",[s._v("__DORIS_SEQUENCE_COL__")]),s._v("的值既可以设置为数据源中一列，也可以是表结构中的一列。")]),s._v(" "),a("h3",{attrs:{id:"读取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读取"}},[s._v("#")]),s._v(" 读取")]),s._v(" "),a("p",[s._v("请求包含value列时需要需要额外读取"),a("code",[s._v("__DORIS_SEQUENCE_COL__")]),s._v("列，该列用于在相同key列下，REPLACE聚合函数替换顺序的依据，较大值可以替换较小值，反之则不能替换。")]),s._v(" "),a("h3",{attrs:{id:"cumulative-compaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cumulative-compaction"}},[s._v("#")]),s._v(" Cumulative Compaction")]),s._v(" "),a("p",[s._v("Cumulative Compaction 时和读取过程原理相同")]),s._v(" "),a("h3",{attrs:{id:"base-compaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base-compaction"}},[s._v("#")]),s._v(" Base Compaction")]),s._v(" "),a("p",[s._v("Base Compaction 时读取过程原理相同")]),s._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("p",[s._v("建表时语法方面在property中增加了一个属性，用来标识"),a("code",[s._v("__DORIS_SEQUENCE_COL__")]),s._v("的类型\n导入的语法设计方面主要是增加一个从sequence列的到其他column的映射，各个导入方式设置的将在下面介绍")]),s._v(" "),a("h4",{attrs:{id:"建表-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建表-2"}},[s._v("#")]),s._v(" 建表")]),s._v(" "),a("p",[s._v("创建Uniq表时，可以指定sequence列类型")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("PROPERTIES (\n    \"function_column.sequence_type\" = 'Date',\n);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("sequence_type用来指定sequence列的类型，可以为整型和时间类型")]),s._v(" "),a("h4",{attrs:{id:"stream-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stream-load"}},[s._v("#")]),s._v(" stream load")]),s._v(" "),a("p",[s._v("stream load 的写法是在header中的"),a("code",[s._v("function_column.sequence_col")]),s._v("字段添加隐藏列对应的source_sequence的映射， 示例")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('curl --location-trusted -u root -H "columns: k1,k2,source_sequence,v1,v2" -H "function_column.sequence_col: source_sequence" -T testData http://host:port/api/testDb/testTbl/_stream_load\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"broker-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#broker-load"}},[s._v("#")]),s._v(" broker load")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("ORDER BY")]),s._v(" 处设置隐藏列映射的source_sequence字段")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('LOAD LABEL db1.label1\n(\n    DATA INFILE("hdfs://host:port/user/data/*/test.txt")\n    INTO TABLE `tbl1`\n    COLUMNS TERMINATED BY ","\n    (k1,k2,source_sequence,v1,v2)\n    ORDER BY source_sequence\n)\nWITH BROKER \'broker\'\n(\n    "username"="user",\n    "password"="pass"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n);\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h4",{attrs:{id:"routine-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routine-load"}},[s._v("#")]),s._v(" routine load")]),s._v(" "),a("p",[s._v("映射方式同上，示例如下")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('   CREATE ROUTINE LOAD example_db.test1 ON example_tbl \n    [WITH MERGE|APPEND|DELETE]\n    COLUMNS(k1, k2, source_sequence, v1, v2),\n    WHERE k1 > 100 and k2 like "%doris%"\n    [ORDER BY source_sequence]\n    PROPERTIES\n    (\n        "desired_concurrent_number"="3",\n        "max_batch_interval" = "20",\n        "max_batch_rows" = "300000",\n        "max_batch_size" = "209715200",\n        "strict_mode" = "false"\n    )\n    FROM KAFKA\n    (\n        "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n        "kafka_topic" = "my_topic",\n        "kafka_partitions" = "0,1,2,3",\n        "kafka_offsets" = "101,0,0,200"\n    );\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h2",{attrs:{id:"启用sequence-column支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用sequence-column支持"}},[s._v("#")]),s._v(" 启用sequence column支持")]),s._v(" "),a("p",[s._v("在新建表时如果设置了"),a("code",[s._v("function_column.sequence_type")]),s._v(" ，则新建表将支持sequence column。\n对于一个不支持sequence column的表，如果想要使用该功能，可以使用如下语句：\n"),a("code",[s._v('ALTER TABLE example_db.my_table ENABLE FEATURE "SEQUENCE_LOAD" WITH PROPERTIES ("function_column.sequence_type" = "Date")')]),s._v(" 来启用。\n如果确定一个表是否支持sequence column，可以通过设置一个session variable来显示隐藏列 "),a("code",[s._v("SET show_hidden_columns=true")]),s._v(" ，之后使用"),a("code",[s._v("desc tablename")]),s._v("，如果输出中有"),a("code",[s._v("__DORIS_SEQUENCE_COL__")]),s._v(" 列则支持，如果没有则不支持")]),s._v(" "),a("h2",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[s._v("#")]),s._v(" 使用示例")]),s._v(" "),a("p",[s._v("下面以stream load 为例 展示下使用方式")]),s._v(" "),a("ol",[a("li",[s._v("创建支持sequence column的表")])]),s._v(" "),a("p",[s._v("表结构如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("MySQL > desc test_table;\n+-------------+--------------+------+-------+---------+---------+\n| Field       | Type         | Null | Key   | Default | Extra   |\n+-------------+--------------+------+-------+---------+---------+\n| user_id     | BIGINT       | No   | true  | NULL    |         |\n| date        | DATE         | No   | true  | NULL    |         |\n| group_id    | BIGINT       | No   | true  | NULL    |         |\n| modify_date | DATE         | No   | false | NULL    | REPLACE |\n| keyword     | VARCHAR(128) | No   | false | NULL    | REPLACE |\n+-------------+--------------+------+-------+---------+---------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("正常导入数据：")])]),s._v(" "),a("p",[s._v("导入如下数据")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1       2020-02-22      1       2020-02-22      a\n1       2020-02-22      1       2020-02-22      b\n1       2020-02-22      1       2020-03-05      c\n1       2020-02-22      1       2020-02-26      d\n1       2020-02-22      1       2020-02-22      e\n1       2020-02-22      1       2020-02-22      b\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("此处以stream load为例， 将sequence column映射为modify_date列")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('curl --location-trusted -u root: -H "function_column.sequence_col: modify_date" -T testData http://host:port/api/test/test_table/_stream_load\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("结果为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("MySQL > select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       1 | 2020-02-22 |        1 | 2020-03-05  | c       |\n+---------+------------+----------+-------------+---------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("在这次导入中，因sequence column的值（也就是modify_date中的值）中'2020-03-05'为最大值，所以keyword列中最终保留了c。")]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("替换顺序的保证")])]),s._v(" "),a("p",[s._v("上述步骤完成后，接着导入如下数据")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1       2020-02-22      1       2020-02-22      a\n1       2020-02-22      1       2020-02-23      b\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("查询数据")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("MySQL [test]> select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       1 | 2020-02-22 |        1 | 2020-03-05  | c       |\n+---------+------------+----------+-------------+---------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("由于新导入的数据的sequence column都小于表中已有的值，无法替换\n再尝试导入如下数据")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1       2020-02-22      1       2020-02-22      a\n1       2020-02-22      1       2020-03-23      w\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("查询数据")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("MySQL [test]> select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       1 | 2020-02-22 |        1 | 2020-03-23  | w       |\n+---------+------------+----------+-------------+---------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("此时就可以替换表中原有的数据")])])}),[],!1,null,null,null);e.default=t.exports}}]);