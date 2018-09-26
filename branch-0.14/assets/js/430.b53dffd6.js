(window.webpackJsonp=window.webpackJsonp||[]).push([[430],{870:function(a,t,s){"use strict";s.r(t);var e=s(55),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"导入-json-格式数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导入-json-格式数据"}},[a._v("#")]),a._v(" 导入 Json 格式数据")]),a._v(" "),s("p",[a._v("Doris 从 0.12 版本开始支持 Json 格式的数据导入。")]),a._v(" "),s("h2",{attrs:{id:"支持的导入方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持的导入方式"}},[a._v("#")]),a._v(" 支持的导入方式")]),a._v(" "),s("p",[a._v("目前只有以下导入方式支持 Json 格式的数据导入：")]),a._v(" "),s("ul",[s("li",[a._v("Stream Load")]),a._v(" "),s("li",[a._v("Routine Load")])]),a._v(" "),s("p",[a._v("关于以上导入方式的具体说明，请参阅相关文档。本文档主要介绍在这些导入方式中关于 Json 部分的使用说明。")]),a._v(" "),s("h2",{attrs:{id:"支持的-json-格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持的-json-格式"}},[a._v("#")]),a._v(" 支持的 Json 格式")]),a._v(" "),s("p",[a._v("当前前仅支持以下两种 Json 格式：")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("以 Array 表示的多行数据")]),a._v(" "),s("p",[a._v("以 Array 为根节点的 Json 格式。Array 中的每个元素表示要导入的一行数据，通常是一个 Object。示例如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('[\n    { "id": 123, "city" : "beijing"},\n    { "id": 456, "city" : "shanghai"},\n    ...\n]\n')])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('[\n    { "id": 123, "city" : { "name" : "beijing", "region" : "haidian"}},\n    { "id": 456, "city" : { "name" : "beijing", "region" : "chaoyang"}},\n    ...\n]\n')])])]),s("p",[a._v("这种方式通常用于 Stream Load 导入方式，以便在一批导入数据中表示多行数据。")]),a._v(" "),s("p",[a._v("这种方式必须配合设置 "),s("code",[a._v("stripe_outer_array=true")]),a._v(" 使用。Doris在解析时会将数组展开，然后依次解析其中的每一个 Object 作为一行数据。")])]),a._v(" "),s("li",[s("p",[a._v("以 Object 表示的单行数据")]),a._v(" "),s("p",[a._v("以 Object 为根节点的 Json 格式。整个 Object 即表示要导入的一行数据。示例如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('{ "id": 123, "city" : "beijing"}\n')])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('{ "id": 123, "city" : { "name" : "beijing", "region" : "haidian" }}\n')])])]),s("p",[a._v("这种方式通常用于 Routine Load 导入方式，如表示 Kafka 中的一条消息，即一行数据。")])])]),a._v(" "),s("h2",{attrs:{id:"json-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json-path"}},[a._v("#")]),a._v(" Json Path")]),a._v(" "),s("p",[a._v("Doris 支持通过 Json Path 抽取 Json 中指定的数据。")]),a._v(" "),s("p",[s("strong",[a._v("注：因为对于 Array 类型的数据，Doris 会先进行数组展开，最终按照 Object 格式进行单行处理。所以本文档之后的示例都以单个 Object 格式的 Json 数据进行说明。")])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("不指定 Json Path")]),a._v(" "),s("p",[a._v("如果没有指定 Json Path，则 Doris 会默认使用表中的列名查找 Object 中的元素。示例如下：")]),a._v(" "),s("p",[a._v("表中包含两列: "),s("code",[a._v("id")]),a._v(", "),s("code",[a._v("city")])]),a._v(" "),s("p",[a._v("Json 数据如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('{ "id": 123, "city" : "beijing"}\n')])])]),s("p",[a._v("则 Doris 会使用 "),s("code",[a._v("id")]),a._v(", "),s("code",[a._v("city")]),a._v(" 进行匹配，得到最终数据 "),s("code",[a._v("123")]),a._v(" 和 "),s("code",[a._v("beijing")]),a._v("。")]),a._v(" "),s("p",[a._v("如果 Json 数据如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('{ "id": 123, "name" : "beijing"}\n')])])]),s("p",[a._v("则使用 "),s("code",[a._v("id")]),a._v(", "),s("code",[a._v("city")]),a._v(" 进行匹配，得到最终数据 "),s("code",[a._v("123")]),a._v(" 和 "),s("code",[a._v("null")]),a._v("。")])]),a._v(" "),s("li",[s("p",[a._v("指定 Json Path")]),a._v(" "),s("p",[a._v("通过一个 Json 数据的形式指定一组 Json Path。数组中的每个元素表示一个要抽取的列。示例如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('["$.id", "$.name"]\n')])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('["$.id.sub_id", "$.name[0]", "$.city[0]"]\n')])])]),s("p",[a._v("Doris 会使用指定的 Json Path 进行数据匹配和抽取。")])]),a._v(" "),s("li",[s("p",[a._v("匹配非基本类型")]),a._v(" "),s("p",[a._v("前面的示例最终匹配到的数值都是基本类型，如整型、字符串等。Doris 当前暂不支持复合类型，如 Array、Map 等。所以当匹配到一个非基本类型时，Doris 会将该类型转换为 Json 格式的字符串，并以字符串类型进行导入。示例如下：")]),a._v(" "),s("p",[a._v("Json 数据为：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('{ "id": 123, "city" : { "name" : "beijing", "region" : "haidian" }}\n')])])]),s("p",[a._v("Json Path 为 "),s("code",[a._v('["$.city"]')]),a._v("。则匹配到的元素为：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('{ "name" : "beijing", "region" : "haidian" }\n')])])]),s("p",[a._v("该元素会被转换为字符串进行后续导入操作：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("\"{'name':'beijing','region':'haidian'}\"\n")])])])]),a._v(" "),s("li",[s("p",[a._v("匹配失败")]),a._v(" "),s("p",[a._v("当匹配失败时，将会返回 "),s("code",[a._v("null")]),a._v("。示例如下：")]),a._v(" "),s("p",[a._v("Json 数据为：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('{ "id": 123, "name" : "beijing"}\n')])])]),s("p",[a._v("Json Path 为 "),s("code",[a._v('["$.id", "$.info"]')]),a._v("。则匹配到的元素为 "),s("code",[a._v("123")]),a._v(" 和 "),s("code",[a._v("null")]),a._v("。")]),a._v(" "),s("p",[a._v("Doris 当前不区分 Json 数据中表示的 null 值，和匹配失败时产生的 null 值。假设 Json 数据为：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('{ "id": 123, "name" : null }\n')])])]),s("p",[a._v("则使用以下两种 Json Path 会获得相同的结果："),s("code",[a._v("123")]),a._v(" 和 "),s("code",[a._v("null")]),a._v("。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('["$.id", "$.name"]\n')])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('["$.id", "$.info"]\n')])])])]),a._v(" "),s("li",[s("p",[a._v("完全匹配失败")]),a._v(" "),s("p",[a._v("为防止一些参数设置错误导致的误操作。Doris 在尝试匹配一行数据时，如果所有列都匹配失败，则会认为这个是一个错误行。假设 Json 数据为：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('{ "id": 123, "city" : "beijing" }\n')])])]),s("p",[a._v("如果 Json Path 错误的写为（或者不指定 Json Path 时，表中的列不包含 "),s("code",[a._v("id")]),a._v(" 和 "),s("code",[a._v("city")]),a._v("）：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('["$.ad", "$.infa"]\n')])])]),s("p",[a._v("则会导致完全匹配失败，则该行会标记为错误行，而不是产出 "),s("code",[a._v("null, null")]),a._v("。")])])]),a._v(" "),s("h2",{attrs:{id:"json-path-和-columns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json-path-和-columns"}},[a._v("#")]),a._v(" Json Path 和 Columns")]),a._v(" "),s("p",[a._v("Json Path 用于指定如何对 JSON 格式中的数据进行抽取，而 Columns 指定列的映射和转换关系。两者可以配合使用。")]),a._v(" "),s("p",[a._v("换句话说，相当于通过 Json Path，将一个 Json 格式的数据，按照 Json Path 中指定的列顺序进行了列的重排。之后，可以通过 Columns，将这个重排后的源数据和表的列进行映射。举例如下：")]),a._v(" "),s("p",[a._v("数据内容：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('{"k1" : 1, "k2": 2}\n')])])]),s("p",[a._v("表结构：")]),a._v(" "),s("p",[s("code",[a._v("k2 int, k1 int")])]),a._v(" "),s("p",[a._v("导入语句1（以 Stream Load 为例）：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('curl -v --location-trusted -u root: -H "format: json" -H "jsonpaths: [\\"$.k2\\", \\"$.k1\\"]" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')])])]),s("p",[a._v("导入语句1中，仅指定了 Json Path，没有指定 Columns。其中 Json Path 的作用是将 Json 数据按照 Json Path 中字段的顺序进行抽取，之后会按照表结构的顺序进行写入。最终导入的数据结果如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("+------+------+\n| k1   | k2   |\n+------+------+\n|    2 |    1 |\n+------+------+\n")])])]),s("p",[a._v('会看到，实际的 k1 列导入了 Json 数据中的 "k2" 列的值。这是因为，Json 中字段名称并不等同于表结构中字段的名称。我们需要显式的指定这两者之间的映射关系。')]),a._v(" "),s("p",[a._v("导入语句2：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('curl -v --location-trusted -u root: -H "format: json" -H "jsonpaths: [\\"$.k2\\", \\"$.k1\\"]" -H "columns: k2, k1" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')])])]),s("p",[a._v("相比如导入语句1，这里增加了 Columns 字段，用于描述列的映射关系，按 "),s("code",[a._v("k2, k1")]),a._v(" 的顺序。即按Json Path 中字段的顺序抽取后，指定第一列为表中 k2 列的值，而第二列为表中 k1 列的值。最终导入的数据结果如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("+------+------+\n| k1   | k2   |\n+------+------+\n|    1 |    2 |\n+------+------+\n")])])]),s("p",[a._v("当然，如其他导入一样，可以在 Columns 中进行列的转换操作。示例如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('curl -v --location-trusted -u root: -H "format: json" -H "jsonpaths: [\\"$.k2\\", \\"$.k1\\"]" -H "columns: k2, tmp_k1, k1 = tmp_k1 * 100" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')])])]),s("p",[a._v("上述示例会将 k1 的值乘以 100 后导入。最终导入的数据结果如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("+------+------+\n| k1   | k2   |\n+------+------+\n|  100 |    2 |\n+------+------+\n")])])]),s("h2",{attrs:{id:"null-和-default-值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#null-和-default-值"}},[a._v("#")]),a._v(" NULL 和 Default 值")]),a._v(" "),s("p",[a._v("示例数据如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('[\n    {"k1": 1, "k2": "a"},\n    {"k1": 2},\n    {"k1": 3, "k2": "c"},\n]\n')])])]),s("p",[a._v("表结构为："),s("code",[a._v('k1 int null, k2 varchar(32) null default "x"')])]),a._v(" "),s("p",[a._v("导入语句如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('curl -v --location-trusted -u root: -H "format: json" -H "strip_outer_array: true" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')])])]),s("p",[a._v("用户可能期望的导入结果如下，即对于缺失的列，填写默认值。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("+------+------+\n| k1   | k2   |\n+------+------+\n|    1 |    a |\n+------+------+\n|    2 |    x |\n+------+------+\n|    3 |    c |\n+------+------+\n")])])]),s("p",[a._v("但实际的导入结果如下，即对于缺失的列，补上了 NULL。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("+------+------+\n| k1   | k2   |\n+------+------+\n|    1 |    a |\n+------+------+\n|    2 | NULL |\n+------+------+\n|    3 |    c |\n+------+------+\n")])])]),s("p",[a._v("这是因为通过导入语句中的信息，Doris 并不知道 “缺失的列是表中的 k2 列”。\n如果要对以上数据按照期望结果导入，则导入语句如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('curl -v --location-trusted -u root: -H "format: json" -H "strip_outer_array: true" -H "jsonpaths: [\\"$.k1\\", \\"$.k2\\"]" -H "columns: k1, tmp_k2, k2 = ifnull(tmp_k2, \'x\')" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')])])]),s("h2",{attrs:{id:"largetint与decimal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#largetint与decimal"}},[a._v("#")]),a._v(" LargetInt与Decimal")]),a._v(" "),s("p",[a._v("Doris支持LargeInt与Decimal等数据范围更大，数据精度更高的数据类型。但是由于Doris使用的Rapid Json库对于数字类型能够解析的最大范围为Int64与Double，这导致了通过Json导入LargeInt或Decimal时可能会出现：精度丢失，数据转换出错等问题。")]),a._v(" "),s("p",[a._v("示例数据如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('[\n    {"k1": 1, "k2":9999999999999.999999 }\n]\n')])])]),s("p",[a._v("导入k2列类型为"),s("code",[a._v("Decimal(16, 9)")]),a._v("，数据为:"),s("code",[a._v("9999999999999.999999")]),a._v("。在进行Json导入时，由于Double转换的精度丢失导致了导入的数据为："),s("code",[a._v("10000000000000.0002")]),a._v("，引发了导入出错。")]),a._v(" "),s("p",[a._v("为了解决这个问题，Doris在导入时提供了 "),s("code",[a._v("num_as_string")]),a._v("的开关。Doris在解析Json数据时会将数字类型转为字符串，然后在确保不会出现精度丢失的情况下进行导入。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('curl -v --location-trusted -u root: -H "format: json" -H "num_as_string: true" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')])])]),s("p",[a._v("但是开启这个开关会引起一些意想不到的副作用。Doris 当前暂不支持复合类型，如 Array、Map 等。所以当匹配到一个非基本类型时，Doris 会将该类型转换为 Json 格式的字符串，而"),s("code",[a._v("num_as_string")]),a._v("会同样将复合类型的数字转换为字符串，举个例子：")]),a._v(" "),s("p",[a._v("Json 数据为：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v('{ "id": 123, "city" : { "name" : "beijing", "city_id" : 1 }}\n')])])]),s("p",[a._v("不开启"),s("code",[a._v("num_as_string")]),a._v("时，导入的city列的数据为:")]),a._v(" "),s("p",[s("code",[a._v('{ "name" : "beijing", "city_id" : 1 }')])]),a._v(" "),s("p",[a._v("而开启了"),s("code",[a._v("num_as_string")]),a._v("时，导入的city列的数据为:")]),a._v(" "),s("p",[s("code",[a._v('{ "name" : "beijing", "city_id" : "1" }')])]),a._v(" "),s("p",[a._v("注意，这里导致了复合类型原先为1的数字类型的city_id被作为字符串列处理并添加上了引号，与原始数据相比，产生了变化。")]),a._v(" "),s("p",[a._v("所以用在使用Json导入时，要尽量避免LargeInt与Decimal与复合类型的同时导入。如果无法避免，则需要充分了解开启"),s("code",[a._v("num_as_string")]),a._v("后对复合类型导入的"),s("strong",[a._v("副作用")]),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"应用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用示例"}},[a._v("#")]),a._v(" 应用示例")]),a._v(" "),s("h3",{attrs:{id:"stream-load"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stream-load"}},[a._v("#")]),a._v(" Stream Load")]),a._v(" "),s("p",[a._v("因为 Json 格式的不可拆分特性，所以在使用 Stream Load 导入 Json 格式的文件时，文件内容会被全部加载到内存后，才开始处理。因此，如果文件过大的话，可能会占用较多的内存。")]),a._v(" "),s("p",[a._v("假设表结构为：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("id      INT     NOT NULL,\ncity    VARHCAR NULL,\ncode    INT     NULL\n")])])]),s("ol",[s("li",[s("p",[a._v("导入单行数据1")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('{"id": 100, "city": "beijing", "code" : 1}\n')])])]),s("ul",[s("li",[s("p",[a._v("不指定 Json Path")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('curl --location-trusted -u user:passwd -H "format: json" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')])])]),s("p",[a._v("导入结果：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("100     beijing     1\n")])])])]),a._v(" "),s("li",[s("p",[a._v("指定 Json Path")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.city\\",\\"$.code\\"]" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')])])]),s("p",[a._v("导入结果：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("100     beijing     1\n")])])])])])]),a._v(" "),s("li",[s("p",[a._v("导入单行数据2")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('{"id": 100, "content": {"city": "beijing", "code" : 1}}\n')])])]),s("ul",[s("li",[s("p",[a._v("指定 Json Path")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.content.city\\",\\"$.content.code\\"]" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')])])]),s("p",[a._v("导入结果：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("100     beijing     1\n")])])])])])]),a._v(" "),s("li",[s("p",[a._v("导入多行数据")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('[\n    {"id": 100, "city": "beijing", "code" : 1},\n    {"id": 101, "city": "shanghai"},\n    {"id": 102, "city": "tianjin", "code" : 3},\n    {"id": 103, "city": "chongqing", "code" : 4},\n    {"id": 104, "city": ["zhejiang", "guangzhou"], "code" : 5},\n    {\n        "id": 105,\n        "city": {\n            "order1": ["guangzhou"]\n        }, \n        "code" : 6\n    }\n]\n')])])]),s("ul",[s("li",[s("p",[a._v("指定 Json Path")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.city\\",\\"$.code\\"]" -H "strip_outer_array: true" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')])])]),s("p",[a._v("导入结果：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('100     beijing                     1\n101     shanghai                    NULL\n102     tianjin                     3\n103     chongqing                   4\n104     ["zhejiang","guangzhou"]    5\n105     {"order1":["guangzhou"]}    6\n')])])])])])]),a._v(" "),s("li",[s("p",[a._v("对导入数据进行转换")]),a._v(" "),s("p",[a._v("数据依然是示例3中的多行数据，现需要对导入数据中的 "),s("code",[a._v("code")]),a._v(" 列加1后导入。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.city\\",\\"$.code\\"]" -H "strip_outer_array: true" -H "columns: id, city, tmpc, code=tmpc+1" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')])])]),s("p",[a._v("导入结果：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('100     beijing                     2\n101     shanghai                    NULL\n102     tianjin                     4\n103     chongqing                   5\n104     ["zhejiang","guangzhou"]    6\n105     {"order1":["guangzhou"]}    7\n')])])])])]),a._v(" "),s("h3",{attrs:{id:"routine-load"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#routine-load"}},[a._v("#")]),a._v(" Routine Load")]),a._v(" "),s("p",[a._v("Routine Load 对 Json 数据的处理原理和 Stream Load 相同。在此不再赘述。")]),a._v(" "),s("p",[a._v("对于 Kafka 数据源，每个 Massage 中的内容被视作一个完整的 Json 数据。如果一个 Massage 中是以 Array 格式的表示的多行数据，则会导入多行，而 Kafka 的 offset 只会增加 1。而如果一个 Array 格式的 Json 表示多行数据，但是因为 Json 格式错误导致解析 Json 失败，则错误行只会增加 1（因为解析失败，实际上 Doris 无法判断其中包含多少行数据，只能按一行错误数据记录）。")])])}),[],!1,null,null,null);t.default=n.exports}}]);