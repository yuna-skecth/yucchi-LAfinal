$(function(){
  var imgHeight = $('.leftimg').outerHeight(); //画像の高さを取得。これがイベント発火位置になる。
  var header = $('#header'); //ヘッダーコンテンツ

  $(window).on('load scroll', function(){
     if ($(window).scrollTop() < imgHeight) {
       //メインビジュアル内にいるので、クラスを外す。
       header.removeClass('headerColor-default');
     }else {
       //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
       header.addClass('headerColor-default');
     }
  });
});



$(document).ready(function() {
            $('.rightimg-slider').slick({
                autoplay: true,
                //                autospeed:3000,
                dots: false,
                arrows: false,

            });
        });

//$(window).load(function(){
//    $('.slider_interview').slick({
//        slidesToShow: 3,
//        slidesToScroll: 1,
//        dots: true,
//        centerMode: true,
//        infinite: true,
//        autoplay: true,
//        centerPadding: '100px',
//        arrows: false,
//        responsive: [                    
//            {
//                breakpoint: 480,
//                settings: {
//                    arrows: false,
//                    centerMode: true,
//                    centerPadding: '0px',
//                    slidesToShow: 1
//                }
//            }
//        ]
//    });


//
//$(function(){
//    $('.js-modal-open').on('click',function(){
//        $('.js-modal').fadeIn();
//        return false;
//    });
//    $('.js-modal-close').on('click',function(){
//        $('.js-modal').fadeOut();
//        return false;
//    });
//});


$(function(){
    $('.js-modal-open').each(function(){
        $(this).on('click',function(){
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            $(modal).fadeIn();
//            $('body').addClass('fixed').css({ top: -scrollPos });//背景固定
            return false;
        });
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
//        $('body').removeClass('fixed').css({ top: 0 });//背景固定を解除
        return false;
    }); 
});