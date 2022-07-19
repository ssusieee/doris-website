(window.webpackJsonp=window.webpackJsonp||[]).push([[544],{1172:function(e,a,t){"use strict";t.r(a);var s=t(15),l=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"set-variable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-variable"}},[e._v("#")]),e._v(" SET-VARIABLE")]),e._v(" "),t("h3",{attrs:{id:"name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[e._v("#")]),e._v(" Name")]),e._v(" "),t("p",[e._v("SET VARIABLE")]),e._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("p",[e._v("This statement is mainly used to modify Doris system variables. These system variables can be modified at the global and session level, and some can also be modified dynamically. You can also view these system variables with "),t("code",[e._v("SHOW VARIABLE")]),e._v(".")]),e._v(" "),t("p",[e._v("grammar:")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SET")]),e._v(" variable_assignment "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" variable_assignment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("illustrate:")]),e._v(" "),t("ol",[t("li",[e._v("variable_assignment:\nuser_var_name = expr\n| [GLOBAL | SESSION] system_var_name = expr")])]),e._v(" "),t("blockquote",[t("p",[e._v("Note:")]),e._v(" "),t("ol",[t("li",[e._v("Only ADMIN users can set variables to take effect globally")]),e._v(" "),t("li",[e._v("The globally effective variable does not affect the variable value of the current session, but only affects the variable in the new session.")])])]),e._v(" "),t("p",[e._v("Variables that support both the current session and the global effect include:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("time_zone")])]),e._v(" "),t("li",[t("code",[e._v("wait_timeout")])]),e._v(" "),t("li",[t("code",[e._v("sql_mode")])]),e._v(" "),t("li",[t("code",[e._v("enable_profile")])]),e._v(" "),t("li",[t("code",[e._v("query_timeout")])]),e._v(" "),t("li",[t("code",[e._v("exec_mem_limit")])]),e._v(" "),t("li",[t("code",[e._v("batch_size")])]),e._v(" "),t("li",[t("code",[e._v("allow_partition_column_nullable")])]),e._v(" "),t("li",[t("code",[e._v("insert_visible_timeout_ms")])]),e._v(" "),t("li",[t("code",[e._v("enable_fold_constant_by_be")])])]),e._v(" "),t("p",[e._v("Variables that only support global effects include:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("default_rowset_type")])])]),e._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Set the time zone to Dongba District")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('SET time_zone = "Asia/Shanghai";\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Set the global execution memory size")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SET GLOBAL exec_mem_limit = 137438953472\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])])]),e._v(" "),t("h3",{attrs:{id:"keywords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[e._v("#")]),e._v(" Keywords")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("SET, VARIABLE\n")])])]),t("h3",{attrs:{id:"best-practice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[e._v("#")]),e._v(" Best Practice")])])}),[],!1,null,null,null);a.default=l.exports}}]);