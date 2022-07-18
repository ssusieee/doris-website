(window.webpackJsonp=window.webpackJsonp||[]).push([[3413],{4043:function(s,t,a){"use strict";a.r(t);var e=a(15),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"log-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-action"}},[s._v("#")]),s._v(" Log Action")]),s._v(" "),a("h2",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[s._v("#")]),s._v(" Request")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("GET /rest/v1/log\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),a("p",[s._v("GET 用于获取 Doris 最新的一部分 WARNING 日志，POST 方法用于动态设置 FE 的日志级别。")]),s._v(" "),a("h2",{attrs:{id:"path-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[s._v("#")]),s._v(" Path parameters")]),s._v(" "),a("p",[s._v("无")]),s._v(" "),a("h2",{attrs:{id:"query-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[s._v("#")]),s._v(" Query parameters")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("add_verbose")])]),s._v(" "),a("p",[s._v("POST 方法可选参数。开启指定 Package 的 DEBUG 级别日志。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("del_verbose")])]),s._v(" "),a("p",[s._v("POST 方法可选参数。关闭指定 Package 的 DEBUG 级别日志。")])])]),s._v(" "),a("h2",{attrs:{id:"request-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[s._v("#")]),s._v(" Request body")]),s._v(" "),a("p",[s._v("无")]),s._v(" "),a("h2",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[s._v("#")]),s._v(" Response")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('GET /rest/v1/log\n\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"LogContents": {\n\t\t\t"logPath": "/home/disk1/cmy/git/doris/core-for-ui/output/fe/log/fe.warn.log",\n\t\t\t"log": "<pre>2020-08-26 15:54:30,081 WARN (UNKNOWN 10.81.85.89_9213_1597652404352(-1)|1) [Catalog.notifyNewFETypeTransfer():2356] notify new FE type transfer: UNKNOWN</br>2020-08-26 15:54:32,089 WARN (RepNode 10.81.85.89_9213_1597652404352(-1)|61) [Catalog.notifyNewFETypeTransfer():2356] notify new FE type transfer: MASTER</br>2020-08-26 15:54:35,121 WARN (stateListener|73) [Catalog.replayJournal():2510] replay journal cost too much time: 2975 replayedJournalId: 232383</br>2020-08-26 15:54:48,117 WARN (leaderCheckpointer|75) [Catalog.replayJournal():2510] replay journal cost too much time: 2812 replayedJournalId: 232383</br></pre>",\n\t\t\t"showingLast": "603 bytes of log"\n\t\t},\n\t\t"LogConfiguration": {\n\t\t\t"VerboseNames": "org",\n\t\t\t"AuditNames": "slow_query,query",\n\t\t\t"Level": "INFO"\n\t\t}\n\t},\n\t"count": 0\n}  \n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("其中 "),a("code",[s._v("data.LogContents.log")]),s._v(" 表示最新一部分 "),a("code",[s._v("fe.warn.log")]),s._v(" 中的日志内容。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('POST /rest/v1/log?add_verbose=org\n\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"LogConfiguration": {\n\t\t\t"VerboseNames": "org",\n\t\t\t"AuditNames": "slow_query,query",\n\t\t\t"Level": "INFO"\n\t\t}\n\t},\n\t"count": 0\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);