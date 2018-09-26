(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{475:function(e,t,s){"use strict";s.r(t);var i=s(55),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"delete"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[e._v("#")]),e._v(" Delete")]),e._v(" "),s("p",[e._v("Unlike other import methods, delete is a synchronization process. Similar to insert into, all delete operations are an independent import job in Doris. Generally, delete statements need to specify tables, partitions and delete conditions to tell which data to be deleted, and the data on base index and rollup index will be deleted at the same time.")]),e._v(" "),s("h2",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),s("p",[e._v("The delete statement's syntax is as follows：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("DELETE FROM table_name [PARTITION partition_name]\nWHERE\ncolumn_name1 op value[ AND column_name2 op value ...];\n")])])]),s("p",[e._v("example 1：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("DELETE FROM my_table PARTITION p1 WHERE k1 = 3;\n")])])]),s("p",[e._v("example 2:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('DELETE FROM my_table PARTITION p1 WHERE k1 < 3 AND k2 = "abc";\n')])])]),s("p",[e._v("The following describes the parameters used in the delete statement:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("PARTITION")]),e._v(" "),s("p",[e._v("The target partition of the delete statement. If not specified, the table must be a single partition table, otherwise it cannot be deleted")])]),e._v(" "),s("li",[s("p",[e._v("WHERE")]),e._v(" "),s("p",[e._v("The conditiona of the delete statement. All delete statements must specify a where condition.")])])]),e._v(" "),s("p",[e._v("Explanation:")]),e._v(" "),s("ol",[s("li",[e._v("The type of "),s("code",[e._v("OP")]),e._v(" in the WHERE condition can only include "),s("code",[e._v("=, >, <, >=, <=, !=, in, not in")]),e._v(".")]),e._v(" "),s("li",[e._v("The column in the WHERE condition can only be the "),s("code",[e._v("key")]),e._v(" column.")]),e._v(" "),s("li",[e._v("Cannot delete when the "),s("code",[e._v("key")]),e._v(" column does not exist in any rollup table.")]),e._v(" "),s("li",[e._v("Each condition in WHERE condition can only be realated by "),s("code",[e._v("and")]),e._v(". If you want "),s("code",[e._v("or")]),e._v(", you are suggested to write these conditions into two delete statements.")]),e._v(" "),s("li",[e._v("If the specified table is a range partitioned table, "),s("code",[e._v("PARTITION")]),e._v(" must be specified unless the table is a single partition table,.")]),e._v(" "),s("li",[e._v("Unlike the insert into command, delete statement cannot specify "),s("code",[e._v("label")]),e._v(" manually. You can view the concept of "),s("code",[e._v("label")]),e._v(" in [Insert Into] (./insert-into-manual.md)")])]),e._v(" "),s("h2",{attrs:{id:"delete-result"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-result"}},[e._v("#")]),e._v(" Delete Result")]),e._v(" "),s("p",[e._v("The delete command is an SQL command, and the returned results are synchronous. It can be divided into the following types:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Successful visible")]),e._v(" "),s("p",[e._v("If delete completes successfully and is visible, the following results will be returned, "),s("code",[e._v("query OK")]),e._v(" indicates success.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mysql> delete from test_tbl PARTITION p1 where k1 = 1;\nQuery OK, 0 rows affected (0.04 sec)\n{'label':'delete_e7830c72-eb14-4cb9-bbb6-eebd4511d251', 'status':'VISIBLE', 'txnId':'4005'}\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Submitted successfully, but not visible")]),e._v(" "),s("p",[e._v("The transaction submission of Doris is divided into two steps: submission and publish version. Only after the publish version step is completed, the result will be visible to the user. If it has been submitted successfully, then it can be considered that the publish version step will eventually success. Doris will try to wait for publishing for a period of time after submitting. If it has timed out, even if the publishing version has not been completed, it will return to the user in priority and prompt the user that the submission has been completed but not visible. If delete has been committed and executed, but has not been published and visible, the following results will be returned.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mysql> delete from test_tbl PARTITION p1 where k1 = 1;\nQuery OK, 0 rows affected (0.04 sec)\n{'label':'delete_e7830c72-eb14-4cb9-bbb6-eebd4511d251', 'status':'COMMITTED', 'txnId':'4005', 'err':'delete job is committed but may be taking effect later' }\n")])])]),s("p",[e._v("The result will return a JSON string at the same time:")]),e._v(" "),s("p",[s("code",[e._v("affected rows")]),e._v(": Indicates the row affected by this deletion. Since the deletion of Doris is currently a logical deletion, the value is always 0.")]),e._v(" "),s("p",[s("code",[e._v("label")]),e._v(": The label generated automatically to be the signature of the delete jobs. Each job has a unique label within a single database.")]),e._v(" "),s("p",[s("code",[e._v("status")]),e._v(": Indicates whether the data deletion is visible. If it is visible, "),s("code",[e._v("visible")]),e._v(" will be displayed. If it is not visible, "),s("code",[e._v("committed")]),e._v(" will be displayed.")]),e._v(" "),s("p",[s("code",[e._v("txnId")]),e._v(": The transaction ID corresponding to the delete job")]),e._v(" "),s("p",[s("code",[e._v("err")]),e._v(": Field will display some details of this deletion")])]),e._v(" "),s("li",[s("p",[e._v("Commit failed, transaction cancelled")]),e._v(" "),s("p",[e._v("If the delete statement is not submitted successfully, it will be automatically aborted by Doris and the following results will be returned")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mysql> delete from test_tbl partition p1 where k1 > 80;\nERROR 1064 (HY000): errCode = 2, detailMessage = {错误原因}\n")])])]),s("p",[e._v("example：")]),e._v(" "),s("p",[e._v("A timeout deletion will return the timeout and unfinished replicas displayed as "),s("code",[e._v("(tablet = replica)")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mysql> delete from test_tbl partition p1 where k1 > 80;\nERROR 1064 (HY000): errCode = 2, detailMessage = failed to delete replicas from job: 4005, Unfinished replicas:10000=60000, 10001=60000, 10002=60000\n")])])]),s("p",[s("strong",[e._v("The correct processing logic for the returned results of the delete operation is as follows:")])]),e._v(" "),s("ol",[s("li",[s("p",[e._v("If "),s("code",[e._v("Error 1064 (HY000)")]),e._v(" is returned, deletion fails")])]),e._v(" "),s("li",[s("p",[e._v("If the returned result is "),s("code",[e._v("Query OK")]),e._v(", the deletion is successful")]),e._v(" "),s("ol",[s("li",[e._v("If "),s("code",[e._v("status")]),e._v(" is "),s("code",[e._v("committed")]),e._v(", the data deletion is committed and will be eventually invisible. Users can wait for a while and then use the "),s("code",[e._v("show delete")]),e._v(" command to view the results.")]),e._v(" "),s("li",[e._v("If "),s("code",[e._v("status")]),e._v(" is "),s("code",[e._v("visible")]),e._v(", the data have been deleted successfully.")])])])])])]),e._v(" "),s("h2",{attrs:{id:"relevant-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#relevant-configuration"}},[e._v("#")]),e._v(" Relevant Configuration")]),e._v(" "),s("h3",{attrs:{id:"fe-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fe-configuration"}},[e._v("#")]),e._v(" FE configuration")]),e._v(" "),s("p",[s("strong",[e._v("TIMEOUT configuration")])]),e._v(" "),s("p",[e._v("In general, Doris's deletion timeout is limited from 30 seconds to 5 minutes. The specific time can be adjusted through the following configuration items")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("tablet_delete_timeout_second")])]),e._v(" "),s("p",[e._v("The timeout of delete itself can be elastically changed by the number of tablets in the specified partition. This configuration represents the average timeout contributed by a tablet. The default value is 2.")]),e._v(" "),s("p",[e._v("Assuming that there are 5 tablets under the specified partition for this deletion, the timeout time available for the deletion is 10 seconds. Because the minimum timeout is 30 seconds which is higher than former timeout time, the final timeout is 30 seconds.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("load_straggler_wait_second")])]),e._v(" "),s("p",[e._v("If the user estimates a large amount of data, so that the upper limit of 5 minutes is insufficient, the user can adjust the upper limit of timeout through this item, and the default value is 300.")]),e._v(" "),s("p",[s("strong",[e._v("The specific calculation rule of timeout(seconds)")])]),e._v(" "),s("p",[s("code",[e._v("TIMEOUT = MIN(load_straggler_wait_second, MAX(30, tablet_delete_timeout_second * tablet_num))")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("query_timeout")])]),e._v(" "),s("p",[e._v("Because delete itself is an SQL command, the deletion statement is also limited by the session variables, and the timeout is also affected by the session value "),s("code",[e._v("query'timeout")]),e._v(". You can increase the value by "),s("code",[e._v("set query'timeout = xxx")]),e._v(".")])])]),e._v(" "),s("p",[s("strong",[e._v("InPredicate configuration")])]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("max_allowed_in_element_num_of_delete")])]),e._v(" "),s("p",[e._v("If the user needs to take a lot of elements when using the in predicate, the user can adjust the upper limit of the allowed in elements number, and the default value is 1024.")])])]),e._v(" "),s("h2",{attrs:{id:"show-delete-history"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-delete-history"}},[e._v("#")]),e._v(" Show delete history")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("The user can view the deletion completed in history through the show delete statement.")]),e._v(" "),s("p",[e._v("Syntax")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("SHOW DELETE [FROM db_name]\n")])])]),s("p",[e._v("example")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('mysql> show delete from test_db;\n+-----------+---------------+---------------------+-----------------+----------+\n| TableName | PartitionName | CreateTime          | DeleteCondition | State    |\n+-----------+---------------+---------------------+-----------------+----------+\n| empty_tbl | p3            | 2020-04-15 23:09:35 | k1 EQ "1"       | FINISHED |\n| test_tbl  | p4            | 2020-04-15 23:09:53 | k1 GT "80"      | FINISHED |\n+-----------+---------------+---------------------+-----------------+----------+\n2 rows in set (0.00 sec)\n')])])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);