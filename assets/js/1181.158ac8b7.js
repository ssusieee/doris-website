(window.webpackJsonp=window.webpackJsonp||[]).push([[1181],{1806:function(e,t,a){"use strict";a.r(t);var s=a(15),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"data-backup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-backup"}},[e._v("#")]),e._v(" Data Backup")]),e._v(" "),a("p",[e._v("Doris supports backing up the current data in the form of files to the remote storage system through the broker. Afterwards, you can restore data from the remote storage system to any Doris cluster through the restore command. Through this function, Doris can support periodic snapshot backup of data. You can also use this function to migrate data between different clusters.")]),e._v(" "),a("p",[e._v("This feature requires Doris version 0.8.2+")]),e._v(" "),a("p",[e._v("To use this function, you need to deploy the broker corresponding to the remote storage. Such as BOS, HDFS, etc. You can view the currently deployed broker through "),a("code",[e._v("SHOW BROKER;")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"a-brief-explanation-of-the-principle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-brief-explanation-of-the-principle"}},[e._v("#")]),e._v(" A brief explanation of the principle")]),e._v(" "),a("p",[e._v("The backup operation is to upload the data of the specified table or partition directly to the remote warehouse for storage in the form of files stored by Doris. When a user submits a Backup request, the system will perform the following operations:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Snapshot and snapshot upload")]),e._v(" "),a("p",[e._v("The snapshot phase takes a snapshot of the specified table or partition data file. After that, backups are all operations on snapshots. After the snapshot, changes, imports, etc. to the table no longer affect the results of the backup. Snapshots only generate a hard link to the current data file, which takes very little time. After the snapshot is completed, the snapshot files will be uploaded one by one. Snapshot uploads are done concurrently by each Backend.")])]),e._v(" "),a("li",[a("p",[e._v("Metadata preparation and upload")]),e._v(" "),a("p",[e._v("After the data file snapshot upload is complete, Frontend will first write the corresponding metadata to a local file, and then upload the local metadata file to the remote warehouse through the broker. Completing the final backup job")])]),e._v(" "),a("li",[a("p",[e._v("Dynamic Partition Table Description")]),e._v(" "),a("p",[e._v("If the table is a dynamic partition table, the dynamic partition attribute will be automatically disabled after backup. When restoring, you need to manually enable the dynamic partition attribute of the table. The command is as follows:")])])]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ALTER")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("TABLE")]),e._v(" tbl1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SET")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"dynamic_partition.enable"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Backup and Restore operation will NOT keep the "),a("code",[e._v("colocate_with")]),e._v(" property of a table.")])]),e._v(" "),a("h2",{attrs:{id:"start-backup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-backup"}},[e._v("#")]),e._v(" Start Backup")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Create a hdfs remote warehouse example_repo:")]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" REPOSITORY "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")]),e._v("example_repo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WITH")]),e._v(" BROKER "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")]),e._v("hdfs_broker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ON")]),e._v(" LOCATION "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hdfs://hadoop-name-node:54310/path/to/repo/"')]),e._v("\nPROPERTIES\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"username"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"user"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"password"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"password"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Full backup of table example_tbl under example_db to warehouse example_repo:")]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("BACKUP")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SNAPSHOT")]),e._v(" example_db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("snapshot_label1\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("TO")]),e._v(" example_repo\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ON")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("example_tbl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nPROPERTIES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"type"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"full"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Under the full backup example_db, the p1, p2 partitions of the table example_tbl, and the table example_tbl2 to the warehouse example_repo:")]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("BACKUP")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SNAPSHOT")]),e._v(" example_db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("snapshot_label2\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("TO")]),e._v(" example_repo\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ON")]),e._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n   example_tbl "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("PARTITION")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("p2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n   example_tbl2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("View the execution of the most recent backup job:")]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[e._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("show")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("BACKUP")]),e._v("\\G"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("row")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n               JobId: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("17891847")]),e._v("\n        SnapshotName: snapshot_label1\n              DbName: example_db\n               State: FINISHED\n          BackupObjs: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("default_cluster:example_db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("example_tbl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n          CreateTime: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2022")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("04")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("08")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("52")]),e._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("29")]),e._v("\nSnapshotFinishedTime: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2022")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("04")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("08")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("52")]),e._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("32")]),e._v("\n  UploadFinishedTime: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2022")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("04")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("08")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("52")]),e._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("38")]),e._v("\n        FinishedTime: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2022")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("04")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("08")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("52")]),e._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("44")]),e._v("\n     UnfinishedTasks: \n            Progress: \n          TaskErrMsg: \n              "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Status")]),e._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n             Timeout: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("86400")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("row")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("in")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.01")]),e._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("View existing backups in remote repositories:")]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[e._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SHOW")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SNAPSHOT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ON")]),e._v(" example_repo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SNAPSHOT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"snapshot_label1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("-----------------+---------------------+--------+")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Snapshot")]),e._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Timestamp")]),e._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Status")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("-----------------+---------------------+--------+")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" snapshot_label1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2022")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("04")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("08")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("52")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("29")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" OK     "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("-----------------+---------------------+--------+")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("row")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("in")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.15")]),e._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])])])]),e._v(" "),a("p",[e._v("For the detailed usage of BACKUP, please refer to "),a("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/BACKUP.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"best-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[e._v("#")]),e._v(" Best Practices")]),e._v(" "),a("h3",{attrs:{id:"backup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backup"}},[e._v("#")]),e._v(" Backup")]),e._v(" "),a("p",[e._v("Currently, we support full backup with the smallest partition (Partition) granularity (incremental backup may be supported in future versions). If you need to back up data regularly, you first need to plan the partitioning and bucketing of the table reasonably when building the table, such as partitioning by time. Then, in the subsequent running process, regular data backups are performed according to the partition granularity.")]),e._v(" "),a("h3",{attrs:{id:"data-migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-migration"}},[e._v("#")]),e._v(" Data Migration")]),e._v(" "),a("p",[e._v("Users can back up the data to the remote warehouse first, and then restore the data to another cluster through the remote warehouse to complete the data migration. Because data backup is done in the form of snapshots, new imported data after the snapshot phase of the backup job will not be backed up. Therefore, after the snapshot is completed and until the recovery job is completed, the data imported on the original cluster needs to be imported again on the new cluster.")]),e._v(" "),a("p",[e._v("It is recommended to import the new and old clusters in parallel for a period of time after the migration is complete. After verifying the correctness of data and services, migrate services to a new cluster.")]),e._v(" "),a("h2",{attrs:{id:"highlights"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#highlights"}},[e._v("#")]),e._v(" Highlights")]),e._v(" "),a("ol",[a("li",[e._v("Operations related to backup and recovery are currently only allowed to be performed by users with ADMIN privileges.")]),e._v(" "),a("li",[e._v("Within a database, only one backup or restore job is allowed to be executed.")]),e._v(" "),a("li",[e._v("Both backup and recovery support operations at the minimum partition (Partition) level. When the amount of data in the table is large, it is recommended to perform operations by partition to reduce the cost of failed retry.")]),e._v(" "),a("li",[e._v("Because of the backup and restore operations, the operations are the actual data files. Therefore, when a table has too many shards, or a shard has too many small versions, it may take a long time to backup or restore even if the total amount of data is small. Users can use "),a("code",[e._v("SHOW PARTITIONS FROM table_name;")]),e._v(" and "),a("code",[e._v("SHOW TABLET FROM table_name;")]),e._v(" to view the number of shards in each partition and the number of file versions in each shard to estimate job execution time. The number of files has a great impact on the execution time of the job. Therefore, it is recommended to plan partitions and buckets reasonably when creating tables to avoid excessive sharding.")]),e._v(" "),a("li",[e._v("When checking job status via "),a("code",[e._v("SHOW BACKUP")]),e._v(" or "),a("code",[e._v("SHOW RESTORE")]),e._v(" command. It is possible to see error messages in the "),a("code",[e._v("TaskErrMsg")]),e._v(" column. But as long as the "),a("code",[e._v("State")]),e._v(" column is not "),a("code",[e._v("CANCELLED")]),e._v(", the job is still continuing. These tasks may retry successfully. Of course, some Task errors will also directly cause the job to fail.\nCommon "),a("code",[e._v("TaskErrMsg")]),e._v(" errors are as follows:\nQ1: Backup to HDFS, the status shows UPLOADING, TaskErrMsg error message: [13333: Close broker writer failed, broker:TNetworkAddress(hostname=10.10.0.0, port=8000) msg:errors while close file output stream, cause by: DataStreamer Exception : ]\nThis is generally a network communication problem. Check the broker log to see if a certain ip or port is blocked. If it is a cloud service, you need to check whether is accessed the intranet. If so, you can add hdfs-site.xml in the broker/conf folder, you need to add dfs.client.use.datanode.hostname=true under the hdfs-site.xml configuration file, and configure the hostname mapping of the HADOOP cluster on the broker node.")]),e._v(" "),a("li",[e._v("If the recovery job is an overwrite operation (specifying the recovery data to an existing table or partition), then from the "),a("code",[e._v("COMMIT")]),e._v(" phase of the recovery job, the overwritten data on the current cluster may no longer be restored. If the restore job fails or is canceled at this time, the previous data may be damaged and inaccessible. In this case, the only way to do it is to perform the recovery operation again and wait for the job to complete. Therefore, we recommend that if unnecessary, try not to restore data by overwriting unless it is confirmed that the current data is no longer used.")])]),e._v(" "),a("h2",{attrs:{id:"related-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-commands"}},[e._v("#")]),e._v(" Related Commands")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("The commands related to the backup and restore function are as follows. For the following commands, you can use "),a("code",[e._v("help cmd;")]),e._v(" to view detailed help after connecting to Doris through mysql-client.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("CREATE REPOSITORY")]),e._v(" "),a("p",[e._v("Create a remote repository path for backup or restore. This command needs to use the Broker process to access the remote storage. Different brokers need to provide different parameters. For details, please refer to "),a("RouterLink",{attrs:{to:"/docs/advanced/broker.html"}},[e._v("Broker documentation")]),e._v(", or you can directly back up to support through the S3 protocol For the remote storage of AWS S3 protocol, please refer to "),a("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY.html"}},[e._v("Create Remote Warehouse Documentation")])],1)]),e._v(" "),a("li",[a("p",[e._v("BACKUP")]),e._v(" "),a("p",[e._v("Perform a backup operation.")])]),e._v(" "),a("li",[a("p",[e._v("SHOW BACKUP")]),e._v(" "),a("p",[e._v("View the execution of the most recent backup job, including:")]),e._v(" "),a("ul",[a("li",[e._v("JobId: The id of this backup job.")]),e._v(" "),a("li",[e._v("SnapshotName: The name (Label) of this backup job specified by the user.")]),e._v(" "),a("li",[e._v("DbName: Database corresponding to the backup job.")]),e._v(" "),a("li",[e._v("State: The current stage of the backup job:\n"),a("ul",[a("li",[e._v("PENDING: The initial status of the job.")]),e._v(" "),a("li",[e._v("SNAPSHOTING: A snapshot operation is in progress.")]),e._v(" "),a("li",[e._v("UPLOAD_SNAPSHOT: The snapshot is over, ready to upload.")]),e._v(" "),a("li",[e._v("UPLOADING: Uploading snapshot.")]),e._v(" "),a("li",[e._v("SAVE_META: The metadata file is being generated locally.")]),e._v(" "),a("li",[e._v("UPLOAD_INFO: Upload metadata files and information about this backup job.")]),e._v(" "),a("li",[e._v("FINISHED: The backup is complete.")]),e._v(" "),a("li",[e._v("CANCELLED: Backup failed or was canceled.")])])]),e._v(" "),a("li",[e._v("BackupObjs: List of tables and partitions involved in this backup.")]),e._v(" "),a("li",[e._v("CreateTime: Job creation time.")]),e._v(" "),a("li",[e._v("SnapshotFinishedTime: Snapshot completion time.")]),e._v(" "),a("li",[e._v("UploadFinishedTime: Snapshot upload completion time.")]),e._v(" "),a("li",[e._v("FinishedTime: The completion time of this job.")]),e._v(" "),a("li",[e._v("UnfinishedTasks: During "),a("code",[e._v("SNAPSHOTTING")]),e._v(", "),a("code",[e._v("UPLOADING")]),e._v(" and other stages, there will be multiple subtasks going on at the same time. The current stage shown here is the task id of the unfinished subtasks.")]),e._v(" "),a("li",[e._v("TaskErrMsg: If there is an error in the execution of a subtask, the error message of the corresponding subtask will be displayed here.")]),e._v(" "),a("li",[e._v("Status: Used to record some status information that may appear during the entire job process.")]),e._v(" "),a("li",[e._v("Timeout: The timeout period of the job, in seconds.")])])]),e._v(" "),a("li",[a("p",[e._v("SHOW SNAPSHOT")]),e._v(" "),a("p",[e._v("View existing backups in the remote repository.")]),e._v(" "),a("ul",[a("li",[e._v("Snapshot: The name (Label) of the backup specified during backup.")]),e._v(" "),a("li",[e._v("Timestamp: Timestamp of the backup.")]),e._v(" "),a("li",[e._v("Status: Whether the backup is normal.")])]),e._v(" "),a("p",[e._v("More detailed backup information can be displayed if a where clause is specified after "),a("code",[e._v("SHOW SNAPSHOT")]),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("Database: The database corresponding to the backup.")]),e._v(" "),a("li",[e._v("Details: Shows the complete data directory structure of the backup.")])])]),e._v(" "),a("li",[a("p",[e._v("CANCEL BACKUP")]),e._v(" "),a("p",[e._v("Cancel the currently executing backup job.")])]),e._v(" "),a("li",[a("p",[e._v("DROP REPOSITORY")]),e._v(" "),a("p",[e._v("Delete the created remote repository. Deleting a warehouse only deletes the mapping of the warehouse in Doris, and does not delete the actual warehouse data.")])])])])]),e._v(" "),a("h2",{attrs:{id:"more-help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more-help"}},[e._v("#")]),e._v(" More Help")]),e._v(" "),a("p",[e._v("For more detailed syntax and best practices used by BACKUP, please refer to the "),a("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/BACKUP.html"}},[e._v("BACKUP")]),e._v(" command manual, You can also type "),a("code",[e._v("HELP BACKUP")]),e._v(" on the MySql client command line for more help.")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);