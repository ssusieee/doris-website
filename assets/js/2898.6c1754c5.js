(window.webpackJsonp=window.webpackJsonp||[]).push([[2898],{3526:function(a,e,s){"use strict";s.r(e);var t=s(15),_=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"segment-v2-升级手册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#segment-v2-升级手册"}},[a._v("#")]),a._v(" Segment V2 升级手册")]),a._v(" "),s("h2",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[a._v("#")]),a._v(" 背景")]),a._v(" "),s("p",[a._v("Doris 0.12 版本中实现了新的存储格式：Segment V2，引入词典压缩、bitmap索引、page cache等优化，能够提升系统性能。")]),a._v(" "),s("p",[a._v("0.12 版本会同时支持读写原有的 Segment V1（以下简称V1） 和新的 Segment V2（以下简称V2） 两种格式。如果原有数据想使用 V2 相关特性，需通过命令将 V1 转换成 V2 格式。")]),a._v(" "),s("p",[a._v("本文档主要介绍从 0.11 版本升级至 0.12 版本后，如何转换和使用 V2 格式。")]),a._v(" "),s("p",[a._v("V2 格式的表可以支持以下新的特性：")]),a._v(" "),s("ol",[s("li",[a._v("bitmap 索引")]),a._v(" "),s("li",[a._v("内存表")]),a._v(" "),s("li",[a._v("page cache")]),a._v(" "),s("li",[a._v("字典压缩")]),a._v(" "),s("li",[a._v("延迟物化（Lazy Materialization）")])]),a._v(" "),s("p",[s("strong",[a._v("从 0.13 版本开始，新建表的默认存储格式将为 Segment V2")])]),a._v(" "),s("h2",{attrs:{id:"集群升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集群升级"}},[a._v("#")]),a._v(" 集群升级")]),a._v(" "),s("p",[a._v("0.12 版本仅支持从 0.11 版本升级，不支持从 0.11 之前的版本升级。请先确保升级的前的 Doris 集群版本为 0.11。")]),a._v(" "),s("p",[a._v("0.12 版本有两个 V2 相关的重要参数：")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("default_rowset_type")]),a._v('：FE 一个全局变量（Global Variable）设置，默认为 "alpha"，即 V1 版本。')]),a._v(" "),s("li",[s("code",[a._v("default_rowset_type")]),a._v('：BE 的一个配置项，默认为 "ALPHA"，即 V1 版本。')])]),a._v(" "),s("p",[a._v("保持上述配置默认的话，按常规步骤对集群升级后，原有集群数据的存储格式不会变更，即依然为 V1 格式。如果对 V2 格式没有需求，则继续正常使用集群即可，无需做任何额外操作。所有原有数据、以及新导入的数据，都依然是 V1 版本。")]),a._v(" "),s("h2",{attrs:{id:"v2-格式转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v2-格式转换"}},[a._v("#")]),a._v(" V2 格式转换")]),a._v(" "),s("h3",{attrs:{id:"已有表数据转换成-v2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#已有表数据转换成-v2"}},[a._v("#")]),a._v(" 已有表数据转换成 V2")]),a._v(" "),s("p",[a._v("对于已有表数据的格式转换，Doris 提供两种方式：")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("创建一个 V2 格式的特殊 Rollup")]),a._v(" "),s("p",[a._v("该方式会针对指定表，创建一个 V2 格式的特殊 Rollup。创建完成后，新的 V2 格式的 Rollup 会和原有表格式数据并存。用户可以指定对 V2 格式的 Rollup 进行查询验证。")]),a._v(" "),s("p",[a._v("该方式主要用于对 V2 格式的验证，因为不会修改原有表数据，因此可以安全的进行 V2 格式的数据验证，而不用担心表数据因格式转换而损坏。通常先使用这个方式对数据进行校验，之后再使用方法2对整个表进行数据格式转换。")]),a._v(" "),s("p",[a._v("操作步骤如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('## 创建 V2 格式的 Rollup\n\nALTER TABLE table_name ADD ROLLUP table_name (columns) PROPERTIES ("storage_format" = "v2");\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("其中， Rollup 的名称必须为表名。columns 字段可以任意填写，系统不会检查该字段的合法性。该语句会自动生成一个名为 "),s("code",[a._v("__V2_table_name")]),a._v(" 的 Rollup，并且该 Rollup 列包含表的全部列。")]),a._v(" "),s("p",[a._v("通过以下语句查看创建进度：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("SHOW ALTER TABLE ROLLUP;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("创建完成后，可以通过 "),s("code",[a._v("DESC table_name ALL;")]),a._v(" 查看到名为 "),s("code",[a._v("__v2_table_name")]),a._v(" 的 Rollup。")]),a._v(" "),s("p",[a._v("之后，通过如下命令，切换到 V2 格式查询：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("set use_v2_rollup = true;\nselect * from table_name limit 10;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[s("code",[a._v("use_V2_Rollup")]),a._v(" 这个变量会强制查询名为 "),s("code",[a._v("__V2_table_name")]),a._v(" 的 Rollup，并且不会考虑其他 Rollup 的命中条件。所以该参数仅用于对 V2 格式数据进行验证。")])]),a._v(" "),s("li",[s("p",[a._v("转换现有表数据格式")]),a._v(" "),s("p",[a._v("该方式相当于给指定的表发送一个 schema change 作业，作业完成后，表的所有数据会被转换成 V2 格式。该方法不会保留原有 v1 格式，所以请先使用方法1进行格式验证。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('ALTER TABLE table_name SET ("storage_format" = "v2");\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("之后通过如下命令查看作业进度：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("SHOW ALTER TABLE COLUMN;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("作业完成后，该表的所有数据（包括Rollup）都转换为了 V2。且 V1 版本的数据已被删除。如果该表是分区表，则之后创建的分区也都是 V2 格式。")]),a._v(" "),s("p",[s("strong",[a._v("V2 格式的表不能重新转换为 V1")])])])]),a._v(" "),s("h3",{attrs:{id:"创建新的-v2-格式的表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建新的-v2-格式的表"}},[a._v("#")]),a._v(" 创建新的 V2 格式的表")]),a._v(" "),s("p",[a._v("在不改变默认配置参数的情况下，用户可以创建 V2 格式的表：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('CREATE TABLE tbl_name\n(\n    k1 INT,\n    k2 INT\n)\nDISTRIBUTED BY HASH(k1) BUCKETS 1\nPROPERTIES\n(\n    "storage_format" = "v2"\n);\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("p",[a._v("在 "),s("code",[a._v("properties")]),a._v(" 中指定 "),s("code",[a._v('"storage_format" = "v2"')]),a._v(" 后，该表将使用 V2 格式创建。如果是分区表，则之后创建的分区也都是 V2 格式。")]),a._v(" "),s("h3",{attrs:{id:"全量格式转换-试验功能-不推荐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全量格式转换-试验功能-不推荐"}},[a._v("#")]),a._v(" 全量格式转换(试验功能，不推荐)")]),a._v(" "),s("p",[a._v("通过以下方式可以开启整个集群的全量数据格式转换（V1 -> V2）。全量数据转换是通过 BE 后台的数据 compaction 过程异步进行的。\n"),s("strong",[a._v("该功能目前并没有很好的方式查看或控制转换进度，并且无法保证数据能够转换完成。可能导致同一张表长期处于同时包含两种数据格式的状态。因此建议使用 ALTER TABLE 针对性的转换。")])]),a._v(" "),s("ol",[s("li",[s("p",[a._v("从 BE 开启全量格式转换")]),a._v(" "),s("p",[a._v("在 "),s("code",[a._v("be.conf")]),a._v(" 中添加变量 "),s("code",[a._v("default_rowset_type=BETA")]),a._v(" 并重启 BE 节点。在之后的 compaction 流程中，数据会自动从 V1 转换成 V2。")])]),a._v(" "),s("li",[s("p",[a._v("从 FE 开启全量格式转换")]),a._v(" "),s("p",[a._v("通过 mysql 客户端连接 Doris 后，执行如下语句：")]),a._v(" "),s("p",[s("code",[a._v("SET GLOBAL default_rowset_type = beta;")])]),a._v(" "),s("p",[a._v("执行完成后，FE 会通过心跳将信息发送给 BE，之后 BE 的 compaction 流程中，数据会自动从 V1 转换成 V2。")]),a._v(" "),s("p",[a._v("FE 的配置参数优先级高于 BE 的配置。即使 BE 中的配置 "),s("code",[a._v("default_rowset_type")]),a._v(" 为 ALPHA，如果 FE 配置为 beta 后，则 BE 依然开始进行 V1 到 V2 的数据格式转换。")]),a._v(" "),s("p",[a._v("**建议先通过对单独表的数据格式转换验证后，再进行全量转换。全量转换的时间比较长，且进度依赖于 compaction 的进度。**可能出现 compaction 无法完成的情况，因此需要通过显式的执行 "),s("code",[a._v("ALTER TABLE")]),a._v(" 操作进行个别表的数据格式转换。")])]),a._v(" "),s("li",[s("p",[a._v("查看全量转换进度")]),a._v(" "),s("p",[a._v("全量转换进度须通过脚本查看。脚本位置为代码库的 "),s("code",[a._v("tools/show_segment_status/")]),a._v(" 目录。请参阅其中的 "),s("code",[a._v("README")]),a._v(" 文档查看使用帮助。")])])])])}),[],!1,null,null,null);e.default=_.exports}}]);