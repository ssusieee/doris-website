(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{740:function(e,t,i){"use strict";i.r(t);var a=i(15),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"file-manager"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#file-manager"}},[e._v("#")]),e._v(" File Manager")]),e._v(" "),i("p",[e._v("Some functions in Doris require some user-defined files. For example, public keys, key files, certificate files and so on are used to access external data sources. The File Manager provides a function that allows users to upload these files in advance and save them in Doris system, which can then be referenced or accessed in other commands.")]),e._v(" "),i("h2",{attrs:{id:"noun-interpretation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#noun-interpretation"}},[e._v("#")]),e._v(" Noun Interpretation")]),e._v(" "),i("ul",[i("li",[e._v("FE: Frontend, the front-end node of Doris. Responsible for metadata management and request access.")]),e._v(" "),i("li",[e._v("BE: Backend, Doris's back-end node. Responsible for query execution and data storage.")]),e._v(" "),i("li",[e._v("BDBJE: Oracle Berkeley DB Java Edition. Distributed embedded database for persistent metadata in FE.")]),e._v(" "),i("li",[e._v("SmallFileMgr: File Manager. Responsible for creating and maintaining user files.")])]),e._v(" "),i("h2",{attrs:{id:"basic-concepts"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#basic-concepts"}},[e._v("#")]),e._v(" Basic concepts")]),e._v(" "),i("p",[e._v("Files are files created and saved by users in Doris.")]),e._v(" "),i("p",[e._v("A file is located by "),i("code",[e._v("database")]),e._v(", "),i("code",[e._v("catalog")]),e._v(", "),i("code",[e._v("file_name")]),e._v(". At the same time, each file also has a globally unique ID (file_id), which serves as the identification in the system.")]),e._v(" "),i("p",[e._v("File creation and deletion can only be performed by users with "),i("code",[e._v("admin")]),e._v(" privileges. A file belongs to a database. Users who have access to a database (queries, imports, modifications, etc.) can use the files created under the database.")]),e._v(" "),i("h2",{attrs:{id:"specific-operation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#specific-operation"}},[e._v("#")]),e._v(" Specific operation")]),e._v(" "),i("p",[e._v("File management has three main commands: "),i("code",[e._v("CREATE FILE")]),e._v(", "),i("code",[e._v("SHOW FILE")]),e._v(" and "),i("code",[e._v("DROP FILE")]),e._v(", creating, viewing and deleting files respectively. The specific syntax of these three commands can be viewed by connecting to Doris and executing "),i("code",[e._v("HELP cmd;")]),e._v(".")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("CREATE FILE")]),e._v(" "),i("p",[e._v("In the command to create a file, the user must provide the following information:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("file_name: File name. User-defined, unique within a catalog.")])]),e._v(" "),i("li",[i("p",[e._v("Catalog: Category of files. User-defined, unique within a database.")]),e._v(" "),i("blockquote",[i("p",[e._v("Doris also has some special classification names for specific commands.")])]),e._v(" "),i("blockquote",[i("ol",[i("li",[e._v("Kafka")])])]),e._v(" "),i("blockquote",[i("p",[e._v('When the data source is specified as Kafka in the routine Import command and the file needs to be referenced, Doris defaults to looking for the file from the catalog category named "kafka".')])])]),e._v(" "),i("li",[i("p",[e._v("url: the download address of the file. Currently, only unauthenticated HTTP download addresses are supported. This download address is only used to download files from this address when executing the create file command. When the file is successfully created and saved in Doris, the address will no longer be used.")])]),e._v(" "),i("li",[i("p",[e._v("md5: optional. The MD5 value of the file. If the user provides this value, the MD5 value will be checked after the file is downloaded. File creation fails if validation fails.")])])]),e._v(" "),i("p",[e._v("When the file is created successfully, the file-related information will be persisted in Doris. Users can view successfully created files through the "),i("code",[e._v("SHOW FILE")]),e._v(" command.")])]),e._v(" "),i("li",[i("p",[e._v("SHOW FILE")]),e._v(" "),i("p",[e._v("This command allows you to view files that have been created successfully. Specific operations see: "),i("code",[e._v("HELP SHOW FILE;")])])]),e._v(" "),i("li",[i("p",[e._v("DROP FILE")]),e._v(" "),i("p",[e._v("This command can delete a file that has been created. Specific operations see: "),i("code",[e._v("HELP DROP FILE;")])])])]),e._v(" "),i("h2",{attrs:{id:"implementation-details"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#implementation-details"}},[e._v("#")]),e._v(" Implementation details")]),e._v(" "),i("h3",{attrs:{id:"create-and-delete-files"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#create-and-delete-files"}},[e._v("#")]),e._v(" Create and delete files")]),e._v(" "),i("p",[e._v("When the user executes the "),i("code",[e._v("CREATE FILE")]),e._v(" command, FE downloads the file from a given URL. The contents of the file are stored in FE memory directly in the form of Base64 encoding. At the same time, the file content and meta-information related to the file will be persisted in BDBJE. All created files, their meta-information and file content reside in FE memory. If the FE goes down and restarts, meta information and file content will also be loaded into memory from the BDBJE. When a file is deleted, the relevant information is deleted directly from FE memory and persistent information is deleted from BDBJE.")]),e._v(" "),i("h3",{attrs:{id:"use-of-documents"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#use-of-documents"}},[e._v("#")]),e._v(" Use of documents")]),e._v(" "),i("p",[e._v("If the FE side needs to use the created file, SmallFileMgr will directly save the data in FE memory as a local file, store it in the specified directory, and return the local file path for use.")]),e._v(" "),i("p",[e._v("If the BE side needs to use the created file, BE will download the file content to the specified directory on BE through FE's HTTP interface "),i("code",[e._v("api/get_small_file")]),e._v(" for use. At the same time, BE also records the information of the files that have been downloaded in memory. When BE requests a file, it first checks whether the local file exists and verifies it. If the validation passes, the local file path is returned directly. If the validation fails, the local file is deleted and downloaded from FE again. When BE restarts, local files are preloaded into memory.")]),e._v(" "),i("h2",{attrs:{id:"use-restrictions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#use-restrictions"}},[e._v("#")]),e._v(" Use restrictions")]),e._v(" "),i("p",[e._v("Because the file meta-information and content are stored in FE memory. So by default, only files with size less than 1MB can be uploaded. And the total number of files is limited to 100. The configuration items described in the next section can be modified.")]),e._v(" "),i("h2",{attrs:{id:"relevant-configuration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#relevant-configuration"}},[e._v("#")]),e._v(" Relevant configuration")]),e._v(" "),i("ol",[i("li",[e._v("FE configuration")])]),e._v(" "),i("ul",[i("li",[i("p",[i("code",[e._v("Small_file_dir")]),e._v(": The path used to store uploaded files, defaulting to the "),i("code",[e._v("small_files/")]),e._v(" directory of the FE runtime directory.")])]),e._v(" "),i("li",[i("p",[i("code",[e._v("max_small_file_size_bytes")]),e._v(": A single file size limit in bytes. The default is 1MB. File creation larger than this configuration will be rejected.")])]),e._v(" "),i("li",[i("p",[i("code",[e._v("max_small_file_number")]),e._v(": The total number of files supported by a Doris cluster. The default is 100. When the number of files created exceeds this value, subsequent creation will be rejected.")]),e._v(" "),i("blockquote",[i("p",[e._v("If you need to upload more files or increase the size limit of a single file, you can modify the "),i("code",[e._v("max_small_file_size_bytes")]),e._v(" and "),i("code",[e._v("max_small_file_number")]),e._v(" parameters by using the "),i("code",[e._v("ADMIN SET CONFIG")]),e._v(" command. However, the increase in the number and size of files will lead to an increase in FE memory usage.")])])])]),e._v(" "),i("ol",{attrs:{start:"2"}},[i("li",[e._v("BE configuration")])]),e._v(" "),i("ul",[i("li",[i("code",[e._v("Small_file_dir")]),e._v(": The path used to store files downloaded from FE by default is in the "),i("code",[e._v("lib/small_files/")]),e._v(" directory of the BE runtime directory.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);