(window.webpackJsonp=window.webpackJsonp||[]).push([[1105],{1730:function(e,t,s){"use strict";s.r(t);var a=s(15),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"insert"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#insert"}},[e._v("#")]),e._v(" INSERT")]),e._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),s("h3",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("INSERT INTO table_name\n[ PARTITION (p1, ...)]\n[ WITH LABEL label]\n[ (column [, ...]) ]\n[ [ hint [, ...] ] ]\n{ VALUES ( { expression | DEFAULT } [, ...] ) [, ...] | query }\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("h3",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),s("blockquote",[s("p",[e._v("tablet_name: Target table for loading data. It can be in the form of "),s("code",[e._v("db_name.table_name")]),e._v(".")]),e._v(" "),s("p",[e._v("partitions: Specifies the partitions to be loaded, with multiple partition names separated by commas. The partitions must exist in "),s("code",[e._v("table_name")]),e._v(",")]),e._v(" "),s("p",[e._v("label: Specifies a label for Insert job.")]),e._v(" "),s("p",[e._v("column_name: The specified destination columns must be columns that exists in "),s("code",[e._v("table_name")]),e._v(".")]),e._v(" "),s("p",[e._v("expression: The corresponding expression that needs to be assigned to a column.")]),e._v(" "),s("p",[e._v("DEFAULT: Let the corresponding columns use default values")]),e._v(" "),s("p",[e._v("query: A common query whose results are written to the target")]),e._v(" "),s("p",[e._v("hint: Indicators used to indicate "),s("code",[e._v("INSERT")]),e._v(" execution. "),s("code",[e._v("Both streaming")]),e._v("and default non "),s("code",[e._v("streaming'methods use synchronization to complete")]),e._v("INSERT' statement execution\nThe non "),s("code",[e._v("streaming'mode returns a label after execution to facilitate users to query the imported status through")]),e._v("SHOW LOAD'.")])]),e._v(" "),s("h3",{attrs:{id:"note"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[e._v("#")]),e._v(" Note")]),e._v(" "),s("p",[e._v("When the "),s("code",[e._v("INSERT'statement is currently executed, the default behavior for data that does not conform to the target table is filtering, such as string length. However, for business scenarios where data is not filtered, the session variable")]),e._v("enable_insert_strict'can be set to "),s("code",[e._v("true' to ensure that")]),e._v("INSERT` will not be successfully executed when data is filtered out.")]),e._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),s("p",[s("code",[e._v("The test")]),e._v("table contains two columns "),s("code",[e._v("c1',")]),e._v("c2'.")]),e._v(" "),s("ol",[s("li",[e._v("Import a row of data into the "),s("code",[e._v("test")]),e._v(" table")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("INSERT INTO test VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT);\nINSERT INTO test (c1) VALUES (1);\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("The first and second sentences have the same effect. When the target column is not specified, the column order in the table is used as the default target column.\nThe third and fourth statements express the same meaning, using the default value of `c2'column to complete data import.")]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[e._v("Import multiline data into the "),s("code",[e._v("test")]),e._v(" table at one time")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("INSERT INTO test VALUES (1, 2), (3, 2 + 2)\nINSERT INTO test (c1, c2) VALUES (1, 2), (3, 2 * 2)\nINSERT INTO test (c1) VALUES (1), (3)\nInsert in test (C1, C2) values (1, Default), (3, Default)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("The effect of the first and second statements is the same, and two data are imported into the "),s("code",[e._v("test'table at one time. The effect of the third and fourth statements is known, using the default value of the")]),e._v("c2'column to import two data into the `test' table.")]),e._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[e._v("Insert into table "),s("code",[e._v("test")]),e._v(" with a query stmt.")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("INSERT INTO test SELECT * FROM test2\nINSERT INTO test (c1, c2) SELECT * from test2\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("ol",{attrs:{start:"4"}},[s("li",[e._v("Insert into table "),s("code",[e._v("test")]),e._v(" with specified partition and label")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("INSERT INTO test PARTITION(p1, p2) WITH LABEL `label1` SELECT * FROM test2;\nINSERT INTO test WITH LABEL `label1` (c1, c2) SELECT * from test2;\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("Asynchronous imports are, in fact, encapsulated asynchronously by a synchronous import. Filling in streaming is as efficient as not filling in * execution.")]),e._v(" "),s("p",[e._v("Since Doris used to import asynchronously, in order to be compatible with the old usage habits, the "),s("code",[e._v("INSERT'statement without streaming will still return a label. Users need to view the status of the")]),e._v("label' import job through the `SHOW LOAD command.")]),e._v(" "),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),s("p",[e._v("INSERT")])])}),[],!1,null,null,null);t.default=n.exports}}]);