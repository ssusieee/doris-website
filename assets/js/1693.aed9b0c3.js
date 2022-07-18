(window.webpackJsonp=window.webpackJsonp||[]).push([[1693],{2323:function(e,s,a){"use strict";a.r(s);var t=a(15),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"release-preparation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release-preparation"}},[e._v("#")]),e._v(" Release Preparation")]),e._v(" "),a("p",[e._v("Releases of Apache projects must strictly follow the Apache Foundation release process. Related guidance and policies can be found at.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://infra.apache.org/release-publishing",target:"_blank",rel:"noopener noreferrer"}},[e._v("Release Creation Process"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.apache.org/legal/release-policy.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Release Policy"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://infra.apache.org/publishing-maven-artifacts.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Publishing Maven Releases to Maven Central Repository"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("This document describes the main process and prep work for release. For specific Doris component release steps, you can refer to the respective documentation:")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/community/release-and-verify/release-doris-core.html"}},[e._v("Doris Core Release")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/community/release-and-verify/release-doris-connectors.html"}},[e._v("Doris Connectors Release")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/community/release-and-verify/release-doris-manager.html"}},[e._v("Doris Manager Release")])],1)]),e._v(" "),a("p",[e._v("There are three main forms of releases for Apache projects.")]),e._v(" "),a("ul",[a("li",[e._v("Source Release: i.e. source release, this is mandatory.")]),e._v(" "),a("li",[e._v("Binary Release: e.g., release of a compiled executable. This is optional.")]),e._v(" "),a("li",[e._v("Convenience Binaries: Release to third-party platforms for user convenience, such as Maven, Docker, etc. This is also optional.")])]),e._v(" "),a("h2",{attrs:{id:"release-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release-process"}},[e._v("#")]),e._v(" Release Process")]),e._v(" "),a("p",[e._v("Each project release requires a PMC member or Committer as the "),a("strong",[e._v("Release Manager")]),e._v(".")]),e._v(" "),a("p",[e._v("The overall release process is as follows.")]),e._v(" "),a("ol",[a("li",[e._v("Environment preparation")]),e._v(" "),a("li",[e._v("Release preparation\n"),a("ol",[a("li",[e._v("the community initiates DISCUSS and communicates with the community about the specific release plan")]),e._v(" "),a("li",[e._v("create a branch for the release")]),e._v(" "),a("li",[e._v("clean up the issue")]),e._v(" "),a("li",[e._v("merge the necessary patches into the released branch")])])]),e._v(" "),a("li",[e._v("verify the branch\n"),a("ol",[a("li",[e._v("stability testing")]),e._v(" "),a("li",[e._v("verify the compilation flow of the branch code")]),e._v(" "),a("li",[e._v("Prepare Release Notes")])])]),e._v(" "),a("li",[e._v("prepare release materials\n"),a("ol",[a("li",[e._v("Tagging")]),e._v(" "),a("li",[e._v("upload the content to be released to the "),a("a",{attrs:{href:"https://dist.apache.org/repos/dist/dev/doris",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Dev SVN repository"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("preparation of other Convenience Binaries (e.g. upload to "),a("a",{attrs:{href:"https://repository.apache.org/#stagingRepositories",target:"_blank",rel:"noopener noreferrer"}},[e._v("Maven Staging repository"),a("OutboundLink")],1),e._v(")")])])]),e._v(" "),a("li",[e._v("Community Release Polling Process\n"),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Initiate a VOTE in the "),a("a",{attrs:{href:"dev@doris.apache.org"}},[e._v("Doris Community Dev Mail Group")]),e._v(".")]),e._v(" "),a("li",[e._v("After the vote is approved, send a Result email in the Doris community.")])])]),e._v(" "),a("li",[e._v("Complete the work\n"),a("ol",[a("li",[e._v("Upload the signed packages to the "),a("a",{attrs:{href:"https://dist.apache.org/repos/dist/release/doris",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Release repository"),a("OutboundLink")],1),e._v(" and generate the relevant links.")]),e._v(" "),a("li",[e._v("Post the download links on the Doris website and github, and clean up the old packages on svn.")]),e._v(" "),a("li",[e._v("Send an Announce email to dev@doris.apache.org")])])])]),e._v(" "),a("h2",{attrs:{id:"prepare-signatures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare-signatures"}},[e._v("#")]),e._v(" Prepare signatures")]),e._v(" "),a("p",[e._v("If this is your first time as Release Manager, then you need to prepare the following tools in your environment")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://www.apache.org/dev/release-signing.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Release Signing"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.apache.org/dev/openpgp.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("gpg"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.apache.org/dev/openpgp.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("svn"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"prepare-gpg-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare-gpg-key"}},[e._v("#")]),e._v(" Prepare gpg key")]),e._v(" "),a("p",[e._v("Release manager needs to create its own signature public key before release, and upload it to the public key server, then you can use this public key to sign the package to be released.\nIf your KEY already exists in "),a("a",{attrs:{href:"https://downloads.apache.org/doris/KEYS",target:"_blank",rel:"noopener noreferrer"}},[e._v("KEYS"),a("OutboundLink")],1),e._v(", then you can skip this step.")]),e._v(" "),a("h4",{attrs:{id:"installation-and-configuration-of-the-signature-software-gnupg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-and-configuration-of-the-signature-software-gnupg"}},[e._v("#")]),e._v(" Installation and configuration of the signature software GnuPG")]),e._v(" "),a("h5",{attrs:{id:"gnupg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gnupg"}},[e._v("#")]),e._v(" GnuPG")]),e._v(" "),a("p",[e._v("In 1991, programmer Phil Zimmermann developed the encryption software PGP in order to avoid government surveillance; it worked so well that it quickly spread and became an essential tool for many programmers. However, it was commercial software and could not be used freely. So, the Free Software Foundation decided to develop a replacement for PGP, named GnuPG, and that's how GPG came to be.")]),e._v(" "),a("h5",{attrs:{id:"installation-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-configuration"}},[e._v("#")]),e._v(" installation configuration")]),e._v(" "),a("p",[e._v("CentOS installation command.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yum install gnupg\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("After installation, the default configuration file gpg.conf will be placed in the home directory.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("~/.gnupg/gpg.conf\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("If this directory or file does not exist, you can just create an empty file.")]),e._v(" "),a("p",[e._v("Apache recommends SHA512 for signatures, which can be done by configuring gpg.\nEdit gpg.conf, adding the following three lines.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("personal-digest-preferences SHA512\ncert-digest-algo SHA512\ndefault-preference-list SHA512 SHA384 SHA256 SHA224 AES256 AES192 AES CAST5 ZLIB BZIP2 ZIP Uncompressed\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h4",{attrs:{id:"generate-a-new-signature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate-a-new-signature"}},[e._v("#")]),e._v(" Generate a new signature")]),e._v(" "),a("h5",{attrs:{id:"preparing-a-signature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparing-a-signature"}},[e._v("#")]),e._v(" Preparing a signature")]),e._v(" "),a("p",[e._v("Recommended settings for generating new signatures.")]),e._v(" "),a("p",[e._v("Here you must log in to the user account directly through a terminal such as SecureCRT, not through su - user or ssh, otherwise the password input box will not show up and an error will be reported.")]),e._v(" "),a("p",[e._v("First look at the version of gpg and whether it supports SHA512.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ gpg --version\ngpg (GnuPG) 2.0.22\nlibgcrypt 1.5.3\nCopyright (C) 2013 Free Software Foundation, Inc.\nLicense GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nHome: ~/.gnupg\nSupported algorithms:\nPubkey: RSA, ?, ?, ELG, DSA\nCipher: IDEA, 3DES, CAST5, BLOWFISH, AES, AES192, AES256, TWOFISH,\n        CAMELLIA128, CAMELLIA192, CAMELLIA256\nHash: MD5, SHA1, RIPEMD160, SHA256, SHA384, SHA512, SHA224\nCompression: Uncompressed, ZIP, ZLIB, BZIP2\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br")])]),a("h5",{attrs:{id:"generate-a-new-signature-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate-a-new-signature-2"}},[e._v("#")]),e._v(" Generate a new signature")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ gpg --gen-key\ngpg (GnuPG) 2.0.22; Copyright (C) 2013 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n   (1) RSA and RSA (default)\n   (2) DSA and Elgamal\n   (3) DSA (sign only)\n   (4) RSA (sign only)\nYour selection? 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n>  = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0)\nKey does not expire at all\nIs this correct? (y/N) y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: xxx\nName must be at least 5 characters long\nReal name: xxx-yyy\nEmail address: xxx@apache.org\nComment: xxx's key\nYou selected this USER-ID:\n    \"xxx-yyy (xxx's key) <xxx@apache.org>\"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? o\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br")])]),a("p",[e._v("Real name should be the same as the id shown in id.apache.org.\nEmail address is the apache email address.")]),e._v(" "),a("p",[e._v("Enter passphrase, twice, more than 8 characters.")]),e._v(" "),a("p",[a("strong",[e._v("The secret key here must be remembered, it will be used later when signing. It will also be used for publishing other components")])]),e._v(" "),a("p",[e._v("**If the "),a("code",[e._v("gpg --gen-key")]),e._v(" command gets stuck for a long time, try opening another terminal and execute the "),a("code",[e._v("find / | xargs file")]),e._v(" command to generate enough random characters, usually after a few minutes, the gpg command will complete. **")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Notice:")])]),e._v(" "),a("p",[e._v("If the generation is stuck when it can be generated and cannot be completed for a long time, the following solutions can be used to solve it:")]),e._v(" "),a("p",[e._v("Install the rng-tools tool by "),a("code",[e._v("yum install rng-tools")]),e._v(" to complete the installation.\nThen open a new window and execute the command: rngd -r /dev/urandom, and the key generation can be completed instantly.")])]),e._v(" "),a("h5",{attrs:{id:"view-and-output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view-and-output"}},[e._v("#")]),e._v(" View and output")]),e._v(" "),a("p",[e._v('The first line shows the public key file name (pubring.gpg), the second line shows the public key characteristics (4096 bits, hash string and generation time), the third line shows the "user ID", comments, emails, and the fourth line shows the private key characteristics.')]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ gpg --list-keys\n/home/lide/.gnupg/pubring.gpg\n-----------------------------\npub 4096R/33DBF2E0 2018-12-06\nuid xxx-yyyy (xxx's key) <xxx@apache.org>\nsub 4096R/0E8182E6 2018-12-06\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("where xxx-yyyy is the user ID.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("gpg --armor --output public-key.txt --export [user-id]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ gpg --armor --output public-key.txt --export xxx-yyyy\nThe file 'public-key.txt' already exists. Is it overwritten? (y/N)y\n$ cat public-key.txt\n-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: GnuPG v2.0.22 (GNU/Linux)\n\nmQINBFwJEQ0BEACwqLluHfjBqD/RWZ4uoYxNYHlIzZvbvxAlwS2mn53BirLIU/G3\n9opMWNplvmK+3+gNlRlFpiZ7EvHsF/YJOAP59HmI2Z...\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("h4",{attrs:{id:"uploading-signed-public-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uploading-signed-public-keys"}},[e._v("#")]),e._v(" Uploading Signed Public Keys")]),e._v(" "),a("p",[e._v("A public key server is a server on the network dedicated to storing the user's public key. send-keys parameter can upload the public key to the server.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("gpg --send-keys xxxx --keyserver https://keyserver.ubuntu.com/\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("where xxxx is the string after pub in the "),a("code",[e._v("-list-keys")]),e._v(" result of the previous step, e.g., 33DBF2E0")]),e._v(" "),a("p",[e._v("You can also upload the contents of the above public-key.txt via "),a("a",{attrs:{href:"https://keyserver.ubuntu.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://keyserver.ubuntu.com/"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("After successful upload, you can query this "),a("a",{attrs:{href:"https://keyserver.ubuntu.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://keyserver.ubuntu.com/"),a("OutboundLink")],1),e._v(" by entering 0x33DBF2E0. (Note that it needs to start with 0x)")]),e._v(" "),a("p",[e._v("There is a delay in querying this website, you may need to wait for 1 hour.")]),e._v(" "),a("h4",{attrs:{id:"generates-fingerprint-and-uploads-it-to-apache-user-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generates-fingerprint-and-uploads-it-to-apache-user-information"}},[e._v("#")]),e._v(" generates fingerprint and uploads it to apache user information")]),e._v(" "),a("p",[e._v("Since the public key server has no checking mechanism, anyone can upload a public key in your name, so there is no way to guarantee the reliability of the public key on the server. Usually, you can publish a public key fingerprint on your website and let other people check whether the downloaded public key is genuine or not.")]),e._v(" "),a("p",[e._v("The fingerprint parameter generates a public key fingerprint.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("gpg --fingerprint [user-id]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ gpg --fingerprint xxx-yyyy\npub 4096R/33DBF2E0 2018-12-06\n      Key fingerprint = 07AA E690 B01D 1A4B 469B 0BEF 5E29 CE39 33DB F2E0\nuid xxx-yyyy (xxx's key) <xxx@apache.org>\nsub 4096R/0E8182E6 2018-12-06\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("Paste the fingerprint above (i.e. 07AA E690 B01D 1A4B 469B 0BEF 5E29 CE39 33DB F2E0) into your own user information at")]),e._v(" "),a("p",[e._v("https://id.apache.org")]),e._v(" "),a("p",[a("code",[e._v("OpenPGP Public Key Primary Fingerprint:")])]),e._v(" "),a("blockquote",[a("p",[e._v("Note: Each person can have more than one Public Key.")])]),e._v(" "),a("h4",{attrs:{id:"generates-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generates-keys"}},[e._v("#")]),e._v(" generates keys")]),e._v(" "),a("p",[a("strong",[e._v("Be careful not to delete existing content in the KEYS file, it can only be added.")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('svn co https://dist.apache.org/repos/dist/dev/doris/\n# edit doris/KEYS file\ngpg --list-sigs [user-id] >> doris/KEYS\ngpg --armor --export [user ID] >> doris/KEYS\nsvn ci --username $ASF_USERNAME --password "$ASF_PASSWORD" -m "UPDATE KEYS"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("Note that the KEYS file should also be published to the following svn library.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('svn co https://dist.apache.org/repos/dist/release/doris\n# edit doris/KEYS file\nsvn ci --username $ASF_USERNAME --password "$ASF_PASSWORD" -m "UPDATE KEYS"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("After that it will automatically sync to.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://downloads.apache.org/doris/KEYS\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("In subsequent release poll emails, use the KEYS file here in "),a("code",[e._v("https://downloads.apache.org/doris/KEYS")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"maven-release-preparation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maven-release-preparation"}},[e._v("#")]),e._v(" Maven Release Preparation")]),e._v(" "),a("p",[e._v("For components such as the Doris Connector, you need to use maven for the release.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Generate a master password")]),e._v(" "),a("p",[a("code",[e._v("mvn --encrypt-master-password <password>")])]),e._v(" "),a("p",[e._v("This password is only used to encrypt other passwords that follow, and the output is something like "),a("code",[e._v("{VSb+6+76djkH/43...}")]),e._v(" Then create the "),a("code",[e._v("~/.m2/settings-security.xml")]),e._v(" file with the following content")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<settingsSecurity>\n  <master>{VSb+6+76djkH/43...}</master>\n</settingsSecurity>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Encrypt apache passwords")]),e._v(" "),a("p",[a("code",[e._v("mvn --encrypt-password <password>")])]),e._v(" "),a("p",[e._v("The password is the password for the apache account. The output is similar to "),a("code",[e._v("{GRKbCylpwysHfV...}")])]),e._v(" "),a("p",[e._v("Add in "),a("code",[e._v("~/.m2/settings.xml")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<servers>\n  \x3c!-- To publish a snapshot of your project --\x3e\n  <server>\n    <id>apache.snapshots.https</id>\n    <username>yangzhg</username>\n    <password>{GRKbCylpwysHfV...}</password>\n  </server>\n  \x3c!-- To stage a release of your project --\x3e\n  <server>\n    <id>apache.releases.https</id>\n    <username>yangzhg</username>\n    <password>{GRKbCylpwysHfV...}</password>\n  </server>\n</servers>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br")])])])]),e._v(" "),a("h2",{attrs:{id:"initiating-discuss-in-the-community"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initiating-discuss-in-the-community"}},[e._v("#")]),e._v(" Initiating DISCUSS in the community")]),e._v(" "),a("p",[e._v("DISCUSS is not a required process before a release, but it is highly recommended to start a discussion in the dev@doris mail group before a major release. Content includes, but is not limited to, descriptions of important features, bug fixes, etc.")])])}),[],!1,null,null,null);s.default=n.exports}}]);