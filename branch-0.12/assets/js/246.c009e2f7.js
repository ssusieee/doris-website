(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{632:function(e,t,a){"use strict";a.r(t);var n=a(43),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"show-restore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-restore"}},[e._v("#")]),e._v(" SHOW RESTORE")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("This statement is used to view RESTORE tasks\nGrammar:\nSHOW RESTORE [FROM db_name]")]),e._v(" "),a("p",[e._v("Explain:")]),e._v(" "),a("ol",[a("li",[e._v("Palo -20165;- 20445;- 233844;-36817;- 27425RESTORE -21153s;")]),e._v(" "),a("li",[e._v("Each column has the following meanings:\nJobId: Unique job ID\nLabel: The name of the backup to be restored\nTimestamp: Time version of backup to be restored\nDbName: Subordinate database\nState: Current phase\nPENDING: The initial state after submitting a job\nSNAPSHOTING: In the execution snapshot\nDOWNLOAD: The snapshot is complete, ready to download the snapshot in the warehouse\nDOWNLOADING: Snapshot Download\nCOMMIT: Snapshot download completed, ready to take effect\nCOMMITING: In force\nFINISHED: Operation Successful\nCANCELLED: Job Failure\nAllowLoad: Is import allowed on recovery (currently not supported)\nReplicationNum: Specifies the number of replicas recovered\nRestore Jobs: Tables and partitions to be restored\nCreateTime: Task submission time\nMetaPreparedTime: Metadata Readiness Completion Time\nSnapshot Finished Time: Snapshot completion time\nDownload Finished Time: Snapshot download completion time\nFinishedTime: Job End Time\nUnfinished Tasks: The unfinished sub-task ID is displayed in the SNAP HOTING, DOWNLOADING, and COMMITING phases\nStatus: Display failure information if the job fails\nTimeout: Job timeout, per second")])]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("ol",[a("li",[e._v("Check the last RESTORE task under example_db.\nSHOW RESTORE FROM example_db;")])]),e._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("p",[e._v("SHOW, RESTORE")])])}),[],!1,null,null,null);t.default=s.exports}}]);