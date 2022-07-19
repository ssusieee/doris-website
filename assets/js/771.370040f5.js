(window.webpackJsonp=window.webpackJsonp||[]).push([[771],{1398:function(t,s,a){"use strict";a.r(s);var n=a(15),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"bitmap精准去重"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitmap精准去重"}},[t._v("#")]),t._v(" BITMAP精准去重")]),t._v(" "),a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),a("p",[t._v("Doris原有的Bitmap聚合函数设计比较通用，但对亿级别以上bitmap大基数的交并集计算性能较差。排查后端be的bitmap聚合函数逻辑，发现主要有两个原因。一是当bitmap基数较大时，如bitmap大小超过1g，网络/磁盘IO处理时间比较长；二是后端be实例在scan数据后全部传输到顶层节点进行求交和并运算，给顶层单节点带来压力，成为处理瓶颈。")]),t._v(" "),a("p",[t._v("解决思路是将bitmap列的值按照range划分，不同range的值存储在不同的分桶中，保证了不同分桶的bitmap值是正交的。当查询时，先分别对不同分桶中的正交bitmap进行聚合计算，然后顶层节点直接将聚合计算后的值合并汇总，并输出。如此会大大提高计算效率，解决了顶层单节点计算瓶颈问题。")]),t._v(" "),a("h2",{attrs:{id:"使用指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用指南"}},[t._v("#")]),t._v(" 使用指南")]),t._v(" "),a("ol",[a("li",[t._v("建表，增加hid列，表示bitmap列值id范围, 作为hash分桶列")]),t._v(" "),a("li",[t._v("使用场景")])]),t._v(" "),a("h3",{attrs:{id:"create-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-table"}},[t._v("#")]),t._v(" Create table")]),t._v(" "),a("p",[t._v("建表时需要使用聚合模型，数据类型是 bitmap , 聚合函数是 bitmap_union")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("user_tag_bitmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bigint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"用户标签"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("hid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("smallint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"分桶id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" bitmap BITMAP_UNION "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("OLAP\nAGGREGATE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("hid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OLAP"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DISTRIBUTED")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("HASH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("hid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" BUCKETS "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("表schema增加hid列，表示id范围, 作为hash分桶列。")]),t._v(" "),a("p",[t._v("注：hid数和BUCKETS要设置合理，hid数设置至少是BUCKETS的5倍以上，以使数据hash分桶尽量均衡")]),t._v(" "),a("h3",{attrs:{id:"data-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-load"}},[t._v("#")]),t._v(" Data Load")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOAD")]),t._v(" LABEL user_tag_bitmap_test\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATA")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INFILE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hdfs://abc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" user_tag_bitmap\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COLUMNS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TERMINATED")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tmp_tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tmp_user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\ntag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tmp_tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nhid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ceil"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tmp_user_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nuser_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" to_bitmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tmp_user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n注意："),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000000")]),t._v("这个数不固定，可按需调整\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[t._v("数据格式：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("11111111,1\n11111112,2\n11111113,3\n11111114,4\n...\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("注：第一列代表用户标签，由中文转换成数字")]),t._v(" "),a("p",[t._v("load数据时，对用户bitmap值range范围纵向切割，例如，用户id在1-5000000范围内的hid值相同，hid值相同的行会分配到一个分桶内，如此每个分桶内到的bitmap都是正交的。可以利用桶内bitmap值正交特性，进行交并集计算，计算结果会被shuffle至top节点聚合。")]),t._v(" "),a("h4",{attrs:{id:"bitmap-orthogonal-intersect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-orthogonal-intersect"}},[t._v("#")]),t._v(" bitmap_orthogonal_intersect")]),t._v(" "),a("p",[t._v("求bitmap交集函数")]),t._v(" "),a("p",[t._v("语法：")]),t._v(" "),a("p",[t._v("orthogonal_bitmap_intersect(bitmap_column, column_to_filter, filter_values)")]),t._v(" "),a("p",[t._v("参数：")]),t._v(" "),a("p",[t._v("第一个参数是Bitmap列，第二个参数是用来过滤的维度列，第三个参数是变长参数，含义是过滤维度列的不同取值")]),t._v(" "),a("p",[t._v("说明：")]),t._v(" "),a("p",[t._v("查询规划上聚合分2层，在第一层be节点（update、serialize）先按filter_values为key进行hash聚合，然后对所有key的bitmap求交集，结果序列化后发送至第二层be节点(merge、finalize)，在第二层be节点对所有来源于第一层节点的bitmap值循环求并集")]),t._v(" "),a("p",[t._v("样例：")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" BITMAP_COUNT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("orthogonal_bitmap_intersect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13080800")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11110200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" user_tag_bitmap  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" tag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13080800")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11110200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"orthogonal-bitmap-intersect-count"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orthogonal-bitmap-intersect-count"}},[t._v("#")]),t._v(" orthogonal_bitmap_intersect_count")]),t._v(" "),a("p",[t._v("求bitmap交集count函数,语法同原版intersect_count，但实现不同")]),t._v(" "),a("p",[t._v("语法：")]),t._v(" "),a("p",[t._v("orthogonal_bitmap_intersect_count(bitmap_column, column_to_filter, filter_values)")]),t._v(" "),a("p",[t._v("参数：")]),t._v(" "),a("p",[t._v("第一个参数是Bitmap列，第二个参数是用来过滤的维度列，第三个参数开始是变长参数，含义是过滤维度列的不同取值")]),t._v(" "),a("p",[t._v("说明：")]),t._v(" "),a("p",[t._v("查询规划聚合上分2层，在第一层be节点（update、serialize）先按filter_values为key进行hash聚合，然后对所有key的bitmap求交集，再对交集结果求count，count值序列化后发送至第二层be节点（merge、finalize），在第二层be节点对所有来源于第一层节点的count值循环求sum")]),t._v(" "),a("h4",{attrs:{id:"orthogonal-bitmap-union-count"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orthogonal-bitmap-union-count"}},[t._v("#")]),t._v(" orthogonal_bitmap_union_count")]),t._v(" "),a("p",[t._v("求bitmap并集count函数，语法同原版bitmap_union_count，但实现不同。")]),t._v(" "),a("p",[t._v("语法：")]),t._v(" "),a("p",[t._v("orthogonal_bitmap_union_count(bitmap_column)")]),t._v(" "),a("p",[t._v("参数：")]),t._v(" "),a("p",[t._v("参数类型是bitmap，是待求并集count的列")]),t._v(" "),a("p",[t._v("说明：")]),t._v(" "),a("p",[t._v("查询规划上分2层，在第一层be节点（update、serialize）对所有bitmap求并集，再对并集的结果bitmap求count，count值序列化后发送至第二层be节点（merge、finalize），在第二层be节点对所有来源于第一层节点的count值循环求sum")]),t._v(" "),a("h3",{attrs:{id:"使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),a("p",[t._v("符合对bitmap进行正交计算的场景，如在用户行为分析中，计算留存，漏斗，用户画像等。")]),t._v(" "),a("p",[t._v("人群圈选：")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" orthogonal_bitmap_intersect_count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13080800")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11110200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" user_tag_bitmap "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" tag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13080800")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11110200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n 注："),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13080800")]),t._v("、"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11110200")]),t._v("代表用户标签\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("计算user_id的去重值：")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" orthogonal_bitmap_union_count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" user_tag_bitmap "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" tag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13080800")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11110200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);