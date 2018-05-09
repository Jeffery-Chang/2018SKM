(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js		= d.createElement(s); 
    js.id	= id;
    js.src	= "//connect.facebook.net/zh_TW/all.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs);
    window.fbAsyncInit = function() {
        FB.init({
            appId      : (location.hostname == 'smileangel.skm.com.tw') ? '1423502524421148' : '164375064234305',
            xfbml      : true,
            version    : 'v2.12'
        });
    };
}(document, 'script', 'facebook-jssdk'));

var resizeFG = false;
var menuCtrl = {
    init: function(){
        /* 2018-05-09 改判斷protocol */
        if(location.protocol != 'https:'){
            this.chkProtocol();
        }

        if(this.chkIE8() === 'IE8'){
            location.href = 'ie8/';
            return;
        }

        if(menuCtrl.timesUp()) $('header nav li').eq(4).removeClass('none');
        if(this.timeStart()) this.menuSet();
        this.resize();
        this.starSet();
        if(menuCtrl.chkWebview()) $('.warn').show();

        $(window).on('resize', () => {
            this.resize();
            this.starSet();
        });
    },
    timeStart: function(){
        var endTime = Date.parse('2018/04/30 00:00:00').valueOf();
        var nowTime = Date.parse(new Date()).valueOf();
        var result = nowTime >= endTime;
        return result;
    },
    timesUp: function(){
        var endTime = Date.parse('2018/06/20 00:00:00').valueOf();
        var nowTime = Date.parse(new Date()).valueOf();
        var result = nowTime >= endTime;
        return result;
    },
    menuSet: function(){
        var $this = this;
        $('.menu').on('click',function(e){
            $this.preventAll(e);
            $(this).toggleClass('open');
            $('header nav').fadeToggle('fast');
        });

        $('header p').css('cursor', 'pointer').on('click', function(e){
            $this.preventAll(e);
            gaclick('menu_logo');
            window.open('http://www.skm.com.tw/', '_blank');
        });

        $('header nav li').on('click', function(e){
            $this.preventAll(e);
            var menuIndex = $(this).index();
            switch (menuIndex){
                case 0:
                    trackWaitJump('menu_index', 'index.html');
                    break;
                case 1:
                    trackWaitJump('menu_rule', 'activity.html');
                    break;
                case 2:
                    trackWaitJump('menu_votelist', 'general.html');
                    break;
                case 3:
                    trackWaitJump('', 'tvc.html');
                    break;
                case 4:
                    trackWaitJump('', 'award.html');
                    break;
                case 5:
                    gaclick('menu_fbshare');
                    $this.shareFB();
                    break;
                case 6:
                    gaclick('menu_gshare');
                    $this.shareGplus();
                    break;
            }
        });
    },
    starSet: function(){
        var starList = ['one', 'two', 'three', 'four'];
        var obj = $('.main .meteor span');

        if($(window).width() > 600){
            $.each(obj, function(index, obj){
                $(obj).addClass(starList[index]);
            });
        }else{
            $.each(obj, function(index, obj){
                $(obj).removeClass(starList[index]);
            });
        }
    },
    resize: function(){
        if($(window).width() > 600){
            $('header nav').show();
            $('.menu').removeClass('open');
            resizeFG = false;
        }else{
            if(!$('.menu').hasClass('open')) $('header nav').hide();
            resizeFG = true;
        }
    },
    preventAll: function(event){
        event.stopPropagation();
        event.preventDefault();
    },
    fbLogin: function(obj){
        if (obj !== void 0) obj.click((e) => { this.preventAll(e); });

        gaclick('login_fb');

        // 串接FB登入按鈕
        FB.login(
            function(response) {
                if(response.status === 'connected'){
                    FB.api(
                        '/me',
                        'GET', {
                            "fields": "id,name,email"
                        },
                        function (response) {
                            $.cookie('type', 'Facebook');
                            $.cookie('name', response.name);
                            $.cookie('email', response.email);
                            $.cookie('id', response.id);
                            $.cookie('fb_login', true);
                            fb_login = true;
                            (innerFG) ? $('.pop.login .close').click() : $('.pop .close').click();
                        }
                    );
                }else{
                    //alert('請登入FB/G+來進行投票，謝謝！');
                }
            },{ scope: 'email' }
        );
    },
    googleLogin: function(obj){
        gapi.load("auth2", () => {
            var auth2 = gapi.auth2.init({
                clientId: "704654834388-3cclus6faj1vg3p9lenfdrd8pkbtq2gt.apps.googleusercontent.com"
            });

            // 串接G+登入按鈕
            obj.on('click', (e) => {
                this.preventAll(e);

                gaclick('login_google');

                auth2.signIn().then(function(user){
                    var gProfile = user.getBasicProfile();
                    if(gProfile){
                        $.cookie('type', 'Google');
                        $.cookie('name', gProfile.getName());
                        $.cookie('email', gProfile.getEmail());
                        $.cookie('id', gProfile.getId());
                        $.cookie('gplus_login', true);
                        gplus_login = true;
                        (innerFG) ? $('.pop.login .close').click() : $('.pop .close').click();
                    }else{
                        //alert('請登入Facebook或Google+來進行投票，謝謝！ G+');
                    }
                });
            });
        });
    },
    shareFB: function(){
        var fb_url = (this.chkDevice()) ? 'http://m.facebook.com/sharer.php?u=' : 'http://www.facebook.com/sharer.php?u=';
        var fbBack_url = '?fb_back=1';
        var share_u;
        share_u = location.href + fbBack_url;
        window.open(fb_url + encodeURIComponent(share_u), 'sharer', 'toolbar=0,status=0,width=656,height=436');
    },
    shareGplus: function(){
        var gplus_url = 'https://plus.google.com/share?url=';
        var gplusBack_url = '?gplus_back=1';
        var share_u;
        share_u = location.href + gplusBack_url;
        window.open(gplus_url + encodeURIComponent(share_u), 'sharer', 'toolbar=0,status=0,width=656,height=436');
    },
    sendData: function(cb){
        if (cb === void 0) { cb = null; };
        if(menuCtrl.timesUp()){
            alert('此投票活動已結束，感謝您的熱情參與！\n\n活動將於106年9月4日(一)抽獎\n得獎通知將於106年9月8日(五)以E-MAIL寄發通知\n\n請您密切注意，謝謝。');
            return;
        }

        var pass = grecaptcha.getResponse();
        var read = $('.read #checkbox-1').prop('checked');
        var sendType, sendName, sendEmail, sendId, sendChoose, sendGoogle, data;
        if(pass.length === 0){
            alert('請使用google驗證!');
            return;
        }

        if(!read){
            alert('請閱讀並同意活動辦法及個人資料公開授權!');
            return;
        }

        gaclick('vote_ok');

        sendType = $.cookie('type');
        sendName = $.cookie('name');
        sendEmail = ($.cookie('email')) ? $.cookie('email') : '' ;
        sendId = $.cookie('id');
        sendChoose = $.cookie('choose1') + ',' + $.cookie('choose2') + ',' + $.cookie('choose3');

        data = {
            type: sendType,
            name: sendName,
            email: sendEmail,
            uid: sendId,
            type: sendType,
            choose: sendChoose,
            google: pass
        }

        $.ajax({
            method: "POST",
            url: '../api/vote',
            data: data,
            success: function(result){
                if(result.status == '200'){
                    $.removeCookie('choose1');
                    $.removeCookie('choose2');
                    $.removeCookie('choose3');
                }else if(result.status == '110'){
                    $('.final_check .beenVote h2').text('您今日已投過票囉！');
                }

                if (cb) cb();
            },
            error: function(result){
                alert('系統繁忙，請稍候再試，謝謝！');
            }
        });
    },
    chkDevice: function(tp){
        var chk_fg = false;
        if(isMobile.phone || isMobile.tablet || ($(window).width() <= 600 && tp === 1)){
            chk_fg = true;
        }
        return chk_fg;
    },
    chkWebview: function(){
        var userAgent = window.navigator.userAgent.toLowerCase();
        var standalone = window.navigator.standalone;
        var safari = /safari/.test(userAgent);
        var fbWebView = /fbid|fbios|fblc|fb_iab|fb4a|fbav/.test(userAgent);
        var lineWebView = /line/i.test(userAgent);
        var ios = /iphone|ipod|ipad/.test(userAgent);
        var uiwebview = false;

        if (ios) {
            if (!standalone && safari) {
                // iosType = 'ios browser';
            } else if (standalone && !safari) {
                // iosType = 'ios standalone';
            } else if (!standalone && !safari) {
                // iosType = 'ios uiwebview';
                uiwebview = true;
            }
        }

        return uiwebview || fbWebView || lineWebView;
    },
    chkIE8: function(){
        var userAgent = navigator.userAgent;
        var fIEVersion = parseFloat(RegExp["$1"]); 

        if(userAgent.indexOf('MSIE 6.0')!=-1){
            return "IE6";
        }else if(fIEVersion == 7){
            return "IE7";
        }else if(fIEVersion == 8){
            return "IE8";
        }else if(fIEVersion == 9){
            return "IE9";
        }else if(fIEVersion == 10){
            return "IE10";
        }else if(userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/)){ 
            return "IE11";
        }else{
            return "0"
        }
    },
    chkProtocol: function(){
        var myUrl = location.href;
        myUrl = (myUrl) ? myUrl.replace('http', 'https') : location.href;
        /* 2018-05-08 更新不是正式站不用導https */
        if(location.hostname == 'smileangel.skm.com.tw') location.href = myUrl;
    }
}

$(function(){
    menuCtrl.init();
});