"use strict";!function(e){e.getUrlParam=function(e){var o=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),t=window.location.search.substr(1).match(o);return null==t?null:unescape(t[2])}}(jQuery),$(function(){new Vue({el:".wrap",data:{items:profile,sortTP:!0,scaleFG:!1,fb_login:!!$.cookie("fb_login"),gplus_login:!!$.cookie("gplus_login"),closeFG:!1,innerFG:!1,sortFG:!1,loginFG:!1,moreFG:!1,voteFG:!1},beforeMount:function(){var e=this;$.get("../api/angel_list",function(o){$.each(o,function(o,t){e.items[o].vote_cnt=t.vote_cnt})})},mounted:function(){var e=this,o=$.getUrlParam("tag");$(".progress li").on("click",function(e){menuCtrl.preventAll(e);var o=$(this).index()-1;$("html,body").stop().animate({scrollTop:$(".group:eq("+o+")").offset().top-75},500)}),$(".final_check .beenVote .votebtn").on("click",function(e){menuCtrl.preventAll(e),trackWaitJump("ok_goback","tvc.html")}),$(".warn .close").on("click",function(e){menuCtrl.preventAll(e),$(this).parent("div").fadeOut("fast")}),$(window).on("load",function(){$("header, .wrap").removeClass("opacity"),$(".loading").delay(1e3).fadeOut("fast",function(){null!==o&&$("html,body").delay(500).stop().animate({scrollTop:$(".group:eq("+o+")").offset().top-75},500)}),gapi.load("auth2",function(){var o=gapi.auth2.init({clientId:"704654834388-3cclus6faj1vg3p9lenfdrd8pkbtq2gt.apps.googleusercontent.com"});$(".pop.login .login_google").on("click",function(t){menuCtrl.preventAll(t),gaclick("login_google"),o.signIn().then(function(o){var t=o.getBasicProfile();t&&($.cookie("type","Google"),$.cookie("name",t.getName()),$.cookie("email",t.getEmail()),$.cookie("id",t.getId()),$.cookie("gplus_login",!0),e.gplus_login=!0,e.closeAll())})})})}),this.chkChoose(),gapage("votelist")},updated:function(){var e=this;e.scaleFG&&(e.scaleFG=!1,TweenMax.to($(".general .voteRepeat"),.3,{scale:0,onComplete:function(){TweenMax.to($(".general .voteRepeat"),.3,{scale:1})}}))},methods:{fbLogin:function(e){var o=this;menuCtrl.preventAll(e),gaclick("login_fb"),FB.login(function(t){"connected"===t.status&&FB.api("/me","GET",{fields:"id,name,email"},function(t){$.cookie("type","Facebook"),$.cookie("name",t.name),$.cookie("email",t.email),$.cookie("id",t.id),$.cookie("fb_login",!0),o.fb_login=!0,o.closeAll(e)})},{scope:"email"})},openSort:function(e){menuCtrl.preventAll(e),this.sortFG=!this.sortFG},sortData:function(e){menuCtrl.preventAll(e);var o=this,t=e.target.htmlFor,n=o.items,i=[],s=o.sortTP;if(n.forEach(function(e,o){i.push(e)}),"checkbox-2"===t){if(this.sortTP=!0,s===o.sortTP)return;i.sort(function(e,o){return e.store_no>o.store_no?1:-1})}else{if(this.sortTP=!1,s===o.sortTP)return;i.sort(function(e,o){return e.vote_cnt<o.vote_cnt?1:-1})}o.scaleFG=!0,o.items=i},seeMore:function(e){menuCtrl.preventAll(e);var o=this,t=$(".personal"),n="",i=$(e.target.offsetParent).attr("index"),s=profile[i].name,l=profile[i].store_tp,c="https://"+location.hostname+location.pathname.split("?")[0].replace("general","index")+"?name="+s;"A"===l?n="自營組":"B"===l?n="專櫃組":"C"===l&&(n="警衛清潔組"),""===profile[i].img4?$(".personal .photo_block li:eq(3)").hide():$(".personal .photo_block li:eq(3)").show(),$(".personal .photo_block img").attr("src","img/store/"+profile[i].store_no+"_"+profile[i].store_tp+"_02.jpg"),$(".personal .photo_block li").find("a").removeClass("focus").eq(0).addClass("focus"),$(".personal .photo_block li").off("click"),$(".personal .votebtn").off("click"),t.find("h1").text(profile[i].name).append("<span>"+profile[i].store_nm+" / "+profile[i].career_nm+"</span>"),t.find("h2").text(profile[i].service_words),t.find(".tag").text(n),t.find(".vote_cnt").text(profile[i].vote_cnt),t.find(".votebtn").data("index",profile[i].index).data("type",profile[i].store_tp),t.find(".fb_comment").html('<fb:comments href="'+c+'" num_posts="5" width="100%"></fb:comments>'),FB.XFBML.parse(t.find(".fb_comment")[0]),$(".personal .photo_block li").on("click",function(e){if(menuCtrl.preventAll(e),!$(this).find("a").hasClass("focus")){var o=$(this).index()+2;$(".personal .photo_block li").find("a").removeClass("focus"),$(this).find("a").addClass("focus"),o>$(".personal .photo_block li:visible").size()&&(o=1),TweenMax.to($(".personal .photo_block img"),.3,{opacity:0,onComplete:function(){$(".personal .photo_block img").attr("src","img/store/"+profile[i].store_no+"_"+profile[i].store_tp+"_0"+o+".jpg"),TweenMax.to($(".personal .photo_block img"),.3,{opacity:1})}})}}),$(".personal .votebtn").on("click",function(t){menuCtrl.preventAll(t),o.getVote(e,!0)}),o.moreFG=!0,o.closeFG=!0},getVote:function(e,o){if(menuCtrl.preventAll(e),menuCtrl.timesUp())alert("此投票活動已結束，感謝您的熱情參與！");else{if(!this.fb_login&&!this.gplus_login)return o&&(this.innerFG=!0),void(this.loginFG=this.closeFG=!0);$.each(this.items,function(e,o){o.chooseFG=!1});var t=$(e.target).parents(".btnVote").attr("index");this.chkChoose(t)}},chkChoose:function(e){var o=this;if(menuCtrl.timesUp())alert("此投票活動已結束，感謝您的熱情參與！");else{var t=void 0!==e?profile[e].store_tp:"";"A"===t?$.cookie("choose1",e):"B"===t?$.cookie("choose2",e):"C"===t&&$.cookie("choose3",e);var n=$.cookie("choose1"),i=$.cookie("choose2"),s=$.cookie("choose3"),l=[n,i,s];$.each(l,function(e,t){$.each(o.items,function(e,o){o.index==t&&(o.chooseFG=!0)})}),n?$(".progress .icon-checkmark:eq(0)").removeClass("unfinish"):$(".progress .icon-checkmark:eq(0)").addClass("unfinish"),i?$(".progress .icon-checkmark:eq(1)").removeClass("unfinish"):$(".progress .icon-checkmark:eq(1)").addClass("unfinish"),s?$(".progress .icon-checkmark:eq(2)").removeClass("unfinish"):$(".progress .icon-checkmark:eq(2)").addClass("unfinish"),this.closeFG=this.sortFG=this.loginFG=this.moreFG=this.voteFG=!1,n&&i&&s&&$(".progress .finish").removeClass("no")}},confirmChoose:function(e){menuCtrl.preventAll(e);var o=this;if($.cookie("choose1")&&$.cookie("choose2")&&$.cookie("choose3"))if(menuCtrl.timesUp())alert("此投票活動已結束，感謝您的熱情參與！");else{var t=$(".finalCheck li"),n=[$.cookie("choose1"),$.cookie("choose2"),$.cookie("choose3")];$.each(n,function(e,i){t.eq(e).find("img").attr("src",profile[n[e]].img1),t.eq(e).find("h1").text(profile[n[e]].name).append("<span>"+profile[n[e]].store_nm+"</span>"),e===n.length-1&&(o.voteFG=o.closeFG=!0)}),gaclick("vote_go")}},finalCheck:function(e){menuCtrl.preventAll(e),menuCtrl.sendData(function(){$(".final_check .finalCheck, .final_check .close").fadeOut("fast",function(){$(".final_check .beenVote").fadeIn("fast")})})},closeAll:function(e,o){e&&menuCtrl.preventAll(e),this.innerFG?this.innerFG=this.loginFG=!1:(o&&gaclick(o),this.closeFG=this.sortFG=this.loginFG=this.moreFG=this.voteFG=!1)}}})});