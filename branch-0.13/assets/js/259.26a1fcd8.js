(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{699:function(t,e,n){"use strict";n.r(e);var a=n(55),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"create-function"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-function"}},[t._v("#")]),t._v(" CREATE FUNCTION")]),t._v(" "),n("p",[t._v("##Description")]),t._v(" "),n("h3",{attrs:{id:"syntax"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('CREATE [AGGREGATE] FUNCTION function_name\n\t(angry type [...])\n\tRETURNS ret_type\n\t[INTERMEDIATE inter_type]\n\t[PROPERTIES ("key" = "value" [, ...]) ]\n')])])]),n("h3",{attrs:{id:"parameters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),n("blockquote",[n("p",[n("code",[t._v("AGGREGATE")]),t._v(": If this is the case, it means that the created function is an aggregate function, otherwise it is a scalar function.")]),t._v(" "),n("p",[n("code",[t._v("Function_name")]),t._v(": To create the name of the function, you can include the name of the database. For example: `db1.my_func'.")]),t._v(" "),n("p",[n("code",[t._v("arg_type': The parameter type of the function is the same as the type defined at the time of table building. Variable-length parameters can be represented by")]),t._v(",...`. If it is a variable-length type, the type of the variable-length part of the parameters is the same as the last non-variable-length parameter type.")]),t._v(" "),n("p",[n("code",[t._v("ret_type")]),t._v(": Function return type.")]),t._v(" "),n("p",[n("code",[t._v("Inter_type")]),t._v(": A data type used to represent the intermediate stage of an aggregate function.")]),t._v(" "),n("p",[n("code",[t._v("properties")]),t._v(": Used to set properties related to this function. Properties that can be set include")]),t._v(" "),n("p",[t._v('"Object_file": Custom function dynamic library URL path, currently only supports HTTP/HTTPS protocol, this path needs to remain valid throughout the life cycle of the function. This option is mandatory')]),t._v(" "),n("p",[t._v('"symbol": Function signature of scalar functions for finding function entries from dynamic libraries. This option is mandatory for scalar functions')]),t._v(" "),n("p",[t._v('"init_fn": Initialization function signature of aggregate function. Necessary for aggregation functions')]),t._v(" "),n("p",[t._v('"update_fn": Update function signature of aggregate function. Necessary for aggregation functions')]),t._v(" "),n("p",[t._v('"merge_fn": Merge function signature of aggregate function. Necessary for aggregation functions')]),t._v(" "),n("p",[t._v('"serialize_fn": Serialized function signature of aggregate function. For aggregation functions, it is optional, and if not specified, the default serialization function will be used')]),t._v(" "),n("p",[t._v('"finalize_fn": A function signature that aggregates functions to obtain the final result. For aggregation functions, it is optional. If not specified, the default fetch result function will be used.')]),t._v(" "),n("p",[t._v('"md5": The MD5 value of the function dynamic link library, which is used to verify that the downloaded content is correct. This option is optional')]),t._v(" "),n("p",[t._v('"prepare_fn": Function signature of the prepare function for finding the entry from the dynamic library. This option is optional for custom functions')]),t._v(" "),n("p",[t._v('"close_fn": Function signature of the close function for finding the entry from the dynamic library. This option is optional for custom functions')])]),t._v(" "),n("p",[t._v("This statement creates a custom function. Executing this command requires that the user have "),n("code",[t._v("ADMIN")]),t._v(" privileges.")]),t._v(" "),n("p",[t._v("If the "),n("code",[t._v("function_name")]),t._v(" contains the database name, the custom function will be created in the corresponding database, otherwise the function will be created in the database where the current session is located. The name and parameters of the new function cannot be the same as functions already existing in the current namespace, otherwise the creation will fail. But only with the same name and different parameters can the creation be successful.")]),t._v(" "),n("h2",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Create a custom scalar function")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('CREATE FUNCTION my_add(INT, INT) RETURNS INT PROPERTIES (\n\t"symbol" = "_ZN9doris_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_",\n\t"object_file" ="http://host:port/libmyadd.so"\n);\n')])])])]),t._v(" "),n("li",[n("p",[t._v("Create a custom scalar function with prepare/close functions")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('CREATE FUNCTION my_add(INT, INT) RETURNS INT PROPERTIES (\n\t"symbol" = \t"_ZN9doris_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_",\n\t"prepare_fn" = "_ZN9doris_udf14AddUdf_prepareEPNS_15FunctionContextENS0_18FunctionStateScopeE",\n\t"close_fn" = "_ZN9doris_udf12AddUdf_closeEPNS_15FunctionContextENS0_18FunctionStateScopeE",\n\t"object_file" = "http://host:port/libmyadd.so"\n);\n')])])])]),t._v(" "),n("li",[n("p",[t._v("Create a custom aggregation function")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('CREATE AGGREGATE FUNCTION my_count (BIGINT) RETURNS BIGINT PROPERTIES (\n\t"init_fn"= "_ZN9doris_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_",\n\t"update_fn" = "zn9dorisudf11CountupdateepnsFunctionContexterknsIntvalepnsbigintvale",\n\t"merge_fn" = "zn9dorisudf10CountMergeepnsFunctionContexterknsBigintvaleps2\n\t"finalize_fn" = "zn9dorisudf13CountFinalizepnsFunctionContexterknsBigintvale",\n\t"object_file" = "http://host:port/libudasample.so"\n);\n')])])])])]),t._v(" "),n("h2",{attrs:{id:"keyword"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),n("p",[t._v("CREATE,FUNCTION")])])}),[],!1,null,null,null);e.default=i.exports}}]);