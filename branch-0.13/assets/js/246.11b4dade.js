(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{685:function(e,n,a){"use strict";a.r(n);var t=a(55),i=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"create-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-table"}},[e._v("#")]),e._v(" CREATE TABLE")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("p",[e._v("This statement is used to create table\nSyntax:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    CREATE [EXTERNAL] TABLE [IF NOT EXISTS] [database.]table_name\n    (column_definition1[, column_definition2, ...]\n    [, index_definition1[, ndex_definition12,]])\n    [ENGINE = [olap|mysql|broker|hive]]\n    [key_desc]\n    [COMMENT "table comment"]\n    [partition_desc]\n    [distribution_desc]\n    [rollup_index]\n    [PROPERTIES ("key"="value", ...)]\n    [BROKER PROPERTIES ("key"="value", ...)];\n')])])]),a("ol",[a("li",[a("p",[e._v("column_definition\nSyntax:\n"),a("code",[e._v('col_name col_type [agg_type] [NULL | NOT NULL] [DEFAULT "default_value"]')]),e._v("\nExplain:\ncol_name: Name of column\ncol_type: Type of column")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    TINYINT(1 Byte)\n        Range: -2^7 + 1 ~ 2^7 - 1\n    SMALLINT(2 Bytes)\n        Range: -2^15 + 1 ~ 2^15 - 1\n    INT(4 Bytes)\n        Range: -2^31 + 1 ~ 2^31 - 1\n    BIGINT(8 Bytes)\n        Range: -2^63 + 1 ~ 2^63 - 1\n    LARGEINT(16 Bytes)\n        Range: -2^127 + 1 ~ 2^127 - 1\n    FLOAT(4 Bytes)\n        Support scientific notation\n    DOUBLE(12 Bytes)\n        Support scientific notation\n    DECIMAL[(precision, scale)] (16 Bytes)\n        Default is DECIMAL(10, 0)\n        precision: 1 ~ 27\n        scale: 0 ~ 9\n        integer part: 1 ~ 18\n        fractional part: 0 ~ 9\n        Not support scientific notation\n    DATE(3 Bytes)\n        Range: 0000-01-01 ~ 9999-12-31\n    DATETIME(8 Bytes)\n        Range: 0000-01-01 00:00:00 ~ 9999-12-31 23:59:59\n    CHAR[(length)]\n        Fixed length string. Range: 1 ~ 255. Default: 1\n    VARCHAR[(length)]\n        Variable length string. Range: 1 ~ 65533\n    HLL (1~16385 Bytes)\n        HLL tpye, No need to specify length.\n        This type can only be queried by hll_union_agg, hll_cardinality, hll_hash functions.\n    BITMAP\n        BITMAP type, No need to specify length. Represent a set of unsigned bigint numbers, the largest element could be 2^64 - 1\n")])])]),a("p",[e._v("agg_type: Aggregation type. If not specified, the column is key column. Otherwise, the column   is value column.\n* SUM、MAX、MIN、REPLACE\n* HLL_UNION: Only for HLL type\n* REPLACE_IF_NOT_NULL: The meaning of this aggregation type is that substitution will   occur if and only if the newly imported data is a non-null value. If the newly imported   data is null, Doris will still retain the original value. Note: if NOT NULL is specified  in the REPLACE_IF_NOT_NULL column when the user creates the table, Doris will convert it     to NULL and will not report an error to the user. Users can leverage this aggregate type    to achieve importing some of columns.\n* BITMAP_UNION: Only for BITMAP type\nAllow NULL: Default is NOT NULL. NULL value should be represented as "),a("code",[e._v("\\N")]),e._v(" in load source file.\nNotice:"),a("br"),e._v("\nThe origin value of BITMAP_UNION column should be TINYINT, SMALLINT, INT, BIGINT.")])]),e._v(" "),a("li",[a("p",[e._v("index_definition\nSyntax:\n"),a("code",[e._v("INDEX index_name (col_name[, col_name, ...]) [USING BITMAP] COMMENT 'xxxxxx'")]),e._v("\nExplain:\nindex_name：index name\ncol_name：column name\nNotice:\nOnly support BITMAP index in current version, BITMAP can only apply to single column")])]),e._v(" "),a("li",[a("p",[e._v("ENGINE type\nDefault is olap. Options are: olap, mysql, broker, hive")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("For mysql, properties should include:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('PROPERTIES (\n    "host" = "mysql_server_host",\n    "port" = "mysql_server_port",\n    "user" = "your_user_name",\n    "password" = "your_password",\n    "database" = "database_name",\n    "table" = "table_name"\n)\n')])])])])]),e._v(" "),a("p",[e._v('Notice:\n"table_name" is the real table name in MySQL database.\ntable_name in CREATE TABLE stmt is table is Doris. They can be different or same.\nMySQL table created in Doris is for accessing data in MySQL database.\nDoris does not maintain and store any data from MySQL table.\n2) For broker, properties should include:')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(' ```\n PROPERTIES (\n     "broker_name" = "broker_name",\n     "path" = "file_path1[,file_path2]",\n     "column_separator" = "value_separator"\n     "line_delimiter" = "value_delimiter"\n )\n ```\n\n ```\n BROKER PROPERTIES(\n     "username" = "name",\n     "password" = "password"\n )\n ```\n\n For different broker, the broker properties are different\n')])])]),a("p",[e._v('Notice:\nFiles name in "path" is separated by ",". If file name includes ",", use "%2c" instead.     If file name includes "%", use "%25" instead.\nSupport CSV and Parquet. Support GZ, BZ2, LZ4, LZO(LZOP)\n3) For hive, properties should include:\n'),a("code",[e._v('PROPERTIES ( "database" = "hive_db_name", "table" = "hive_table_name", "hive.metastore.uris" = "thrift://127.0.0.1:9083" )')]),e._v('\n"database" is the name of the database corresponding to the hive table, "table" is the name of the hive table, and "hive.metastore.uris" is the hive metastore service address.\nNotice: At present, hive external tables are only used for Spark Load and query is not supported.')])]),e._v(" "),a("li",[a("p",[e._v("key_desc\nSyntax:\nkey_type(k1[,k2 ...])\nExplain:\nData is orderd by specified key columns. And has different behaviors for different key  desc.\nAGGREGATE KEY:\nvalue columns will be aggregated is key columns are same.\nUNIQUE KEY:\nThe new incoming rows will replace the old rows if key columns are same.\nDUPLICATE KEY:\nAll incoming rows will be saved.\nthe default key_type is DUPLICATE KEY, and key columns are first 36 bytes of the columns    in define order.\nIf the number of columns in the first 36 is less than 3, the first 3 columns will be   used.\nNOTICE:\nExcept for AGGREGATE KEY, no need to specify aggregation type for value columns.")])]),e._v(" "),a("li",[a("p",[e._v("partition_desc\nPartition has two ways to use:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("LESS THAN\nSyntax:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('PARTITION BY RANGE (k1, k2, ...)\n(\nPARTITION partition_name1 VALUES LESS THAN MAXVALUE|("value1", "value2", ...),\nPARTITION partition_name2 VALUES LESS THAN MAXVALUE|("value1", "value2", ...)\n...\n)\n')])])])])]),e._v(" "),a("p",[e._v("Explain:\n1) Partition name only support [A-z0-9_]\n2) Partition key column's type should be:\nTINYINT, SMALLINT, INT, BIGINT, LARGEINT, DATE, DATETIME\n3) The range is [closed, open). And the lower bound of first partition is MIN VALUE of  specifed column type.\n4) NULL values should be save in partition which includes MIN VALUE.\n5) Support multi partition columns, the the default partition value is MIN VALUE.\n2）Fixed Range\nSyntax:\n"),a("code",[e._v('PARTITION BY RANGE (k1, k2, k3, ...) ( PARTITION partition_name1 VALUES [("k1-lower1", "k2-lower1", "k3-lower1",...), ("k1-upper1", "k2-upper1", "k3-upper1", ...)), PARTITION partition_name2 VALUES [("k1-lower1-2", "k2-lower1-2", ...), ("k1-upper1-2", MAXVALUE, )) "k3-upper1-2", ... )')]),e._v("\nExplain:\n1）The Fixed Range is more flexible than the LESS THAN, and the left and right intervals    are completely determined by the user.\n2）Others are consistent with LESS THAN.")])]),e._v(" "),a("li",[a("p",[e._v("distribution_desc")]),e._v(" "),a("ol",[a("li",[e._v("Hash\nSyntax:\n"),a("code",[e._v("DISTRIBUTED BY HASH (k1[,k2 ...]) [BUCKETS num]")]),e._v("\nExplain:\nThe default buckets is 10.")])])]),e._v(" "),a("li",[a("p",[e._v("PROPERTIES")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("If ENGINE type is olap. User can specify storage medium, cooldown time and replication   number:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('PROPERTIES (\n    "storage_medium" = "[SSD|HDD]",\n    ["storage_cooldown_time" = "yyyy-MM-dd HH:mm:ss"],\n    ["replication_num" = "3"]\n    )\n')])])]),a("p",[e._v("storage_medium:         SSD or HDD, The default initial storage media can be specified by "),a("code",[e._v("default_storage_medium= XXX")]),e._v(" in the fe configuration file "),a("code",[e._v("fe.conf")]),e._v(", or, if not, by default, HDD.\nNote: when FE configuration 'enable_strict_storage_medium_check' is' True ', if the corresponding storage medium is not set in the cluster, the construction clause 'Failed to find enough host in all backends with storage medium is SSD|HDD'.\nstorage_cooldown_time:  If storage_medium is SSD, data will be automatically moved to HDD   when timeout.\nDefault is 30 days.\nFormat: \"yyyy-MM-dd HH:mm:ss\"\nreplication_num:        Replication number of a partition. Default is 3.\nIf table is not range partitions. This property takes on Table level. Or it will takes on   Partition level.\nUser can specify different properties for different partition by "),a("code",[e._v("ADD PARTITION")]),e._v(" or     "),a("code",[e._v("MODIFY PARTITION")]),e._v(" statements.")])]),e._v(" "),a("li",[a("p",[e._v("If Engine type is olap, user can set bloom filter index for column.\nBloom filter index will be used when query contains "),a("code",[e._v("IN")]),e._v(" or "),a("code",[e._v("EQUAL")]),e._v(".\nBloom filter index support key columns with type except TINYINT FLOAT DOUBLE, also  support value with REPLACE aggregation type.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('PROPERTIES (\n    "bloom_filter_columns"="k1,k2,k3"\n)\n')])])])]),e._v(" "),a("li",[a("p",[e._v("For Colocation Join:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('PROPERTIES (\n    "colocate_with"="table1"\n)\n')])])])]),e._v(" "),a("li",[a("p",[e._v("if you want to use the dynamic partitioning feature, specify it in properties")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('PROPERTIES (\n    "dynamic_partition.enable" = "true|false",\n    "dynamic_partition.time_unit" = "DAY|WEEK|MONTH",\n    "dynamic_partitoin.end" = "${integer_value}",\n    "dynamic_partition.prefix" = "${string_value}",\n    "dynamic_partition.buckets" = "${integer_value}\n)    \n')])])]),a("p",[e._v("Dynamic_partition. Enable: specifies whether dynamic partitioning at the table level is enabled")]),e._v(" "),a("p",[e._v("Dynamic_partition. Time_unit: used to specify the time unit for dynamically adding partitions, which can be selected as DAY, WEEK, and MONTH.")]),e._v(" "),a("p",[e._v("Dynamic_partition. End: used to specify the number of partitions created in advance")]),e._v(" "),a("p",[e._v("Dynamic_partition. Prefix: used to specify the partition name prefix to be created, such as the partition name prefix p, automatically creates the partition name p20200108")]),e._v(" "),a("p",[e._v("Dynamic_partition. Buckets: specifies the number of partition buckets that are automatically created")])])])]),e._v(" "),a("li",[a("p",[e._v("rollup_index\ngrammar:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  ROLLUP (rollup_name (column_name1, column_name2, ...)\n                 [FROM from_index_name]\n                  [PROPERTIES ("key"="value", ...)],...)\n')])])]),a("ol",{attrs:{start:"5"}},[a("li",[a("p",[e._v("if you want to use the inmemory table feature, specify it in properties")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('PROPERTIES (\n   "in_memory"="true"\n)   \n')])])])])])])]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Create an olap table, distributed by hash, with aggregation type.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE TABLE example_db.table_hash\n(\nk1 TINYINT,\nk2 DECIMAL(10, 2) DEFAULT "10.5",\nv1 CHAR(10) REPLACE,\nv2 INT SUM\n)\nENGINE=olap\nAGGREGATE KEY(k1, k2)\nCOMMENT "my first doris table"\nDISTRIBUTED BY HASH(k1) BUCKETS 32\nPROPERTIES ("storage_type"="column");\n')])])])]),e._v(" "),a("li",[a("p",[e._v("Create an olap table, distributed by hash, with aggregation type. Also set storage mediumand cooldown time.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE TABLE example_db.table_hash\n(\nk1 BIGINT,\nk2 LARGEINT,\nv1 VARCHAR(2048) REPLACE,\nv2 SMALLINT SUM DEFAULT "10"\n)\nENGINE=olap\nUNIQUE KEY(k1, k2)\nDISTRIBUTED BY HASH (k1, k2) BUCKETS 32\nPROPERTIES(\n"storage_type"="column",\n"storage_medium" = "SSD",\n"storage_cooldown_time" = "2015-06-04 00:00:00"\n);\n\n')])])])]),e._v(" "),a("li",[a("p",[e._v("Create an olap table, with range partitioned, distributed by hash.")])])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("LESS THAN")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE TABLE example_db.table_range\n(\nk1 DATE,\nk2 INT,\nk3 SMALLINT,\nv1 VARCHAR(2048),\nv2 DATETIME DEFAULT "2014-02-04 15:36:00"\n)\nENGINE=olap\nDUPLICATE KEY(k1, k2, k3)\nPARTITION BY RANGE (k1)\n(\nPARTITION p1 VALUES LESS THAN ("2014-01-01"),\nPARTITION p2 VALUES LESS THAN ("2014-06-01"),\nPARTITION p3 VALUES LESS THAN ("2014-12-01")\n)\nDISTRIBUTED BY HASH(k2) BUCKETS 32\nPROPERTIES(\n"storage_medium" = "SSD", "storage_cooldown_time" = "2015-06-04 00:00:00"\n);\n')])])]),a("p",[e._v("Explain:\nThis statement will create 3 partitions:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('( {    MIN     },   {"2014-01-01"} )\n[ {"2014-01-01"},   {"2014-06-01"} )\n[ {"2014-06-01"},   {"2014-12-01"} )\n')])])]),a("p",[e._v("Data outside these ranges will not be loaded.")])]),e._v(" "),a("li",[a("p",[e._v('Fixed Range\nCREATE TABLE table_range\n(\nk1 DATE,\nk2 INT,\nk3 SMALLINT,\nv1 VARCHAR(2048),\nv2 DATETIME DEFAULT "2014-02-04 15:36:00"\n)\nENGINE=olap\nDUPLICATE KEY(k1, k2, k3)\nPARTITION BY RANGE (k1, k2, k3)\n(\nPARTITION p1 VALUES [("2014-01-01", "10", "200"), ("2014-01-01", "20", "300")),\nPARTITION p2 VALUES [("2014-06-01", "100", "200"), ("2014-07-01", "100", "300"))\n)\nDISTRIBUTED BY HASH(k2) BUCKETS 32\nPROPERTIES(\n"storage_medium" = "SSD"\n);')])])]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[e._v("Create a mysql table")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE EXTERNAL TABLE example_db.table_mysql\n(\nk1 DATE,\nk2 INT,\nk3 SMALLINT,\nk4 VARCHAR(2048),\nk5 DATETIME\n)\nENGINE=mysql\nPROPERTIES\n(\n"host" = "127.0.0.1",\n"port" = "8239",\n"user" = "mysql_user",\n"password" = "mysql_passwd",\n"database" = "mysql_db_test",\n"table" = "mysql_table_test"\n);\n')])])])]),e._v(" "),a("li",[a("p",[e._v('Create a broker table, with file on HDFS, line delimit by "|", column separated by "\\n"')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE EXTERNAL TABLE example_db.table_broker (\nk1 DATE,\nk2 INT,\nk3 SMALLINT,\nk4 VARCHAR(2048),\nk5 DATETIME\n)\nENGINE=broker\nPROPERTIES (\n"broker_name" = "hdfs",\n"path" = "hdfs://hdfs_host:hdfs_port/data1,hdfs://hdfs_host:hdfs_port/data2,hdfs://hdfs_host:hdfs_port/data3%2c4",\n"column_separator" = "|",\n"line_delimiter" = "\\n"\n)\nBROKER PROPERTIES (\n"username" = "hdfs_user",\n"password" = "hdfs_password"\n);\n')])])])]),e._v(" "),a("li",[a("p",[e._v("Create table will HLL column")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE TABLE example_db.example_table\n(\nk1 TINYINT,\nk2 DECIMAL(10, 2) DEFAULT "10.5",\nv1 HLL HLL_UNION,\nv2 HLL HLL_UNION\n)\nENGINE=olap\nAGGREGATE KEY(k1, k2)\nDISTRIBUTED BY HASH(k1) BUCKETS 32;\n')])])])]),e._v(" "),a("li",[a("p",[e._v("Create a table will BITMAP_UNION column")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE TABLE example_db.example_table\n(\nk1 TINYINT,\nk2 DECIMAL(10, 2) DEFAULT "10.5",\nv1 BITMAP BITMAP_UNION,\nv2 BITMAP BITMAP_UNION\n)\nENGINE=olap\nAGGREGATE KEY(k1, k2)\nDISTRIBUTED BY HASH(k1) BUCKETS 32;\n')])])])]),e._v(" "),a("li",[a("p",[e._v("Create 2 colocate join table.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE TABLE `t1` (\n`id` int(11) COMMENT "",\n`value` varchar(8) COMMENT ""\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES (\n"colocate_with" = "group1"\n);\nCREATE TABLE `t2` (\n`id` int(11) COMMENT "",\n`value` varchar(8) COMMENT ""\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES (\n"colocate_with" = "group1"\n);\n')])])])]),e._v(" "),a("li",[a("p",[e._v("Create a broker table, with file on BOS.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE EXTERNAL TABLE example_db.table_broker (\nk1 DATE\n)\nENGINE=broker\nPROPERTIES (\n"broker_name" = "bos",\n"path" = "bos://my_bucket/input/file",\n)\nBROKER PROPERTIES (\n  "bos_endpoint" = "http://bj.bcebos.com",\n  "bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n  "bos_secret_accesskey"="yyyyyyyyyyyyyyyyyyyy"\n);\n')])])])]),e._v(" "),a("li",[a("p",[e._v("Create a table with a bitmap index")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE TABLE example_db.table_hash\n(\nk1 TINYINT,\nk2 DECIMAL(10, 2) DEFAULT "10.5",\nv1 CHAR(10) REPLACE,\nv2 INT SUM,\nINDEX k1_idx (k1) USING BITMAP COMMENT \'xxxxxx\'\n)\nENGINE=olap\nAGGREGATE KEY(k1, k2)\nCOMMENT "my first doris table"\nDISTRIBUTED BY HASH(k1) BUCKETS 32\nPROPERTIES ("storage_type"="column");\n')])])])]),e._v(" "),a("li",[a("p",[e._v("Create a dynamic partitioning table (dynamic partitioning needs to be enabled in FE configuration), which creates partitions 3 days in advance every day. For example, if today is' 2020-01-08 ', partitions named 'p20200108', 'p20200109', 'p20200110', 'p20200111' will be created.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[types: [DATE]; keys: [2020-01-08]; ‥types: [DATE]; keys: [2020-01-09]; )\n[types: [DATE]; keys: [2020-01-09]; ‥types: [DATE]; keys: [2020-01-10]; )\n[types: [DATE]; keys: [2020-01-10]; ‥types: [DATE]; keys: [2020-01-11]; )\n[types: [DATE]; keys: [2020-01-11]; ‥types: [DATE]; keys: [2020-01-12]; )\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('   CREATE TABLE example_db.dynamic_partition\n   (\n   k1 DATE,\n   k2 INT,\n   k3 SMALLINT,\n   v1 VARCHAR(2048),\n   v2 DATETIME DEFAULT "2014-02-04 15:36:00"\n   )\n   ENGINE=olap\n   DUPLICATE KEY(k1, k2, k3)\n   PARTITION BY RANGE (k1)\n   (\n   PARTITION p1 VALUES LESS THAN ("2014-01-01"),\n   PARTITION p2 VALUES LESS THAN ("2014-06-01"),\n   PARTITION p3 VALUES LESS THAN ("2014-12-01")\n   )\n   DISTRIBUTED BY HASH(k2) BUCKETS 32\n   PROPERTIES(\n   "storage_medium" = "SSD",\n   "dynamic_partition.time_unit" = "DAY",\n   "dynamic_partition.end" = "3",\n   "dynamic_partition.prefix" = "p",\n   "dynamic_partition.buckets" = "32"\n    );\n')])])])]),e._v(" "),a("li",[a("p",[e._v("Create a table with rollup index")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    CREATE TABLE example_db.rolup_index_table\n    (\n        event_day DATE,\n        siteid INT DEFAULT '10',\n        citycode SMALLINT,\n        username VARCHAR(32) DEFAULT '',\n        pv BIGINT SUM DEFAULT '0'\n    )\n    AGGREGATE KEY(event_day, siteid, citycode, username)\n    DISTRIBUTED BY HASH(siteid) BUCKETS 10\n    rollup (\n    r1(event_day,siteid),\n    r2(event_day,citycode),\n    r3(event_day)\n    )\n    PROPERTIES(\"replication_num\" = \"3\");\n")])])]),a("ol",{attrs:{start:"12"}},[a("li",[e._v("Create a inmemory table:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    CREATE TABLE example_db.table_hash\n    (\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    v1 CHAR(10) REPLACE,\n    v2 INT SUM,\n    INDEX k1_idx (k1) USING BITMAP COMMENT \'xxxxxx\'\n    )\n    ENGINE=olap\n    AGGREGATE KEY(k1, k2)\n    COMMENT "my first doris table"\n    DISTRIBUTED BY HASH(k1) BUCKETS 32\n    PROPERTIES ("in_memory"="true");\n')])])]),a("ol",{attrs:{start:"13"}},[a("li",[e._v("Create a hive external table")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    CREATE TABLE example_db.table_hive\n    (\n      k1 TINYINT,\n      k2 VARCHAR(50),\n      v INT\n    )\n    ENGINE=hive\n    PROPERTIES\n    (\n      "database" = "hive_db_name",\n      "table" = "hive_table_name",\n      "hive.metastore.uris" = "thrift://127.0.0.1:9083"\n    );\n')])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("CREATE,TABLE\n")])])])])}),[],!1,null,null,null);n.default=i.exports}}]);