(window.webpackJsonp=window.webpackJsonp||[]).push([[699],{1325:function(s,a,e){"use strict";e.r(a);var n=e(15),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"query-profile-action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-profile-action"}},[s._v("#")]),s._v(" Query Profile Action")]),s._v(" "),e("h2",{attrs:{id:"request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[s._v("#")]),s._v(" Request")]),s._v(" "),e("p",[e("code",[s._v("GET /rest/v2/manager/query/query_info")])]),s._v(" "),e("p",[e("code",[s._v("GET /rest/v2/manager/query/sql/{query_id}")])]),s._v(" "),e("p",[e("code",[s._v("GET /rest/v2/manager/query/profile/text/{query_id}")])]),s._v(" "),e("p",[e("code",[s._v("GET /rest/v2/manager/query/profile/fragments/{query_id}")])]),s._v(" "),e("p",[e("code",[s._v("GET /rest/v2/manager/query/profile/graph/{query_id}")])]),s._v(" "),e("h2",{attrs:{id:"获取查询信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取查询信息"}},[s._v("#")]),s._v(" 获取查询信息")]),s._v(" "),e("p",[e("code",[s._v("GET /rest/v2/manager/query/query_info")])]),s._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),e("p",[s._v("可获取集群所有 fe 节点 select 查询信息。")]),s._v(" "),e("h3",{attrs:{id:"query-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[s._v("#")]),s._v(" Query parameters")]),s._v(" "),e("ul",[e("li",[e("p",[e("code",[s._v("query_id")])]),s._v(" "),e("p",[s._v("可选，指定返回查询的queryID， 默认返回所有查询的信息。")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("search")])]),s._v(" "),e("p",[s._v("可选，指定返回包含字符串的查询信息，目前仅进行字符串匹配。")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("is_all_node")])]),s._v(" "),e("p",[s._v("可选，若为 true 则返回所有fe节点的查询信息，若为 false 则返回当前fe节点的查询信息。默认为true。")])])]),s._v(" "),e("h3",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[s._v("#")]),s._v(" Response")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "Query ID",\n            "FE节点",\n            "查询用户",\n            "执行数据库",\n            "Sql",\n            "查询类型",\n            "开始时间",\n            "结束时间",\n            "执行时长",\n            "状态"\n        ],\n        "rows": [\n            [\n                ...\n            ]\n        ]\n    },\n    "count": 0\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("h3",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('GET /rest/v2/manager/query/query_info\n\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "Query ID",\n            "FE节点",\n            "查询用户",\n            "执行数据库",\n            "Sql",\n            "查询类型",\n            "开始时间",\n            "结束时间",\n            "执行时长",\n            "状态"\n        ],\n        "rows": [\n            [\n                "d7c93d9275334c35-9e6ac5f295a7134b",\n                "127.0.0.1:8030",\n                "root",\n                "default_cluster:testdb",\n                "select c.id, c.name, p.age, p.phone, c.date, c.cost from cost c join people p on c.id = p.id where p.age > 20 order by c.id",\n                "Query",\n                "2021-07-29 16:59:12",\n                "2021-07-29 16:59:12",\n                "109ms",\n                "EOF"\n            ]\n        ]\n    },\n    "count": 0\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br")])]),e("h2",{attrs:{id:"获取指定查询的sql和文本profile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取指定查询的sql和文本profile"}},[s._v("#")]),s._v(" 获取指定查询的sql和文本profile")]),s._v(" "),e("p",[e("code",[s._v("GET /rest/v2/manager/query/sql/{query_id}")])]),s._v(" "),e("p",[e("code",[s._v("GET /rest/v2/manager/query/profile/text/{query_id}")])]),s._v(" "),e("h3",{attrs:{id:"description-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description-2"}},[s._v("#")]),s._v(" Description")]),s._v(" "),e("p",[s._v("用于获取指定query id的sql和profile文本。")]),s._v(" "),e("h3",{attrs:{id:"path-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[s._v("#")]),s._v(" Path parameters")]),s._v(" "),e("ul",[e("li",[e("p",[e("code",[s._v("query_id")])]),s._v(" "),e("p",[s._v("query id。")])])]),s._v(" "),e("h3",{attrs:{id:"query-parameters-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters-2"}},[s._v("#")]),s._v(" Query parameters")]),s._v(" "),e("ul",[e("li",[e("p",[e("code",[s._v("is_all_node")])]),s._v(" "),e("p",[s._v("可选，若为 true 则在所有fe节点中查询指定query id的信息，若为 false 则在当前连接的fe节点中查询指定query id的信息。默认为true。")])])]),s._v(" "),e("h3",{attrs:{id:"response-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[s._v("#")]),s._v(" Response")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "sql": ""\n    },\n    "count": 0\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "profile": ""\n    },\n    "count": 0\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h3",{attrs:{id:"examples-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("获取 sql：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('GET /rest/v2/manager/query/sql/d7c93d9275334c35-9e6ac5f295a7134b\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "sql": "select c.id, c.name, p.age, p.phone, c.date, c.cost from cost c join people p on c.id   = p.id where p.age > 20 order by c.id"\n    },\n    "count": 0\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])])])]),s._v(" "),e("h2",{attrs:{id:"获取指定查询fragment和instance信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取指定查询fragment和instance信息"}},[s._v("#")]),s._v(" 获取指定查询fragment和instance信息")]),s._v(" "),e("p",[e("code",[s._v("GET /rest/v2/manager/query/profile/fragments/{query_id}")])]),s._v(" "),e("h3",{attrs:{id:"description-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description-3"}},[s._v("#")]),s._v(" Description")]),s._v(" "),e("p",[s._v("用于获取指定query id的fragment名称，instance id和执行时长。")]),s._v(" "),e("h3",{attrs:{id:"path-parameters-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters-2"}},[s._v("#")]),s._v(" Path parameters")]),s._v(" "),e("ul",[e("li",[e("p",[e("code",[s._v("query_id")])]),s._v(" "),e("p",[s._v("query id。")])])]),s._v(" "),e("h3",{attrs:{id:"query-parameters-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters-3"}},[s._v("#")]),s._v(" Query parameters")]),s._v(" "),e("ul",[e("li",[e("p",[e("code",[s._v("is_all_node")])]),s._v(" "),e("p",[s._v("可选，若为 true 则在所有fe节点中查询指定query id的信息，若为 false 则在当前连接的fe节点中查询指定query id的信息。默认为true。")])])]),s._v(" "),e("h3",{attrs:{id:"response-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[s._v("#")]),s._v(" Response")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{\n    "msg": "success",\n    "code": 0,\n    "data": [\n        {\n            "fragment_id": "",\n            "time": "",\n            "instance_id": {\n                "": ""\n            }\n        }\n    ],\n    "count": 0\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("h3",{attrs:{id:"examples-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-3"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v('```\nGET /rest/v2/manager/query/profile/fragments/d7c93d9275334c35-9e6ac5f295a7134b\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": [\n        {\n            "fragment_id": "0",\n            "time": "36.169ms",\n            "instance_id": {\n                "d7c93d9275334c35-9e6ac5f295a7134e": "36.169ms"\n            }\n        },\n        {\n            "fragment_id": "1",\n            "time": "20.710ms",\n            "instance_id": {\n                "d7c93d9275334c35-9e6ac5f295a7134c": "20.710ms"\n            }\n        },\n        {\n            "fragment_id": "2",\n            "time": "7.83ms",\n            "instance_id": {\n                "d7c93d9275334c35-9e6ac5f295a7134d": "7.83ms"\n            }\n        }\n    ],\n    "count": 0\n}\n```\n')])])]),e("h2",{attrs:{id:"获取指定query-id树状profile信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取指定query-id树状profile信息"}},[s._v("#")]),s._v(" 获取指定query id树状profile信息")]),s._v(" "),e("p",[e("code",[s._v("GET /rest/v2/manager/query/profile/graph/{query_id}")])]),s._v(" "),e("h3",{attrs:{id:"description-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description-4"}},[s._v("#")]),s._v(" Description")]),s._v(" "),e("p",[s._v("获取指定query id树状profile信息，同 "),e("code",[s._v("show query profile")]),s._v(" 指令。")]),s._v(" "),e("h3",{attrs:{id:"path-parameters-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters-3"}},[s._v("#")]),s._v(" Path parameters")]),s._v(" "),e("ul",[e("li",[e("p",[e("code",[s._v("query_id")])]),s._v(" "),e("p",[s._v("query id。")])])]),s._v(" "),e("h3",{attrs:{id:"query-parameters-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters-4"}},[s._v("#")]),s._v(" Query parameters")]),s._v(" "),e("ul",[e("li",[e("p",[e("code",[s._v("fragment_id")]),s._v(" 和 "),e("code",[s._v("instance_id")])]),s._v(" "),e("p",[s._v("可选，这两个参数需同时指定或同时不指定。"),e("br"),s._v("\n同时不指定则返回profile 简易树形图，相当于"),e("code",[s._v("show query profile '/query_id'")]),s._v(";"),e("br"),s._v("\n同时指定则返回指定instance详细profile树形图，相当于"),e("code",[s._v("show query profile '/query_id/fragment_id/instance_id'")]),s._v(".")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("is_all_node")])]),s._v(" "),e("p",[s._v("可选，若为 true 则在所有fe节点中查询指定query id的信息，若为 false 则在当前连接的fe节点中查询指定query id的信息。默认为true。")])])]),s._v(" "),e("h3",{attrs:{id:"response-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-4"}},[s._v("#")]),s._v(" Response")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "graph":""\n    },\n    "count": 0\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);