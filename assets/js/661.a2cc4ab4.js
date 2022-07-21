(window.webpackJsonp=window.webpackJsonp||[]).push([[661],{1286:function(t,a,s){"use strict";s.r(a);var n=s(15),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"使用-vscode-搭建-fe-开发环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-vscode-搭建-fe-开发环境"}},[t._v("#")]),t._v(" 使用 VSCode 搭建 FE 开发环境")]),t._v(" "),s("p",[t._v("有些开发者是在 开发机/WSL/docker 上搭建 FE 开发环境，但是这样的开发环境不能支持本地开发，有些习惯于使用 VSCode 的开发者可以配置远程开发调试")]),t._v(" "),s("h2",{attrs:{id:"环境准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[t._v("#")]),t._v(" 环境准备")]),t._v(" "),s("ul",[s("li",[t._v("JDK11+ (Java 插件需要 JDK11+) (笔者是在 "),s("code",[t._v("home")]),t._v(" 目录下建立了一个 lib 目录，分别安装了 "),s("a",{attrs:{href:"https://github.com/adoptium/temurin11-binaries/releases/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JDK11"),s("OutboundLink")],1),t._v(" 和 JDK8 ，分别用于插件和编译)")]),t._v(" "),s("li",[t._v("VSCode\n"),s("ul",[s("li",[t._v("Extension Pack for Java 插件")]),t._v(" "),s("li",[t._v("Remote 插件")])])])]),t._v(" "),s("h2",{attrs:{id:"下载代码编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载代码编译"}},[t._v("#")]),t._v(" 下载代码编译")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("从 https://github.com/apache/incubator-doris.git 下载源码到本地")])]),t._v(" "),s("li",[s("p",[t._v("使用 VSCode 打开代码 "),s("code",[t._v("/fe")]),t._v(" 目录")])])]),t._v(" "),s("h2",{attrs:{id:"配置-vscode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-vscode"}},[t._v("#")]),t._v(" 配置 VSCode")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v(".vscode")]),t._v(" 目录下创建 "),s("code",[t._v("settings.json")]),t._v(" 文件, 分别配置")]),t._v(" "),s("ul",[s("li",[s("code",[t._v('"java.configuration.runtimes"')])]),t._v(" "),s("li",[s("code",[t._v('"java.jdt.ls.java.home"')]),t._v(" -- 必须另外配置，指向 JDK11+ 的目录，用于配置 vscode-java 插件")]),t._v(" "),s("li",[s("code",[t._v('"maven.executable.path"')]),t._v(" -- 指向 maven 的目录，用于配置 maven-language-server 插件")])]),t._v(" "),s("p",[t._v("example:")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"java.configuration.runtimes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JavaSE-1.8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/!!!path!!!/jdk-1.8.0_191"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JavaSE-11"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/!!!path!!!/jdk-11.0.14.1+1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"default"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"java.jdt.ls.java.home"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/!!!path!!!/jdk-11.0.14.1+1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"maven.executable.path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/!!!path!!!/maven/bin/mvn"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("h2",{attrs:{id:"编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[t._v("#")]),t._v(" 编译")]),t._v(" "),s("p",[t._v("其他文章已经介绍的比较清楚了：")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/zh-CN/docs/install/source-install/compilation-with-ldb-toolchain.html"}},[t._v("使用 LDB toolchain 编译")])],1),t._v(" "),s("li",[t._v("......")])]),t._v(" "),s("p",[t._v("为了进行调试，需要在 fe 启动时，加上调试的参数，比如 "),s("code",[t._v("-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005")]),t._v(" 。")]),t._v(" "),s("p",[t._v("具体是在 "),s("code",[t._v("incubator-doris/output/fe/bin/start_fe.sh")]),t._v(" 里 "),s("code",[t._v("$JAVA $final_java_opt")]),t._v(" 后面加上上面的参数。")])])}),[],!1,null,null,null);a.default=e.exports}}]);