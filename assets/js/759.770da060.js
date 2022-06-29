(window.webpackJsonp=window.webpackJsonp||[]).push([[759],{1188:function(s,t,a){"use strict";a.r(t);var r=a(2),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"资源管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资源管理"}},[s._v("#")]),s._v(" 资源管理")]),s._v(" "),a("p",[s._v("为了节省Doris集群内的计算、存储资源，Doris需要引入一些其他外部资源来完成相关的工作，如Spark/GPU用于查询，HDFS/S3用于外部存储，Spark/MapReduce用于ETL, 通过ODBC连接外部存储等，因此我们引入资源管理机制来管理Doris使用的这些外部资源。")]),s._v(" "),a("h2",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[s._v("#")]),s._v(" 基本概念")]),s._v(" "),a("p",[s._v("一个资源包含名字、类型等基本信息，名字为全局唯一，不同类型的资源包含不同的属性，具体参考各资源的介绍。")]),s._v(" "),a("p",[s._v("资源的创建和删除只能由拥有 "),a("code",[s._v("admin")]),s._v(" 权限的用户进行操作。一个资源隶属于整个Doris集群。拥有 "),a("code",[s._v("admin")]),s._v(" 权限的用户可以将使用权限"),a("code",[s._v("usage_priv")]),s._v(" 赋给普通用户。可参考"),a("code",[s._v("HELP GRANT")]),s._v("或者权限文档。")]),s._v(" "),a("h2",{attrs:{id:"具体操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体操作"}},[s._v("#")]),s._v(" 具体操作")]),s._v(" "),a("p",[s._v("资源管理主要有三个命令："),a("code",[s._v("CREATE RESOURCE")]),s._v("，"),a("code",[s._v("DROP RESOURCE")]),s._v("和"),a("code",[s._v("SHOW RESOURCES")]),s._v("，分别为创建、删除和查看资源。这三个命令的具体语法可以通过MySQL客户端连接到 Doris 后，执行 "),a("code",[s._v("HELP cmd")]),s._v(" 的方式查看帮助。")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("CREATE RESOURCE")]),s._v(" "),a("p",[s._v("该语句用于创建资源。具体操作可参考 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-RESOURCE.html"}},[s._v("CREATE RESOURCE")]),s._v("。")],1)]),s._v(" "),a("li",[a("p",[s._v("DROP RESOURCE")]),s._v(" "),a("p",[s._v("该命令可以删除一个已存在的资源。具体操作见 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-RESOURCE.html"}},[s._v("DROP RESOURCE")]),s._v(" 。")],1)]),s._v(" "),a("li",[a("p",[s._v("SHOW RESOURCES")]),s._v(" "),a("p",[s._v("该命令可以查看用户有使用权限的资源。具体操作见  "),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-RESOURCES.html"}},[s._v("SHOW RESOURCES")]),s._v("。")],1)])]),s._v(" "),a("h2",{attrs:{id:"支持的资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持的资源"}},[s._v("#")]),s._v(" 支持的资源")]),s._v(" "),a("p",[s._v("目前Doris能够支持")]),s._v(" "),a("ul",[a("li",[s._v("Spark资源 : 完成ETL工作。")]),s._v(" "),a("li",[s._v("ODBC资源：查询和导入外部表的数据")])]),s._v(" "),a("p",[s._v("下面将分别展示两种资源的使用方式。")]),s._v(" "),a("h3",{attrs:{id:"spark"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spark"}},[s._v("#")]),s._v(" Spark")]),s._v(" "),a("h4",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),a("h5",{attrs:{id:"spark-相关参数如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spark-相关参数如下"}},[s._v("#")]),s._v(" Spark 相关参数如下：")]),s._v(" "),a("p",[a("code",[s._v("spark.master")]),s._v(": 必填，目前支持yarn，spark://host:port。")]),s._v(" "),a("p",[a("code",[s._v("spark.submit.deployMode")]),s._v(": Spark 程序的部署模式，必填，支持 cluster，client 两种。")]),s._v(" "),a("p",[a("code",[s._v("spark.hadoop.yarn.resourcemanager.address")]),s._v(": master为yarn时必填。")]),s._v(" "),a("p",[a("code",[s._v("spark.hadoop.fs.defaultFS")]),s._v(": master为yarn时必填。")]),s._v(" "),a("p",[s._v("其他参数为可选，参考http://spark.apache.org/docs/latest/configuration.html。")]),s._v(" "),a("h5",{attrs:{id:"如果spark用于etl-还需要指定以下参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果spark用于etl-还需要指定以下参数"}},[s._v("#")]),s._v(" 如果Spark用于ETL，还需要指定以下参数：")]),s._v(" "),a("p",[a("code",[s._v("working_dir")]),s._v(": ETL 使用的目录。spark作为ETL资源使用时必填。例如：hdfs://host:port/tmp/doris。")]),s._v(" "),a("p",[a("code",[s._v("broker")]),s._v(": broker 名字。spark作为ETL资源使用时必填。需要使用"),a("code",[s._v("ALTER SYSTEM ADD BROKER")]),s._v(" 命令提前完成配置。")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("broker.property_key")]),s._v(": broker读取ETL生成的中间文件时需要指定的认证信息等。")])]),s._v(" "),a("h4",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("p",[s._v("创建 yarn cluster 模式，名为 spark0 的 Spark 资源。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" EXTERNAL RESOURCE "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spark0"')]),s._v("\nPROPERTIES\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spark"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spark.master"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yarn"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spark.submit.deployMode"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cluster"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spark.jars"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx.jar,yyy.jar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spark.files"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/tmp/aaa,/tmp/bbb"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spark.executor.memory"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1g"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spark.yarn.queue"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"queue0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spark.hadoop.yarn.resourcemanager.address"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1:9999"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spark.hadoop.fs.defaultFS"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hdfs://127.0.0.1:10000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"working_dir"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hdfs://127.0.0.1:10000/tmp/doris"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"broker"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"broker0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"broker.username"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"broker.password"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password0"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h3",{attrs:{id:"odbc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#odbc"}},[s._v("#")]),s._v(" ODBC")]),s._v(" "),a("h4",{attrs:{id:"参数-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数-2"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),a("h5",{attrs:{id:"odbc-相关参数如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#odbc-相关参数如下"}},[s._v("#")]),s._v(" ODBC 相关参数如下：")]),s._v(" "),a("p",[a("code",[s._v("type")]),s._v(": 必填，且必须为"),a("code",[s._v("odbc_catalog")]),s._v("。作为resource的类型标识。")]),s._v(" "),a("p",[a("code",[s._v("user")]),s._v(": 外部表的账号，必填。")]),s._v(" "),a("p",[a("code",[s._v("password")]),s._v(": 外部表的密码，必填。")]),s._v(" "),a("p",[a("code",[s._v("host")]),s._v(": 外部表的连接ip地址，必填。")]),s._v(" "),a("p",[a("code",[s._v("port")]),s._v(": 外部表的连接端口，必填。")]),s._v(" "),a("p",[a("code",[s._v("odbc_type")]),s._v(": 标示外部表的类型，当前doris支持"),a("code",[s._v("mysql")]),s._v("与"),a("code",[s._v("oracle")]),s._v("，未来可能支持更多的数据库。引用该resource的ODBC外表必填，旧的mysql外表选填。")]),s._v(" "),a("p",[a("code",[s._v("driver")]),s._v(": 标示外部表使用的driver动态库，引用该resource的ODBC外表必填，旧的mysql外表选填。")]),s._v(" "),a("p",[s._v("具体如何使用可以，可以参考"),a("RouterLink",{attrs:{to:"/zh-CN/docs/ecosystem/external-table/odbc-of-doris.html"}},[s._v("ODBC of Doris")])],1),s._v(" "),a("h4",{attrs:{id:"示例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("p",[s._v("创建oracle的odbc resource，名为 odbc_oracle 的 odbc_catalog的 资源。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" EXTERNAL RESOURCE "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("oracle_odbc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("\nPROPERTIES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"odbc_catalog"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"port"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8086"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"database"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"odbc_type"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"oracle"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"driver"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Oracle 19 ODBC driver"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);