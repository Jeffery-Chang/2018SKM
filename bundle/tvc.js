"use strict";$(function(){new Vue({el:".wrap",data:{posts:[{store_nm:"台北南西店",store_img:"img/tvc_200x150.jpg",store_type:"N",url:"https://www.facebook.com/WebGene/posts/10156350727984275",count:0,showFG:!0},{store_nm:"台北站前店",store_img:"img/tvc_200x150.jpg",store_type:"N",url:"https://www.facebook.com/WebGene/posts/10156350727984275",count:0,showFG:!0},{store_nm:"台北信義新天地A4",store_img:"img/tvc_200x150.jpg",store_type:"N",url:"https://www.facebook.com/WebGene/posts/10156350727984275",count:0,showFG:!0},{store_nm:"台北信義新天地A8",store_img:"img/tvc_200x150.jpg",store_type:"N",url:"https://www.facebook.com/WebGene/posts/10156350727984275",count:0,showFG:!0},{store_nm:"台北信義新天地A9",store_img:"img/tvc_200x150.jpg",store_type:"N",url:"https://www.facebook.com/WebGene/posts/10156350727984275",count:0,showFG:!0},{store_nm:"台北信義新天地A11",store_img:"img/tvc_200x150.jpg",store_type:"N",url:"https://www.facebook.com/WebGene/posts/10156350727984275",count:0,showFG:!0},{store_nm:"台北天母店",store_img:"img/tvc_200x150.jpg",store_type:"N",url:"https://www.facebook.com/WebGene/posts/10156350727984275",count:0,showFG:!0},{store_nm:"桃園大有店",store_img:"img/tvc_200x150.jpg",store_type:"N",url:"https://www.facebook.com/WebGene/posts/10156350727984275",count:0,showFG:!0},{store_nm:"桃園站前店",store_img:"img/tvc_200x150.jpg",store_type:"N",url:"https://www.facebook.com/WebGene/posts/10156350727984275",count:0,showFG:!0},{store_nm:"台中中港店",store_img:"img/tvc_200x150.jpg",store_type:"C",url:"https://www.facebook.com/WebGene/posts/10156350727984275",count:0,showFG:!0},{store_nm:"嘉義垂楊店",store_img:"img/tvc_200x150.jpg",store_type:"C",url:"https://www.facebook.com/WebGene/posts/10156350727984275",count:0,showFG:!0},{store_nm:"台南中山店",store_img:"img/tvc_200x150.jpg",store_type:"S",url:"https://www.facebook.com/WebGene/posts/10156350727984275",count:0,showFG:!0},{store_nm:"台南新天地",store_img:"img/tvc_200x150.jpg",store_type:"S",url:"https://www.facebook.com/WebGene/posts/10156350727984275",count:0,showFG:!0},{store_nm:"高雄三多店",store_img:"img/tvc_200x150.jpg",store_type:"S",url:"https://www.facebook.com/WebGene/posts/10156350727984275",count:0,showFG:!0},{store_nm:"高雄左營店",store_img:"img/tvc_200x150.jpg",store_type:"S",url:"https://www.facebook.com/WebGene/posts/10156350727984275",count:0,showFG:!0}]},mounted:function(){$(window).on("load",function(){$("header, .wrap").removeClass("opacity"),$(".loading").delay(500).fadeOut("fast",function(){})}),$(".progress li").on("click",function(t){menuCtrl.preventAll(t);var o=$(this).index();$("html,body").stop().animate({scrollTop:$(".group:eq("+o+")").offset().top-75},500)}),$(".warn .close").on("click",function(t){menuCtrl.preventAll(t),$(this).parent("div").fadeOut("fast")}),gapage("videolist")},methods:{login:function(t){var o=this,e=$(t.currentTarget).data("href");FB.getLoginStatus(function(t){console.log(t.status),"connected"===t.status?(o.getPageID(),window.open(e,"_blank")):FB.login(function(t){console.log(t),o.getPageID(),window.open(e,"_blank")},{scope:"public_profile,email"})})},getPageID:function(){var t=this;$.each(this.posts,function(o,e){var s="",n="",c=e.url.split("/");n=c[0]+"/"+c[1]+"/"+c[2]+"/"+c[3]+"/",FB.api("/"+n,"GET",{},function(n){s=n.id,console.log(n),t.getShareCnt(s,e.url,o)})})},getShareCnt:function(t,o,e){var s=this,n=t+"_"+this.getURL_ID(o);FB.api("/"+n,"GET",{fields:"shares"},function(t){console.log(t);var o=void 0!=t.shares?t.shares.count:0;s.posts[e].count=o,s.posts[e].showFG=!0})},getURL_ID:function(t){var o=new RegExp(".*?(\\d+)",["i"]).exec(t);if(null!=o)return o[1]}}})});