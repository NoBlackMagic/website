/* NoBlackMagic.com v0.0.1 | by Marco Pegoraro | https://github.com/NoBlackMagic/noblackmagic.github.io */
/**
 * Facebook Comments Thread
 */
(function() {
    // defaults values
    var options = window.qs({
        thread: null,
        url: window.fbCommentsUrl || document.location.href.split("#")[0],
        width: window.fbCommentsWidth || "100%",
        posts: window.fbCommentsPosts || 5,
        theme: window.fbCommentsTheme || "light",
        // iframe config
        id: "",
        "class": "",
        style: ""
    });
    if (options.thread) {
        options.id = options.id || options.thread.replace(/\//g, "-");
        options.url += "#" + options.thread;
        if (options.url.indexOf("localhost") !== -1) {
            document.write('<div style="background:#eee;padding: 2px 5px;text-align:center;font-style:italic">' + "Facebook comments are disabled from <b>localhost</b>" + "</div>");
            return;
        }
        document.write("<div " + 'id="' + options.id + '" ' + 'class="fb-comments ' + options.class + '" ' + 'style="' + options.style + '" ' + 'data-href="' + options.url + '" ' + 'data-width="' + options.width + '" ' + 'data-numposts="' + options.posts + '" ' + 'data-colorscheme="' + options.theme + '" ' + "></div>");
    }
})();