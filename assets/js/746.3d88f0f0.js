(window.webpackJsonp=window.webpackJsonp||[]).push([[746],{1374:function(e,a,s){"use strict";s.r(a);var t=s(15),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"监控和报警"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监控和报警"}},[e._v("#")]),e._v(" 监控和报警")]),e._v(" "),s("p",[e._v("本文档主要介绍 Doris 的监控项及如何采集、展示监控项。以及如何配置报警（TODO）")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://grafana.com/dashboards/9734/revisions",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dashboard 模板点击下载"),s("OutboundLink")],1)]),e._v(" "),s("blockquote",[s("p",[e._v("注：0.9.0（不含）之前的版本请使用 revision 1。0.9.x 版本请使用 revision 2。0.10.x 版本请使用 revision 3。")])]),e._v(" "),s("p",[e._v("Dashboard 模板会不定期更新。更新模板的方式见最后一小节。")]),e._v(" "),s("p",[e._v("欢迎提供更优的 dashboard。")]),e._v(" "),s("h2",{attrs:{id:"组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[e._v("#")]),e._v(" 组件")]),e._v(" "),s("p",[e._v("Doris 使用 "),s("a",{attrs:{href:"https://prometheus.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prometheus"),s("OutboundLink")],1),e._v(" 和 "),s("a",{attrs:{href:"https://grafana.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grafana"),s("OutboundLink")],1),e._v(" 进项监控项的采集和展示。")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/images/dashboard_overview.png"),alt:""}}),e._v(" "),s("ol",[s("li",[s("p",[e._v("Prometheus")]),e._v(" "),s("p",[e._v("Prometheus 是一款开源的系统监控和报警套件。它可以通过 Pull 或 Push 采集被监控系统的监控项，存入自身的时序数据库中。并且通过丰富的多维数据查询语言，满足用户的不同数据展示需求。")])]),e._v(" "),s("li",[s("p",[e._v("Grafana")]),e._v(" "),s("p",[e._v("Grafana 是一款开源的数据分析和展示平台。支持包括 Prometheus 在内的多个主流时序数据库源。通过对应的数据库查询语句，从数据源中获取展现数据。通过灵活可配置的 Dashboard，快速的将这些数据以图表的形式展示给用户。")])])]),e._v(" "),s("blockquote",[s("p",[e._v("注: 本文档仅提供一种使用 Prometheus 和 Grafana 进行 Doris 监控数据采集和展示的方式。原则上不开发、维护这些组件。更多关于这些组件的详细介绍，请移步对应官方文档进行查阅。")])]),e._v(" "),s("h2",{attrs:{id:"监控数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监控数据"}},[e._v("#")]),e._v(" 监控数据")]),e._v(" "),s("p",[e._v("Doris 的监控数据通过 Frontend 和 Backend 的 http 接口向外暴露。监控数据以 Key-Value 的文本形式对外展现。每个 Key 还可能有不同的 Label 加以区分。当用户搭建好 Doris 后，可以在浏览器，通过以下接口访问到节点的监控数据：")]),e._v(" "),s("ul",[s("li",[e._v("Frontend: "),s("code",[e._v("fe_host:fe_http_port/metrics")])]),e._v(" "),s("li",[e._v("Backend: "),s("code",[e._v("be_host:be_web_server_port/metrics")])]),e._v(" "),s("li",[e._v("Broker: 暂不提供")])]),e._v(" "),s("p",[e._v("用户将看到如下监控项结果（示例为 FE 部分监控项）：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('```\n# HELP  jvm_heap_size_bytes jvm heap stat\n# TYPE  jvm_heap_size_bytes gauge\njvm_heap_size_bytes{type="max"} 41661235200\njvm_heap_size_bytes{type="committed"} 19785285632\njvm_heap_size_bytes{type="used"} 10113221064\n# HELP  jvm_non_heap_size_bytes jvm non heap stat\n# TYPE  jvm_non_heap_size_bytes gauge\njvm_non_heap_size_bytes{type="committed"} 105295872\njvm_non_heap_size_bytes{type="used"} 103184784\n# HELP  jvm_young_size_bytes jvm young mem pool stat\n# TYPE  jvm_young_size_bytes gauge\njvm_young_size_bytes{type="used"} 6505306808\njvm_young_size_bytes{type="peak_used"} 10308026368\njvm_young_size_bytes{type="max"} 10308026368\n# HELP  jvm_old_size_bytes jvm old mem pool stat\n# TYPE  jvm_old_size_bytes gauge\njvm_old_size_bytes{type="used"} 3522435544\njvm_old_size_bytes{type="peak_used"} 6561017832\njvm_old_size_bytes{type="max"} 30064771072\n# HELP  jvm_direct_buffer_pool_size_bytes jvm direct buffer pool stat\n# TYPE  jvm_direct_buffer_pool_size_bytes gauge\njvm_direct_buffer_pool_size_bytes{type="count"} 91\njvm_direct_buffer_pool_size_bytes{type="used"} 226135222\njvm_direct_buffer_pool_size_bytes{type="capacity"} 226135221\n# HELP  jvm_young_gc jvm young gc stat\n# TYPE  jvm_young_gc gauge\njvm_young_gc{type="count"} 2186\njvm_young_gc{type="time"} 93650\n# HELP  jvm_old_gc jvm old gc stat\n# TYPE  jvm_old_gc gauge\njvm_old_gc{type="count"} 21\njvm_old_gc{type="time"} 58268\n# HELP  jvm_thread jvm thread stat\n# TYPE  jvm_thread gauge\njvm_thread{type="count"} 767\njvm_thread{type="peak_count"} 831\n...\n```\n')])])]),s("p",[e._v("这是一个以 "),s("a",{attrs:{href:"https://prometheus.io/docs/practices/naming/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prometheus 格式"),s("OutboundLink")],1),e._v(" 呈现的监控数据。我们以其中一个监控项为例进行说明：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('# HELP  jvm_heap_size_bytes jvm heap stat\n# TYPE  jvm_heap_size_bytes gauge\njvm_heap_size_bytes{type="max"} 41661235200\njvm_heap_size_bytes{type="committed"} 19785285632\njvm_heap_size_bytes{type="used"} 10113221064\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("ol",[s("li",[e._v('"#" 开头的行为注释行。其中 HELP 为该监控项的描述说明；TYPE 表示该监控项的数据类型，示例中为 Gauge，即标量数据。还有 Counter、Histogram 等数据类型。具体可见 '),s("a",{attrs:{href:"https://prometheus.io/docs/practices/instrumentation/#counter-vs.-gauge,-summary-vs.-histogram",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prometheus 官方文档"),s("OutboundLink")],1),e._v(" 。")]),e._v(" "),s("li",[s("code",[e._v("jvm_heap_size_bytes")]),e._v(" 即监控项的名称（Key）；"),s("code",[e._v('type="max"')]),e._v(" 即为一个名为 "),s("code",[e._v("type")]),e._v(" 的 Label，值为 "),s("code",[e._v("max")]),e._v("。一个监控项可以有多个 Label。")]),e._v(" "),s("li",[e._v("最后的数字，如 "),s("code",[e._v("41661235200")]),e._v("，即为监控数值。")])]),e._v(" "),s("h2",{attrs:{id:"监控架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监控架构"}},[e._v("#")]),e._v(" 监控架构")]),e._v(" "),s("p",[e._v("整个监控架构如下图所示：")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/images/monitor_arch.png"),alt:""}}),e._v(" "),s("ol",[s("li",[e._v("黄色部分为 Prometheus 相关组件。Prometheus Server 为 Prometheus 的主进程，目前 Prometheus 通过 Pull 的方式访问 Doris 节点的监控接口，然后将时序数据存入时序数据库 TSDB 中（TSDB 包含在 Prometheus 进程中，无需单独部署）。Prometheus 也支持通过搭建 "),s("a",{attrs:{href:"https://github.com/prometheus/pushgateway",target:"_blank",rel:"noopener noreferrer"}},[e._v("Push Gateway"),s("OutboundLink")],1),e._v(" 的方式，允许被监控系统将监控数据通过 Push 的方式推到 Push Gateway, 再由 Prometheus Server 通过 Pull 的方式从 Push Gateway 中获取数据。")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/prometheus/alertmanager",target:"_blank",rel:"noopener noreferrer"}},[e._v("Alert Manager"),s("OutboundLink")],1),e._v(" 为 Prometheus 报警组件，需单独部署（暂不提供方案，可参照官方文档自行搭建）。通过 Alert Manager，用户可以配置报警策略，接收邮件、短信等报警。")]),e._v(" "),s("li",[e._v("绿色部分为 Grafana 相关组件。Grafana Server 为 Grafana 的主进程。启动后，用户可以通过 Web 页面对 Grafana 进行配置，包括数据源的设置、用户设置、Dashboard 绘制等。这里也是最终用户查看监控数据的地方。")])]),e._v(" "),s("h2",{attrs:{id:"开始搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始搭建"}},[e._v("#")]),e._v(" 开始搭建")]),e._v(" "),s("p",[e._v("请在完成 Doris 的部署后，开始搭建监控系统。")]),e._v(" "),s("h3",{attrs:{id:"prometheus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prometheus"}},[e._v("#")]),e._v(" Prometheus")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("在 "),s("a",{attrs:{href:"https://prometheus.io/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prometheus 官网"),s("OutboundLink")],1),e._v(" 下载最新版本的 Prometheus。这里我们以 2.3.2-linux-amd64 版本为例。")])]),e._v(" "),s("li",[s("p",[e._v("在准备运行监控服务的机器上，解压下载后的 tar 文件。")])]),e._v(" "),s("li",[s("p",[e._v("打开配置文件 prometheus.yml。这里我们提供一个示例配置并加以说明（配置文件为 yml 格式，一定注意统一的缩进和空格）：")]),e._v(" "),s("p",[e._v("这里我们使用最简单的静态文件的方式进行监控配置。Prometheus 支持多种 "),s("a",{attrs:{href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/",target:"_blank",rel:"noopener noreferrer"}},[e._v("服务发现"),s("OutboundLink")],1),e._v(" 方式，可以动态的感知节点的加入和删除。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# my global config\nglobal:\n  scrape_interval:     15s # 全局的采集间隔，默认是 1m，这里设置为 15s\n  evaluation_interval: 15s # 全局的规则触发间隔，默认是 1m，这里设置 15s\n\n# Alertmanager configuration\nalerting:\n  alertmanagers:\n  - static_configs:\n    - targets:\n      # - alertmanager:9093\n\n# A scrape configuration containing exactly one endpoint to scrape:\n# Here it's Prometheus itself.\nscrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: 'PALO_CLUSTER' # 每一个 Doris 集群，我们称为一个 job。这里可以给 job 取一个名字，作为 Doris 集群在监控系统中的名字。\n    metrics_path: '/metrics' # 这里指定获取监控项的 restful api。配合下面的 targets 中的 host:port，Prometheus 最终会通过 host:port/metrics_path 来采集监控项。\n    static_configs: # 这里开始分别配置 FE 和 BE 的目标地址。所有的 FE 和 BE 都分别写入各自的 group 中。\n      - targets: ['fe_host1:8030', 'fe_host2:8030', 'fe_host3:8030']\n        labels:\n          group: fe # 这里配置了 fe 的 group，该 group 中包含了 3 个 Frontends\n\n      - targets: ['be_host1:8040', 'be_host2:8040', 'be_host3:8040']\n        labels:\n          group: be # 这里配置了 be 的 group，该 group 中包含了 3 个 Backends\n\n  - job_name: 'PALO_CLUSTER_2' # 我们可以在一个 Prometheus 中监控多个 Doris 集群，这里开始另一个 Doris 集群的配置。配置同上，以下略。\n    metrics_path: '/metrics'\n    static_configs: \n      - targets: ['fe_host1:8030', 'fe_host2:8030', 'fe_host3:8030']\n        labels:\n          group: fe \n\n      - targets: ['be_host1:8040', 'be_host2:8040', 'be_host3:8040']\n        labels:\n          group: be \n              \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br"),s("span",{staticClass:"line-number"},[e._v("38")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("启动 Prometheus")]),e._v(" "),s("p",[e._v("通过以下命令启动 Prometheus：")]),e._v(" "),s("p",[s("code",[e._v('nohup ./prometheus --web.listen-address="0.0.0.0:8181" &')])]),e._v(" "),s("p",[e._v("该命令将后台运行 Prometheus，并指定其 web 端口为 8181。启动后，即开始采集数据，并将数据存放在 data 目录中。")])]),e._v(" "),s("li",[s("p",[e._v("停止 Prometheus")]),e._v(" "),s("p",[e._v("目前没有发现正式的进程停止方式，直接 kill -9 即可。当然也可以将 Prometheus 设为一种 service，以 service 的方式启停。")])]),e._v(" "),s("li",[s("p",[e._v("访问 Prometheus")]),e._v(" "),s("p",[e._v("Prometheus 可以通过 web 页面进行简单的访问。通过浏览器打开 8181 端口，即可访问 Prometheus 的页面。点击导航栏中，"),s("code",[e._v("Status")]),e._v(" -> "),s("code",[e._v("Targets")]),e._v("，可以看到所有分组 Job 的监控主机节点。正常情况下，所有节点都应为 "),s("code",[e._v("UP")]),e._v("，表示数据采集正常。点击某一个 "),s("code",[e._v("Endpoint")]),e._v("，即可看到当前的监控数值。如果节点状态不为 UP，可以先访问 Doris 的 metrics 接口（见前文）检查是否可以访问，或查询 Prometheus 相关文档尝试解决。")])]),e._v(" "),s("li",[s("p",[e._v("至此，一个简单的 Prometheus 已经搭建、配置完毕。更多高级使用方式，请参阅 "),s("a",{attrs:{href:"https://prometheus.io/docs/introduction/overview/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),s("OutboundLink")],1)])])]),e._v(" "),s("h3",{attrs:{id:"grafana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grafana"}},[e._v("#")]),e._v(" Grafana")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("在 "),s("a",{attrs:{href:"https://grafana.com/grafana/download",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grafana 官网"),s("OutboundLink")],1),e._v(" 下载最新版本的 Grafana。这里我们以 5.2.1.linux-amd64 版本为例。")])]),e._v(" "),s("li",[s("p",[e._v("在准备运行监控服务的机器上，解压下载后的 tar 文件。")])]),e._v(" "),s("li",[s("p",[e._v("打开配置文件 conf/defaults.ini。这里我们仅列举需要改动的配置项，其余配置可使用默认。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# Path to where grafana can store temp files, sessions, and the sqlite3 db (if that is used)\ndata = data\n\n# Directory where grafana can store logs\nlogs = data/log\n\n# Protocol (http, https, socket)\nprotocal = http\n\n# The ip address to bind to, empty will bind to all interfaces\nhttp_addr =\n\n# The http port to use\nhttp_port = 8182\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("启动 Grafana")]),e._v(" "),s("p",[e._v("通过以下命令启动 Grafana")]),e._v(" "),s("p",[s("code",[e._v("nohup ./bin/grafana-server &")])]),e._v(" "),s("p",[e._v("该命令将后台运行 Grafana，访问端口为上面配置的 8182")])]),e._v(" "),s("li",[s("p",[e._v("停止 Grafana")]),e._v(" "),s("p",[e._v("目前没有发现正式的进程停止方式，直接 kill -9 即可。当然也可以将 Grafana 设为一种 service，以 service 的方式启停。")])]),e._v(" "),s("li",[s("p",[e._v("访问 Grafana")]),e._v(" "),s("p",[e._v("通过浏览器，打开 8182 端口，可以开始访问 Grafana 页面。默认用户名密码为 admin。")])]),e._v(" "),s("li",[s("p",[e._v("配置 Grafana")]),e._v(" "),s("p",[e._v("初次登陆，需要根据提示设置数据源（data source）。我们这里的数据源，即上一步配置的 Prometheus。")]),e._v(" "),s("p",[e._v("数据源配置的 Setting 页面说明如下：")]),e._v(" "),s("ol",[s("li",[e._v("Name: 数据源的名称，自定义，比如 doris_monitor_data_source")]),e._v(" "),s("li",[e._v("Type: 选择 Prometheus")]),e._v(" "),s("li",[e._v("URL: 填写 Prometheus 的 web 地址，如 http://host:8181")]),e._v(" "),s("li",[e._v("Access: 这里我们选择 Server 方式，即通过 Grafana 进程所在服务器，访问 Prometheus。")]),e._v(" "),s("li",[e._v("其余选项默认即可。")]),e._v(" "),s("li",[e._v("点击最下方 "),s("code",[e._v("Save & Test")]),e._v("，如果显示 "),s("code",[e._v("Data source is working")]),e._v("，即表示数据源可用。")]),e._v(" "),s("li",[e._v("确认数据源可用后，点击左边导航栏的 + 号，开始添加 Dashboard。这里我们已经准备好了 Doris 的 Dashboard 模板（本文档开头）。下载完成后，点击上方的 "),s("code",[e._v("New dashboard")]),e._v("->"),s("code",[e._v("Import dashboard")]),e._v("->"),s("code",[e._v("Upload .json File")]),e._v("，将下载的 json 文件导入。")]),e._v(" "),s("li",[e._v("导入后，可以命名 Dashboard，默认是 "),s("code",[e._v("Doris Overview")]),e._v("。同时，需要选择数据源，这里选择之前创建的 "),s("code",[e._v("doris_monitor_data_source")])]),e._v(" "),s("li",[e._v("点击 "),s("code",[e._v("Import")]),e._v("，即完成导入。之后，可以看到 Doris 的 Dashboard 展示。")])])]),e._v(" "),s("li",[s("p",[e._v("至此，一个简单的 Grafana 已经搭建、配置完毕。更多高级使用方式，请参阅 "),s("a",{attrs:{href:"http://docs.grafana.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),s("OutboundLink")],1)])])]),e._v(" "),s("h2",{attrs:{id:"dashboard-说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dashboard-说明"}},[e._v("#")]),e._v(" Dashboard 说明")]),e._v(" "),s("p",[e._v("这里我们简要介绍 Doris Dashboard。Dashboard 的内容可能会随版本升级，不断变化，本文档不保证是最新的 Dashboard 说明。")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("顶栏")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/images/dashboard_navibar.png"),alt:""}}),e._v(" "),s("ul",[s("li",[e._v("左上角为 Dashboard 名称。")]),e._v(" "),s("li",[e._v("右上角显示当前监控时间范围，可以下拉选择不同的时间范围，还可以指定定时刷新页面间隔。")]),e._v(" "),s("li",[e._v("cluster_name: 即 Prometheus 配置文件中的各个 job_name，代表一个 Doris 集群。选择不同的 cluster，下方的图表将展示对应集群的监控信息。")]),e._v(" "),s("li",[e._v("fe_master: 对应集群的 Master Frontend 节点。")]),e._v(" "),s("li",[e._v("fe_instance: 对应集群的所有 Frontend 节点。选择不同的 Frontend，下方的图表将展示对应 Frontend 的监控信息。")]),e._v(" "),s("li",[e._v("be_instance: 对应集群的所有 Backend 节点。选择不同的 Backend，下方的图表将展示对应 Backend 的监控信息。")]),e._v(" "),s("li",[e._v("interval: 有些图表展示了速率相关的监控项，这里可选择以多大间隔进行采样计算速率（注：15s 间隔可能导致一些图表无法显示）。")])])]),e._v(" "),s("li",[s("p",[e._v("Row")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/images/dashboard_row.png"),alt:""}}),e._v(" "),s("p",[e._v("Grafana 中，Row 的概念，即一组图表的集合。如上图中的 Overview、Cluster Overview 即两个不同的 Row。可以通过点击 Row，对 Row 进行折叠。当前 Dashboard 有如下 Rows（持续更新中）：")]),e._v(" "),s("ol",[s("li",[e._v("Overview: 所有 Doris 集群的汇总展示。")]),e._v(" "),s("li",[e._v("Cluster Overview: 选定集群的汇总展示。")]),e._v(" "),s("li",[e._v("Query Statistic: 选定集群的查询相关监控。")]),e._v(" "),s("li",[e._v("FE JVM: 选定 Frontend 的 JVM 监控。")]),e._v(" "),s("li",[e._v("BE: 选定集群的 Backends 的汇总展示。")]),e._v(" "),s("li",[e._v("BE Task: 选定集群的 Backends 任务信息的展示。")])])]),e._v(" "),s("li",[s("p",[e._v("图表")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/images/dashboard_panel.png"),alt:""}}),e._v(" "),s("p",[e._v("一个典型的图标分为以下几部分：")]),e._v(" "),s("ol",[s("li",[e._v("鼠标悬停左上角的 i 图标，可以查看该图表的说明。")]),e._v(" "),s("li",[e._v("点击下方的图例，可以单独查看某一监控项。再次点击，则显示所有。")]),e._v(" "),s("li",[e._v("在图表中拖拽可以选定时间范围。")]),e._v(" "),s("li",[e._v("标题的 [] 中显示选定的集群名称。")]),e._v(" "),s("li",[e._v("一些数值对应左边的Y轴，一些对应右边的，可以通过图例末尾的 "),s("code",[e._v("-right")]),e._v(" 区分。")]),e._v(" "),s("li",[e._v("点击图表名称->"),s("code",[e._v("Edit")]),e._v("，可以对图表进行编辑。")])])])]),e._v(" "),s("h2",{attrs:{id:"dashboard-更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dashboard-更新"}},[e._v("#")]),e._v(" Dashboard 更新")]),e._v(" "),s("ol",[s("li",[e._v("点击 Grafana 左边栏的 "),s("code",[e._v("+")]),e._v("，点击 "),s("code",[e._v("Dashboard")]),e._v("。")]),e._v(" "),s("li",[e._v("点击左上角的 "),s("code",[e._v("New dashboard")]),e._v("，在点击右侧出现的 "),s("code",[e._v("Import dashboard")]),e._v("。")]),e._v(" "),s("li",[e._v("点击 "),s("code",[e._v("Upload .json File")]),e._v("，选择最新的模板文件。")]),e._v(" "),s("li",[e._v("选择数据源")]),e._v(" "),s("li",[e._v("点击 "),s("code",[e._v("Import(Overwrite)")]),e._v("，完成模板更新。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);