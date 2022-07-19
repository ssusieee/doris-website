(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{850:function(s,t,a){"use strict";a.r(t);var n=a(15),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"seatunnel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seatunnel"}},[s._v("#")]),s._v(" Seatunnel")]),s._v(" "),a("p",[s._v("The newest "),a("a",{attrs:{href:"https://seatunnel.apache.org",target:"_blank",rel:"noopener noreferrer"}},[s._v("Apache SeaTunnel (waterdop) "),a("OutboundLink")],1),s._v(" has supported Doris connector,\nseatunnel can load data by Spark engine or Flink engine.")]),s._v(" "),a("p",[s._v("In fact,seatunnel load data by stream load function.Everyone is welcome to use")]),s._v(" "),a("h1",{attrs:{id:"install-seatunnel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-seatunnel"}},[s._v("#")]),s._v(" Install Seatunnel")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://interestinglab.github.io/seatunnel-docs/#/zh-cn/v2/flink/installation",target:"_blank",rel:"noopener noreferrer"}},[s._v("Seatunnel install"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"spark-sink-doris"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spark-sink-doris"}},[s._v("#")]),s._v(" Spark Sink Doris")]),s._v(" "),a("h3",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[s._v("#")]),s._v(" Options")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("type")]),s._v(" "),a("th",[s._v("required")]),s._v(" "),a("th",[s._v("default value")]),s._v(" "),a("th",[s._v("engine")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("fenodes")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("yes")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("Spark")])]),s._v(" "),a("tr",[a("td",[s._v("database")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("yes")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("Spark")])]),s._v(" "),a("tr",[a("td",[s._v("table")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("yes")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("Spark")])]),s._v(" "),a("tr",[a("td",[s._v("user")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("yes")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("Spark")])]),s._v(" "),a("tr",[a("td",[s._v("password")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("yes")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("Spark")])]),s._v(" "),a("tr",[a("td",[s._v("batch_size")]),s._v(" "),a("td",[s._v("int")]),s._v(" "),a("td",[s._v("yes")]),s._v(" "),a("td",[s._v("100")]),s._v(" "),a("td",[s._v("Spark")])]),s._v(" "),a("tr",[a("td",[s._v("doris.*")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("no")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("Spark")])])])]),s._v(" "),a("p",[a("code",[s._v("fenodes [string]")])]),s._v(" "),a("p",[s._v("Doris FE address:8030")]),s._v(" "),a("p",[a("code",[s._v("database [string]")])]),s._v(" "),a("p",[s._v("Doris target database name")]),s._v(" "),a("p",[a("code",[s._v("table [string]")])]),s._v(" "),a("p",[s._v("Doris target table name")]),s._v(" "),a("p",[a("code",[s._v("user [string]")])]),s._v(" "),a("p",[s._v("Doris user name")]),s._v(" "),a("p",[a("code",[s._v("password [string]")])]),s._v(" "),a("p",[s._v("Doris user's password")]),s._v(" "),a("p",[a("code",[s._v("batch_size [string]")])]),s._v(" "),a("p",[s._v("Doris number of submissions per batch")]),s._v(" "),a("p",[a("code",[s._v("doris. [string]")]),s._v("\nDoris stream_load properties,you can use 'doris.' prefix + stream_load properties")]),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/docs/data-operate/import/import-way/stream-load-manual.html"}},[s._v("More Doris stream_load Configurations")])],1),s._v(" "),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),a("p",[s._v("Hive to Doris")]),s._v(" "),a("p",[s._v("Config properties")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('env{\n  spark.app.name = "hive2doris-template"\n}\n\nspark {\n  spark.sql.catalogImplementation = "hive"\n}\n\nsource {\n  hive {\n    preSql = "select * from tmp.test"\n    result_table_name = "test"\n  }\n}\n\ntransform {\n}\n\n\nsink {\n\nConsole {\n\n  }\n\nDoris {\n   fenodes="xxxx:8030"\n   database="gl_mint_dim"\n   table="dim_date"\n   user="root"\n   password="root"\n   batch_size=1000\n   doris.column_separator="\\t"\n   doris.columns="date_key,date_value,day_in_year,day_in_month"\n   }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br")])]),a("p",[s._v("Start command")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sh bin/start-waterdrop-spark.sh --master local[4] --deploy-mode client --config ./config/spark.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);