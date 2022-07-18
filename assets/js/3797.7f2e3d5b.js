(window.webpackJsonp=window.webpackJsonp||[]).push([[3797],{4427:function(s,a,t){"use strict";t.r(a);var e=t(15),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"alter-routine-load"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alter-routine-load"}},[s._v("#")]),s._v(" ALTER-ROUTINE-LOAD")]),s._v(" "),t("h3",{attrs:{id:"name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[s._v("#")]),s._v(" Name")]),s._v(" "),t("p",[s._v("ALTER ROUTINE LOAD")]),s._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),t("p",[s._v("该语法用于修改已经创建的例行导入作业。")]),s._v(" "),t("p",[s._v("只能修改处于 PAUSED 状态的作业。")]),s._v(" "),t("p",[s._v("语法：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROUTINE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOAD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("job_name\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("job_properties"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" data_source\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("data_source_properties"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ol",[t("li",[t("p",[t("code",[s._v("[db.]job_name")])]),s._v(" "),t("p",[s._v("指定要修改的作业名称。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("tbl_name")])]),s._v(" "),t("p",[s._v("指定需要导入的表的名称。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("job_properties")])]),s._v(" "),t("p",[s._v("指定需要修改的作业参数。目前仅支持如下参数的修改：")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("desired_concurrent_number")])]),s._v(" "),t("li",[t("code",[s._v("max_error_number")])]),s._v(" "),t("li",[t("code",[s._v("max_batch_interval")])]),s._v(" "),t("li",[t("code",[s._v("max_batch_rows")])]),s._v(" "),t("li",[t("code",[s._v("max_batch_size")])]),s._v(" "),t("li",[t("code",[s._v("jsonpaths")])]),s._v(" "),t("li",[t("code",[s._v("json_root")])]),s._v(" "),t("li",[t("code",[s._v("strip_outer_array")])]),s._v(" "),t("li",[t("code",[s._v("strict_mode")])]),s._v(" "),t("li",[t("code",[s._v("timezone")])]),s._v(" "),t("li",[t("code",[s._v("num_as_string")])]),s._v(" "),t("li",[t("code",[s._v("fuzzy_parse")])])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("data_source")])]),s._v(" "),t("p",[s._v("数据源的类型。当前支持：")]),s._v(" "),t("p",[s._v("KAFKA")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("data_source_properties")])]),s._v(" "),t("p",[s._v("数据源的相关属性。目前仅支持：")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("kafka_partitions")])]),s._v(" "),t("li",[t("code",[s._v("kafka_offsets")])]),s._v(" "),t("li",[t("code",[s._v("kafka_broker_list")])]),s._v(" "),t("li",[t("code",[s._v("kafka_topic")])]),s._v(" "),t("li",[s._v("自定义 property，如 "),t("code",[s._v("property.group.id")])])]),s._v(" "),t("p",[s._v("注：")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("kafka_partitions")]),s._v(" 和 "),t("code",[s._v("kafka_offsets")]),s._v(" 用于修改待消费的 kafka partition 的offset，仅能修改当前已经消费的 partition。不能新增 partition。")])])])]),s._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("将 "),t("code",[s._v("desired_concurrent_number")]),s._v(" 修改为 1")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROUTINE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOAD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" db1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("label1\nPROPERTIES\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"desired_concurrent_number"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("将 "),t("code",[s._v("desired_concurrent_number")]),s._v(" 修改为 10，修改 partition 的offset，修改 group id。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROUTINE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOAD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" db1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("label1\nPROPERTIES\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"desired_concurrent_number"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" kafka\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka_partitions"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0, 1, 2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka_offsets"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"100, 200, 100"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"property.group.id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"new_group"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"keywords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" Keywords")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("ALTER, ROUTINE, LOAD\n")])])]),t("h3",{attrs:{id:"best-practice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[s._v("#")]),s._v(" Best Practice")])])}),[],!1,null,null,null);a.default=r.exports}}]);