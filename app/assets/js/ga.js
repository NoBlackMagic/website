/* NoBlackMagic.com v0.0.1 | by Marco Pegoraro | https://github.com/NoBlackMagic/noblackmagic.github.io */
(function() {
    // defaults values
    var ua = window.qs({
        ua: null
    }).ua;
    var html = "<script>" + "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){" + "(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o)," + "m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)" + "})(window,document,'script','//www.google-analytics.com/analytics.js','ga');" + "ga('create', '" + ua + "', 'auto');" + "ga('send', 'pageview');" + "</script>";
    // write contents only when on non development environment
    if (ua.length && document.location.href.indexOf("localhost:") === -1) {
        document.write(html);
    }
})();