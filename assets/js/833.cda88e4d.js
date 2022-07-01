(window.webpackJsonp=window.webpackJsonp||[]).push([[833],{1263:function(a,t,e){"use strict";e.r(t);var s=e(2),i=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"bitmap-union"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-union"}},[a._v("#")]),a._v(" BITMAP_UNION")]),a._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),e("h4",{attrs:{id:"create-table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-table"}},[a._v("#")]),a._v(" Create table")]),a._v(" "),e("p",[a._v("建表时需要使用聚合模型，数据类型是 bitmap , 聚合函数是 bitmap_union")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('CREATE TABLE `pv_bitmap` (\n  `dt` int(11) NULL COMMENT "",\n  `page` varchar(10) NULL COMMENT "",\n  `user_id` bitmap BITMAP_UNION NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`dt`, `page`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`dt`) BUCKETS 2;\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br")])]),e("p",[a._v("注：当数据量很大时，最好为高频率的 bitmap_union 查询建立对应的 rollup 表")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ALTER TABLE pv_bitmap ADD ROLLUP pv (page, user_id);\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"data-load"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-load"}},[a._v("#")]),a._v(" Data Load")]),a._v(" "),e("p",[e("code",[a._v("TO_BITMAP(expr)")]),a._v(" : 将 0 ~ 18446744073709551615 的 unsigned bigint 转为 bitmap")]),a._v(" "),e("p",[e("code",[a._v("BITMAP_EMPTY()")]),a._v(": 生成空 bitmap 列，用于 insert 或导入的时填充默认值")]),a._v(" "),e("p",[e("code",[a._v("BITMAP_HASH(expr)")]),a._v(": 将任意类型的列通过 Hash 的方式转为 bitmap")]),a._v(" "),e("h5",{attrs:{id:"stream-load"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stream-load"}},[a._v("#")]),a._v(" Stream Load")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('cat data | curl --location-trusted -u user:passwd -T - -H "columns: dt,page,user_id, user_id=to_bitmap(user_id)"   http://host:8410/api/test/testDb/_stream_load\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('cat data | curl --location-trusted -u user:passwd -T - -H "columns: dt,page,user_id, user_id=bitmap_hash(user_id)"   http://host:8410/api/test/testDb/_stream_load\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('cat data | curl --location-trusted -u user:passwd -T - -H "columns: dt,page,user_id, user_id=bitmap_empty()"   http://host:8410/api/test/testDb/_stream_load\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h5",{attrs:{id:"insert-into"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#insert-into"}},[a._v("#")]),a._v(" Insert Into")]),a._v(" "),e("p",[a._v("id2 的列类型是 bitmap")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("insert into bitmap_table1 select id, id2 from bitmap_table2;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("id2 的列类型是 bitmap")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("INSERT INTO bitmap_table1 (id, id2) VALUES (1001, to_bitmap(1000)), (1001, to_bitmap(2000));\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("id2 的列类型是 bitmap")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("insert into bitmap_table1 select id, bitmap_union(id2) from bitmap_table2 group by id;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("id2 的列类型是 int")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("insert into bitmap_table1 select id, to_bitmap(id2) from table;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("id2 的列类型是 String")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("insert into bitmap_table1 select id, bitmap_hash(id_string) from table;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"data-query"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-query"}},[a._v("#")]),a._v(" Data Query")]),a._v(" "),e("h5",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[a._v("#")]),a._v(" Syntax")]),a._v(" "),e("p",[e("code",[a._v("BITMAP_UNION(expr)")]),a._v(" : 计算输入 Bitmap 的并集，返回新的bitmap")]),a._v(" "),e("p",[e("code",[a._v("BITMAP_UNION_COUNT(expr)")]),a._v(": 计算输入 Bitmap 的并集，返回其基数，和 BITMAP_COUNT(BITMAP_UNION(expr)) 等价。目前推荐优先使用 BITMAP_UNION_COUNT ，其性能优于 BITMAP_COUNT(BITMAP_UNION(expr))")]),a._v(" "),e("p",[e("code",[a._v("BITMAP_UNION_INT(expr)")]),a._v(" : 计算 TINYINT,SMALLINT 和 INT 类型的列中不同值的个数，返回值和\nCOUNT(DISTINCT expr) 相同")]),a._v(" "),e("p",[e("code",[a._v("INTERSECT_COUNT(bitmap_column_to_count, filter_column, filter_values ...)")]),a._v(" : 计算满足\nfilter_column 过滤条件的多个 bitmap 的交集的基数值。\nbitmap_column_to_count 是 bitmap 类型的列，filter_column 是变化的维度列，filter_values 是维度取值列表")]),a._v(" "),e("h5",{attrs:{id:"example-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[a._v("#")]),a._v(" Example")]),a._v(" "),e("p",[a._v("下面的 SQL 以上面的 pv_bitmap table 为例：")]),a._v(" "),e("p",[a._v("计算 user_id 的去重值：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("select bitmap_union_count(user_id) from pv_bitmap;\n\nselect bitmap_count(bitmap_union(user_id)) from pv_bitmap;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("计算 id 的去重值：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("select bitmap_union_int(id) from pv_bitmap;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("计算 user_id 的 留存:")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("select intersect_count(user_id, page, 'meituan') as meituan_uv,\nintersect_count(user_id, page, 'waimai') as waimai_uv,\nintersect_count(user_id, page, 'meituan', 'waimai') as retention //在 'meituan' 和 'waimai' 两个页面都出现的用户数\nfrom pv_bitmap\nwhere page in ('meituan', 'waimai');\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("h3",{attrs:{id:"keywords"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[a._v("#")]),a._v(" keywords")]),a._v(" "),e("p",[a._v("BITMAP,BITMAP_COUNT,BITMAP_EMPTY,BITMAP_UNION,BITMAP_UNION_INT,TO_BITMAP,BITMAP_UNION_COUNT,INTERSECT_COUNT")])])}),[],!1,null,null,null);t.default=i.exports}}]);