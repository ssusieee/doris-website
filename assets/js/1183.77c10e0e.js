(window.webpackJsonp=window.webpackJsonp||[]).push([[1183],{1808:function(e,a,t){"use strict";t.r(a);var s=t(15),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"data-deletion-recovery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-deletion-recovery"}},[e._v("#")]),e._v(" Data Deletion Recovery")]),e._v(" "),t("p",[e._v("In order to avoid disasters caused by misoperation, Doris supports data recovery of accidentally deleted databases/tables/partitions. After dropping table or database, Doris will not physically delete the data immediately, but will keep it in Trash for a period of time ( The default is 1 day, which can be configured through the "),t("code",[e._v("catalog_trash_expire_second")]),e._v(" parameter in fe.conf). The administrator can use the RECOVER command to restore accidentally deleted data.")]),e._v(" "),t("h2",{attrs:{id:"start-data-recovery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-data-recovery"}},[e._v("#")]),e._v(" Start Data Recovery")]),e._v(" "),t("p",[e._v("1.restore the database named example_db")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("RECOVER "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("DATABASE")]),e._v(" example_db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("2.restore the table named example_tbl")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("RECOVER "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("TABLE")]),e._v(" example_db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("example_tbl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("3.restore partition named p1 in table example_tbl")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("RECOVER "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("PARTITION")]),e._v(" p1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" example_tbl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"more-help"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#more-help"}},[e._v("#")]),e._v(" More Help")]),e._v(" "),t("p",[e._v("For more detailed syntax and best practices used by RECOVER, please refer to the "),t("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/RECOVER.html"}},[e._v("RECOVER")]),e._v(" command manual, You can also type "),t("code",[e._v("HELP RECOVER")]),e._v(" on the MySql client command line for more help.")],1)])}),[],!1,null,null,null);a.default=r.exports}}]);