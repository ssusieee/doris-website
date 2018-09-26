(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{714:function(e,a,s){"use strict";s.r(a);var t=s(15),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"load-json-format-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#load-json-format-data"}},[e._v("#")]),e._v(" Load Json Format Data")]),e._v(" "),s("p",[e._v("Doris supports data load in Json format since version 0.12.")]),e._v(" "),s("h2",{attrs:{id:"supported-load-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-load-methods"}},[e._v("#")]),e._v(" Supported Load Methods")]),e._v(" "),s("p",[e._v("Currently only the following load methods support data import in Json format:")]),e._v(" "),s("ul",[s("li",[e._v("Stream Load")]),e._v(" "),s("li",[e._v("Routine Load")])]),e._v(" "),s("p",[e._v("For specific instructions on the above load methods, please refer to the relevant documentation. This document mainly introduces the instructions for using Json in these load methods.")]),e._v(" "),s("h2",{attrs:{id:"supported-json-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-json-format"}},[e._v("#")]),e._v(" Supported Json Format")]),e._v(" "),s("p",[e._v("Currently, only the following two Json formats are supported:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Multi-line data represented by Array")]),e._v(" "),s("p",[e._v("Json format with Array as the root node. Each element in the Array represents a row of data to be loaded, usually an Object. Examples are as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('[\n    { "id": 123, "city" : "beijing"},\n    { "id": 456, "city" : "shanghai"},\n    ...\n]\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('[\n    { "id": 123, "city" : { "name" : "beijing", "region" : "haidian"}},\n    { "id": 456, "city" : { "name" : "beijing", "region" : "chaoyang"}},\n    ...\n]\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("This method is usually used for the Stream Load method to represent multiple rows of data in a batch of load data.")]),e._v(" "),s("p",[e._v("This method must be used in conjunction with setting "),s("code",[e._v("stripe_outer_array=true")]),e._v(". Doris will expand the array when parsing, and then parse each Object in turn as a row of data.")])]),e._v(" "),s("li",[s("p",[e._v("Single row of data represented by Object")]),e._v(" "),s("p",[e._v("Json format with Object as the root node. The entire Object represents a row of data to be loaded. Examples are as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{ "id": 123, "city" : "beijing"}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{ "id": 123, "city" : { "name" : "beijing", "region" : "haidian" }}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("This method is usually used for the Routine Load method, such as representing a message in Kafka, that is, a row of data.")])])]),e._v(" "),s("h2",{attrs:{id:"json-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json-path"}},[e._v("#")]),e._v(" Json Path")]),e._v(" "),s("p",[e._v("Doris supports extracting the data specified in Json through Json Path.")]),e._v(" "),s("p",[s("strong",[e._v("Note: Because for Array type data, Doris will first expand the array, and finally perform single-line processing according to the Object format. Therefore, the examples after this document will be illustrated with Json data in single Object format.")])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Json Path is not specified")]),e._v(" "),s("p",[e._v("If Json Path is not specified, Doris will use the column names in the table to find the elements in Object by default. Examples are as follows:")]),e._v(" "),s("p",[e._v("The table contains two columns: "),s("code",[e._v("id")]),e._v(", "),s("code",[e._v("city")])]),e._v(" "),s("p",[e._v("Json data is as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{ "id": 123, "city" : "beijing"}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Then Doris will use "),s("code",[e._v("id")]),e._v(", "),s("code",[e._v("city")]),e._v(" to match, and get the final data "),s("code",[e._v("123")]),e._v(" and "),s("code",[e._v("beijing")]),e._v(".")]),e._v(" "),s("p",[e._v("If the Json data is as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{ "id": 123, "name" : "beijing"}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Then use "),s("code",[e._v("id")]),e._v(", "),s("code",[e._v("city")]),e._v(" to match and get the final data "),s("code",[e._v("123")]),e._v(" and "),s("code",[e._v("null")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Json Path is specified")]),e._v(" "),s("p",[e._v("Specify a set of Json Path in the form of a Json data. Each element in the array represents a column to be extracted. Examples are as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('["$.id", "$.name"]\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('["$.id.sub_id", "$.name[0]", "$.city[0]"]\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Doris will use the specified Json Path for data matching and extraction.")])]),e._v(" "),s("li",[s("p",[e._v("Match non-primitive types")]),e._v(" "),s("p",[e._v("The values that the previous example finally matched are all primitive types, such as Integer, String, and so on. Doris currently does not support complex types, such as Array, Map, etc. So when a non-primitive type is matched, Doris will convert the type to a Json format string and load it as a string type. Examples are as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{ "id": 123, "city" : { "name" : "beijing", "region" : "haidian" }}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("The Json Path is "),s("code",[e._v('["$.city"]')]),e._v(". Then the matched elements are:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{ "name" : "beijing", "region" : "haidian" }\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("This element will be converted into a string for subsequent load operations:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("\"{'name':'beijing','region':'haidian'}\"\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("Match failed")]),e._v(" "),s("p",[e._v("When the match fails, "),s("code",[e._v("null")]),e._v(" will be returned. Examples are as follows:")]),e._v(" "),s("p",[e._v("Json data is:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{ "id": 123, "name" : "beijing"}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("The Json Path is "),s("code",[e._v('["$.id", "$.info"]')]),e._v(". Then the matched elements are "),s("code",[e._v("123")]),e._v(" and "),s("code",[e._v("null")]),e._v(".")]),e._v(" "),s("p",[e._v("Doris currently does not distinguish between the null value represented in the Json data and the null value generated when the match fails. Suppose the Json data is:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{ "id": 123, "name" : null }\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Then use the following two Json Path will get the same result: "),s("code",[e._v("123")]),e._v(" and "),s("code",[e._v("null")]),e._v(".")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('["$.id", "$.name"]\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('["$.id", "$.info"]\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("Complete match failed")]),e._v(" "),s("p",[e._v("In order to prevent misoperation caused by some parameter setting errors. When Doris tries to match a row of data, if all columns fail to match, it will be considered a error row. Suppose the Json data is:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{ "id": 123, "city" : "beijing" }\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("If Json Path is incorrectly written as (or when Json Path is not specified, the columns in the table do not contain "),s("code",[e._v("id")]),e._v(" and "),s("code",[e._v("city")]),e._v("):")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('["$.ad", "$.infa"]\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Will result in a complete match failure, the line will be marked as an error row, instead of producing "),s("code",[e._v("null, null")]),e._v(".")])])]),e._v(" "),s("h2",{attrs:{id:"json-path-and-columns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json-path-and-columns"}},[e._v("#")]),e._v(" Json Path and Columns")]),e._v(" "),s("p",[e._v("Json Path is used to specify how to extract data in JSON format, and Columns specify the mapping and conversion relationship of columns. The two can be used together.")]),e._v(" "),s("p",[e._v("In other words, it is equivalent to using Json Path to rearrange the data in a Json format according to the column order specified in Json Path. After that, you can use Columns to map the rearranged source data to the columns of the table. Examples are as follows:")]),e._v(" "),s("p",[e._v("Data content:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{"k1": 1, "k2": 2}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Table schema:")]),e._v(" "),s("p",[s("code",[e._v("k2 int, k1 int")])]),e._v(" "),s("p",[e._v("Load statement 1 (take Stream Load as an example):")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('curl -v --location-trusted -u root: -H "format: json" -H "jsonpaths: [\\"$.k2\\", \\"$.k1\\"]" -T example.json http:/ /127.0.0.1:8030/api/db1/tbl1/_stream_load\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("In Load statement 1, only Json Path is specified, and Columns are not specified. The role of Json Path is to extract the Json data in the order of the fields in the Json Path, and then write it in the order of the table schema. The final loaded data results are as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("+------+------+\n| k1   | k2   |\n+------+------+\n|    2 |    1 |\n+------+------+\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v('You will see that the actual k1 column has loaded the value of the "k2" column in the Json data. This is because the field name in Json is not equivalent to the field name in the table schema. We need to explicitly specify the mapping relationship between the two.')]),e._v(" "),s("p",[e._v("Load statement 2:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('curl -v --location-trusted -u root: -H "format: json" -H "jsonpaths: [\\"$.k2\\", \\"$.k1\\"]" -H "columns: k2, k1 "-T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Compared to load statement 1, here is the Columns field, which is used to describe the mapping relationship of columns, in the order of "),s("code",[e._v("k2, k1")]),e._v(". That is, after extracting in the order of the fields in the Json Path, specify the first column as the value of the k2 column in the table, and the second column as the value of the k1 column in the table. The final loaded data results are as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("+------+------+\n| k1   | k2   |\n+------+------+\n|    1 |    2 |\n+------+------+\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("Of course, like other load methods, you can perform column conversion operations in Columns. Examples are as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('curl -v --location-trusted -u root: -H "format: json" -H "jsonpaths: [\\"$.k2\\", \\"$.k1\\"]" -H "columns: k2, tmp_k1 , k1 = tmp_k1 * 100" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("The above example will multiply the value of k1 by 100 and import it. The final imported data results are as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("+------+------+\n| k1   | k2   |\n+------+------+\n|  100 |    2 |\n+------+------+\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h2",{attrs:{id:"null-and-default-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#null-and-default-value"}},[e._v("#")]),e._v(" NULL and Default value")]),e._v(" "),s("p",[e._v("The sample data is as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('[\n    {"k1": 1, "k2": "a"},\n    {"k1": 2},\n    {"k1": 3, "k2": "c"},\n]\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("The table schema is: "),s("code",[e._v('k1 int null, k2 varchar(32) null default "x"')])]),e._v(" "),s("p",[e._v("The load statement is as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('curl -v --location-trusted -u root: -H "format: json" -H "strip_outer_array: true" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("The import results that users may expect are as follows, that is, for missing columns, fill in default values.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("+------+------+\n| k1   | k2   |\n+------+------+\n|    1 |    a |\n+------+------+\n|    2 |    x |\n+------+------+\n|    3 |    c |\n+------+------+\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("p",[e._v("But the actual load result is as follows, that is, for missing columns, NULL is added.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("+------+------+\n| k1   | k2   |\n+------+------+\n|    1 |    a |\n+------+------+\n|    2 | NULL |\n+------+------+\n|    3 |    c |\n+------+------+\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("p",[e._v('This is because through the information in the load statement, Doris does not know that "the missing column is the k2 column in the table".\nIf you want to load the above data as expected, the load statement is as follows:')]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('curl -v --location-trusted -u root: -H "format: json" -H "strip_outer_array: true" -H "jsonpaths: [\\"$.k1\\", \\"$.k2\\"]"- H "columns: k1, tmp_k2, k2 = ifnull(tmp_k2,\'x\')" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"largetint-and-decimal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#largetint-and-decimal"}},[e._v("#")]),e._v(" LargetInt and Decimal")]),e._v(" "),s("p",[e._v("Doris supports data types such as largeint and decimal with larger data range and higher data precision. However, due to the fact that the maximum range of the rapid JSON library used by Doris for the resolution of digital types is Int64 and double, there may be some problems when importing largeint or decimal by JSON format,  such as loss of precision, data conversion error, etc.")]),e._v(" "),s("p",[e._v("For example:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('[\n    {"k1": 1, "k2":9999999999999.999999 }\n]\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("The imported K2 column type is "),s("code",[e._v("Decimal (16,9)")]),e._v("the import data is: "),s("code",[e._v("9999999999.999999")]),e._v(". During the JSON load which cause the precision loss of double conversion, the imported data convert to: "),s("code",[e._v("10000000000.0002")]),e._v(". It is a import error.")]),e._v(" "),s("p",[e._v("To solve this problem, Doris provides a param "),s("code",[e._v("num_as_string")]),e._v(". Doris converts the numeric type to a string when parsing JSON data and JSON load without losing precision.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('curl -v --location-trusted -u root: -H "format: json" -H "num_as_string: true" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("But using the param will cause unexpected side effects. Doris currently does not support composite types, such as Array, Map, etc. So when a non basic type is matched, Doris will convert the type to a string in JSON format."),s("code",[e._v("num_as_string")]),e._v("will also convert compound type numbers into strings, for example:")]),e._v(" "),s("p",[e._v("JSON Data:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('{ "id": 123, "city" : { "name" : "beijing", "city_id" : 1 }}\n')])])]),s("p",[e._v("Not use "),s("code",[e._v("num_as_string")]),e._v(", the data of the city column is:")]),e._v(" "),s("p",[s("code",[e._v('{ "name" : "beijing", "city_id" : 1 }')])]),e._v(" "),s("p",[e._v("Use "),s("code",[e._v("num_as_string")]),e._v(", the data of the city column is:")]),e._v(" "),s("p",[s("code",[e._v('{ "name" : "beijing", "city_id" : "1" }')])]),e._v(" "),s("p",[e._v("Warning, the param leads to the city_id of the numeric type in the compound type is treated as a string column and quoted, which is different from the original data.")]),e._v(" "),s("p",[e._v("Therefore, when using JSON load. we should try to avoid importing largeint, decimal and composite types at the same time. If you can't avoid it, you need to fully understand the "),s("strong",[e._v("side effects")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),s("h3",{attrs:{id:"stream-load"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stream-load"}},[e._v("#")]),e._v(" Stream Load")]),e._v(" "),s("p",[e._v("Because of the indivisible nature of the Json format, when using Stream Load to load a Json format file, the file content will be fully loaded into memory before processing. Therefore, if the file is too large, it may occupy more memory.")]),e._v(" "),s("p",[e._v("Suppose the table structure is:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("id      INT     NOT NULL,\ncity    VARHCAR NULL,\ncode    INT     NULL\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("ol",[s("li",[s("p",[e._v("Load single-line data 1")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{"id": 100, "city": "beijing", "code" : 1}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[s("p",[e._v("Not specify Json Path")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('curl --location-trusted -u user:passwd -H "format: json" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Results:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("100     beijing     1\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("Specify Json Path")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.city\\",\\"$.code\\"]" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Results:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("100     beijing     1\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])])]),e._v(" "),s("li",[s("p",[e._v("Load sigle-line data 2")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{"id": 100, "content": {"city": "beijing", "code" : 1}}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[s("p",[e._v("Specify Json Path")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.content.city\\",\\"$.content.code\\"]" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Results:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("100     beijing     1\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])])]),e._v(" "),s("li",[s("p",[e._v("Load multi-line data")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('[\n    {"id": 100, "city": "beijing", "code" : 1},\n    {"id": 101, "city": "shanghai"},\n    {"id": 102, "city": "tianjin", "code" : 3},\n    {"id": 103, "city": "chongqing", "code" : 4},\n    {"id": 104, "city": ["zhejiang", "guangzhou"], "code" : 5},\n    {\n        "id": 105,\n        "city": {\n            "order1": ["guangzhou"]\n        }, \n        "code" : 6\n    }\n]\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br")])]),s("ul",[s("li",[s("p",[e._v("Specify Json Path")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.city\\",\\"$.code\\"]" -H "strip_outer_array: true" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Results:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('100     beijing                     1\n101     shanghai                    NULL\n102     tianjin                     3\n103     chongqing                   4\n104     ["zhejiang","guangzhou"]    5\n105     {"order1":["guangzhou"]}    6\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])])])])]),e._v(" "),s("li",[s("p",[e._v("Convert load data")]),e._v(" "),s("p",[e._v("The data is still the multi-row data in Example 3. Now you need to add 1 to the "),s("code",[e._v("code")]),e._v(" column in the loaded data and load it.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.city\\",\\"$.code\\"]" -H "strip_outer_array: true" -H "columns: id, city, tmpc, code=tmpc+1" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Results:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('100     beijing                     2\n101     shanghai                    NULL\n102     tianjin                     4\n103     chongqing                   5\n104     ["zhejiang","guangzhou"]    6\n105     {"order1":["guangzhou"]}    7\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])])])]),e._v(" "),s("h3",{attrs:{id:"routine-load"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#routine-load"}},[e._v("#")]),e._v(" Routine Load")]),e._v(" "),s("p",[e._v("Routine Load processes Json data the same as Stream Load. I will not repeat them here.")]),e._v(" "),s("p",[e._v("For the Kafka data source, the content of each Massage is treated as a complete Json data. If multiple rows of data expressed in Array format in a Massage are loaded, multiple rows will be loaded, and Kafka's offset will only increase by 1. If an Array format Json represents multiple rows of data, but because the Json format error causes the parsing Json to fail, the error row will only increase by 1 (because the parsing fails, in fact, Doris cannot determine how many rows of data it contains, and can only add one row of errors rows record).")])])}),[],!1,null,null,null);a.default=n.exports}}]);