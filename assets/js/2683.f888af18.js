(window.webpackJsonp=window.webpackJsonp||[]).push([[2683],{3313:function(a,e,t){"use strict";t.r(e);var n=t(15),s=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"create-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-file"}},[a._v("#")]),a._v(" CREATE FILE")]),a._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('该语句用于创建并上传一个文件到 Doris 集群。\n该功能通常用于管理一些其他命令中需要使用到的文件，如证书、公钥私钥等等。\n\n该命令只用 admin 权限用户可以执行。\n某个文件都归属与某一个的 database。对 database 拥有访问权限的用户都可以使用该文件。\n\n单个文件大小限制为 1MB。\n一个 Doris 集群最多上传 100 个文件。\n\n语法：\n    \n    CREATE FILE "file_name" [IN database]\n    [properties]\n\n说明：\n    file_name:  自定义文件名。\n    database: 文件归属于某一个 db，如果没有指定，则使用当前 session 的 db。\n    properties 支持以下参数:\n\n        url: 必须。指定一个文件的下载路径。当前仅支持无认证的 http 下载路径。命令执行成功后，文件将被保存在 doris 中，该 url 将不再需要。\n        catalog: 必须。对文件的分类名，可以自定义。但在某些命令中，会查找指定 catalog 中的文件。比如例行导入中的，数据源为 kafka 时，会查找 catalog 名为 kafka 下的文件。\n        md5: 可选。文件的 md5。如果指定，会在下载文件后进行校验。\n')])])]),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('1. 创建文件 ca.pem ，分类为 kafka\n\n    CREATE FILE "ca.pem"\n    PROPERTIES\n    (\n        "url" = "https://test.bj.bcebos.com/kafka-key/ca.pem",\n        "catalog" = "kafka"\n    );\n\n2. 创建文件 client.key，分类为 my_catalog\n\n    CREATE FILE "client.key"\n    IN my_database\n    PROPERTIES\n    (\n        "url" = "https://test.bj.bcebos.com/kafka-key/client.key",\n        "catalog" = "my_catalog",\n        "md5" = "b5bb901bf10f99205b39a46ac3557dd9"\n    );\n')])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("CREATE,FILE\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);