(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{845:function(t,e,a){"use strict";a.r(e);var r=a(15),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"odbc-external-table-of-doris"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#odbc-external-table-of-doris"}},[t._v("#")]),t._v(" ODBC External Table Of Doris")]),t._v(" "),a("p",[t._v("ODBC external table of Doris provides Doris access to external tables through the standard interface for database access (ODBC). The external table eliminates the tedious data import work and enables Doris to have the ability to access all kinds of databases. It solves the data analysis problem of external tables with Doris' OLAP capability.")]),t._v(" "),a("ol",[a("li",[t._v("Support various data sources to access Doris")]),t._v(" "),a("li",[t._v("Support Doris query with tables in various data sources to perform more complex analysis operations")]),t._v(" "),a("li",[t._v("Use insert into to write the query results executed by Doris to the external data source")])]),t._v(" "),a("p",[t._v("This document mainly introduces the implementation principle and usage of this ODBC external table.")]),t._v(" "),a("h2",{attrs:{id:"glossary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[t._v("#")]),t._v(" Glossary")]),t._v(" "),a("h3",{attrs:{id:"noun-in-doris"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#noun-in-doris"}},[t._v("#")]),t._v(" Noun in Doris")]),t._v(" "),a("ul",[a("li",[t._v("FE: Frontend, the front-end node of Doris. Responsible for metadata management and request access.")]),t._v(" "),a("li",[t._v("BE: Backend, Doris's back-end node. Responsible for query execution and data storage.")])]),t._v(" "),a("h2",{attrs:{id:"how-to-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[t._v("#")]),t._v(" How To Use")]),t._v(" "),a("h3",{attrs:{id:"create-odbc-external-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-odbc-external-table"}},[t._v("#")]),t._v(" Create ODBC External Table")]),t._v(" "),a("p",[t._v("Refer to the specific table syntax:"),a("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE.html"}},[t._v("CREATE TABLE")])],1),t._v(" "),a("h4",{attrs:{id:"_1-creating-odbc-external-table-without-resource"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-creating-odbc-external-table-without-resource"}},[t._v("#")]),t._v(" 1. Creating ODBC external table without resource")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('CREATE EXTERNAL TABLE `baseall_oracle` (\n  `k1` decimal(9, 3) NOT NULL COMMENT "",\n  `k2` char(10) NOT NULL COMMENT "",\n  `k3` datetime NOT NULL COMMENT "",\n  `k5` varchar(20) NOT NULL COMMENT "",\n  `k6` double NOT NULL COMMENT ""\n) ENGINE=ODBC\nCOMMENT "ODBC"\nPROPERTIES (\n"host" = "192.168.0.1",\n"port" = "8086",\n"user" = "test",\n"password" = "test",\n"database" = "test",\n"table" = "baseall",\n"driver" = "Oracle 19 ODBC driver",\n"type" = "oracle"\n);\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("h4",{attrs:{id:"_2-creating-odbc-external-table-by-resource-recommended"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-creating-odbc-external-table-by-resource-recommended"}},[t._v("#")]),t._v(" 2. Creating ODBC external table by resource (recommended)")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('CREATE EXTERNAL RESOURCE `oracle_odbc`\nPROPERTIES (\n"type" = "odbc_catalog",\n"host" = "192.168.0.1",\n"port" = "8086",\n"user" = "test",\n"password" = "test",\n"database" = "test",\n"odbc_type" = "oracle",\n"driver" = "Oracle 19 ODBC driver"\n);\n     \nCREATE EXTERNAL TABLE `baseall_oracle` (\n  `k1` decimal(9, 3) NOT NULL COMMENT "",\n  `k2` char(10) NOT NULL COMMENT "",\n  `k3` datetime NOT NULL COMMENT "",\n  `k5` varchar(20) NOT NULL COMMENT "",\n  `k6` double NOT NULL COMMENT ""\n) ENGINE=ODBC\nCOMMENT "ODBC"\nPROPERTIES (\n"odbc_catalog_resource" = "oracle_odbc",\n"database" = "test",\n"table" = "baseall"\n);\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br")])]),a("p",[t._v("The following parameters are accepted by ODBC external table:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("hosts")])]),t._v(" "),a("td",[t._v("IP address of external database")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("driver")])]),t._v(" "),a("td",[t._v("The driver name of ODBC Driver, which needs to be/conf/odbcinst.ini. The driver names should be consistent.")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("type")])]),t._v(" "),a("td",[t._v("The type of external database, currently supports Oracle, MySQL and PostgerSQL")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("user")])]),t._v(" "),a("td",[t._v("The user name of database")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("password")])]),t._v(" "),a("td",[t._v("password for the user")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("charset")])]),t._v(" "),a("td",[t._v("charset of connection")])])])]),t._v(" "),a("p",[t._v("Remark：\nIn addition to adding the above parameters to "),a("code",[t._v("PROPERTIES")]),t._v(", you can also add parameters specific to each database's ODBC driver implementation, such as "),a("code",[t._v("sslverify")]),t._v(" for mysql, etc.")]),t._v(" "),a("h5",{attrs:{id:"installation-and-configuration-of-odbc-driver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-and-configuration-of-odbc-driver"}},[t._v("#")]),t._v(" Installation and configuration of ODBC driver")]),t._v(" "),a("p",[t._v("Each database will provide ODBC access driver. Users can install the corresponding ODBC driver lib library according to the official recommendation of each database.")]),t._v(" "),a("p",[t._v("After installation of ODBC driver, find the path of the driver lib Library of the corresponding database. The modify be/conf/odbcinst.ini Configuration like:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[MySQL Driver]\nDescription     = ODBC for MySQL\nDriver          = /usr/lib64/libmyodbc8w.so\nFileUsage       = 1 \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("ul",[a("li",[a("code",[t._v("[]")]),t._v(": The corresponding driver name in is the driver name. When creating an external table, the driver name of the external table should be consistent with that in the configuration file.")]),t._v(" "),a("li",[a("code",[t._v("Driver=")]),t._v(": This should be setted in according to the actual be installation path of the driver. It is essentially the path of a dynamic library. Here, we need to ensure that the pre dependencies of the dynamic library are met.")])]),t._v(" "),a("p",[a("strong",[t._v("Remember, all BE nodes are required to have the same driver installed, the same installation path and the same be/conf/odbcinst.ini config.")])]),t._v(" "),a("h3",{attrs:{id:"query-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-usage"}},[t._v("#")]),t._v(" Query usage")]),t._v(" "),a("p",[t._v("After the ODBC external table is create in Doris, it is no different from ordinary Doris tables except that the data model (rollup, pre aggregation, materialized view, etc.) in Doris cannot be used.")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("select * from oracle_table where k1 > 1000 and k3 ='term' or k4 like '%doris'\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"data-write"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-write"}},[t._v("#")]),t._v(" Data write")]),t._v(" "),a("p",[t._v("After the ODBC external table is create in Doris, the data can be written directly by the "),a("code",[t._v("insert into")]),t._v(" statement, the query results of Doris can be written to the ODBC external table, or the data can be imported from one ODBC table to another.")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('insert into oracle_table values(1, "doris");\ninsert into oracle_table select * from postgre_table;\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h4",{attrs:{id:"transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction"}},[t._v("#")]),t._v(" Transaction")]),t._v(" "),a("p",[t._v("The data of Doris is written to the external table by a group of batch. If the import is interrupted, the data written before may need to be rolled back. Therefore, the ODBC external table supports transactions when data is written. Transaction support needs to be supported set by session variable: "),a("code",[t._v("enable_odbc_transcation")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("set enable_odbc_transcation = true; \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Transactions ensure the atomicity of ODBC external table writing, but it will reduce the performance of data writing ., so we can consider turning on the way as appropriate.")]),t._v(" "),a("h2",{attrs:{id:"database-odbc-version-correspondence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-odbc-version-correspondence"}},[t._v("#")]),t._v(" Database ODBC version correspondence")]),t._v(" "),a("h3",{attrs:{id:"centos-operating-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-operating-system"}},[t._v("#")]),t._v(" Centos Operating System")]),t._v(" "),a("p",[t._v("The unixODBC versions used are: 2.3.1, Doris 0.15, centos 7.9, all of which are installed using yum.")]),t._v(" "),a("h4",{attrs:{id:"_1-mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-mysql"}},[t._v("#")]),t._v(" 1.mysql")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Mysql version")]),t._v(" "),a("th",[t._v("Mysql ODBC version")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("8.0.27")]),t._v(" "),a("td",[t._v("8.0.27, 8.026")])]),t._v(" "),a("tr",[a("td",[t._v("5.7.36")]),t._v(" "),a("td",[t._v("5.3.11, 5.3.13")])]),t._v(" "),a("tr",[a("td",[t._v("5.6.51")]),t._v(" "),a("td",[t._v("5.3.11, 5.3.13")])]),t._v(" "),a("tr",[a("td",[t._v("5.5.62")]),t._v(" "),a("td",[t._v("5.3.11, 5.3.13")])])])]),t._v(" "),a("h4",{attrs:{id:"_2-postgresql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-postgresql"}},[t._v("#")]),t._v(" 2. PostgreSQL")]),t._v(" "),a("p",[t._v("PostgreSQL's yum source rpm package address:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://download.postgresql.org/pub/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("This contains all versions of PostgreSQL from 9.x to 14.x, including the corresponding ODBC version, which can be installed as needed.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("PostgreSQL Version")]),t._v(" "),a("th",[t._v("PostgreSQL ODBC Version")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("12.9")]),t._v(" "),a("td",[t._v("postgresql12-odbc-13.02.0000")])]),t._v(" "),a("tr",[a("td",[t._v("13.5")]),t._v(" "),a("td",[t._v("postgresql13-odbc-13.02.0000")])]),t._v(" "),a("tr",[a("td",[t._v("14.1")]),t._v(" "),a("td",[t._v("postgresql14-odbc-13.02.0000")])]),t._v(" "),a("tr",[a("td",[t._v("9.6.24")]),t._v(" "),a("td",[t._v("postgresql96-odbc-13.02.0000")])]),t._v(" "),a("tr",[a("td",[t._v("10.6")]),t._v(" "),a("td",[t._v("postgresql10-odbc-13.02.0000")])]),t._v(" "),a("tr",[a("td",[t._v("11.6")]),t._v(" "),a("td",[t._v("postgresql11-odbc-13.02.0000")])])])]),t._v(" "),a("h4",{attrs:{id:"_3-oracle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-oracle"}},[t._v("#")]),t._v(" 3. Oracle")]),t._v(" "),a("h4",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Oracle版本")]),t._v(" "),a("th",[t._v("Oracle ODBC版本")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Oracle Database 11g Enterprise Edition Release 11.2.0.1.0 - 64bit Production")]),t._v(" "),a("td",[t._v("oracle-instantclient19.13-odbc-19.13.0.0.0")])]),t._v(" "),a("tr",[a("td",[t._v("Oracle Database 12c Standard Edition Release 12.2.0.1.0 - 64bit Production")]),t._v(" "),a("td",[t._v("oracle-instantclient19.13-odbc-19.13.0.0.0")])]),t._v(" "),a("tr",[a("td",[t._v("Oracle Database 18c Enterprise Edition Release 18.0.0.0.0 - Production")]),t._v(" "),a("td",[t._v("oracle-instantclient19.13-odbc-19.13.0.0.0")])]),t._v(" "),a("tr",[a("td",[t._v("Oracle Database 19c Enterprise Edition Release 19.0.0.0.0 - Production")]),t._v(" "),a("td",[t._v("oracle-instantclient19.13-odbc-19.13.0.0.0")])]),t._v(" "),a("tr",[a("td",[t._v("Oracle Database 21c Enterprise Edition Release 21.0.0.0.0 - Production")]),t._v(" "),a("td",[t._v("oracle-instantclient19.13-odbc-19.13.0.0.0")])])])]),t._v(" "),a("p",[t._v("Oracle ODBC driver version download address:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://download.oracle.com/otn_software/linux/instantclient/1913000/oracle-instantclient19.13-sqlplus-19.13.0.0.0-2.x86_64.rpm\nhttps://download.oracle.com/otn_software/linux/instantclient/1913000/oracle-instantclient19.13-devel-19.13.0.0.0-2.x86_64.rpm\nhttps://download.oracle.com/otn_software/linux/instantclient/1913000/oracle-instantclient19.13-odbc-19.13.0.0.0-2.x86_64.rpm\nhttps://download.oracle.com/otn_software/linux/instantclient/1913000/oracle-instantclient19.13-basic-19.13.0.0.0-2.x86_64.rpm\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"ubuntu-operating-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-operating-system"}},[t._v("#")]),t._v(" Ubuntu operating system")]),t._v(" "),a("p",[t._v("The unixODBC versions used are: 2.3.4, Doris 0.15, Ubuntu 20.04")]),t._v(" "),a("h4",{attrs:{id:"_1-mysql-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-mysql-2"}},[t._v("#")]),t._v(" 1. Mysql")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Mysql version")]),t._v(" "),a("th",[t._v("Mysql ODBC version")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("8.0.27")]),t._v(" "),a("td",[t._v("8.0.11, 5.3.13")])])])]),t._v(" "),a("p",[t._v("Currently only tested this version, other versions will be added after testing")]),t._v(" "),a("h4",{attrs:{id:"_2-postgresql-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-postgresql-2"}},[t._v("#")]),t._v(" 2. PostgreSQL")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("PostgreSQL Version")]),t._v(" "),a("th",[t._v("PostgreSQL ODBC Version")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("12.9")]),t._v(" "),a("td",[t._v("psqlodbc-12.02.0000")])])])]),t._v(" "),a("p",[t._v("For other versions, as long as you download the ODBC driver version that matches the major version of the database, there is no problem. This will continue to supplement the test results of other versions under the Ubuntu system.")]),t._v(" "),a("h4",{attrs:{id:"_3-oracle-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-oracle-2"}},[t._v("#")]),t._v(" 3. Oracle")]),t._v(" "),a("p",[t._v("The same as the Oracle database and ODBC correspondence of the Centos operating system, and the following method is used to install the rpm package under ubuntu.")]),t._v(" "),a("p",[t._v("In order to install rpm packages under ubuntu, we also need to install an alien, which is a tool that can convert rpm packages into deb installation packages")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo apt-get install alien\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Then execute the installation of the above four packages")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo alien -i oracle-instantclient19.13-basic-19.13.0.0.0-2.x86_64.rpm\nsudo alien -i oracle-instantclient19.13-devel-19.13.0.0.0-2.x86_64.rpm\nsudo alien -i oracle-instantclient19.13-odbc-19.13.0.0.0-2.x86_64.rpm\nsudo alien -i oracle-instantclient19.13-sqlplus-19.13.0.0.0-2.x86_64.rpm\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"data-type-mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-type-mapping"}},[t._v("#")]),t._v(" Data type mapping")]),t._v(" "),a("p",[t._v("There are different data types among different databases. Here, the types in each database and the data type matching in Doris are listed.")]),t._v(" "),a("h3",{attrs:{id:"mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[t._v("#")]),t._v(" MySQL")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("MySQL")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Doris")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Alternation rules")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("CHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("CHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Only UTF8 encoding is supported")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("VARCHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("VARCHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Only UTF8 encoding is supported")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("TINYINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("TINYINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("SMALLINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("SMALLINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("INT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("INT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("BIGINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BIGINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DOUBLE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DOUBLE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DATETIME")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DATETIME")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DECIMAL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DECIMAL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("h3",{attrs:{id:"postgresql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postgresql"}},[t._v("#")]),t._v(" PostgreSQL")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("PostgreSQL")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Doris")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Alternation rules")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("CHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("CHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Only UTF8 encoding is supported")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("VARCHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("VARCHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Only UTF8 encoding is supported")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("REAL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("SMALLINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("SMALLINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("INT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("INT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("BIGINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BIGINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DOUBLE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DOUBLE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("TIMESTAMP")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DATETIME")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DECIMAL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DECIMAL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("h3",{attrs:{id:"oracle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle"}},[t._v("#")]),t._v(" Oracle")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Oracle")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Doris")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Alternation rules")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("not support")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Oracle can replace Boolean with number (1)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("CHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("CHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("VARCHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("VARCHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("not support")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("TINYINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Oracle can be replaced by NUMBER")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("SMALLINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("SMALLINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("INT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("INT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("not support")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BIGINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Oracle can be replaced by NUMBER")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("not support")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DOUBLE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Oracle can be replaced by NUMBER")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DATETIME")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DATETIME")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("NUMBER")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DECIMAL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("h3",{attrs:{id:"sqlserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sqlserver"}},[t._v("#")]),t._v(" SQLServer")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("SQLServer")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Doris")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Alternation rules")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("CHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("CHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Only UTF8 encoding is supported")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("VARCHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("VARCHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Only UTF8 encoding is supported")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DATE/")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("REAL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("TINYINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("TINYINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("SMALLINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("SMALLINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("INT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("INT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("BIGINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BIGINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DOUBLE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DATETIME/DATETIME2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DATETIME")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DECIMAL/NUMERIC")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DECIMAL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("h2",{attrs:{id:"best-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[t._v("#")]),t._v(" Best Practices")]),t._v(" "),a("p",[t._v("Sync for small amounts of data")]),t._v(" "),a("p",[t._v("For example, a table in Mysql has 1 million data. If you want to synchronize to doris, you can use ODBC to map the data. When using"),a("RouterLink",{attrs:{to:"/docs/data-operate/import/import-way/insert-into-manual.html"}},[t._v("insert into")]),t._v("way to synchronize data to Doris, if you want to synchronize large batches of data,Can be used in batches"),a("RouterLink",{attrs:{to:"/docs/data-operate/import/import-way/insert-into-manual.html"}},[t._v("insert into")]),t._v("Sync (deprecated)")],1),t._v(" "),a("h2",{attrs:{id:"q-a"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[t._v("#")]),t._v(" Q&A")]),t._v(" "),a("ol",[a("li",[t._v("Relationship with the original external table of MySQL?")])]),t._v(" "),a("p",[t._v("After accessing the ODBC external table, the original way to access the MySQL external table will be gradually abandoned. If you have not used the MySQL external table before, it is recommended that the newly accessed MySQL tables use ODBC external table directly.")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Besides MySQL, Oracle, SQLServer, PostgreSQL, can doris support more databases?")])]),t._v(" "),a("p",[t._v("Currently, Doris only adapts to MySQL, Oracle, SQLServer, PostgreSQL. The adaptation of other databases is under planning. In principle, any database that supports ODBC access can be accessed through the ODBC external table. If you need to access other databases, you are welcome to modify the code and contribute to Doris.")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[t._v("When is it appropriate to use ODBC external tables?")]),t._v(" "),a("p",[t._v("Generally, when the amount of external data is small and less than 100W, it can be accessed through ODBC external table. Since external table the cannot play the role of Doris in the storage engine and will bring additional network overhead, it is recommended to determine whether to access through external tables or import data into Doris according to the actual access delay requirements for queries.")])]),t._v(" "),a("li",[a("p",[t._v("Garbled code in Oracle access?")]),t._v(" "),a("p",[t._v("Add the following parameters to the BE start up script: "),a("code",[t._v("export NLS_LANG=AMERICAN_AMERICA.AL32UTF8")]),t._v("R, Restart all be")])]),t._v(" "),a("li",[a("p",[t._v("ANSI Driver or Unicode Driver?")]),t._v(" "),a("p",[t._v("Currently, ODBC supports both ANSI and Unicode driver forms, while Doris only supports Unicode driver. If you force the use of ANSI driver, the query results may be wrong.")])]),t._v(" "),a("li",[a("p",[t._v("Report Errors: "),a("code",[t._v("driver connect Err: 01000 [unixODBC][Driver Manager]Can't open lib 'Xxx' : file not found (0)")])]),t._v(" "),a("p",[t._v("The driver for the corresponding data is not installed on each BE, or it is not installed in the be/conf/odbcinst.ini configure the correct path, or create the table with the driver namebe/conf/odbcinst.ini different")])]),t._v(" "),a("li",[a("p",[t._v("Report Errors: "),a("code",[t._v("Fail to convert odbc value 'PALO ' TO INT on column:'A'")])]),t._v(" "),a("p",[t._v("Type conversion error, type of column "),a("code",[t._v("A")]),t._v(" mapping of actual column type is different, needs to be modified")])]),t._v(" "),a("li",[a("p",[t._v("BE crash occurs when using old MySQL table and ODBC external driver at the same time")])])]),t._v(" "),a("p",[t._v("This is the compatibility problem between MySQL database ODBC driver and existing Doris depending on MySQL lib. The recommended solutions are as follows:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Method 1: replace the old MySQL External Table by ODBC External Table, recompile BE close options "),a("strong",[t._v("WITH_MySQL")])])]),t._v(" "),a("li",[a("p",[t._v("Method 2: Do not use the latest 8. X MySQL ODBC driver replace with the 5. X MySQL ODBC driver")])])]),t._v(" "),a("ol",{attrs:{start:"9"}},[a("li",[a("p",[t._v("Push down the filtering condition")]),t._v(" "),a("p",[t._v("The current ODBC appearance supports push down under filtering conditions. MySQL external table can support push down under all conditions. The functions of other databases are different from Doris, which will cause the push down query to fail. At present, except for the MySQL, other databases do not support push down of function calls. Whether Doris pushes down the required filter conditions can be confirmed by the 'explain' query statement.")])]),t._v(" "),a("li",[a("p",[t._v("Report Errors: "),a("code",[t._v("driver connect Err: xxx")])]),t._v(" "),a("p",[t._v("Connection to the database fails. The"),a("code",[t._v("Err: part")]),t._v(" represents the error of different database connection failures. This is usually a configuration problem. You should check whether the IP address, port or account password are mismatched.")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);