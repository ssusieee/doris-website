(window.webpackJsonp=window.webpackJsonp||[]).push([[599],{1224:function(t,s,e){"use strict";e.r(s);var a=e(15),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"system-action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#system-action"}},[t._v("#")]),t._v(" System Action")]),t._v(" "),e("h2",{attrs:{id:"request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET /rest/v1/system\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),e("p",[t._v("System Action is used for information about the Proc system built in Doris.")]),t._v(" "),e("h2",{attrs:{id:"path-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),e("p",[t._v("None")]),t._v(" "),e("h2",{attrs:{id:"query-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("path")])]),t._v(" "),e("p",[t._v("Optional parameter, specify the path of proc")])])]),t._v(" "),e("h2",{attrs:{id:"request-body"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),e("p",[t._v("None")]),t._v(" "),e("h2",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("p",[t._v("Take "),e("code",[t._v("/dbs/10003/10054/partitions/10053/10055")]),t._v(" as an example:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"href_columns": ["TabletId", "MetaUrl", "CompactionStatus"],\n\t\t"column_names": ["TabletId", "ReplicaId", "BackendId", "SchemaHash", "Version", "VersionHash", "LstSuccessVersion", "LstSuccessVersionHash", "LstFailedVersion", "LstFailedVersionHash", "LstFailedTime", "DataSize", "RowCount", "State", "LstConsistencyCheckTime", "CheckVersion", "CheckVersionHash", "VersionCount", "PathHash", "MetaUrl", "CompactionStatus"],\n\t\t"rows": [{\n\t\t\t"SchemaHash": "1294206575",\n\t\t\t"LstFailedTime": "\\\\N",\n\t\t\t"LstFailedVersion": "-1",\n\t\t\t"MetaUrl": "URL",\n\t\t\t"__hrefPaths": ["http://192.168.100.100:8030/rest/v1/system?path=/dbs/10003/10054/partitions/10053/10055/10056", "http://192.168.100.100:8043/api/meta/header/10056/1294206575", "http://192.168.100.100:8043/api/compaction/show?tablet_id=10056&schema_hash=1294206575"],\n\t\t\t"CheckVersionHash": "-1",\n\t\t\t"ReplicaId": "10057",\n\t\t\t"VersionHash": "4611804212003004639",\n\t\t\t"LstConsistencyCheckTime": "\\\\N",\n\t\t\t"LstSuccessVersionHash": "4611804212003004639",\n\t\t\t"CheckVersion": "-1",\n\t\t\t"Version": "6",\n\t\t\t"VersionCount": "2",\n\t\t\t"State": "NORMAL",\n\t\t\t"BackendId": "10032",\n\t\t\t"DataSize": "776",\n\t\t\t"LstFailedVersionHash": "0",\n\t\t\t"LstSuccessVersion": "6",\n\t\t\t"CompactionStatus": "URL",\n\t\t\t"TabletId": "10056",\n\t\t\t"PathHash": "-3259732870068082628",\n\t\t\t"RowCount": "21"\n\t\t}]\n\t},\n\t"count": 1\n}\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br"),e("span",{staticClass:"line-number"},[t._v("29")]),e("br"),e("span",{staticClass:"line-number"},[t._v("30")]),e("br"),e("span",{staticClass:"line-number"},[t._v("31")]),e("br"),e("span",{staticClass:"line-number"},[t._v("32")]),e("br"),e("span",{staticClass:"line-number"},[t._v("33")]),e("br")])]),e("p",[t._v("The "),e("code",[t._v("column_names")]),t._v(" in the data part is the header information, and "),e("code",[t._v("href_columns")]),t._v(" indicates which columns in the table are hyperlink columns. Each element in the "),e("code",[t._v("rows")]),t._v(" array represents a row. Among them, "),e("code",[t._v("__hrefPaths")]),t._v(" is not the table data, but the link URL of the hyperlink column, which corresponds to the column in "),e("code",[t._v("href_columns")]),t._v(" one by one.")])])}),[],!1,null,null,null);s.default=n.exports}}]);