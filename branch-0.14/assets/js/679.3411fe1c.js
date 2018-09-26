(window.webpackJsonp=window.webpackJsonp||[]).push([[679],{1119:function(n,t,a){"use strict";a.r(t);var e=a(55),l=Object(e.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load"}},[n._v("#")]),n._v(" LOAD")]),n._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[n._v("#")]),n._v(" description")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("Palo 目前支持以下4种导入方式：\n\n1. Hadoop Load：基于 MR 进行 ETL 的导入。\n2. Broker Load：使用 broker 进行进行数据导入。\n3. Mini Load：通过 http 协议上传文件进行批量数据导入。\n4. Stream Load：通过 http 协议进行流式数据导入。\n\n本帮助主要描述第一种导入方式，即 Hadoop Load 相关帮助信息。其余导入方式可以使用以下命令查看帮助：\n\n!!!该导入方式可能在后续某个版本即不再支持，建议使用其他导入方式进行数据导入。!!!\n\n1. help broker load;\n2. help mini load;\n3. help stream load;\n\nHadoop Load 仅适用于百度内部环境。公有云、私有云以及开源环境无法使用这种导入方式。\n该导入方式必须设置用于 ETL 的 Hadoop 计算队列，设置方式可以通过 help set property 命令查看帮助。\n")])])]),a("p",[n._v("语法：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('LOAD LABEL load_label\n(\ndata_desc1[, data_desc2, ...]\n)\n[opt_properties];\n\n1. load_label\n\n    当前导入批次的标签。在一个 database 内唯一。\n    语法：\n    [database_name.]your_label\n \n2. data_desc\n\n    用于描述一批导入数据。\n    语法：\n        DATA INFILE\n        (\n        "file_path1"[, file_path2, ...]\n        )\n        [NEGATIVE]\n        INTO TABLE `table_name`\n        [PARTITION (p1, p2)]\n        [COLUMNS TERMINATED BY "column_separator"]\n        [FORMAT AS "file_type"]\n        [(column_list)]\n        [COLUMNS FROM PATH AS (columns_from_path)]\n        [SET (k1 = func(k2))]\n\n    说明：\n        file_path: \n\n        文件路径，可以指定到一个文件，也可以用 * 通配符指定某个目录下的所有文件。通配符必须匹配到文件，而不能是目录。\n\n        PARTITION:\n\n        如果指定此参数，则只会导入指定的分区，导入分区以外的数据会被过滤掉。\n        如果不指定，默认导入table的所有分区。\n    \n        NEGATIVE：\n        如果指定此参数，则相当于导入一批“负”数据。用于抵消之前导入的同一批数据。\n        该参数仅适用于存在 value 列，并且 value 列的聚合类型仅为 SUM 的情况。\n        \n        column_separator：\n\n        用于指定导入文件中的列分隔符。默认为 \\t\n        如果是不可见字符，则需要加\\\\x作为前缀，使用十六进制来表示分隔符。\n        如hive文件的分隔符\\x01，指定为"\\\\x01"\n        \n        file_type：\n\n        用于指定导入文件的类型，例如：parquet、orc、csv。默认值通过文件后缀名判断。 \n\n        column_list：\n\n        用于指定导入文件中的列和 table 中的列的对应关系。\n        当需要跳过导入文件中的某一列时，将该列指定为 table 中不存在的列名即可。\n        语法：\n        (col_name1, col_name2, ...)\n\n        columns_from_path:\n\n        用于指定需要从文件路径中解析的字段。\n        语法：\n        (col_from_path_name1, col_from_path_name2, ...)\n        \n        SET:\n\n        如果指定此参数，可以将源文件某一列按照函数进行转化，然后将转化后的结果导入到table中。\n        目前支持的函数有：\n\n            strftime(fmt, column) 日期转换函数\n                fmt: 日期格式，形如%Y%m%d%H%M%S (年月日时分秒)\n                column: column_list中的列，即输入文件中的列。存储内容应为数字型的时间戳。\n                    如果没有column_list，则按照palo表的列顺序默认输入文件的列。\n\n            time_format(output_fmt, input_fmt, column) 日期格式转化\n                output_fmt: 转化后的日期格式，形如%Y%m%d%H%M%S (年月日时分秒)\n                input_fmt: 转化前column列的日期格式，形如%Y%m%d%H%M%S (年月日时分秒)\n                column: column_list中的列，即输入文件中的列。存储内容应为input_fmt格式的日期字符串。\n                    如果没有column_list，则按照palo表的列顺序默认输入文件的列。\n\n            alignment_timestamp(precision, column) 将时间戳对齐到指定精度\n                precision: year|month|day|hour\n                column: column_list中的列，即输入文件中的列。存储内容应为数字型的时间戳。\n                    如果没有column_list，则按照palo表的列顺序默认输入文件的列。\n                    注意：对齐精度为year、month的时候，只支持20050101~20191231范围内的时间戳。\n\n            default_value(value) 设置某一列导入的默认值\n                不指定则使用建表时列的默认值\n\n            md5sum(column1, column2, ...) 将指定的导入列的值求md5sum，返回32位16进制字符串                                \n\n            replace_value(old_value[, new_value]) 将导入文件中指定的old_value替换为new_value\n                new_value如不指定则使用建表时列的默认值\n                \n            hll_hash(column) 用于将表或数据里面的某一列转化成HLL列的数据结构\n        \n3. opt_properties\n\n    用于指定一些特殊参数。\n    语法：\n    [PROPERTIES ("key"="value", ...)]\n    \n    可以指定如下参数：\n    cluster:          导入所使用的 Hadoop 计算队列。\n    timeout：         指定导入操作的超时时间。默认超时为3天。单位秒。\n    max_filter_ratio：最大容忍可过滤（数据不规范等原因）的数据比例。默认零容忍。\n    load_delete_flag：指定该导入是否通过导入key列的方式删除数据，仅适用于UNIQUE KEY，\n                      导入时可不指定value列。默认为false。\n\n5. 导入数据格式样例\n\n    整型类（TINYINT/SMALLINT/INT/BIGINT/LARGEINT）：1, 1000, 1234\n    浮点类（FLOAT/DOUBLE/DECIMAL）：1.1, 0.23, .356\n    日期类（DATE/DATETIME）：2017-10-03, 2017-06-13 12:34:03。\n    （注：如果是其他日期格式，可以在导入命令中，使用 strftime 或者 time_format 函数进行转换）\n    字符串类（CHAR/VARCHAR）："I am a student", "a"\n    NULL值：\\N\n')])])]),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[n._v("#")]),n._v(" example")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('1. 导入一批数据，指定超时时间和过滤比例。指定导入队列为 my_cluster。\n\n    LOAD LABEL example_db.label1\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\n    INTO TABLE `my_table`\n    )\n    PROPERTIES\n    (\n    "cluster" = "my_cluster",\n    "timeout" = "3600",\n    "max_filter_ratio" = "0.1"\n    );\n\n    其中 hdfs_host 为 namenode 的 host，hdfs_port 为 fs.defaultFS 端口（默认9000）\n\n2. 导入一批数据，包含多个文件。导入不同的 table，指定分隔符，指定列对应关系\n\n    LOAD LABEL example_db.label2\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file1")\n    INTO TABLE `my_table_1`\n    COLUMNS TERMINATED BY ","\n    (k1, k3, k2, v1, v2),\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file2")\n    INTO TABLE `my_table_2`\n    COLUMNS TERMINATED BY "\\t"\n    (k1, k2, k3, v2, v1)\n    );\n\n3. 导入一批数据，指定hive的默认分隔符\\x01，并使用通配符*指定目录下的所有文件\n\n    LOAD LABEL example_db.label3\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/*")\n    NEGATIVE\n    INTO TABLE `my_table`\n    COLUMNS TERMINATED BY "\\\\x01"\n    );\n\n4. 导入一批“负”数据\n\n    LOAD LABEL example_db.label4\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/old_file)\n    NEGATIVE\n    INTO TABLE `my_table`\n    COLUMNS TERMINATED BY "\\t"\n    );\n\n5. 导入一批数据，指定分区\n\n    LOAD LABEL example_db.label5\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\n    INTO TABLE `my_table`\n    PARTITION (p1, p2)\n    COLUMNS TERMINATED BY ","\n    (k1, k3, k2, v1, v2)\n    );\n\n6. 导入一批数据，指定分区, 并对导入文件的列做一些转化，如下：\n   表结构为：\n    k1 datetime\n    k2 date\n    k3 bigint\n    k4 varchar(20)\n    k5 varchar(64)\n    k6 int\n\n    假设数据文件只有一行数据，5列，逗号分隔：\n\n    1537002087,2018-08-09 11:12:13,1537002087,-,1\n\n    数据文件中各列，对应导入语句中指定的各列：\n    tmp_k1, tmp_k2, tmp_k3, k6, v1\n\n    转换如下：\n\n    1) k1：将 tmp_k1 时间戳列转化为 datetime 类型的数据\n    2) k2：将 tmp_k2 datetime 类型的数据转化为 date 的数据\n    3) k3：将 tmp_k3 时间戳列转化为天级别时间戳\n    4) k4：指定导入默认值为1\n    5) k5：将 tmp_k1、tmp_k2、tmp_k3 列计算 md5 值\n    6) k6：将导入文件中的 - 值替换为 10\n\n    LOAD LABEL example_db.label6\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\n    INTO TABLE `my_table`\n    PARTITION (p1, p2)\n    COLUMNS TERMINATED BY ","\n    (tmp_k1, tmp_k2, tmp_k3, k6, v1)\n    SET (\n      k1 = strftime("%Y-%m-%d %H:%M:%S", tmp_k1),\n      k2 = time_format("%Y-%m-%d %H:%M:%S", "%Y-%m-%d", tmp_k2),\n      k3 = alignment_timestamp("day", tmp_k3), \n      k4 = default_value("1"), \n      k5 = md5sum(tmp_k1, tmp_k2, tmp_k3),\n      k6 = replace_value("-", "10")\n    )\n    );\n\n7. 导入数据到含有HLL列的表，可以是表中的列或者数据里面的列\n\n    LOAD LABEL example_db.label7\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\n    INTO TABLE `my_table`\n    PARTITION (p1, p2)\n    COLUMNS TERMINATED BY ","\n    SET (\n      v1 = hll_hash(k1),\n      v2 = hll_hash(k2)\n    )\n    );\n')])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[n._v("#")]),n._v(" keyword")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("LOAD\n")])])])])}),[],!1,null,null,null);t.default=l.exports}}]);