(window.webpackJsonp=window.webpackJsonp||[]).push([[622],{1248:function(a,t,n){"use strict";n.r(t);var i=n(15),s=Object(i.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h2",{attrs:{id:"统计数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#统计数据"}},[a._v("#")]),a._v(" 统计数据")]),a._v(" "),n("p",[a._v("共 44 位作者提交了 101 个 Commit 。感谢以下作者的贡献（Github ID，按字母序）：")]),a._v(" "),n("p",[a._v("@adonis0147, @amosbird, @aopangzi, @arthuryangcs, @awakeljw, @BiteTheDDDDt, @bridgeDream, @caiconghui, @CalvinKirs, @cambyzju, @ChPi, @daikon12, @DarvenDuan, @dataalive, @dataroaring, @GoGoWen, @HappenLee, @Henry2SS, @hf200012, @jacktengg, @kylinmac, @liaoxin01, @liutang123, @lonre, @madongz, @morningman, @mrhhsg, @Nivane, @qidaye, @steadyBoy, @SWJTU-ZhangLei, @wangbo, @wangshuo128, @wangyf0555, @weizuo93, @wunan1210, @xingtanzjr, @yangzhg, @yiguolei, @zbtzbtzbt, @zhangstar333, @zhangyifan27, @zhannngchen, @zuochunwei")]),a._v(" "),n("p",[a._v("最近 2 周，共修改新增代码行 8654 ，删除代码行 8608。")]),a._v(" "),n("h2",{attrs:{id:"主要进展"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#主要进展"}},[a._v("#")]),a._v(" 主要进展")]),a._v(" "),n("h3",{attrs:{id:"新增功能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新增功能"}},[a._v("#")]),a._v(" 新增功能")]),a._v(" "),n("ul",[n("li",[n("p",[a._v("https://github.com/apache/incubator-doris/pull/8188")]),a._v(" "),n("p",[a._v("show routine load 语句支持通过 like 模糊匹配作业名称。")])]),a._v(" "),n("li",[n("p",[a._v("https://github.com/apache/incubator-doris/pull/8041\nhttps://github.com/apache/incubator-doris/pull/8259")]),a._v(" "),n("p",[a._v("支持创建 random 分桶的表。并支持将hash 分桶的表转换成 random 分桶的表。")])]),a._v(" "),n("li",[n("p",[a._v("https://github.com/apache/incubator-doris/pull/8179")]),a._v(" "),n("p",[a._v("支持 iceberg 外表的查询。")])]),a._v(" "),n("li",[n("p",[a._v("https://github.com/apache/incubator-doris-flink-connector/pull/12")]),a._v(" "),n("p",[a._v("Flink connector 支持 exactly once 语义")])])]),a._v(" "),n("h3",{attrs:{id:"work-in-progess"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#work-in-progess"}},[a._v("#")]),a._v(" Work-in-Progess")]),a._v(" "),n("ul",[n("li",[n("p",[a._v("https://github.com/apache/incubator-doris/pull/8212")]),a._v(" "),n("p",[a._v("支持 array 类型的 PB 结构定义。")])]),a._v(" "),n("li",[n("p",[a._v("https://github.com/apache/incubator-doris/pull/8279")]),a._v(" "),n("p",[a._v("重构 typo info 以支持复合数据类型")])])]),a._v(" "),n("h3",{attrs:{id:"功能改进"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#功能改进"}},[a._v("#")]),a._v(" 功能改进")]),a._v(" "),n("ul",[n("li",[n("p",[a._v("https://github.com/apache/incubator-doris-flink-connector/pull/11")]),a._v(" "),n("p",[a._v("flink connector 支持通过多个 FE 进行 BE ip 的获取。")])]),a._v(" "),n("li",[n("p",[a._v("https://github.com/apache/incubator-doris/pull/8146")]),a._v(" "),n("p",[a._v("新增 FE 参数以支持查询时忽略 compaction 较慢的副本。")])]),a._v(" "),n("li",[n("p",[a._v("https://github.com/apache/incubator-doris/pull/8229")]),a._v(" "),n("p",[a._v("优化 BE 端字符串比较的性能。")])]),a._v(" "),n("li",[n("p",[a._v("https://github.com/apache/incubator-doris/pull/8245")]),a._v(" "),n("p",[a._v("支持当表的部分分区在进行 restore 任务时，其他分区依然可以正常查询。")])]),a._v(" "),n("li",[n("p",[a._v("https://github.com/apache/incubator-doris/pull/8119")]),a._v(" "),n("p",[a._v("优化了向量化执行引擎中，HashJoin 的性能。")])]),a._v(" "),n("li",[n("p",[a._v("https://github.com/apache/incubator-doris/pull/8158\nhttps://github.com/apache/incubator-doris/pull/8138")]),a._v(" "),n("p",[a._v("支持更多函数的向量化实现。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("json_array\njson_object\njson_quote\nbitmap_and_not_count\nbitmap_or\nbitmap_xor\nbitmap_xor_count\nbitmap_and\nbitmap_and_not\nbitmap_subset_in_range\nbitmap_subset_limit\nbitmap_and_count\nsub_bitmap\nbitmap_has_all\nbitmap_or_count\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br")])])])]),a._v(" "),n("h3",{attrs:{id:"bug-修复"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bug-修复"}},[a._v("#")]),a._v(" Bug 修复")]),a._v(" "),n("ul",[n("li",[n("p",[a._v("https://github.com/apache/incubator-doris/pull/8152")]),a._v(" "),n("p",[a._v("修复 "),n("code",[a._v("explode_json_array_string")]),a._v(" 某些情况下返回结果不对的问题。")])]),a._v(" "),n("li",[n("p",[a._v("https://github.com/apache/incubator-doris/pull/8142")]),a._v(" "),n("p",[a._v("修复 int 列转换成字符串列导致 BE crash 的问题。")])])]),a._v(" "),n("h3",{attrs:{id:"其他"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[a._v("#")]),a._v(" 其他")]),a._v(" "),n("ul",[n("li",[n("p",[a._v("https://github.com/apache/incubator-doris/pull/8249")]),a._v(" "),n("p",[a._v("支持在 arm 服务器上的源码编译。")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);