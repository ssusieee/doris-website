(window.webpackJsonp=window.webpackJsonp||[]).push([[1556],{2186:function(s,t,e){"use strict";e.r(t);var a=e(15),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[s._v("#")]),s._v(" UPDATE")]),s._v(" "),e("h3",{attrs:{id:"name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[s._v("#")]),s._v(" Name")]),s._v(" "),e("p",[s._v("UPDATE")]),s._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),e("p",[s._v("This statement is used to update the data (the update statement currently only supports the Unique Key model).")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" table_name\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" assignment_list\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" expression\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),s._v(":\n    {expr "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v("}\n\nassignment:\n    col_name "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),s._v("\n\nassignment_list:\n    assignment "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" assignment"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("Parameters")]),s._v(" "),e("ul",[e("li",[s._v("table_name: The target table of the data to be updated. Can be of the form 'db_name.table_name'")]),s._v(" "),e("li",[s._v("assignment_list: The target column to be updated, in the format 'col_name = value, col_name = value'")]),s._v(" "),e("li",[s._v("where expression: the condition that is expected to be updated, an expression that returns true or false can be")])]),s._v(" "),e("p",[s._v("Note")]),s._v(" "),e("p",[s._v("The current UPDATE statement only supports row updates on the Unique model, and there may be data conflicts caused by concurrent updates.\nAt present, Doris does not deal with such problems, and users need to avoid such problems from the business side.")]),s._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),e("p",[s._v("The "),e("code",[s._v("test")]),s._v(" table is a unique model table, which contains four columns: k1, k2, v1, v2. Where k1, k2 are keys, v1, v2 are values, and the aggregation method is Replace.")]),s._v(" "),e("ol",[e("li",[s._v("Update the v1 column in the 'test' table that satisfies the conditions k1 =1 , k2 =2 to 1")])]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" test "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" v1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" k1"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" k2"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("Increment the v1 column of the k1=1 column in the 'test' table by 1")])]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" test "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" v1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" v1"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" k1"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"keywords"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" Keywords")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("UPDATE\n")])])]),e("h3",{attrs:{id:"best-practice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[s._v("#")]),s._v(" Best Practice")])])}),[],!1,null,null,null);t.default=n.exports}}]);