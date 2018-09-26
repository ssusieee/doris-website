(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{539:function(e,n,a){"use strict";a.r(n);var t=a(55),s=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"grouping-sets-design"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grouping-sets-design"}},[e._v("#")]),e._v(" GROUPING SETS DESIGN")]),e._v(" "),a("h2",{attrs:{id:"_1-grouping-sets-background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-grouping-sets-background"}},[e._v("#")]),e._v(" 1. GROUPING SETS Background")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("CUBE")]),e._v(", "),a("code",[e._v("ROLLUP")]),e._v(", and "),a("code",[e._v("GROUPING")]),e._v(" "),a("code",[e._v("SETS")]),e._v(" extensions to SQL make querying and reporting easier and faster. "),a("code",[e._v("CUBE")]),e._v(", "),a("code",[e._v("ROLLUP")]),e._v(", and grouping sets produce a single result set that is equivalent to a "),a("code",[e._v("UNION")]),e._v(" "),a("code",[e._v("ALL")]),e._v(" of differently grouped rows. "),a("code",[e._v("ROLLUP")]),e._v(" calculates aggregations such as "),a("code",[e._v("SUM")]),e._v(", "),a("code",[e._v("COUNT")]),e._v(", "),a("code",[e._v("MAX")]),e._v(", "),a("code",[e._v("MIN")]),e._v(", and "),a("code",[e._v("AVG")]),e._v(" at increasing levels of aggregation, from the most detailed up to a grand total. "),a("code",[e._v("CUBE")]),e._v(" is an extension similar to "),a("code",[e._v("ROLLUP")]),e._v(", enabling a single statement to calculate all possible combinations of aggregations. The "),a("code",[e._v("CUBE")]),e._v(", "),a("code",[e._v("ROLLUP")]),e._v(", and the "),a("code",[e._v("GROUPING")]),e._v(" "),a("code",[e._v("SETS")]),e._v(" extension lets you specify just the groupings needed in the "),a("code",[e._v("GROUP")]),e._v(" "),a("code",[e._v("BY")]),e._v(" clause. This allows efficient analysis across multiple dimensions without performing a "),a("code",[e._v("CUBE")]),e._v(" operation. Computing a "),a("code",[e._v("CUBE")]),e._v(" creates a heavy processing load, so replacing cubes with grouping sets can significantly increase performance.\nTo enhance performance, "),a("code",[e._v("CUBE")]),e._v(", "),a("code",[e._v("ROLLUP")]),e._v(", and "),a("code",[e._v("GROUPING SETS")]),e._v(" can be parallelized: multiple processes can simultaneously execute all of these statements. These capabilities make aggregate calculations more efficient, thereby enhancing database performance, and scalability.")]),e._v(" "),a("p",[e._v("The three "),a("code",[e._v("GROUPING")]),e._v(" functions help you identify the group each row belongs to and enable sorting subtotal rows and filtering results.")]),e._v(" "),a("h3",{attrs:{id:"_1-1-grouping-sets-syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-grouping-sets-syntax"}},[e._v("#")]),e._v(" 1.1 GROUPING SETS Syntax")]),e._v(" "),a("p",[a("code",[e._v("GROUPING SETS")]),e._v(" syntax lets you define multiple groupings in the same query. "),a("code",[e._v("GROUP BY")]),e._v(" computes all the groupings specified and combines them with "),a("code",[e._v("UNION ALL")]),e._v(". For example, consider the following statement:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT k1, k2, SUM( k3 ) FROM t GROUP BY GROUPING SETS ( (k1, k2), (k1), (k2), ( ) );\n")])])]),a("p",[e._v("This statement is equivalent to:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT k1, k2, SUM( k3 ) FROM t GROUP BY k1, k2\nUNION\nSELECT k1, null, SUM( k3 ) FROM t GROUP BY k1\nUNION\nSELECT null, k2, SUM( k3 ) FROM t GROUP BY k2\nUNION\nSELECT null, null, SUM( k3 ) FROM t\n")])])]),a("p",[e._v("This is an example of real query：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> SELECT * FROM t;\n+------+------+------+\n| k1   | k2   | k3   |\n+------+------+------+\n| a    | A    |    1 |\n| a    | A    |    2 |\n| a    | B    |    1 |\n| a    | B    |    3 |\n| b    | A    |    1 |\n| b    | A    |    4 |\n| b    | B    |    1 |\n| b    | B    |    5 |\n+------+------+------+\n8 rows in set (0.01 sec)\n\nmysql> SELECT k1, k2, SUM(k3) FROM t GROUP BY GROUPING SETS ( (k1, k2), (k2), (k1), ( ) );\n+------+------+-----------+\n| k1   | k2   | sum(`k3`) |\n+------+------+-----------+\n| b    | B    |         6 |\n| a    | B    |         4 |\n| a    | A    |         3 |\n| b    | A    |         5 |\n| NULL | B    |        10 |\n| NULL | A    |         8 |\n| a    | NULL |         7 |\n| b    | NULL |        11 |\n| NULL | NULL |        18 |\n+------+------+-----------+\n9 rows in set (0.06 sec)\n")])])]),a("h3",{attrs:{id:"_1-2-rollup-syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-rollup-syntax"}},[e._v("#")]),e._v(" 1.2 ROLLUP Syntax")]),e._v(" "),a("p",[a("code",[e._v("ROLLUP")]),e._v(" enables a "),a("code",[e._v("SELECT")]),e._v(" statement to calculate multiple levels of subtotals across a specified group of dimensions. It also calculates a grand total. "),a("code",[e._v("ROLLUP")]),e._v(" is a simple extension to the "),a("code",[e._v("GROUP")]),e._v(" "),a("code",[e._v("BY")]),e._v(" clause, so its syntax is extremely easy to use. The "),a("code",[e._v("ROLLUP")]),e._v(" extension is highly efficient, adding minimal overhead to a query.")]),e._v(" "),a("p",[a("code",[e._v("ROLLUP")]),e._v(" appears in the "),a("code",[e._v("GROUP")]),e._v(" "),a("code",[e._v("BY")]),e._v(" clause in a "),a("code",[e._v("SELECT")]),e._v(" statement. Its form is:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT a, b,c, SUM( d ) FROM tab1 GROUP BY ROLLUP(a,b,c)\n")])])]),a("p",[e._v("This statement is equivalent to GROUPING SETS as followed：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("GROUPING SETS (\n(a,b,c),\n( a, b ),\n( a),\n( )\n)\n")])])]),a("h3",{attrs:{id:"_1-3-cube-syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-cube-syntax"}},[e._v("#")]),e._v(" 1.3 CUBE Syntax")]),e._v(" "),a("p",[e._v("Like "),a("code",[e._v("ROLLUP")]),e._v(" "),a("code",[e._v("CUBE")]),e._v(" generates all the subtotals that could be calculated for a data cube with the specified dimensions.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT a, b,c, SUM( d ) FROM tab1 GROUP BY CUBE(a,b,c)\n")])])]),a("p",[e._v("e.g.  CUBE ( a, b, c )  is equivalent to GROUPING SETS as followed:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("GROUPING SETS (\n( a, b, c ),\n( a, b ),\n( a,    c ),\n( a       ),\n(    b, c ),\n(    b    ),\n(       c ),\n(         )\n)\n")])])]),a("h3",{attrs:{id:"_1-4-grouping-and-grouping-id-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-grouping-and-grouping-id-function"}},[e._v("#")]),e._v(" 1.4 GROUPING and GROUPING_ID Function")]),e._v(" "),a("p",[e._v("Indicates whether a specified column expression in a "),a("code",[e._v("GROUP BY")]),e._v(" list is aggregated or not. "),a("code",[e._v("GROUPING")]),e._v("returns 1 for aggregated or 0 for not aggregated in the result set. "),a("code",[e._v("GROUPING")]),e._v(" can be used only in the "),a("code",[e._v("SELECT")]),e._v(" list, "),a("code",[e._v("HAVING")]),e._v(", and "),a("code",[e._v("ORDER BY")]),e._v(" clauses when "),a("code",[e._v("GROUP BY")]),e._v(" is specified.")]),e._v(" "),a("p",[a("code",[e._v("GROUPING_ID")]),e._v(" describes which of a list of expressions are grouped in a row produced by a "),a("code",[e._v("GROUP BY")]),e._v(" query. The "),a("code",[e._v("GROUPING_ID")]),e._v(" function simply returns the decimal equivalent of the binary value formed as a result of the concatenation of the values returned by the "),a("code",[e._v("GROUPING")]),e._v(" functions.")]),e._v(" "),a("p",[e._v("Each "),a("code",[e._v("GROUPING_ID")]),e._v(" argument must be an element of the "),a("code",[e._v("GROUP BY")]),e._v(" list. "),a("code",[e._v("GROUPING_ID ()")]),e._v(" returns an "),a("strong",[e._v("integer")]),e._v(" bitmap whose lowest N bits may be lit. A lit "),a("strong",[e._v("bit")]),e._v(" indicates the corresponding argument is not a grouping column for the given output row. The lowest-order "),a("strong",[e._v("bit")]),e._v(" corresponds to argument N, and the N-1th lowest-order "),a("strong",[e._v("bit")]),e._v(" corresponds to argument 1. If the column is a grouping column the bit is 0 else is 1.")]),e._v(" "),a("p",[e._v("For example：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> select * from t;\n+------+------+------+\n| k1   | k2   | k3   |\n+------+------+------+\n| a    | A    |    1 |\n| a    | A    |    2 |\n| a    | B    |    1 |\n| a    | B    |    3 |\n| b    | A    |    1 |\n| b    | A    |    4 |\n| b    | B    |    1 |\n| b    | B    |    5 |\n+------+------+------+\n")])])]),a("p",[e._v("grouping sets result：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> SELECT k1, k2, GROUPING(k1), GROUPING(k2), SUM(k3) FROM t GROUP BY GROUPING SETS ( (k1, k2), (k2), (k1), ( ) );\n+------+------+----------------+----------------+-----------+\n| k1   | k2   | grouping(`k1`) | grouping(`k2`) | sum(`k3`) |\n+------+------+----------------+----------------+-----------+\n| a    | A    |              0 |              0 |         3 |\n| a    | B    |              0 |              0 |         4 |\n| a    | NULL |              0 |              1 |         7 |\n| b    | A    |              0 |              0 |         5 |\n| b    | B    |              0 |              0 |         6 |\n| b    | NULL |              0 |              1 |        11 |\n| NULL | A    |              1 |              0 |         8 |\n| NULL | B    |              1 |              0 |        10 |\n| NULL | NULL |              1 |              1 |        18 |\n+------+------+----------------+----------------+-----------+\n9 rows in set (0.02 sec)\n\nmysql> SELECT k1, k2, GROUPING_ID(k1,k2), SUM(k3) FROM t GROUP BY GROUPING SETS ( (k1, k2), (k2), (k1), ( ) );\n+------+------+-------------------------+-----------+\n| k1   | k2   | grouping_id(`k1`, `k2`) | sum(`k3`) |\n+------+------+-------------------------+-----------+\n| a    | A    |                       0 |         3 |\n| a    | B    |                       0 |         4 |\n| a    | NULL |                       1 |         7 |\n| b    | A    |                       0 |         5 |\n| b    | B    |                       0 |         6 |\n| b    | NULL |                       1 |        11 |\n| NULL | A    |                       2 |         8 |\n| NULL | B    |                       2 |        10 |\n| NULL | NULL |                       3 |        18 |\n+------+------+-------------------------+-----------+\n9 rows in set (0.02 sec)\n\nmysql> SELECT k1, k2, grouping(k1), grouping(k2), GROUPING_ID(k1,k2), SUM(k4) FROM t GROUP BY GROUPING SETS ( (k1, k2), (k2), (k1), ( ) ) order by k1, k2;\n+------+------+----------------+----------------+-------------------------+-----------+\n| k1   | k2   | grouping(`k1`) | grouping(`k2`) | grouping_id(`k1`, `k2`) | sum(`k4`) |\n+------+------+----------------+----------------+-------------------------+-----------+\n| a    | A    |              0 |              0 |                       0 |         3 |\n| a    | B    |              0 |              0 |                       0 |         4 |\n| a    | NULL |              0 |              1 |                       1 |         7 |\n| b    | A    |              0 |              0 |                       0 |         5 |\n| b    | B    |              0 |              0 |                       0 |         6 |\n| b    | NULL |              0 |              1 |                       1 |        11 |\n| NULL | A    |              1 |              0 |                       2 |         8 |\n| NULL | B    |              1 |              0 |                       2 |        10 |\n| NULL | NULL |              1 |              1 |                       3 |        18 |\n+------+------+----------------+----------------+-------------------------+-----------+\n9 rows in set (0.02 sec)\n\n")])])]),a("h3",{attrs:{id:"_1-5-composition-and-nesting-of-grouping-sets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-composition-and-nesting-of-grouping-sets"}},[e._v("#")]),e._v(" 1.5 Composition and nesting of GROUPING SETS")]),e._v(" "),a("p",[e._v("First of all, a GROUP BY clause is essentially a special case of GROUPING SETS, for example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("   GROUP BY a\nis equivalent to:\n   GROUP BY GROUPING SETS((a))\nalso，\n   GROUP BY a,b,c\nis equivalent to:\n   GROUP BY GROUPING SETS((a,b,c))\n")])])]),a("p",[e._v("Similarly, CUBE and ROLLUP can be expanded into GROUPING SETS, so the various combinations and nesting of GROUP BY, CUBE, ROLLUP, GROUPING SETS are essentially the combination and nesting of GROUPING SETS.")]),e._v(" "),a("p",[e._v("For GROUPING SETS nesting, it is semantically equivalent to writing the statements inside the nest directly outside. (ref:"),a("a",{attrs:{href:"https://www.brytlyt.com/documentation/data-manipulation-dml/grouping-sets-rollup-cube/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.brytlyt.com/documentation/data-manipulation-dml/grouping-sets-rollup-cube/"),a("OutboundLink")],1),e._v(") mentions:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("The CUBE and ROLLUP constructs can be used either directly in the GROUP BY clause, or nested inside a GROUPING SETS clause. If one GROUPING SETS clause is nested inside another, the effect is the same as if all the elements of the inner clause had been written directly in the outer clause.\n")])])]),a("p",[e._v("For a combined list of multiple GROUPING SETS, many databases consider it a cross product relationship.")]),e._v(" "),a("p",[e._v("for example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("GROUP BY a, CUBE (b, c), GROUPING SETS ((d), (e))\n\nis equivalent to:\n\nGROUP BY GROUPING SETS (\n(a, b, c, d), (a, b, c, e),\n(a, b, d),    (a, b, e),\n(a, c, d),    (a, c, e),\n(a, d),       (a, e)\n)\n")])])]),a("p",[e._v("For the combination and nesting of GROUPING SETS, each database support is not the same. For example snowflake does not support any combination and nesting.\n（"),a("a",{attrs:{href:"https://docs.snowflake.net/manuals/sql-reference/constructs/group-by.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.snowflake.net/manuals/sql-reference/constructs/group-by.html"),a("OutboundLink")],1),e._v("）")]),e._v(" "),a("p",[e._v("Oracle supports both composition and nesting.\n（"),a("a",{attrs:{href:"https://docs.oracle.com/cd/B19306_01/server.102/b14223/aggreg.htm#i1006842",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.oracle.com/cd/B19306_01/server.102/b14223/aggreg.htm#i1006842"),a("OutboundLink")],1),e._v("）")]),e._v(" "),a("p",[e._v("Presto supports composition, but not nesting.\n（"),a("a",{attrs:{href:"https://prestodb.github.io/docs/current/sql/select.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://prestodb.github.io/docs/current/sql/select.html"),a("OutboundLink")],1),e._v("）")]),e._v(" "),a("h2",{attrs:{id:"_2-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-object"}},[e._v("#")]),e._v(" 2. Object")]),e._v(" "),a("p",[e._v("Support "),a("code",[e._v("GROUPING SETS")]),e._v("， "),a("code",[e._v("ROLLUP")]),e._v(" and "),a("code",[e._v("CUBE")]),e._v(" syntax，impliments 1.1, 1.2, 1.3 1.4, 1.5, not support the combination\nand nesting of GROUPING SETS at current version.")]),e._v(" "),a("h3",{attrs:{id:"_2-1-grouping-sets-syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-grouping-sets-syntax"}},[e._v("#")]),e._v(" 2.1 GROUPING SETS Syntax")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT ...\nFROM ...\n[ ... ]\nGROUP BY GROUPING SETS ( groupSet [ , groupSet [ , ... ] ] )\n[ ... ]\n\ngroupSet ::= { ( expr  [ , expr [ , ... ] ] )}\n\n<expr>\nExpression，column name.\n")])])]),a("h3",{attrs:{id:"_2-2-rollup-syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-rollup-syntax"}},[e._v("#")]),e._v(" 2.2 ROLLUP Syntax")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT ...\nFROM ...\n[ ... ]\nGROUP BY ROLLUP ( expr  [ , expr [ , ... ] ] )\n[ ... ]\n\n<expr>\nExpression，column name.\n")])])]),a("h3",{attrs:{id:"_2-3-cube-syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-cube-syntax"}},[e._v("#")]),e._v(" 2.3 CUBE Syntax")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT ...\nFROM ...\n[ ... ]\nGROUP BY CUBE ( expr  [ , expr [ , ... ] ] )\n[ ... ]\n\n<expr>\nExpression，column name.\n")])])]),a("h2",{attrs:{id:"_3-implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-implementation"}},[e._v("#")]),e._v(" 3. Implementation")]),e._v(" "),a("h3",{attrs:{id:"_3-1-overall-design-approaches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-overall-design-approaches"}},[e._v("#")]),e._v(" 3.1 Overall Design Approaches")]),e._v(" "),a("p",[e._v("For "),a("code",[e._v("GROUPING SET")]),e._v("  is equivalent to the "),a("code",[e._v("UNION")]),e._v(" of  "),a("code",[e._v("GROUP BY")]),e._v(" .  So we can expand input rows, and run an  GROUP BY on these rows。")]),e._v(" "),a("p",[e._v("For example：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT a, b FROM src GROUP BY a, b GROUPING SETS ((a, b), (a), (b), ());\n")])])]),a("p",[e._v("Data in  table src :")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("1, 2\n3, 4\n")])])]),a("p",[e._v("Base on  GROUPING SETS , we can expend the input to：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("1, 2       (GROUPING_ID: a, b -> 00 -> 0)\n1, null    (GROUPING_ID: a, null -> 01 -> 1)\nnull, 2    (GROUPING_ID: null, b -> 10 -> 2)\nnull, null (GROUPING_ID: null, null -> 11 -> 3)\n\n3, 4       (GROUPING_ID: a, b -> 00 -> 0)\n3, null    (GROUPING_ID: a, null -> 01 -> 1)\nnull, 4    (GROUPING_ID: null, b -> 10 -> 2)\nnull, null (GROUPING_ID: null, null -> 11 -> 3)\n")])])]),a("p",[e._v("And then use those row as input, then GROUP BY  a, b, GROUPING_ID")]),e._v(" "),a("h3",{attrs:{id:"_3-2-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-example"}},[e._v("#")]),e._v(" 3.2 Example")]),e._v(" "),a("p",[e._v("Table t：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> select * from t;\n+------+------+------+\n| k1   | k2   | k3   |\n+------+------+------+\n| a    | A    |    1 |\n| a    | A    |    2 |\n| a    | B    |    1 |\n| a    | B    |    3 |\n| b    | A    |    1 |\n| b    | A    |    4 |\n| b    | B    |    1 |\n| b    | B    |    5 |\n+------+------+------+\n8 rows in set (0.01 sec)\n")])])]),a("p",[e._v("for the query：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT k1, k2, GROUPING_ID(k1,k2), SUM(k3) FROM t GROUP BY GROUPING SETS ((k1, k2), (k1), (k2), ());\n")])])]),a("p",[e._v("First，expand the input，every row expand into 4 rows ( the size of GROUPING SETS), and insert GROUPING_ID column")]),e._v(" "),a("p",[e._v("e.g.  a, A, 1 expanded to：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("+------+------+------+-------------------------+\n| k1   | k2   | k3   | GROUPING_ID(`k1`, `k2`) |\n+------+------+------+-------------------------+\n| a    | A    |    1 |                       0 |\n| a    | NULL |    1 |                       1 |\n| NULL | A    |    1 |                       2 |\n| NULL | NULL |    1 |                       3 |\n+------+------+------+-------------------------+\n")])])]),a("p",[e._v("Finally, all rows expended as follows (32 rows):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("+------+------+------+-------------------------+\n| k1   | k2   | k3   | GROUPING_ID(`k1`, `k2`) |\n+------+------+------+-------------------------+\n| a    | A    |    1 |                       0 |\n| a    | A    |    2 |                       0 |\n| a    | B    |    1 |                       0 |\n| a    | B    |    3 |                       0 |\n| b    | A    |    1 |                       0 |\n| b    | A    |    4 |                       0 |\n| b    | B    |    1 |                       0 |\n| b    | B    |    5 |                       0 |\n| a    | NULL |    1 |                       1 |\n| a    | NULL |    1 |                       1 |\n| a    | NULL |    2 |                       1 |\n| a    | NULL |    3 |                       1 |\n| b    | NULL |    1 |                       1 |\n| b    | NULL |    1 |                       1 |\n| b    | NULL |    4 |                       1 |\n| b    | NULL |    5 |                       1 |\n| NULL | A    |    1 |                       2 |\n| NULL | A    |    1 |                       2 |\n| NULL | A    |    2 |                       2 |\n| NULL | A    |    4 |                       2 |\n| NULL | B    |    1 |                       2 |\n| NULL | B    |    1 |                       2 |\n| NULL | B    |    3 |                       2 |\n| NULL | B    |    5 |                       2 |\n| NULL | NULL |    1 |                       3 |\n| NULL | NULL |    1 |                       3 |\n| NULL | NULL |    1 |                       3 |\n| NULL | NULL |    1 |                       3 |\n| NULL | NULL |    2 |                       3 |\n| NULL | NULL |    3 |                       3 |\n| NULL | NULL |    4 |                       3 |\n| NULL | NULL |    5 |                       3 |\n+------+------+------+-------------------------+\n32 rows in set.\n")])])]),a("p",[e._v("now GROUP BY k1, k2, GROUPING_ID(k1,k2):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("+------+------+-------------------------+-----------+\n| k1   | k2   | grouping_id(`k1`, `k2`) | sum(`k3`) |\n+------+------+-------------------------+-----------+\n| a    | A    |                       0 |         3 |\n| a    | B    |                       0 |         4 |\n| a    | NULL |                       1 |         7 |\n| b    | A    |                       0 |         5 |\n| b    | B    |                       0 |         6 |\n| b    | NULL |                       1 |        11 |\n| NULL | A    |                       2 |         8 |\n| NULL | B    |                       2 |        10 |\n| NULL | NULL |                       3 |        18 |\n+------+------+-------------------------+-----------+\n9 rows in set (0.02 sec)\n")])])]),a("p",[e._v("The result is equivalent to the UNION ALL")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select k1, k2, sum(k3) from t group by k1, k2\nUNION ALL\nselect NULL, k2, sum(k3) from t group by k2\nUNION ALL\nselect k1, NULL, sum(k3) from t group by k1\nUNION ALL\nselect NULL, NULL, sum(k3) from t;\n\n+------+------+-----------+\n| k1   | k2   | sum(`k3`) |\n+------+------+-----------+\n| b    | B    |         6 |\n| b    | A    |         5 |\n| a    | A    |         3 |\n| a    | B    |         4 |\n| a    | NULL |         7 |\n| b    | NULL |        11 |\n| NULL | B    |        10 |\n| NULL | A    |         8 |\n| NULL | NULL |        18 |\n+------+------+-----------+\n9 rows in set (0.06 sec)\n")])])]),a("h3",{attrs:{id:"_3-3-fe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-fe"}},[e._v("#")]),e._v(" 3.3 FE")]),e._v(" "),a("h4",{attrs:{id:"_3-3-1-tasks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-tasks"}},[e._v("#")]),e._v(" 3.3.1 Tasks")]),e._v(" "),a("ol",[a("li",[e._v("Add GroupByClause, repalce groupingExprs.")]),e._v(" "),a("li",[e._v("Add Grouping Sets, Cube and RollUp syntax.")]),e._v(" "),a("li",[e._v("Add GroupByClause in SelectStmt.")]),e._v(" "),a("li",[e._v("Add GroupingFunctionCallExpr, impliments grouping grouping_id function call")]),e._v(" "),a("li",[e._v("Add VirtualSlot, generate the map of virtual slots and real slots")]),e._v(" "),a("li",[e._v("add virtual column GROUPING_ID and other virtual columns generated by grouping and grouping_id, insert into groupingExprs,")]),e._v(" "),a("li",[e._v("Add a PlanNode, name as RepeatNode. For GroupingSets aggregation insert RepeatNode to the plan.")])]),e._v(" "),a("h4",{attrs:{id:"_3-3-2-tuple"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-tuple"}},[e._v("#")]),e._v(" 3.3.2 Tuple")]),e._v(" "),a("p",[e._v("In order to add GROUPING_ID to groupingExprs in GroupByClause, need to create virtual SlotRef, also, need tot create a tuple for this slot, named GROUPING__ID Tuple.")]),e._v(" "),a("p",[e._v("For the plannode RepeatNode, it's input is all the  tuple of it's children, It's output tuple is the repeat data and GROUPING_ID.")]),e._v(" "),a("h4",{attrs:{id:"_3-3-3-expression-and-function-substitution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3-expression-and-function-substitution"}},[e._v("#")]),e._v(" 3.3.3 Expression and Function Substitution")]),e._v(" "),a("p",[e._v("expr -> if(bitand(pos, grouping_id)=0, expr, null) for expr in extension grouping clause\ngrouping_id() -> grouping_id(grouping_id) for grouping_id function")]),e._v(" "),a("h3",{attrs:{id:"_3-4-be"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-be"}},[e._v("#")]),e._v(" 3.4 BE")]),e._v(" "),a("h4",{attrs:{id:"_3-4-1-tasks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-1-tasks"}},[e._v("#")]),e._v(" 3.4.1 Tasks")]),e._v(" "),a("ol",[a("li",[e._v("Add RepeatNode executor, expend the input data and append GROUPING_ID to every row")]),e._v(" "),a("li",[e._v("Implements grouping_id() and grouping() function.")])])])}),[],!1,null,null,null);n.default=s.exports}}]);