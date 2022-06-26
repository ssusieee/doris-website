(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{834:function(t,e,s){"use strict";s.r(e);var a=s(15),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"space-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#space-list"}},[t._v("#")]),t._v(" Space list")]),t._v(" "),s("p",[t._v("The super administrator can perform the following operations in the space list:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Perform new cluster and cluster hosting operations")])]),t._v(" "),s("li",[s("p",[t._v("Recovery and deletion of unfinished spaces")])]),t._v(" "),s("li",[s("p",[t._v("Completed space deletion operation")])])]),t._v(" "),s("p",[t._v("The space administrator can mainly perform the following operations in the space list:")]),t._v(" "),s("ul",[s("li",[t._v("View authorized space information")])]),t._v(" "),s("h2",{attrs:{id:"completed-space"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#completed-space"}},[t._v("#")]),t._v(" Completed space")]),t._v(" "),s("p",[t._v("The super administrator can operate the completed space through the button to the right of the space name. Space administrators can click to enter the space to manage clusters or data in the space.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/doris-manager/spacelist-1.png"),alt:""}}),t._v(" "),s("h2",{attrs:{id:"unfinished-space"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unfinished-space"}},[t._v("#")]),t._v(" Unfinished space")]),t._v(" "),s("p",[t._v("Doris Manger provides a draft save function of the space creation process to record the incomplete space creation process. Super administrators can view the list of unfinished spaces by switching tabs, and perform recovery or deletion operations.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/doris-manager/spacelist-2.png"),alt:""}}),t._v(" "),s("h1",{attrs:{id:"new-space"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-space"}},[t._v("#")]),t._v(" New space")]),t._v(" "),s("p",[t._v("There are two ways to create a new space: new cluster and cluster hosting.")]),t._v(" "),s("h2",{attrs:{id:"new-cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-cluster"}},[t._v("#")]),t._v(" New cluster")]),t._v(" "),s("h3",{attrs:{id:"_1-registration-space"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-registration-space"}},[t._v("#")]),t._v(" 1 Registration space")]),t._v(" "),s("p",[t._v("Space information includes space name, space introduction, and selection of space administrators.")]),t._v(" "),s("p",[t._v("Space name and administrator are required/optional fields.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/doris-manager/spacelist-3.png"),alt:""}}),t._v(" "),s("h3",{attrs:{id:"_2-add-host"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-add-host"}},[t._v("#")]),t._v(" 2 Add host")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/doris-manager/spacelist-4.png"),alt:""}}),t._v(" "),s("h4",{attrs:{id:"configure-ssh-login-free"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-ssh-login-free"}},[t._v("#")]),t._v(" Configure SSH login-free")]),t._v(" "),s("p",[t._v("Doris Manager needs to distribute the Agent installation package during installation, so it is necessary to configure SSH login-free on the server (agent01) where Doris is to be installed.")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#1. To log in to the server, you need to use the manager and agent accounts to be consistent")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v(" - xxx\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#2. Generate a key pair on the machine where doris manager is deployed")]),t._v("\nssh-keygen -t rsa -P "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" -f ~/.ssh/id_rsa\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#3. Copy the public key to the machine agent01")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" ~/.ssh/id_rsa.pub root@agent01:~\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#4. Log in to agent01 and append the public key to authorized_keys")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" ~/id_rsa.pub "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" .ssh/authorized_keys\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#5. After doing this, we can log in to agent01 without password on the doris manger machine")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" agent01@xx.xxx.xx.xx\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("p",[t._v("For details, please refer to: https://blog.csdn.net/universe_hao/article/details/52296811")]),t._v(" "),s("p",[t._v("In addition, it should be noted that the permissions of the .ssh directory are 700, and the permissions of the authorized_keys and private keys under it are 600. Otherwise, you will not be able to log in without a password due to permission issues. We can see that the known_hosts file will be generated after logging in. At the same time, when starting doris, you need to use a password-free login account.")]),t._v(" "),s("p",[t._v("When adding nodes in the second step of the Doris Manager installation cluster, use the private key of the doris manager machine, that is, ~/.ssh/id_rsa (note: including the head and tail of the key file)")]),t._v(" "),s("h4",{attrs:{id:"host-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#host-list"}},[t._v("#")]),t._v(" Host list")]),t._v(" "),s("p",[t._v("Enter the host IP to add a new host, or add it in batches.")]),t._v(" "),s("h3",{attrs:{id:"_3-installation-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-installation-options"}},[t._v("#")]),t._v(" 3 Installation options")]),t._v(" "),s("h4",{attrs:{id:"get-the-installation-package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-the-installation-package"}},[t._v("#")]),t._v(" Get the installation package")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Code package path")]),t._v(" "),s("p",[t._v("When deploying a cluster through Doris Manager, you need to provide the compiled Doris installation package. You can compile it yourself from the Doris source code, or use the officially provided [binary version](https://doris.apache.org/zh-CN/ downloads/downloads.html).")])])]),t._v(" "),s("p",[s("code",[t._v("Doris Manager will pull the Doris installation package through http. If you need to build your own http service, please refer to the bottom of the document - Self-built http service")]),t._v(".")]),t._v(" "),s("h4",{attrs:{id:"specify-the-installation-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specify-the-installation-path"}},[t._v("#")]),t._v(" Specify the installation path")]),t._v(" "),s("ol",[s("li",[t._v("Doris and Doris Manger Agent will be installed in this directory. Make sure this directory is dedicated to Doirs and related components.")]),t._v(" "),s("li",[t._v("Specify the Agent startup port, the default is 8001, if there is a conflict, you can customize it.")])]),t._v(" "),s("h3",{attrs:{id:"_4-verify-the-host"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-verify-the-host"}},[t._v("#")]),t._v(" 4 Verify the host")]),t._v(" "),s("p",[t._v("The system will automatically perform verification according to the host status. When the verification is completed, the Agent will start sending back the heartbeat, and you can click to proceed to the next step.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/doris-manager/spacelist-5.png"),alt:""}}),t._v(" "),s("h3",{attrs:{id:"_5-planning-nodes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-planning-nodes"}},[t._v("#")]),t._v(" 5 Planning Nodes")]),t._v(" "),s("p",[t._v("Click the Assign Node button to plan FE/BE/Broker nodes for the host.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/doris-manager/spacelist-6.png"),alt:""}}),t._v(" "),s("h3",{attrs:{id:"_6-configuration-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-configuration-parameters"}},[t._v("#")]),t._v(" 6 Configuration Parameters")]),t._v(" "),s("p",[t._v("Configure parameters for the nodes planned in the previous step. You can use the default values ​​or turn on the custom configuration switch to customize the configuration.")]),t._v(" "),s("h3",{attrs:{id:"_7-deploy-the-cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-deploy-the-cluster"}},[t._v("#")]),t._v(" 7 Deploy the cluster")]),t._v(" "),s("p",[t._v("The system will automatically perform verification according to the status of the host installation progress. When the verification is completed, it will start the node and return the heartbeat. You can click to proceed to the next step.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/doris-manager/spacelist-7.png"),alt:""}}),t._v(" "),s("h3",{attrs:{id:"_8-complete-the-creation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-complete-the-creation"}},[t._v("#")]),t._v(" 8 Complete the creation")]),t._v(" "),s("p",[t._v("Complete the above steps to complete the new cluster.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/doris-manager/spacelist-8.png"),alt:""}}),t._v(" "),s("h2",{attrs:{id:"cluster-hosting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cluster-hosting"}},[t._v("#")]),t._v(" Cluster hosting")]),t._v(" "),s("h3",{attrs:{id:"_1-registration-space-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-registration-space-2"}},[t._v("#")]),t._v(" 1 Registration space")]),t._v(" "),s("p",[t._v("Space information includes space name, space introduction, and selection of space administrators.")]),t._v(" "),s("p",[t._v("Space name and administrator are required/optional fields.")]),t._v(" "),s("h3",{attrs:{id:"_2-connect-to-the-cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-connect-to-the-cluster"}},[t._v("#")]),t._v(" 2 Connect to the cluster")]),t._v(" "),s("p",[t._v("Cluster information includes cluster address, HTTP port, JDBC port, cluster username, and cluster password. Users can fill in according to their own cluster information.")]),t._v(" "),s("p",[t._v("Click the Link Test button to test it.")]),t._v(" "),s("h3",{attrs:{id:"_3-hosting-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-hosting-options"}},[t._v("#")]),t._v(" 3 Hosting Options")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/doris-manager/spacelist-9.png"),alt:""}}),t._v(" "),s("h4",{attrs:{id:"configure-ssh-login-free-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-ssh-login-free-2"}},[t._v("#")]),t._v(" Configure SSH login-free")]),t._v(" "),s("p",[t._v("Doris Manager needs to distribute the Agent installation package during installation, so it is necessary to configure SSH login-free on the server (agent01) where Doris is to be installed.")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#1. To log in to the server, you need to use the manger and agent accounts to be consistent")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v(" - xxx\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#2. Generate a key pair on the machine where doris manager is deployed")]),t._v("\nssh-keygen -t rsa -P "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" -f ~/.ssh/id_rsa\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#3. Copy the public key to the machine agent01")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" ~/.ssh/id_rsa.pub root@agent01:~\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#4. Log in to agent01 and append the public key to authorized_keys")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" ~/id_rsa.pub "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" .ssh/authorized_keys\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#5. After doing this, we can log in to agent01 without password on the doris manger machine")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" agent01@xx.xxx.xx.xx\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("p",[t._v("In addition, it should be noted that the permissions of the .ssh directory are 700, and the permissions of the authorized_keys and private keys under it are 600. Otherwise, you will not be able to log in without a password due to permission issues. We can see that the known_hosts file will be generated after logging in. At the same time, when starting doris, you need to use a password-free login account.")]),t._v(" "),s("p",[t._v("When installing a cluster in Doris Manager, just use the private key of the doris manager machine, ie ~/.ssh/id_rsa")]),t._v(" "),s("p",[t._v("For details, please refer to: https://blog.csdn.net/universe_hao/article/details/52296811")]),t._v(" "),s("h4",{attrs:{id:"specify-the-installation-path-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specify-the-installation-path-2"}},[t._v("#")]),t._v(" Specify the installation path")]),t._v(" "),s("ol",[s("li",[t._v("Doris and Doris Manger Agent will be installed in this directory. Make sure this directory is dedicated to Doirs and related components.")]),t._v(" "),s("li",[t._v("Specify the Agent startup port, the default is 8001, if there is a conflict, you can customize it.")])]),t._v(" "),s("h3",{attrs:{id:"_4-verify-the-host-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-verify-the-host-2"}},[t._v("#")]),t._v(" 4 Verify the host")]),t._v(" "),s("p",[t._v("The system will automatically perform verification according to the host status. When the verification is completed, the Agent will start sending back the heartbeat, and you can click to proceed to the next step.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/doris-manager/spacelist-10.png"),alt:""}}),t._v(" "),s("h3",{attrs:{id:"_5-verify-the-cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-verify-the-cluster"}},[t._v("#")]),t._v(" 5 Verify the cluster")]),t._v(" "),s("p",[t._v("Verify the cluster quantile instance installation verification, instance dependency verification, and instance startup verification. After the verification is successful, click Next to complete the creation.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/doris-manager/spacelist-11.png"),alt:""}}),t._v(" "),s("h3",{attrs:{id:"_6-complete-access"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-complete-access"}},[t._v("#")]),t._v(" 6 Complete access")]),t._v(" "),s("p",[t._v("Complete the above steps to complete cluster hosting.")]),t._v(" "),s("h2",{attrs:{id:"self-built-http-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#self-built-http-service"}},[t._v("#")]),t._v(" Self-built http service")]),t._v(" "),s("h3",{attrs:{id:"_1-yum-source-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-yum-source-installation"}},[t._v("#")]),t._v(" 1 yum source installation")]),t._v(" "),s("ol",[s("li",[t._v("Installation\nyum install -y nginx")]),t._v(" "),s("li",[t._v("Start\nsystemctl start nginx")])]),t._v(" "),s("h3",{attrs:{id:"_2-source-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-source-installation"}},[t._v("#")]),t._v(" 2 Source installation")]),t._v(" "),s("p",[t._v("Reference: https://www.runoob.com/linux/nginx-install-setup.html")]),t._v(" "),s("h3",{attrs:{id:"_3-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-configuration"}},[t._v("#")]),t._v(" 3 Configuration")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Put the doris installation package in the nginx root directory\nmv PALO-0.15.1-rc03-binary.tar.gz /usr/share/nginx/html")])]),t._v(" "),s("li",[s("p",[t._v("Modify ngixn.conf")])])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("location /download {\n   alias /home/work/nginx/nginx/html/;\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("Restart ngxin access after modification:\nhttps://host:port/download/PALO-0.15.1-rc03-binary.tar.gz")])])}),[],!1,null,null,null);e.default=n.exports}}]);