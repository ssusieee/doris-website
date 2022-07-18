(window.webpackJsonp=window.webpackJsonp||[]).push([[2356],{2983:function(t,a,e){"use strict";e.r(a);var s=e(15),_=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"tablet-元数据管理工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tablet-元数据管理工具"}},[t._v("#")]),t._v(" Tablet 元数据管理工具")]),t._v(" "),e("h2",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),e("p",[t._v("在最新版本的代码中，我们在 BE 端引入了 RocksDB，用于存储 tablet 的元信息，以解决之前通过 header 文件的方式存储元信息，带来的各种功能和性能方面的问题。当前每一个数据目录（root_path），都会有一个对应的 RocksDB 实例，其中以 key-value 的方式，存放对应 root_path 上的所有 tablet 的元数据。")]),t._v(" "),e("p",[t._v("为了方便进行这些元数据的维护，我们提供了在线的 http 接口方式和离线的 meta_tool 工具以完成相关的管理操作。")]),t._v(" "),e("p",[t._v("其中 http 接口仅用于在线的查看 tablet 的元数据，可以在 BE 进程运行的状态下使用。")]),t._v(" "),e("p",[t._v("而 meta_tool 工具则仅用于离线的各类元数据管理操作，必须先停止BE进程后，才可使用。")]),t._v(" "),e("p",[t._v("meta_tool 工具存放在 BE 的 lib/ 目录下。")]),t._v(" "),e("h2",{attrs:{id:"操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作"}},[t._v("#")]),t._v(" 操作")]),t._v(" "),e("h3",{attrs:{id:"查看-tablet-meta"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看-tablet-meta"}},[t._v("#")]),t._v(" 查看 Tablet Meta")]),t._v(" "),e("p",[t._v("查看 Tablet Meta 信息可以分为在线方法和离线方法")]),t._v(" "),e("h4",{attrs:{id:"在线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在线"}},[t._v("#")]),t._v(" 在线")]),t._v(" "),e("p",[t._v("访问 BE 的 http 接口，获取对应的 Tablet Meta 信息：")]),t._v(" "),e("p",[t._v("api：")]),t._v(" "),e("p",[e("code",[t._v("http://{host}:{port}/api/meta/header/{tablet_id}/{schema_hash}")])]),t._v(" "),e("blockquote",[e("p",[t._v("host: BE 的 hostname")]),t._v(" "),e("p",[t._v("port: BE 的 http 端口")]),t._v(" "),e("p",[t._v("tablet_id: tablet id")]),t._v(" "),e("p",[t._v("schema_hash: tablet 的 schema hash")])]),t._v(" "),e("p",[t._v("举例：")]),t._v(" "),e("p",[e("code",[t._v("http://be_host:8040/api/meta/header/14156/2458238340")])]),t._v(" "),e("p",[t._v("最终查询成功的话，会将 Tablet Meta 以 json 形式返回。")]),t._v(" "),e("h4",{attrs:{id:"离线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#离线"}},[t._v("#")]),t._v(" 离线")]),t._v(" "),e("p",[t._v("基于 meta_tool 工具获取某个盘上的 Tablet Meta。")]),t._v(" "),e("p",[t._v("命令：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./lib/meta_tool --root_path=/path/to/root_path --operation=get_meta --tablet_id=xxx --schema_hash=xxx\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("blockquote",[e("p",[t._v("root_path: 在 be.conf 中配置的对应的 root_path 路径。")])]),t._v(" "),e("p",[t._v("结果也是按照 json 的格式展现 Tablet Meta。")]),t._v(" "),e("h3",{attrs:{id:"加载-header"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加载-header"}},[t._v("#")]),t._v(" 加载 header")]),t._v(" "),e("p",[t._v("加载 header 的功能是为了完成实现 tablet 人工迁移而提供的。该功能是基于 json 格式的 Tablet Meta 实现的，所以如果涉及 shard 字段、version 信息的更改，可以直接在 Tablet Meta 的 json 内容中更改。然后使用以下的命令进行加载。")]),t._v(" "),e("p",[t._v("命令：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./lib/meta_tool --operation=load_meta --root_path=/path/to/root_path --json_header_path=path\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"删除-header"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除-header"}},[t._v("#")]),t._v(" 删除 header")]),t._v(" "),e("p",[t._v("为了实现从某个 be 的某个盘中删除某个 tablet 元数据的功能。可以单独删除一个 tablet 的元数据，或者批量删除一组 tablet 的元数据。")]),t._v(" "),e("p",[t._v("删除单个tablet元数据：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./lib/meta_tool --operation=delete_meta --root_path=/path/to/root_path --tablet_id=xxx --schema_hash=xxx\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("删除一组tablet元数据：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./lib/meta_tool --operation=batch_delete_meta --tablet_file=/path/to/tablet_file.txt\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("其中 "),e("code",[t._v("tablet_file.txt")]),t._v(" 中的每一行表示一个 tablet 的信息。格式为：")]),t._v(" "),e("p",[e("code",[t._v("root_path,tablet_id,schema_hash")])]),t._v(" "),e("p",[t._v("每一行各个列用逗号分隔。")]),t._v(" "),e("p",[e("code",[t._v("tablet_file")]),t._v(" 文件示例：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("/output/be/data/,14217,352781111\n/output/be/data/,14219,352781111\n/output/be/data/,14223,352781111\n/output/be/data/,14227,352781111\n/output/be/data/,14233,352781111\n/output/be/data/,14239,352781111\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[t._v("批量删除会跳过 "),e("code",[t._v("tablet_file")]),t._v(" 中 tablet 信息格式不正确的行。并在执行完成后，显示成功删除的数量和错误数量。")]),t._v(" "),e("h3",{attrs:{id:"展示-pb-格式的-tabletmeta"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#展示-pb-格式的-tabletmeta"}},[t._v("#")]),t._v(" 展示 pb 格式的 TabletMeta")]),t._v(" "),e("p",[t._v("这个命令是为了查看旧的基于文件的管理的PB格式的 Tablet Meta，以 json 的格式展示 Tablet Meta。")]),t._v(" "),e("p",[t._v("命令：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./lib/meta_tool --operation=show_meta --root_path=/path/to/root_path --pb_header_path=path\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"展示-pb-格式的-segment-meta"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#展示-pb-格式的-segment-meta"}},[t._v("#")]),t._v(" 展示 pb 格式的 Segment meta")]),t._v(" "),e("p",[t._v("这个命令是为了查看SegmentV2 的segment meta信息，以json 形式展示出来")]),t._v(" "),e("p",[t._v("命令：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./meta_tool --operation=show_segment_footer --file=/path/to/segment/file\n\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])])])}),[],!1,null,null,null);a.default=_.exports}}]);