(window.webpackJsonp=window.webpackJsonp||[]).push([[1222],{1847:function(e,s,t){"use strict";t.r(s);var a=t(15),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"statement-execution-action"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#statement-execution-action"}},[e._v("#")]),e._v(" Statement Execution Action")]),e._v(" "),t("h2",{attrs:{id:"request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[e._v("#")]),e._v(" Request")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("POST /api/query/<ns_name>/<db_name>\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("p",[e._v("Statement Execution Action is used to execute a statement and return the result.")]),e._v(" "),t("h2",{attrs:{id:"path-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[e._v("#")]),e._v(" Path parameters")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v("<db_name>")])]),e._v(" "),t("p",[e._v("Specify the database name. This database will be regarded as the default database of the current session. If the table name in SQL does not qualify the database name, this database will be used.")])])]),e._v(" "),t("h2",{attrs:{id:"query-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[e._v("#")]),e._v(" Query parameters")]),e._v(" "),t("p",[e._v("None")]),e._v(" "),t("h2",{attrs:{id:"request-body"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[e._v("#")]),e._v(" Request body")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n    "stmt" : "select * from tbl1"\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("ul",[t("li",[e._v("sql 字段为具体的 SQL")])]),e._v(" "),t("h3",{attrs:{id:"response"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[e._v("#")]),e._v(" Response")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("返回结果集")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "type": "result_set",\n        "data": [\n            [1],\n            [2]\n        ],\n        "meta": [{\n            "name": "k1",\n            "type": "INT"\n        }],\n        "status": {},\n        "time": 10\n    },\n    "count": 0\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br")])]),t("ul",[t("li",[e._v("The type field is "),t("code",[e._v("result_set")]),e._v(", which means the result set is returned. The results need to be obtained and displayed based on the meta and data fields. The meta field describes the column information returned. The data field returns the result row. The column type in each row needs to be judged by the content of the meta field. The status field returns some information of MySQL, such as the number of alarm rows, status code, etc. The time field return the execution time, unit is millisecond.")])])]),e._v(" "),t("li",[t("p",[e._v("Return execution result")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "type": "exec_status",\n        "status": {}\n    },\n    "count": 0,\n    "time": 10\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br")])]),t("ul",[t("li",[e._v("The type field is "),t("code",[e._v("exec_status")]),e._v(", which means the execution result is returned. At present, if the return result is received, it means that the statement was executed successfully.")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);