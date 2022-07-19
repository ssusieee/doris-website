(window.webpackJsonp=window.webpackJsonp||[]).push([[642],{1270:function(e,a,t){"use strict";t.r(a);var r=t(15),_=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"版本通告-apache-doris-1-1-release-版本正式发布"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本通告-apache-doris-1-1-release-版本正式发布"}},[e._v("#")]),e._v(" 版本通告：Apache Doris 1.1 Release 版本正式发布")]),e._v(" "),t("p",[e._v("亲爱的社区小伙伴们，我们很高兴地宣布，Apache Doris 在 2022 年 7 月 14 日迎来 1.1 Release 版本的正式发布！这是 Apache Doris 正式从 Apache 孵化器毕业后并成为 Apache 顶级项目后发布的第一个 Release 版本。在 1.1 版本中，有 90 位 Contributor 为 Apache Doris 提交了超过 450 项优化和修复，感谢每一个让 Apache Doris 变得更好的你！")]),e._v(" "),t("p",[e._v("在 1.1 版本中，"),t("strong",[e._v("我们实现了计算层和存储层的全面向量化、正式将向量化执行引擎作为稳定功能进行全面启用")]),e._v("，所有查询默认通过向量化执行引擎来执行，"),t("strong",[e._v("性能较之前版本有 3-5 倍的巨大提升")]),e._v("；增加了直接访问 Apache Iceberg 外部表的能力，支持对 Doris 和 Iceberg 中的数据进行联邦查询，"),t("strong",[e._v("扩展了 Apache Doris 在数据湖上的分析能力")]),e._v("；在原有的 LZ4 基础上增加了 ZSTD 压缩算法，进一步提升了数据压缩率；"),t("strong",[e._v("修复了诸多之前版本存在的性能与稳定性问题")]),e._v("，使系统稳定性得到大幅提升。欢迎大家下载使用。")]),e._v(" "),t("h2",{attrs:{id:"下载链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载链接"}},[e._v("#")]),e._v(" 下载链接")]),e._v(" "),t("p",[e._v("GitHub地址："),t("a",{attrs:{href:"https://github.com/apache/doris",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/apache/doris"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("下载地址："),t("a",{attrs:{href:"https://doris.apache.org/downloads/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://doris.apache.org/downloads/downloads.html"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("源码地址："),t("a",{attrs:{href:"https://github.com/apache/doris/releases/tag/1.1.0-rc05",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/apache/doris/releases/tag/1.1.0-rc05"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"升级说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#升级说明"}},[e._v("#")]),e._v(" 升级说明")]),e._v(" "),t("h3",{attrs:{id:"向量化执行引擎默认开启"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#向量化执行引擎默认开启"}},[e._v("#")]),e._v(" 向量化执行引擎默认开启")]),e._v(" "),t("p",[e._v("在 Apache Doris 1.0 版本中，我们引入了向量化执行引擎作为实验性功能。用户需要在执行 SQL 查询手工开启，通过 "),t("code",[e._v("set batch_size = 4096")]),e._v(" 和 "),t("code",[e._v("set enable_vectorized_engine = true")]),e._v("配置 session 变量来开启向量化执行引擎。")]),e._v(" "),t("p",[e._v("在 1.1 版本中，我们正式将向量化执行引擎作为稳定功能进行了全面启用，session 变量"),t("code",[e._v("enable_vectorized_engine")]),e._v(" 默认设置为 true，无需用户手工开启，所有查询默认通过向量化执行引擎来执行。")]),e._v(" "),t("h3",{attrs:{id:"be-二进制文件更名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#be-二进制文件更名"}},[e._v("#")]),e._v(" BE 二进制文件更名")]),e._v(" "),t("p",[e._v("BE 二进制文件从原有的 palo_be 更名为 doris_be ，如果您以前依赖进程名称进行集群管理和其他操作，请注意修改相关脚本。")]),e._v(" "),t("h3",{attrs:{id:"segment-存储格式升级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#segment-存储格式升级"}},[e._v("#")]),e._v(" Segment 存储格式升级")]),e._v(" "),t("p",[e._v("Apache Doris 早期版本的存储格式为 Segment V1，在 0.12 版本中我们实现了新的存储格式 Segment V2 ，引入了 Bitmap 索引、内存表、Page Cache、字典压缩以及延迟物化等诸多特性。从 0.13 版本开始，新建表的默认存储格式为 Segment V2，与此同时也保留了对 Segment V1 格式的兼容。")]),e._v(" "),t("p",[e._v("为了保证代码结构的可维护性、降低冗余历史代码带来的额外学习及开发成本，我们决定从下一个版本起不再支持 Segment v1 存储格式，预计在 Apache Doris 1.2 版本中将删除这部分代码，还请所有仍在使用 Segment V1 存储格式的用户务必在 1.1 版本中完成数据格式的转换，操作手册请参考以下链接：")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://doris.apache.org/zh-CN/1.0/administrator-guide/segment-v2-usage.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://doris.apache.org/zh-CN/1.0/administrator-guide/segment-v2-usage.html\n"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"正常升级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正常升级"}},[e._v("#")]),e._v(" 正常升级")]),e._v(" "),t("p",[e._v("正常升级操作请按照官网上的集群升级文档进行滚动升级即可。")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://doris.apache.org/zh-CN/docs/admin-manual/cluster-management/upgrade.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://doris.apache.org/zh-CN/docs/admin-manual/cluster-management/upgrade.html"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"重要功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重要功能"}},[e._v("#")]),e._v(" 重要功能")]),e._v(" "),t("h3",{attrs:{id:"支持数据随机分布-实验性功能-8259-8041"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#支持数据随机分布-实验性功能-8259-8041"}},[e._v("#")]),e._v(" 支持数据随机分布 [实验性功能] "),t("a",{attrs:{href:"https://github.com/apache/doris/pull/8259",target:"_blank",rel:"noopener noreferrer"}},[e._v("#8259"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/apache/doris/pull/8041",target:"_blank",rel:"noopener noreferrer"}},[e._v("#8041"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("在某些场景中（例如日志分析类场景），用户可能无法找到一个合适的分桶键来避免数据倾斜，因此需要由系统提供额外的分布方式来解决数据倾斜的问题。")]),e._v(" "),t("p",[e._v("因此通过在建表时可以不指定具体分桶键，选择使用随机分布对数据进行分桶"),t("code",[e._v("DISTRIBUTED BY random BUCKET number")]),e._v("，数据导入时将会随机写入单个 Tablet ，以减少加载过程中的数据扇出，并减少资源开销、提升系统稳定性。")]),e._v(" "),t("h3",{attrs:{id:"支持创建-iceberg-外部表-实验性功能-7391-7981-8179"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#支持创建-iceberg-外部表-实验性功能-7391-7981-8179"}},[e._v("#")]),e._v(" 支持创建 Iceberg 外部表 [实验性功能] "),t("a",{attrs:{href:"https://github.com/apache/doris/pull/7391",target:"_blank",rel:"noopener noreferrer"}},[e._v("#7391"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/apache/doris/pull/7981",target:"_blank",rel:"noopener noreferrer"}},[e._v("#7981"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/apache/doris/pull/8179",target:"_blank",rel:"noopener noreferrer"}},[e._v("#8179"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Iceberg 外部表为 Apache Doris 提供了直接访问存储在 Iceberg 数据的能力。通过 Iceberg 外部表可以实现对本地存储和 Iceberg 存储的数据进行联邦查询，省去繁琐的数据加载工作、简化数据分析的系统架构，并进行更复杂的分析操作。")]),e._v(" "),t("p",[e._v("在 1.1 版本中，Apache Doris 支持了创建 Iceberg 外部表并查询数据，并支持通过 REFRESH 命令实现 Iceberg 数据库中所有表 Schema 的自动同步。")]),e._v(" "),t("h3",{attrs:{id:"增加zstd压缩算法-8923-9747"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#增加zstd压缩算法-8923-9747"}},[e._v("#")]),e._v(" 增加ZSTD压缩算法 "),t("a",{attrs:{href:"https://github.com/apache/doris/pull/8923",target:"_blank",rel:"noopener noreferrer"}},[e._v("#8923"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/apache/doris/pull/9747",target:"_blank",rel:"noopener noreferrer"}},[e._v("#9747"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("目前 Apache Doris 中数据压缩方法是系统统一指定的，默认为 LZ4。针对部分对数据存储成本敏感的场景，例如日志类场景，原有的数据压缩率需求无法得到满足。")]),e._v(" "),t("p",[e._v("在 1.1 版本中，用户建表时可以在表属性中设置"),t("code",[e._v('"compression"="zstd"')]),e._v(" 将压缩方法指定为 ZSTD。在 25GB 1.1 亿行的文本日志测试数据中，"),t("strong",[e._v("最高获得了近 10 倍的压缩率、较原有压缩率提升了 53%，从磁盘读取数据并进行解压缩的速度提升了 30%")]),e._v(" 。")]),e._v(" "),t("h2",{attrs:{id:"功能优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#功能优化"}},[e._v("#")]),e._v(" 功能优化")]),e._v(" "),t("h3",{attrs:{id:"更全面的向量化支持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更全面的向量化支持"}},[e._v("#")]),e._v(" "),t("strong",[e._v("更全面的向量化支持")])]),e._v(" "),t("p",[e._v("在 1.1 版本中，我们实现了计算层和存储层的全面向量化，包括：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("实现了所有内置函数的向量化")])]),e._v(" "),t("li",[t("p",[e._v("存储层实现向量化，并支持了低基数字符串列的字典优化")])]),e._v(" "),t("li",[t("p",[e._v("优化并解决了向量化引擎的大量性能和稳定性问题。")])])]),e._v(" "),t("p",[e._v("我们对 Apache Doris 1.1 版本与 0.15 版本分别在 SSB 和 TPC-H 标准测试数据集上进行了性能测试：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("在 SSB 测试数据集的全部 13 个 SQL 上，1.1 版本均优于 0.15 版本，整体性能约提升了 3 倍，解决了 1.0 版本中存在的部分场景性能劣化问题；")])]),e._v(" "),t("li",[t("p",[e._v("在 TPC-H 测试数据集的全部 22 个 SQL 上，1.1 版本均优于 0.15 版本，整体性能约提升了 4.5 倍，部分场景性能达到了十余倍的提升；")])])]),e._v(" "),t("img",{attrs:{src:e.$withBase("https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/edb59781b0f74ff08821467f23a63bad~tplv-k3u1fbpfcp-zoom-1.image"),alt:""}}),e._v(" "),t("p",{attrs:{align:"center"}},[e._v("SSB 测试数据集")]),e._v(" "),t("img",{attrs:{src:e.$withBase("https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e34377054f4448b3b367789a391f2122~tplv-k3u1fbpfcp-zoom-1.image"),alt:""}}),e._v(" "),t("p",{attrs:{align:"center"}},[e._v("TPC-H 测试数据集")]),e._v(" "),t("p",[t("strong",[e._v("性能测试报告：")])]),e._v(" "),t("p",[e._v("https://doris.apache.org/zh-CN/docs/benchmark/ssb.html")]),e._v(" "),t("p",[e._v("https://doris.apache.org/zh-CN/docs/benchmark/tpch.html")]),e._v(" "),t("h3",{attrs:{id:"compaction-逻辑优化与实时性保证-10153"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compaction-逻辑优化与实时性保证-10153"}},[e._v("#")]),e._v(" Compaction 逻辑优化与实时性保证 "),t("a",{attrs:{href:"https://github.com/apache/doris/pull/10153",target:"_blank",rel:"noopener noreferrer"}},[e._v("#10153"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("在 Apache Doris 中每次 Commit 都会产生一个数据版本，在高并发写入场景下，容易出现因数据版本过多且 Compaction 不及时而导致的 -235 错误，同时查询性能也会随之下降。")]),e._v(" "),t("p",[e._v("在 1.1 版本中我们引入了 QuickCompaction，增加了主动触发式的 Compaction 检查，在数据版本增加的时候主动触发 Compaction，同时通过提升分片元信息扫描的能力，快速发现数据版本过多的分片并触发 Compaction。通过主动式触发加被动式扫描的方式，彻底解决数据合并的实时性问题。")]),e._v(" "),t("p",[e._v("同时，针对高频的小文件 Cumulative Compaction，实现了 Compaction 任务的调度隔离，防止重量级的 Base Compaction 对新增数据的合并造成影响。")]),e._v(" "),t("p",[e._v("最后，针对小文件合并，优化了小文件合并的策略，采用梯度合并的方式，每次参与合并的文件都属于同一个数据量级，防止大小差别很大的版本进行合并，逐渐有层次的合并，减少单个文件参与合并的次数，能够大幅地节省系统的 CPU 消耗。")]),e._v(" "),t("img",{attrs:{src:e.$withBase("https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a6d5c50f16a048f3ab27357bc97b7461~tplv-k3u1fbpfcp-zoom-1.image"),alt:""}}),e._v(" "),t("p",[e._v("在数据上游维持每秒 10w 的写入频率时（20 个并发写入任务、每个作业 5000 行、 Checkpoint 间隔 1s），1.1 版本表现如下：")]),e._v(" "),t("ul",[t("li",[e._v("数据快速合并：Tablet 数据版本维持在 50 以下，Compaction Score 稳定。相较于之前版本高并发写入时频繁出现的 -235 问题，"),t("strong",[e._v("Compaction 合并效率有 10 倍以上的提升")]),e._v("。")])]),e._v(" "),t("ul",[t("li",[e._v("CPU资源消耗显著降低：针对小文件 Compaction 进行了策略优化，在上述高并发写入场景下，"),t("strong",[e._v("CPU 资源消耗降低 25%")]),e._v(" ；")])]),e._v(" "),t("ul",[t("li",[e._v("查询耗时稳定：提升了数据整体有序性，大幅降低查询耗时的波动性，"),t("strong",[e._v("高并发写入时的查询耗时与仅查询时持平")]),e._v("，查询性能较之前版本"),t("strong",[e._v("有 3-4 倍提升")]),e._v("。")])]),e._v(" "),t("img",{attrs:{src:e.$withBase("https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c79ee9efba0416d81cc7bed1a349fdf~tplv-k3u1fbpfcp-zoom-1.image"),alt:""}}),e._v(" "),t("h3",{attrs:{id:"parquet-和-orc-文件的读取效率优化-9472"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parquet-和-orc-文件的读取效率优化-9472"}},[e._v("#")]),e._v(" Parquet 和 ORC 文件的读取效率优化 "),t("a",{attrs:{href:"https://github.com/apache/doris/pull/9472",target:"_blank",rel:"noopener noreferrer"}},[e._v("#9472"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("通过调整 Arrow 参数，利用 Arrow 的多线程读取能力来加速 Arrow 对每个 row_group 的读取，并修改成 SPSC 模型，通过预取来降低等待网络的代价。优化前后对 Parquet 文件导入的性能有 4～5 倍的提升。")]),e._v(" "),t("h3",{attrs:{id:"更安全的元数据-checkpoint-9180-9192"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更安全的元数据-checkpoint-9180-9192"}},[e._v("#")]),e._v(" 更安全的元数据 Checkpoint "),t("a",{attrs:{href:"https://github.com/apache/doris/pull/9180",target:"_blank",rel:"noopener noreferrer"}},[e._v("#9180"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/apache/doris/pull/9192",target:"_blank",rel:"noopener noreferrer"}},[e._v("#9192"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("通过对元数据检查点后生成的 image 文件进行双重检查和保留历史 image 文件的功能，解决了 image 文件错误导致的元数据损坏问题。")]),e._v(" "),t("h2",{attrs:{id:"bug-修复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug-修复"}},[e._v("#")]),e._v(" Bug 修复")]),e._v(" "),t("h3",{attrs:{id:"修复由于缺少数据版本而无法查询数据的问题。-严重-9267-9266"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修复由于缺少数据版本而无法查询数据的问题。-严重-9267-9266"}},[e._v("#")]),e._v(" 修复由于缺少数据版本而无法查询数据的问题。（严重）"),t("a",{attrs:{href:"https://github.com/apache/doris/pull/9267",target:"_blank",rel:"noopener noreferrer"}},[e._v("#9267"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/apache/doris/pull/9266",target:"_blank",rel:"noopener noreferrer"}},[e._v("#9266"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("问题描述："),t("code",[e._v("failed to initialize storage reader. tablet=924991.xxxx, res=-214, backend=xxxx")])]),e._v(" "),t("p",[e._v("该问题是在版本 1.0 中引入的，可能会导致多个副本的数据版本丢失。")]),e._v(" "),t("h3",{attrs:{id:"解决了资源隔离对加载任务的资源使用限制无效的问题-中等-9492"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决了资源隔离对加载任务的资源使用限制无效的问题-中等-9492"}},[e._v("#")]),e._v(" 解决了资源隔离对加载任务的资源使用限制无效的问题（中等）"),t("a",{attrs:{href:"https://github.com/apache/doris/pull/9492",target:"_blank",rel:"noopener noreferrer"}},[e._v("#9492"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("在 1.1 版本中， Broker Load 和 Routine Load 将使用具有指定资源标记的 BE 节点进行加载。")]),e._v(" "),t("h3",{attrs:{id:"修复使用-http-brpc-超过-2gb-传输网络数据包导致数据传输错误的问题-中等-9770"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修复使用-http-brpc-超过-2gb-传输网络数据包导致数据传输错误的问题-中等-9770"}},[e._v("#")]),e._v(" 修复使用 HTTP BRPC 超过 2GB 传输网络数据包导致数据传输错误的问题（中等）"),t("a",{attrs:{href:"https://github.com/apache/doris/pull/9770",target:"_blank",rel:"noopener noreferrer"}},[e._v("#9770"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("在以前的版本中，当通过 BRPC 在后端之间传输的数据超过 2GB 时，可能会导致数据传输错误。")]),e._v(" "),t("h2",{attrs:{id:"其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[e._v("#")]),e._v(" 其他")]),e._v(" "),t("h3",{attrs:{id:"禁用-mini-load"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#禁用-mini-load"}},[e._v("#")]),e._v(" 禁用 Mini Load")]),e._v(" "),t("p",[e._v("Mini Load 与 Stream Load 的导入实现方式完全一致，都是通过 HTTP 协议提交和传输数据，在导入功能支持上 Stream Load 更加完备。")]),e._v(" "),t("p",[e._v("在 1.1 版本中，默认情况下 Mini Load 接口 "),t("code",[e._v("/_load")]),e._v(" 将处于禁用状态，请统一使用 Stream Load 来替换 Mini Load。您也可以通过关闭 FE 配置项 "),t("code",[e._v("disable_mini_load")]),e._v(" 来重新启用 Mini Load 接口。在版本 1.2 中，将彻底删除 Mini Load 。")]),e._v(" "),t("h3",{attrs:{id:"完全禁用-segmentv1-存储格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完全禁用-segmentv1-存储格式"}},[e._v("#")]),e._v(" 完全禁用 SegmentV1 存储格式")]),e._v(" "),t("p",[e._v("在 1.1 版本中将不再允许新创建 SegmentV1 存储格式的数据，现有数据仍可以继续正常访问。")]),e._v(" "),t("p",[e._v("您可以使用 ADMIN SHOW TABLET STORAGE FORMAT 语句检查集群中是否仍然存在 SegmentV1 格式的数据，如果存在请务必通过数据转换命令转换为 SegmentV2。")]),e._v(" "),t("p",[e._v("在 Apache Doris 1.2 版本中不再支持对 Segment V1 数据的访问，同时 Segment V1 代码将被彻底删除。")]),e._v(" "),t("h3",{attrs:{id:"限制-string-类型的最大长度-8567"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#限制-string-类型的最大长度-8567"}},[e._v("#")]),e._v(" 限制 String 类型的最大长度 "),t("a",{attrs:{href:"https://github.com/apache/doris/pull/8567",target:"_blank",rel:"noopener noreferrer"}},[e._v("#8567"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("String 类型是 Apache Doris 在 0.15 版本中引入的新数据类型，在过去 String 类型的最大长度允许为 2GB。")]),e._v(" "),t("p",[e._v("在 1.1 版本中，我们将 String 类型的最大长度限制为 1 MB，超过此长度的字符串无法再写入，同时不再支持将 String 类型用作表的 Key 列、分区列以及分桶列。")]),e._v(" "),t("p",[e._v("已写入的字符串类型可以正常访问。")]),e._v(" "),t("h3",{attrs:{id:"修复-fastjson-相关漏洞-9763"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修复-fastjson-相关漏洞-9763"}},[e._v("#")]),e._v(" 修复 fastjson 相关漏洞 "),t("a",{attrs:{href:"https://github.com/apache/doris/pull/9763",target:"_blank",rel:"noopener noreferrer"}},[e._v("#9763"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("对 Canal 版本进行更新以修复 fastjson 安全漏洞")]),e._v(" "),t("h3",{attrs:{id:"添加了-admin-diagnose-tablet-命令-8839"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加了-admin-diagnose-tablet-命令-8839"}},[e._v("#")]),e._v(" 添加了 ADMIN DIAGNOSE TABLET 命令 "),t("a",{attrs:{href:"https://github.com/apache/doris/pull/8839",target:"_blank",rel:"noopener noreferrer"}},[e._v("#8839"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("通过 ADMIN DIAGNOSE TABLET tablet_id 命令可以快速诊断指定 Tablet 的问题。")]),e._v(" "),t("h2",{attrs:{id:"下载使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载使用"}},[e._v("#")]),e._v(" 下载使用")]),e._v(" "),t("h3",{attrs:{id:"下载链接-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载链接-2"}},[e._v("#")]),e._v(" 下载链接")]),e._v(" "),t("p",[t("a",{attrs:{href:"http://doris.apache.org/zh-CN/downloads/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://doris.apache.org/zh-CN/downloads/downloads.html"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"升级说明-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#升级说明-2"}},[e._v("#")]),e._v(" 升级说明")]),e._v(" "),t("p",[e._v("您可以从 Apache Doris 1.0 Release 版本和 1.0.x 发行版本升级到 1.1 Release 版本，升级过程请官网参考文档。如果您当前是 0.15 Release 版本或 0.15.x 发行版本，可跳过 1.0 版本直接升级至 1.1。")]),e._v(" "),t("p",[t("a",{attrs:{href:"http://doris.apache.org/zh-CN/installing/upgrade.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://doris.apache.org/zh-CN/installing/upgrade.html"),t("OutboundLink")],1)]),e._v(" "),t("h4",{attrs:{id:"意见反馈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#意见反馈"}},[e._v("#")]),e._v(" 意见反馈")]),e._v(" "),t("p",[e._v("如果您遇到任何使用上的问题，欢迎随时通过 GitHub Discussion 论坛或者 Dev 邮件组与我们取得联系。")]),e._v(" "),t("p",[e._v("GitHub 论坛："),t("a",{attrs:{href:"https://github.com/apache/incubator-doris/discussions",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/apache/incubator-doris/discussions"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Dev 邮件组："),t("a",{attrs:{href:"dev@doris.apache.org"}},[e._v("dev@doris.apache.org")])]),e._v(" "),t("h2",{attrs:{id:"致谢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#致谢"}},[e._v("#")]),e._v(" 致谢")]),e._v(" "),t("p",[e._v("Apache Doris 1.1 Release 版本的发布离不开所有社区用户的支持，在此向所有参与版本设计、开发、测试、讨论的社区贡献者们表示感谢，他们分别是：")]),e._v(" "),t("p",[e._v("@adonis0147")]),e._v(" "),t("p",[e._v("@airborne12")]),e._v(" "),t("p",[e._v("@amosbird")]),e._v(" "),t("p",[e._v("@aopangzi")]),e._v(" "),t("p",[e._v("@arthuryangcs")]),e._v(" "),t("p",[e._v("@awakeljw")]),e._v(" "),t("p",[e._v("@BePPPower")]),e._v(" "),t("p",[e._v("@BiteTheDDDDt")]),e._v(" "),t("p",[e._v("@bridgeDream")]),e._v(" "),t("p",[e._v("@caiconghui")]),e._v(" "),t("p",[e._v("@cambyzju")]),e._v(" "),t("p",[e._v("@ccoffline")]),e._v(" "),t("p",[e._v("@chenlinzhong")]),e._v(" "),t("p",[e._v("@daikon12")]),e._v(" "),t("p",[e._v("@DarvenDuan")]),e._v(" "),t("p",[e._v("@dataalive")]),e._v(" "),t("p",[e._v("@dataroaring")]),e._v(" "),t("p",[e._v("@deardeng")]),e._v(" "),t("p",[e._v("@Doris-Extras")]),e._v(" "),t("p",[e._v("@emerkfu")]),e._v(" "),t("p",[e._v("@EmmyMiao87")]),e._v(" "),t("p",[e._v("@englefly")]),e._v(" "),t("p",[e._v("@Gabriel39")]),e._v(" "),t("p",[e._v("@GoGoWen")]),e._v(" "),t("p",[e._v("@gtchaos")]),e._v(" "),t("p",[e._v("@HappenLee")]),e._v(" "),t("p",[e._v("@hello-stephen")]),e._v(" "),t("p",[e._v("@Henry2SS")]),e._v(" "),t("p",[e._v("@hewei-nju")]),e._v(" "),t("p",[e._v("@hf200012")]),e._v(" "),t("p",[e._v("@jacktengg")]),e._v(" "),t("p",[e._v("@jackwener")]),e._v(" "),t("p",[e._v("@Jibing-Li")]),e._v(" "),t("p",[e._v("@JNSimba")]),e._v(" "),t("p",[e._v("@kangshisen")]),e._v(" "),t("p",[e._v("@Kikyou1997")]),e._v(" "),t("p",[e._v("@kylinmac")]),e._v(" "),t("p",[e._v("@Lchangliang")]),e._v(" "),t("p",[e._v("@leo65535")]),e._v(" "),t("p",[e._v("@liaoxin01")]),e._v(" "),t("p",[e._v("@liutang123")]),e._v(" "),t("p",[e._v("@lovingfeel")]),e._v(" "),t("p",[e._v("@luozenglin")]),e._v(" "),t("p",[e._v("@luwei16")]),e._v(" "),t("p",[e._v("@luzhijing")]),e._v(" "),t("p",[e._v("@mklzl")]),e._v(" "),t("p",[e._v("@morningman")]),e._v(" "),t("p",[e._v("@morrySnow")]),e._v(" "),t("p",[e._v("@nextdreamblue")]),e._v(" "),t("p",[e._v("@Nivane")]),e._v(" "),t("p",[e._v("@pengxiangyu")]),e._v(" "),t("p",[e._v("@qidaye")]),e._v(" "),t("p",[e._v("@qzsee")]),e._v(" "),t("p",[e._v("@SaintBacchus")]),e._v(" "),t("p",[e._v("@SleepyBear96")]),e._v(" "),t("p",[e._v("@smallhibiscus")]),e._v(" "),t("p",[e._v("@spaces-X")]),e._v(" "),t("p",[e._v("@stalary")]),e._v(" "),t("p",[e._v("@starocean999")]),e._v(" "),t("p",[e._v("@steadyBoy")]),e._v(" "),t("p",[e._v("@SWJTU-ZhangLei")]),e._v(" "),t("p",[e._v("@Tanya-W")]),e._v(" "),t("p",[e._v("@tarepanda1024")]),e._v(" "),t("p",[e._v("@tianhui5")]),e._v(" "),t("p",[e._v("@Userwhite")]),e._v(" "),t("p",[e._v("@wangbo")]),e._v(" "),t("p",[e._v("@wangyf0555")]),e._v(" "),t("p",[e._v("@weizuo93")]),e._v(" "),t("p",[e._v("@whutpencil")]),e._v(" "),t("p",[e._v("@wsjz")]),e._v(" "),t("p",[e._v("@wunan1210")]),e._v(" "),t("p",[e._v("@xiaokang")]),e._v(" "),t("p",[e._v("@xinyiZzz")]),e._v(" "),t("p",[e._v("@xlwh")]),e._v(" "),t("p",[e._v("@xy720")]),e._v(" "),t("p",[e._v("@yangzhg")]),e._v(" "),t("p",[e._v("@Yankee24")]),e._v(" "),t("p",[e._v("@yiguolei")]),e._v(" "),t("p",[e._v("@yinzhijian")]),e._v(" "),t("p",[e._v("@yixiutt")]),e._v(" "),t("p",[e._v("@zbtzbtzbt")]),e._v(" "),t("p",[e._v("@zenoyang")]),e._v(" "),t("p",[e._v("@zhangstar333")]),e._v(" "),t("p",[e._v("@zhangyifan27")]),e._v(" "),t("p",[e._v("@zhannngchen")]),e._v(" "),t("p",[e._v("@zhengshengjun")]),e._v(" "),t("p",[e._v("@zhengshiJ")]),e._v(" "),t("p",[e._v("@zingdle")]),e._v(" "),t("p",[e._v("@zuochunwei")]),e._v(" "),t("p",[e._v("@zy-kkk")])])}),[],!1,null,null,null);a.default=_.exports}}]);