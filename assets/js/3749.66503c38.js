(window.webpackJsonp=window.webpackJsonp||[]).push([[3749],{4378:function(s,a,t){"use strict";t.r(a);var e=t(15),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"alter-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alter-database"}},[s._v("#")]),s._v(" ALTER-DATABASE")]),s._v(" "),t("h3",{attrs:{id:"name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[s._v("#")]),s._v(" Name")]),s._v(" "),t("p",[s._v("ALTER DATABASE")]),s._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),t("p",[s._v("该语句用于设置指定数据库的属性。（仅管理员使用）")]),s._v(" "),t("ol",[t("li",[s._v("设置数据库数据量配额，单位为B/K/KB/M/MB/G/GB/T/TB/P/PB")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" db_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATA")]),s._v(" QUOTA quota"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("重命名数据库")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" db_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RENAME")]),s._v(" new_db_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("设置数据库的副本数量配额")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" db_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" REPLICA QUOTA quota"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("说明：\n重命名数据库后，如需要，请使用 REVOKE 和 GRANT 命令修改相应的用户权限。\n数据库的默认数据量配额为1024GB，默认副本数量配额为1073741824。")]),s._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),t("ol",[t("li",[s._v("设置指定数据库数据量配额")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" example_db "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATA")]),s._v(" QUOTA "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10995116277760")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n上述单位为字节"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("等价于\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" example_db "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATA")]),s._v(" QUOTA "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("T"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" example_db "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATA")]),s._v(" QUOTA "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("G"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" example_db "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATA")]),s._v(" QUOTA "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v("M"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("将数据库 example_db 重命名为 example_db2")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" example_db "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RENAME")]),s._v(" example_db2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("设定指定数据库副本数量配额")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" example_db "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" REPLICA QUOTA "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("102400")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"keywords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" Keywords")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ALTER,DATABASE,RENAME\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"best-practice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[s._v("#")]),s._v(" Best Practice")])])}),[],!1,null,null,null);a.default=r.exports}}]);