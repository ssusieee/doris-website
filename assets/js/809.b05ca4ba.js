(window.webpackJsonp=window.webpackJsonp||[]).push([[809],{1437:function(s,a,t){"use strict";t.r(a);var e=t(15),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"最佳实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[s._v("#")]),s._v(" 最佳实践")]),s._v(" "),t("h2",{attrs:{id:"建表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建表"}},[s._v("#")]),s._v(" 建表")]),s._v(" "),t("h3",{attrs:{id:"数据模型选择"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据模型选择"}},[s._v("#")]),s._v(" 数据模型选择")]),s._v(" "),t("p",[s._v("Doris 数据模型上目前分为三类: AGGREGATE KEY, UNIQUE KEY, DUPLICATE KEY。三种模型中数据都是按KEY进行排序。")]),s._v(" "),t("h4",{attrs:{id:"aggregate-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aggregate-key"}},[s._v("#")]),s._v(" AGGREGATE KEY")]),s._v(" "),t("p",[s._v("AGGREGATE KEY相同时，新旧记录进行聚合，目前支持的聚合函数有SUM, MIN, MAX, REPLACE。")]),s._v(" "),t("p",[s._v("AGGREGATE KEY模型可以提前聚合数据, 适合报表和多维分析业务。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" site_visit\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    siteid      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    city        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SMALLINT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    username    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    pv "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BIGINT")]),s._v("   SUM "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nAGGREGATE "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("siteid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" city"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DISTRIBUTED")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("HASH")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("siteid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" BUCKETS "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h4",{attrs:{id:"unique-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unique-key"}},[s._v("#")]),s._v(" UNIQUE KEY")]),s._v(" "),t("p",[s._v("UNIQUE KEY 相同时，新记录覆盖旧记录。目前 UNIQUE KEY 实现上和 AGGREGATE KEY 的 REPLACE 聚合方法一样，二者本质上相同。适用于有更新需求的分析业务。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" sales_order\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    orderid     "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BIGINT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TINYINT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    username    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    amount      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BIGINT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNIQUE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("orderid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DISTRIBUTED")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("HASH")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("orderid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" BUCKETS "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h4",{attrs:{id:"duplicate-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#duplicate-key"}},[s._v("#")]),s._v(" DUPLICATE KEY")]),s._v(" "),t("p",[s._v("只指定排序列，相同的行不会合并。适用于数据无需提前聚合的分析业务。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" session_data\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    visitorid   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SMALLINT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    sessionid   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BIGINT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    visittime   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATETIME")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    city        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    province    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    ip          "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    brower      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    url         "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DUPLICATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("visitorid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sessionid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DISTRIBUTED")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("HASH")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sessionid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" visitorid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" BUCKETS "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h3",{attrs:{id:"大宽表与-star-schema"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#大宽表与-star-schema"}},[s._v("#")]),s._v(" 大宽表与 Star Schema")]),s._v(" "),t("p",[s._v("业务方建表时, 为了和前端业务适配, 往往不对维度信息和指标信息加以区分, 而将 Schema 定义成大宽表。对于 Doris 而言, 这类大宽表往往性能不尽如人意:")]),s._v(" "),t("ul",[t("li",[s._v("Schema 中字段数比较多, 聚合模型中可能 key 列比较多, 导入过程中需要排序的列会增加。")]),s._v(" "),t("li",[s._v("维度信息更新会反应到整张表中，而更新的频率直接影响查询的效率。")])]),s._v(" "),t("p",[s._v("使用过程中，建议用户尽量使用 Star Schema 区分维度表和指标表。频繁更新的维度表也可以放在 MySQL 外部表中。而如果只有少量更新, 可以直接放在 Doris 中。在 Doris 中存储维度表时，可对维度表设置更多的副本，提升 Join 的性能。")]),s._v(" "),t("h3",{attrs:{id:"分区和分桶"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分区和分桶"}},[s._v("#")]),s._v(" 分区和分桶")]),s._v(" "),t("p",[s._v("Doris 支持两级分区存储, 第一层为分区(partition)，目前支持 RANGE 分区和 LIST 分区两种类型, 第二层为 HASH 分桶(bucket)。")]),s._v(" "),t("h4",{attrs:{id:"分区-partition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分区-partition"}},[s._v("#")]),s._v(" 分区(partition)")]),s._v(" "),t("p",[s._v("分区用于将数据划分成不同区间, 逻辑上可以理解为将原始表划分成了多个子表。可以方便的按分区对数据进行管理，例如，删除数据时，更加迅速。")]),s._v(" "),t("h5",{attrs:{id:"range分区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#range分区"}},[s._v("#")]),s._v(" RANGE分区")]),s._v(" "),t("p",[s._v("业务上，多数用户会选择采用按时间进行partition, 让时间进行partition有以下好处：")]),s._v(" "),t("ul",[t("li",[s._v("可区分冷热数据")]),s._v(" "),t("li",[s._v("可用上Doris分级存储(SSD + SATA)的功能")])]),s._v(" "),t("h5",{attrs:{id:"list分区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list分区"}},[s._v("#")]),s._v(" LIST分区")]),s._v(" "),t("p",[s._v("业务上，用户可以选择城市或者其他枚举值进行partition。")]),s._v(" "),t("h4",{attrs:{id:"hash分桶-bucket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hash分桶-bucket"}},[s._v("#")]),s._v(" HASH分桶(bucket)")]),s._v(" "),t("p",[s._v("根据hash值将数据划分成不同的 bucket。")]),s._v(" "),t("ul",[t("li",[s._v("建议采用区分度大的列做分桶, 避免出现数据倾斜")]),s._v(" "),t("li",[s._v("为方便数据恢复, 建议单个 bucket 的 size 不要太大, 保持在 10GB 以内, 所以建表或增加 partition 时请合理考虑 bucket 数目, 其中不同 partition 可指定不同的 buckets 数。")])]),s._v(" "),t("h3",{attrs:{id:"稀疏索引和-bloom-filter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#稀疏索引和-bloom-filter"}},[s._v("#")]),s._v(" 稀疏索引和 Bloom Filter")]),s._v(" "),t("p",[s._v("Doris对数据进行有序存储, 在数据有序的基础上为其建立稀疏索引,索引粒度为 block(1024行)。")]),s._v(" "),t("p",[s._v("稀疏索引选取 schema 中固定长度的前缀作为索引内容, 目前 Doris 选取 36 个字节的前缀作为索引。")]),s._v(" "),t("ul",[t("li",[s._v("建表时建议将查询中常见的过滤字段放在 Schema 的前面, 区分度越大，频次越高的查询字段越往前放。")]),s._v(" "),t("li",[s._v("这其中有一个特殊的地方,就是 varchar 类型的字段。varchar 类型字段只能作为稀疏索引的最后一个字段。索引会在 varchar 处截断, 因此 varchar 如果出现在前面，可能索引的长度可能不足 36 个字节。具体可以参阅 "),t("RouterLink",{attrs:{to:"/zh-CN/docs/data-table/data-model.html"}},[s._v("数据模型")]),s._v("、"),t("RouterLink",{attrs:{to:"/zh-CN/docs/data-table/hit-the-rollup.html"}},[s._v("ROLLUP 及查询")]),s._v("。")],1),s._v(" "),t("li",[s._v("除稀疏索引之外, Doris还提供bloomfilter索引, bloomfilter索引对区分度比较大的列过滤效果明显。 如果考虑到varchar不能放在稀疏索引中, 可以建立bloomfilter索引。")])]),s._v(" "),t("h3",{attrs:{id:"rollup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rollup"}},[s._v("#")]),s._v(" Rollup")]),s._v(" "),t("p",[s._v("Rollup 本质上可以理解为原始表(Base Table)的一个物化索引。建立 Rollup 时可只选取 Base Table 中的部分列作为 Schema。Schema 中的字段顺序也可与 Base Table 不同。")]),s._v(" "),t("p",[s._v("下列情形可以考虑建立 Rollup：")]),s._v(" "),t("h4",{attrs:{id:"base-table-中数据聚合度不高。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base-table-中数据聚合度不高。"}},[s._v("#")]),s._v(" Base Table 中数据聚合度不高。")]),s._v(" "),t("p",[s._v("这一般是因 Base Table 有区分度比较大的字段而导致。此时可以考虑选取部分列，建立 Rollup。")]),s._v(" "),t("p",[s._v("如对于 "),t("code",[s._v("site_visit")]),s._v(" 表：")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("site_visit(siteid, city, username, pv)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("siteid 可能导致数据聚合度不高，如果业务方经常根据城市统计pv需求，可以建立一个只有 city, pv 的 Rollup：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" site_visit "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" ROLLUP rollup_city"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("city"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"base-table-中的前缀索引无法命中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base-table-中的前缀索引无法命中"}},[s._v("#")]),s._v(" Base Table 中的前缀索引无法命中")]),s._v(" "),t("p",[s._v("这一般是 Base Table 的建表方式无法覆盖所有的查询模式。此时可以考虑调整列顺序，建立 Rollup。")]),s._v(" "),t("p",[s._v("如对于 session_data 表：")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("session_data(visitorid, sessionid, visittime, city, province, ip, brower, url)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果除了通过 visitorid 分析访问情况外，还有通过 brower, province 分析的情形，可以单独建立 Rollup。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" session_data "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" ROLLUP rollup_brower"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("brower"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("province"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("ip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DUPLICATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("brower"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("province"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"schema-change"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schema-change"}},[s._v("#")]),s._v(" Schema Change")]),s._v(" "),t("p",[s._v("Doris中目前进行 Schema Change 的方式有三种：Sorted Schema Change，Direct Schema Change, Linked Schema Change。")]),s._v(" "),t("h3",{attrs:{id:"sorted-schema-change"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sorted-schema-change"}},[s._v("#")]),s._v(" Sorted Schema Change")]),s._v(" "),t("p",[s._v("改变了列的排序方式，需对数据进行重新排序。例如删除排序列中的一列, 字段重排序。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" site_visit "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" city"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"direct-schema-change"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#direct-schema-change"}},[s._v("#")]),s._v(" Direct Schema Change")]),s._v(" "),t("p",[s._v("无需重新排序，但是需要对数据做一次转换。例如修改列的类型，在稀疏索引中加一列等。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" site_visit "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MODIFY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" username "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"linked-schema-change"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linked-schema-change"}},[s._v("#")]),s._v(" Linked Schema Change")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" site_visit "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" click "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),s._v(" SUM "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("建表时建议考虑好 Schema，这样在进行 Schema Change 时可以加快速度。")])])}),[],!1,null,null,null);a.default=n.exports}}]);