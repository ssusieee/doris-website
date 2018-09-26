(window.webpackJsonp=window.webpackJsonp||[]).push([[1986],{2611:function(t,s,a){"use strict";a.r(s);var e=a(15),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"hll-union-agg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hll-union-agg"}},[t._v("#")]),t._v(" HLL_UNION_AGG")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("p",[a("code",[t._v("HLL_UNION_AGG(hll)")])]),t._v(" "),a("p",[t._v("HLL是基于HyperLogLog算法的工程实现，用于保存HyperLogLog计算过程的中间结果")]),t._v(" "),a("p",[t._v("它只能作为表的value列类型、通过聚合来不断的减少数据量，以此来实现加快查询的目的")]),t._v(" "),a("p",[t._v("基于它得到的是一个估算结果，误差大概在1%左右，hll列是通过其它列或者导入数据里面的数据生成的")]),t._v(" "),a("p",[t._v("导入的时候通过hll_hash函数来指定数据中哪一列用于生成hll列，它常用于替代count distinct，通过结合rollup在业务上用于快速计算uv等")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("MySQL > select HLL_UNION_AGG(uv_set) from test_uv;;\n+-------------------------+\n| HLL_UNION_AGG(`uv_set`) |\n+-------------------------+\n| 17721                   |\n+-------------------------+\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("p",[t._v("HLL_UNION_AGG,HLL,UNION,AGG")])])}),[],!1,null,null,null);s.default=r.exports}}]);