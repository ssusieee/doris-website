(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{496:function(e,t,i){"use strict";i.r(t);var a=i(55),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"time-zone"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#time-zone"}},[e._v("#")]),e._v(" Time zone")]),e._v(" "),i("p",[e._v("Doris supports multiple time zone settings")]),e._v(" "),i("h2",{attrs:{id:"noun-interpretation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#noun-interpretation"}},[e._v("#")]),e._v(" Noun Interpretation")]),e._v(" "),i("ul",[i("li",[e._v("FE: Frontend, the front-end node of Doris. Responsible for metadata management and request access.")]),e._v(" "),i("li",[e._v("BE: Backend, Doris's back-end node. Responsible for query execution and data storage.")])]),e._v(" "),i("h2",{attrs:{id:"basic-concepts"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#basic-concepts"}},[e._v("#")]),e._v(" Basic concepts")]),e._v(" "),i("p",[e._v("There are multiple time zone related parameters in Doris")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("system_time_zone")]),e._v(":")])]),e._v(" "),i("p",[e._v("When the server starts, it will be set automatically according to the time zone set by the machine, which can not be modified after setting.")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("time_zone")]),e._v(":")])]),e._v(" "),i("p",[e._v("Server current time zone, set it at session level or global level.")]),e._v(" "),i("h2",{attrs:{id:"specific-operations"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#specific-operations"}},[e._v("#")]),e._v(" Specific operations")]),e._v(" "),i("ol",[i("li",[i("p",[i("code",[e._v("SHOW VARIABLES LIKE '% time_zone%'")])]),e._v(" "),i("p",[e._v("View the current time zone related configuration")])]),e._v(" "),i("li",[i("p",[i("code",[e._v("SET time_zone = 'Asia/Shanghai'")])]),e._v(" "),i("p",[e._v("This command can set the session level time zone, which will fail after disconnection.")])]),e._v(" "),i("li",[i("p",[i("code",[e._v("SET global time_zone = 'Asia/Shanghai'")])]),e._v(" "),i("p",[e._v("This command can set time zone parameters at the global level. The FE will persist the parameters and will not fail when the connection is disconnected.")])])]),e._v(" "),i("h3",{attrs:{id:"impact-of-time-zone"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#impact-of-time-zone"}},[e._v("#")]),e._v(" Impact of time zone")]),e._v(" "),i("p",[e._v("Time zone setting affects the display and storage of time zone sensitive values.")]),e._v(" "),i("p",[e._v("It includes the values displayed by time functions such as "),i("code",[e._v("NOW()")]),e._v(" or "),i("code",[e._v("CURTIME()")]),e._v(", as well as the time values in "),i("code",[e._v("SHOW LOAD")]),e._v(" and "),i("code",[e._v("SHOW BACKENDS")]),e._v(" statements.")]),e._v(" "),i("p",[e._v("However, it does not affect the "),i("code",[e._v("LESS THAN VALUE")]),e._v(" of the time-type partition column in the "),i("code",[e._v("CREATE TABLE")]),e._v(" statement, nor does it affect the display of values stored as "),i("code",[e._v("DATE/DATETIME")]),e._v(" type.")]),e._v(" "),i("p",[e._v("Functions affected by time zone:")]),e._v(" "),i("ul",[i("li",[i("p",[i("code",[e._v("FROM_UNIXTIME")]),e._v(": Given a UTC timestamp, return the date and time of the specified time zone, such as "),i("code",[e._v("FROM_UNIXTIME(0)")]),e._v(", return the CST time zone: "),i("code",[e._v("1970-01-08:00")]),e._v(".")])]),e._v(" "),i("li",[i("p",[i("code",[e._v("UNIX_TIMESTAMP")]),e._v(": Given a specified time zone date and time, return UTC timestamp, such as CST time zone "),i("code",[e._v("UNIX_TIMESTAMP('1970-01 08:00:00')")]),e._v(", return "),i("code",[e._v("0")]),e._v(".")])]),e._v(" "),i("li",[i("p",[i("code",[e._v("CURTIME")]),e._v(": Returns the datetime of specified time zone.")])]),e._v(" "),i("li",[i("p",[i("code",[e._v("NOW")]),e._v(": Returns the specified date and time of specified time zone.")])]),e._v(" "),i("li",[i("p",[i("code",[e._v("CONVERT_TZ")]),e._v(": Converts a date and time from one specified time zone to another.")])])]),e._v(" "),i("h2",{attrs:{id:"restrictions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#restrictions"}},[e._v("#")]),e._v(" Restrictions")]),e._v(" "),i("p",[e._v("Time zone values can be given in several formats, case-insensitive:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("A string representing UTC offset, such as '+10:00' or '-6:00'.")])]),e._v(" "),i("li",[i("p",[e._v('Standard time zone formats, such as "Asia/Shanghai", "America/Los_Angeles"')])]),e._v(" "),i("li",[i("p",[e._v("Abbreviated time zone formats such as MET and CTT are not supported. Because the abbreviated time zone is ambiguous in different scenarios, it is not recommended to use it.")])]),e._v(" "),i("li",[i("p",[e._v('In order to be compatible with Doris and support CST abbreviated time zone, CST will be internally transferred to "Asia/Shanghai", which is Chinese standard time zone.')])])]),e._v(" "),i("h2",{attrs:{id:"time-zone-format-list"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#time-zone-format-list"}},[e._v("#")]),e._v(" Time zone format list")]),e._v(" "),i("p",[e._v("[List of TZ database time zones] (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)")]),e._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/apache/incubator-doris/blob/master/docs/documentation/en/administrator-guide/time-zone_EN.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Edit on GitHub"),i("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);