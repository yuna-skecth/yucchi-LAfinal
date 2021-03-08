$(document).ready(function() {
            $('.rightimg-slider').slick({
                autoplay: true,
                //                autospeed:3000,
                dots: false,
                arrows: false,

            });
        });

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