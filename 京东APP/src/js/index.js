/*
 * @author: LainarHo
 * @email: lainarho@gmail.com
 * index.js
 */

$(function () {

    var swiper = new Swiper('.banner .swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false
    });

    var swiper = new Swiper('.secKillContainer.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true
    });

    var swiper = new Swiper('.floor_banner.swiper-container', {
        pagination: '.swiper-pagination',
        spaceBetween: 0,
        paginationClickable: true
    });


    var id=1;
    ajax1(showImg);

    $(window).on('scroll',function(){

        console.log($('.box-cover').css('opacity'));

        if($(window).scrollTop()<=0){
            $('#toolbar').css({'position':'absolute','top':'0px'}).find('.box-cover').css({'background':'none','opacity':'0'});

        }else{
            $('#toolbar').css({'position':'fixed','top':'0px'}).find('.box-cover').css('background','#c91523').animate({'opacity':'0.85'});

        }
        //console.log($(window).scrollTop());

        if($(window).scrollTop() >= $(document).height() - $(window).height()){
            id+=20;
            $('.loading').show();
            ajax1(showImg);
        }





    });

    $('.goon').on('click',function(){
        id+=20;
        $('.loading').show();
        setTimeout(ajax1(showImg),3000);
        //if(id==81){
        //    $('.loading').hide();
        //    $('.goon').hide();
        //}
    });

    function ajax1(callback){

        $.ajax({
            'url':'http://diviner.jd.com/diviner?p=610009&uuid=12396477&lid='+id+'&lim=20&cb=tempGuessLikeCallback',
            'dataType':'jsonp',
            'jsonp':'callback',
            'jsonpCallback':'tempGuessLikeCallback',
            'scriptCharset':'gb2312',
            'success':function(data){
                d=data.data;
                //console.log(d);
                var _span='';
                var _img='';
                var _div='';
                var _html = '';
                $.each(d,function(index,ele){
                    //console.log(ele);
                    _img='<img src="img/load.png" data-lazy-img="'+'http://img13.360buyimg.com/n1/s200x200_'+ele.img+'">';
                    _span='<span>'+ele.t+'</span>';
                    _div='<div><span class="product-price">￥<span class="big">'+parseInt(ele.jp)+'</span><span class="small">.00</span></span><span class="sam">看相似</span></div>'
                    _html+='<li><a href="#">'+_img+_span+_div+'</a></li>';
                });
                $('.loading').hide();
                $('.just-u-like ul').append(_html);

                if (typeof callback == 'function') {
                    callback();
                }
            }
        })
    }

    function showImg(){
        $('.just-u-like ul li a img').each(function (){
            $(this).animate({opacity:0.3}, 500, function() {
                $(this).attr('src', $(this).attr('data-lazy-img')).animate({opacity: 1}, 1000);
            });
        })
    }

    setInterval(function(){

        var enddate = new Date('2016/10/30 12:00:00');
        var date = new Date();

        var ss = enddate.getTime()-date.getTime();      //得到相差的毫秒

        var sec = Math.floor(ss/1000%60);   //秒
        //console.log(sec);
        var mm = Math.floor(ss/1000/60%60);   //分
        //console.log(mm);
        var hh = Math.floor(ss/1000/60/60%24);   //时
        //console.log(hh);
        var dd = Math.floor(ss/1000/60/60/24);   //天
        //console.log(dd);
        if(hh<10){
            hh='0'+hh
        }if(mm<10){
            mm='0'+mm
        }if(sec<10){
            sec='0'+sec
        }
            var doc = hh + '' + mm + '' + sec;
            //console.log(doc);
            var time_Arr = doc.split('');
            //console.log(time_Arr);
            var _html = '<span class="secKill-time-l">' + time_Arr[0] + '</span><span class="secKill-time-r">' + time_Arr[1] + '</span><span>:</span><span class="secKill-time-l">' + time_Arr[2] + '</span><span class="secKill-time-r">' + time_Arr[3] + '</span><span>:</span><span class="secKill-time-l">' + time_Arr[4] + '</span><span class="secKill-time-r">' + time_Arr[5] + '</span>';
            //console.log(_html);

            $('.secKill-time').html(_html);

    },1000);

});
