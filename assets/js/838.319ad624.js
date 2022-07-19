(window.webpackJsonp=window.webpackJsonp||[]).push([[838],{1466:function(s,t,a){"use strict";a.r(t);var n=a(15),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"java-udf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-udf"}},[s._v("#")]),s._v(" Java UDF")]),s._v(" "),a("p",[s._v("Java UDF 为用户提供UDF编写的Java接口，以方便用户使用Java语言进行自定义函数的执行。相比于 Native 的 UDF 实现，Java UDF 有如下优势和限制：")]),s._v(" "),a("ol",[a("li",[s._v("优势")])]),s._v(" "),a("ul",[a("li",[s._v("兼容性：使用Java UDF可以兼容不同的Doris版本，所以在进行Doris版本升级时，Java UDF不需要进行额外的迁移操作。与此同时，Java UDF同样遵循了和Hive/Spark等引擎同样的编程规范，使得用户可以直接将Hive/Spark的UDF jar包迁移至Doris使用。")]),s._v(" "),a("li",[s._v("安全：Java UDF 执行失败或崩溃仅会导致JVM报错，而不会导致 Doris 进程崩溃。")]),s._v(" "),a("li",[s._v("灵活：Java UDF 中用户通过把第三方依赖打进用户jar包，而不需要额外处理引入的三方库。")])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("使用限制")])]),s._v(" "),a("ul",[a("li",[s._v("性能：相比于 Native UDF，Java UDF会带来额外的JNI开销，不过通过批式执行的方式，我们已经尽可能的将JNI开销降到最低。")]),s._v(" "),a("li",[s._v("向量化引擎：Java UDF当前只支持向量化引擎。")])]),s._v(" "),a("h3",{attrs:{id:"类型对应关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型对应关系"}},[s._v("#")]),s._v(" 类型对应关系")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Type")]),s._v(" "),a("th",[s._v("UDF Argument Type")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("Bool")]),s._v(" "),a("td",[s._v("Boolean")])]),s._v(" "),a("tr",[a("td",[s._v("TinyInt")]),s._v(" "),a("td",[s._v("Byte")])]),s._v(" "),a("tr",[a("td",[s._v("SmallInt")]),s._v(" "),a("td",[s._v("Short")])]),s._v(" "),a("tr",[a("td",[s._v("Int")]),s._v(" "),a("td",[s._v("Integer")])]),s._v(" "),a("tr",[a("td",[s._v("BigInt")]),s._v(" "),a("td",[s._v("Long")])]),s._v(" "),a("tr",[a("td",[s._v("LargeInt")]),s._v(" "),a("td",[s._v("BigInteger")])]),s._v(" "),a("tr",[a("td",[s._v("Float")]),s._v(" "),a("td",[s._v("Float")])]),s._v(" "),a("tr",[a("td",[s._v("Double")]),s._v(" "),a("td",[s._v("Double")])]),s._v(" "),a("tr",[a("td",[s._v("Date")]),s._v(" "),a("td",[s._v("LocalDate")])]),s._v(" "),a("tr",[a("td",[s._v("Datetime")]),s._v(" "),a("td",[s._v("LocalDateTime")])]),s._v(" "),a("tr",[a("td",[s._v("Char")]),s._v(" "),a("td",[s._v("String")])]),s._v(" "),a("tr",[a("td",[s._v("Varchar")]),s._v(" "),a("td",[s._v("String")])]),s._v(" "),a("tr",[a("td",[s._v("Decimal")]),s._v(" "),a("td",[s._v("BigDecimal")])])])]),s._v(" "),a("h2",{attrs:{id:"编写-udf-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写-udf-函数"}},[s._v("#")]),s._v(" 编写 UDF 函数")]),s._v(" "),a("p",[s._v("本小节主要介绍如何开发一个 Java UDF。在 "),a("code",[s._v("samples/doris-demo/java-udf-demo/")]),s._v(" 下提供了示例，可供参考，查看点击"),a("a",{attrs:{href:"https://github.com/apache/incubator-doris/tree/master/samples/doris-demo/java-udf-demo",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("使用Java代码编写UDF，UDF的主入口必须为 "),a("code",[s._v("evaluate")]),s._v(" 函数。这一点与Hive等其他引擎保持一致。在本示例中，我们编写了 "),a("code",[s._v("AddOne")]),s._v(" UDF来完成对整型输入进行加一的操作。\n值得一提的是，本例不只是Doris支持的Java UDF，同时还是Hive支持的UDF，也就是说，对于用户来讲，Hive UDF是可以直接迁移至Doris的。")]),s._v(" "),a("h2",{attrs:{id:"创建-udf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-udf"}},[s._v("#")]),s._v(" 创建 UDF")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FUNCTION")]),s._v(" \nname "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RETURNS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" rettype\nPROPERTIES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"key"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\t\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("说明：")]),s._v(" "),a("ol",[a("li",[s._v("PROPERTIES中"),a("code",[s._v("symbol")]),s._v("表示的是包含UDF类的类名，这个参数是必须设定的。")]),s._v(" "),a("li",[s._v("PROPERTIES中"),a("code",[s._v("file")]),s._v("表示的包含用户UDF的jar包，这个参数是必须设定的。")]),s._v(" "),a("li",[s._v("PROPERTIES中"),a("code",[s._v("type")]),s._v("表示的 UDF 调用类型，默认为 Native，使用 Java UDF时传 JAVA_UDF。")]),s._v(" "),a("li",[s._v("name: 一个function是要归属于某个DB的，name的形式为"),a("code",[s._v("dbName")]),s._v("."),a("code",[s._v("funcName")]),s._v("。当"),a("code",[s._v("dbName")]),s._v("没有明确指定的时候，就是使用当前session所在的db作为"),a("code",[s._v("dbName")]),s._v("。")])]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FUNCTION")]),s._v(" java_udf_add_one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RETURNS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" PROPERTIES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"file"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"file:///path/to/java-udf-demo-jar-with-dependencies.jar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"symbol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"org.apache.doris.udf.AddOne"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"JAVA_UDF"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"编写-udaf-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写-udaf-函数"}},[s._v("#")]),s._v(" 编写 UDAF 函数")]),s._v(" "),a("br"),s._v(" "),a("p",[s._v("在使用Java代码编写UDAF时，有一些必须实现的函数(标记required)和一个内部类State，下面将以一个具体的实例来说明\n下面的SimpleDemo将实现一个类似的sum的简单函数,输入参数INT，输出参数是INT")]),s._v(" "),a("div",{staticClass:"language-JAVA line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("doris"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("udf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SimpleDemo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Need an inner class to store data")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*required*/")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("State")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*some variables if you need */")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*required*/")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("State")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* here could do some init work if needed */")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("State")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*required*/")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("destroy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("State")]),s._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* here could do some destroy work if needed */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*required*/")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//first argument is State, then other types your input")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("State")]),s._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* here doing update work when input data*/")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*required*/")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("serialize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("State")]),s._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DataOutputStream")]),s._v(" out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* serialize some data into buffer */")]),s._v("\n        out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("writeInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*required*/")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("deserialize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("State")]),s._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DataInputStream")]),s._v(" in"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* deserialize get data from buffer before you put */")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" val "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" in"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("readInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*required*/")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("merge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("State")]),s._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("State")]),s._v(" rhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* merge data from state */")]),s._v("\n        state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" rhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*required*/")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//return Type you defined")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("State")]),s._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* return finally result */")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br")])]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" AGGREGATE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FUNCTION")]),s._v(" simple_sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RETURNS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" PROPERTIES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"file"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"file:///pathTo/java-udaf.jar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"symbol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"org.apache.doris.udf.SimpleDemo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"JAVA_UDF"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("目前还暂不支持UDTF")]),s._v(" "),a("br"),s._v(" "),a("h2",{attrs:{id:"使用-udf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-udf"}},[s._v("#")]),s._v(" 使用 UDF")]),s._v(" "),a("p",[s._v("用户使用 UDF 必须拥有对应数据库的 "),a("code",[s._v("SELECT")]),s._v(" 权限。")]),s._v(" "),a("p",[s._v("UDF 的使用与普通的函数方式一致，唯一的区别在于，内置函数的作用域是全局的，而 UDF 的作用域是 DB内部。当链接 session 位于数据内部时，直接使用 UDF 名字会在当前DB内部查找对应的 UDF。否则用户需要显示的指定 UDF 的数据库名字，例如 "),a("code",[s._v("dbName")]),s._v("."),a("code",[s._v("funcName")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"删除-udf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除-udf"}},[s._v("#")]),s._v(" 删除 UDF")]),s._v(" "),a("p",[s._v("当你不再需要 UDF 函数时，你可以通过下述命令来删除一个 UDF 函数, 可以参考 "),a("code",[s._v("DROP FUNCTION")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("samples/doris-demo/java-udf-demo/")]),s._v(" 目录中提供了具体示例。具体使用方法见每个目录下的"),a("code",[s._v("README.md")]),s._v("，查看点击"),a("a",{attrs:{href:"https://github.com/apache/incubator-doris/tree/master/samples/doris-demo/java-udf-demo",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"暂不支持的场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#暂不支持的场景"}},[s._v("#")]),s._v(" 暂不支持的场景")]),s._v(" "),a("p",[s._v("当前Java UDF仍然处在持续的开发过程中，所以部分功能"),a("strong",[s._v("尚不完善")]),s._v("。包括：")]),s._v(" "),a("ol",[a("li",[s._v("不支持复杂数据类型（HLL，Bitmap）")]),s._v(" "),a("li",[s._v("尚未统一JVM和Doris的内存管理以及统计信息")])])])}),[],!1,null,null,null);t.default=e.exports}}]);