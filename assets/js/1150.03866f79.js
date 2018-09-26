(window.webpackJsonp=window.webpackJsonp||[]).push([[1150],{1775:function(e,s,a){"use strict";a.r(s);var n=a(15),t=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"release-doris-core"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release-doris-core"}},[e._v("#")]),e._v(" Release Doris Core")]),e._v(" "),a("p",[e._v("Doris Core refers to the content published in https://github.com/apache/incubator-doris.")]),e._v(" "),a("h2",{attrs:{id:"preparing-for-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparing-for-release"}},[e._v("#")]),e._v(" Preparing for release")]),e._v(" "),a("p",[e._v("First, see the "),a("RouterLink",{attrs:{to:"/community/release-and-verify/release-prepare.html"}},[e._v("release preparation")]),e._v(" documentation for release preparation.")],1),e._v(" "),a("h3",{attrs:{id:"preparing-a-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparing-a-branch"}},[e._v("#")]),e._v(" Preparing a branch")]),e._v(" "),a("p",[e._v("You need to create a new branch before releasing. For example.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git checkout -b branch-0.9\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("This branch should be more fully tested to make features available, bugs converged, and important bugs fixed.\nThis process requires waiting for the community to see if there are any necessary patches that need to be merged in for this release, and if so, cherry-picking it to the release branch.")]),e._v(" "),a("h3",{attrs:{id:"clean-up-issues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clean-up-issues"}},[e._v("#")]),e._v(" Clean up issues")]),e._v(" "),a("p",[e._v("Go through all the issues that belong to this release, close the ones that are done, and if they can't be done, defer them to a later release.")]),e._v(" "),a("h3",{attrs:{id:"merge-necessary-patches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#merge-necessary-patches"}},[e._v("#")]),e._v(" Merge necessary patches")]),e._v(" "),a("p",[e._v("If someone in the community says there are important bugs that need to be merged in, then the Release Manager needs to evaluate and merge the important patches into the release branch.")]),e._v(" "),a("h2",{attrs:{id:"validation-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validation-branch"}},[e._v("#")]),e._v(" Validation branch")]),e._v(" "),a("h3",{attrs:{id:"stability-testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stability-testing"}},[e._v("#")]),e._v(" Stability testing")]),e._v(" "),a("p",[e._v("Pass the batched branch to the QA students for stability testing. If during the testing process, there are issues that need to be fixed, then if during the testing process, there are issues that need to be fixed, then after they are fixed, the PRs that fix the issues need to be merged into the branch of the pending release.")]),e._v(" "),a("p",[e._v("Only after the whole branch is stable, can you prepare to release the version.")]),e._v(" "),a("h3",{attrs:{id:"compile-verification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile-verification"}},[e._v("#")]),e._v(" Compile verification")]),e._v(" "),a("p",[e._v("Please refer to the compilation documentation for compilation to ensure that the source code is compiled correctly.")]),e._v(" "),a("h3",{attrs:{id:"prepare-release-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare-release-notes"}},[e._v("#")]),e._v(" Prepare Release Notes")]),e._v(" "),a("h2",{attrs:{id:"community-posting-voting-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#community-posting-voting-process"}},[e._v("#")]),e._v(" Community Posting Voting Process")]),e._v(" "),a("h3",{attrs:{id:"tagging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tagging"}},[e._v("#")]),e._v(" Tagging")]),e._v(" "),a("p",[e._v("Once the above branch is more stable, you can tag this branch.\nRemember to modify the "),a("code",[e._v("build_version")]),e._v(" variable in "),a("code",[e._v("gensrc/script/gen_build_version.sh")]),e._v(" when creating the tag. For example "),a("code",[e._v('build_version="0.10.0-release"')])]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ git checkout branch-0.9\n$ git tag -a 0.9.0-rc01 -m "0.9.0 release candidate 01"\n$ git push origin 0.9.0-rc01\nCounting objects: 1, done.\nWriting objects: 100% (1/1), 165 bytes | 0 bytes/s, done.\nTotal 1 (delta 0), reused 0 (delta 0)\nTo git@github.com:apache/incubator-doris.git\n * [new tag]         0.9.0-rc01 -> 0.9.0-rc01\n\n$ git tag\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("h3",{attrs:{id:"package-sign-and-upload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-sign-and-upload"}},[e._v("#")]),e._v(" Package, sign and upload")]),e._v(" "),a("p",[e._v("For the following steps, you also need to log in to the user account directly through a terminal such as SecureCRT, not through "),a("code",[e._v("su - user")]),e._v(" or "),a("code",[e._v("ssh")]),e._v(", otherwise the password input box will not be displayed and an error will be reported.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git checkout 0.9.0-rc01\n\n$ git archive --format=tar 0.9.0-rc01 --prefix=apache-doris-0.9.0-incubating-src/ | gzip > apache-doris-0.9.0-incubating-src.tar.gz\n\n$ gpg -u xxx@apache.org --armor --output apache-doris-0.9.0-incubating-src.tar.gz.asc --detach-sign apache-doris-0.9.0-incubating-src.tar.gz\n\n$ gpg --verify apache-doris-0.9.0-incubating-src.tar.gz.asc apache-doris-0.9.0-incubating-src.tar.gz\n\n$ sha512sum apache-doris-0.9.0-incubating-src.tar.gz > apache-doris-0.9.0-incubating-src.tar.gz.sha512\n\n$ sha512sum --check apache-doris-0.9.0-incubating-src.tar.gz.sha512\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("p",[e._v("Then upload the packaged content to the svn repository by first downloading the svn library at:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("svn co https://dist.apache.org/repos/dist/dev/incubator/doris/\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Organize all the previously obtained files into the following svn path:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./doris/\n|-- 0.11.0-rc1\n|   |-- apache-doris-0.11.0-incubating-src.tar.gz\n|   |-- apache-doris-0.11.0-incubating-src.tar.gz.asc\n|   `-- apache-doris-0.11.0-incubating-src.tar.gz.sha512\n`-- KEYS\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("Upload these file:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('svn add 0.11.0-rc1\nsvn commit -m "Add 0.11.0-rc1"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h3",{attrs:{id:"email-the-community-at-dev-doris-apache-org-to-vote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#email-the-community-at-dev-doris-apache-org-to-vote"}},[e._v("#")]),e._v(" Email the community at dev@doris.apache.org to vote")]),e._v(" "),a("p",[e._v("[VOTE] Release Apache Doris 0.9.0-incubating-rc01")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Hi all,\n\nPlease review and vote on Apache Doris 0.9.0-incubating-rc01 release.\n\nThe release candidate has been tagged in GitHub as 0.9.0-rc01, available\nhere:\nhttps://github.com/apache/incubator-doris/releases/tag/0.9.0-rc01\n\nRelease Notes are here:\nhttps://github.com/apache/incubator-doris/issues/1891\n\nThanks to everyone who has contributed to this release.\n\nThe artifacts (source, signature and checksum) corresponding to this release\ncandidate can be found here:\nhttps://dist.apache.org/repos/dist/dev/incubator/doris/0.9/0.9.0-rc1/\n\nThis has been signed with PGP key 33DBF2E0, corresponding to\nlide@apache.org.\nKEYS file is available here:\nhttps://downloads.apache.org/incubator/doris/KEYS\nIt is also listed here:\nhttps://people.apache.org/keys/committer/lide.asc\n\nTo verify and build, you can refer to following wiki:\nhttps://github.com/apache/incubator-doris/wiki/How-to-verify-Apache-Release\nhttps://wiki.apache.org/incubator/IncubatorReleaseChecklist\n\nThe vote will be open for at least 72 hours.\n[ ] +1 Approve the release\n[ ] +0 No opinion\n[ ] -1 Do not release this package because ...\n\nBest Regards,\nxxx\n\n----\nDISCLAIMER: \nApache Doris (incubating) is an effort undergoing incubation at The\nApache Software Foundation (ASF), sponsored by the Apache Incubator PMC.\n\nIncubation is required of all newly accepted\nprojects until a further review indicates that the\ninfrastructure, communications, and decision making process have\nstabilized in a manner consistent with other successful ASF\nprojects.\n\nWhile incubation status is not necessarily a reflection\nof the completeness or stability of the code, it does indicate\nthat the project has yet to be fully endorsed by the ASF.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br"),a("span",{staticClass:"line-number"},[e._v("39")]),a("br"),a("span",{staticClass:"line-number"},[e._v("40")]),a("br"),a("span",{staticClass:"line-number"},[e._v("41")]),a("br"),a("span",{staticClass:"line-number"},[e._v("42")]),a("br"),a("span",{staticClass:"line-number"},[e._v("43")]),a("br"),a("span",{staticClass:"line-number"},[e._v("44")]),a("br"),a("span",{staticClass:"line-number"},[e._v("45")]),a("br"),a("span",{staticClass:"line-number"},[e._v("46")]),a("br"),a("span",{staticClass:"line-number"},[e._v("47")]),a("br"),a("span",{staticClass:"line-number"},[e._v("48")]),a("br"),a("span",{staticClass:"line-number"},[e._v("49")]),a("br"),a("span",{staticClass:"line-number"},[e._v("50")]),a("br")])]),a("h3",{attrs:{id:"after-the-vote-is-approved-send-the-result-email"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#after-the-vote-is-approved-send-the-result-email"}},[e._v("#")]),e._v(" After the vote is approved, send the Result email")]),e._v(" "),a("p",[e._v("[Result][VOTE] Release Apache Doris 0.9.0-incubating-rc01")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Thanks to everyone, and this vote is now closed.\n\nIt has passed with 4 +1 (binding) votes and no 0 or -1 votes.\n\nBinding:\n+1 Zhao Chun\n+1 xxx\n+1 Li Chaoyong\n+1 Mingyu Chen\n\nBest Regards,\nxxx\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])]),a("h3",{attrs:{id:"email-general-incubator-apache-org-to-vote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#email-general-incubator-apache-org-to-vote"}},[e._v("#")]),e._v(" Email general@incubator.apache.org to vote")]),e._v(" "),a("p",[a("strong",[e._v("If not an incubator program, please skip")])]),e._v(" "),a("p",[e._v("[VOTE] Release Apache Doris 0.9.0-incubating-rc01")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Hi all,\n\nPlease review and vote on Apache Doris 0.9.0-incubating-rc01 release.\n\nApache Doris is an MPP-based interactive SQL data warehousing for reporting and analysis.\n\nThe Apache Doris community has voted on and approved this release:\nhttps://lists.apache.org/thread.html/d70f7c8a8ae448bf6680a15914646005c6483564464cfa15f4ddc2fc@%3Cdev.doris.apache.org%3E\n\nThe vote result email thread:\nhttps://lists.apache.org/thread.html/64d229f0ba15d66adc83306bc8d7b7ccd5910ecb7e842718ce6a61da@%3Cdev.doris.apache.org%3E\n\nThe release candidate has been tagged in GitHub as 0.9.0-rc01, available here:\nhttps://github.com/apache/incubator-doris/releases/tag/0.9.0-rc01\n\nThere is no CHANGE LOG file because this is the first release of Apache Doris.\nThanks to everyone who has contributed to this release, and there is a simple release notes can be found here:\nhttps://github.com/apache/incubator-doris/issues/406\n\nThe artifacts (source, signature and checksum) corresponding to this release candidate can be found here:\nhttps://dist.apache.org/repos/dist/dev/incubator/doris/0.9/0.9.0-rc01/\n\nThis has been signed with PGP key 33DBF2E0, corresponding to lide@apache.org.\nKEYS file is available here:\nhttps://downloads.apache.org/incubator/doris/KEYS\nIt is also listed here:\nhttps://people.apache.org/keys/committer/lide.asc\n\nThe vote will be open for at least 72 hours.\n[ ] +1 Approve the release\n[ ] +0 No opinion\n[ ] -1 Do not release this package because ...\n\nTo verify and build, you can refer to following instruction:\n\nFirstly, you must be install and start docker service, and then you could build Doris as following steps:\n\nStep1: Pull the docker image with Doris building environment\n$ docker pull apache/incubator-doris:build-env-1.3.1\nYou can check it by listing images, its size is about 3.28GB.\n\nStep2: Run the Docker image\nYou can run image directly:\n$ docker run -it apache/incubator-doris:build-env-1.3.1\n\nStep3: Download Doris source\nNow you should in docker environment, and you can download Doris source package.\n(If you have downloaded source and it is not in image, you can map its path to image in Step2.)\n$ wget https://dist.apache.org/repos/dist/dev/incubator/doris/0.9/0.9.0-rc01/apache-doris-0.9.0.rc01-incubating-src.tar.gz\n\nStep4: Build Doris\nNow you can decompress and enter Doris source path and build Doris.\n$ tar zxvf apache-doris-0.9.0.rc01-incubating-src.tar.gz\n$ cd apache-doris-0.9.0.rc01-incubating-src\n$ sh build.sh\n\nBest Regards,\nxxx\n\n----\nDISCLAIMER: \nApache Doris (incubating) is an effort undergoing incubation at The\nApache Software Foundation (ASF), sponsored by the Apache Incubator PMC.\n\nIncubation is required of all newly accepted\nprojects until a further review indicates that the\ninfrastructure, communications, and decision making process have\nstabilized in a manner consistent with other successful ASF\nprojects.\n\nWhile incubation status is not necessarily a reflection\nof the completeness or stability of the code, it does indicate\nthat the project has yet to be fully endorsed by the ASF.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br"),a("span",{staticClass:"line-number"},[e._v("39")]),a("br"),a("span",{staticClass:"line-number"},[e._v("40")]),a("br"),a("span",{staticClass:"line-number"},[e._v("41")]),a("br"),a("span",{staticClass:"line-number"},[e._v("42")]),a("br"),a("span",{staticClass:"line-number"},[e._v("43")]),a("br"),a("span",{staticClass:"line-number"},[e._v("44")]),a("br"),a("span",{staticClass:"line-number"},[e._v("45")]),a("br"),a("span",{staticClass:"line-number"},[e._v("46")]),a("br"),a("span",{staticClass:"line-number"},[e._v("47")]),a("br"),a("span",{staticClass:"line-number"},[e._v("48")]),a("br"),a("span",{staticClass:"line-number"},[e._v("49")]),a("br"),a("span",{staticClass:"line-number"},[e._v("50")]),a("br"),a("span",{staticClass:"line-number"},[e._v("51")]),a("br"),a("span",{staticClass:"line-number"},[e._v("52")]),a("br"),a("span",{staticClass:"line-number"},[e._v("53")]),a("br"),a("span",{staticClass:"line-number"},[e._v("54")]),a("br"),a("span",{staticClass:"line-number"},[e._v("55")]),a("br"),a("span",{staticClass:"line-number"},[e._v("56")]),a("br"),a("span",{staticClass:"line-number"},[e._v("57")]),a("br"),a("span",{staticClass:"line-number"},[e._v("58")]),a("br"),a("span",{staticClass:"line-number"},[e._v("59")]),a("br"),a("span",{staticClass:"line-number"},[e._v("60")]),a("br"),a("span",{staticClass:"line-number"},[e._v("61")]),a("br"),a("span",{staticClass:"line-number"},[e._v("62")]),a("br"),a("span",{staticClass:"line-number"},[e._v("63")]),a("br"),a("span",{staticClass:"line-number"},[e._v("64")]),a("br"),a("span",{staticClass:"line-number"},[e._v("65")]),a("br"),a("span",{staticClass:"line-number"},[e._v("66")]),a("br"),a("span",{staticClass:"line-number"},[e._v("67")]),a("br"),a("span",{staticClass:"line-number"},[e._v("68")]),a("br"),a("span",{staticClass:"line-number"},[e._v("69")]),a("br"),a("span",{staticClass:"line-number"},[e._v("70")]),a("br"),a("span",{staticClass:"line-number"},[e._v("71")]),a("br"),a("span",{staticClass:"line-number"},[e._v("72")]),a("br"),a("span",{staticClass:"line-number"},[e._v("73")]),a("br")])]),a("p",[e._v("The thread link for the email can be found here.")]),e._v(" "),a("p",[a("code",[e._v("https://lists.apache.org/list.html?dev@doris.apache.org")])]),e._v(" "),a("h3",{attrs:{id:"send-result-email-to-general-incubator-apache-org"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#send-result-email-to-general-incubator-apache-org"}},[e._v("#")]),e._v(" Send Result email to general@incubator.apache.org")]),e._v(" "),a("p",[a("strong",[e._v("If not an incubator project, please skip")])]),e._v(" "),a("p",[e._v("[RESULT][VOTE] Release Apache Doris 0.9.0-incubating-rc01")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Hi,\n\nThanks to everyone, and the vote for releasing Apache Doris 0.9.0-incubating-rc01 is now closed.\n\nIt has passed with 4 +1 (binding) votes and no 0 or -1 votes.\n\nBinding:\n+1 Willem Jiang\n+1 Justin Mclean\n+1 ShaoFeng Shi\n+1 Makoto Yui\n\nThe vote thread:\nhttps://lists.apache.org/thread.html/da05fdd8d84e35de527f27200b5690d7811a1e97d419d1ea66562130@%3Cgeneral.incubator.apache.org%3E\n\nBest Regards,\nxxx\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br")])]),a("h2",{attrs:{id:"completing-the-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#completing-the-release"}},[e._v("#")]),e._v(" Completing the release")]),e._v(" "),a("p",[e._v("Please refer to the "),a("RouterLink",{attrs:{to:"/community/release-and-verify/release-complete.html"}},[e._v("Release Completion")]),e._v(" document to complete the release process.")],1)])}),[],!1,null,null,null);s.default=t.exports}}]);