(window.webpackJsonp=window.webpackJsonp||[]).push([[3287],{3917:function(s,e,a){"use strict";a.r(e);var t=a(15),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"create-encryptkey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-encryptkey"}},[s._v("#")]),s._v(" CREATE ENCRYPTKEY")]),s._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('CREATE ENCRYPTKEY key_name\n    AS "key_string"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[s._v("#")]),s._v(" Parameters")]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("key_name")]),s._v(": 要创建密钥的名字, 可以包含数据库的名字。比如："),a("code",[s._v("db1.my_key")]),s._v("。")]),s._v(" "),a("p",[a("code",[s._v("key_string")]),s._v(": 要创建密钥的字符串")])]),s._v(" "),a("p",[s._v("此语句创建一个自定义密钥。执行此命令需要用户拥有 "),a("code",[s._v("ADMIN")]),s._v(" 权限。")]),s._v(" "),a("p",[s._v("如果 "),a("code",[s._v("key_name")]),s._v(" 中包含了数据库名字，那么这个自定义密钥会创建在对应的数据库中，否则这个函数将会创建在当前会话所在的数据库。新密钥的名字不能够与对应数据库中已存在的密钥相同，否则会创建失败。")]),s._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("创建一个自定义密钥")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('CREATE \bENCRYPTKEY my_key AS "ABCD123456789";\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("使用自定义密钥")]),s._v(" "),a("p",[s._v("使用自定义密钥需在密钥前添加关键字 "),a("code",[s._v("KEY")]),s._v("/"),a("code",[s._v("key")]),s._v("，与 "),a("code",[s._v("key_name")]),s._v(" 空格隔开。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> SELECT HEX(AES_ENCRYPT(\"Doris is Great\", KEY my_key));\n+------------------------------------------------+\n| hex(aes_encrypt('Doris is Great', key my_key)) |\n+------------------------------------------------+\n| D26DB38579D6A343350EDDC6F2AD47C6               |\n+------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> SELECT AES_DECRYPT(UNHEX('D26DB38579D6A343350EDDC6F2AD47C6'), KEY my_key);\n+--------------------------------------------------------------------+\n| aes_decrypt(unhex('D26DB38579D6A343350EDDC6F2AD47C6'), key my_key) |\n+--------------------------------------------------------------------+\n| Doris is Great                                                     |\n+--------------------------------------------------------------------+\n1 row in set (0.01 sec)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[s._v("#")]),s._v(" Keyword")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("CREATE,ENCRYPTKEY\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);