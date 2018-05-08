$(function(){
    var tvcCtrl = new Vue({
        el: '.wrap',
        data:{
            posts: [
                {
                    store_nm: '台北南西店',
                    store_img: 'img/tvc_200x150.jpg',
                    store_type: 'N',
                    url: 'https://www.facebook.com/WebGene/posts/10156350727984275',
                    count: 0,
                    showFG: true
                },
                {
                    store_nm: '台北站前店',
                    store_img: 'img/tvc_200x150.jpg',
                    store_type: 'N',
                    url: 'https://www.facebook.com/WebGene/posts/10156350727984275',
                    count: 0,
                    showFG: true
                },
                {
                    store_nm: '台北信義新天地A4',
                    store_img: 'img/tvc_200x150.jpg',
                    store_type: 'N',
                    url: 'https://www.facebook.com/WebGene/posts/10156350727984275',
                    count: 0,
                    showFG: true
                },
                {
                    store_nm: '台北信義新天地A8',
                    store_img: 'img/tvc_200x150.jpg',
                    store_type: 'N',
                    url: 'https://www.facebook.com/WebGene/posts/10156350727984275',
                    count: 0,
                    showFG: true
                },
                {
                    store_nm: '台北信義新天地A9',
                    store_img: 'img/tvc_200x150.jpg',
                    store_type: 'N',
                    url: 'https://www.facebook.com/WebGene/posts/10156350727984275',
                    count: 0,
                    showFG: true
                },
                {
                    store_nm: '台北信義新天地A11',
                    store_img: 'img/tvc_200x150.jpg',
                    store_type: 'N',
                    url: 'https://www.facebook.com/WebGene/posts/10156350727984275',
                    count: 0,
                    showFG: true
                },
                {
                    store_nm: '台北天母店',
                    store_img: 'img/tvc_200x150.jpg',
                    store_type: 'N',
                    url: 'https://www.facebook.com/WebGene/posts/10156350727984275',
                    count: 0,
                    showFG: true
                },
                {
                    store_nm: '桃園大有店',
                    store_img: 'img/tvc_200x150.jpg',
                    store_type: 'N',
                    url: 'https://www.facebook.com/WebGene/posts/10156350727984275',
                    count: 0,
                    showFG: true
                },
                {
                    store_nm: '桃園站前店',
                    store_img: 'img/tvc_200x150.jpg',
                    store_type: 'N',
                    url: 'https://www.facebook.com/WebGene/posts/10156350727984275',
                    count: 0,
                    showFG: true
                },
                {
                    store_nm: '台中中港店',
                    store_img: 'img/tvc_200x150.jpg',
                    store_type: 'C',
                    url: 'https://www.facebook.com/WebGene/posts/10156350727984275',
                    count: 0,
                    showFG: true
                },
                {
                    store_nm: '嘉義垂楊店',
                    store_img: 'img/tvc_200x150.jpg',
                    store_type: 'C',
                    url: 'https://www.facebook.com/WebGene/posts/10156350727984275',
                    count: 0,
                    showFG: true
                },
                {
                    store_nm: '台南中山店',
                    store_img: 'img/tvc_200x150.jpg',
                    store_type: 'S',
                    url: 'https://www.facebook.com/WebGene/posts/10156350727984275',
                    count: 0,
                    showFG: true
                },
                {
                    store_nm: '台南新天地',
                    store_img: 'img/tvc_200x150.jpg',
                    store_type: 'S',
                    url: 'https://www.facebook.com/WebGene/posts/10156350727984275',
                    count: 0,
                    showFG: true
                },
                {
                    store_nm: '高雄三多店',
                    store_img: 'img/tvc_200x150.jpg',
                    store_type: 'S',
                    url: 'https://www.facebook.com/WebGene/posts/10156350727984275',
                    count: 0,
                    showFG: true
                },
                {
                    store_nm: '高雄左營店',
                    store_img: 'img/tvc_200x150.jpg',
                    store_type: 'S',
                    url: 'https://www.facebook.com/WebGene/posts/10156350727984275',
                    count: 0,
                    showFG: true
                },
            ]
        },
        mounted(){
            $(window).on('load', function(){
                $('header, .wrap').removeClass('opacity');
                $('.loading').delay(500).fadeOut('fast', function(){

                });
            });

            // 地區按鈕
            $('.progress li').on('click', function(e){
                menuCtrl.preventAll(e);
                var index = $(this).index();
                $('html,body').stop().animate({
                    scrollTop: $('.group:eq('+index+')').offset().top - 75
                }, 500);
            });

            $('.warn .close').on('click', function(e){
                menuCtrl.preventAll(e);
                $(this).parent('div').fadeOut('fast');
            });

            gapage('');
        },
        methods:{
            login(e){
                var url = $(e.currentTarget).data('href');
                FB.getLoginStatus((response) => {
                    console.log(response.status);
                    if (response.status === 'connected') {
                        //this.getPageID();
                        window.open(url, '_blank');
                    }else{
                        FB.login((response) => {
                            console.log(response);
                            //this.getPageID();
                            window.open(url, '_blank');
                        }, {
                            scope: 'public_profile,email'
                        });
                    }
                });
            },
            getPageID(){
                $.each(this.posts, (key, obj) => {
                    var id = '';
                    var fanpage = '';
                    var newFanpage = obj.url.split('/');
                    fanpage = newFanpage[0] + '/' +newFanpage[1] + '/' +newFanpage[2] + '/' +newFanpage[3] + '/';
                    FB.api(
                        '/'+fanpage,
                        'GET',
                        {},
                        (response) => {
                            id = response.id;
                            console.log(response);
                            this.getShareCnt(id, obj.url, key);
                        }
                    );
                });
            },
            getShareCnt(id, obj, cnt){
                var new_posts = id + '_' + this.getURL_ID(obj);
                FB.api(
                    '/'+new_posts,
                    'GET',
                    {"fields":"shares"},
                    (response) => {
                        console.log(response);
                        count = (response.shares !== undefined) ? response.shares.count : 0;
                        this.posts[cnt].count = count;
                        this.posts[cnt].showFG = true;
                    }
                );
            },
            getURL_ID(url){
                var reg = '.*?(\\d+)';
                var exp = new RegExp(reg, ["i"]);
                var m = exp.exec(url);
                if (m != null) return m[1];
            }
        }
    });
});