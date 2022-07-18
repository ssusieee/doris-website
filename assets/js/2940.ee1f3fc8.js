(window.webpackJsonp=window.webpackJsonp||[]).push([[2940],{3570:function(t,a,s){"use strict";s.r(a);var e=s(15),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"集群升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集群升级"}},[t._v("#")]),t._v(" 集群升级")]),t._v(" "),s("p",[t._v("Doris 可以通过滚动升级的方式，平滑进行升级。建议按照以下步骤进行安全升级。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("注：")])]),t._v(" "),s("ol",[s("li",[t._v("Doris不支持跨两位版本号进行升级，例如：不能从0.13直接升级到0.15，只能通过0.13.x -> 0.14.x -> 0.15.x，三位版本号可以跨版本升级，比如从0.13.15可以直接升级到0.14.13.1，不必一定要升级0.14.7 或者 0.14.12.1这种版本")]),t._v(" "),s("li",[t._v("以下方式均建立在高可用部署的情况下。即数据 3 副本，FE 高可用情况下。")])])]),t._v(" "),s("h2",{attrs:{id:"前置工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前置工作"}},[t._v("#")]),t._v(" 前置工作")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("关闭集群副本修复和均衡功能")]),t._v(" "),s("p",[t._v("升级过程中会有节点重启，所以可能会触发不必要的集群均衡和副本修复逻辑。可以先通过以下命令关闭：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('# 关闭副本均衡逻辑。关闭后，不会再触发普通表副本的均衡操作。\n$ mysql-client > admin set frontend config("disable_balance" = "true");\n\n# 关闭 colocation 表的副本均衡逻辑。关闭后，不会再触发 colocation 表的副本重分布操作。\n$ mysql-client > admin set frontend config("disable_colocate_balance" = "true");\n\n# 关闭副本调度逻辑。关闭后，所有已产生的副本修复和均衡任务不会再被调度。\n$ mysql-client > admin set frontend config("disable_tablet_scheduler" = "true");\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("当集群升级完毕后，在通过以上命令将对应配置设为原值即可。")])])]),t._v(" "),s("h2",{attrs:{id:"测试-be-升级正确性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试-be-升级正确性"}},[t._v("#")]),t._v(" 测试 BE 升级正确性")]),t._v(" "),s("ol",[s("li",[t._v("任意选择一个 BE 节点，部署最新的 palo_be 二进制文件。")]),t._v(" "),s("li",[t._v("重启 BE 节点，通过 BE 日志 be.INFO，查看是否启动成功。")]),t._v(" "),s("li",[t._v("如果启动失败，可以先排查原因。如果错误不可恢复，可以直接通过 DROP BACKEND 删除该 BE、清理数据后，使用上一个版本的 palo_be 重新启动 BE。然后重新 ADD BACKEND。（"),s("strong",[t._v("该方法会导致丢失一个数据副本，请务必确保3副本完整的情况下，执行这个操作！！！")]),t._v("）")])]),t._v(" "),s("h2",{attrs:{id:"测试-fe-元数据兼容性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试-fe-元数据兼容性"}},[t._v("#")]),t._v(" 测试 FE 元数据兼容性")]),t._v(" "),s("ol",{attrs:{start:"0"}},[s("li",[s("strong",[t._v("重要！!元数据兼容性异常很可能导致数据无法恢复！！")])]),t._v(" "),s("li",[t._v("单独使用新版本部署一个测试用的 FE 进程（比如自己本地的开发机）。")]),t._v(" "),s("li",[t._v("修改测试用的 FE 的配置文件 fe.conf，将所有端口设置为"),s("strong",[t._v("与线上不同")]),t._v("。")]),t._v(" "),s("li",[t._v("在 fe.conf 添加配置：cluster_id=123456")]),t._v(" "),s("li",[t._v("在 fe.conf 添加配置：metadata_failure_recovery=true")]),t._v(" "),s("li",[t._v("拷贝线上环境 Master FE 的元数据目录 palo-meta 到测试环境")]),t._v(" "),s("li",[t._v("将拷贝到测试环境中的 doris-meta/image/VERSION 文件中的 cluster_id 修改为 123456（即与第3步中相同）")]),t._v(" "),s("li",[t._v("在测试环境中，运行 sh bin/start_fe.sh 启动 FE")]),t._v(" "),s("li",[t._v("通过 FE 日志 fe.log 观察是否启动成功。")]),t._v(" "),s("li",[t._v("如果启动成功，运行 sh bin/stop_fe.sh 停止测试环境的 FE 进程。")]),t._v(" "),s("li",[s("strong",[t._v("以上 2-6 步的目的是防止测试环境的FE启动后，错误连接到线上环境中。")])])]),t._v(" "),s("h2",{attrs:{id:"升级准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#升级准备"}},[t._v("#")]),t._v(" 升级准备")]),t._v(" "),s("ol",[s("li",[t._v("在完成数据正确性验证后，将 BE 和 FE 新版本的二进制文件分发到各自目录下。")]),t._v(" "),s("li",[t._v("通常小版本升级，BE 只需升级 palo_be；而 FE 只需升级 palo-fe.jar。如果是大版本升级，则可能需要升级其他文件（包括但不限于 bin/ lib/ 等等）如果你不清楚是否需要替换其他文件，建议全部替换。")])]),t._v(" "),s("h2",{attrs:{id:"滚动升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#滚动升级"}},[t._v("#")]),t._v(" 滚动升级")]),t._v(" "),s("ol",[s("li",[t._v("确认新版本的文件部署完成后。逐台重启 FE 和 BE 实例即可。")]),t._v(" "),s("li",[t._v("建议逐台重启 BE 后，再逐台重启 FE。因为通常 Doris 保证 FE 到 BE 的向后兼容性，即老版本的 FE 可以访问新版本的 BE。但可能不支持老版本的 BE 访问新版本的 FE。")]),t._v(" "),s("li",[t._v("建议确认前一个实例启动成功后，再重启下一个实例。实例启动成功的标识，请参阅安装部署文档。")])])])}),[],!1,null,null,null);a.default=_.exports}}]);