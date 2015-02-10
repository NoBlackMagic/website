/* NoBlackMagic.com v0.0.1 | by Marco Pegoraro | https://github.com/NoBlackMagic/noblackmagic.github.io */
/**
 *
 */
(function() {
    var options = window.qs({
        method: "GET",
        url: false,
        data: ""
    });
    if (!options.url) {
        document.write("<!-- include failed: no url was specified -->");
        return;
    }
    document.write("<div></div>");
    var container = document.getElementsByTagName("div");
    container = container[container.length - 1];
    var request = new XMLHttpRequest();
    request.open(options.method, options.url, true);
    request.onreadystatechange = function() {
        if (request.readyState != 4 || request.status != 200) {
            return;
        }
        container.innerHTML = request.responseText;
    };
    request.send(options.data);
})();