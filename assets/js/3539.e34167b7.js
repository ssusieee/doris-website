(window.webpackJsonp=window.webpackJsonp||[]).push([[3539],{4169:function(s,a,t){"use strict";t.r(a);var e=t(15),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"udf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#udf"}},[s._v("#")]),s._v(" UDF")]),s._v(" "),t("p",[s._v("UDF 主要适用于，用户需要的分析能力 Doris 并不具备的场景。用户可以自行根据自己的需求，实现自定义的函数，并且通过 UDF 框架注册到 Doris 中，来扩展 Doris 的能力，并解决用户分析需求。")]),s._v(" "),t("p",[s._v("UDF 能满足的分析需求分为两种：UDF 和 UDAF。本文中的 UDF 指的是二者的统称。")]),s._v(" "),t("ol",[t("li",[s._v("UDF: 用户自定义函数，这种函数会对单行进行操作，并且输出单行结果。当用户在查询时使用 UDF ，每行数据最终都会出现在结果集中。典型的 UDF 比如字符串操作 concat() 等。")]),s._v(" "),t("li",[s._v("UDAF: 用户自定义的聚合函数，这种函数对多行进行操作，并且输出单行结果。当用户在查询时使用 UDAF，分组后的每组数据最后会计算出一个值并展结果集中。典型的 UDAF 比如集合操作 sum() 等。一般来说 UDAF 都会结合 group by 一起使用。")])]),s._v(" "),t("p",[s._v("这篇文档主要讲述了，如何编写自定义的 UDF 函数，以及如何在 Doris 中使用它。")]),s._v(" "),t("p",[s._v("如果用户使用 UDF 功能并扩展了 Doris 的函数分析，并且希望将自己实现的 UDF 函数贡献回 Doris 社区给其他用户使用，这时候请看文档 "),t("RouterLink",{attrs:{to:"/zh-CN/1.1/ecosystem/udf/contribute-udf.html"}},[s._v("Contribute UDF")]),s._v("。")],1),s._v(" "),t("h2",{attrs:{id:"编写-udf-函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写-udf-函数"}},[s._v("#")]),s._v(" 编写 UDF 函数")]),s._v(" "),t("p",[s._v("在使用UDF之前，用户需要先在 Doris 的 UDF 框架下，编写自己的UDF函数。在"),t("code",[s._v("contrib/udf/src/udf_samples/udf_sample.h|cpp")]),s._v("文件中是一个简单的 UDF Demo。")]),s._v(" "),t("p",[s._v("编写一个 UDF 函数需要以下几个步骤。")]),s._v(" "),t("h3",{attrs:{id:"编写函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写函数"}},[s._v("#")]),s._v(" 编写函数")]),s._v(" "),t("p",[s._v("创建对应的头文件、CPP文件，在CPP文件中实现你需要的逻辑。CPP文件中的实现函数格式与UDF的对应关系。")]),s._v(" "),t("p",[s._v("用户可以把自己的 source code 统一放在一个文件夹下。这里以 udf_sample 为例，目录结构如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("└── udf_samples\n  ├── uda_sample.cpp\n  ├── uda_sample.h\n  ├── udf_sample.cpp\n  └── udf_sample.h\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h4",{attrs:{id:"非可变参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#非可变参数"}},[s._v("#")]),s._v(" 非可变参数")]),s._v(" "),t("p",[s._v("对于非可变参数的UDF，那么两者之间的对应关系很直接。\n比如"),t("code",[s._v("INT MyADD(INT, INT)")]),s._v("的UDF就会对应"),t("code",[s._v("IntVal AddUdf(FunctionContext* context, const IntVal& arg1, const IntVal& arg2)")]),s._v("。")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("AddUdf")]),s._v("可以为任意的名字，只要创建UDF的时候指定即可。")]),s._v(" "),t("li",[s._v("实现函数中的第一个参数永远是"),t("code",[s._v("FunctionContext*")]),s._v("。实现者可以通过这个结构体获得一些查询相关的内容，以及申请一些需要使用的内存。具体使用的接口可以参考"),t("code",[s._v("udf/udf.h")]),s._v("中的定义。")]),s._v(" "),t("li",[s._v("实现函数中从第二个参数开始需要与UDF的参数一一对应，比如"),t("code",[s._v("IntVal")]),s._v("对应"),t("code",[s._v("INT")]),s._v("类型。这部分的类型都要使用"),t("code",[s._v("const")]),s._v("引用。")]),s._v(" "),t("li",[s._v("返回参数与UDF的参数的类型要相对应。")])]),s._v(" "),t("h4",{attrs:{id:"可变参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可变参数"}},[s._v("#")]),s._v(" 可变参数")]),s._v(" "),t("p",[s._v("对于可变参数，可以参见以下例子，UDF"),t("code",[s._v("String md5sum(String, ...)")]),s._v("对应的\n实现函数是"),t("code",[s._v("StringVal md5sumUdf(FunctionContext* ctx, int num_args, const StringVal* args)")])]),s._v(" "),t("ol",[t("li",[t("code",[s._v("md5sumUdf")]),s._v("这个也是可以任意改变的，创建的时候指定即可。")]),s._v(" "),t("li",[s._v("第一个参数与非可变参数函数一样，传入的是一个"),t("code",[s._v("FunctionContext*")]),s._v("。")]),s._v(" "),t("li",[s._v("可变参数部分由两部分组成，首先会传入一个整数，说明后面还有几个参数。后面传入的是一个可变参数部分的数组。")])]),s._v(" "),t("h4",{attrs:{id:"类型对应关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型对应关系"}},[s._v("#")]),s._v(" 类型对应关系")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("UDF Type")]),s._v(" "),t("th",[s._v("Argument Type")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("TinyInt")]),s._v(" "),t("td",[s._v("TinyIntVal")])]),s._v(" "),t("tr",[t("td",[s._v("SmallInt")]),s._v(" "),t("td",[s._v("SmallIntVal")])]),s._v(" "),t("tr",[t("td",[s._v("Int")]),s._v(" "),t("td",[s._v("IntVal")])]),s._v(" "),t("tr",[t("td",[s._v("BigInt")]),s._v(" "),t("td",[s._v("BigIntVal")])]),s._v(" "),t("tr",[t("td",[s._v("LargeInt")]),s._v(" "),t("td",[s._v("LargeIntVal")])]),s._v(" "),t("tr",[t("td",[s._v("Float")]),s._v(" "),t("td",[s._v("FloatVal")])]),s._v(" "),t("tr",[t("td",[s._v("Double")]),s._v(" "),t("td",[s._v("DoubleVal")])]),s._v(" "),t("tr",[t("td",[s._v("Date")]),s._v(" "),t("td",[s._v("DateTimeVal")])]),s._v(" "),t("tr",[t("td",[s._v("Datetime")]),s._v(" "),t("td",[s._v("DateTimeVal")])]),s._v(" "),t("tr",[t("td",[s._v("Char")]),s._v(" "),t("td",[s._v("StringVal")])]),s._v(" "),t("tr",[t("td",[s._v("Varchar")]),s._v(" "),t("td",[s._v("StringVal")])]),s._v(" "),t("tr",[t("td",[s._v("Decimal")]),s._v(" "),t("td",[s._v("DecimalVal")])])])]),s._v(" "),t("h2",{attrs:{id:"编译-udf-函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译-udf-函数"}},[s._v("#")]),s._v(" 编译 UDF 函数")]),s._v(" "),t("p",[s._v("由于 UDF 实现中依赖了 Doris 的 UDF 框架 , 所以在编译 UDF 函数的时候首先要对 Doris 进行编译，也就是对 UDF 框架进行编译。")]),s._v(" "),t("p",[s._v("编译完成后会生成，UDF 框架的静态库文件。之后引入 UDF 框架依赖，并编译 UDF 即可。")]),s._v(" "),t("h3",{attrs:{id:"编译doris"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译doris"}},[s._v("#")]),s._v(" 编译Doris")]),s._v(" "),t("p",[s._v("在 Doris 根目录下执行 "),t("code",[s._v("sh build.sh")]),s._v(" 就会在 "),t("code",[s._v("output/udf/")]),s._v(" 生成 UDF 框架的静态库文件 "),t("code",[s._v("headers|libs")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("├── output\n│   └── udf\n│       ├── include\n│       │   ├── uda_test_harness.h\n│       │   └── udf.h\n│       └── lib\n│           └── libDorisUdf.a\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"编写-udf-编译文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写-udf-编译文件"}},[s._v("#")]),s._v(" 编写 UDF 编译文件")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("准备 thirdparty")]),s._v(" "),t("p",[t("code",[s._v("thirdparty")]),s._v(" 文件夹主要用于存放用户 UDF 函数依赖的第三方库，包括头文件及静态库。其中必须包含依赖的 Doris UDF 框架中 "),t("code",[s._v("udf.h")]),s._v(" 和 "),t("code",[s._v("libDorisUdf.a")]),s._v(" 这两个文件。")]),s._v(" "),t("p",[s._v("这里以 "),t("code",[s._v("udf_sample")]),s._v(" 为例, 在 用户自己 "),t("code",[s._v("udf_samples")]),s._v(" 目录用于存放 source code。在同级目录下再创建一个 "),t("code",[s._v("thirdparty")]),s._v(" 文件夹用于存放静态库。目录结构如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("├── thirdparty\n│ │── include\n│ │ └── udf.h\n│ └── lib\n│   └── libDorisUdf.a\n└── udf_samples\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[t("code",[s._v("udf.h")]),s._v(" 是 UDF 框架头文件。存放路径为 "),t("code",[s._v("doris/output/udf/include/udf.h")]),s._v("。 用户需要将 Doris 编译产出中的这个头文件拷贝到自己的 "),t("code",[s._v("thirdparty")]),s._v(" 的 include 文件夹下。")]),s._v(" "),t("p",[t("code",[s._v("libDorisUdf.a")]),s._v("  是 UDF 框架的静态库。Doris 编译完成后该文件存放在 "),t("code",[s._v("doris/output/udf/lib/libDorisUdf.a")]),s._v("。用户需要将该文件拷贝到自己的 "),t("code",[s._v("thirdparty")]),s._v(" 的 lib 文件夹下。")]),s._v(" "),t("p",[s._v("*注意：UDF 框架的静态库只有完成 Doris 编译后才会生成。")])]),s._v(" "),t("li",[t("p",[s._v("准备编译 UDF 的 CMakeFiles.txt")]),s._v(" "),t("p",[s._v("CMakeFiles.txt 用于声明 UDF 函数如何进行编译。存放在源码文件夹下，与用户代码平级。这里以 "),t("code",[s._v("udf_samples")]),s._v(" 为例目录结构如下:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("├── thirdparty\n└── udf_samples\n  ├── CMakeLists.txt\n  ├── uda_sample.cpp\n  ├── uda_sample.h\n  ├── udf_sample.cpp\n  └── udf_sample.h\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("ul",[t("li",[s._v("需要显示声明引用 "),t("code",[s._v("libDorisUdf.a")])]),s._v(" "),t("li",[s._v("声明 "),t("code",[s._v("udf.h")]),s._v(" 头文件位置")])]),s._v(" "),t("p",[s._v("以 udf_sample 为例")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('# Include udf\ninclude_directories(thirdparty/include)    \n\n# Set all libraries\nadd_library(udf STATIC IMPORTED)\nset_target_properties(udf PROPERTIES IMPORTED_LOCATION thirdparty/lib/libDorisUdf.a)\n\n# where to put generated libraries\nset(LIBRARY_OUTPUT_PATH "${BUILD_DIR}/src/udf_samples")\n\n# where to put generated binaries\nset(EXECUTABLE_OUTPUT_PATH "${BUILD_DIR}/src/udf_samples")\n\nadd_library(udfsample SHARED udf_sample.cpp)\n    target_link_libraries(udfsample\n    udf\n    -static-libstdc++\n    -static-libgcc\n)\n\nadd_library(udasample SHARED uda_sample.cpp)\n    target_link_libraries(udasample\n    udf\n    -static-libstdc++\n    -static-libgcc\n)\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("p",[s._v("如果用户的 UDF 函数还依赖了其他的三方库，则需要声明 include，lib，并在 "),t("code",[s._v("add_library")]),s._v(" 中增加依赖。")])])]),s._v(" "),t("p",[s._v("所有文件准备齐后完整的目录结构如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    ├── thirdparty\n    │ │── include\n    │ │ └── udf.h\n    │ └── lib\n    │   └── libDorisUdf.a\n    └── udf_samples\n      ├── CMakeLists.txt\n      ├── uda_sample.cpp\n      ├── uda_sample.h\n      ├── udf_sample.cpp\n      └── udf_sample.h\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("准备好上述文件就可以直接编译 UDF 了")]),s._v(" "),t("h3",{attrs:{id:"执行编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行编译"}},[s._v("#")]),s._v(" 执行编译")]),s._v(" "),t("p",[s._v("在 udf_samples 文件夹下创建一个 build 文件夹，用于存放编译产出。")]),s._v(" "),t("p",[s._v("在 build 文件夹下运行命令 "),t("code",[s._v("cmake ../")]),s._v(" 生成Makefile，并执行 make 就会生成对应动态库。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("├── thirdparty\n├── udf_samples\n  └── build\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"编译结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译结果"}},[s._v("#")]),s._v(" 编译结果")]),s._v(" "),t("p",[s._v("编译完成后的 UDF 动态链接库就生成成功了。在 "),t("code",[s._v("build/src/")]),s._v(" 下，以 udf_samples 为例，目录结构如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\n├── thirdparty\n├── udf_samples\n  └── build\n    └── src\n      └── udf_samples\n        ├── libudasample.so\n        └── libudfsample.so\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"创建-udf-函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-udf-函数"}},[s._v("#")]),s._v(" 创建 UDF 函数")]),s._v(" "),t("p",[s._v("通过上述的步骤后，你可以得到 UDF 的动态库（也就是编译结果中的 "),t("code",[s._v(".so")]),s._v(" 文件）。你需要将这个动态库放到一个能够通过 HTTP 协议访问到的位置。")]),s._v(" "),t("p",[s._v("然后登录 Doris 系统，在 mysql-client 中通过 "),t("code",[s._v("CREATE FUNCTION")]),s._v(" 语法创建 UDF 函数。你需要拥有ADMIN权限才能够完成这个操作。这时 Doris 系统内部就会存在刚才创建好的 UDF。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('CREATE [AGGREGATE] FUNCTION \n\tname ([argtype][,...])\n\t[RETURNS] rettype\n\tPROPERTIES (["key"="value"][,...])\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("说明：")]),s._v(" "),t("ol",[t("li",[s._v("PROPERTIES中"),t("code",[s._v("symbol")]),s._v("表示的是，执行入口函数的对应symbol，这个参数是必须设定。你可以通过"),t("code",[s._v("nm")]),s._v("命令来获得对应的symbol，比如"),t("code",[s._v("nm libudfsample.so | grep AddUdf")]),s._v("获得到的"),t("code",[s._v("_ZN9doris_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_")]),s._v("就是对应的symbol。")]),s._v(" "),t("li",[s._v("PROPERTIES中"),t("code",[s._v("object_file")]),s._v("表示的是从哪里能够下载到对应的动态库，这个参数是必须设定的。")]),s._v(" "),t("li",[s._v("name: 一个function是要归属于某个DB的，name的形式为"),t("code",[s._v("dbName")]),s._v("."),t("code",[s._v("funcName")]),s._v("。当"),t("code",[s._v("dbName")]),s._v("没有明确指定的时候，就是使用当前session所在的db作为"),t("code",[s._v("dbName")]),s._v("。")])]),s._v(" "),t("p",[s._v("具体使用可以参见 "),t("code",[s._v("CREATE FUNCTION")]),s._v(" 获取更详细信息。")]),s._v(" "),t("h2",{attrs:{id:"使用-udf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-udf"}},[s._v("#")]),s._v(" 使用 UDF")]),s._v(" "),t("p",[s._v("用户使用 UDF 必须拥有对应数据库的 "),t("code",[s._v("SELECT")]),s._v(" 权限。")]),s._v(" "),t("p",[s._v("UDF 的使用与普通的函数方式一致，唯一的区别在于，内置函数的作用域是全局的，而 UDF 的作用域是 DB内部。当链接 session 位于数据内部时，直接使用 UDF 名字会在当前DB内部查找对应的 UDF。否则用户需要显示的指定 UDF 的数据库名字，例如 "),t("code",[s._v("dbName")]),s._v("."),t("code",[s._v("funcName")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"删除-udf函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除-udf函数"}},[s._v("#")]),s._v(" 删除 UDF函数")]),s._v(" "),t("p",[s._v("当你不再需要 UDF 函数时，你可以通过下述命令来删除一个 UDF 函数, 可以参考 "),t("code",[s._v("DROP FUNCTION")]),s._v("。")])])}),[],!1,null,null,null);a.default=n.exports}}]);