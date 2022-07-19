(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{843:function(t,e,s){"use strict";s.r(e);var a=s(15),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"hudi-external-table-of-doris"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hudi-external-table-of-doris"}},[t._v("#")]),t._v(" Hudi External Table of Doris")]),t._v(" "),s("p",[t._v("Hudi External Table of Doris provides Doris with the ability to access hdui external tables directly, eliminating the need for cumbersome data import and leveraging Doris' own OLAP capabilities to solve hudi table data analysis problems.")]),t._v(" "),s("ol",[s("li",[t._v("support hudi data sources for Doris")]),t._v(" "),s("li",[t._v("Support joint query between Doris and hdui data source tables to perform more complex analysis operations")])]),t._v(" "),s("p",[t._v("This document introduces how to use this feature and the considerations.")]),t._v(" "),s("h2",{attrs:{id:"glossary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[t._v("#")]),t._v(" Glossary")]),t._v(" "),s("h3",{attrs:{id:"noun-in-doris"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#noun-in-doris"}},[t._v("#")]),t._v(" Noun in Doris")]),t._v(" "),s("ul",[s("li",[t._v("FE: Frontend, the front-end node of Doris, responsible for metadata management and request access")]),t._v(" "),s("li",[t._v("BE: Backend, the backend node of Doris, responsible for query execution and data storage")])]),t._v(" "),s("h2",{attrs:{id:"how-to-use"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[t._v("#")]),t._v(" How to use")]),t._v(" "),s("h3",{attrs:{id:"create-hudi-external-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-hudi-external-table"}},[t._v("#")]),t._v(" Create Hudi External Table")]),t._v(" "),s("p",[t._v("Hudi tables can be created in Doris with or without schema. You do not need to declare the column definitions of the table when creating an external table, Doris can resolve the column definitions of the table in hive metastore when querying the table.")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Create a separate external table to mount the Hudi table."),s("br"),t._v("\nThe syntax can be viewed in "),s("code",[t._v("HELP CREATE TABLE")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Syntax")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("EXTERNAL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" table_name\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column_definition1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" column_definition2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HUDI\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"comment"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nPROPERTIES "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hudi.database"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hudi_db_in_hive_metastore"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hudi.table"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hudi_table_in_hive_metastore"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hudi.hive.metastore.uris"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thrift://127.0.0.1:9083"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Example: Mount hudi_table_in_hive_metastore under hudi_db_in_hive_metastore in Hive MetaStore ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("t_hudi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HUDI\nPROPERTIES "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hudi.database"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hudi_db_in_hive_metastore"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hudi.table"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hudi_table_in_hive_metastore"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hudi.hive.metastore.uris"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thrift://127.0.0.1:9083"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Example：Mount hudi table with schema.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("t_hudi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id number"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user name"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HUDI\nPROPERTIES "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hudi.database"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hudi_db_in_hive_metastore"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hudi.table"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hudi_table_in_hive_metastore"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hudi.hive.metastore.uris"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thrift://127.0.0.1:9083"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br")])])])]),t._v(" "),s("h4",{attrs:{id:"parameter-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameter-description"}},[t._v("#")]),t._v(" Parameter Description")]),t._v(" "),s("ul",[s("li",[t._v("column_definition\n"),s("ul",[s("li",[t._v("When create hudi table without schema(recommended), doris will resolve columns from hive metastore when query.")]),t._v(" "),s("li",[t._v("When create hudi table with schema, the columns must exist in corresponding table in hive metastore.")])])]),t._v(" "),s("li",[t._v("ENGINE needs to be specified as HUDI")]),t._v(" "),s("li",[t._v("PROPERTIES property.\n"),s("ul",[s("li",[s("code",[t._v("hudi.hive.metastore.uris")]),t._v(": Hive Metastore service address")]),t._v(" "),s("li",[s("code",[t._v("hudi.database")]),t._v(": the name of the database to which Hudi is mounted")]),t._v(" "),s("li",[s("code",[t._v("hudi.table")]),t._v(": the name of the table to which Hudi is mounted, not required when mounting Hudi database.")])])])]),t._v(" "),s("h3",{attrs:{id:"show-table-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-table-structure"}},[t._v("#")]),t._v(" Show table structure")]),t._v(" "),s("p",[t._v("Show table structure can be viewed by "),s("code",[t._v("HELP SHOW CREATE TABLE")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"data-type-matching"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-type-matching"}},[t._v("#")]),t._v(" Data Type Matching")]),t._v(" "),s("p",[t._v("The supported Hudi column types correspond to Doris in the following table.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Hudi")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Doris")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("INTEGER")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("INT")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("LONG")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("BIGINT")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("DOUBLE")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("DOUBLE")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("TIMESTAMP")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("DATETIME")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Timestamp to Datetime with loss of precision")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("STRING")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("STRING")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("UUID")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("VARCHAR")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Use VARCHAR instead")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("DECIMAL")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("DECIMAL")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("TIME")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("not supported")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("FIXED")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("not supported")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("BINARY")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("not supported")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("STRUCT")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("not supported")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("LIST")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("not supported")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("MAP")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("not supported")])])])]),t._v(" "),s("p",[s("strong",[t._v("Note:")])]),t._v(" "),s("ul",[s("li",[t._v("The current default supported version of hudi is 0.10.0 and has not been tested in other versions. More versions will be supported in the future.")])]),t._v(" "),s("h3",{attrs:{id:"query-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-usage"}},[t._v("#")]),t._v(" Query Usage")]),t._v(" "),s("p",[t._v("Once you have finished building the hdui external table in Doris, it is no different from a normal Doris OLAP table except that you cannot use the data models in Doris (rollup, preaggregation, materialized views, etc.)")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" t_hudi "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" k1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" k3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'term'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("or")]),t._v(" k4 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("like")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%doris'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);