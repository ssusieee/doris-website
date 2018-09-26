(window.webpackJsonp=window.webpackJsonp||[]).push([[488],{1113:function(t,e,o){"use strict";o.r(e);var s=o(15),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"mini-load"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mini-load"}},[t._v("#")]),t._v(" MINI LOAD")]),t._v(" "),o("h2",{attrs:{id:"description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),o("p",[t._v("MINI LOAD and STEAM LOAD are implemented in exactly the same way. MINI LOAD is a subset of STREAM LOAD in import support.\nSubsequent imports of new features will only be supported in STEAM LOAD, MINI LOAD will no longer add features. It is suggested that STREAM LOAD be used instead. Please use HELP STREAM LOAD.")]),t._v(" "),o("p",[t._v("MINI LOAD is imported through HTTP protocol. Users can import without relying on Hadoop or Mysql client.\nThe user describes the import through HTTP protocol, and the data is streamed into Doris in the process of receiving http requests. After the ** import job is completed, the ** returns to the user the imported results.")]),t._v(" "),o("ul",[o("li",[t._v("Note: In order to be compatible with the old version of mini load usage habits, users can still view the import results through the 'SHOW LOAD' command.")])]),t._v(" "),o("p",[t._v("Grammar:\nImport:")]),t._v(" "),o("p",[t._v("curl --location-trusted -u user:passwd -T data.file http://host:port/api/{db}/{table}/_load?label=xxx")]),t._v(" "),o("p",[t._v("View import information")]),t._v(" "),o("p",[t._v("curl -u user:passwd http://host:port/api/{db}/_load_info?label=xxx")]),t._v(" "),o("p",[t._v("HTTP Protocol Specification")]),t._v(" "),o("p",[t._v("Privilege Authentication Currently Doris uses the Basic mode of HTTP for privilege authentication. So you need to specify a username and password when importing\nThis way is to pass the password in plaintext, and does not support encrypted transmission for the time being.")]),t._v(" "),o("p",[t._v("Expect Doris needs to send an HTTP request with the 'Expect' header information,'100-continue'.\nWhy? Because we need to redirect the request, we have to transfer the data content before.\nThis can avoid causing multiple data transmission, thereby improving efficiency.")]),t._v(" "),o("p",[t._v("Content-Length Doris needs to send a request with the header 'Content-Length'. If the content ratio is sent\n'Content-Length' is less, so Doris believes that if there is a transmission problem, the submission task fails.\nNOTE: If you send more data than 'Content-Length', Doris reads only 'Content-Length'.\nLength content and import")]),t._v(" "),o("p",[t._v("Description of parameters:")]),t._v(" "),o("p",[t._v("User: User is user_name if the user is in default_cluster. Otherwise, it is user_name@cluster_name.")]),t._v(" "),o("p",[t._v("Label: The label used to specify this batch of imports for later job queries, etc.\nThis parameter must be passed in.")]),t._v(" "),o("p",[t._v("Columns: Used to describe the corresponding column name in the import file.\nIf it is not passed in, the column order in the file is considered to be the same as the order in which the table is built.\nThe specified method is comma-separated, such as columns = k1, k2, k3, K4")]),t._v(" "),o("p",[t._v("Column_separator: Used to specify the separator between columns, default is' t'\nNOTE: Url encoding is required, for example\nIf you need to specify '\\t' as a separator, you should pass in 'column_separator=% 09'\nIf you need to specify 'x01'as a delimiter, you should pass in 'column_separator=% 01'\nIf you need to specify','as a separator, you should pass in 'column_separator=% 2c'")]),t._v(" "),o("p",[t._v("Max_filter_ratio: Used to specify the maximum percentage allowed to filter irregular data, default is 0, not allowed to filter\nCustom specification should be as follows:'max_filter_ratio = 0.2', meaning that 20% error rate is allowed.")]),t._v(" "),o("p",[t._v("Timeout: Specifies the timeout time of the load job in seconds. When the load execution time exceeds this threshold, it is automatically cancelled. The default timeout time is 86400 seconds.\nIt is recommended to specify a timeout time of less than 86400 seconds.")]),t._v(" "),o("p",[t._v('Hll: Used to specify the corresponding relationship between the HLL columns in the data and the tables, the columns in the tables and the columns specified in the data.\n(If columns are not specified, the columns of the data column surface can also be other non-HLL columns in the table.) By "partition"\nSpecify multiple HLL columns using ":" splitting, for example:\'hll1, cuid: hll2, device\'')]),t._v(" "),o("p",[t._v("NOTE:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("This method of importing is currently completed on a single machine, so it is not suitable to import a large amount of data.\nIt is recommended that the amount of data imported should not exceed 1 GB.")])]),t._v(" "),o("li",[o("p",[t._v("Currently, it is not possible to submit multiple files in the form of "),o("code",[t._v("curl-T',")]),t._v("{file1, file2}', because curl splits them into multiple files.\nRequest sent, multiple requests cannot share a label number, so it cannot be used")])]),t._v(" "),o("li",[o("p",[t._v("Miniload is imported in exactly the same way as streaming. It returns the results synchronously to users after the import of streaming is completed.\nAlthough the information of mini load can be found in subsequent queries, it cannot be operated on. The queries are only compatible with the old ways of use.")])]),t._v(" "),o("li",[o("p",[t._v("When importing from the curl command line, you need to add escape before & or the parameter information will be lost.")])])]),t._v(" "),o("p",[t._v("'35;'35; example")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Import the data from the local file 'testData' into the table of 'testTbl' in the database 'testDb'(the user is in default_cluster)\ncurl --location-trusted -u root -T testData http://host:port/api/testDb/testTbl/_load?label=123")])]),t._v(" "),o("li",[o("p",[t._v("Import the data from the local file 'testData' into the table of 'testTbl' in the database'testDb'(the user is in test_cluster). The timeout time is 3600 seconds.\ncurl --location-trusted -u root@test_cluster:root -T testData http://fe.host:port/api/testDb/testTbl/_load?label=123&timeout=3600")])]),t._v(" "),o("li",[o("p",[t._v("Import data from the local file 'testData' into the 'testTbl' table in the database 'testDb', allowing a 20% error rate (the user is in default_cluster)\ncurl --location-trusted -u root -T testData http://host:port/api/testDb/testTbl/_load?label=123&max_filter_ratio=0.2")])]),t._v(" "),o("li",[o("p",[t._v("Import the data from the local file 'testData' into the table 'testTbl' in the database 'testDb', allowing a 20% error rate, and specify the column name of the file (the user is in default_cluster)\ncurl --location-trusted -u root -T testData http://host:port/api/testDb/testTbl/_load?label=123&max_filter_ratio=0.2&columns=k1,k2,k3")])]),t._v(" "),o("li",[o("p",[t._v("Import in streaming mode (user is in default_cluster)\nseq 1 10 | awk '{OFS=\"\\t\"}{print $1, $1 * 10}' | curl --location-trusted -u root -T - http://host:port/api/testDb/testTbl/_load?label=123")])]),t._v(" "),o("li",[o("p",[t._v("Import tables containing HLL columns, which can be columns in tables or columns in data to generate HLL columns (users are in default_cluster)")]),t._v(" "),o("p",[t._v("curl --location-trusted -u root -T testData http://host:port/api/testDb/testTbl/_load?label=123&max_filter_ratio=0.2&hll=hll_column1,k1:hll_column2,k2\n&columns=k1,k2,k3")]),t._v(" "),o("p",[t._v("curl --location-trusted -u root -T testData http://host:port/api/testDb/testTbl/_load?label=123&max_filter_ratio=0.2\n&hll=hll_column1,tmp_k4:hll_column2,tmp_k5&columns=k1,k2,k3,tmp_k4,tmp_k5")])]),t._v(" "),o("li",[o("p",[t._v("View imports after submission")])])]),t._v(" "),o("p",[t._v("curl -u root http://host:port/api/testDb/_load_info?label=123")]),t._v(" "),o("h2",{attrs:{id:"keyword"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),o("p",[t._v("MINI, LOAD")])])}),[],!1,null,null,null);e.default=i.exports}}]);