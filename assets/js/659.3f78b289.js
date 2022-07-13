(window.webpackJsonp=window.webpackJsonp||[]).push([[659],{1088:function(e,a,s){"use strict";s.r(a);var v=s(2),t=Object(v.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"使用-eclipse-搭建-fe-开发环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-eclipse-搭建-fe-开发环境"}},[e._v("#")]),e._v(" 使用 Eclipse 搭建 FE 开发环境")]),e._v(" "),s("h2",{attrs:{id:"环境准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[e._v("#")]),e._v(" 环境准备")]),e._v(" "),s("ul",[s("li",[e._v("JDK 1.8+")]),e._v(" "),s("li",[e._v("Maven 3.x+")]),e._v(" "),s("li",[e._v("Eclipse，并已安装 "),s("a",{attrs:{href:"http://www.eclipse.org/m2e/",target:"_blank",rel:"noopener noreferrer"}},[e._v("M2Eclipse"),s("OutboundLink")],1)])]),e._v(" "),s("h3",{attrs:{id:"代码生成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码生成"}},[e._v("#")]),e._v(" 代码生成")]),e._v(" "),s("p",[e._v("FE 模块需要部分生成代码，如 Thrift、Protobuf, jflex, cup 等框架的生成代码。这部分需要在 Linux 或者 Mac环境生成。")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("在 Linux 下， 进入 `fe 目录下执行以下命令：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mvn  generate-sources\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("如果使用window开发 需要将生成的 "),s("code",[e._v("fe/fe-core/target/generated-sources")]),e._v(" 目录打包：")]),e._v(" "),s("p",[s("code",[e._v("fe/fe-core/target/ && tar czf java.tar.gz generated-sources/")])])]),e._v(" "),s("li",[s("p",[e._v("将 "),s("code",[e._v("java.tar.gz")]),e._v(" 拷贝到开发环境的 "),s("code",[e._v("fe/fe-core/target/")]),e._v(" 目录下，并解压")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cp java.tar.gz /path/to/doris/fe/fe-core/target/\ncd /path/to/doris/fe/fe-core/target/ && tar xzf java.tar.gz\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])])])]),e._v(" "),s("h2",{attrs:{id:"导入-fe-工程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导入-fe-工程"}},[e._v("#")]),e._v(" 导入 FE 工程")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("在开发环境的 "),s("code",[e._v("fe/")]),e._v(" 目录下，执行以下命令生成 Eclipse 工程文件：")]),e._v(" "),s("p",[s("code",[e._v("cd /path/to/doris/fe/ && mvn -npr eclipse:eclipse -Dskip.plugin=true")])]),e._v(" "),s("p",[e._v("执行完成后，会在 "),s("code",[e._v("fe/")]),e._v(" 目录下生成 "),s("code",[e._v(".project")]),e._v(" 和 "),s("code",[e._v(".classpath")]),e._v(" 文件")])]),e._v(" "),s("li",[s("p",[e._v("导入 FE 工程")]),e._v(" "),s("ul",[s("li",[e._v("打开 Eclipse，选择 "),s("code",[e._v("File -> Import")]),e._v("。")]),e._v(" "),s("li",[e._v("选择 "),s("code",[e._v("General -> Existing Projects into Workspace")]),e._v("。")]),e._v(" "),s("li",[s("code",[e._v("Select root directory")]),e._v(" 选择 "),s("code",[e._v("fe/")]),e._v(" 目录，点击 "),s("code",[e._v("Finish")]),e._v(" 完成导入。")]),e._v(" "),s("li",[e._v("右击工程，选择 "),s("code",[e._v("Build Path -> Configure Build Path")]),e._v("。")]),e._v(" "),s("li",[e._v("在 "),s("code",[e._v("Java Build Path")]),e._v(" 对话框中，选择 "),s("code",[e._v("Source")]),e._v(" 标签页，点击 "),s("code",[e._v("Add Folder")]),e._v("，勾选添加之前拷贝并解压的 "),s("code",[e._v("java/")]),e._v(" 目录。")]),e._v(" "),s("li",[e._v("点击 "),s("code",[e._v("Apply and Close")]),e._v(" 完成。")])])])]),e._v(" "),s("p",[e._v("至此，FE 导入完成。Eclipse 中的工程目录大致如下：")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/images/eclipse-import-fe-project-1.png"),alt:""}}),e._v(" "),s("h2",{attrs:{id:"运行单元测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行单元测试"}},[e._v("#")]),e._v(" 运行单元测试")]),e._v(" "),s("p",[e._v("在想要运行的单元测试文件上右击，选择 "),s("code",[e._v("Run As -> JUnit Test")]),e._v("。（如果要单步调试，则选择 "),s("code",[e._v("Debug As -> JUnit Test")]),e._v("）。")]),e._v(" "),s("p",[e._v("如果出现以下错误：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("java.lang.Exception: Method xxxx should have no parameters\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("则右击单元测试文件，选择 "),s("code",[e._v("Run As -> Run Configurations...")]),e._v("。（如果要单步调试，则选择 "),s("code",[e._v("Debug As -> Debug Configurations...")]),e._v("）。")]),e._v(" "),s("p",[e._v("在 "),s("code",[e._v("Arguments")]),e._v(" 标签页中的 "),s("code",[e._v("VM arguments")]),e._v(" 中添加：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("-javaagent:${settings.localRepository}/org/jmockit/jmockit/1.48/jmockit-1.48.jar\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("其中 "),s("code",[e._v("${settings.localRepository}")]),e._v(" 要换成 maven lib 库的路径，如：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("-javaagent:/Users/cmy/.m2/repository/org/jmockit/jmockit/1.48/jmockit-1.48.jar\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("之后在运行 "),s("code",[e._v("Run/Debug")]),e._v(" 即可。")]),e._v(" "),s("p",[e._v("FE的单元测试会首先启动一个FE服务，然后由测试用例作为客户端执行相应的测试逻辑。在UT报错时，UT的日志只会打印相应的客户端日志，如果需要"),s("strong",[e._v("查看服务端日志")]),e._v("，可以在路径${DORIS_HOME}/fe/mocked下查看。")]),e._v(" "),s("h2",{attrs:{id:"运行-fe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行-fe"}},[e._v("#")]),e._v(" 运行 FE")]),e._v(" "),s("p",[e._v("可以在 Eclipse 中直接启动一个 FE 进程，方便对代码进行调试。")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("创建一个运行目录：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mkdir /path/to/doris/fe/run/\ncd /path/to/doris/fe/run/\nmkdir conf/ log/ palo-meta/\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("创建配置文件")]),e._v(" "),s("p",[e._v("在第一步创建的 "),s("code",[e._v("conf/")]),e._v(" 目录下创建配置文件 "),s("code",[e._v("fe.conf")]),e._v("。你可以直接将源码目录下 "),s("code",[e._v("conf/fe.conf")]),e._v(" 拷贝过来并做简单修改。")])]),e._v(" "),s("li",[s("p",[e._v("在 Eclipse 中找到 "),s("code",[e._v("src/main/java/org/apache/doris/PaloFe.java")]),e._v(" 文件，右击选择 "),s("code",[e._v("Run As -> Run Configurations...")]),e._v("。在 "),s("code",[e._v("Environment")]),e._v(" 标签页中添加如下环境变量：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("DORIS_HOME: /path/to/doris/fe/run/")])]),e._v(" "),s("li",[s("code",[e._v("PID_DIR: /path/to/doris/fe/run/")])]),e._v(" "),s("li",[s("code",[e._v("LOG_DIR: /path/to/doris/fe/run/log")])])])]),e._v(" "),s("li",[s("p",[e._v("右击 "),s("code",[e._v("PaloFe.java")]),e._v("，选择 "),s("code",[e._v("Run As -> Java Application")]),e._v("，则可以启动 FE。")])])]),e._v(" "),s("h2",{attrs:{id:"代码更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码更新"}},[e._v("#")]),e._v(" 代码更新")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("更新词法、语法文件或者thrift 和proto 文件")]),e._v(" "),s("p",[e._v("如果修改了 "),s("code",[e._v("fe/fe-core/src/main/cup/sql_parser.cup")]),e._v(" 或者 "),s("code",[e._v("fe/fe-core/src/main/jflex/sql_scanner.flex")]),e._v("文件或者proto 和thrift 文件。则需在 "),s("code",[e._v("fe")]),e._v(" 目录下执行以下命令：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mvn  generate-sources\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("之后在 Eclipse 中刷新工程即可。")])]),e._v(" "),s("li",[s("p",[e._v("更新 maven 依赖")]),e._v(" "),s("p",[e._v("如果更新了 "),s("code",[e._v("fe/pom.xml")]),e._v(" 中的依赖，则需在 "),s("code",[e._v("fe/")]),e._v(" 目录下执行以下命令：")]),e._v(" "),s("p",[s("code",[e._v("mvn -npr eclipse:eclipse -Dskip.plugin=true")])]),e._v(" "),s("p",[e._v("之后在 Eclipse 中刷新工程即可。如无法更新，建议删除工程，并按照该文档重新导入一遍即可。")])])]),e._v(" "),s("h2",{attrs:{id:"import-顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-顺序"}},[e._v("#")]),e._v(" Import 顺序")]),e._v(" "),s("p",[e._v("为了保持 Java 的 Import 顺序，请执行如下操作设定项目的 Import Order")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("创建文件 "),s("code",[e._v("fe_doris.importorder")]),e._v(" 并写入以下内容：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("#Organize Import Order\n#Wed Jul 01 16:42:47 CST 2020\n4=javax\n3=java\n2=org\n1=com\n0=org.apache.doris\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("打开 Eclipse 的偏好设置（Preferences），选择 "),s("code",[e._v("Java -> Code Style -> Organize Imports")]),e._v("。点击 "),s("code",[e._v("Import")]),e._v(" 导入上述文件。")])])])])}),[],!1,null,null,null);a.default=t.exports}}]);