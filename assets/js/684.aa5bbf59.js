(window.webpackJsonp=window.webpackJsonp||[]).push([[684],{1114:function(s,a,t){"use strict";t.r(a);var e=t(2),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"check-decommission-action"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-decommission-action"}},[s._v("#")]),s._v(" Check Decommission Action")]),s._v(" "),t("h2",{attrs:{id:"request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[s._v("#")]),s._v(" Request")]),s._v(" "),t("p",[t("code",[s._v("GET /api/check_decommission")])]),s._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),t("p",[s._v("用于判断指定的BE是否能够被下线。比如判断节点下线后，剩余的节点是否能够满足空间要求和副本数要求等。")]),s._v(" "),t("h2",{attrs:{id:"path-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[s._v("#")]),s._v(" Path parameters")]),s._v(" "),t("p",[s._v("无")]),s._v(" "),t("h2",{attrs:{id:"query-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[s._v("#")]),s._v(" Query parameters")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("host_ports")])]),s._v(" "),t("p",[s._v("指定一个多个BE，由逗号分隔。如："),t("code",[s._v("ip1:port1,ip2:port2,...")]),s._v("。")]),s._v(" "),t("p",[s._v("其中 port 为 BE 的 heartbeat port。")])])]),s._v(" "),t("h2",{attrs:{id:"request-body"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[s._v("#")]),s._v(" Request body")]),s._v(" "),t("p",[s._v("无")]),s._v(" "),t("h2",{attrs:{id:"response"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[s._v("#")]),s._v(" Response")]),s._v(" "),t("p",[s._v("返回可以被下线的节点列表")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n\t"msg": "OK",\n\t"code": 0,\n\t"data": ["192.168.10.11:9050", "192.168.10.11:9050"],\n\t"count": 0\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("查看指定BE节点是否可以下线")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('GET /api/check_decommission?host_ports=192.168.10.11:9050,192.168.10.11:9050\n\nResponse:\n{\n\t"msg": "OK",\n\t"code": 0,\n\t"data": ["192.168.10.11:9050"],\n\t"count": 0\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);