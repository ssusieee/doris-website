(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{848:function(e,s,n){"use strict";n.r(s);var a=n(15),t=Object(a.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"doris-plugin-framework"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#doris-plugin-framework"}},[e._v("#")]),e._v(" Doris Plugin Framework")]),e._v(" "),n("h2",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),n("p",[e._v("Doris plugin framework supports install/uninstall custom plugins at runtime without restart the Doris service. Users can extend Doris's functionality by developing their own plugins.")]),e._v(" "),n("p",[e._v("For example, the audit plugin worked after a request execution, it can obtain information related to a request (access user, request IP, SQL, etc...) and write the information into the specified table.")]),e._v(" "),n("p",[e._v("Differences from UDF:")]),e._v(" "),n("ul",[n("li",[e._v("UDF is a function used for data calculation when SQL is executed. Plugin is additional function that is used to extend Doris with customized function, such as support different storage engines and different import ways, and plugin doesn't participate in data calculation when executing SQL.")]),e._v(" "),n("li",[e._v("The execution cycle of UDF is limited to a SQL execution. The execution cycle of plugin may be the same as the Doris process.")]),e._v(" "),n("li",[e._v("The usage scene is different. If you need to support special data algorithms when executing SQL, then UDF is recommended, if you need to run custom functions on Doris, or start a background thread to do tasks, then the use of plugin is recommended.")])]),e._v(" "),n("p",[e._v("Currently the plugin framework only supports audit plugins.")]),e._v(" "),n("blockquote",[n("p",[e._v("Note:\nDoris plugin framework is an experimental feature, currently only supports FE plugin, and is closed by default, can be opened by FE configuration "),n("code",[e._v("plugin_enable = true")]),e._v(".")])]),e._v(" "),n("h2",{attrs:{id:"plugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plugin"}},[e._v("#")]),e._v(" Plugin")]),e._v(" "),n("p",[e._v("A FE Plugin can be a "),n("strong",[e._v(".zip package")]),e._v(" or a "),n("strong",[e._v("directory")]),e._v(", which contains at least two parts: the "),n("code",[e._v("plugin.properties")]),e._v(" and "),n("code",[e._v(".jar")]),e._v(" files. The "),n("code",[e._v("plugin.properties")]),e._v(" file is used to describe the plugin information.")]),e._v(" "),n("p",[e._v("The file structure of a Plugin looks like this:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("# plugin .zip\nauditodemo.zip:\n    -plugin.properties\n    -auditdemo.jar\n    -xxx.config\n    -data/\n    -test_data/\n\n# plugin local directory\nauditodemo/:\n    -plugin.properties\n    -auditdemo.jar\n    -xxx.config\n    -data/\n    -test_data/\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br")])]),n("p",[n("code",[e._v("plugin.properties")]),e._v(" example:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('### required:\n#\n# the plugin name\nname = audit_plugin_demo\n#\n# the plugin type\ntype = AUDIT\n#\n# simple summary of the plugin\ndescription = just for test\n#\n# Doris\'s version, like: 0.11.0\nversion = 0.11.0\n\n### FE-Plugin optional:\n#\n# version of java the code is built against\n# use the command "java -version" value, like 1.8.0, 9.0.1, 13.0.4\njava.version = 1.8.31\n#\n# the name of the class to load, fully-qualified.\nclassname = AuditPluginDemo\n\n### BE-Plugin optional:\n# the name of the so to load\nsoName = example.so\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br")])]),n("h2",{attrs:{id:"write-a-plugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#write-a-plugin"}},[e._v("#")]),e._v(" Write A Plugin")]),e._v(" "),n("p",[e._v("The development environment of the FE plugin depends on the development environment of Doris. So please make sure Doris's compilation and development environment works normally.")]),e._v(" "),n("p",[n("code",[e._v("fe_plugins")]),e._v(" is the parent module of the fe plugins. It can uniformly manage the third-party library information that the plugin depends on. Adding a plugin can add a submodule implementation under "),n("code",[e._v("fe_plugins")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"create-module"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-module"}},[e._v("#")]),e._v(" Create module")]),e._v(" "),n("p",[e._v("We can add a submodule in the "),n("code",[e._v("fe_plugins")]),e._v(" directory to implement Plugin and create a project:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("mvn archetype: generate -DarchetypeCatalog = internal -DgroupId = org.apache -DartifactId = doris-fe-test -DinteractiveMode = false\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("The command produces a new mvn project, and a new submodule is automatically added to "),n("code",[e._v("fe_plugins/pom.xml")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    .....\n    <groupId>org.apache</groupId>\n    <artifactId>doris-fe-plugins</artifactId>\n    <packaging>pom</packaging>\n    <version>1.0-SNAPSHOT</version>\n    <modules>\n        <module>auditdemo</module>\n        # new plugin module\n        <module>doris-fe-test</module>\n    </modules>\n    .....\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br")])]),n("p",[e._v("The new plugin project file structure is as follows:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("-doris-fe-test/\n-pom.xml\n-src/\n    ---- main/java/org/apache/\n    ------- App.java # mvn auto generate, ignore\n    ---- test/java/org/apache\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])]),n("p",[e._v("We will add an assembly folder under main to store "),n("code",[e._v("plugin.properties")]),e._v(" and "),n("code",[e._v("zip.xml")]),e._v(". After completion, the file structure is as follows:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("-doris-fe-test/\n-pom.xml\n-src/\n---- main/\n------ assembly/\n-------- plugin.properties\n-------- zip.xml\n------ java/org/apache/\n--------App.java # mvn auto generate, ignore\n---- test/java/org/apache\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br")])]),n("h3",{attrs:{id:"add-zip-xml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#add-zip-xml"}},[e._v("#")]),e._v(" Add zip.xml")]),e._v(" "),n("p",[n("code",[e._v("zip.xml")]),e._v(", used to describe the content of the final package of the plugin (.jar file, plugin.properties):")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<assembly>\n    <id>plugin</id>\n    <formats>\n        <format>zip</format>\n    </formats>\n    <!-IMPORTANT: must be false->\n    <includeBaseDirectory>false</includeBaseDirectory>\n    <fileSets>\n        <fileSet>\n            <directory>target</directory>\n            <includes>\n                <include>*.jar</include>\n            </ ncludes>\n            <outputDirectory>/</outputDirectory>\n        </fileSet>\n\n        <fileSet>\n            <directory>src/main/assembly</directory>\n            <includes>\n                <include>plugin.properties</include>\n            </includes>\n            <outputDirectory>/</outputDirectory>\n        </fileSet>\n    </fileSets>\n</assembly>\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br")])]),n("h3",{attrs:{id:"update-pom-xml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#update-pom-xml"}},[e._v("#")]),e._v(" Update pom.xml")]),e._v(" "),n("p",[e._v("Then we need to update "),n("code",[e._v("pom.xml")]),e._v(", add doris-fe dependency, and modify maven packaging way:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xmlns="http://maven.apache.org/POM/4.0.0"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <parent>\n        <groupId>org.apache</groupId>\n        <artifactId>doris-fe-plugins</artifactId>\n        <version>1.0-SNAPSHOT</version>\n    </parent>\n    <modelVersion>4.0.0</modelVersion>\n\n    <artifactId>auditloader</artifactId>\n    <packaging>jar</packaging>\n\n    <dependencies>\n        \x3c!-- doris-fe dependencies --\x3e\n        <dependency>\n            <groupId>org.apache</groupId>\n            <artifactId>doris-fe</artifactId>\n        </dependency>\n\n        \x3c!-- other dependencies --\x3e\n        <dependency>\n            ...\n        </dependency>\n    </dependencies>\n\n\n    <build>\n        <finalName>auditloader</finalName>\n        <plugins>\n            <plugin>\n                <artifactId>maven-assembly-plugin</artifactId>\n                <version>2.4.1</version>\n                <configuration>\n                    <appendAssemblyId>false</appendAssemblyId>\n                    <descriptors>\n                        <descriptor>src/main/assembly/zip.xml</descriptor>\n                    </descriptors>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>make-assembly</id>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>single</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n\n</project>\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br"),n("span",{staticClass:"line-number"},[e._v("29")]),n("br"),n("span",{staticClass:"line-number"},[e._v("30")]),n("br"),n("span",{staticClass:"line-number"},[e._v("31")]),n("br"),n("span",{staticClass:"line-number"},[e._v("32")]),n("br"),n("span",{staticClass:"line-number"},[e._v("33")]),n("br"),n("span",{staticClass:"line-number"},[e._v("34")]),n("br"),n("span",{staticClass:"line-number"},[e._v("35")]),n("br"),n("span",{staticClass:"line-number"},[e._v("36")]),n("br"),n("span",{staticClass:"line-number"},[e._v("37")]),n("br"),n("span",{staticClass:"line-number"},[e._v("38")]),n("br"),n("span",{staticClass:"line-number"},[e._v("39")]),n("br"),n("span",{staticClass:"line-number"},[e._v("40")]),n("br"),n("span",{staticClass:"line-number"},[e._v("41")]),n("br"),n("span",{staticClass:"line-number"},[e._v("42")]),n("br"),n("span",{staticClass:"line-number"},[e._v("43")]),n("br"),n("span",{staticClass:"line-number"},[e._v("44")]),n("br"),n("span",{staticClass:"line-number"},[e._v("45")]),n("br"),n("span",{staticClass:"line-number"},[e._v("46")]),n("br"),n("span",{staticClass:"line-number"},[e._v("47")]),n("br"),n("span",{staticClass:"line-number"},[e._v("48")]),n("br"),n("span",{staticClass:"line-number"},[e._v("49")]),n("br"),n("span",{staticClass:"line-number"},[e._v("50")]),n("br"),n("span",{staticClass:"line-number"},[e._v("51")]),n("br"),n("span",{staticClass:"line-number"},[e._v("52")]),n("br"),n("span",{staticClass:"line-number"},[e._v("53")]),n("br"),n("span",{staticClass:"line-number"},[e._v("54")]),n("br")])]),n("h3",{attrs:{id:"implement-plugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#implement-plugin"}},[e._v("#")]),e._v(" Implement plugin")]),e._v(" "),n("p",[e._v("Then we can implement Plugin according to the needs. Plugins need to implement the "),n("code",[e._v("Plugin")]),e._v(" interface. For details, please refer to the "),n("code",[e._v("auditdemo")]),e._v(" plugin sample code that comes with Doris.")]),e._v(" "),n("h3",{attrs:{id:"compile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#compile"}},[e._v("#")]),e._v(" Compile")]),e._v(" "),n("p",[e._v("Before compiling the plugin, you must first execute "),n("code",[e._v("sh build.sh --fe")]),e._v(" of Doris to complete the compilation of Doris FE.")]),e._v(" "),n("p",[e._v("Finally, execute "),n("code",[e._v("sh build_plugin.sh")]),e._v(" in the ${DORIS_HOME} path and you will find the "),n("code",[e._v("your_plugin_name.zip")]),e._v(" file in "),n("code",[e._v("fe_plugins/output")])]),e._v(" "),n("p",[e._v("Or you can execute "),n("code",[e._v("sh build_plugin.sh --plugin your_plugin_name")]),e._v(" to only build your plugin.")]),e._v(" "),n("h3",{attrs:{id:"other-way"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#other-way"}},[e._v("#")]),e._v(" Other way")]),e._v(" "),n("p",[e._v("The easiest way, you can implement your plugin by modifying the example "),n("code",[e._v("auditdemo")])]),e._v(" "),n("h2",{attrs:{id:"deploy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deploy"}},[e._v("#")]),e._v(" Deploy")]),e._v(" "),n("p",[e._v("Doris's plugin can be deployed in three ways:")]),e._v(" "),n("ul",[n("li",[e._v("Http or Https .zip, like "),n("code",[e._v("http://xxx.xxxxxx.com/data/plugin.zip")]),e._v(", Doris will download this .zip file. At the same time, the value of md5sum needs to be set in properties, or an md5 file with the same name as the "),n("code",[e._v(".zip")]),e._v(" file needs to be placed, such as "),n("code",[e._v("http://xxx.xxxxxx.com/data/my_plugin.zip.md5")]),e._v(". The content is the MD5 value of the .zip file.")]),e._v(" "),n("li",[e._v("Local .zip, like "),n("code",[e._v("/home/work/data/plugin.zip")]),e._v(". If the plug-in is only used for FE, it needs to be deployed in the same directory of all FE nodes. Otherwise, it needs to be deployed on all FE and BE nodes.")]),e._v(" "),n("li",[e._v("Local directory, like "),n("code",[e._v("/home/work/data/plugin")]),e._v(", .zip decompressed folder. If the plug-in is only used for FE, it needs to be deployed in the same directory of all FE nodes. Otherwise, it needs to be deployed on all FE and BE nodes.")])]),e._v(" "),n("p",[e._v("Note: Need to ensure that the plugin .zip file is available in the life cycle of doris!")]),e._v(" "),n("h2",{attrs:{id:"install-and-uninstall"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install-and-uninstall"}},[e._v("#")]),e._v(" Install and Uninstall")]),e._v(" "),n("p",[e._v("Install and uninstall the plugin through the install/uninstall statements. More details, see "),n("code",[e._v("HELP INSTALL PLUGIN;")]),e._v(" "),n("code",[e._v("HELP IUNNSTALL PLUGIN;")]),e._v(" "),n("code",[e._v("HELP SHOW PLUGINS;")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('mysql> install plugin from "/home/users/doris/auditloader.zip";\nQuery OK, 0 rows affected (0.09 sec)\n\nmysql> show plugins\\G\n*************************** 1. row ***************************\n       Name: auditloader\n       Type: AUDIT\nDescription: load audit log to olap load, and user can view the statistic of queries\n    Version: 0.12.0\nJavaVersion: 1.8.31\n  ClassName: AuditLoaderPlugin\n     SoName: NULL\n    Sources: /home/users/doris/auditloader.zip\n     Status: INSTALLED\n Properties: {}\n*************************** 2. row ***************************\n       Name: AuditLogBuilder\n       Type: AUDIT\nDescription: builtin audit logger\n    Version: 0.12.0\nJavaVersion: 1.8.31\n  ClassName: org.apache.doris.qe.AuditLogBuilder\n     SoName: NULL\n    Sources: Builtin\n     Status: INSTALLED\n Properties: {}   \n2 rows in set (0.00 sec)\n\nmysql> uninstall plugin auditloader;\nQuery OK, 0 rows affected (0.05 sec)\n\nmysql> show plugins;\nEmpty set (0.00 sec)\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br"),n("span",{staticClass:"line-number"},[e._v("29")]),n("br"),n("span",{staticClass:"line-number"},[e._v("30")]),n("br"),n("span",{staticClass:"line-number"},[e._v("31")]),n("br"),n("span",{staticClass:"line-number"},[e._v("32")]),n("br"),n("span",{staticClass:"line-number"},[e._v("33")]),n("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);