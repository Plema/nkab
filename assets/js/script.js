$(function(){

    if($(window).width() < 1024){
        $('.news-slider').slick({
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
            mobileFirst: true,
            nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-next"></i></button>',
            prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-prev"></i></button>',
            appendDots: $('#news .slider-nav'),
            appendArrows: $('#news .slider-nav'),
            responsive: [
            ]
        })

        $( ".command" ).each(function(index){
            $('.command-slider', $(this)).slick({
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: false,
                mobileFirst: true,
                nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-next"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-prev"></i></button>',
                appendDots: $(this).parent().find('.slider-nav'),
                appendArrows: $(this).parent().find('.slider-nav'),
            })
        })


    }

    $('.news-slider .item .item-content').matchHeight();

    $('.portfolio-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        mobileFirst: true,
        nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-prev"></i></button>',
        appendDots: $('#portfolio  .portfolio-slider'),
        appendArrows: $('#portfolio .portfolio-slider'),
    })

    $('.link .accordion').click(function(){
        $(this).parent().parent().find(".command").slideToggle()
    })

    $(".btn-mob-menu i").click(function(){
        $(".mob-menu").addClass('active')
    })

    $('.mob-menu').click(function(){
        $(this).removeClass('active')
    })

    $('.help-constructor-content-item .img a').click(function(){
        let id = $(this).attr('href');
        $(document).find(id).slideToggle();

    })

    $("a").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top ; 
        $('body,html').animate({scrollTop: top}, 700);
    });
    
})


