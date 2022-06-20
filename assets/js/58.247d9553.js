(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{686:function(t,e,o){"use strict";o.r(e);var a=o(15),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"c-code-formatting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#c-code-formatting"}},[t._v("#")]),t._v(" C++ code formatting")]),t._v(" "),o("p",[t._v("Doris uses clang-format for code formatting, and provides a package script in the build-support directory:")]),t._v(" "),o("ul",[o("li",[o("p",[o("code",[t._v("clang-format.sh")]),t._v(".")]),t._v(" "),o("p",[t._v("Format the C/C++ code in the "),o("code",[t._v("be/src")]),t._v(" and "),o("code",[t._v("be/test")]),t._v(" directories.")])]),t._v(" "),o("li",[o("p",[o("code",[t._v("check-format.sh")]),t._v(".")]),t._v(" "),o("p",[t._v("Check the C/C++ code format in the "),o("code",[t._v("be/src")]),t._v(" and "),o("code",[t._v("be/test")]),t._v(" directories, and output diff, but the content of the file will not be modified.")])])]),t._v(" "),o("h2",{attrs:{id:"code-style-customization"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#code-style-customization"}},[t._v("#")]),t._v(" Code style customization")]),t._v(" "),o("p",[t._v("The code style of Doris is slightly modified on the basis of Google Style and is customized as a "),o("code",[t._v(".clang-format")]),t._v(" file located in the root directory of Doris.")]),t._v(" "),o("p",[t._v("Currently, the "),o("code",[t._v(".clang-format")]),t._v(" configuration file is adapted to versions above clang-format-13.0.1.")]),t._v(" "),o("p",[t._v("The code that you do not want to be formatted is recorded in the "),o("code",[t._v(".clang-format-ignore")]),t._v(" file. These codes usually come from third-party code bases, and it is recommended to keep the original code style.")]),t._v(" "),o("h2",{attrs:{id:"environmental-preparation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#environmental-preparation"}},[t._v("#")]),t._v(" Environmental preparation")]),t._v(" "),o("p",[t._v("You need to download and install clang-format, or you can use the clang-format plug-in provided by IDE or Editor, as described below.")]),t._v(" "),o("h3",{attrs:{id:"download-and-install-clang-format"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#download-and-install-clang-format"}},[t._v("#")]),t._v(" Download and install clang-format")]),t._v(" "),o("p",[t._v("It is recommended to use NPM to install clang-format 14 (different versions of clang-format may produce different code formats, it is recommended to use version 14):")]),t._v(" "),o("p",[o("code",[t._v("npm install clang-format@1.6.0")])]),t._v(" "),o("p",[t._v("Ubuntu: "),o("code",[t._v("apt-get install clang-format")])]),t._v(" "),o("p",[t._v("The current version is 10.0, you can also specify the old version, for example: "),o("code",[t._v("apt-get install clang-format-9")]),t._v(". It is recommended to compile version 14.0 from source code.")]),t._v(" "),o("p",[t._v("Mac: "),o("code",[t._v("brew install clang-format")])]),t._v(" "),o("p",[t._v("Centos 7:")]),t._v(" "),o("p",[t._v("The version of clang-format installed by centos yum is too old and supports too few StyleOptions. It is recommended to compile version 14.0 from source code.")]),t._v(" "),o("p",[t._v("LDB toolchain:")]),t._v(" "),o("p",[t._v("If you are using "),o("RouterLink",{attrs:{to:"/docs/install/source-install/compilation-with-ldb-toolchain.html"}},[t._v("LDB toolchain")]),t._v(",\nthe latest version (>= v0.11) of "),o("a",{attrs:{href:"https://github.com/amosbird/ldb_toolchain_gen/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("LDB toolchain"),o("OutboundLink")],1),t._v(" has already included clang-format with 13.0.1 version.")],1),t._v(" "),o("h3",{attrs:{id:"clang-format-plugin"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#clang-format-plugin"}},[t._v("#")]),t._v(" clang-format plugin")]),t._v(" "),o("p",[t._v('Clion IDE can use the plug-in "ClangFormat", search and download in '),o("code",[t._v("File->Setting->Plugins")]),t._v(". But the version can’t match\nThe version of the clang-format program matches, judging from the supported StyleOption, it should be lower than clang-format-9.0.")]),t._v(" "),o("h2",{attrs:{id:"how-to-use"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[t._v("#")]),t._v(" How to use")]),t._v(" "),o("h3",{attrs:{id:"command-line-operation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#command-line-operation"}},[t._v("#")]),t._v(" Command line operation")]),t._v(" "),o("p",[t._v("cd to the root directory of Doris, and then execute the following command:")]),t._v(" "),o("p",[o("code",[t._v("build-support/clang-format.sh")])]),t._v(" "),o("blockquote",[o("p",[t._v("Note: The "),o("code",[t._v("clang-format.sh")]),t._v(" script requires python 3 to be installed on your machine")])]),t._v(" "),o("h3",{attrs:{id:"use-clang-format-in-ide-or-editor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#use-clang-format-in-ide-or-editor"}},[t._v("#")]),t._v(" Use clang-format in IDE or Editor")]),t._v(" "),o("h4",{attrs:{id:"clion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#clion"}},[t._v("#")]),t._v(" Clion")]),t._v(" "),o("p",[t._v("If Clion uses a plug-in, just click "),o("code",[t._v("Reformat Code")]),t._v(".")]),t._v(" "),o("h4",{attrs:{id:"vs-code"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vs-code"}},[t._v("#")]),t._v(" VS Code")]),t._v(" "),o("p",[t._v("VS Code needs to install the extension Clang-Format, but you need to provide the location of the clang-format execution program.")]),t._v(" "),o("p",[t._v('Open the VS Code configuration page, directly search for "clang_format", and fill in')]),t._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v('"clang_format_path": "$clang-format path$",\n"clang_format_style": "file"\n')])]),t._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[t._v("1")]),o("br"),o("span",{staticClass:"line-number"},[t._v("2")]),o("br")])]),o("p",[t._v("Then, right-click on "),o("code",[t._v("Format Document")]),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);