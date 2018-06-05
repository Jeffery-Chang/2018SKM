(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

/* 2018-06-05 拿掉GA */
var ga_code = (location.hostname == 'smileangel.skm.com.tw') ? 'UA-54804356-4' : '';
ga('create', ga_code, 'auto');

function gapage(page) {
    ga('send', 'pageview', page);
}

function gaclick(evt) {
    ga('send', 'event', 'click', evt);
}

function trackWaitJump(someurl, url) {
    setTimeout(function () {
        location.href = url;
    }, 100);
    gaclick(someurl);
}