(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{723:function(e,n,t){"use strict";t.r(n);var a=t(55),o=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"alter-table"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alter-table"}},[e._v("#")]),e._v(" ALTER TABLE")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('This statement is used to modify an existing table. If no rollup index is specified, the base operation is the default.\nThe statement is divided into three types of operations: schema change, rollup, partition\nThese three types of operations cannot appear in an ALTER TABLE statement at the same time.\nWhere schema change and rollup are asynchronous operations and are returned if the task commits successfully. You can then use the SHOW ALTER command to view the progress.\nPartition is a synchronous operation, and a command return indicates that execution is complete.\n\ngrammar:\n    ALTER TABLE [database.]table\n    Alter_clause1[, alter_clause2, ...];\n\nThe alter_clause is divided into partition, rollup, schema change, rename and bimmap index.\n\nPartition supports the following modifications\nIncrease the partition\n    grammar:\n        ADD PARTITION [IF NOT EXISTS] partition_name\n        Partition_desc ["key"="value"]\n        [DISTRIBUTED BY HASH (k1[,k2 ...]) [BUCKETS num]]\n    note:\n        1) partition_desc supports two ways of writing:\n            * VALUES LESS THAN [MAXVALUE|("value1", ...)]\n            * VALUES [("value1", ...), ("value1", ...))\n        1) The partition is the left closed right open interval. If the user only specifies the right boundary, the system will automatically determine the left boundary.\n        2) If the bucket mode is not specified, the bucket method used by the built-in table is automatically used.\n        3) If the bucket mode is specified, only the bucket number can be modified, and the bucket mode or bucket column cannot be modified.\n        4) ["key"="value"] section can set some properties of the partition, see CREATE TABLE for details.\n\n2. Delete the partition\n    grammar:\n        DROP PARTITION [IF EXISTS] partition_name\n    note:\n        1) Use a partitioned table to keep at least one partition.\n        2) Execute DROP PARTITION For a period of time, the deleted partition can be recovered by the RECOVER statement. See the RECOVER statement for details.\n        3) If DROP PARTITION FORCE is executed, the system will not check whether the partition has unfinished transactions, the partition will be deleted directly and cannot be recovered, generally this operation is not recommended\n\n3. Modify the partition properties\n    grammar:\n        MODIFY PARTITION p1|(p1[, p2, ...]) SET ("key" = "value", ...)\n    Description:\n        1) The following attributes of the modified partition are currently supported.\n            - storage_medium\n            - storage_cooldown_time\n            - replication_num \n            — in_memory\n        2) For single-partition tables, partition_name is the same as the table name.\n    \nRollup supports the following ways to create:\n1. Create a rollup index\n    grammar:\n        ADD ROLLUP rollup_name (column_name1, column_name2, ...)\n        [FROM from_index_name]\n        [PROPERTIES ("key"="value", ...)]\n\n        properties: Support setting timeout time, the default timeout time is 1 day.\n    example:\n        ADD ROLLUP r1(col1,col2) from r0\n1.2 Batch create rollup index\n    grammar:\n        ADD ROLLUP [rollup_name (column_name1, column_name2, ...)\n                                [FROM from_index_name]\n                                [PROPERTIES ("key"="value", ...)],...]\n    example：\n        ADD ROLLUP r1(col1,col2) from r0, r2(col3,col4) from r0\n1.3 note:\n        1) If from_index_name is not specified, it is created by default from base index\n        2) The columns in the rollup table must be existing columns in from_index\n        3) In properties, you can specify the storage format. See CREATE TABLE for details.\n        \n2. Delete the rollup index\n    grammar:\n        DROP ROLLUP rollup_name\n        [PROPERTIES ("key"="value", ...)]\n    example:\n       DROP ROLLUP r1\n2.1 Batch Delete rollup index\n    grammar：DROP ROLLUP [rollup_name [PROPERTIES ("key"="value", ...)],...]\n    example：DROP ROLLUP r1,r2\n2.2 note:\n        1) Cannot delete base index\n           \n        \nSchema change supports the following modifications:\n1. Add a column to the specified location of the specified index\n    grammar:\n        ADD COLUMN column_name column_type [KEY | agg_type] [DEFAULT "default_value"]\n        [AFTER column_name|FIRST]\n        [TO rollup_index_name]\n        [PROPERTIES ("key"="value", ...)]\n    note:\n        1) Aggregate model If you add a value column, you need to specify agg_type\n        2) Non-aggregate models (such as DUPLICATE KEY) If you add a key column, you need to specify the KEY keyword.\n        3) You cannot add a column that already exists in the base index to the rollup index\n            Recreate a rollup index if needed\n        \n2. Add multiple columns to the specified index\n    grammar:\n        ADD COLUMN (column_name1 column_type [KEY | agg_type] DEFAULT "default_value", ...)\n        [TO rollup_index_name]\n        [PROPERTIES ("key"="value", ...)]\n    note:\n        1) Aggregate model If you add a value column, you need to specify agg_type\n        2) Non-aggregate model If you add a key column, you need to specify the KEY keyword.\n        3) You cannot add a column that already exists in the base index to the rollup index\n        (You can recreate a rollup index if needed)\n\n3. Remove a column from the specified index\n    grammar:\n        DROP COLUMN column_name\n        [FROM rollup_index_name]\n    note:\n        1) Cannot delete partition column\n        2) If the column is removed from the base index, it will also be deleted if the column is included in the rollup index\n    \n4. Modify the column type and column position of the specified index\n    grammar:\n        MODIFY COLUMN column_name column_type [KEY | agg_type] [NULL | NOT NULL] [DEFAULT "default_value"]\n        [AFTER column_name|FIRST]\n        [FROM rollup_index_name]\n        [PROPERTIES ("key"="value", ...)]\n    note:\n        1) Aggregate model If you modify the value column, you need to specify agg_type\n        2) Non-aggregate type If you modify the key column, you need to specify the KEY keyword.\n        3) Only the type of the column can be modified. The other attributes of the column remain as they are (ie other attributes need to be explicitly written in the statement according to the original attribute, see example 8)\n        4) The partition column cannot be modified\n        5) The following types of conversions are currently supported (accuracy loss is guaranteed by the user)\n        TINYINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE convert to a wider range of numeric types\n            TINTINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE/DECIMAL is converted to VARCHAR\n            VARCHAR supports modification of maximum length\n            Convert VARCHAR/CHAR to TINYINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE.\n            Convert VARCHAR/CHAR to DATE (currently support six formats: "%Y-%m-%d", "%y-%m-%d", "%Y%m%d", "%y%m%d", "%Y/%m/%d, "%y/%m/%d")\n            Convert DATETIME to DATE(Only year-month-day information is retained, For example: `2019-12-09 21:47:05` <--\x3e `2019-12-09`)\n            Convert DATE to DATETIME(Set hour, minute, second to zero, For example: `2019-12-09` <--\x3e `2019-12-09 00:00:00`)\n            Convert FLOAT to DOUBLE\n            Convert INT to DATE (If the INT data fails to convert, the original data remains the same)\n        6) Does not support changing from NULL to NOT NULL\n            \n5. Reorder the columns of the specified index\n    grammar:\n        ORDER BY (column_name1, column_name2, ...)\n        [FROM rollup_index_name]\n        [PROPERTIES ("key"="value", ...)]\n    note:\n        1) All columns in index must be written\n        2) value is listed after the key column\n        \n6. Modify the properties of the table, currently supports modifying the bloom filter column, the colocate_with attribute and the dynamic_partition attribute， the replication_num and default.replication_num.\n    grammar:\n        PROPERTIES ("key"="value")\n    note:\n        Can also be merged into the above schema change operation to modify, see the example below\n\n7. Enable batch delete support\n    grammar:\n        ENABLE FEATURE "BATCH_DELETE"\n    note:\n        1) Only support unique tables\n        2) Batch deletion is supported for old tables, while new tables are already supported when they are created\n\n8. Enable the ability to import in order by the value of the sequence column\n    grammer:\n        ENABLE FEATURE "SEQUENCE_LOAD" WITH PROPERTIES ("function_column.sequence_type" = "Date")\n    note:\n        1) Only support unique tables\n        2) The sequence_type is used to specify the type of the sequence column, which can be integral and time type\n        3) Only the orderliness of newly imported data is supported. Historical data cannot be changed\n \n\nRename supports modification of the following names:\n1. Modify the table name\n    grammar:\n        RENAME new_table_name;\n        \n2. Modify the rollup index name\n    grammar:\n        RENAME ROLLUP old_rollup_name new_rollup_name;\n        \n3. Modify the partition name\n    grammar:\n        RENAME PARTITION old_partition_name new_partition_name;\n\nBitmap index supports the following modifications:\n1. create bitmap index\n    grammar:\n        ADD INDEX index_name (column [, ...],) [USING BITMAP] [COMMENT \'balabala\'];\n    note:\n        1. only supports bitmap index for current version\n        2. BITMAP index only supports apply on single column\n2. drop index\n    grammar:\n        DROP INDEX index_name；\n')])])]),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('[table]\n1. Modify the default number of replications of the table, which is used as default number of replications while creating new partition.\n    ATLER TABLE example_db.my_table \n    SET ("default.replication_num" = "2");\n    \n2. Modify the actual number of replications of a unpartitioned table (unpartitioned table only)\n    ALTER TABLE example_db.my_table\n    SET ("replication_num" = "3");\n\n[partition]\n1. Add partition, existing partition [MIN, 2013-01-01), add partition [2013-01-01, 2014-01-01), use default bucket mode\n    ALTER TABLE example_db.my_table\n    ADD PARTITION p1 VALUES LESS THAN ("2014-01-01");\n\n2. Increase the partition and use the new number of buckets\n    ALTER TABLE example_db.my_table\n    ADD PARTITION p1 VALUES LESS THAN ("2015-01-01")\n    DISTRIBUTED BY HASH(k1) BUCKETS 20;\n\n3. Increase the partition and use the new number of copies\n    ALTER TABLE example_db.my_table\n    ADD PARTITION p1 VALUES LESS THAN ("2015-01-01")\n    ("replication_num"="1");\n\n4. Modify the number of partition copies\n    ALTER TABLE example_db.my_table\n    MODIFY PARTITION p1 SET("replication_num"="1");\n    \n5. Batch modify the specified partitions\n    ALTER TABLE example_db.my_table\n    MODIFY PARTITION (p1, p2, p4) SET("in_memory"="true");\n    \n6. Batch modify all partitions\n    ALTER TABLE example_db.my_table\n    MODIFY PARTITION (*) SET("storage_medium"="HDD");\n\n7. Delete the partition\n    ALTER TABLE example_db.my_table\n    DROP PARTITION p1;\n    \n8. Add a partition that specifies the upper and lower bounds\n\n    ALTER TABLE example_db.my_table\n    ADD PARTITION p1 VALUES [("2014-01-01"), ("2014-02-01"));\n\n[rollup]\n1. Create index: example_rollup_index, based on base index(k1,k2,k3,v1,v2). Columnar storage.\n    ALTER TABLE example_db.my_table\n    ADD ROLLUP example_rollup_index(k1, k3, v1, v2)\n    PROPERTIES("storage_type"="column");\n    \n2. Create index: example_rollup_index2, based on example_rollup_index(k1,k3,v1,v2)\n    ALTER TABLE example_db.my_table\n    ADD ROLLUP example_rollup_index2 (k1, v1)\n    FROM example_rollup_index;\n\n3. Create index: example_rollup_index3, based on base index (k1, k2, k3, v1), custom rollup timeout time is one hour.\n    \n    ALTER TABLE example_db.my_table\n    ADD ROLLUP example_rollup_index(k1, k3, v1)\n    PROPERTIES("storage_type"="column", "timeout" = "3600");\n\n3. Delete index: example_rollup_index2\n    ALTER TABLE example_db.my_table\n    DROP ROLLUP example_rollup_index2;\n\n[schema change]\n1. Add a key column new_col to the col1 of example_rollup_index (non-aggregate model)\n    ALTER TABLE example_db.my_table\n    ADD COLUMN new_col INT KEY DEFAULT "0" AFTER col1\n    TO example_rollup_index;\n\n2. Add a value column new_col to the col1 of example_rollup_index (non-aggregate model)\n      ALTER TABLE example_db.my_table\n      ADD COLUMN new_col INT DEFAULT "0" AFTER col1\n      TO example_rollup_index;\n\n3. Add a key column new_col (aggregation model) to col1 of example_rollup_index\n      ALTER TABLE example_db.my_table\n      ADD COLUMN new_col INT DEFAULT "0" AFTER col1\n      TO example_rollup_index;\n\n4. Add a value column to the col1 of example_rollup_index. new_col SUM aggregation type (aggregation model)\n      ALTER TABLE example_db.my_table\n      ADD COLUMN new_col INT SUM DEFAULT "0" AFTER col1\n      TO example_rollup_index;\n\n5. Add multiple columns to the example_rollup_index (aggregate model)\n    ALTER TABLE example_db.my_table\n    ADD COLUMN (col1 INT DEFAULT "1", col2 FLOAT SUM DEFAULT "2.3")\n    TO example_rollup_index;\n\n6. Remove a column from example_rollup_index\n    ALTER TABLE example_db.my_table\n    DROP COLUMN col2\n    FROM example_rollup_index;\n    \n7. Modify the base index\'s col1 column to be of type BIGINT and move to the col2 column\n    ALTER TABLE example_db.my_table\n    MODIFY COLUMN col1 BIGINT DEFAULT "1" AFTER col2;\n\n8. Modify the maximum length of the val1 column of the base index. The original val1 is (val1 VARCHAR(32) REPLACE DEFAULT "abc")\n    ALTER TABLE example_db.my_table\n    MODIFY COLUMN val1 VARCHAR(64) REPLACE DEFAULT "abc";\n\n9. Reorder the columns in example_rollup_index (set the original column order: k1, k2, k3, v1, v2)\n    ALTER TABLE example_db.my_table\n    ORDER BY (k3, k1, k2, v2, v1)\n    FROM example_rollup_index;\n    \n10. Perform both operations simultaneously\n    ALTER TABLE example_db.my_table\n    ADD COLUMN v2 INT MAX DEFAULT "0" AFTER k2 TO example_rollup_index,\n    ORDER BY (k3,k1,k2,v2,v1) FROM example_rollup_index;\n\n11. Modify the bloom filter column of the table\n    ALTER TABLE example_db.my_table SET ("bloom_filter_columns"="k1,k2,k3");\n\n    Can also be merged into the above schema change operation (note that the syntax of multiple clauses is slightly different)\n    ALTER TABLE example_db.my_table\n    DROP COLUMN col2\n    PROPERTIES ("bloom_filter_columns"="k1,k2,k3");\n\n12. Modify the Colocate property of the table\n\n    ALTER TABLE example_db.my_table set ("colocate_with" = "t1");\n\n13. Change the bucketing mode of the table from Random Distribution to Hash Distribution\n\n    ALTER TABLE example_db.my_table set ("distribution_type" = "hash");\n\n14. Modify the dynamic partition properties of the table (support adding dynamic partition properties to tables without dynamic partition properties)\n\n    ALTER TABLE example_db.my_table set ("dynamic_partition.enable" = "false");\n\n    If you need to add dynamic partition attributes to a table without dynamic partition attributes, you need to specify all dynamic partition attributes\n\n    ALTER TABLE example_db.my_table set ("dynamic_partition.enable"= "true", "dynamic_partition.time_unit" = "DAY", "dynamic_partition.end "= "3", "dynamic_partition.prefix" = "p", "dynamic_partition.buckets" = "32");\n\n15. Modify the in_memory property of the table\n\n    ALTER TABLE example_db.my_table set ("in_memory" = "true");\n16. Enable batch delete support\n\n    ALTER TABLE example_db.my_table ENABLE FEATURE "BATCH_DELETE"\n17. Enable the ability to import in order by the value of the Sequence column\n\n    ALTER TABLE example_db.my_table ENABLE FEATURE "SEQUENCE_LOAD" WITH PROPERTIES ("function_column.sequence_type" = "Date")\n    \n[rename]\n1. Modify the table named table1 to table2\n    ALTER TABLE table1 RENAME table2;\n    \n2. Modify the rollup index named rollup1 in the table example_table to rollup2\n    ALTER TABLE example_table RENAME ROLLUP rollup1 rollup2;\n    \n3. Modify the partition named p1 in the table example_table to p2\n    ALTER TABLE example_table RENAME PARTITION p1 p2;\n\n[index]\n1. create index on table1 column siteid using bitmap \n    ALTER TABLE table1 ADD INDEX index_name  [USING BITMAP] (siteid) COMMENT \'balabala\';\n2. drop bitmap index of table1\n    ALTER TABLE table1 DROP INDEX index_name;\n')])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("ALTER, TABLE, ROLLUP, COLUMN, PARTITION, RENAME\n")])])])])}),[],!1,null,null,null);n.default=o.exports}}]);