(window.webpackJsonp=window.webpackJsonp||[]).push([[2831],{3459:function(t,a,i){"use strict";i.r(a);var o=i(15),p=Object(o.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h2",{attrs:{id:"统计数据"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#统计数据"}},[t._v("#")]),t._v(" 统计数据")]),t._v(" "),i("p",[t._v("共 28 位作者提交了 54 个 Commit 。感谢以下作者的贡献（Github ID，按字母序）：")]),t._v(" "),i("p",[t._v("924060929, adonis0147, Aiden-Dong, caiconghui, chovy-3012, eyesmoons, GoGoWen, Henry2SS, hf200012, jackwener, littleeleventhwolf, liutang123, lovingfeel, luzhijing, morningman, qidaye, qzsee, tianhui5, Userwhite, vinson0526, wayofeng, weajun, WindyGao, xuzifu666, xy720, yangzhg, zenoyang, zuochunwei")]),t._v(" "),i("p",[t._v("最近 2 周，共修改新增代码行 4420 ，删除代码行 1998。")]),t._v(" "),i("h2",{attrs:{id:"主要进展"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#主要进展"}},[t._v("#")]),t._v(" 主要进展")]),t._v(" "),i("h3",{attrs:{id:"新增功能"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#新增功能"}},[t._v("#")]),t._v(" 新增功能")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7403")]),t._v(" "),i("p",[t._v("SQL block rule 新增对 partition num，tablet num 和 cardinality 的限制。用户可以通过设置这些参数，来阻止不符合规则的 SQL 查询。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7673")]),t._v(" "),i("p",[t._v("新增 WEEKDAY 函数。")])])]),t._v(" "),i("h3",{attrs:{id:"功能改进"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#功能改进"}},[t._v("#")]),t._v(" 功能改进")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7423")]),t._v(" "),i("p",[t._v("新增 "),i("code",[t._v("repair_slow_replica")]),t._v(" 参数来自动删除版本数堆积过多的副本。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7240")]),t._v(" "),i("p",[t._v("优化导入命令的返回结果。当导入数据为空是，返回成功，而不是 ``all partitions have no load data`。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7574")]),t._v(" "),i("p",[t._v("Runtime Filter 支持在运行是判断使用 IN 还是 Bloom Filter 类型。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7568")]),t._v(" "),i("p",[t._v("优化 DataX doriswriter 插件，默认使用 json 格式以避免遇到行列分隔符冲突的问题。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7514")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7531")]),t._v(" "),i("p",[t._v("优化了 Spark Connector 写入端的错误处理逻辑。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7664")]),t._v(" "),i("p",[t._v("支持更多 hint 语法以增强对 mysql 的兼容性。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7630")]),t._v(" "),i("p",[t._v("Routine Load 支持老版本的 kafka(< 0.10)")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7543")]),t._v(" "),i("p",[t._v("优化了 BE 端 RPC client cache 的锁逻辑。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7754")]),t._v(" "),i("p",[t._v("优化Routine Load 的执行逻辑，以降低 Routine Load执行过程中出现 RPC timeout 的频率。")])])]),t._v(" "),i("h3",{attrs:{id:"bug-修复"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bug-修复"}},[t._v("#")]),t._v(" Bug 修复")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7563")]),t._v(" "),i("p",[t._v("修复部分情况下，Decommission Backend 可能因 "),i("code",[t._v("no proper tag is chose for tablet")]),t._v(" 错误而被阻塞的问题。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7607")]),t._v(" "),i("p",[t._v("修复审计日志插件在某些异常情况下会退出的问题。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7605")]),t._v(" "),i("p",[t._v("修复部分情况下，创建 error hub 可能导致的并发锁问题。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7691")]),t._v(" "),i("p",[t._v("修复使用 S3 SDK 无法访问阿里云对象存储的问题。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7721")]),t._v(" "),i("p",[t._v("修复 Lateral View 相关 bug。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7526")]),t._v(" "),i("p",[t._v("修复某些情况下，FE 元数据 Checkpoint 操作可能会错误的改写当前元数据值的问题。")])])]),t._v(" "),i("h3",{attrs:{id:"其他"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7616")]),t._v(" "),i("p",[t._v("新增将 Spark/Flink Connector 推送到 Maven 仓库的流程支持。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7638")]),t._v(" "),i("p",[t._v("优化了 Pull Request Template 的内容。")])])])])}),[],!1,null,null,null);a.default=p.exports}}]);