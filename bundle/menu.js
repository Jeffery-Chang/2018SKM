"use strict";!function(e,o,t){var n,i=e.getElementsByTagName(o)[0];e.getElementById(t)||((n=e.createElement(o)).id=t,n.src="//connect.facebook.net/zh_TW/all.js#xfbml=1",i.parentNode.insertBefore(n,i),window.fbAsyncInit=function(){FB.init({appId:"smileangel.skm.com.tw"==location.hostname?"1423502524421148":"142220039665931",xfbml:!0,version:"smileangel.skm.com.tw"==location.hostname?"v2.12":"v2.9"})})}(document,"script","facebook-jssdk");var resizeFG=!1,menuCtrl={init:function(){var e=this;"https:"!=location.protocol&&this.chkProtocol(),this.chkIE8()<=8?location.href="ie8/":(this.timesUp()&&$("header nav li").eq(4).removeClass("none"),this.timeStart()&&this.menuSet(),this.resize(),this.starSet(),menuCtrl.chkWebview()&&$(".warn").show(),$(window).on("resize",function(){e.resize(),e.starSet()}))},timeStart:function(){var e="smileangel.skm.com.tw"==location.hostname?Date.parse("2018/06/05 11:00:00").valueOf():Date.parse("2018/04/30 00:00:00").valueOf();return Date.parse(new Date).valueOf()>=e},timesUp:function(){var e=Date.parse("2018/06/15 00:00:00").valueOf();return Date.parse(new Date).valueOf()>=e},menuSet:function(){var e=this;$(".menu").on("click",function(o){e.preventAll(o),$(this).toggleClass("open"),$("header nav").fadeToggle("fast")}),$("header p").css("cursor","pointer").on("click",function(o){e.preventAll(o),gaclick("menu_logo"),window.open("http://www.skm.com.tw/","_blank")}),$("header nav li").on("click",function(o){switch(e.preventAll(o),$(this).index()){case 0:trackWaitJump("menu_index","index.html");break;case 1:trackWaitJump("menu_rule","activity.html");break;case 2:trackWaitJump("menu_votelist","general.html");break;case 3:trackWaitJump("","tvc.html");break;case 4:trackWaitJump("","award.html");break;case 5:gaclick("menu_fbshare"),e.shareFB();break;case 6:gaclick("menu_gshare"),e.shareGplus()}})},starSet:function(){var e=["one","two","three","four"],o=$(".main .meteor span");$(window).width()>600?$.each(o,function(o,t){$(t).addClass(e[o])}):$.each(o,function(o,t){$(t).removeClass(e[o])})},resize:function(){$(window).width()>600?($("header nav").show(),$(".menu").removeClass("open"),resizeFG=!1):($(".menu").hasClass("open")||$("header nav").hide(),resizeFG=!0)},preventAll:function(e){e.stopPropagation(),e.preventDefault()},fbLogin:function(e){var o=this;void 0!==e&&e.click(function(e){o.preventAll(e)}),gaclick("login_fb"),FB.login(function(e){"connected"===e.status&&FB.api("/me","GET",{fields:"id,name,email"},function(e){$.cookie("type","Facebook"),$.cookie("name",e.name),$.cookie("email",e.email),$.cookie("id",e.id),$.cookie("fb_login",!0),fb_login=!0,innerFG?$(".pop.login .close").click():$(".pop .close").click()})},{scope:"email"})},googleLogin:function(e){var o=this;gapi.load("auth2",function(){var t=gapi.auth2.init({clientId:"704654834388-3cclus6faj1vg3p9lenfdrd8pkbtq2gt.apps.googleusercontent.com"});e.on("click",function(e){o.preventAll(e),gaclick("login_google"),t.signIn().then(function(e){var o=e.getBasicProfile();o&&($.cookie("type","Google"),$.cookie("name",o.getName()),$.cookie("email",o.getEmail()),$.cookie("id",o.getId()),$.cookie("gplus_login",!0),gplus_login=!0,innerFG?$(".pop.login .close").click():$(".pop .close").click())})})})},shareFB:function(){var e,o=this.chkDevice()?"http://m.facebook.com/sharer.php?u=":"http://www.facebook.com/sharer.php?u=";e=location.href+"?fb_back=1",window.open(o+encodeURIComponent(e),"sharer","toolbar=0,status=0,width=656,height=436")},shareGplus:function(){var e;e=location.href+"?gplus_back=1",window.open("https://plus.google.com/share?url="+encodeURIComponent(e),"sharer","toolbar=0,status=0,width=656,height=436")},sendData:function(e){if(void 0===e&&(e=null),menuCtrl.timesUp())alert("此投票活動已結束，感謝您的熱情參與！\n\n活動將於106年9月4日(一)抽獎\n得獎通知將於106年9月8日(五)以E-MAIL寄發通知\n\n請您密切注意，謝謝。");else{var o,t,n,i,a,c,l=grecaptcha.getResponse(),r=$(".read #checkbox-1").prop("checked");0!==l.length?r?(gaclick("vote_ok"),o=$.cookie("type"),t=$.cookie("name"),n=$.cookie("email")?$.cookie("email"):"",i=$.cookie("id"),a=$.cookie("choose1")+","+$.cookie("choose2")+","+$.cookie("choose3"),"Facebook"!=o||""!=n?(c={type:o,name:t,email:n,uid:i,choose:a,google:l},$.ajax({method:"POST",url:"../api/vote",data:c,success:function(o){"200"==o.status?($(".final_check .beenVote h2").text("您已完成投票!"),$.removeCookie("choose1"),$.removeCookie("choose2"),$.removeCookie("choose3")):"110"==o.status&&$(".final_check .beenVote h2").text("您今日已投過票囉！"),e&&e()},error:function(e){alert("系統繁忙，請稍候再試，謝謝！")}})):alert("注意！\n您的Facebook尚未綁定E-mail信箱，因本活動中獎聯繫是透過E-mail通知，\n未提供E-mail帳號將影響您的獲獎權益！\n建議您可以先將Facebook帳號綁定Email，或改登入Google+再參與投票唷！")):alert("請閱讀並同意活動辦法及個人資料公開授權!"):alert("請使用google驗證!")}},chkDevice:function(e){var o=!1;return(isMobile.phone||isMobile.tablet||$(window).width()<=600&&1===e)&&(o=!0),o},chkWebview:function(){var e=window.navigator.userAgent.toLowerCase(),o=window.navigator.standalone,t=/safari/.test(e),n=/fbid|fbios|fblc|fb_iab|fb4a|fbav/.test(e),i=/line/i.test(e),a=!1;return/iphone|ipod|ipad/.test(e)&&(!o&&t||o&&!t||o||t||(a=!0)),a||n||i},chkIE8:function(){var e=navigator.userAgent,o=e.indexOf("compatible")>-1&&e.indexOf("MSIE")>-1,t=e.indexOf("Edge")>-1&&!o,n=e.indexOf("Trident")>-1&&e.indexOf("rv:11.0")>-1;if(o){new RegExp("MSIE (\\d+\\.\\d+);").test(e);var i=parseFloat(RegExp.$1);return 7==i?7:8==i?8:9==i?9:10==i?10:6}return t?12:n?11:13},chkProtocol:function(){var e=location.href;e=e?e.replace("http","https"):location.href,"smileangel.skm.com.tw"==location.hostname&&(location.href=e)}};$(function(){menuCtrl.init()});