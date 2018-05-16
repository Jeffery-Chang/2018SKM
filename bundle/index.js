"use strict";function _defineProperty(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}var fb_login=!!$.cookie("fb_login"),gplus_login=!!$.cookie("gplus_login"),innerFG=!1;!function(e){e.preload=function(){for(var o=[],n=arguments.length;n--;)o.push(e("<img />").attr("src",arguments[n]))}}(jQuery),function(){var e=$(".part1.earth .house_layer_1"),o=$(".part1.earth .house_layer_2"),n=$(".part1.earth .house_layer_3"),t=$(".part1.earth .land"),a=$(".part1 h1"),i=$(".part1 h2"),l=$(".part1 .pc_only, .part1 .m_only"),s=$(".part1 .btn"),r=$(".part1 .btn, .part1 .dropdown"),c=$(".part1 .planet.p_1"),d=$(".part1 .planet.p_2"),f=$(".part1 .planet.p_3"),p=$(".flyman"),u=$(".part1 .rocket"),h=$(".part1 .satellite"),m=$(".part2 .planetBox ul"),g=$(".part2 .slick"),v=$(".vote .location_name"),b=($(".part2.vote .vote_box"),"top"),k=!1,C=!1,_=0;({init:function(){var e=this;$.each(profile,function(e,o){$.preload(o.img1)}),e.updateData(),e.initSlick(),e.initRA(),$(".dropdown dt a").on("click",function(e){menuCtrl.preventAll(e),$(".dropdown dd ul").slideToggle("fast")}),$(".dropdown dd ul li").on("click",function(e){menuCtrl.preventAll(e);var o=$(this).find("a").text(),n=$(this).index();_=n,C=!0,$(".dropdown dt a").text(o),$(".dropdown dd ul").hide()}),s.click(function(o){menuCtrl.preventAll(o),menuCtrl.timeStart()?menuCtrl.timesUp()?alert("此投票活動已結束，感謝您的熱情參與！"):C?(e.outStage(),$(".part1 .btn .shape").toggleClass("shape_border")):alert("請先選擇分店！"):alert("現在投票還沒有開始喔！\n\n請於\n106年 8月  7日（一）11:00～\n106年 8月20日（日）23:59\n\n蒞臨本站一天一票，支持您心目中的候選人！")}),$(".pop .close, .store_list .close, .warn .close").on("click",function(e){menuCtrl.preventAll(e),k=!1;var o=$(this).parent("div");o.hasClass("login")&&gaclick("login_x"),o.hasClass("final_check")&&gaclick("vote_go_x"),$(this).parent("div").fadeOut("fast",function(){$(".store_list").css("z-index",501)}),innerFG?$(".pop_black").fadeOut("fast"):$(".black").fadeOut("fast"),innerFG=!1}),$(window).on("resize",function(){e.indexResize()}).on("load",function(){if($("header, .wrap").removeClass("opacity"),e.inStage(),e.indexResize(),!menuCtrl.chkDevice()){var o;TweenMax.from(u,2,(o={top:"30%",left:"50%",opacity:0,delay:.35,transform:"scale(.5) rotate(-90deg)"},_defineProperty(o,"delay",.75),_defineProperty(o,"ease",Power2.easeOut),_defineProperty(o,"onComplete",function(){TweenMax.set(u,{clearProps:"all"})}),o))}$(".loading").delay(300).fadeOut("fast")}),gapage("index")},indexResize:function(){$(window).width()>600?p.addClass("move"):(b="mobile",p.removeClass("move"))},updateData:function(){$.get("../api/angel_list",function(e){$.each(e,function(e,o){profile[e].vote_cnt=o.vote_cnt})})},outStage:function(){gaclick("index_vote");var s=this;TweenMax.staggerTo([e,o,n],.5,{scaleY:0,y:200,ease:Back.easeIn},.1),TweenMax.to(t,.5,{y:200,ease:Back.easeIn,delay:.3}),TweenMax.staggerTo([a,i,l],.5,{opacity:0,y:-100},.2),TweenMax.to(c,.5,{x:-500,ease:Back.easeIn}),TweenMax.staggerTo([d,f],.5,{x:500,ease:Back.easeIn},.1),TweenMax.to(r,.5,{opacity:0}),TweenMax.to(u,1,{top:"-20%",left:"5%",transform:"scale(.1)",ease:Back.easeIn}),TweenMax.to(h,1,{top:"-10%",left:"50%",transform:"scale(.1)",ease:Back.easeIn}),TweenMax.to($(".part1"),.25,{display:"none",opacity:"0",delay:1,onComplete:function(){s.initPart2()}})},inStage:function(){TweenMax.staggerFrom([e,o,n],.5,{scaleY:0,y:200,ease:Back.easeOut,delay:.75},.1),TweenMax.from(t,.5,{y:200,ease:Back.easeOut,delay:.75}),TweenMax.staggerFrom([a,i,l],.5,{opacity:0,y:-100,delay:.75},.2),TweenMax.from(r,.5,{opacity:0,delay:1.25}),TweenMax.from(c,.5,{x:-500,ease:Back.easeOut,delay:.75,onComplete:function(){TweenMax.set(c,{clearProps:"all"})}}),TweenMax.staggerFrom([d,f],.5,{x:500,ease:Back.easeOut,delay:.75,onComplete:function(){TweenMax.set([d,f],{clearProps:"all"})}},.1)},initSlick:function(){g.slick({centerMode:!1,centerPadding:"5px",slidesToShow:3,responsive:[{breakpoint:600,settings:{initialSlide:1,arrows:!1,infinite:!1,centerMode:!0,centerPadding:"33%",slidesToShow:1}}]})},initRA:function(){var e=this;m.roundabout({duration:400,startingChild:0,responsive:!0,minOpacity:1,maxOpacity:1,shape:"rollerCoaster",clickToFocus:!1}).bind("animationStart",function(){var e=m.roundabout("getChildInFocus");if("down"==b){var o=e+1;o>=15&&(o=0),TweenMax.to($(".roundabout-moveable-item").eq(o),.5,{scale:1,filter:"brightness(100%)"}),TweenMax.to($(".roundabout-in-focus"),.5,{scale:.5,filter:"brightness(30%)"})}else if("top"==b){var n=e-1;n<=-1&&(n=14),TweenMax.to($(".roundabout-moveable-item").eq(n),.5,{scale:1,filter:"brightness(100%)"}),TweenMax.to($(".roundabout-in-focus"),.5,{scale:.5,filter:"brightness(30%)"})}TweenMax.to([g,v],.3,{opacity:0,onComplete:function(){g.slick("slickGoTo",1,!0)}})}).bind("animationEnd",function(){var o=m.roundabout("getChildInFocus");$("aside li").find("a").removeClass("focus"),$("aside li").find("a").eq(o).addClass("focus");var n=o+1;e.setProfile(o),gaclick("shop_"+n)}),TweenMax.to($(".roundabout-moveable-item"),.5,{scale:.5,filter:"brightness(30%)"}),TweenMax.to($(".roundabout-in-focus"),.3,{scale:1,filter:"brightness(100%)",onComplete:function(){}})},initPart2:function(){var e=this;e.winWheel(),e.checkChoose(),e.setProfile(_),$.each(profile,function(e,o){$.preload(o.img2,o.img3,o.img4)}),$("aside.part2").removeClass("none"),$("aside li").on("click",function(o){menuCtrl.preventAll(o);var n=$(this).index();m.roundabout("getChildInFocus");$("aside li").find("a").removeClass("focus"),$(this).find("a").addClass("focus"),TweenMax.to($(".roundabout-moveable-item"),.5,{scale:.5,filter:"brightness(30%)",delay:.1}),TweenMax.to($(".roundabout-moveable-item").eq(n),.5,{scale:1,filter:"brightness(100%)",delay:.1}),m.roundabout("animateToChild",n,function(){e.setProfile(n)})}),$(".progress ul li").on("click",function(e){menuCtrl.preventAll(e);var o=$(this).index();trackWaitJump("","general.html?tag="+o)}),$(".store_list p a:eq(0)").on("click",function(o){menuCtrl.preventAll(o),b="top",e.movePlanet(b)}),$(".store_list p a:eq(1)").on("click",function(o){menuCtrl.preventAll(o),b="down",e.movePlanet(b)}),$(".store_list .location").on("click",function(e){menuCtrl.preventAll(e),$(".store_list").css("z-index",710),$(".store_list .name").fadeIn("fast")}),$(".store_list .name li").on("click",function(e){menuCtrl.preventAll(e);var o=$(this).index();$(".store_list").css("z-index",501),$(".store_list .name").fadeOut("fast",function(){TweenMax.to($(".roundabout-moveable-item"),.5,{scale:.5,filter:"brightness(30%)",delay:.1}),TweenMax.to($(".roundabout-moveable-item").eq(o),.5,{scale:1,filter:"brightness(100%)",delay:.1}),m.roundabout("animateToChild",o)})}),g.find(".photo").on("click",function(o){menuCtrl.preventAll(o),k=!0,e.setPersonal($(this).data("index"),$(this).data("type"))}),g.find(".btnVote").on("click",function(o){menuCtrl.preventAll(o);var n=$(this).data("index"),t=$(this).data("type");if(menuCtrl.timesUp())alert("此投票活動已結束，感謝您的熱情參與！");else{if(!fb_login&&!gplus_login)return k=!0,$(".pop.login, .black").fadeIn("fast"),void e.openLogin();$.each(profile,function(e,o){o.chooseFG=!1}),e.checkChoose(n,t)}}),$(".progress .finish").on("click",function(e){if(menuCtrl.preventAll(e),!$(this).hasClass("no"))if(k=!0,menuCtrl.timesUp())alert("此投票活動已結束，感謝您的熱情參與！");else{var o=$(".finalCheck li"),n=[$.cookie("choose1"),$.cookie("choose2"),$.cookie("choose3")];$.each(n,function(e,t){o.eq(e).find("img").attr("src",profile[n[e]].img1),o.eq(e).find("h1").text(profile[n[e]].name).append("<span>"+profile[n[e]].store_nm+"</span>"),e===n.length-1&&$(".pop.final_check, .black").fadeIn("fast")}),gaclick("vote_go")}}),$(".finalCheck .votebtn").on("click",function(e){menuCtrl.preventAll(e),menuCtrl.sendData(function(){$(".final_check .finalCheck, .final_check .close").fadeOut("fast",function(){$(".final_check .beenVote").fadeIn("fast")})})}),$(".final_check .beenVote .votebtn").on("click",function(e){menuCtrl.preventAll(e),trackWaitJump("ok_goback","tvc.html")}),TweenMax.to($(".roundabout-moveable-item"),.5,{scale:.5,filter:"brightness(30%)",delay:.1}),TweenMax.to($(".roundabout-moveable-item").eq(_),.5,{scale:1,filter:"brightness(100%)",delay:.1}),m.roundabout("animateToChild",_),TweenMax.to($(".part2"),.5,{opacity:1,delay:.5,onComplete:function(){}})},setProfile:function(e){var o=3*e,n=[$(".vote .vote_box.first"),$(".vote .vote_box.second"),$(".vote .vote_box.third")];v.find(".words").text(profile[o].store_nm),$.each(n,function(e,t){t.find("h2").text(profile[o+e].name),t.find("img").attr("src",profile[o+e].img1),t.find(".vote_cnt").text(profile[o+e].vote_cnt),t.find(".photo").data("index",profile[o+e].index).data("type",profile[o+e].store_tp),t.find(".btnVote").data("index",profile[o+e].index).data("type",profile[o+e].store_tp),1==profile[o+e].chooseFG?(t.find(".btnVote").addClass("choose"),t.find(".btnVote").find("span").text("已選取"),t.find(".btnVote").find("path").removeClass("shape").removeClass("shape_border")):(t.find(".btnVote").removeClass("choose"),t.find(".btnVote").find("span").html('<b class="icon-love"></b>投票'),t.find(".btnVote").find("path").addClass("shape").addClass("shape_border")),e===n.length-1&&TweenMax.to([g,v],.3,{opacity:1,delay:.35})})},setPersonal:function(e,o){var n=this,t=$(".personal"),a="",i=profile[e].name,l=-1!==location.pathname.split("?")[0].indexOf("html")?location.pathname.split("?")[0]:"/index.html",s="https://"+location.hostname+l+"?name="+i;"A"===o?a="自營組":"B"===o?a="專櫃組":"C"===o&&(a="警衛清潔組"),""===profile[e].img4?$(".personal .photo_block li:eq(3)").addClass("none").hide():$(".personal .photo_block li:eq(3)").removeClass("none").show(),$(".personal .photo_block img").attr("src",profile[e].img2),$(".personal .photo_block li").find("a").removeClass("focus").eq(0).addClass("focus"),$(".personal .photo_block li").off("click"),$(".personal .votebtn").off("click"),t.find("h1").text(profile[e].name).append("<span>"+profile[e].store_nm+" / "+profile[e].career_nm+"</span>"),t.find("h2").text(profile[e].service_words),t.find(".tag").text(a),t.find(".vote_cnt").text(profile[e].vote_cnt),t.find(".votebtn").data("index",profile[e].index).data("type",profile[e].store_tp),t.find(".fb_comment").html('<fb:comments href="'+s+'" num_posts="5" width="100%"></fb:comments>'),FB.XFBML.parse(t.find(".fb_comment")[0]),$(".personal .photo_block li").on("click",function(o){if(menuCtrl.preventAll(o),!$(this).find("a").hasClass("focus")){var n=$(this).index()+2;$(".personal .photo_block li").find("a").removeClass("focus"),$(this).find("a").addClass("focus"),n>$(".personal .photo_block li:not(.none)").size()&&(n=1),TweenMax.to($(".personal .photo_block img"),.3,{opacity:0,onComplete:function(){$(".personal .photo_block img").attr("src",profile[e]["img"+n]),TweenMax.to($(".personal .photo_block img"),.3,{opacity:1})}})}}),$(".personal .votebtn").on("click",function(e){menuCtrl.preventAll(e);var o=$(this).data("index"),t=$(this).data("type");if(menuCtrl.timesUp())alert("此投票活動已結束，感謝您的熱情參與！");else{if(!fb_login&&!gplus_login)return k=!0,innerFG=!0,$(".pop.login, .pop_black").fadeIn("fast"),void n.openLogin();n.checkChoose(o,t),$(".pop.personal, .black").delay(100).fadeOut("fast")}}),$(".pop.personal, .black").fadeIn("fast")},openLogin:function(){$(".login_fb").on("click",function(e){menuCtrl.preventAll(e),menuCtrl.fbLogin()}),menuCtrl.googleLogin($(".login_google"))},checkChoose:function(e,o){var n=this;if(menuCtrl.timesUp())alert("此投票活動已結束，感謝您的熱情參與！");else{"A"===o?$.cookie("choose1",e):"B"===o?$.cookie("choose2",e):"C"===o&&$.cookie("choose3",e);var t=$.cookie("choose1"),a=$.cookie("choose2"),i=$.cookie("choose3"),l=[t,a,i],s=e?parseInt(e):0,r=parseInt(Math.floor(s/3));$.each(l,function(e,o){o&&(profile[o].chooseFG=!0),e==l.length-1&&n.setProfile(r)}),t?$(".progress .icon-checkmark:eq(0)").removeClass("unfinish"):$(".progress .icon-checkmark:eq(0)").addClass("unfinish"),a?$(".progress .icon-checkmark:eq(1)").removeClass("unfinish"):$(".progress .icon-checkmark:eq(1)").addClass("unfinish"),i?$(".progress .icon-checkmark:eq(2)").removeClass("unfinish"):$(".progress .icon-checkmark:eq(2)").addClass("unfinish"),t&&a&&i&&$(".progress .finish").removeClass("no")}},winWheel:function(){function e(e){o&&window.clearTimeout(o),k||resizeFG||(o=window.setTimeout(function(){e=e||window.event,b=e.wheelDelta<=0||e.detail>0?"down":"top",n.movePlanet(b)},250))}var o,n=this;"onmousewheel"in window?window.onmousewheel=e:"onmousewheel"in document?document.onmousewheel=e:"addEventListener"in window&&(window.addEventListener("mousewheel",e,!1),window.addEventListener("DOMMouseScroll",e,!1))},movePlanet:function(e){var o=m.roundabout("getChildInFocus");(o="top"==e?o-1:o+1)>=15&&(o=0),o<=-1&&(o=14),m.roundabout("animateToChild",o)}}).init()}();