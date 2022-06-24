(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{794:function(e,t,a){"use strict";a.r(t);var i=a(15),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"variable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variable"}},[e._v("#")]),e._v(" Variable")]),e._v(" "),a("p",[e._v("This document focuses on currently supported variables.")]),e._v(" "),a("p",[e._v("Variables in Doris refer to variable settings in MySQL. However, some of the variables are only used to be compatible with some MySQL client protocols, and do not produce their actual meaning in the MySQL database.")]),e._v(" "),a("h2",{attrs:{id:"variable-setting-and-viewing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variable-setting-and-viewing"}},[e._v("#")]),e._v(" Variable setting and viewing")]),e._v(" "),a("h3",{attrs:{id:"view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view"}},[e._v("#")]),e._v(" View")]),e._v(" "),a("p",[e._v("All or specified variables can be viewed via "),a("code",[e._v("SHOW VARIABLES [LIKE 'xxx'];")]),e._v(". Such as:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SHOW VARIABLES;\nSHOW VARIABLES LIKE '%time_zone%';\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h3",{attrs:{id:"settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[e._v("#")]),e._v(" Settings")]),e._v(" "),a("p",[e._v("Note that before version 1.1, after the setting takes effect globally, the setting value will be inherited in subsequent new session connections, but the value in the current session will remain unchanged.\nAfter version 1.1 (inclusive), after the setting takes effect globally, the setting value will be used in subsequent new session connections, and the value in the current session will also change.")]),e._v(" "),a("p",[e._v("For session-only, set by the "),a("code",[e._v("SET var_name=xxx;")]),e._v(" statement. Such as:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('SET exec_mem_limit = 137438953472;\nSET forward_to_master = true;\nSET time_zone = "Asia/Shanghai";\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("For global-level, set by "),a("code",[e._v("SET GLOBAL var_name=xxx;")]),e._v(". Such as:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SET GLOBAL exec_mem_limit = 137438953472\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("blockquote",[a("p",[e._v("Note 1: Only ADMIN users can set variable at global-level.")])]),e._v(" "),a("p",[e._v("Variables that support both session-level and global-level setting include:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("time_zone")])]),e._v(" "),a("li",[a("code",[e._v("wait_timeout")])]),e._v(" "),a("li",[a("code",[e._v("sql_mode")])]),e._v(" "),a("li",[a("code",[e._v("enable_profile")])]),e._v(" "),a("li",[a("code",[e._v("query_timeout")])]),e._v(" "),a("li",[a("code",[e._v("exec_mem_limit")])]),e._v(" "),a("li",[a("code",[e._v("batch_size")])]),e._v(" "),a("li",[a("code",[e._v("parallel_fragment_exec_instance_num")])]),e._v(" "),a("li",[a("code",[e._v("parallel_exchange_instance_num")])]),e._v(" "),a("li",[a("code",[e._v("allow_partition_column_nullable")])]),e._v(" "),a("li",[a("code",[e._v("insert_visible_timeout_ms")])]),e._v(" "),a("li",[a("code",[e._v("enable_fold_constant_by_be")])])]),e._v(" "),a("p",[e._v("Variables that support only global-level setting include:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("default_rowset_type")])])]),e._v(" "),a("p",[e._v("At the same time, variable settings also support constant expressions. Such as:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SET exec_mem_limit = 10 * 1024 * 1024 * 1024;\nSET forward_to_master = concat('tr', 'u', 'e');\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h3",{attrs:{id:"set-variables-in-the-query-statement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-variables-in-the-query-statement"}},[e._v("#")]),e._v(" Set variables in the query statement")]),e._v(" "),a("p",[e._v("In some scenarios, we may need to set variables specifically for certain queries.\nThe SET_VAR hint sets the session value of a system variable temporarily (for the duration of a single statement). Examples:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT /*+ SET_VAR(exec_mem_limit = 8589934592) */ name FROM people ORDER BY name;\nSELECT /*+ SET_VAR(query_timeout = 1, enable_partition_cache=true) */ sleep(3);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Note that the comment must start with /*+ and can only follow the SELECT.")]),e._v(" "),a("h2",{attrs:{id:"supported-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-variables"}},[e._v("#")]),e._v(" Supported variables")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("SQL_AUTO_IS_NULL")])]),e._v(" "),a("p",[e._v("Used for compatible JDBC connection pool C3P0. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("auto_increment_increment")])]),e._v(" "),a("p",[e._v("Used for compatibility with MySQL clients. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("autocommit")])]),e._v(" "),a("p",[e._v("Used for compatibility with MySQL clients. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("batch_size")])]),e._v(" "),a("p",[e._v("Used to specify the number of rows of a single packet transmitted by each node during query execution. By default, the number of rows of a packet is 1024 rows. That is, after the source node generates 1024 rows of data, it is packaged and sent to the destination node.")]),e._v(" "),a("p",[e._v("A larger number of rows will increase the throughput of the query in the case of scanning large data volumes, but may increase the query delay in small query scenario. At the same time, it also increases the memory overhead of the query. The recommended setting range is 1024 to 4096.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("character_set_client")])]),e._v(" "),a("p",[e._v("Used for compatibility with MySQL clients. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("character_set_connection")])]),e._v(" "),a("p",[e._v("Used for compatibility with MySQL clients. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("character_set_results")])]),e._v(" "),a("p",[e._v("Used for compatibility with MySQL clients. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("character_set_server")])]),e._v(" "),a("p",[e._v("Used for compatibility with MySQL clients. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("codegen_level")])]),e._v(" "),a("p",[e._v("Used to set the level of LLVM codegen. (Not currently in effect).")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("collation_connection")])]),e._v(" "),a("p",[e._v("Used for compatibility with MySQL clients. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("collation_database")])]),e._v(" "),a("p",[e._v("Used for compatibility with MySQL clients. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("collation_server")])]),e._v(" "),a("p",[e._v("Used for compatibility with MySQL clients. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("delete_without_partition")])]),e._v(" "),a("p",[e._v("When set to true. When using the delete command to delete partition table data, no partition is required. The delete operation will be automatically applied to all partitions.")]),e._v(" "),a("p",[e._v("Note, however, that the automatic application to all partitions may cause the delete command to take a long time to trigger a large number of subtasks and cause a long time. If it is not necessary, it is not recommended to turn it on.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("disable_colocate_join")])]),e._v(" "),a("p",[e._v("Controls whether the "),a("RouterLink",{attrs:{to:"/docs/advanced/join-optimization/colocation-join.html"}},[e._v("Colocation Join")]),e._v(" function is enabled. The default is false, which means that the feature is enabled. True means that the feature is disabled. When this feature is disabled, the query plan will not attempt to perform a Colocation Join.")],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("enable_bucket_shuffle_join")])]),e._v(" "),a("p",[e._v("Controls whether the "),a("RouterLink",{attrs:{to:"/docs/advanced/join-optimization/bucket-shuffle-join.html"}},[e._v("Bucket Shuffle Join")]),e._v(" function is enabled. The default is true, which means that the feature is enabled. False means that the feature is disabled. When this feature is disabled, the query plan will not attempt to perform a Bucket Shuffle Join.")],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("disable_streaming_preaggregations")])]),e._v(" "),a("p",[e._v("Controls whether streaming pre-aggregation is turned on. The default is false, which is enabled. Currently not configurable and enabled by default.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("enable_insert_strict")])]),e._v(" "),a("p",[e._v("Used to set the "),a("code",[e._v("strict")]),e._v(" mode when loading data via INSERT statement. The default is false, which means that the "),a("code",[e._v("strict")]),e._v(" mode is not turned on. For an introduction to this mode, see "),a("RouterLink",{attrs:{to:"/docs/data-operate/import/import-way/insert-into-manual.html"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("enable_spilling")])]),e._v(" "),a("p",[e._v("Used to set whether to enable external sorting. The default is false, which turns off the feature. This feature is enabled when the user does not specify a LIMIT condition for the ORDER BY clause and also sets "),a("code",[e._v("enable_spilling")]),e._v(" to true. When this feature is enabled, the temporary data is stored in the "),a("code",[e._v("doris-scratch/")]),e._v(" directory of the BE data directory and the temporary data is cleared after the query is completed.")]),e._v(" "),a("p",[e._v("This feature is mainly used for sorting operations with large amounts of data using limited memory.")]),e._v(" "),a("p",[e._v("Note that this feature is experimental and does not guarantee stability. Please turn it on carefully.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("exec_mem_limit")])]),e._v(" "),a("p",[e._v("Used to set the memory limit for a single query. The default is 2GB, you can set it in B/K/KB/M/MB/G/GB/T/TB/P/PB, the default is B.")]),e._v(" "),a("p",[e._v("This parameter is used to limit the memory that can be used by an instance of a single query fragment in a query plan. A query plan may have multiple instances, and a BE node may execute one or more instances. Therefore, this parameter does not accurately limit the memory usage of a query across the cluster, nor does it accurately limit the memory usage of a query on a single BE node. The specific needs need to be judged according to the generated query plan.")]),e._v(" "),a("p",[e._v("Usually, only some blocking nodes (such as sorting node, aggregation node, and join node) consume more memory, while in other nodes (such as scan node), data is streamed and does not occupy much memory.")]),e._v(" "),a("p",[e._v("When a "),a("code",[e._v("Memory Exceed Limit")]),e._v(" error occurs, you can try to increase the parameter exponentially, such as 4G, 8G, 16G, and so on.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("forward_to_master")])]),e._v(" "),a("p",[e._v("The user sets whether to forward some commands to the Master FE node for execution. The default is "),a("code",[e._v("true")]),e._v(", which means no forwarding. There are multiple FE nodes in Doris, one of which is the Master node. Usually users can connect to any FE node for full-featured operation. However, some of detail information can only be obtained from the Master FE node.")]),e._v(" "),a("p",[e._v("For example, the "),a("code",[e._v("SHOW BACKENDS;")]),e._v(" command, if not forwarded to the Master FE node, can only see some basic information such as whether the node is alive, and forwarded to the Master FE to obtain more detailed information including the node startup time and the last heartbeat time.")]),e._v(" "),a("p",[e._v("The commands currently affected by this parameter are as follows:")]),e._v(" "),a("ol",[a("li",[a("p",[a("code",[e._v("SHOW FRONTEND;")])]),e._v(" "),a("p",[e._v("Forward to Master to view the last heartbeat information.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("SHOW BACKENDS;")])]),e._v(" "),a("p",[e._v("Forward to Master to view startup time, last heartbeat information, and disk capacity information.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("SHOW BROKERS;")])]),e._v(" "),a("p",[e._v("Forward to Master to view the start time and last heartbeat information.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("SHOW TABLET;")]),e._v("/"),a("code",[e._v("ADMIN SHOW REPLICA DISTRIBUTION;")]),e._v("/"),a("code",[e._v("ADMIN SHOW REPLICA STATUS;")])]),e._v(" "),a("p",[e._v("Forward to Master to view the tablet information stored in the Master FE metadata. Under normal circumstances, the tablet information in different FE metadata should be consistent. When a problem occurs, this method can be used to compare the difference between the current FE and Master FE metadata.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("SHOW PROC;")])]),e._v(" "),a("p",[e._v("Forward to Master to view information about the relevant PROC stored in the Master FE metadata. Mainly used for metadata comparison.")])])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("init_connect")])]),e._v(" "),a("p",[e._v("Used for compatibility with MySQL clients. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("interactive_timeout")])]),e._v(" "),a("p",[e._v("Used for compatibility with MySQL clients. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("enable_profile")])]),e._v(" "),a("p",[e._v("Used to set whether you need to view the profile of the query. The default is false, which means no profile is required.")]),e._v(" "),a("p",[e._v("By default, the BE sends a profile to the FE for viewing errors only if an error occurs in the query. A successful query will not send a profile. Sending a profile will incur a certain amount of network overhead, which is detrimental to a high concurrent query scenario.")]),e._v(" "),a("p",[e._v("When the user wants to analyze the profile of a query, the query can be sent after this variable is set to true. After the query is finished, you can view the profile on the web page of the currently connected FE:")]),e._v(" "),a("p",[a("code",[e._v("fe_host:fe_http:port/query")])]),e._v(" "),a("p",[e._v("It will display the most recent 100 queries which "),a("code",[e._v("enable_profile")]),e._v(" is set to true.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("language")])]),e._v(" "),a("p",[e._v("Used for compatibility with MySQL clients. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("license")])]),e._v(" "),a("p",[e._v("Show Doris's license. No other effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("load_mem_limit")])]),e._v(" "),a("p",[e._v("Used to specify the memory limit of the load operation. The default is 0, which means that this variable is not used, and "),a("code",[e._v("exec_mem_limit")]),e._v(" is used as the memory limit for the load operation.")]),e._v(" "),a("p",[e._v("This variable is usually used for INSERT operations. Because the INSERT operation has both query and load part. If the user does not set this variable, the respective memory limits of the query and load part are "),a("code",[e._v("exec_mem_limit")]),e._v(". Otherwise, the memory of query part of INSERT is limited to "),a("code",[e._v("exec_mem_limit")]),e._v(", and the load part is limited to"),a("code",[e._v("load_mem_limit")]),e._v(".")]),e._v(" "),a("p",[e._v("For other load methods, such as BROKER LOAD, STREAM LOAD, the memory limit still uses "),a("code",[e._v("exec_mem_limit")]),e._v(".")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("lower_case_table_names")])]),e._v(" "),a("p",[e._v("Used to control whether the user table name is case-sensitive.")]),e._v(" "),a("p",[e._v("A value of 0 makes the table name case-sensitive. The default is 0.")]),e._v(" "),a("p",[e._v("When the value is 1, the table name is case insensitive. Doris will convert the table name to lowercase when storing and querying."),a("br"),e._v("\nThe advantage is that any case of table name can be used in one statement. The following SQL is correct:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> show tables;\n+------------------+\n| Tables_ in_testdb|\n+------------------+\n| cost             |\n+------------------+\nmysql> select * from COST where COst.id < 100 order by cost.id;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("The disadvantage is that the table name specified in the table creation statement cannot be obtained after table creation. The table name viewed by 'show tables' is lower case of the specified table name.")]),e._v(" "),a("p",[e._v("When the value is 2, the table name is case insensitive. Doris stores the table name specified in the table creation statement and converts it to lowercase for comparison during query."),a("br"),e._v("\nThe advantage is that the table name viewed by 'show tables' is the table name specified in the table creation statement;"),a("br"),e._v("\nThe disadvantage is that only one case of table name can be used in the same statement. For example, the table name 'cost' can be used to query the 'cost' table:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> select * from COST where COST.id < 100 order by COST.id;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("This variable is compatible with MySQL and must be configured at cluster initialization by specifying "),a("code",[e._v("lower_case_table_names=")]),e._v(" in fe.conf. It cannot be modified by the "),a("code",[e._v("set")]),e._v(" statement after cluster initialization is complete, nor can it be modified by restarting or upgrading the cluster.")]),e._v(" "),a("p",[e._v("The system view table names in information_schema are case-insensitive and behave as 2 when the value of "),a("code",[e._v("lower_case_table_names")]),e._v(" is 0.")])])]),e._v(" "),a("p",[e._v("Translated with www.DeepL.com/Translator (free version)")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("max_allowed_packet")])]),e._v(" "),a("p",[e._v("Used for compatible JDBC connection pool C3P0. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("max_pushdown_conditions_per_column")])]),e._v(" "),a("p",[e._v("For the specific meaning of this variable, please refer to the description of "),a("code",[e._v("max_pushdown_conditions_per_column")]),e._v(" in "),a("RouterLink",{attrs:{to:"/docs/admin-manual/config/be-config.html"}},[e._v("BE Configuration")]),e._v(". This variable is set to -1 by default, which means that the configuration value in "),a("code",[e._v("be.conf")]),e._v(" is used. If the setting is greater than 0, the query in the current session will use the variable value, and ignore the configuration value in "),a("code",[e._v("be.conf")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("max_scan_key_num")])]),e._v(" "),a("p",[e._v("For the specific meaning of this variable, please refer to the description of "),a("code",[e._v("doris_max_scan_key_num")]),e._v(" in "),a("RouterLink",{attrs:{to:"/docs/admin-manual/config/be-config.html"}},[e._v("BE Configuration")]),e._v(". This variable is set to -1 by default, which means that the configuration value in "),a("code",[e._v("be.conf")]),e._v(" is used. If the setting is greater than 0, the query in the current session will use the variable value, and ignore the configuration value in "),a("code",[e._v("be.conf")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("net_buffer_length")])]),e._v(" "),a("p",[e._v("Used for compatibility with MySQL clients. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("net_read_timeout")])]),e._v(" "),a("p",[e._v("Used for compatibility with MySQL clients. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("net_write_timeout")])]),e._v(" "),a("p",[e._v("Used for compatibility with MySQL clients. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("parallel_exchange_instance_num")])]),e._v(" "),a("p",[e._v("Used to set the number of exchange nodes used by an upper node to receive data from the lower node in the execution plan. The default is -1, which means that the number of exchange nodes is equal to the number of execution instances of the lower nodes (default behavior). When the setting is greater than 0 and less than the number of execution instances of the lower node, the number of exchange nodes is equal to the set value.")]),e._v(" "),a("p",[e._v("In a distributed query execution plan, the upper node usually has one or more exchange nodes for receiving data from the execution instances of the lower nodes on different BEs. Usually the number of exchange nodes is equal to the number of execution instances of the lower nodes.")]),e._v(" "),a("p",[e._v("In some aggregate query scenarios, if the amount of data to be scanned at the bottom is large, but the amount of data after aggregation is small, you can try to modify this variable to a smaller value, which can reduce the resource overhead of such queries. Such as the scenario of aggregation query on the DUPLICATE KEY data model.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("parallel_fragment_exec_instance_num")])]),e._v(" "),a("p",[e._v("For the scan node, set its number of instances to execute on each BE node. The default is 1.")]),e._v(" "),a("p",[e._v("A query plan typically produces a set of scan ranges, the range of data that needs to be scanned. These data are distributed across multiple BE nodes. A BE node will have one or more scan ranges. By default, a set of scan ranges for each BE node is processed by only one execution instance. When the machine resources are abundant, you can increase the variable and let more execution instances process a set of scan ranges at the same time, thus improving query efficiency.")]),e._v(" "),a("p",[e._v("The number of scan instances determines the number of other execution nodes in the upper layer, such as aggregate nodes and join nodes. Therefore, it is equivalent to increasing the concurrency of the entire query plan execution. Modifying this parameter will help improve the efficiency of large queries, but larger values will consume more machine resources, such as CPU, memory, and disk IO.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("query_cache_size")])]),e._v(" "),a("p",[e._v("Used for compatibility with MySQL clients. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("query_cache_type")])]),e._v(" "),a("p",[e._v("Used for compatible JDBC connection pool C3P0. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("query_timeout")])]),e._v(" "),a("p",[e._v("Used to set the query timeout. This variable applies to all query statements in the current connection, as well as INSERT statements. The default is 5 minutes, in seconds.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("resource_group")])]),e._v(" "),a("p",[e._v("Not used.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("send_batch_parallelism")])]),e._v(" "),a("p",[e._v("Used to set the default parallelism for sending batch when execute InsertStmt operation, if the value for parallelism exceed "),a("code",[e._v("max_send_batch_parallelism_per_job")]),e._v(" in BE config, then the coordinator BE will use the value of "),a("code",[e._v("max_send_batch_parallelism_per_job")]),e._v(".")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("sql_mode")])]),e._v(" "),a("p",[e._v("Used to specify SQL mode to accommodate certain SQL dialects. For the SQL mode, see "),a("RouterLink",{attrs:{to:"/docs/advanced/sql-mode.html"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("sql_safe_updates")])]),e._v(" "),a("p",[e._v("Used for compatibility with MySQL clients. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("sql_select_limit")])]),e._v(" "),a("p",[e._v("Used for compatibility with MySQL clients. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("system_time_zone")])]),e._v(" "),a("p",[e._v("Displays the current system time zone. Cannot be changed.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("time_zone")])]),e._v(" "),a("p",[e._v("Used to set the time zone of the current session. The time zone has an effect on the results of certain time functions. For the time zone, see "),a("RouterLink",{attrs:{to:"/docs/advanced/time-zone.html"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("tx_isolation")])]),e._v(" "),a("p",[e._v("Used for compatibility with MySQL clients. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("tx_read_only")])]),e._v(" "),a("p",[e._v("Used for compatibility with MySQL clients. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("transaction_read_only")])]),e._v(" "),a("p",[e._v("Used for compatibility with MySQL clients. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("transaction_isolation")])]),e._v(" "),a("p",[e._v("Used for compatibility with MySQL clients. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("version")])]),e._v(" "),a("p",[e._v("Used for compatibility with MySQL clients. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("performance_schema")])]),e._v(" "),a("p",[e._v("Used for compatibility with MySQL JDBC 8.0.16 or later version. No practical effect.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("version_comment")])]),e._v(" "),a("p",[e._v("Used to display the version of Doris. Cannot be changed.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("wait_timeout")])]),e._v(" "),a("p",[e._v("The length of the connection used to set up an idle connection. When an idle connection does not interact with Doris for that length of time, Doris will actively disconnect the link. The default is 8 hours, in seconds.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("default_rowset_type")])]),e._v(" "),a("p",[e._v("Used for setting the default storage format of Backends storage engine. Valid options: alpha/beta")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("use_v2_rollup")])]),e._v(" "),a("p",[e._v("Used to control the sql query to use segment v2 rollup index to get data. This variable is only used for validation when upgrading to segment v2 feature. Otherwise, not recommended to use.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("rewrite_count_distinct_to_bitmap_hll")])]),e._v(" "),a("p",[e._v("Whether to rewrite count distinct queries of bitmap and HLL types as bitmap_union_count and hll_union_agg.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("prefer_join_method")])]),e._v(" "),a("p",[e._v("When choosing the join method(broadcast join or shuffle join), if the broadcast join cost and shuffle join cost are equal, which join method should we prefer.")]),e._v(" "),a("p",[e._v('Currently, the optional values for this variable are "broadcast" or "shuffle".')])]),e._v(" "),a("li",[a("p",[a("code",[e._v("allow_partition_column_nullable")])]),e._v(" "),a("p",[e._v("Whether to allow the partition column to be NULL when creating the table. The default is true, which means NULL is allowed. false means the partition column must be defined as NOT NULL.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("insert_visible_timeout_ms")])]),e._v(" "),a("p",[e._v("When execute insert statement, doris will wait for the transaction to commit and visible after the import is completed.\nThis parameter controls the timeout of waiting for transaction to be visible. The default value is 10000, and the minimum value is 1000.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("enable_exchange_node_parallel_merge")])]),e._v(" "),a("p",[e._v("In a sort query, when an upper level node receives the ordered data of the lower level node, it will sort the corresponding data on the exchange node to ensure that the final data is ordered. However, when a single thread merges multiple channels of data, if the amount of data is too large, it will lead to a single point of exchange node merge bottleneck.")]),e._v(" "),a("p",[e._v("Doris optimizes this part if there are too many data nodes in the lower layer. Exchange node will start multithreading for parallel merging to speed up the sorting process. This parameter is false by default, which means that exchange node does not adopt parallel merge sort to reduce the extra CPU and memory consumption.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("extract_wide_range_expr")])]),e._v(" "),a("p",[e._v("Used to control whether turn on the 'Wide Common Factors' rule. The value has two: true or false. On by default.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("enable_fold_constant_by_be")])]),e._v(" "),a("p",[e._v("Used to control the calculation method of constant folding. The default is "),a("code",[e._v("false")]),e._v(", that is, calculation is performed in "),a("code",[e._v("FE")]),e._v("; if it is set to "),a("code",[e._v("true")]),e._v(", it will be calculated by "),a("code",[e._v("BE")]),e._v(" through "),a("code",[e._v("RPC")]),e._v(" request.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("cpu_resource_limit")])]),e._v(" "),a("p",[e._v("Used to limit the resource overhead of a query. This is an experimental feature. The current implementation is to limit the number of scan threads for a query on a single node. The number of scan threads is limited, and the data returned from the bottom layer slows down, thereby limiting the overall computational resource overhead of the query. Assuming it is set to 2, a query can use up to 2 scan threads on a single node.")]),e._v(" "),a("p",[e._v("This parameter will override the effect of "),a("code",[e._v("parallel_fragment_exec_instance_num")]),e._v(". That is, assuming that "),a("code",[e._v("parallel_fragment_exec_instance_num")]),e._v(" is set to 4, and this parameter is set to 2. Then 4 execution instances on a single node will share up to 2 scanning threads.")]),e._v(" "),a("p",[e._v("This parameter will be overridden by the "),a("code",[e._v("cpu_resource_limit")]),e._v(" configuration in the user property.")]),e._v(" "),a("p",[e._v("The default is -1, which means no limit.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("disable_join_reorder")])]),e._v(" "),a("p",[e._v("Used to turn off all automatic join reorder algorithms in the system. There are two values: true and false.It is closed by default, that is, the automatic join reorder algorithm of the system is adopted. After set to true, the system will close all automatic sorting algorithms, adopt the original SQL table order, and execute join")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("enable_infer_predicate")])]),e._v(" "),a("p",[e._v("Used to control whether to perform predicate derivation. There are two values: true and false. It is turned off by default, that is, the system does not perform predicate derivation, and uses the original predicate to perform related operations. After it is set to true, predicate expansion is performed.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("return_object_data_as_binary")]),e._v("\nUsed to identify whether to return the bitmap/hll result in the select result. In the select into outfile statement, if the export file format is csv, the bimap/hll data will be base64-encoded, if it is the parquet file format, the data will be stored as a byte array")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("block_encryption_mode")]),e._v("\nThe block_encryption_mode variable controls the block encryption mode. The default setting is empty, when use AES equal to "),a("code",[e._v("AES_128_ECB")]),e._v(", when use SM4 equal to "),a("code",[e._v("SM3_128_ECB")]),e._v("\navailable values:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  AES_128_ECB,\n  AES_192_ECB,\n  AES_256_ECB,\n  AES_128_CBC,\n  AES_192_CBC,\n  AES_256_CBC,\n  AES_128_CFB,\n  AES_192_CFB,\n  AES_256_CFB,\n  AES_128_CFB1,\n  AES_192_CFB1,\n  AES_256_CFB1,\n  AES_128_CFB8,\n  AES_192_CFB8,\n  AES_256_CFB8,\n  AES_128_CFB128,\n  AES_192_CFB128,\n  AES_256_CFB128,\n  AES_128_CTR,\n  AES_192_CTR,\n  AES_256_CTR,\n  AES_128_OFB,\n  AES_192_OFB,\n  AES_256_OFB,\n  SM4_128_ECB,\n  SM4_128_CBC,\n  SM4_128_CFB128,\n  SM4_128_OFB,\n  SM4_128_CTR,\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("enable_infer_predicate")])]),e._v(" "),a("p",[e._v("Used to control whether predicate deduction is performed. There are two values: true and false. It is turned off by default, and the system does not perform predicate deduction, and uses the original predicate for related operations. When set to true, predicate expansion occurs.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("trim_tailing_spaces_for_external_table_query")])]),e._v(" "),a("p",[e._v("Used to control whether trim the tailing spaces while quering Hive external tables. The default is false.")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);