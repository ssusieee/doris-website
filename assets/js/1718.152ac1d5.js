(window.webpackJsonp=window.webpackJsonp||[]).push([[1718],{2348:function(e,t,a){"use strict";a.r(t);var r=a(15),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"cluster-upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster-upgrade"}},[e._v("#")]),e._v(" Cluster upgrade")]),e._v(" "),a("p",[e._v("Doris can upgrade smoothly by rolling upgrades. The following steps are recommended for security upgrade.")]),e._v(" "),a("p",[a("strong",[e._v("The name of the BE binary that appears in this doc is "),a("code",[e._v("doris_be")]),e._v(", which was "),a("code",[e._v("palo_be")]),e._v(" in previous versions.")])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note:")])]),e._v(" "),a("ol",[a("li",[e._v("Doris does not support upgrading across two-digit version numbers, for example: you cannot upgrade directly from 0.13 to 0.15, only through 0.13.x -> 0.14.x -> 0.15.x, and the three-digit version number can be upgraded across versions, such as from 0.13 .15 can be directly upgraded to 0.14.13.1, it is not necessary to upgrade 0.14.7 or 0.14.12.1")]),e._v(" "),a("li",[e._v("The following approaches are based on highly available deployments. That is, data 3 replicas, FE high availability.")])])]),e._v(" "),a("h2",{attrs:{id:"preparen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparen"}},[e._v("#")]),e._v(" Preparen")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Turn off the replica repair and balance operation.")]),e._v(" "),a("p",[e._v("There will be node restarts during the upgrade process, so unnecessary cluster balancing and replica repair logic may be triggered. You can close it first with the following command:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# Turn off the replica ealance logic. After it is closed, the balancing operation of the ordinary table replica will no longer be triggered.\n$ mysql-client> admin set frontend config("disable_balance" = "true");\n\n# Turn off the replica balance logic of the colocation table. After it is closed, the replica redistribution operation of the colocation table will no longer be triggered.\n$ mysql-client> admin set frontend config("disable_colocate_balance" = "true");\n\n# Turn off the replica scheduling logic. After shutting down, all generated replica repair and balancing tasks will no longer be scheduled.\n$ mysql-client> admin set frontend config("disable_tablet_scheduler" = "true");\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v("After the cluster is upgraded, just use the above command to set the corresponding configuration to the original value.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("important! ! Metadata needs to be backed up before upgrading(The entire directory needs to be backed up)! !")])])])]),e._v(" "),a("h2",{attrs:{id:"test-the-correctness-of-be-upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-the-correctness-of-be-upgrade"}},[e._v("#")]),e._v(" Test the correctness of BE upgrade")]),e._v(" "),a("ol",[a("li",[e._v("Arbitrarily select a BE node and deploy the latest doris_be binary file.")]),e._v(" "),a("li",[e._v("Restart the BE node and check the BE log be.INFO to see if the boot was successful.")]),e._v(" "),a("li",[e._v("If the startup fails, you can check the reason first. If the error is not recoverable, you can delete the BE directly through DROP BACKEND, clean up the data, and restart the BE using the previous version of doris_be. Then re-ADD BACKEND. ("),a("strong",[e._v("This method will result in the loss of a copy of the data, please make sure that three copies are complete, and perform this operation!!!")])])]),e._v(" "),a("h2",{attrs:{id:"testing-fe-metadata-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing-fe-metadata-compatibility"}},[e._v("#")]),e._v(" Testing FE Metadata Compatibility")]),e._v(" "),a("ol",{attrs:{start:"0"}},[a("li",[a("strong",[e._v("Important! Exceptional metadata compatibility is likely to cause data cannot be restored!!")])]),e._v(" "),a("li",[e._v("Deploy a test FE process (It is recommended to use your own local development machine, or BE node. If it is on the Follower or Observer node, you need to stop the started process, but it is not recommended to test on the Follower or Observer node) using the new version alone.")]),e._v(" "),a("li",[e._v("Modify the FE configuration file fe.conf for testing and set all ports to "),a("strong",[e._v("different from online")]),e._v(".")]),e._v(" "),a("li",[e._v("Add configuration in fe.conf: cluster_id=123456")]),e._v(" "),a("li",[e._v("Add the configuration in fe.conf: metadatafailure_recovery=true")]),e._v(" "),a("li",[e._v("Copy the metadata directory palo-meta of the online environment Master FE to the test environment")]),e._v(" "),a("li",[e._v("Modify the cluster_id in the palo-meta/image/VERSION file copied into the test environment to 123456 (that is, the same as in Step 3)")]),e._v(" "),a("li",[e._v('"27979;" "35797;" "3681616;" sh bin /start fe.sh "21551;" FE')]),e._v(" "),a("li",[e._v("Observe whether the start-up is successful through FE log fe.log.")]),e._v(" "),a("li",[e._v("If the startup is successful, run sh bin/stop_fe.sh to stop the FE process of the test environment.")]),e._v(" "),a("li",[a("strong",[e._v("The purpose of the above 2-6 steps is to prevent the FE of the test environment from being misconnected to the online environment after it starts.")])])]),e._v(" "),a("h2",{attrs:{id:"upgrade-preparation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-preparation"}},[e._v("#")]),e._v(" Upgrade preparation")]),e._v(" "),a("ol",[a("li",[e._v("After data validation, the new version of BE and FE binary files are distributed to their respective directories.")]),e._v(" "),a("li",[e._v("Usually small version upgrade, BE only needs to upgrade doris_be; FE only needs to upgrade palo-fe.jar. If it is a large version upgrade, you may need to upgrade other files (including but not limited to bin / lib / etc.) If you are not sure whether you need to replace other files, it is recommended to replace all of them.")])]),e._v(" "),a("h2",{attrs:{id:"rolling-upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rolling-upgrade"}},[e._v("#")]),e._v(" rolling upgrade")]),e._v(" "),a("ol",[a("li",[e._v("Confirm that the new version of the file is deployed. Restart FE and BE instances one by one.")]),e._v(" "),a("li",[e._v("It is suggested that BE be restarted one by one and FE be restarted one by one. Because Doris usually guarantees backward compatibility between FE and BE, that is, the old version of FE can access the new version of BE. However, the old version of BE may not be supported to access the new version of FE.")]),e._v(" "),a("li",[e._v("It is recommended to restart the next instance after confirming the previous instance started successfully. Refer to the Installation Deployment Document for the identification of successful instance startup.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);