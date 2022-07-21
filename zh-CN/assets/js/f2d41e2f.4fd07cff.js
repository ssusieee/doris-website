"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[71093],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60627:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={title:"FE \u5f00\u53d1\u73af\u5883\u642d\u5efa - IntelliJ IDEA",language:"zh-CN"},o=void 0,l={unversionedId:"developer-guide/fe-idea-dev",id:"developer-guide/fe-idea-dev",title:"FE \u5f00\u53d1\u73af\u5883\u642d\u5efa - IntelliJ IDEA",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/developer-guide/fe-idea-dev.md",sourceDirName:"developer-guide",slug:"/developer-guide/fe-idea-dev",permalink:"/zh-CN/community/developer-guide/fe-idea-dev",draft:!1,tags:[],version:"current",frontMatter:{title:"FE \u5f00\u53d1\u73af\u5883\u642d\u5efa - IntelliJ IDEA",language:"zh-CN"},sidebar:"community",previous:{title:"FE \u5f00\u53d1\u73af\u5883\u642d\u5efa - Eclipse",permalink:"/zh-CN/community/developer-guide/fe-eclipse-dev"},next:{title:"FE \u5f00\u53d1\u73af\u5883\u642d\u5efa - Visual Studio Code (VSCode)",permalink:"/zh-CN/community/developer-guide/fe-vscode-dev"}},p={},s=[{value:"1.\u73af\u5883\u51c6\u5907",id:"1\u73af\u5883\u51c6\u5907",level:2},{value:"2.\u8c03\u8bd5",id:"2\u8c03\u8bd5",level:2},{value:"3.\u914d\u7f6econf/fe.conf",id:"3\u914d\u7f6econffeconf",level:2},{value:"4.\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",id:"4\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",level:2},{value:"5.\u914d\u7f6eoptions",id:"5\u914d\u7f6eoptions",level:2},{value:"6.\u542f\u52a8fe",id:"6\u542f\u52a8fe",level:2}],d={toc:s};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4f7f\u7528-intellij-idea-\u642d\u5efa-fe-\u5f00\u53d1\u73af\u5883"},"\u4f7f\u7528 IntelliJ IDEA \u642d\u5efa FE \u5f00\u53d1\u73af\u5883"),(0,i.kt)("h2",{id:"1\u73af\u5883\u51c6\u5907"},"1.\u73af\u5883\u51c6\u5907"),(0,i.kt)("p",null,"JDK1.8+, IntelliJ IDEA"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4ece ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris.git"},"https://github.com/apache/incubator-doris.git")," \u4e0b\u8f7d\u6e90\u7801\u5230\u672c\u5730")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4f7f\u7528IntelliJ IDEA \u6253\u5f00\u4ee3\u7801\u6839\u76ee\u5f55")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u4ec5\u8fdb\u884cfe\u5f00\u53d1\u800c\u6ca1\u6709\u7f16\u8bd1\u8fc7thirdparty\uff0c\u5219\u9700\u8981\u5b89\u88c5thrift\uff0c\u5e76\u5c06thrift \u590d\u5236\u6216\u8005\u8fde\u63a5\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"thirdparty/installed/bin")," \u76ee\u5f55\u4e0b"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"\u5b89\u88c5 `thrift` 0.13.0 \u7248\u672c(\u6ce8\u610f\uff1a`Doris` 0.15 \u548c\u6700\u65b0\u7684\u7248\u672c\u57fa\u4e8e `thrift` 0.13.0 \u6784\u5efa, \u4e4b\u524d\u7684\u7248\u672c\u4f9d\u7136\u4f7f\u7528`thrift` 0.9.3 \u6784\u5efa)\n\nWindows: \n   1. \u4e0b\u8f7d\uff1a`http://archive.apache.org/dist/thrift/0.13.0/thrift-0.13.0.exe`\n   2. \u62f7\u8d1d\uff1a\u5c06\u6587\u4ef6\u62f7\u8d1d\u81f3 `./thirdparty/installed/bin`\n\nMacOS: \n   1. \u4e0b\u8f7d\uff1a`brew install thrift@0.13.0`\n   2. \u5efa\u7acb\u8f6f\u94fe\u63a5\uff1a \n      `mkdir -p ./thirdparty/installed/bin`\n      # ARM\u67b6\u6784macOS\n      `ln -s /opt/homebrew/Cellar/thrift@0.13.0/0.13.0/bin/thrift ./thirdparty/installed/bin/thrift`\n      # Intel\u67b6\u6784macOS\n      `ln -s /usr/local/Cellar/thrift@0.13.0/0.13.0/bin/thrift ./thirdparty/installed/bin/thrift`\n\n\u6ce8\uff1aMacOS\u6267\u884c `brew install thrift@0.13.0` \u53ef\u80fd\u4f1a\u62a5\u627e\u4e0d\u5230\u7248\u672c\u7684\u9519\u8bef\uff0c\u89e3\u51b3\u65b9\u6cd5\u5982\u4e0b\uff0c\u5728\u7ec8\u7aef\u6267\u884c\uff1a\n   1. `brew tap-new $USER/local-tap`\n   2. `brew extract --version='0.13.0' thrift $USER/local-tap`\n   3. `brew install thrift@0.13.0`\n\u53c2\u8003\u94fe\u63a5: `https://gist.github.com/tonydeng/02e571f273d6cce4230dc8d5f394493c`\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u662fMac \u6216\u8005 Linux \u73af\u5883 \u53ef\u4ee5\u901a\u8fc7 \u5982\u4e0b\u547d\u4ee4\u751f\u6210\u81ea\u52a8\u751f\u6210\u4ee3\u7801\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"cd fe\nmvn generate-sources\n")),(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u51fa\u73b0\u9519\u8bef\uff0c\u5219\u6267\u884c\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"cd fe && mvn clean install -DskipTests\n")))),(0,i.kt)("p",null,"\u6216\u8005\u901a\u8fc7\u56fe\u5f62\u754c\u9762\u8fd0\u884c maven \u547d\u4ee4\u751f\u6210"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(21526).Z,width:"794",height:"790"})),(0,i.kt)("p",null,"\u5982\u679c\u4f7f\u7528windows\u73af\u5883\u53ef\u80fd\u4f1a\u6709make\u547d\u4ee4\u548csh\u811a\u672c\u65e0\u6cd5\u6267\u884c\u7684\u60c5\u51b5 \u53ef\u4ee5\u901a\u8fc7\u62f7\u8d1dlinux\u4e0a\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"fe/fe-core/target/generated-sources")," \u76ee\u5f55\u62f7\u8d1d\u5230\u76f8\u5e94\u7684\u76ee\u5f55\u7684\u65b9\u5f0f\u5b9e\u73b0\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7docker \u955c\u50cf\u6302\u8f7d\u672c\u5730\u76ee\u5f55\u4e4b\u540e\uff0c\u5728docker \u5185\u90e8\u751f\u6210\u81ea\u52a8\u751f\u6210\u4ee3\u7801\uff0c\u53ef\u4ee5\u53c2\u7167\u7f16\u8bd1\u4e00\u8282"),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u8fd8\u672a\u751f\u6210\u8fc7help\u6587\u6863\uff0c\u9700\u8981\u8df3\u8f6c\u5230docs\u76ee\u5f55\uff0c\u6267\u884c",(0,i.kt)("inlineCode",{parentName:"li"},"sh build_help_zip.sh"),"\uff0c\n\u7136\u540e\u5c06build\u4e2d\u7684help-resource.zip\u62f7\u8d1d\u5230fe/fe-core/target/classes\u4e2d")),(0,i.kt)("h2",{id:"2\u8c03\u8bd5"},"2.\u8c03\u8bd5"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u7528idea\u5bfc\u5165fe\u5de5\u7a0b")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728fe\u76ee\u5f55\u4e0b\u521b\u5efa\u4e0b\u9762\u7ea2\u6846\u6807\u51fa\u7684\u76ee\u5f55\uff08\u5728\u65b0\u7248\u672c\u4e2d\u8be5\u76ee\u5f55\u53ef\u80fd\u5b58\u5728\uff0c\u5982\u5b58\u5728\u5219\u8df3\u8fc7\uff0c\u5426\u5219\u521b\u5efa\uff09"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(93085).Z,width:"1077",height:"879"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u7f16\u8bd1",(0,i.kt)("inlineCode",{parentName:"li"},"ui"),"\u9879\u76ee\uff0c\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"ui/dist/"),"\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u62f7\u8d1d\u5230",(0,i.kt)("inlineCode",{parentName:"li"},"webroot"),"\u4e2d\uff08\u5982\u679c\u4f60\u4e0d\u9700\u8981\u770b",(0,i.kt)("inlineCode",{parentName:"li"},"Doris")," UI\uff0c\u8fd9\u4e00\u6b65\u53ef\u4ee5\u8df3\u8fc7\uff09")),(0,i.kt)("h2",{id:"3\u914d\u7f6econffeconf"},"3.\u914d\u7f6econf/fe.conf"),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u6211\u81ea\u5df1\u7684\u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u8981\u8fdb\u884c\u4fee\u6539(\u6ce8\u610f\uff1a\u5982\u679c\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"Mac"),"\u5f00\u53d1\uff0c\u7531\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"docker for Mac"),"\u4e0d\u652f\u6301",(0,i.kt)("inlineCode",{parentName:"p"},"Host"),"\u6a21\u5f0f\uff0c\u9700\u8981\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"-p"),"\u65b9\u5f0f\u66b4\u9732",(0,i.kt)("inlineCode",{parentName:"p"},"be"),"\u7aef\u53e3\uff0c\u540c\u65f6",(0,i.kt)("inlineCode",{parentName:"p"},"fe.conf"),"\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"priority_networks"),"\u914d\u7f6e\u4e3a\u5bb9\u5668\u5185\u53ef\u8bbf\u95ee\u7684Ip\uff0c\u4f8b\u5982WIFI\u7684Ip)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'# Licensed to the Apache Software Foundation (ASF) under one\n# or more contributor license agreements.  See the NOTICE file\n# distributed with this work for additional information\n# regarding copyright ownership.  The ASF licenses this file\n# to you under the Apache License, Version 2.0 (the\n# "License"); you may not use this file except in compliance\n# with the License.  You may obtain a copy of the License at\n#\n#   http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing,\n# software distributed under the License is distributed on an\n# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n# KIND, either express or implied.  See the License for the\n# specific language governing permissions and limitations\n# under the License.\n\n#####################################################################\n## The uppercase properties are read and exported by bin/start_fe.sh.\n## To see all Frontend configurations,\n## see fe/src/org/apache/doris/common/Config.java\n#####################################################################\n\n# the output dir of stderr and stdout \nLOG_DIR = ${DORIS_HOME}/log\n\nDATE = `date +%Y%m%d-%H%M%S`\nJAVA_OPTS="-Xmx2048m -XX:+UseMembar -XX:SurvivorRatio=8 -XX:MaxTenuringThreshold=7 -XX:+PrintGCDateStamps -XX:+PrintGCDetails -XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:+CMSClassUnloadingEnabled -XX:-CMSParallelRemarkEnabled -XX:CMSInitiatingOccupancyFraction=80 -XX:SoftRefLRUPolicyMSPerMB=0 -Xloggc:$DORIS_HOME/log/fe.gc.log.$DATE"\n\n# For jdk 9+, this JAVA_OPTS will be used as default JVM options\nJAVA_OPTS_FOR_JDK_9="-Xmx4096m -XX:SurvivorRatio=8 -XX:MaxTenuringThreshold=7 -XX:+CMSClassUnloadingEnabled -XX:-CMSParallelRemarkEnabled -XX:CMSInitiatingOccupancyFraction=80 -XX:SoftRefLRUPolicyMSPerMB=0 -Xlog:gc*:$DORIS_HOME/log/fe.gc.log.$DATE:time"\n\n##\n## the lowercase properties are read by main program.\n##\n\n# INFO, WARN, ERROR, FATAL\nsys_log_level = INFO\n\n# store metadata, create it if it is not exist.\n# Default value is ${DORIS_HOME}/doris-meta\n# meta_dir = ${DORIS_HOME}/doris-meta\n\nhttp_port = 8030\nrpc_port = 9020\nquery_port = 9030\nedit_log_port = 9010\nmysql_service_nio_enabled = true\n\n# Choose one if there are more than one ip except loopback address. \n# Note that there should at most one ip match this list.\n# If no ip match this rule, will choose one randomly.\n# use CIDR format, e.g. 10.10.10.0/24\n# Default value is empty.\n# priority_networks = 10.10.10.0/24;192.168.0.0/16\n\n# Advanced configurations \n# log_roll_size_mb = 1024\n# sys_log_dir = ${DORIS_HOME}/log\n# sys_log_roll_num = 10\n# sys_log_verbose_modules = \n# audit_log_dir = ${DORIS_HOME}/log\n# audit_log_modules = slow_query, query\n# audit_log_roll_num = 10\n# meta_delay_toleration_second = 10\n# qe_max_connection = 1024\n# max_conn_per_user = 100\n# qe_query_timeout_second = 300\n# qe_slow_log_ms = 5000\n\n')),(0,i.kt)("h2",{id:"4\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf"},"4.\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf"),(0,i.kt)("p",null,"\u5728IDEA\u4e2d\u8bbe\u7f6e\u8fd0\u884c\u73af\u5883\u53d8\u91cf"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(92497).Z,width:"2435",height:"1400"})),(0,i.kt)("h2",{id:"5\u914d\u7f6eoptions"},"5.\u914d\u7f6eoptions"),(0,i.kt)("p",null,"\u7531\u4e8e\u90e8\u5206\u4f9d\u8d56\u4f7f\u7528\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"provided"),"\uff0cidea\u9700\u8981\u505a\u4e0b\u7279\u6b8a\u914d\u7f6e\uff0c\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"Run/Debug Configurations"),"\u8bbe\u7f6e\u4e2d\u70b9\u51fb\u53f3\u4fa7",(0,i.kt)("inlineCode",{parentName:"p"},"Modify options"),"\uff0c\u52fe\u9009",(0,i.kt)("inlineCode",{parentName:"p"},'Add dependencies with "provided" scope to classpath'),"\u9009\u9879"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(43846).Z,width:"1006",height:"964"})),(0,i.kt)("h2",{id:"6\u542f\u52a8fe"},"6.\u542f\u52a8fe"),(0,i.kt)("p",null,"\u4e0b\u9762\u4f60\u5c31\u53ef\u4ee5\u6109\u5feb\u7684\u542f\u52a8\uff0c\u8c03\u8bd5\u4f60\u7684FE\u4e86"))}c.isMDXComponent=!0},93085:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/DEBUG4-7c5b94bf36d5b38026f522c90c4d964c.png"},92497:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/DEBUG5-48854eb83a0abb0802393856c6eaf770.png"},21526:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gen_code-eb0ee5102336c3ea5da6c7e9e481180b.png"},43846:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/idea_options-24ec83b18a96c669b6e525cc31bde067.png"}}]);