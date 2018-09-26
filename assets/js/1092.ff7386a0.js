(window.webpackJsonp=window.webpackJsonp||[]).push([[1092],{1717:function(e,t,s){"use strict";s.r(t);var a=s(15),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"show-stream-load"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-stream-load"}},[e._v("#")]),e._v(" SHOW STREAM LOAD")]),e._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),s("p",[e._v('This statement is used to show the execution of the specified import task\nGrammar:\nSHOW STREAM LOAD\n[FROM both names]\n[\nWHERE\n[LABEL [ = "your_label" | LIKE "label_matcher"]]\n[STATUS = ["SUCCESS"|"FAIL"|]]\n]\n[ORDER BY ...]\n[LIMIT limit][OFFSET offset];')]),e._v(" "),s("p",[e._v("Explain:")]),e._v(" "),s("ol",[s("li",[e._v("If db_name is not specified, use the current default DB")]),e._v(" "),s("li",[e._v("If you use LABEL LIKE, the label that matches the task contains the STREAM LOAD task of label_matcher")]),e._v(" "),s("li",[e._v("If LABEL = is used, the specified label is matched accurately.")]),e._v(" "),s("li",[e._v("If STATUS is specified, the STREAM LOAD status is matched")]),e._v(" "),s("li",[e._v("Arbitrary column combinations can be sorted using ORDER BY")]),e._v(" "),s("li",[e._v("If LIMIT is specified, the limit bar matching record is displayed. Otherwise, all of them will be displayed.")]),e._v(" "),s("li",[e._v("If OFFSET is specified, the query results are displayed from offset. By default, the offset is 0.")])]),e._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Show all STREAM LOAD tasks of default DB\nSHOW STREAM LOAD;")])]),e._v(" "),s("li",[s("p",[e._v('Show the STREAM LOAD task of the specified db. The label contains the string "2014_01_02", showing the oldest 10\nSHOW STREAM LOAD FROM example_db WHERE LABEL LIKE "2014_01_02" LIMIT 10;')])]),e._v(" "),s("li",[s("p",[e._v('Show the STREAM LOAD task of the specified db, specify label as "load_example_db_20140102"\nSHOW STREAM LOAD FROM example_db WHERE LABEL = "load_example_db_20140102";')])]),e._v(" "),s("li",[s("p",[e._v('Show the STREAM LOAD task of the specified db, specify status as "success", and sort it in descending order by StartTime\nSHOW STREAM LOAD FROM example_db WHERE STATUS = "success" ORDER BY StartTime DESC;')])]),e._v(" "),s("li",[s("p",[e._v("Show the STREAM LOAD task of the specified dB and sort it in descending order by StartTime, and display 10 query results starting with offset 5\nSHOW STREAM LOAD FROM example_db ORDER BY StartTime DESC limit 5,10;\nSHOW STREAM LOAD FROM example_db ORDER BY StartTime DESC limit 10 offset 5;")])])]),e._v(" "),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),s("p",[e._v("SHOW,STREAM LOAD")])])}),[],!1,null,null,null);t.default=i.exports}}]);