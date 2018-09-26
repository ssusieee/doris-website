(window.webpackJsonp=window.webpackJsonp||[]).push([[338],{725:function(t,e,a){"use strict";a.r(e);var s=a(43),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"percentile-approx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#percentile-approx"}},[t._v("#")]),t._v(" PERCENTILE_APPROX")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("p",[a("code",[t._v("PERCENTILE_APPROX(expr, DOUBLE p[, DOUBLE compression])")])]),t._v(" "),a("p",[t._v("返回第p个百分位点的近似值，p的值介于0到1之间")]),t._v(" "),a("p",[t._v("compression参数是可选项，可设置范围是[2048, 10000]，值越大，精度越高，内存消耗越大，计算耗时越长。\ncompression参数未指定或设置的值在[2048, 10000]范围外，以10000的默认值运行")]),t._v(" "),a("p",[t._v("该函数使用固定大小的内存，因此对于高基数的列可以使用更少的内存，可用于计算tp99等统计值")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("MySQL > select `table`, percentile_approx(cost_time,0.99) from log_statis group by `table`;\n+---------------------+---------------------------+\n| table    | percentile_approx(`cost_time`, 0.99) |\n+----------+--------------------------------------+\n| test     |                                54.22 |\n+----------+--------------------------------------+\n\nMySQL > select `table`, percentile_approx(cost_time,0.99, 4096) from log_statis group by `table`;\n+---------------------+---------------------------+\n| table    | percentile_approx(`cost_time`, 0.99, 4096.0) |\n+----------+--------------------------------------+\n| test     |                                54.21 |\n+----------+--------------------------------------+\n##keyword\nPERCENTILE_APPROX,PERCENTILE,APPROX\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);