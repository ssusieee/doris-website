(window.webpackJsonp=window.webpackJsonp||[]).push([[934],{1560:function(s,a,e){"use strict";e.r(a);var t=e(15),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"aes-encrypt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aes-encrypt"}},[s._v("#")]),s._v(" AES_ENCRYPT")]),s._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" description")]),s._v(" "),e("p",[s._v("Aes 加密函数")]),s._v(" "),e("h4",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),e("p",[e("code",[s._v("VARCHAR AES_ENCRYPT(str,key_str[,init_vector])")])]),s._v(" "),e("p",[s._v("返回加密后的结果")]),s._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("MySQL > select to_base64(AES_ENCRYPT('text','F3229A0B371ED2D9441B830D21A390C3'));\n+--------------------------------+\n| to_base64(aes_encrypt('text')) |\n+--------------------------------+\n| wr2JEDVXzL9+2XtRhgIloA==       |\n+--------------------------------+\n1 row in set (0.010 sec)\n\nMySQL> set block_encryption_mode=\"AES_256_CBC\";\nQuery OK, 0 rows affected (0.006 sec)\n\nMySQL > select to_base64(AES_ENCRYPT('text','F3229A0B371ED2D9441B830D21A390C3', '0123456789'));\n+----------------------------------------------------------------------------------+\n| to_base64(aes_encrypt('text', 'F3229A0B371ED2D9441B830D21A390C3', '0123456789')) |\n+----------------------------------------------------------------------------------+\n| mvZT1KJw7N0RJf27aipUpg==                                                         |\n+----------------------------------------------------------------------------------+\n1 row in set (0.011 sec)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("h3",{attrs:{id:"keywords"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" keywords")]),s._v(" "),e("p",[s._v("AES_ENCRYPT")]),s._v(" "),e("h2",{attrs:{id:"aes-decrypt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aes-decrypt"}},[s._v("#")]),s._v(" AES_DECRYPT")]),s._v(" "),e("h3",{attrs:{id:"description-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description-2"}},[s._v("#")]),s._v(" description")]),s._v(" "),e("p",[s._v("Aes 解密函数")]),s._v(" "),e("h4",{attrs:{id:"syntax-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax-2"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),e("p",[e("code",[s._v("VARCHAR AES_DECRYPT(str,key_str[,init_vector])")])]),s._v(" "),e("p",[s._v("返回解密后的结果")]),s._v(" "),e("h3",{attrs:{id:"example-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[s._v("#")]),s._v(" example")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("MySQL > select AES_DECRYPT(FROM_BASE64('wr2JEDVXzL9+2XtRhgIloA=='),'F3229A0B371ED2D9441B830D21A390C3');\n+------------------------------------------------------+\n| aes_decrypt(from_base64('wr2JEDVXzL9+2XtRhgIloA==')) |\n+------------------------------------------------------+\n| text                                                 |\n+------------------------------------------------------+\n1 row in set (0.012 sec)\n\nMySQL> set block_encryption_mode=\"AES_256_CBC\";\nQuery OK, 0 rows affected (0.006 sec)\n\nMySQL > select AES_DECRYPT(FROM_BASE64('mvZT1KJw7N0RJf27aipUpg=='),'F3229A0B371ED2D9441B830D21A390C3', '0123456789');\n+--------------------------------------------------------------------------------------------------------+\n| aes_decrypt(from_base64('mvZT1KJw7N0RJf27aipUpg=='), 'F3229A0B371ED2D9441B830D21A390C3', '0123456789') |\n+--------------------------------------------------------------------------------------------------------+\n| text                                                                                                   |\n+--------------------------------------------------------------------------------------------------------+\n1 row in set (0.012 sec)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("h3",{attrs:{id:"keywords-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keywords-2"}},[s._v("#")]),s._v(" keywords")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("AES_DECRYPT\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);