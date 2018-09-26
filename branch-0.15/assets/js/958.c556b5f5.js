(window.webpackJsonp=window.webpackJsonp||[]).push([[958],{1396:function(a,n,r){"use strict";r.r(n);var s=r(55),t=Object(s.a)({},(function(){var a=this,n=a.$createElement,r=a._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"json-array"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#json-array"}},[a._v("#")]),a._v(" json_array")]),a._v(" "),r("h2",{attrs:{id:"description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),r("h3",{attrs:{id:"syntax"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[a._v("#")]),a._v(" Syntax")]),a._v(" "),r("p",[r("code",[a._v("VARCHAR json_array(VARCHAR,...)")])]),a._v(" "),r("p",[a._v("生成一个包含指定元素的json数组,未指定时返回空数组")]),a._v(" "),r("h2",{attrs:{id:"example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('MySQL> select json_array();\n+--------------+\n| json_array() |\n+--------------+\n| []           |\n+--------------+\n\nMySQL> select json_array(null);\n+--------------------+\n| json_array(\'NULL\') |\n+--------------------+\n| [NULL]             |\n+--------------------+\n\n\nMySQL> SELECT json_array(1, "abc", NULL, TRUE, CURTIME());\n+-----------------------------------------------+\n| json_array(1, \'abc\', \'NULL\', TRUE, curtime()) |\n+-----------------------------------------------+\n| [1, "abc", NULL, TRUE, "10:41:15"]            |\n+-----------------------------------------------+\n\n\nMySQL> select json_array("a", null, "c");\n+------------------------------+\n| json_array(\'a\', \'NULL\', \'c\') |\n+------------------------------+\n| ["a", NULL, "c"]             |\n+------------------------------+\n')])])]),r("h2",{attrs:{id:"keyword"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),r("p",[a._v("json_array")])])}),[],!1,null,null,null);n.default=t.exports}}]);