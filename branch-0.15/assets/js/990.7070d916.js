(window.webpackJsonp=window.webpackJsonp||[]).push([[990],{1428:function(e,a,n){"use strict";n.r(a);var t=n(55),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"grant"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#grant"}},[e._v("#")]),e._v(" GRANT")]),e._v(" "),n("h2",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),n("p",[e._v("GRANT 命令用于赋予指定用户或角色指定的权限。")]),e._v(" "),n("p",[e._v("Syntax:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("GRANT privilege_list ON db_name[.tbl_name] TO user_identity [ROLE role_name]\n\nGRANT privilege_list ON RESOURCE resource_name TO user_identity [ROLE role_name]\n")])])]),n("p",[e._v("privilege_list 是需要赋予的权限列表，以逗号分隔。当前 Doris 支持如下权限：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("NODE_PRIV：集群节点操作权限，包括节点上下线等操作，只有 root 用户有该权限，不可赋予其他用户。\nADMIN_PRIV：除 NODE_PRIV 以外的所有权限。\nGRANT_PRIV: 操作权限的权限。包括创建删除用户、角色，授权和撤权，设置密码等。\nSELECT_PRIV：对指定的库或表的读取权限\nLOAD_PRIV：对指定的库或表的导入权限\nALTER_PRIV：对指定的库或表的schema变更权限\nCREATE_PRIV：对指定的库或表的创建权限\nDROP_PRIV：对指定的库或表的删除权限\nUSAGE_PRIV: 对指定资源的使用权限\n\n旧版权限中的 ALL 和 READ_WRITE 会被转换成：SELECT_PRIV,LOAD_PRIV,ALTER_PRIV,CREATE_PRIV,DROP_PRIV；\nREAD_ONLY 会被转换为 SELECT_PRIV。\n")])])]),n("p",[e._v("权限分类：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("1. 节点权限：NODE_PRIV\n2. 库表权限：SELECT_PRIV,LOAD_PRIV,ALTER_PRIV,CREATE_PRIV,DROP_PRIV\n3. 资源权限：USAGE_PRIV\n")])])]),n("p",[e._v("db_name[.tbl_name] 支持以下三种形式：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("1. *.* 权限可以应用于所有库及其中所有表\n2. db.* 权限可以应用于指定库下的所有表\n3. db.tbl 权限可以应用于指定库下的指定表\n\n这里指定的库或表可以是不存在的库和表。\n")])])]),n("p",[e._v("resource_name 支持以下两种形式：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("1. * 权限应用于所有资源\n2. resource 权限应用于指定资源\n\n这里指定的资源可以是不存在的资源。\n")])])]),n("p",[e._v("user_identity：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("这里的 user_identity 语法同 CREATE USER。且必须为使用 CREATE USER 创建过的 user_identity。user_identity 中的host可以是域名，如果是域名的话，权限的生效时间可能会有1分钟左右的延迟。\n\n也可以将权限赋予指定的 ROLE，如果指定的 ROLE 不存在，则会自动创建。\n")])])]),n("h2",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("1. 授予所有库和表的权限给用户\n\n    GRANT SELECT_PRIV ON *.* TO 'jack'@'%';\n\n2. 授予指定库表的权限给用户\n\n    GRANT SELECT_PRIV,ALTER_PRIV,LOAD_PRIV ON db1.tbl1 TO 'jack'@'192.8.%';\n    \n3. 授予指定库表的权限给角色\n\n    GRANT LOAD_PRIV ON db1.* TO ROLE 'my_role';\n\n4. 授予所有资源的使用权限给用户\n\n    GRANT USAGE_PRIV ON RESOURCE * TO 'jack'@'%';\n\n5. 授予指定资源的使用权限给用户\n\n    GRANT USAGE_PRIV ON RESOURCE 'spark_resource' TO 'jack'@'%';\n\n6. 授予指定资源的使用权限给角色\n\n    GRANT USAGE_PRIV ON RESOURCE 'spark_resource' TO ROLE 'my_role';\n")])])]),n("h2",{attrs:{id:"keyword"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("GRANT\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);