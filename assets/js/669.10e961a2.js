(window.webpackJsonp=window.webpackJsonp||[]).push([[669],{1294:function(e,t,o){"use strict";o.r(t);var a=o(15),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"common-error"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#common-error"}},[e._v("#")]),e._v(" Common Error")]),e._v(" "),o("p",[e._v("This document is mainly used to record the errors reported during the use of Doris. If you encounter some errors, you are welcome to contribute to us for updates.")]),e._v(" "),o("h3",{attrs:{id:"e1-query-error-failed-to-get-scan-range-no-queryable-replica-found-in-tablet-xxxx"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#e1-query-error-failed-to-get-scan-range-no-queryable-replica-found-in-tablet-xxxx"}},[e._v("#")]),e._v(" E1. Query error: Failed to get scan range, no queryable replica found in tablet: xxxx")]),e._v(" "),o("p",[e._v("This situation is because the corresponding tablet does not find a copy that can be queried, usually because the BE is down, the copy is missing, and so on. You can use the "),o("code",[e._v("show tablet tablet_id")]),e._v(" statement first, and then execute the following "),o("code",[e._v("show proc")]),e._v(" statement to view the copy information corresponding to this tablet, and check whether the copy is complete. At the same time, you can use the "),o("code",[e._v('show proc "/cluster_balance"')]),e._v(" information to query the progress of replica scheduling and repair in the cluster.")]),e._v(" "),o("p",[e._v("For commands related to data copy management, please refer to "),o("RouterLink",{attrs:{to:"/1.0/administrator-guide/operation/tablet-repair-and-balance.html"}},[e._v("Data Copy Management")]),e._v(".")],1),e._v(" "),o("h3",{attrs:{id:"e2-fe-failed-to-start-fe-log-keeps-scrolling-wait-catalog-to-be-ready-fe-type-unknown"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#e2-fe-failed-to-start-fe-log-keeps-scrolling-wait-catalog-to-be-ready-fe-type-unknown"}},[e._v("#")]),e._v(' E2. FE failed to start, fe.log keeps scrolling "wait catalog to be ready. FE type UNKNOWN"')]),e._v(" "),o("p",[e._v("There are usually two reasons for this problem:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("The local IP obtained when the FE is started this time is inconsistent with the last time, usually because the "),o("code",[e._v("priority_network")]),e._v(" is not set correctly, the wrong IP address is matched when the FE is started. Need to modify "),o("code",[e._v("priority_network")]),e._v(" and restart FE.")])]),e._v(" "),o("li",[o("p",[e._v("Most Follower FE nodes in the cluster are not started. For example, there are 3 Followers and only one is started. At this time, at least one other FE needs to be also activated, and the FE electable group can elect the Master to provide services.")])])]),e._v(" "),o("p",[e._v("If none of the above conditions can be resolved, you can follow the [Metadata Operation and Maintenance Document] (../administrator-guide/operation/metadata-operation.md) in the Doris official website to restore.")]),e._v(" "),o("h3",{attrs:{id:"e3-tablet-writer-write-failed-tablet-id-27306172-txn-id-28573520-err-235-or-215-or-238"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#e3-tablet-writer-write-failed-tablet-id-27306172-txn-id-28573520-err-235-or-215-or-238"}},[e._v("#")]),e._v(" E3. tablet writer write failed, tablet_id=27306172, txn_id=28573520, err=-235 or -215 or -238")]),e._v(" "),o("p",[e._v("This error usually occurs during data import operations. The error code of the new version is -235, and the error code of the old version may be -215. The meaning of this error is that the data version of the corresponding tablet exceeds the maximum limit (default 500, controlled by the BE parameter "),o("code",[e._v("max_tablet_version_num")]),e._v("), and subsequent writes will be rejected. For example, the error in the question means that the data version of the tablet 27306172 exceeds the limit.")]),e._v(" "),o("p",[e._v("This error is usually because the import frequency is too high, which is greater than the compaction speed of the background data, which causes the version to accumulate and eventually exceeds the limit. At this point, we can first use the show tablet 27306172 statement, and then execute the show proc statement in the result to view the status of each copy of the tablet. The versionCount in the result represents the number of versions. If you find that there are too many versions of a copy, you need to reduce the import frequency or stop importing, and observe whether the number of versions drops. If the version number still does not decrease after the import is stopped, you need to go to the corresponding BE node to check the be.INFO log, search for the tablet id and compaction keywords, and check whether the compaction is running normally. For compaction tuning related, you can refer to the ApacheDoris public account article: Doris Best Practice-Compaction Tuning (3)")]),e._v(" "),o("p",[e._v("The -238 error usually occurs when the amount of imported data in the same batch is too large, which leads to too many Segment files for a certain tablet (the default is 200, which is controlled by the BE parameter "),o("code",[e._v("max_segment_num_per_rowset")]),e._v("). At this time, it is recommended to reduce the amount of data imported in one batch, or to appropriately increase the value of the BE configuration parameter to solve the problem.")]),e._v(" "),o("h3",{attrs:{id:"e4-tablet-110309738-has-few-replicas-1-alive-backends-10003"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#e4-tablet-110309738-has-few-replicas-1-alive-backends-10003"}},[e._v("#")]),e._v(" E4. tablet 110309738 has few replicas: 1, alive backends: [10003]")]),e._v(" "),o("p",[e._v("This error may occur during query or import operation. It usually means that the copy of the tablet is abnormal.")]),e._v(" "),o("p",[e._v("At this point, you can first check whether the BE node is down by using the show backends command, such as the isAlive field is false, or LastStartTime is the most recent time (indicating that it has been restarted recently). If the BE is down, you need to go to the node corresponding to the BE and check the be.out log. If the BE is down due to an exception, usually the exception stack will be printed in be.out to help troubleshoot the problem. If there is no error stack in be.out. You can use the linux command dmesg -T to check whether the process is killed by the system because of OOM.")]),e._v(" "),o("p",[e._v("If no BE node is down, you need to use the show tablet 110309738 statement, and then execute the show proc statement in the result to check the status of each copy of the tablet for further investigation.")]),e._v(" "),o("h3",{attrs:{id:"e5-disk-xxxxx-on-backend-xxx-exceed-limit-usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#e5-disk-xxxxx-on-backend-xxx-exceed-limit-usage"}},[e._v("#")]),e._v(" E5. disk xxxxx on backend xxx exceed limit usage")]),e._v(" "),o("p",[e._v("It usually appears in operations such as import and Alter. This error means that the usage of the corresponding disk corresponding to the BE exceeds the threshold (95% by default). At this time, you can use the show backends command first, where MaxDiskUsedPct shows the usage of the disk with the highest usage on the corresponding BE. If If it exceeds 95%, this error will be reported.")]),e._v(" "),o("p",[e._v("At this time, you need to go to the corresponding BE node to check the usage in the data directory. The trash directory and snapshot directory can be manually cleaned up to free up space. If the data directory occupies a lot, you need to consider deleting some data to free up space. For details, please refer to "),o("RouterLink",{attrs:{to:"/1.0/administrator-guide/operation/disk-capacity.html"}},[e._v("Disk Space Management")]),e._v(".")],1),e._v(" "),o("h3",{attrs:{id:"e6-invalid-cluster-id-xxxx"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#e6-invalid-cluster-id-xxxx"}},[e._v("#")]),e._v(" E6. invalid cluster id: xxxx")]),e._v(" "),o("p",[e._v("This error may appear in the results of the show backends or show frontends commands. It usually appears in the error message column of a certain FE or BE node. The meaning of this error is that after Master FE sends heartbeat information to this node, the node finds that the cluster id carried in the heartbeat information is different from the cluster id stored locally, so it refuses to respond to the heartbeat.")]),e._v(" "),o("p",[e._v("Doris' Master FE node will actively send a heartbeat to each FE or BE node, and will carry a cluster_id in the heartbeat information. The cluster_id is the unique cluster ID generated by the Master FE when a cluster is initialized. When the FE or BE receives the heartbeat information for the first time, it will save the cluster_id locally in the form of a file. The FE file is in the image/ directory of the metadata directory, and BE has a cluster_id file in all data directories. After that, every time a node receives a heartbeat, it will compare the content of the local cluster_id with the content in the heartbeat. If it is inconsistent, it will refuse to respond to the heartbeat.")]),e._v(" "),o("p",[e._v("This mechanism is a node authentication mechanism to prevent receiving wrong heartbeat information from nodes outside the cluster.")]),e._v(" "),o("p",[e._v("If you need to recover from this error. First, confirm whether all nodes are the correct nodes in the cluster. After that, for the FE node, you can try to modify the cluster_id value in the image/VERSION file in the metadata directory and restart the FE. For BE nodes, you can delete cluster_id files in all data directories and restart BE.")]),e._v(" "),o("h3",{attrs:{id:"e7-import-data-by-calling-stream-load-through-a-java-program-when-a-batch-of-data-is-large-a-broken-pipe-error-may-be-reported"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#e7-import-data-by-calling-stream-load-through-a-java-program-when-a-batch-of-data-is-large-a-broken-pipe-error-may-be-reported"}},[e._v("#")]),e._v(" E7. Import data by calling stream load through a Java program. When a batch of data is large, a Broken Pipe error may be reported")]),e._v(" "),o("p",[e._v("In addition to Broken Pipe, there may be other strange errors.")]),e._v(" "),o("p",[e._v("This situation usually occurs after opening httpv2. Because httpv2 is an http service implemented using spring boot, and uses tomcat as the default built-in container. But tomcat's handling of 307 forwarding seems to have some problems, so the built-in container will be modified to jetty later. In addition, the version of apache http client in the java program needs to use a version later than 4.5.13. In the previous version, there were also some problems with the processing of forwarding.")]),e._v(" "),o("p",[e._v("So this problem can be solved in two ways:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Turn off httpv2")]),e._v(" "),o("p",[e._v("Add enable_http_server_v2=false in fe.conf and restart FE. However, the new UI interface can no longer be used in this way, and some new interfaces based on httpv2 cannot be used later. (Normal import queries are not affected).")])]),e._v(" "),o("li",[o("p",[e._v("Upgrade")]),e._v(" "),o("p",[e._v("You can upgrade to Doris 0.15 and later versions, this problem has been fixed.")])])]),e._v(" "),o("h3",{attrs:{id:"e8-lost-connection-to-mysql-server-at-reading-initial-communication-packet-system-error-0"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#e8-lost-connection-to-mysql-server-at-reading-initial-communication-packet-system-error-0"}},[e._v("#")]),e._v(" E8. "),o("code",[e._v("Lost connection to MySQL server at'reading initial communication packet', system error: 0")])]),e._v(" "),o("p",[e._v("If the following problems occur when using the MySQL client to connect to Doris, this is usually caused by the difference between the jdk version used when compiling FE and the jdk version used when running FE.\nNote that when using docker image to compile, the default JDK version is openjdk 11, you can switch to openjdk 8 by command (see the compilation document for details).")]),e._v(" "),o("h3",{attrs:{id:"e9-214-error"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#e9-214-error"}},[e._v("#")]),e._v(" E9. -214 error")]),e._v(" "),o("p",[e._v("When performing operations such as load and query, you may encounter the following errors:")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("failed to initialize storage reader. tablet=63416.1050661139.aa4d304e7a7aff9c-f0fa7579928c85a0, res=-214, backend=192.168.100.10\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("p",[e._v("A -214 error means that the data version of the corresponding tablet is missing. For example, the above error indicates that the data version of the replica of tablet 63416 on the BE of 192.168.100.10 is missing. (There may be other similar error codes, which can be checked and repaired in the following ways).")]),e._v(" "),o("p",[e._v("Normally, if your data has multiple replicas, the system will automatically repair these problematic replicas. You can troubleshoot through the following steps:")]),e._v(" "),o("p",[e._v("First, use the "),o("code",[e._v("show tablet 63416")]),e._v(" statement and execute the "),o("code",[e._v("show proc xxx")]),e._v(" statement in the result to view the status of each replica of the corresponding tablet. Usually we need to care about the data in the "),o("code",[e._v("Version")]),e._v(" column.")]),e._v(" "),o("p",[e._v("Under normal circumstances, the Version of multiple replicas of a tablet should be the same. And it is the same as the VisibleVersion of the corresponding partition.")]),e._v(" "),o("p",[e._v("You can use "),o("code",[e._v("show partitions from tblx")]),e._v(" to view the corresponding partition version (the partition corresponding to the tablet can be obtained in the "),o("code",[e._v("show tablet")]),e._v(" statement.)")]),e._v(" "),o("p",[e._v("At the same time, you can also visit the URL in the CompactionStatus column of the "),o("code",[e._v("show proc")]),e._v(" statement (just open it in the browser) to view more specific version information, to check which version is missing.")]),e._v(" "),o("p",[e._v("If there is no automatic repair for a long time, you need to use the "),o("code",[e._v('show proc "/cluster_balance"')]),e._v(" statement to view the tablet repair and scheduling tasks currently being performed by the system. It may be because there are a large number of tablets waiting to be scheduled, which leads to a long repair time. You can follow the records in "),o("code",[e._v("pending_tablets")]),e._v(" and "),o("code",[e._v("running_tablets")]),e._v(".")]),e._v(" "),o("p",[e._v("Furthermore, you can use the "),o("code",[e._v("admin repair")]),e._v(" statement to specify the priority to repair a table or partition. For details, please refer to "),o("code",[e._v("help admin repair")]),e._v(";")]),e._v(" "),o("p",[e._v("If it still cannot be repaired, then in the case of multiple replicas, we use the "),o("code",[e._v("admin set replica status")]),e._v(" command to force the replica to go offline. For details, please refer to the example of "),o("code",[e._v("help admin set replica status")]),e._v(" to set the status of the replica to bad. (After set to bad, the replica will not be accessed again. And will be automatically repaired later. But before the operation, you should make sure that the other replicas are normal)")]),e._v(" "),o("h3",{attrs:{id:"e10-not-connected-to-192-168-100-1-8060-yet-server-id-384"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#e10-not-connected-to-192-168-100-1-8060-yet-server-id-384"}},[e._v("#")]),e._v(" E10. Not connected to 192.168.100.1:8060 yet, server_id=384")]),e._v(" "),o("p",[e._v("We may encounter this error when loading or querying. If you go to the corresponding BE log to check, you may also find similar errors.")]),e._v(" "),o("p",[e._v("This is an RPC error, and there are usually two possibilities: 1. The corresponding BE node is down. 2. rpc congestion or other errors.")]),e._v(" "),o("p",[e._v("If the BE node is down, you need to check the specific reason for the downtime. Only the problem of rpc congestion is discussed here.")]),e._v(" "),o("p",[e._v("One situation is OVERCROWDED, which means that a large amount of unsent data at the rpc client exceeds the threshold. BE has two parameters related to it:")]),e._v(" "),o("ol",[o("li",[o("code",[e._v("brpc_socket_max_unwritten_bytes")]),e._v(": The default is 1GB. If the unwritten data exceeds this value, an error will be reported. You can modify this value appropriately to avoid OVERCROWDED errors. (But this cures the symptoms rather than the root cause, essentially congestion still occurs).")]),e._v(" "),o("li",[o("code",[e._v("tablet_writer_ignore_eovercrowded")]),e._v(": The default is false. If set to true, Doris will ignore OVERCROWDED errors during the load process. This parameter is mainly used to avoid load failure and improve the stability of load.")])]),e._v(" "),o("p",[e._v("The second is that the packet size of rpc exceeds "),o("code",[e._v("max_body_size")]),e._v(". This problem may occur if the query contains a very large String type or a Bitmap type. It can be circumvented by modifying the following BE parameters:")]),e._v(" "),o("ol",[o("li",[o("code",[e._v("brpc_max_body_size")]),e._v(": The default is 3GB.")])]),e._v(" "),o("h3",{attrs:{id:"e11-recoverytracker-should-overlap-or-follow-on-disk-last-vlsn-of-4-422-880-recoveryfirst-4-422-882-unexpected-state-fatal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#e11-recoverytracker-should-overlap-or-follow-on-disk-last-vlsn-of-4-422-880-recoveryfirst-4-422-882-unexpected-state-fatal"}},[e._v("#")]),e._v(" E11. "),o("code",[e._v("recoveryTracker should overlap or follow on disk last VLSN of 4,422,880 recoveryFirst= 4,422,882 UNEXPECTED_STATE_FATAL")])]),e._v(" "),o("p",[e._v("Sometimes when restarting the Fe, the above error will occur (usually only in the case of multiple followers), and the difference between the two values in the error is 2. As a result, the Fe startup fails.")]),e._v(" "),o("p",[e._v("This is a bug in bdbje that has not been resolved. In this case, metadata can only be recovered through fault recovery in "),o("RouterLink",{attrs:{to:"/1.0/administrator-guide/operation/metadata-operation.html"}},[e._v("metadata operation and maintenance manual")]),e._v(".")],1),e._v(" "),o("h3",{attrs:{id:"e12-doris-compile-and-install-jdk-version-incompatibility-problem"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#e12-doris-compile-and-install-jdk-version-incompatibility-problem"}},[e._v("#")]),e._v(" E12.Doris compile and install JDK version incompatibility problem")]),e._v(" "),o("p",[e._v("When I use Docker to compile Doris myself, start FE after compiling and installing, "),o("code",[e._v("java.lang.Suchmethoderror: java.nio.ByteBuffer.limit (I)Ljava/nio/ByteBuffer;")]),e._v(" exception information, this is because the default in Docker is JDK 11. If your installation environment is using JDK8, you need to switch the JDK environment to JDK8 in Docker. For the specific switching method, refer to "),o("a",{attrs:{href:"https://doris.apache.org/installing/compilation.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Compilation"),o("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);