(window.webpackJsonp=window.webpackJsonp||[]).push([[646],{1272:function(e,s,a){"use strict";a.r(s);var n=a(15),r=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"发版准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发版准备"}},[e._v("#")]),e._v(" 发版准备")]),e._v(" "),a("p",[e._v("Apache 项目的版本发布必须严格遵循 Apache 基金会的版本发布流程。相关指导和政策可参阅：")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://infra.apache.org/release-publishing",target:"_blank",rel:"noopener noreferrer"}},[e._v("Release Creation Process"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.apache.org/legal/release-policy.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Release Policy"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://infra.apache.org/publishing-maven-artifacts.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Publishing Maven Releases to Maven Central Repository"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("本文档主要说明版本发布的主要流程和前期准备工作。具体 Doris 各组件的发版步骤，可以参阅各自的文档：")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh-CN/community/release-and-verify/release-doris-core.html"}},[e._v("Doris Core Release")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh-CN/community/release-and-verify/release-doris-connectors.html"}},[e._v("Doris Connectors Release")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh-CN/community/release-and-verify/release-doris-manager.html"}},[e._v("Doris Manager Release")])],1)]),e._v(" "),a("p",[e._v("Apache 项目的版本发布主要有以下三种形式：")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Source Release：即源码发布，这个是必选项。")])]),e._v(" "),a("li",[e._v("Binary Release：即二进制发布，比如发布编译好的可执行程序。这个是可选项。")]),e._v(" "),a("li",[e._v("Convenience Binaries：为方便用户使用而发布到第三方平台的 Release。如Maven、Docker等。这个也是可选项。")])]),e._v(" "),a("h2",{attrs:{id:"发版流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发版流程"}},[e._v("#")]),e._v(" 发版流程")]),e._v(" "),a("p",[e._v("每个项目的发版都需要一位 PMC 成员或 Committer 作为 "),a("strong",[e._v("Release Manager")]),e._v("。")]),e._v(" "),a("p",[e._v("总体的发版流程如下：")]),e._v(" "),a("ol",[a("li",[e._v("环境准备")]),e._v(" "),a("li",[e._v("发布准备\n"),a("ol",[a("li",[e._v("社区发起 DISCUSS 并与社区交流具体发布计划")]),e._v(" "),a("li",[e._v("创建分支用于发布")]),e._v(" "),a("li",[e._v("清理 issue")]),e._v(" "),a("li",[e._v("将必要的 Patch 合并到发布的分支")])])]),e._v(" "),a("li",[e._v("验证分支\n"),a("ol",[a("li",[e._v("QA 稳定性测试")]),e._v(" "),a("li",[e._v("验证分支代码的编译流程")]),e._v(" "),a("li",[e._v("准备 Release Notes")])])]),e._v(" "),a("li",[e._v("准备发布材料\n"),a("ol",[a("li",[e._v("打 Tag")]),e._v(" "),a("li",[e._v("将需要发布的内容上传至 "),a("a",{attrs:{href:"https://dist.apache.org/repos/dist/dev/doris",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Dev SVN 仓库"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("其他 Convenience Binaries 的准备（如上传到 "),a("a",{attrs:{href:"https://repository.apache.org/#stagingRepositories",target:"_blank",rel:"noopener noreferrer"}},[e._v("Maven Staging 仓库"),a("OutboundLink")],1),e._v("）")])])]),e._v(" "),a("li",[e._v("社区发布投票流程\n"),a("ol",{attrs:{start:"2"}},[a("li",[e._v("在 Doris 社区 Dev 邮件组("),a("strong",[e._v("dev@doris.apache.org")]),e._v(")发起投票。")]),e._v(" "),a("li",[e._v("投票通过后，在 Doris 社区发 Result 邮件。")])])]),e._v(" "),a("li",[e._v("完成工作\n"),a("ol",[a("li",[e._v("上传签名的软件包到 "),a("a",{attrs:{href:"https://dist.apache.org/repos/dist/release/doris/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Release 仓库"),a("OutboundLink")],1),e._v("，并生成相关链接。")]),e._v(" "),a("li",[e._v("在 Doris 官网和 github 发布下载链接，并且清理 svn 上的旧版本包。")]),e._v(" "),a("li",[e._v("发送 Announce 邮件到 dev@doris.apache.org")])])])]),e._v(" "),a("h2",{attrs:{id:"准备签名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备签名"}},[e._v("#")]),e._v(" 准备签名")]),e._v(" "),a("p",[e._v("如果这是你第一次发布，那么你需要在你的环境中准备如下工具")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://www.apache.org/dev/release-signing.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Release Signing"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.apache.org/dev/openpgp.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("gpg"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.apache.org/dev/openpgp.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("svn"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"准备gpg-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备gpg-key"}},[e._v("#")]),e._v(" 准备gpg key")]),e._v(" "),a("p",[e._v("Release manager 在发布前需要先生成自己的签名公钥，并上传到公钥服务器，之后就可以用这个公钥对准备发布的软件包进行签名。\n如果在"),a("a",{attrs:{href:"https://downloads.apache.org/incubator/doris/KEYS",target:"_blank",rel:"noopener noreferrer"}},[e._v("KEY"),a("OutboundLink")],1),e._v("里已经存在了你的KEY，那么你可以跳过这个步骤了。")]),e._v(" "),a("h4",{attrs:{id:"签名软件-gnupg-的安装配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#签名软件-gnupg-的安装配置"}},[e._v("#")]),e._v(" 签名软件 GnuPG 的安装配置")]),e._v(" "),a("h5",{attrs:{id:"gnupg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gnupg"}},[e._v("#")]),e._v(" GnuPG")]),e._v(" "),a("p",[e._v("1991年，程序员 Phil Zimmermann 为了避开政府监视，开发了加密软件PGP。这个软件非常好用，迅速流传开来，成了许多程序员的必备工具。但是，它是商业软件，不能自由使用。所以，自由软件基金会决定，开发一个PGP的替代品，取名为GnuPG。这就是GPG的由来。")]),e._v(" "),a("h5",{attrs:{id:"安装配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装配置"}},[e._v("#")]),e._v(" 安装配置")]),e._v(" "),a("p",[e._v("CentOS 安装命令：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yum install gnupg\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("安装完成后，默认配置文件 gpg.conf 会放在 home 目录下。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("~/.gnupg/gpg.conf\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("如果不存在这个目录或文件，可以直接创建一个空文件。")]),e._v(" "),a("p",[e._v("Apache 签名推荐 SHA512， 可以通过配置 gpg 完成。\n编辑gpg.conf, 增加下面的三行：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("personal-digest-preferences SHA512\ncert-digest-algo SHA512\ndefault-preference-list SHA512 SHA384 SHA256 SHA224 AES256 AES192 AES CAST5 ZLIB BZIP2 ZIP Uncompressed\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h4",{attrs:{id:"生成新的签名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成新的签名"}},[e._v("#")]),e._v(" 生成新的签名")]),e._v(" "),a("h5",{attrs:{id:"准备签名-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备签名-2"}},[e._v("#")]),e._v(" 准备签名")]),e._v(" "),a("p",[e._v("推荐的生成新签名的设置：")]),e._v(" "),a("p",[e._v("这里必须通过 SecureCRT 等终端直接登录用户账户，不能通过 su - user 或者 ssh 转，否则密码输入 box 会显示不出来而报错。")]),e._v(" "),a("p",[e._v("先看下 gpg 的 version 以及是否支持 SHA512.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ gpg --version\ngpg (GnuPG) 2.0.22\nlibgcrypt 1.5.3\nCopyright (C) 2013 Free Software Foundation, Inc.\nLicense GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nHome: ~/.gnupg\nSupported algorithms:\nPubkey: RSA, ?, ?, ELG, DSA\nCipher: IDEA, 3DES, CAST5, BLOWFISH, AES, AES192, AES256, TWOFISH,\n        CAMELLIA128, CAMELLIA192, CAMELLIA256\nHash: MD5, SHA1, RIPEMD160, SHA256, SHA384, SHA512, SHA224\nCompression: Uncompressed, ZIP, ZLIB, BZIP2\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br")])]),a("h5",{attrs:{id:"生成新的签名-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成新的签名-2"}},[e._v("#")]),e._v(" 生成新的签名")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ gpg --gen-key\ngpg (GnuPG) 2.0.22; Copyright (C) 2013 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n   (1) RSA and RSA (default)\n   (2) DSA and Elgamal\n   (3) DSA (sign only)\n   (4) RSA (sign only)\nYour selection? 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n>  = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0)\nKey does not expire at all\nIs this correct? (y/N) y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: xxx\nName must be at least 5 characters long\nReal name: xxx-yyy\nEmail address: xxx@apache.org\nComment: xxx's key\nYou selected this USER-ID:\n    \"xxx-yyy (xxx's key) <xxx@apache.org>\"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? o\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br")])]),a("p",[e._v("其中 Real name 需保持和 id.apache.org 中显示的 id 一致。\nEmail address 为 apache 的邮箱。")]),e._v(" "),a("p",[e._v("输入 passphrase, 一共要输入两遍，超过8个字符即可。")]),e._v(" "),a("p",[a("strong",[e._v("这里的秘钥一定要记住，后面签名的时候会用到。同时也会用于其他组件的发布")])]),e._v(" "),a("p",[a("strong",[e._v("如果 "),a("code",[e._v("gpg --gen-key")]),e._v(" 命令卡住很久，可以尝试打开另一终端后，执行 "),a("code",[e._v("find / | xargs file")]),e._v(" 命令来产生足够多的随机字符，通常在几分钟后，gpg命令就会完成。")])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("注意：")])]),e._v(" "),a("p",[e._v("如果在生成可以的时候出现卡住，长时间不能完成的时候，可以通过下面的方案解决：")]),e._v(" "),a("p",[e._v("安装 rng-tools 这个工具，通过 "),a("code",[e._v("yum install rng-tools")]),e._v(" 完成安装。\n之后再打开一个新的窗口执行命令：rngd -r /dev/urandom，生成密钥就能瞬间完成了。")])]),e._v(" "),a("h5",{attrs:{id:"查看和输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看和输出"}},[e._v("#")]),e._v(" 查看和输出")]),e._v(" "),a("p",[e._v('第一行显示公钥文件名（pubring.gpg），第二行显示公钥特征（4096位，Hash字符串和生成时间），第三行显示"用户ID"，注释，邮件，第四行显示私钥特征。')]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ gpg --list-keys\n/home/lide/.gnupg/pubring.gpg\n-----------------------------\npub   4096R/33DBF2E0 2018-12-06\nuid                  xxx-yyy  (xxx's key) <xxx@apache.org>\nsub   4096R/0E8182E6 2018-12-06\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("其中 xxx-yyy 就是用户ID。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("gpg --armor --output public-key.txt --export [用户ID]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ gpg --armor --output public-key.txt --export xxx-yyy\n文件‘public-key.txt’已存在。 是否覆盖？(y/N)y\n$ cat public-key.txt\n-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: GnuPG v2.0.22 (GNU/Linux)\n\nmQINBFwJEQ0BEACwqLluHfjBqD/RWZ4uoYxNYHlIzZvbvxAlwS2mn53BirLIU/G3\n9opMWNplvmK+3+gNlRlFpiZ7EvHsF/YJOAP59HmI2Z...\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("h4",{attrs:{id:"上传签名公钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传签名公钥"}},[e._v("#")]),e._v(" 上传签名公钥")]),e._v(" "),a("p",[e._v("公钥服务器是网络上专门储存用户公钥的服务器。send-keys 参数可以将公钥上传到服务器。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("gpg --send-keys xxxx --keyserver https://keyserver.ubuntu.com/\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("其中 xxxx 为上一步 "),a("code",[e._v("--list-keys")]),e._v(" 结果中 pub 后面的字符串，如上为：33DBF2E0")]),e._v(" "),a("p",[e._v("也可以通过"),a("a",{attrs:{href:"https://keyserver.ubuntu.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://keyserver.ubuntu.com/"),a("OutboundLink")],1),e._v("上传上述 public-key.txt 的内容：")]),e._v(" "),a("p",[e._v("上传成功之后，可以通过查询这个"),a("a",{attrs:{href:"https://keyserver.ubuntu.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://keyserver.ubuntu.com/"),a("OutboundLink")],1),e._v("，输入 0x33DBF2E0 查询。（注意需要以 0x 开头）")]),e._v(" "),a("p",[e._v("该网站查询有延迟，可能需要等1个小时。")]),e._v(" "),a("h4",{attrs:{id:"生成-fingerprint-并上传到-apache-用户信息中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成-fingerprint-并上传到-apache-用户信息中"}},[e._v("#")]),e._v(" 生成 fingerprint 并上传到 apache 用户信息中")]),e._v(" "),a("p",[e._v("由于公钥服务器没有检查机制，任何人都可以用你的名义上传公钥，所以没有办法保证服务器上的公钥的可靠性。通常，你可以在网站上公布一个公钥指纹，让其他人核对下载到的公钥是否为真。")]),e._v(" "),a("p",[e._v("fingerprint参数生成公钥指纹：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("gpg --fingerprint [用户ID]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ gpg --fingerprint xxx-yyy\npub   4096R/33DBF2E0 2018-12-06\n      Key fingerprint = 07AA E690 B01D 1A4B 469B  0BEF 5E29 CE39 33DB F2E0\nuid                  xxx-yyy (xxx's key) <xxx@apache.org>\nsub   4096R/0E8182E6 2018-12-06\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("将上面的 fingerprint （即 07AA E690 B01D 1A4B 469B  0BEF 5E29 CE39 33DB F2E0）粘贴到自己的用户信息中：")]),e._v(" "),a("p",[e._v("https://id.apache.org")]),e._v(" "),a("p",[a("code",[e._v("OpenPGP Public Key Primary Fingerprint:")])]),e._v(" "),a("blockquote",[a("p",[e._v("注：每个人可以有多个 Public Key。")])]),e._v(" "),a("h4",{attrs:{id:"生成-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成-keys"}},[e._v("#")]),e._v(" 生成 keys")]),e._v(" "),a("p",[a("strong",[e._v("注意不要删除 KEYS 文件中已有的内容，这能追加新增")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('svn co https://dist.apache.org/repos/dist/dev/doris/\n# edit doris/KEYS file\ngpg --list-sigs [用户 ID] >> doris/KEYS\ngpg --armor --export [用户 ID] >> doris/KEYS\nsvn ci --username $ASF_USERNAME --password "$ASF_PASSWORD" -m"Update KEYS"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("注意，KEYS 文件要同时发布到如下 svn 库。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('svn co https://dist.apache.org/repos/dist/release/doris\n# edit doris/KEYS file\nsvn ci --username $ASF_USERNAME --password "$ASF_PASSWORD" -m"Update KEYS"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("之后会自动同步到：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://downloads.apache.org/doris/KEYS\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("在后续的发版投票邮件中，要使用 "),a("code",[e._v("https://downloads.apache.org/doris/KEYS")]),e._v(" 这里的 KEYS 文件。")]),e._v(" "),a("h2",{attrs:{id:"maven-发版准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maven-发版准备"}},[e._v("#")]),e._v(" Maven 发版准备")]),e._v(" "),a("p",[e._v("对于 Doris Connector 等组件，需要使用 maven 进行版本发布。")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("生成主密码")]),e._v(" "),a("p",[a("code",[e._v("mvn --encrypt-master-password <password>")])]),e._v(" "),a("p",[e._v("这个密码仅用作加密后续的其他密码使用, 输出类似 "),a("code",[e._v("{VSb+6+76djkH/43...}")])]),e._v(" "),a("p",[e._v("之后创建 "),a("code",[e._v("~/.m2/settings-security.xml")]),e._v(" 文件，内容是")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<settingsSecurity>\n  <master>{VSb+6+76djkH/43...}</master>\n</settingsSecurity>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("加密 apache 密码")]),e._v(" "),a("p",[a("code",[e._v("mvn --encrypt-password <password>")])]),e._v(" "),a("p",[e._v("这个密码是apache 账号的密码 输出和上面类似"),a("code",[e._v("{GRKbCylpwysHfV...}")])]),e._v(" "),a("p",[e._v("在 "),a("code",[e._v("~/.m2/settings.xml")]),e._v(" 中加入")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<servers>\n  \x3c!-- To publish a snapshot of your project --\x3e\n  <server>\n    <id>apache.snapshots.https</id>\n    <username>yangzhg</username>\n    <password>{GRKbCylpwysHfV...}</password>\n  </server>\n  \x3c!-- To stage a release of your project --\x3e\n  <server>\n    <id>apache.releases.https</id>\n    <username>yangzhg</username>\n    <password>{GRKbCylpwysHfV...}</password>\n  </server>\n</servers>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br")])])])]),e._v(" "),a("h2",{attrs:{id:"在社区发起-discuss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在社区发起-discuss"}},[e._v("#")]),e._v(" 在社区发起 DISCUSS")]),e._v(" "),a("p",[e._v("DISCUSS 并不是发版前的必须流程，但强烈建议在重要版本发布前，在 dev@doris 邮件组发起讨论。内容包括但不限于重要功能的说明、Bug修复说明等。")])])}),[],!1,null,null,null);s.default=r.exports}}]);