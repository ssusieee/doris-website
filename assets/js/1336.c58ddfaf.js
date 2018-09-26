(window.webpackJsonp=window.webpackJsonp||[]).push([[1336],{1961:function(e,t,a){"use strict";a.r(t);var s=a(15),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"operation-and-maintenance-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operation-and-maintenance-error"}},[e._v("#")]),e._v(" Operation and Maintenance Error")]),e._v(" "),a("p",[e._v("This document is mainly used to record the common problems of operation and maintenance during the use of Doris. It will be updated from time to time.")]),e._v(" "),a("h3",{attrs:{id:"q1-why-is-there-always-some-tablet-left-when-i-log-off-the-be-node-through-decommission"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q1-why-is-there-always-some-tablet-left-when-i-log-off-the-be-node-through-decommission"}},[e._v("#")]),e._v(" Q1. Why is there always some tablet left when I log off the BE node through DECOMMISSION?")]),e._v(" "),a("p",[e._v("During the offline process, use show backends to view the tabletNum of the offline node, and you will observe that the number of tabletNum is decreasing, indicating that data shards are being migrated from this node. When the number is reduced to 0, the system will automatically delete the node. But in some cases, tabletNum will not change after it drops to a certain value. This is usually possible for two reasons:")]),e._v(" "),a("ol",[a("li",[e._v("The tablets belong to the table, partition, or materialized view that was just dropped. Objects that have just been deleted remain in the recycle bin. The offline logic will not process these shards. The time an object resides in the recycle bin can be modified by modifying the FE configuration parameter catalog_trash_expire_second. These tablets are disposed of when the object is removed from the recycle bin.")]),e._v(" "),a("li",[e._v('There is a problem with the migration task for these tablets. At this point, you need to view the errors of specific tasks through show proc "/cluster_balance".')])]),e._v(" "),a("p",[e._v('For the above situation, you can first check whether there are unhealthy shards in the cluster through show proc "/statistic". If it is 0, you can delete the BE directly through the drop backend statement. Otherwise, you also need to check the replicas of unhealthy shards in detail.')]),e._v(" "),a("h3",{attrs:{id:"q2-how-should-priorty-network-be-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q2-how-should-priorty-network-be-set"}},[e._v("#")]),e._v(" Q2. How should priorty_network be set?")]),e._v(" "),a("p",[e._v("priorty_network is a configuration parameter for both FE and BE. This parameter is mainly used to help the system select the correct network card IP as its own IP. It is recommended to explicitly set this parameter in any case to prevent the problem of incorrect IP selection caused by adding new network cards to subsequent machines.")]),e._v(" "),a("p",[e._v("The value of priorty_network is expressed in CIDR format. Divided into two parts, the first part is the IP address in dotted decimal, and the second part is a prefix length. For example 10.168.1.0/8 will match all 10.xx.xx.xx IP addresses, and 10.168.1.0/16 will match all 10.168.xx.xx IP addresses.")]),e._v(" "),a("p",[e._v("The reason why the CIDR format is used instead of specifying a specific IP directly is to ensure that all nodes can use a uniform configuration value. For example, there are two nodes: 10.168.10.1 and 10.168.10.2, then we can use 10.168.10.0/24 as the value of priorty_network.")]),e._v(" "),a("h3",{attrs:{id:"q3-what-are-the-master-follower-and-observer-of-fe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q3-what-are-the-master-follower-and-observer-of-fe"}},[e._v("#")]),e._v(" Q3. What are the Master, Follower and Observer of FE?")]),e._v(" "),a("p",[e._v("First of all, make it clear that FE has only two roles: Follower and Observer. The Master is just an FE selected from a group of Follower nodes. Master can be regarded as a special kind of Follower. So when we were asked how many FEs a cluster had and what roles they were, the correct answer should be the number of all FE nodes, the number of Follower roles and the number of Observer roles.")]),e._v(" "),a("p",[e._v("All FE nodes of the Follower role will form an optional group, similar to the group concept in the Poxas consensus protocol. A Follower will be elected as the Master in the group. When the Master hangs up, a new Follower will be automatically selected as the Master. The Observer will not participate in the election, so the Observer will not be called Master.")]),e._v(" "),a("p",[e._v("A metadata log needs to be successfully written in most Follower nodes to be considered successful. For example, if there are 3 FEs, only 2 can be successfully written. This is why the number of Follower roles needs to be an odd number.")]),e._v(" "),a("p",[e._v("The role of Observer is the same as the meaning of this word. It only acts as an observer to synchronize the metadata logs that have been successfully written, and provides metadata reading services. He will not be involved in the logic of the majority writing.")]),e._v(" "),a("p",[e._v("Typically, 1 Follower + 2 Observer or 3 Follower + N Observer can be deployed. The former is simple to operate and maintain, and there is almost no consistency agreement between followers to cause such complex error situations (most of Baidu's internal clusters use this method). The latter can ensure the high availability of metadata writing. If it is a high concurrent query scenario, Observer can be added appropriately.")]),e._v(" "),a("h3",{attrs:{id:"q4-a-new-disk-is-added-to-the-node-why-is-the-data-not-balanced-to-the-new-disk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q4-a-new-disk-is-added-to-the-node-why-is-the-data-not-balanced-to-the-new-disk"}},[e._v("#")]),e._v(" Q4. A new disk is added to the node, why is the data not balanced to the new disk?")]),e._v(" "),a("p",[e._v("The current Doris balancing strategy is based on nodes. That is to say, the cluster load is judged according to the overall load index of the node (number of shards and total disk utilization). And migrate data shards from high-load nodes to low-load nodes. If each node adds a disk, from the overall point of view of the node, the load does not change, so the balancing logic cannot be triggered.")]),e._v(" "),a("p",[e._v("In addition, Doris currently does not support balancing operations between disks within a single node. Therefore, after adding a new disk, the data will not be balanced to the new disk.")]),e._v(" "),a("p",[e._v("However, when data is migrated between nodes, Doris takes the disk into account. For example, when a shard is migrated from node A to node B, the disk with low disk space utilization in node B will be preferentially selected.")]),e._v(" "),a("p",[e._v("Here we provide 3 ways to solve this problem:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Rebuild the new table")]),e._v(" "),a("p",[e._v("Create a new table through the create table like statement, and then use the insert into select method to synchronize data from the old table to the new table. Because when a new table is created, the data shards of the new table will be distributed in the new disk, so the data will also be written to the new disk. This method is suitable for situations where the amount of data is small (within tens of GB).")])]),e._v(" "),a("li",[a("p",[e._v("Through the Decommission command")]),e._v(" "),a("p",[e._v('The decommission command is used to safely decommission a BE node. This command will first migrate the data shards on the node to other nodes, and then delete the node. As mentioned earlier, during data migration, the disk with low disk utilization will be prioritized, so this method can "force" the data to be migrated to the disks of other nodes. When the data migration is completed, we cancel the decommission operation, so that the data will be rebalanced back to this node. When we perform the above steps on all BE nodes, the data will be evenly distributed on all disks of all nodes.')]),e._v(" "),a("p",[e._v("Note that before executing the decommission command, execute the following command to avoid the node being deleted after being offline.")]),e._v(" "),a("p",[a("code",[e._v('admin set frontend config("drop_backend_after_decommission" = "false");')])])]),e._v(" "),a("li",[a("p",[e._v("Manually migrate data using the API")]),e._v(" "),a("p",[e._v("Doris provides "),a("RouterLink",{attrs:{to:"/docs/admin-manual/http-actions/tablet-migration-action.html"}},[e._v("HTTP API")]),e._v(", which can manually specify the migration of data shards on one disk to another disk.")],1)])]),e._v(" "),a("h3",{attrs:{id:"q5-how-to-read-fe-be-logs-correctly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q5-how-to-read-fe-be-logs-correctly"}},[e._v("#")]),e._v(" Q5. How to read FE/BE logs correctly?")]),e._v(" "),a("p",[e._v("In many cases, we need to troubleshoot problems through logs. The format and viewing method of the FE/BE log are described here.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("FE")]),e._v(" "),a("p",[e._v("FE logs mainly include:")]),e._v(" "),a("ul",[a("li",[e._v("fe.log: main log. Includes everything except fe.out.")]),e._v(" "),a("li",[e._v("fe.warn.log: A subset of the main log, only WARN and ERROR level logs are logged.")]),e._v(" "),a("li",[e._v("fe.out: log for standard/error output (stdout and stderr).")]),e._v(" "),a("li",[e._v("fe.audit.log: Audit log, which records all SQL requests received by this FE.")])]),e._v(" "),a("p",[e._v("A typical FE log is as follows:")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("2021-09-16 23:13:22,502 INFO (tablet scheduler|43) [BeLoadRebalancer.selectAlternativeTabletsForCluster():85] cluster is balance: default_cluster with medium: HDD.skip\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[a("code",[e._v("2021-09-16 23:13:22,502")]),e._v(": log time.")]),e._v(" "),a("li",[a("code",[e._v("INFO: log level, default is INFO")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("(tablet scheduler|43)")]),e._v(": thread name and thread id. Through the thread id, you can view the context information of this thread and check what happened in this thread.")]),e._v(" "),a("li",[a("code",[e._v("BeLoadRebalancer.selectAlternativeTabletsForCluster():85")]),e._v(": class name, method name and code line number.")]),e._v(" "),a("li",[a("code",[e._v("cluster is balance xxx")]),e._v(": log content.")])]),e._v(" "),a("p",[e._v("Usually, we mainly view the fe.log log. In special cases, some logs may be output to fe.out.")])]),e._v(" "),a("li",[a("p",[e._v("BE")]),e._v(" "),a("p",[e._v("BE logs mainly include:")]),e._v(" "),a("ul",[a("li",[e._v("be.INFO: main log. This is actually a soft link, connected to the latest be.INFO.xxxx.")]),e._v(" "),a("li",[e._v("be.WARNING: A subset of the main log, only WARN and FATAL level logs are logged. This is actually a soft link, connected to the latest be.WARN.xxxx.")]),e._v(" "),a("li",[e._v("be.out: log for standard/error output (stdout and stderr).")])]),e._v(" "),a("p",[e._v("A typical BE log is as follows:")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("I0916 23:21:22.038795 28087 task_worker_pool.cpp:1594] finish report TASK. master host: 10.10.10.10, port: 9222\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[a("code",[e._v("I0916 23:21:22.038795")]),e._v(": log level and datetime. The capital letter I means INFO, W means WARN, and F means FATAL.")]),e._v(" "),a("li",[a("code",[e._v("28087")]),e._v(": thread id. Through the thread id, you can view the context information of this thread and check what happened in this thread.")]),e._v(" "),a("li",[a("code",[e._v("task_worker_pool.cpp:1594")]),e._v(": code file and line number.")]),e._v(" "),a("li",[a("code",[e._v("finish report TASK xxx")]),e._v(": log content.")])]),e._v(" "),a("p",[e._v("Usually we mainly look at the be.INFO log. In special cases, such as BE downtime, you need to check be.out.")])])]),e._v(" "),a("h3",{attrs:{id:"q6-how-to-troubleshoot-the-fe-be-node-is-down"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q6-how-to-troubleshoot-the-fe-be-node-is-down"}},[e._v("#")]),e._v(" Q6. How to troubleshoot the FE/BE node is down?")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("BE")]),e._v(" "),a("p",[e._v("The BE process is a C/C++ process, which may hang due to some program bugs (memory out of bounds, illegal address access, etc.) or Out Of Memory (OOM). At this point, we can check the cause of the error through the following steps:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("View be.out")]),e._v(" "),a("p",[e._v("The BE process realizes that when the program exits due to an exception, it will print the current error stack to be.out (note that it is be.out, not be.INFO or be.WARNING). Through the error stack, you can usually get a rough idea of where the program went wrong.")]),e._v(" "),a("p",[e._v("Note that if there is an error stack in be.out, it is usually due to a program bug, and ordinary users may not be able to solve it by themselves. Welcome to the WeChat group, github discussion or dev mail group for help, and post the corresponding error stack, so that you can quickly Troubleshoot problems.")])]),e._v(" "),a("li",[a("p",[e._v("dmesg")]),e._v(" "),a("p",[e._v("If there is no stack information in be.out, the probability is that OOM was forcibly killed by the system. At this time, you can use the dmesg -T command to view the Linux system log. If a log similar to Memory cgroup out of memory: Kill process 7187 (palo_be) score 1007 or sacrifice child appears at the end, it means that it is caused by OOM.")]),e._v(" "),a("p",[e._v("Memory problems can have many reasons, such as large queries, imports, compactions, etc. Doris is also constantly optimizing memory usage. Welcome to the WeChat group, github discussion or dev mail group for help.")])]),e._v(" "),a("li",[a("p",[e._v("Check whether there are logs beginning with F in be.INFO.")]),e._v(" "),a("p",[e._v("Logs starting with F are Fatal logs. For example, F0916 , indicating the Fatal log on September 16th. Fatal logs usually indicate a program assertion error, and an assertion error will directly cause the process to exit (indicating a bug in the program). Welcome to the WeChat group, github discussion or dev mail group for help.")])]),e._v(" "),a("li",[a("p",[e._v("Minidump(removed)")]),e._v(" "),a("p",[e._v("Mindump is a function added after Doris version 0.15. For details, please refer to "),a("a",{attrs:{href:"https://doris.apache.org/zh-CN/developer-guide/minidump.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("document"),a("OutboundLink")],1),e._v(".")])])])]),e._v(" "),a("li",[a("p",[e._v("FE")]),e._v(" "),a("p",[e._v("FE is a java process, and the robustness is due to the C/C++ program. Usually the reason for FE to hang up may be OOM (Out-of-Memory) or metadata write failure. These errors usually have an error stack in fe.log or fe.out. Further investigation is required based on the error stack information.")])])]),e._v(" "),a("h3",{attrs:{id:"q7-about-the-configuration-of-data-directory-ssd-and-hdd-create-table-encounter-error-failed-to-find-enough-host-with-storage-medium-and-tag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q7-about-the-configuration-of-data-directory-ssd-and-hdd-create-table-encounter-error-failed-to-find-enough-host-with-storage-medium-and-tag"}},[e._v("#")]),e._v(" Q7. About the configuration of data directory SSD and HDD, create table encounter error "),a("code",[e._v("Failed to find enough host with storage medium and tag")])]),e._v(" "),a("p",[e._v("Doris supports one BE node to configure multiple storage paths. Usually, one storage path can be configured for each disk. At the same time, Doris supports storage media properties that specify paths, such as SSD or HDD. SSD stands for high-speed storage device and HDD stands for low-speed storage device.")]),e._v(" "),a("p",[e._v("If doris cluster has only one storage medium type, the practice is not specify storage medium in be.conf configuration file. "),a("code",[e._v("Failed to find enough host with storage medium and tag")]),e._v(", generally we got this error for only config SSD medium in be.conf, but default parameter "),a("code",[e._v("default_storage_medium")]),e._v(" in fe is HDD, so there is no HDD storage medium in cluster. There are several ways to fix this, one is modify the parameter in fe.conf and restart fe; the other way is take the SSD config in be.conf away,and the third way is add properties when create table "),a("code",[e._v('{"storage_medium" = "ssd"}')])]),e._v(" "),a("p",[e._v("By specifying the storage medium properties of the path, we can take advantage of Doris's hot and cold data partition storage function to store hot data in SSD at the partition level, while cold data is automatically transferred to HDD.")]),e._v(" "),a("p",[e._v('It should be noted that Doris does not automatically perceive the actual storage medium type of the disk where the storage path is located. This type needs to be explicitly indicated by the user in the path configuration. For example, the path "/path/to/data1.SSD" means that this path is an SSD storage medium. And "data1.SSD" is the actual directory name. Doris determines the storage media type based on the ".SSD" suffix after the directory name, not the actual storage media type. That is to say, the user can specify any path as the SSD storage medium, and Doris only recognizes the directory suffix and does not judge whether the storage medium matches. If no suffix is written, it will default to HDD.')]),e._v(" "),a("p",[e._v('In other words, ".HDD" and ".SSD" are only used to identify the "relative" "low speed" and "high speed" of the storage directory, not the actual storage medium type. Therefore, if the storage path on the BE node has no medium difference, the suffix does not need to be filled in.')]),e._v(" "),a("h3",{attrs:{id:"q8-multiple-fes-cannot-log-in-when-using-nginx-to-implement-web-ui-load-balancing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q8-multiple-fes-cannot-log-in-when-using-nginx-to-implement-web-ui-load-balancing"}},[e._v("#")]),e._v(" Q8. Multiple FEs cannot log in when using Nginx to implement web UI load balancing")]),e._v(" "),a("p",[e._v("Doris can deploy multiple FEs. When accessing the Web UI, if Nginx is used for load balancing, there will be a constant prompt to log in again because of the session problem. This problem is actually a problem of session sharing. Nginx provides centralized session sharing. The solution, here we use the ip_hash technology in nginx, ip_hash can direct the request of an ip to the same backend, so that a client and a backend under this ip can establish a stable session, ip_hash is defined in the upstream configuration:")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("upstream doris.com {\n   server 172.22.197.238:8030 weight=3;\n   server 172.22.197.239:8030 weight=4;\n   server 172.22.197.240:8030 weight=4;\n   ip_hash;\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("The complete Nginx example configuration is as follows:")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('user nginx;\nworker_processes auto;\nerror_log /var/log/nginx/error.log;\npid /run/nginx.pid;\n\n# Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.\ninclude /usr/share/nginx/modules/*.conf;\n\nevents {\n    worker_connections 1024;\n}\n\nhttp {\n    log_format main \'$remote_addr - $remote_user [$time_local] "$request" \'\n                      \'$status $body_bytes_sent "$http_referer" \'\n                      \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    access_log /var/log/nginx/access.log main;\n\n    sendfile on;\n    tcp_nopush on;\n    tcp_nodelay on;\n    keepalive_timeout 65;\n    types_hash_max_size 2048;\n\n    include /etc/nginx/mime.types;\n    default_type application/octet-stream;\n\n    # Load modular configuration files from the /etc/nginx/conf.d directory.\n    # See http://nginx.org/en/docs/ngx_core_module.html#include\n    # for more information.\n    include /etc/nginx/conf.d/*.conf;\n    #include /etc/nginx/custom/*.conf;\n    upstream doris.com {\n      server 172.22.197.238:8030 weight=3;\n      server 172.22.197.239:8030 weight=4;\n      server 172.22.197.240:8030 weight=4;\n      ip_hash;\n    }\n\n    server {\n        listen 80;\n        server_name gaia-pro-bigdata-fe02;\n        if ($request_uri ~ _load) {\n           return 307 http://$host$request_uri ;\n        }\n\n        location / {\n            proxy_pass http://doris.com;\n            proxy_redirect default;\n        }\n        error_page 500 502 503 504 /50x.html;\n        location = /50x.html {\n            root html;\n        }\n    }\n }\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br"),a("span",{staticClass:"line-number"},[e._v("39")]),a("br"),a("span",{staticClass:"line-number"},[e._v("40")]),a("br"),a("span",{staticClass:"line-number"},[e._v("41")]),a("br"),a("span",{staticClass:"line-number"},[e._v("42")]),a("br"),a("span",{staticClass:"line-number"},[e._v("43")]),a("br"),a("span",{staticClass:"line-number"},[e._v("44")]),a("br"),a("span",{staticClass:"line-number"},[e._v("45")]),a("br"),a("span",{staticClass:"line-number"},[e._v("46")]),a("br"),a("span",{staticClass:"line-number"},[e._v("47")]),a("br"),a("span",{staticClass:"line-number"},[e._v("48")]),a("br"),a("span",{staticClass:"line-number"},[e._v("49")]),a("br"),a("span",{staticClass:"line-number"},[e._v("50")]),a("br"),a("span",{staticClass:"line-number"},[e._v("51")]),a("br"),a("span",{staticClass:"line-number"},[e._v("52")]),a("br"),a("span",{staticClass:"line-number"},[e._v("53")]),a("br"),a("span",{staticClass:"line-number"},[e._v("54")]),a("br"),a("span",{staticClass:"line-number"},[e._v("55")]),a("br"),a("span",{staticClass:"line-number"},[e._v("56")]),a("br"),a("span",{staticClass:"line-number"},[e._v("57")]),a("br")])]),a("h3",{attrs:{id:"q9-fe-fails-to-start-wait-catalog-to-be-ready-fe-type-unknown-keeps-scrolling-in-fe-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q9-fe-fails-to-start-wait-catalog-to-be-ready-fe-type-unknown-keeps-scrolling-in-fe-log"}},[e._v("#")]),e._v(' Q9. FE fails to start, "wait catalog to be ready. FE type UNKNOWN" keeps scrolling in fe.log')]),e._v(" "),a("p",[e._v("There are usually two reasons for this problem:")]),e._v(" "),a("ol",[a("li",[e._v("The local IP obtained when FE is started this time is inconsistent with the last startup, usually because "),a("code",[e._v("priority_network")]),e._v(" is not set correctly, which causes FE to match the wrong IP address when it starts. Restart FE after modifying "),a("code",[e._v("priority_network")]),e._v(".")]),e._v(" "),a("li",[e._v("Most Follower FE nodes in the cluster are not started. For example, there are 3 Followers, and only one is started. At this time, at least one other FE needs to be started, so that the FE electable group can elect the Master to provide services.")])]),e._v(" "),a("p",[e._v("If the above situation cannot be solved, you can restore it according to the [metadata operation and maintenance document] (../admin-manual/maint-monitor/metadata-operation.md) in the Doris official website document.")]),e._v(" "),a("h3",{attrs:{id:"q10-lost-connection-to-mysql-server-at-reading-initial-communication-packet-system-error-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q10-lost-connection-to-mysql-server-at-reading-initial-communication-packet-system-error-0"}},[e._v("#")]),e._v(" Q10. Lost connection to MySQL server at 'reading initial communication packet', system error: 0")]),e._v(" "),a("p",[e._v("If the following problems occur when using MySQL client to connect to Doris, this is usually caused by the different jdk version used when compiling FE and the jdk version used when running FE. Note that when using docker to compile the image, the default JDK version is openjdk 11, and you can switch to openjdk 8 through the command (see the compilation documentation for details).")]),e._v(" "),a("h3",{attrs:{id:"q11-recoverytracker-should-overlap-or-follow-on-disk-last-vlsn-of-4-422-880-recoveryfirst-4-422-882-unexpected-state-fatal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q11-recoverytracker-should-overlap-or-follow-on-disk-last-vlsn-of-4-422-880-recoveryfirst-4-422-882-unexpected-state-fatal"}},[e._v("#")]),e._v(" Q11. recoveryTracker should overlap or follow on disk last VLSN of 4,422,880 recoveryFirst= 4,422,882 UNEXPECTED_STATE_FATAL")]),e._v(" "),a("p",[e._v("Sometimes when FE is restarted, the above error will occur (usually only in the case of multiple Followers). And the two values in the error differ by 2. Causes FE to fail to start.")]),e._v(" "),a("p",[e._v("This is a bug in bdbje that has not yet been resolved. In this case, you can only restore the metadata by performing the operation of failure recovery in "),a("RouterLink",{attrs:{to:"/docs/admin-manual/maint-monitor/metadata-operation.html"}},[e._v("Metadata Operation and Maintenance Documentation")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"q12-doris-compile-and-install-jdk-version-incompatibility-problem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q12-doris-compile-and-install-jdk-version-incompatibility-problem"}},[e._v("#")]),e._v(" Q12. Doris compile and install JDK version incompatibility problem")]),e._v(" "),a("p",[e._v("When compiling Doris using Docker, start FE after compiling and installing, and the exception message "),a("code",[e._v("java.lang.Suchmethoderror: java.nio.ByteBuffer.limit (I)Ljava/nio/ByteBuffer;")]),e._v(" appears, this is because the default in Docker It is JDK 11. If your installation environment is using JDK8, you need to switch the JDK environment to JDK8 in Docker. For the specific switching method, please refer to "),a("RouterLink",{attrs:{to:"/docs/install/source-install/compilation.html"}},[e._v("Compile Documentation")])],1),e._v(" "),a("h3",{attrs:{id:"q13-error-starting-fe-or-unit-test-locally-cannot-find-external-parser-table-action-table-dat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q13-error-starting-fe-or-unit-test-locally-cannot-find-external-parser-table-action-table-dat"}},[e._v("#")]),e._v(" Q13. Error starting FE or unit test locally Cannot find external parser table action_table.dat")]),e._v(" "),a("p",[e._v("Run the following command")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd fe && mvn clean install -DskipTests\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("If the same error is reported, Run the following command")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cp fe-core/target/generated-sources/cup/org/apache/doris/analysis/action_table.dat fe-core/target/classes/org/apache/doris/analysis\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"q14-doris-upgrades-to-version-1-0-or-later-and-reports-error-failed-to-set-ciphers-to-use-2026-in-mysql-appearance-via-odbc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q14-doris-upgrades-to-version-1-0-or-later-and-reports-error-failed-to-set-ciphers-to-use-2026-in-mysql-appearance-via-odbc"}},[e._v("#")]),e._v(" ### Q14. Doris upgrades to version 1.0 or later and reports error ``Failed to set ciphers to use (2026)` in MySQL appearance via ODBC.")]),e._v(" "),a("p",[e._v("This problem occurs after doris upgrades to version 1.0 and uses Connector/ODBC 8.0.x or higher. Connector/ODBC 8.0.x has multiple access methods, such as "),a("code",[e._v("/usr/lib64/libmyodbc8w.so")]),e._v(" which is installed via yum and relies on "),a("code",[e._v("libssl.so.10")]),e._v(" and "),a("code",[e._v("libcrypto.so.10")]),e._v(".\nIn doris 1.0 onwards, openssl has been upgraded to 1.1 and is built into the doris binary package, so this can lead to openssl conflicts and errors like the following")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ERROR 1105 (HY000): errCode = 2, detailMessage = driver connect Error: HY000 [MySQL][ODBC 8.0(w) Driver]SSL connection error: Failed to set ciphers to use (2026)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The solution is to use the "),a("code",[e._v("Connector/ODBC 8.0.28")]),e._v(" version of ODBC Connector and select "),a("code",[e._v("Linux - Generic")]),e._v(" in the operating system, this version of ODBC Driver uses openssl version 1,1. For details, see the "),a("RouterLink",{attrs:{to:"/docs/ecosystem/external-table/odbc-of-doris.html"}},[e._v("ODBC exterior documentation")]),e._v("\nYou can verify the version of openssl used by MySQL ODBC Driver by")],1),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ldd /path/to/libmyodbc8w.so |grep libssl.so\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("If the output contains "),a("code",[e._v("libssl.so.10")]),e._v(", there may be problems using it, if it contains "),a("code",[e._v("libssl.so.1.1")]),e._v(", it is compatible with doris 1.0")])])}),[],!1,null,null,null);t.default=o.exports}}]);