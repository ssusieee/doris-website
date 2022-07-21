(window.webpackJsonp=window.webpackJsonp||[]).push([[4350],{4977:function(s,a,t){"use strict";t.r(a);var e=t(15),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"set-property"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-property"}},[s._v("#")]),s._v(" SET PROPERTY")]),s._v(" "),t("h3",{attrs:{id:"name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[s._v("#")]),s._v(" Name")]),s._v(" "),t("p",[s._v("SET PROPERTY")]),s._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),t("p",[s._v("设置用户的属性，包括分配给用户的资源、导入cluster等")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" PROPERTY "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'key'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'value'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'key'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'value'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这里设置的用户属性，是针对 user 的，而不是 user_identity。即假设通过 CREATE USER 语句创建了两个用户 'jack'@'%' 和 'jack'@'192.%'，则使用 SET PROPERTY 语句，只能针对 jack 这个用户，而不是 'jack'@'%' 或 'jack'@'192.%'")]),s._v(" "),t("p",[s._v("key:")]),s._v(" "),t("p",[s._v("超级用户权限:")]),s._v(" "),t("p",[s._v("​        max_user_connections: 最大连接数。")]),s._v(" "),t("p",[s._v("​        max_query_instances: 用户同一时间点执行查询可以使用的instance个数。")]),s._v(" "),t("p",[s._v("​        sql_block_rules: 设置 sql block rules。设置后，该用户发送的查询如果匹配规则，则会被拒绝。")]),s._v(" "),t("p",[s._v("​        cpu_resource_limit: 限制查询的cpu资源。详见会话变量 "),t("code",[s._v("cpu_resource_limit")]),s._v(" 的介绍。-1 表示未设置。")]),s._v(" "),t("p",[s._v("​        exec_mem_limit: 限制查询的内存使用。详见会话变量 "),t("code",[s._v("exec_mem_limit")]),s._v(" 的介绍。-1 表示未设置。")]),s._v(" "),t("p",[s._v("​        load_mem_limit: 限制导入的内存使用。详见会话变量 "),t("code",[s._v("load_mem_limit")]),s._v(" 的介绍。-1 表示未设置。")]),s._v(" "),t("p",[s._v("​        resource.cpu_share: cpu资源分配。（已废弃）")]),s._v(" "),t("p",[s._v("​        load_cluster.{cluster_name}.priority: 为指定的cluster分配优先级，可以为 HIGH 或 NORMAL")]),s._v(" "),t("p",[s._v("​        resource_tags：指定用户的资源标签权限。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("注：`cpu_resource_limit`, `exec_mem_limit`, `load_mem_limit` 三个属性如果未设置，则默认使用会话变量中值。\n")])])]),t("p",[s._v("普通用户权限：")]),s._v(" "),t("p",[s._v("​        quota.normal: normal级别的资源分配。")]),s._v(" "),t("p",[s._v("​        quota.high: high级别的资源分配。")]),s._v(" "),t("p",[s._v("​        quota.low: low级别的资源分配。")]),s._v(" "),t("p",[s._v("​        load_cluster.{cluster_name}.hadoop_palo_path: palo使用的hadoop目录，需要存放etl程序及etl生成的中间数据供Doris导入。导入完成后会自动清理中间")]),s._v(" "),t("p",[s._v("数据，etl程序自动保留下次使用。")]),s._v(" "),t("p",[s._v("​        load_cluster.{cluster_name}.hadoop_configs: hadoop的配置，其中fs.default.name、mapred.job.tracker、hadoop.job.ugi必须填写。")]),s._v(" "),t("p",[s._v("​        load_cluster.{cluster_name}.hadoop_http_port: hadoop hdfs name node http端口。其中 hdfs 默认为8070，afs 默认 8010。")]),s._v(" "),t("p",[s._v("​        default_load_cluster: 默认的导入cluster。")]),s._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("修改用户 jack 最大连接数为1000")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" PROPERTY "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jack'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'max_user_connections'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1000'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("修改用户 jack 的cpu_share为1000")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" PROPERTY "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jack'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'resource.cpu_share'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1000'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("修改 jack 用户的normal组的权重")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" PROPERTY "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jack'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'quota.normal'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'400'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("为用户 jack 添加导入cluster")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" PROPERTY "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jack'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'load_cluster.{cluster_name}.hadoop_palo_path'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/user/doris/doris_path'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'load_cluster.{cluster_name}.hadoop_configs'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fs.default.name=hdfs://dpp.cluster.com:port;mapred.job.tracker=dpp.cluster.com:port;hadoop.job.ugi=user,password;mapred.job.queue.name=job_queue_name_in_hadoop;mapred.job.priority=HIGH;'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("删除用户 jack 下的导入cluster。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" PROPERTY "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jack'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'load_cluster.{cluster_name}'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("修改用户 jack 默认的导入cluster")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" PROPERTY "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jack'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'default_load_cluster'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{cluster_name}'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("修改用户 jack 的集群优先级为 HIGH")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" PROPERTY "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jack'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'load_cluster.{cluster_name}.priority'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HIGH'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("修改用户jack的查询可用instance个数为3000")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" PROPERTY "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jack'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'max_query_instances'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3000'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("修改用户jack的sql block rule")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" PROPERTY "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jack'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sql_block_rules'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rule1, rule2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("修改用户jack的 cpu 使用限制")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" PROPERTY "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jack'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cpu_resource_limit'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("修改用户的资源标签权限")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" PROPERTY "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jack'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'resource_tags.location'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'group_a, group_b'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("修改用户的查询内存使用限制，单位字节")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" PROPERTY "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jack'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exec_mem_limit'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2147483648'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("修改用户的导入内存使用限制，单位字节")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" PROPERTY "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jack'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'load_mem_limit'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2147483648'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"keywords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" Keywords")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("SET, PROPERTY\n")])])]),t("h3",{attrs:{id:"best-practice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[s._v("#")]),s._v(" Best Practice")])])}),[],!1,null,null,null);a.default=r.exports}}]);