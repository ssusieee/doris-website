(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{657:function(e,t,a){"use strict";a.r(t);var s=a(2),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"sql-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-error"}},[e._v("#")]),e._v(" SQL Error")]),e._v(" "),a("h3",{attrs:{id:"q1-query-error-failed-to-get-scan-range-no-queryable-replica-found-in-tablet-xxxx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q1-query-error-failed-to-get-scan-range-no-queryable-replica-found-in-tablet-xxxx"}},[e._v("#")]),e._v(" Q1. Query error: Failed to get scan range, no queryable replica found in tablet: xxxx")]),e._v(" "),a("p",[e._v("This happens because the corresponding tablet does not find a copy that can be queried, usually because the BE is down, the copy is missing, etc. You can first pass the "),a("code",[e._v("show tablet tablet_id")]),e._v(" statement and then execute the following "),a("code",[e._v("show proc")]),e._v(" statement to view the replica information corresponding to this tablet and check whether the replica is complete. At the same time, you can also query the progress of replica scheduling and repair in the cluster through "),a("code",[e._v('show proc "/cluster_balance"')]),e._v(" information.")]),e._v(" "),a("p",[e._v("For commands related to data copy management, please refer to "),a("RouterLink",{attrs:{to:"/docs/admin-manual/maint-monitor/tablet-repair-and-balance.html"}},[e._v("Data Copy Management")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"q2-show-backends-frontends-the-information-viewed-is-incomplete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q2-show-backends-frontends-the-information-viewed-is-incomplete"}},[e._v("#")]),e._v(" Q2. Show backends/frontends The information viewed is incomplete")]),e._v(" "),a("p",[e._v("After executing certain statements such as "),a("code",[e._v("show backends/frontends")]),e._v(", some columns may be found to be incomplete in the results. For example, the disk capacity information cannot be seen in the show backends result.")]),e._v(" "),a("p",[e._v("Usually this problem occurs when the cluster has multiple FEs. If users connect to non-Master FE nodes to execute these statements, they will see incomplete information. This is because some information exists only on the Master FE node. For example, BE's disk usage information, etc. Therefore, complete information can only be obtained after a direct connection to the Master FE.")]),e._v(" "),a("p",[e._v("Of course, users can also execute "),a("code",[e._v("set forward_to_master=true;")]),e._v(" before executing these statements. After the session variable is set to true, some information viewing statements executed subsequently will be automatically forwarded to the Master FE to obtain the results. In this way, no matter which FE the user is connected to, the complete result can be obtained.")]),e._v(" "),a("h3",{attrs:{id:"q3-invalid-cluster-id-xxxx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q3-invalid-cluster-id-xxxx"}},[e._v("#")]),e._v(" Q3. invalid cluster id: xxxx")]),e._v(" "),a("p",[e._v("This error may appear in the results of the show backends or show frontends commands. Usually appears in the error message column of an FE or BE node. The meaning of this error is that after the Master FE sends the heartbeat information to the node, the node finds that the cluster id carried in the heartbeat information is different from the cluster id stored locally, so it refuses to respond to the heartbeat.")]),e._v(" "),a("p",[e._v("The Master FE node of Doris will actively send heartbeats to each FE or BE node, and will carry a cluster_id in the heartbeat information. cluster_id is the unique cluster ID generated by the Master FE when a cluster is initialized. When the FE or BE receives the heartbeat information for the first time, the cluster_id will be saved locally in the form of a file. The file of FE is in the image/ directory of the metadata directory, and the BE has a cluster_id file in all data directories. After that, each time the node receives the heartbeat, it will compare the content of the local cluster_id with the content in the heartbeat. If it is inconsistent, it will refuse to respond to the heartbeat.")]),e._v(" "),a("p",[e._v("This mechanism is a node authentication mechanism to prevent receiving false heartbeat messages sent by nodes outside the cluster.")]),e._v(" "),a("p",[e._v("If needed to recover from this error. The first thing to do is to make sure that all the nodes are in the correct cluster. After that, for the FE node, you can try to modify the cluster_id value in the image/VERSION file in the metadata directory and restart the FE. For the BE node, you can delete all the cluster_id files in the data directory and restart the BE.")]),e._v(" "),a("h3",{attrs:{id:"q4-unique-key-model-query-results-are-inconsistent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q4-unique-key-model-query-results-are-inconsistent"}},[e._v("#")]),e._v(" Q4. Unique Key model query results are inconsistent")]),e._v(" "),a("p",[e._v("In some cases, when a user uses the same SQL to query a table with a Unique Key model, the results of multiple queries may be inconsistent. And the query results always change between 2-3 kinds.")]),e._v(" "),a("p",[e._v("This may be because, in the same batch of imported data, there are data with the same key but different values, which will lead to inconsistent results between different replicas due to the uncertainty of the sequence of data overwriting.")]),e._v(" "),a("p",[e._v("For example, the table is defined as k1, v1. A batch of imported data is as follows:")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('1, "abc"\n1, "def"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Then maybe the result of copy 1 is "),a("code",[e._v('1, "abc"')]),e._v(", and the result of copy 2 is "),a("code",[e._v('1, "def"')]),e._v(". As a result, the query results are inconsistent.")]),e._v(" "),a("p",[e._v("To ensure that the data sequence between different replicas is unique, you can refer to the "),a("RouterLink",{attrs:{to:"/docs/data-operate/update-delete/sequence-column-manual.html"}},[e._v("Sequence Column")]),e._v(" function.")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);