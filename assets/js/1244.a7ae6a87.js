(window.webpackJsonp=window.webpackJsonp||[]).push([[1244],{1869:function(e,t,a){"use strict";a.r(t);var n=a(15),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"tablet-metadata-management-tool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tablet-metadata-management-tool"}},[e._v("#")]),e._v(" Tablet metadata management tool")]),e._v(" "),a("h2",{attrs:{id:"background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),a("p",[e._v("In the latest version of the code, we introduced RocksDB in BE to store meta-information of tablet, in order to solve various functional and performance problems caused by storing meta-information through header file. Currently, each data directory (root path) has a corresponding RocksDB instance, in which all tablets on the corresponding root path are stored in the key-value manner.")]),e._v(" "),a("p",[e._v("To facilitate the maintenance of these metadata, we provide an online HTTP interface and an offline meta tool to complete related management operations.")]),e._v(" "),a("p",[e._v("The HTTP interface is only used to view tablet metadata online, and can be used when the BE process is running.")]),e._v(" "),a("p",[e._v("However, meta tool is only used for off-line metadata management operations. BE must be stopped before it can be used.")]),e._v(" "),a("p",[e._v("The meta tool tool is stored in the Lib / directory of BE.")]),e._v(" "),a("h2",{attrs:{id:"operation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operation"}},[e._v("#")]),e._v(" Operation")]),e._v(" "),a("h3",{attrs:{id:"view-tablet-meta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view-tablet-meta"}},[e._v("#")]),e._v(" View Tablet Meta")]),e._v(" "),a("p",[e._v("Viewing Tablet Meta information can be divided into online and offline methods")]),e._v(" "),a("h4",{attrs:{id:"online"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#online"}},[e._v("#")]),e._v(" Online")]),e._v(" "),a("p",[e._v("Access BE's HTTP interface to obtain the corresponding Tablet Meta information:")]),e._v(" "),a("p",[e._v("api:")]),e._v(" "),a("p",[a("code",[e._v("http://{host}:{port}/api/meta/header/{tablet_id}/{schema_hash}")])]),e._v(" "),a("blockquote",[a("p",[e._v("Host: be Hostname")]),e._v(" "),a("p",[e._v("port: BE's HTTP port")]),e._v(" "),a("p",[e._v("tablet id: tablet id")]),e._v(" "),a("p",[e._v("schema hash: tablet schema hash")])]),e._v(" "),a("p",[e._v("Give an example:")]),e._v(" "),a("p",[a("code",[e._v("http://be_host:8040/api/meta/header/14156/2458238340")])]),e._v(" "),a("p",[e._v("If the final query is successful, the Tablet Meta will be returned as json.")]),e._v(" "),a("h4",{attrs:{id:"offline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#offline"}},[e._v("#")]),e._v(" Offline")]),e._v(" "),a("p",[e._v("Get Tablet Meta on a disk based on the meta\\ tool tool.")]),e._v(" "),a("p",[e._v("Command:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./lib/meta_tool --root_path=/path/to/root_path --operation=get_meta --tablet_id=xxx --schema_hash=xxx\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("blockquote",[a("p",[e._v("root_path: The corresponding root_path path path configured in be.conf.")])]),e._v(" "),a("p",[e._v("The result is also a presentation of Tablet Meta in JSON format.")]),e._v(" "),a("h3",{attrs:{id:"load-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-header"}},[e._v("#")]),e._v(" Load header")]),e._v(" "),a("p",[e._v("The function of loading header is provided to realize manual migration of tablet. This function is based on Tablet Meta in JSON format, so if changes in the shard field and version information are involved, they can be changed directly in the JSON content of Tablet Meta. Then use the following commands to load.")]),e._v(" "),a("p",[e._v("Command:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./lib/meta_tool --operation=load_meta --root_path=/path/to/root_path --json_meta_path=path\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"delete-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-header"}},[e._v("#")]),e._v(" Delete header")]),e._v(" "),a("p",[e._v("In order to realize the function of deleting a tablet meta from a disk of a BE. Support single delete and batch delete.")]),e._v(" "),a("p",[e._v("Single delete:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./lib/meta_tool --operation=delete_meta --root_path=/path/to/root_path --tablet_id=xxx --schema_hash=xxx`\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Batch delete:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./lib/meta_tool --operation=batch_delete_meta --tablet_file=/path/to/tablet_file.txt\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Each line in "),a("code",[e._v("tablet_file.txt")]),e._v(" represents the information of a tablet. The format is:")]),e._v(" "),a("p",[a("code",[e._v("root_path,tablet_id,schema_hash")])]),e._v(" "),a("p",[e._v("Each column are separated by comma.")]),e._v(" "),a("p",[a("code",[e._v("tablet_file")]),e._v(" example:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/output/be/data/,14217,352781111\n/output/be/data/,14219,352781111\n/output/be/data/,14223,352781111\n/output/be/data/,14227,352781111\n/output/be/data/,14233,352781111\n/output/be/data/,14239,352781111\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("Batch delete will skip the line with incorrect tablet information format in "),a("code",[e._v("tablet_file")]),e._v(". And after the execution is completed, the number of successful deletions and the number of errors are displayed.")]),e._v(" "),a("h3",{attrs:{id:"tabletmeta-in-pb-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tabletmeta-in-pb-format"}},[e._v("#")]),e._v(" TabletMeta in Pb format")]),e._v(" "),a("p",[e._v("This command is to view the old file-based management PB format Tablet Meta, and to display Tablet Meta in JSON format.")]),e._v(" "),a("p",[e._v("Command:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./lib/meta_tool --operation=show_meta --root_path=/path/to/root_path --pb_header_path=path\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"segment-meta-in-pb-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#segment-meta-in-pb-format"}},[e._v("#")]),e._v(" Segment meta in Pb format")]),e._v(" "),a("p",[e._v("This command is to view the PB format segment meta, and to display segment meta in JSON format.")]),e._v(" "),a("p",[e._v("Command:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./meta_tool --operation=show_segment_footer --file=/path/to/segment/file\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=o.exports}}]);