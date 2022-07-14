(window.webpackJsonp=window.webpackJsonp||[]).push([[1102],{1730:function(t,s,a){"use strict";a.r(s);var e=a(15),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"stream-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stream-load"}},[t._v("#")]),t._v(" STREAM-LOAD")]),t._v(" "),a("h3",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" Name")]),t._v(" "),a("p",[t._v("STREAM LOAD")]),t._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("stream-load: load data to table in streaming")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('curl --location-trusted -u user:passwd [-H ""...] -T data.file -XPUT http://fe_host:http_port/api/{db}/{table}/_stream_load\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("该语句用于向指定的 table 导入数据，与普通Load区别是，这种导入方式是同步导入。")]),t._v(" "),a("p",[t._v("​        这种导入方式仍然能够保证一批导入任务的原子性，要么全部数据导入成功，要么全部失败。")]),t._v(" "),a("p",[t._v("​        该操作会同时更新和此 base table 相关的 rollup table 的数据。")]),t._v(" "),a("p",[t._v("​        这是一个同步操作，整个数据导入工作完成后返回给用户导入结果。")]),t._v(" "),a("p",[t._v("​        当前支持HTTP chunked与非chunked上传两种方式，对于非chunked方式，必须要有Content-Length来标示上传内容长度，这样能够保证数据的完整性。")]),t._v(" "),a("p",[t._v("​        另外，用户最好设置Expect Header字段内容100-continue，这样可以在某些出错场景下避免不必要的数据传输。")]),t._v(" "),a("p",[t._v("参数介绍：\n用户可以通过HTTP的Header部分来传入导入参数")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("label: 一次导入的标签，相同标签的数据无法多次导入。用户可以通过指定Label的方式来避免一份数据重复导入的问题。")]),t._v(" "),a("p",[t._v("当前Doris内部保留30分钟内最近成功的label。")])]),t._v(" "),a("li",[a("p",[t._v("column_separator：用于指定导入文件中的列分隔符，默认为\\t。如果是不可见字符，则需要加\\x作为前缀，使用十六进制来表示分隔符。")]),t._v(" "),a("p",[t._v('​    如hive文件的分隔符\\x01，需要指定为-H "column_separator:\\x01"。')]),t._v(" "),a("p",[t._v("​    可以使用多个字符的组合作为列分隔符。")])]),t._v(" "),a("li",[a("p",[t._v("line_delimiter：用于指定导入文件中的换行符，默认为\\n。可以使用做多个字符的组合作为换行符。")])]),t._v(" "),a("li",[a("p",[t._v("columns：用于指定导入文件中的列和 table 中的列的对应关系。如果源文件中的列正好对应表中的内容，那么是不需要指定这个字段的内容的。")]),t._v(" "),a("p",[t._v("如果源文件与表schema不对应，那么需要这个字段进行一些数据转换。这里有两种形式column，一种是直接对应导入文件中的字段，直接使用字段名表示；")]),t._v(" "),a("p",[t._v("​    一种是衍生列，语法为 "),a("code",[t._v("column_name")]),t._v(" = expression。举几个例子帮助理解。")]),t._v(" "),a("p",[t._v('​    例1: 表中有3个列“c1, c2, c3”，源文件中的三个列一次对应的是"c3,c2,c1"; 那么需要指定-H "columns: c3, c2, c1"')]),t._v(" "),a("p",[t._v('​    例2: 表中有3个列“c1, c2, c3", 源文件中前三列依次对应，但是有多余1列；那么需要指定-H "columns: c1, c2, c3, xxx";')]),t._v(" "),a("p",[t._v("​    最后一个列随意指定个名称占位即可")]),t._v(" "),a("p",[t._v('​    例3: 表中有3个列“year, month, day"三个列，源文件中只有一个时间列，为”2018-06-01 01:02:03“格式；')]),t._v(" "),a("p",[t._v('​    那么可以指定-H "columns: col, year = year(col), month=month(col), day=day(col)"完成导入')])]),t._v(" "),a("li",[a("p",[t._v("where: 用于抽取部分数据。用户如果有需要将不需要的数据过滤掉，那么可以通过设定这个选项来达到。")]),t._v(" "),a("p",[t._v('例1: 只导入大于k1列等于20180601的数据，那么可以在导入时候指定-H "where: k1 = 20180601"')])]),t._v(" "),a("li",[a("p",[t._v("max_filter_ratio：最大容忍可过滤（数据不规范等原因）的数据比例。默认零容忍。数据不规范不包括通过 where 条件过滤掉的行。")])]),t._v(" "),a("li",[a("p",[t._v("partitions: 用于指定这次导入所设计的partition。如果用户能够确定数据对应的partition，推荐指定该项。不满足这些分区的数据将被过滤掉。")]),t._v(" "),a("p",[t._v('比如指定导入到p1, p2分区，-H "partitions: p1, p2"')])]),t._v(" "),a("li",[a("p",[t._v("timeout: 指定导入的超时时间。单位秒。默认是 600 秒。可设置范围为 1 秒 ~ 259200 秒。")])]),t._v(" "),a("li",[a("p",[t._v('strict_mode: 用户指定此次导入是否开启严格模式，默认为关闭。开启方式为 -H "strict_mode: true"。')])]),t._v(" "),a("li",[a("p",[t._v("timezone: 指定本次导入所使用的时区。默认为东八区。该参数会影响所有导入涉及的和时区有关的函数结果。")])]),t._v(" "),a("li",[a("p",[t._v("exec_mem_limit: 导入内存限制。默认为 2GB。单位为字节。")])]),t._v(" "),a("li",[a("p",[t._v("format: 指定导入数据格式，默认是csv，支持json格式。")])]),t._v(" "),a("li",[a("p",[t._v("jsonpaths: 导入json方式分为：简单模式和匹配模式。")]),t._v(" "),a("p",[t._v("简单模式：没有设置jsonpaths参数即为简单模式，这种模式下要求json数据是对象类型，例如：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{"k1":1, "k2":2, "k3":"hello"}，其中k1，k2，k3是列名字。\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("匹配模式：用于json数据相对复杂，需要通过jsonpaths参数匹配对应的value。")])]),t._v(" "),a("li",[a("p",[t._v("strip_outer_array: 布尔类型，为true表示json数据以数组对象开始且将数组对象中进行展平，默认值是false。例如：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    [\n     {"k1" : 1, "v1" : 2},\n     {"k1" : 3, "v1" : 4}\n    ]\n    当strip_outer_array为true，最后导入到doris中会生成两行数据。\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v('json_root: json_root为合法的jsonpath字符串，用于指定json document的根节点，默认值为""。')])]),t._v(" "),a("li",[a("p",[t._v("merge_type: 数据的合并类型，一共支持三种类型APPEND、DELETE、MERGE 其中，APPEND是默认值，表示这批数据全部需要追加到现有数据中，DELETE 表示删除与这批数据key相同的所有行，MERGE 语义 需要与delete 条件联合使用，表示满足delete 条件的数据按照DELETE 语义处理其余的按照APPEND 语义处理， 示例："),a("code",[t._v('-H "merge_type: MERGE" -H "delete: flag=1"')])])]),t._v(" "),a("li",[a("p",[t._v("delete: 仅在 MERGE下有意义， 表示数据的删除条件\nfunction_column.sequence_col: 只适用于UNIQUE_KEYS,相同key列下，保证value列按照source_sequence列进行REPLACE, source_sequence可以是数据源中的列，也可以是表结构中的一列。")])]),t._v(" "),a("li",[a("p",[t._v("fuzzy_parse: 布尔类型，为true表示json将以第一行为schema 进行解析，开启这个选项可以提高json 导入效率，但是要求所有json 对象的key的顺序和第一行一致， 默认为false，仅用于json 格式")])]),t._v(" "),a("li",[a("p",[t._v("num_as_string: 布尔类型，为true表示在解析json数据时会将数字类型转为字符串，然后在确保不会出现精度丢失的情况下进行导入。")])]),t._v(" "),a("li",[a("p",[t._v("read_json_by_line: 布尔类型，为true表示支持每行读取一个json对象，默认值为false。")])]),t._v(" "),a("li",[a("p",[t._v("send_batch_parallelism: 整型，用于设置发送批处理数据的并行度，如果并行度的值超过 BE 配置中的 "),a("code",[t._v("max_send_batch_parallelism_per_job")]),t._v("，那么作为协调点的 BE 将使用 "),a("code",[t._v("max_send_batch_parallelism_per_job")]),t._v(" 的值。")]),t._v(" "),a("p",[t._v("RETURN VALUES\n导入完成后，会以Json格式返回这次导入的相关内容。当前包括以下字段\nStatus: 导入最后的状态。\nSuccess：表示导入成功，数据已经可见；\nPublish Timeout：表述导入作业已经成功Commit，但是由于某种原因并不能立即可见。用户可以视作已经成功不必重试导入\nLabel Already Exists: 表明该Label已经被其他作业占用，可能是导入成功，也可能是正在导入。\n用户需要通过get label state命令来确定后续的操作\n其他：此次导入失败，用户可以指定Label重试此次作业\nMessage: 导入状态详细的说明。失败时会返回具体的失败原因。\nNumberTotalRows: 从数据流中读取到的总行数\nNumberLoadedRows: 此次导入的数据行数，只有在Success时有效\nNumberFilteredRows: 此次导入过滤掉的行数，即数据质量不合格的行数\nNumberUnselectedRows: 此次导入，通过 where 条件被过滤掉的行数\nLoadBytes: 此次导入的源文件数据量大小\nLoadTimeMs: 此次导入所用的时间\nBeginTxnTimeMs: 向Fe请求开始一个事务所花费的时间，单位毫秒。\nStreamLoadPutTimeMs: 向Fe请求获取导入数据执行计划所花费的时间，单位毫秒。\nReadDataTimeMs: 读取数据所花费的时间，单位毫秒。\nWriteDataTimeMs: 执行写入数据操作所花费的时间，单位毫秒。\nCommitAndPublishTimeMs: 向Fe请求提交并且发布事务所花费的时间，单位毫秒。\nErrorURL: 被过滤数据的具体内容，仅保留前1000条")])])]),t._v(" "),a("p",[t._v("ERRORS:\n可以通过以下语句查看导入错误详细信息：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("   ```sql\n    SHOW LOAD WARNINGS ON 'url\n   ```\n")])])]),a("p",[t._v("​        其中 url 为 ErrorURL 给出的 url。")]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("将本地文件'testData'中的数据导入到数据库'testDb'中'testTbl'的表，使用Label用于去重。指定超时时间为 100 秒")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    curl --location-trusted -u root -H "label:123" -H "timeout:100" -T testData http://host:port/api/testDb/testTbl/_stream_load\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("将本地文件'testData'中的数据导入到数据库'testDb'中'testTbl'的表，使用Label用于去重, 并且只导入k1等于20180601的数据")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(' ```\n curl --location-trusted -u root -H "label:123" -H "where: k1=20180601" -T testData http://host:port/api/testDb/testTbl/_stream_load\n ```\n')])])])]),t._v(" "),a("li",[a("p",[t._v("将本地文件'testData'中的数据导入到数据库'testDb'中'testTbl'的表, 允许20%的错误率（用户是defalut_cluster中的）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(' ```\n curl --location-trusted -u root -H "label:123" -H "max_filter_ratio:0.2" -T testData http://host:port/api/testDb/testTbl/_stream_load\n ```\n')])])])]),t._v(" "),a("li",[a("p",[t._v("将本地文件'testData'中的数据导入到数据库'testDb'中'testTbl'的表, 允许20%的错误率，并且指定文件的列名（用户是defalut_cluster中的）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(' ```\n curl --location-trusted -u root  -H "label:123" -H "max_filter_ratio:0.2" -H "columns: k2, k1, v1" -T testData http://host:port/api/testDb/testTbl/_stream_load\n ```\n')])])])]),t._v(" "),a("li",[a("p",[t._v("将本地文件'testData'中的数据导入到数据库'testDb'中'testTbl'的表中的p1, p2分区, 允许20%的错误率。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(' ```\n curl --location-trusted -u root  -H "label:123" -H "max_filter_ratio:0.2" -H "partitions: p1, p2" -T testData http://host:port/api/testDb/testTbl/_stream_load\n ```\n')])])])]),t._v(" "),a("li",[a("p",[t._v("使用streaming方式导入（用户是defalut_cluster中的）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(" ```\n seq 1 10 | awk '{OFS=\"\\t\"}{print $1, $1 * 10}' | curl --location-trusted -u root -T - http://host:port/api/testDb/testTbl/_stream_load\n ```\n")])])])]),t._v(" "),a("li",[a("p",[t._v("导入含有HLL列的表，可以是表中的列或者数据中的列用于生成HLL列，也可使用hll_empty补充数据中没有的列")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(' ```\n curl --location-trusted -u root -H "columns: k1, k2, v1=hll_hash(k1), v2=hll_empty()" -T testData http://host:port/api/testDb/testTbl/_stream_load\n ```\n')])])])]),t._v(" "),a("li",[a("p",[t._v("导入数据进行严格模式过滤，并设置时区为 Africa/Abidjan")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(' ```\n curl --location-trusted -u root -H "strict_mode: true" -H "timezone: Africa/Abidjan" -T testData http://host:port/api/testDb/testTbl/_stream_load\n ```\n')])])])]),t._v(" "),a("li",[a("p",[t._v("导入含有BITMAP列的表，可以是表中的列或者数据中的列用于生成BITMAP列，也可以使用bitmap_empty填充空的Bitmap\n"),a("code",[t._v('curl --location-trusted -u root -H "columns: k1, k2, v1=to_bitmap(k1), v2=bitmap_empty()" -T testData http://host:port/api/testDb/testTbl/_stream_load')])])]),t._v(" "),a("li",[a("p",[t._v("简单模式，导入json数据\n表结构：")])])]),t._v(" "),a("p",[a("code",[t._v("category")]),t._v(' varchar(512) NULL COMMENT "",\n'),a("code",[t._v("author")]),t._v(' varchar(512) NULL COMMENT "",\n'),a("code",[t._v("title")]),t._v(' varchar(512) NULL COMMENT "",\n'),a("code",[t._v("price")]),t._v(' double NULL COMMENT ""')]),t._v(" "),a("p",[t._v("json数据格式：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{"category":"C++","author":"avc","title":"C++ primer","price":895}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("导入命令：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('curl --location-trusted -u root  -H "label:123" -H "format: json" -T testData http://host:port/api/testDb/testTbl/_stream_load\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("为了提升吞吐量，支持一次性导入多条json数据，每行为一个json对象，默认使用\\n作为换行符，需要将read_json_by_line设置为true，json数据格式如下：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{"category":"C++","author":"avc","title":"C++ primer","price":89.5}\n{"category":"Java","author":"avc","title":"Effective Java","price":95}\n{"category":"Linux","author":"avc","title":"Linux kernel","price":195}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ol",{attrs:{start:"11"}},[a("li",[t._v("匹配模式，导入json数据\njson数据格式：")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[\n{"category":"xuxb111","author":"1avc","title":"SayingsoftheCentury","price":895},{"category":"xuxb222","author":"2avc","title":"SayingsoftheCentury","price":895},\n{"category":"xuxb333","author":"3avc","title":"SayingsoftheCentury","price":895}\n]\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("通过指定jsonpath进行精准导入，例如只导入category、author、price三个属性")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('curl --location-trusted -u root  -H "columns: category, price, author" -H "label:123" -H "format: json" -H "jsonpaths: [\\"$.category\\",\\"$.price\\",\\"$.author\\"]" -H "strip_outer_array: true" -T testData http://host:port/api/testDb/testTbl/_stream_load\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("说明：\n1）如果json数据是以数组开始，并且数组中每个对象是一条记录，则需要将strip_outer_array设置成true，表示展平数组。\n2）如果json数据是以数组开始，并且数组中每个对象是一条记录，在设置jsonpath时，我们的ROOT节点实际上是数组中对象。")]),t._v(" "),a("ol",{attrs:{start:"12"}},[a("li",[t._v("用户指定json根节点\njson数据格式:")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n "RECORDS":[\n{"category":"11","title":"SayingsoftheCentury","price":895,"timestamp":1589191587},\n{"category":"22","author":"2avc","price":895,"timestamp":1589191487},\n{"category":"33","author":"3avc","title":"SayingsoftheCentury","timestamp":1589191387}\n]\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("通过指定jsonpath进行精准导入，例如只导入category、author、price三个属性")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('curl --location-trusted -u root  -H "columns: category, price, author" -H "label:123" -H "format: json" -H "jsonpaths: [\\"$.category\\",\\"$.price\\",\\"$.author\\"]" -H "strip_outer_array: true" -H "json_root: $.RECORDS" -T testData http://host:port/api/testDb/testTbl/_stream_load\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"13"}},[a("li",[t._v("删除与这批导入key 相同的数据")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('curl --location-trusted -u root -H "merge_type: DELETE" -T testData http://host:port/api/testDb/testTbl/_stream_load\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"14"}},[a("li",[t._v("将这批数据中与flag 列为ture 的数据相匹配的列删除，其他行正常追加")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('curl --location-trusted -u root: -H "column_separator:," -H "columns: siteid, citycode, username, pv, flag" -H "merge_type: MERGE" -H "delete: flag=1"  -T testData http://host:port/api/testDb/testTbl/_stream_load\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"15"}},[a("li",[t._v("导入数据到含有sequence列的UNIQUE_KEYS表中")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('curl --location-trusted -u root -H "columns: k1,k2,source_sequence,v1,v2" -H "function_column.sequence_col: source_sequence" -T testData http://host:port/api/testDb/testTbl/_stream_load\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"keywords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[t._v("#")]),t._v(" Keywords")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("STREAM, LOAD\n")])])]),a("h3",{attrs:{id:"best-practice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[t._v("#")]),t._v(" Best Practice")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("查看导入任务状态")]),t._v(" "),a("p",[t._v("Stream Load 是一个同步导入过程，语句执行成功即代表数据导入成功。导入的执行结果会通过 HTTP 返回值同步返回。并以 Json 格式展示。示例如下：")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"TxnId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Label"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"707717c0-271a-44c5-be0b-4e71bfeacaa5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OK"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"NumberTotalRows"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"NumberLoadedRows"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"NumberFilteredRows"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"NumberUnselectedRows"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"LoadBytes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"LoadTimeMs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"BeginTxnTimeMs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"StreamLoadPutTimeMs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ReadDataTimeMs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"WriteDataTimeMs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"CommitAndPublishTimeMs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("p",[t._v("字段释义如下：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("TxnId：导入事务ID，由系统自动生成，全局唯一。")])]),t._v(" "),a("li",[a("p",[t._v("Label：导入Label，如果没有指定，则系统会生成一个 UUID。")])]),t._v(" "),a("li",[a("p",[t._v("Status：")]),t._v(" "),a("p",[t._v("导入结果。有如下取值：")]),t._v(" "),a("ul",[a("li",[t._v("Success：表示导入成功，并且数据已经可见。")]),t._v(" "),a("li",[t._v("Publish Timeout：该状态也表示导入已经完成，只是数据可能会延迟可见。")]),t._v(" "),a("li",[t._v("Label Already Exists：Label 重复，需更换 Label。")]),t._v(" "),a("li",[t._v("Fail：导入失败。")])])]),t._v(" "),a("li",[a("p",[t._v("ExistingJobStatus：")]),t._v(" "),a("p",[t._v("已存在的 Label 对应的导入作业的状态。")]),t._v(" "),a("p",[t._v('这个字段只有在当 Status 为 "Label Already Exists" 是才会显示。用户可以通过这个状态，知晓已存在 Label 对应的导入作业的状态。"RUNNING" 表示作业还在执行，"FINISHED" 表示作业成功。')])]),t._v(" "),a("li",[a("p",[t._v("Message：导入错误信息。")])]),t._v(" "),a("li",[a("p",[t._v("NumberTotalRows：导入总处理的行数。")])]),t._v(" "),a("li",[a("p",[t._v("NumberLoadedRows：成功导入的行数。")])]),t._v(" "),a("li",[a("p",[t._v("NumberFilteredRows：数据质量不合格的行数。")])]),t._v(" "),a("li",[a("p",[t._v("NumberUnselectedRows：被 where 条件过滤的行数。")])]),t._v(" "),a("li",[a("p",[t._v("LoadBytes：导入的字节数。")])]),t._v(" "),a("li",[a("p",[t._v("LoadTimeMs：导入完成时间。单位毫秒。")])]),t._v(" "),a("li",[a("p",[t._v("BeginTxnTimeMs：向 FE 请求开始一个事务所花费的时间，单位毫秒。")])]),t._v(" "),a("li",[a("p",[t._v("StreamLoadPutTimeMs：向 FE 请求获取导入数据执行计划所花费的时间，单位毫秒。")])]),t._v(" "),a("li",[a("p",[t._v("ReadDataTimeMs：读取数据所花费的时间，单位毫秒。")])]),t._v(" "),a("li",[a("p",[t._v("WriteDataTimeMs：执行写入数据操作所花费的时间，单位毫秒。")])]),t._v(" "),a("li",[a("p",[t._v("CommitAndPublishTimeMs：向Fe请求提交并且发布事务所花费的时间，单位毫秒。")])]),t._v(" "),a("li",[a("p",[t._v("ErrorURL：如果有数据质量问题，通过访问这个 URL 查看具体错误行。")])])])]),t._v(" "),a("li",[a("p",[t._v("如何正确提交 Stream Load 作业和处理返回结果。")]),t._v(" "),a("p",[t._v("Stream Load 是同步导入操作，因此用户需同步等待命令的返回结果，并根据返回结果决定下一步处理方式。")]),t._v(" "),a("p",[t._v("用户首要关注的是返回结果中的 "),a("code",[t._v("Status")]),t._v(" 字段。")]),t._v(" "),a("p",[t._v("如果为 "),a("code",[t._v("Success")]),t._v("，则一切正常，可以进行之后的其他操作。")]),t._v(" "),a("p",[t._v("如果返回结果出现大量的 "),a("code",[t._v("Publish Timeout")]),t._v("，则可能说明目前集群某些资源（如IO）紧张导致导入的数据无法最终生效。"),a("code",[t._v("Publish Timeout")]),t._v(" 状态的导入任务已经成功，无需重试，但此时建议减缓或停止新导入任务的提交，并观察集群负载情况。")]),t._v(" "),a("p",[t._v("如果返回结果为 "),a("code",[t._v("Fail")]),t._v("，则说明导入失败，需根据具体原因查看问题。解决后，可以使用相同的 Label 重试。")]),t._v(" "),a("p",[t._v("在某些情况下，用户的 HTTP 连接可能会异常断开导致无法获取最终的返回结果。此时可以使用相同的 Label 重新提交导入任务，重新提交的任务可能有如下结果：")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("Status")]),t._v(" 状态为 "),a("code",[t._v("Success")]),t._v("，"),a("code",[t._v("Fail")]),t._v(" 或者 "),a("code",[t._v("Publish Timeout")]),t._v("。此时按照正常的流程处理即可。")]),t._v(" "),a("li",[a("code",[t._v("Status")]),t._v(" 状态为 "),a("code",[t._v("Label Already Exists")]),t._v("。则此时需继续查看 "),a("code",[t._v("ExistingJobStatus")]),t._v(" 字段。如果该字段值为 "),a("code",[t._v("FINISHED")]),t._v("，则表示这个 Label 对应的导入任务已经成功，无需在重试。如果为 "),a("code",[t._v("RUNNING")]),t._v("，则表示这个 Label 对应的导入任务依然在运行，则此时需每间隔一段时间（如10秒），使用相同的 Label 继续重复提交，直到 "),a("code",[t._v("Status")]),t._v(" 不为 "),a("code",[t._v("Label Already Exists")]),t._v("，或者 "),a("code",[t._v("ExistingJobStatus")]),t._v(" 字段值为 "),a("code",[t._v("FINISHED")]),t._v(" 为止。")])])]),t._v(" "),a("li",[a("p",[t._v("取消导入任务")]),t._v(" "),a("p",[t._v("已提交切尚未结束的导入任务可以通过 CANCEL LOAD 命令取消。取消后，已写入的数据也会回滚，不会生效。")])]),t._v(" "),a("li",[a("p",[t._v("Label、导入事务、多表原子性")]),t._v(" "),a("p",[t._v("Doris 中所有导入任务都是原子生效的。并且在同一个导入任务中对多张表的导入也能够保证原子性。同时，Doris 还可以通过 Label 的机制来保证数据导入的不丢不重。具体说明可以参阅 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-scenes/load-atomicity.html"}},[t._v("导入事务和原子性")]),t._v(" 文档。")],1)]),t._v(" "),a("li",[a("p",[t._v("列映射、衍生列和过滤")]),t._v(" "),a("p",[t._v("Doris 可以在导入语句中支持非常丰富的列转换和过滤操作。支持绝大多数内置函数和 UDF。关于如何正确的使用这个功能，可参阅 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-scenes/load-data-convert.html"}},[t._v("列的映射，转换与过滤")]),t._v(" 文档。")],1)]),t._v(" "),a("li",[a("p",[t._v("错误数据过滤")]),t._v(" "),a("p",[t._v("Doris 的导入任务可以容忍一部分格式错误的数据。容忍率通过 "),a("code",[t._v("max_filter_ratio")]),t._v(" 设置。默认为0，即表示当有一条错误数据时，整个导入任务将会失败。如果用户希望忽略部分有问题的数据行，可以将次参数设置为 0~1 之间的数值，Doris 会自动跳过哪些数据格式不正确的行。")]),t._v(" "),a("p",[t._v("关于容忍率的一些计算方式，可以参阅 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-scenes/load-data-convert.html"}},[t._v("列的映射，转换与过滤")]),t._v(" 文档。")],1)]),t._v(" "),a("li",[a("p",[t._v("严格模式")]),t._v(" "),a("p",[a("code",[t._v("strict_mode")]),t._v(" 属性用于设置导入任务是否运行在严格模式下。该格式会对列映射、转换和过滤的结果产生影响。关于严格模式的具体说明，可参阅 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-scenes/load-strict-mode.html"}},[t._v("严格模式")]),t._v(" 文档。")],1)]),t._v(" "),a("li",[a("p",[t._v("超时时间")]),t._v(" "),a("p",[t._v("Stream Load 的默认超时时间为 10 分钟。从任务提交开始算起。如果在超时时间内没有完成，则任务会失败。")])]),t._v(" "),a("li",[a("p",[t._v("数据量和任务数限制")]),t._v(" "),a("p",[t._v("Stream Load 适合导入几个GB以内的数据，因为数据为单线程传输处理，因此导入过大的数据性能得不到保证。当有大量本地数据需要导入时，可以并行提交多个导入任务。")]),t._v(" "),a("p",[t._v("Doris 同时会限制集群内同时运行的导入任务数量，通常在 10-20 个不等。之后提交的导入作业会被拒绝。")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);