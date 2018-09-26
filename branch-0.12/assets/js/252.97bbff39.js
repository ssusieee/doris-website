(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{638:function(e,t,i){"use strict";i.r(t);var a=i(43),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("p",[e._v('<!-\nLicensed to the Apache Software Foundation (ASF) under one\nor more contributor license agreements. See the NOTICE file\ndistributed with this work for additional information\nregarding copyright ownership. The ASF licenses this file\nto you under the Apache License, Version 2.0 (the\n"License"); you may not use this file except in compliance\nwith the License. You may obtain a copy of the License at')]),e._v(" "),i("p",[e._v("http://www.apache.org/licenses/LICENSE-2.0")]),e._v(" "),i("p",[e._v('Unless required by applicable law or agreed to in writing,\nsoftware distributed under the License is distributed on an\n"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, either express or implied. See the License for the\nspecific language governing permissions and limitations\nunder the License.\n->')]),e._v(" "),i("h1",{attrs:{id:"show-transaction"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#show-transaction"}},[e._v("#")]),e._v(" SHOW TRANSACTION")]),e._v(" "),i("h2",{attrs:{id:"description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),i("p",[e._v("This syntax is used to view transaction details for the specified transaction id.")]),e._v(" "),i("p",[e._v("grammar:")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("SHOW TRANSACTION\n[FROM db_name]\nWHERE id = transaction_id;\n")])])]),i("p",[e._v("Example return result:")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("     TransactionId: 4005\n             Label: insert_8d807d5d-bcdd-46eb-be6d-3fa87aa4952d\n       Coordinator: FE: 10.74.167.16\n TransactionStatus: VISIBLE\n LoadJobSourceType: INSERT_STREAMING\n       PrepareTime: 2020-01-09 14:59:07\n        CommitTime: 2020-01-09 14:59:09\n        FinishTime: 2020-01-09 14:59:09\n            Reason:\nErrorReplicasCount: 0\n        ListenerId: -1\n         TimeoutMs: 300000\n")])])]),i("ul",[i("li",[e._v("TransactionId: transaction id")]),e._v(" "),i("li",[e._v("Label: the label of the corresponding load job")]),e._v(" "),i("li",[e._v("Coordinator: the node responsible for transaction coordination")]),e._v(" "),i("li",[e._v("TransactionStatus: transaction status\n    * PREPARE: preparation stage\n    * COMMITTED: The transaction was successful, but the data is not visible\n    * VISIBLE: The transaction was successful and the data is visible\n    * ABORTED: transaction failed")]),e._v(" "),i("li",[e._v("LoadJobSourceType: The type of the load job.")]),e._v(" "),i("li",[e._v("PrepareTime: transaction start time")]),e._v(" "),i("li",[e._v("CommitTime: the time when the transaction was successfully committed")]),e._v(" "),i("li",[e._v("FinishTime: The time when the data is visible")]),e._v(" "),i("li",[e._v("Reason: error message")]),e._v(" "),i("li",[e._v("ErrorReplicasCount: Number of replicas with errors")]),e._v(" "),i("li",[e._v("ListenerId: the id of the related load job")]),e._v(" "),i("li",[e._v("TimeoutMs: transaction timeout time in milliseconds")])]),e._v(" "),i("h2",{attrs:{id:"example"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("View the transaction with id 4005:")]),e._v(" "),i("p",[e._v("SHOW TRANSACTION WHERE ID = 4005;")])]),e._v(" "),i("li",[i("p",[e._v("Specify the db and view the transaction with id 4005:")]),e._v(" "),i("p",[e._v("SHOW TRANSACTION FROM db WHERE ID = 4005;")])])]),e._v(" "),i("h2",{attrs:{id:"keyword"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("SHOW, TRANSACTION")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);