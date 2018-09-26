(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{741:function(e,s,t){"use strict";t.r(s);var a=t(15),o=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"sql-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql-mode"}},[e._v("#")]),e._v(" SQL MODE")]),e._v(" "),t("p",[e._v("The SQL MODE supported by Doris refers to the sql mode management mechanism of MySQL. Each client can set its own sql mode, and the database administrator with admin permission can set the global sql mode.")]),e._v(" "),t("h2",{attrs:{id:"sql-mode-introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql-mode-introduction"}},[e._v("#")]),e._v(" Sql mode introduction")]),e._v(" "),t("p",[e._v("SQL MODE enables users to switch between different styles of SQL syntax and data verification strictness, making Doris more compatible with other databases. For example, in some databases, the '||' symbol is a string connector, but in Doris it is equivalent to 'or'. At this time, users only need to use SQL mode to switch to the style they want. Each client can set sql mode, which is valid in the current conversation. Only users with admin permission can set global SQL mode.")]),e._v(" "),t("h2",{attrs:{id:"theory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#theory"}},[e._v("#")]),e._v(" Theory")]),e._v(" "),t("p",[e._v("SQL MODE is stored in session variables with a 64 bit long type. Each bit of this address represents the on / off (1 for on, 0 for off) state of a mode. As long as we know the specific bit of each mode, we can easily and quickly verify and operate SQL mode through bit operation.")]),e._v(" "),t("p",[e._v("Every time you query sql mode, the long type will be parsed into a user-readable string. Similarly, the sql mode string sent by the user to the server will be parsed into a long type that can be stored in session variables.")]),e._v(" "),t("p",[e._v("The set global sql mode will be persisted, so the operation on the global sql mode is always only once, even after the program is restarted, the last global sql mode can be recovered.")]),e._v(" "),t("h2",{attrs:{id:"operation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#operation"}},[e._v("#")]),e._v(" Operation")]),e._v(" "),t("p",[e._v("1、set sql mode")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('set global sql_mode = "DEFAULT"\nset session sql_mode = "DEFAULT"\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("blockquote",[t("p",[e._v("At present, Doris's default sql mode is DEFAULT (but it will be changed in the future modification).\nSetting global sql mode requires admin permission and affects all clients that connect later.\nSetting session sql mode will only affect the current conversation client. The default setting way is session.")])]),e._v(" "),t("p",[e._v("2、select sql mode")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select @@global.sql_mode\nselect @@session.sql_mode\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("blockquote",[t("p",[e._v("In addition to this method, you can also view the current sql mode by returning all session variables as follows")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("show global variables\nshow session variables\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("h2",{attrs:{id:"supported-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-mode"}},[e._v("#")]),e._v(" supported mode")]),e._v(" "),t("ol",[t("li",[t("p",[t("code",[e._v("PIPES_AS_CONCAT")])]),e._v(" "),t("p",[e._v("Treat '||' as a string concatenation operator (same as CONCAT()) rather than as a synonym for OR. (e.g., "),t("code",[e._v("'a'||'b' = 'ab'")]),e._v(", "),t("code",[e._v("1||0 = '10'")]),e._v(")")])])]),e._v(" "),t("h2",{attrs:{id:"combine-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#combine-mode"}},[e._v("#")]),e._v(" combine mode")]),e._v(" "),t("p",[e._v("(Work in progress)")])])}),[],!1,null,null,null);s.default=o.exports}}]);