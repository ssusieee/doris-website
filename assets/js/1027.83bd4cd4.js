(window.webpackJsonp=window.webpackJsonp||[]).push([[1027],{1652:function(e,s,a){"use strict";a.r(s);var n=a(15),t=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v('<!-\nLicensed to the Apache Software Foundation (ASF) under one\nor more contributor license agreements. See the NOTICE file\ndistributed with this work for additional information\nregarding copyright ownership. The ASF licenses this file\nto you under the Apache License, Version 2.0 (the\n"License"); you may not use this file except in compliance\nwith the License. You may obtain a copy of the License at')]),e._v(" "),a("p",[e._v("http://www.apache.org/licenses/LICENSE-2.0")]),e._v(" "),a("p",[e._v('Unless required by applicable law or agreed to in writing,\nsoftware distributed under the License is distributed on an\n"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, either express or implied. See the License for the\nspecific language governing permissions and limitations\nunder the License.\n->')]),e._v(" "),a("h1",{attrs:{id:"create-materialized-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-materialized-view"}},[e._v("#")]),e._v(" CREATE MATERIALIZED VIEW")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("p",[e._v("This statement is used to create a materialized view.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Asynchronous syntax. After the call is successful, it only indicates that the task to create the materialized view is successfully submitted. The user needs to check the progress of the materialized view by using ```show alter table rollup```.\n\nAfter the progress is FINISHED, you can use the ```desc [table_name] all``` command to view the schema of the materialized view.\n")])])]),a("p",[e._v("syntax:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('```\n\nCREATE MATERIALIZED VIEW [MG name] as [query]\n[PROPERTIES ("key" = "value")]\n\n```\n')])])]),a("ol",[a("li",[a("p",[e._v("MV name")]),e._v(" "),a("p",[e._v("Name of the materialized view. Required.")]),e._v(" "),a("p",[e._v("Materialized view names in the same table cannot be duplicated.")])]),e._v(" "),a("li",[a("p",[e._v("query")]),e._v(" "),a("p",[e._v("The query used to construct the materialized view. The result of the query is the data of the materialized view. The query format currently supported is:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"})])])]),e._v(" "),a("p",[e._v("SELECT select_expr [, select_expr ...]\n    FROM [Base view name]\n    GROUP BY column_name [, column_name ...]\n    ORDER BY column_name [, column_name ...]\n    \n    The syntax is the same as the query syntax.\n```")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("select_expr: All columns in the materialized view's schema.\n\n+ Only single columns and aggregate columns without expression calculation are supported.\n+ The aggregate function currently only supports SUM, MIN, MAX, and the parameters of the aggregate function can only be a single column without expression calculation.\n+ Contains at least one single column.\n+ All involved columns can only appear once.\n\nbase view name: The original table name of the materialized view. Required.\n\n+ Must be a single table and not a subquery\n\ngroup by: Grouped column of materialized view, optional.\n\n+ If not filled, the data will not be grouped.\n\norder by: Sort order of materialized view, optional.\n\n+ The order of the column sort must be the same as the column declaration order in select_expr.\n+ If order by is not specified, sort columns are automatically supplemented according to the rules.\n\t\n\t+ If the materialized view is an aggregate type, all grouping columns are automatically supplemented with sort columns.\n\t+ If the materialized view is a non-aggregated type, the first 36 bytes are automatically supplemented as a sorted column. If the number of sorts for automatic replenishment is less than three, the first three are sorted.\n+ If the query contains a grouping column, the sort order must be the same as the grouping column.\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[e._v("properties")]),e._v(" "),a("p",[e._v("Declare some configuration of materialized view, optional.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('PROPERTIES ("key" = "value", "key" = "value" ...)\n\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("The following configurations can be declared here:")]),e._v(" "),a("ul",[a("li",[e._v("short_key: the number of columns.")]),e._v(" "),a("li",[e._v("timeout: timeout for materialized view construction.")])])])]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("p",[e._v("Base table structure is")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> desc duplicate_table;\n+-------+--------+------+------+---------+-------+\n| Field | Type   | Null | Key  | Default | Extra |\n+-------+--------+------+------+---------+-------+\n| k1    | INT    | Yes  | true | N/A     |       |\n| k2    | INT    | Yes  | true | N/A     |       |\n| k3    | BIGINT | Yes  | true | N/A     |       |\n| k4    | BIGINT | Yes  | true | N/A     |       |\n+-------+--------+------+------+---------+-------+\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("ol",[a("li",[a("p",[e._v("Create a materialized view containing only the columns of the original table (k1, k2)")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("create materialized view k1_k2 as\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])]),e._v(" "),a("p",[e._v("select k1, k2 from duplicate_table;\n```")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("The materialized view's schema is shown below. The materialized view contains only two columns k1, k2 without any aggregation.\n\n```\n+-----------------+-------+--------+------+------+---------+-------+\n| IndexName       | Field | Type   | Null | Key  | Default | Extra |\n+-----------------+-------+--------+------+------+---------+-------+\n| k1_k2           | k1    | INT    | Yes  | true | N/A     |       |\n|                 | k2    | INT    | Yes  | true | N/A     |       |\n+-----------------+-------+--------+------+------+---------+-------+\n```\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[e._v("Create a materialized view sorted by k2")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("create materialized view k2_order as\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])]),e._v(" "),a("p",[e._v("select k2, k1 from duplicate_table order by k2;")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n\tThe materialized view's schema is shown below. The materialized view contains only two columns k2, k1, where column k2 is a sorted column without any aggregation.\n\n\t```\n\t+-----------------+-------+--------+------+-------+---------+-------+\n\t| IndexName       | Field | Type   | Null | Key   | Default | Extra |\n\t+-----------------+-------+--------+------+-------+---------+-------+\n\t| k2_order        | k2    | INT    | Yes  | true  | N/A     |       |\n\t|                 | k1    | INT    | Yes  | false | N/A     | NONE  |\n\t+-----------------+-------+--------+------+-------+---------+-------+\n\t```\n\n3. Create a materialized view grouped by k1, k2 with k3 as the SUM aggregate\n\n\t```\n\tcreate materialized view k1_k2_sumk3 as\nselect k1, k2, sum (k3) from duplicate_table group by k1, k2;\n\t```\n\n\tThe materialized view's schema is shown below. The materialized view contains two columns k1, k2 and sum (k3), where k1, k2 are grouped columns, and sum (k3) is the sum of the k3 columns grouped according to k1, k2.\n\n\tBecause the materialized view does not declare a sort column, and the materialized view has aggregate data, the system supplements the grouping columns k1 and k2 by default.\n\n\t```\n\t+-----------------+-------+--------+------+-------+---------+-------+\n\t| IndexName       | Field | Type   | Null | Key   | Default | Extra |\n\t+-----------------+-------+--------+------+-------+---------+-------+\n\t| k1_k2_sumk3     | k1    | INT    | Yes  | true  | N/A     |       |\n\t|                 | k2    | INT    | Yes  | true  | N/A     |       |\n\t|                 | k3    | BIGINT | Yes  | false | N/A     | SUM   |\n\t+-----------------+-------+--------+------+-------+---------+-------+\n\t```\n\n4. Create a materialized view to remove duplicate rows\n\n\t```\n\tcreate materialized view deduplicate as\nselect k1, k2, k3, k4 from duplicate_table group by k1, k2, k3, k4;\n\t```\n\n\tThe materialized view schema is shown below. The materialized view contains k1, k2, k3, and k4 columns, and there are no duplicate rows.\n\n\t```\n\t+-----------------+-------+--------+------+-------+---------+-------+\n\t| IndexName       | Field | Type   | Null | Key   | Default | Extra |\n\t+-----------------+-------+--------+------+-------+---------+-------+\n\t| deduplicate     | k1    | INT    | Yes  | true  | N/A     |       |\n\t|                 | k2    | INT    | Yes  | true  | N/A     |       |\n\t|                 | k3    | BIGINT | Yes  | true  | N/A     |       |\n\t|                 | k4    | BIGINT | Yes  | true  | N/A     |       |\n\t+-----------------+-------+--------+------+-------+---------+-------+\n\t```\n\n5. Create a non-aggregated materialized view that does not declare a sort column\n\n\tThe schema of all_type_table is as follows:\n\n\t```\n\t+-------+--------------+------+-------+---------+-------+\n\t| Field | Type         | Null | Key   | Default | Extra |\n\t+-------+--------------+------+-------+---------+-------+\n\t| k1    | TINYINT      | Yes  | true  | N/A     |       |\n\t| k2    | SMALLINT     | Yes  | true  | N/A     |       |\n\t| k3    | INT          | Yes  | true  | N/A     |       |\n\t| k4    | BIGINT       | Yes  | true  | N/A     |       |\n\t| k5    | DECIMAL(9,0) | Yes  | true  | N/A     |       |\n\t| k6    | DOUBLE       | Yes  | false | N/A     | NONE  |\n\t| k7    | VARCHAR(20)  | Yes  | false | N/A     | NONE  |\n\t+-------+--------------+------+-------+---------+-------+\n\t```\n\n\tThe materialized view contains k3, k4, k5, k6, k7 columns, and no sort column is declared. The creation statement is as follows:\n\n\t```\n\tcreate materialized view mv_1 as\nselect k3, k4, k5, k6, k7 from all_type_table;\n\t```\n\n\tThe system's default supplementary sort columns are k3, k4, and k5. The sum of the number of bytes for these three column types is 4 (INT) + 8 (BIGINT) + 16 (DECIMAL) = 28 <36. So these three columns are added as sort columns.\n\t\n\tThe materialized view's schema is as follows. You can see that the key fields of the k3, k4, and k5 columns are true, which is the sort order. The key field of the k6, k7 columns is false, that is, non-sorted.\n\n\t```\n\t+----------------+-------+--------------+------+-------+---------+-------+\n\t| IndexName      | Field | Type         | Null | Key   | Default | Extra |\n\t+----------------+-------+--------------+------+-------+---------+-------+\n\t| mv_1           | k3    | INT          | Yes  | true  | N/A     |       |\n\t|                | k4    | BIGINT       | Yes  | true  | N/A     |       |\n\t|                | k5    | DECIMAL(9,0) | Yes  | true  | N/A     |       |\n\t|                | k6    | DOUBLE       | Yes  | false | N/A     | NONE  |\n\t|                | k7    | VARCHAR(20)  | Yes  | false | N/A     | NONE  |\n\t+----------------+-------+--------------+------+-------+---------+-------+\n\t```\n\t\n## keyword\n  CREATE, MATERIALIZED, VIEW\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br"),a("span",{staticClass:"line-number"},[e._v("39")]),a("br"),a("span",{staticClass:"line-number"},[e._v("40")]),a("br"),a("span",{staticClass:"line-number"},[e._v("41")]),a("br"),a("span",{staticClass:"line-number"},[e._v("42")]),a("br"),a("span",{staticClass:"line-number"},[e._v("43")]),a("br"),a("span",{staticClass:"line-number"},[e._v("44")]),a("br"),a("span",{staticClass:"line-number"},[e._v("45")]),a("br"),a("span",{staticClass:"line-number"},[e._v("46")]),a("br"),a("span",{staticClass:"line-number"},[e._v("47")]),a("br"),a("span",{staticClass:"line-number"},[e._v("48")]),a("br"),a("span",{staticClass:"line-number"},[e._v("49")]),a("br"),a("span",{staticClass:"line-number"},[e._v("50")]),a("br"),a("span",{staticClass:"line-number"},[e._v("51")]),a("br"),a("span",{staticClass:"line-number"},[e._v("52")]),a("br"),a("span",{staticClass:"line-number"},[e._v("53")]),a("br"),a("span",{staticClass:"line-number"},[e._v("54")]),a("br"),a("span",{staticClass:"line-number"},[e._v("55")]),a("br"),a("span",{staticClass:"line-number"},[e._v("56")]),a("br"),a("span",{staticClass:"line-number"},[e._v("57")]),a("br"),a("span",{staticClass:"line-number"},[e._v("58")]),a("br"),a("span",{staticClass:"line-number"},[e._v("59")]),a("br"),a("span",{staticClass:"line-number"},[e._v("60")]),a("br"),a("span",{staticClass:"line-number"},[e._v("61")]),a("br"),a("span",{staticClass:"line-number"},[e._v("62")]),a("br"),a("span",{staticClass:"line-number"},[e._v("63")]),a("br"),a("span",{staticClass:"line-number"},[e._v("64")]),a("br"),a("span",{staticClass:"line-number"},[e._v("65")]),a("br"),a("span",{staticClass:"line-number"},[e._v("66")]),a("br"),a("span",{staticClass:"line-number"},[e._v("67")]),a("br"),a("span",{staticClass:"line-number"},[e._v("68")]),a("br"),a("span",{staticClass:"line-number"},[e._v("69")]),a("br"),a("span",{staticClass:"line-number"},[e._v("70")]),a("br"),a("span",{staticClass:"line-number"},[e._v("71")]),a("br"),a("span",{staticClass:"line-number"},[e._v("72")]),a("br"),a("span",{staticClass:"line-number"},[e._v("73")]),a("br"),a("span",{staticClass:"line-number"},[e._v("74")]),a("br"),a("span",{staticClass:"line-number"},[e._v("75")]),a("br"),a("span",{staticClass:"line-number"},[e._v("76")]),a("br"),a("span",{staticClass:"line-number"},[e._v("77")]),a("br"),a("span",{staticClass:"line-number"},[e._v("78")]),a("br"),a("span",{staticClass:"line-number"},[e._v("79")]),a("br"),a("span",{staticClass:"line-number"},[e._v("80")]),a("br"),a("span",{staticClass:"line-number"},[e._v("81")]),a("br"),a("span",{staticClass:"line-number"},[e._v("82")]),a("br"),a("span",{staticClass:"line-number"},[e._v("83")]),a("br"),a("span",{staticClass:"line-number"},[e._v("84")]),a("br"),a("span",{staticClass:"line-number"},[e._v("85")]),a("br"),a("span",{staticClass:"line-number"},[e._v("86")]),a("br"),a("span",{staticClass:"line-number"},[e._v("87")]),a("br"),a("span",{staticClass:"line-number"},[e._v("88")]),a("br"),a("span",{staticClass:"line-number"},[e._v("89")]),a("br"),a("span",{staticClass:"line-number"},[e._v("90")]),a("br"),a("span",{staticClass:"line-number"},[e._v("91")]),a("br"),a("span",{staticClass:"line-number"},[e._v("92")]),a("br"),a("span",{staticClass:"line-number"},[e._v("93")]),a("br"),a("span",{staticClass:"line-number"},[e._v("94")]),a("br"),a("span",{staticClass:"line-number"},[e._v("95")]),a("br"),a("span",{staticClass:"line-number"},[e._v("96")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);