(window.webpackJsonp=window.webpackJsonp||[]).push([[1101],{1531:function(t,a,e){"use strict";e.r(a);var s=e(2),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"bitmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bitmap"}},[t._v("#")]),t._v(" BITMAP")]),t._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("BITMAP\nBITMAP不能作为key列使用，建表时配合聚合类型为BITMAP_UNION。\n用户不需要指定长度和默认值。长度根据数据的聚合程度系统内控制。\n并且BITMAP列只能通过配套的bitmap_union_count、bitmap_union、bitmap_hash等函数进行查询或使用。\n\n离线场景下使用BITMAP会影响导入速度，在数据量大的情况下查询速度会慢于HLL，并优于Count Distinct。\n注意：实时场景下BITMAP如果不使用全局字典，使用了bitmap_hash()可能会导致有千分之一左右的误差。\n")])])]),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("select hour, BITMAP_UNION_COUNT(pv) over(order by hour) uv from(\n   select hour, BITMAP_UNION(device_id) as pv\n   from metric_table -- 查询每小时的累计UV\n   where datekey=20200622\ngroup by hour order by 1\n) final;\n")])])]),e("h3",{attrs:{id:"keywords"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[t._v("#")]),t._v(" keywords")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("BITMAP\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);