(window.webpackJsonp=window.webpackJsonp||[]).push([[3650],{4280:function(t,e,a){"use strict";a.r(e);var s=a(15),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"yearweek"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yearweek"}},[t._v("#")]),t._v(" yearweek")]),t._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("p",[a("code",[t._v("INT YEARWEEK(DATE date)")]),t._v(" "),a("code",[t._v("INT YEARWEEK(DATE date, INT mode)")])]),t._v(" "),a("p",[t._v("返回指定日期的年份和星期数。mode的值默认为0。\n当日期所在的星期属于上一年时，返回的是上一年的年份和星期数；\n当日期所在的星期属于下一年时，返回的是下一年的年份，星期数为1。\n参数mode的作用参见下面的表格：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Mode")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("星期的第一天")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("星期数的范围")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("第一个星期的定义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("星期日")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1-53")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("这一年中的第一个星期日所在的星期")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("星期一")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1-53")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("这一年的日期所占的天数大于等于4天的第一个星期")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("星期日")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1-53")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("这一年中的第一个星期日所在的星期")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("星期一")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1-53")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("这一年的日期所占的天数大于等于4天的第一个星期")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("星期日")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1-53")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("这一年的日期所占的天数大于等于4天的第一个星期")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("星期一")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1-53")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("这一年中的第一个星期一所在的星期")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("星期日")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1-53")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("这一年的日期所占的天数大于等于4天的第一个星期")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("7")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("星期一")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1-53")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("这一年中的第一个星期一所在的星期")])])])]),t._v(" "),a("p",[t._v("参数为Date或者Datetime类型")]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mysql> select yearweek('2021-1-1');\n+----------------------+\n| yearweek('2021-1-1') |\n+----------------------+\n|               202052 |\n+----------------------+\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mysql> select yearweek('2020-7-1');\n+----------------------+\n| yearweek('2020-7-1') |\n+----------------------+\n|               202026 |\n+----------------------+\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mysql> select yearweek('2024-12-30',1);\n+------------------------------------+\n| yearweek('2024-12-30 00:00:00', 1) |\n+------------------------------------+\n|                             202501 |\n+------------------------------------+\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h3",{attrs:{id:"keywords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[t._v("#")]),t._v(" keywords")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("YEARWEEK\n")])])])])}),[],!1,null,null,null);e.default=l.exports}}]);