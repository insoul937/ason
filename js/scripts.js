var $ = jQuery;
$(document).ready(function(){
    $(".header-nav ul li").on({
        mouseenter: function () {
            $(this).find('.second-menu').slideDown();},
        mouseleave: function () {
            $(this).find('.second-menu').slideUp();}
    });
    $('.fancy').fancybox();
    $('.large-block').zoom();
    $(document).on("click.bs.dropdown.data-api", ".noclose", function (e) { e.stopPropagation() });
    $('.wish-icon').click(function () {
       $(this).toggleClass('active');
    });
    $(".small-block ul li").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        $('.large-block ul li').eq(index).addClass('active').siblings().removeClass('active');
    });
    $('.btn-sb').click(function () {
        $(this).parent().find('.invisible-filter').toggleClass('active');
        $(this).toggleClass('active');
    });
    $('.sel').select2();
    $('.top-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        smartSpeed: 800,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        loop: true,
    });
    $('.catalog-carousel').owlCarousel({
        items: 4,
        smartSpeed: 800,
        margin: 33,
        nav: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        dots: false,
        autoplay: false,
        loop: true,
    });
    if($(".checkbox").length > 0 || $(".radio").length > 0){
        checks();
        $(".checkbox input[type='checkbox'], .radio input[type='radio']").change(function(){
            checks();
        });
    }
    $('.symbol-list a').click(function(){
        $('.symbol-list a').removeClass('active');
        $(this).addClass('active');
    });
});

function checks(){
    $(".checkbox input[type='checkbox'], .radio input[type='radio']").each(function(){
        if($(this).is(':checked')){
            $(this).closest('label').addClass('checked');
        }
        else {
            $(this).closest('label').removeClass('checked');
        }
    });
}





