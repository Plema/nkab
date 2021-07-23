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
    $('.faq-slider').slick({
        // dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        mobileFirst: true,
        autoplay: true,
        arrows: false,
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
        $('.help').hide();
        let id = $(this).attr('href');
        $(document).find(id).slideDown();

    })

    $("header .anchor a").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top ; 
        $('body,html').animate({scrollTop: top}, 700);
    });
    $("#help-constructor a").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top ; 
        $('body,html').animate({scrollTop: top}, 700);
    });

    $(".go-to-top a").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top ; 
        $('body,html').animate({scrollTop: top}, 700);
    });
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > 500) {
          $('.go-to-top').addClass('show');
        } else {
          $('.go-to-top').removeClass('show');
        }
      });
      let CurrentScroll = 0
      $(window).scroll(function(event){

        var NextScroll = $(this).scrollTop();
        
  
        if (NextScroll < CurrentScroll || NextScroll <= 0){
           //write the codes related to down-ward scrolling here
           $('header .navigation').addClass('fixed-menu')
           $('header .navigation').css('margin-top', '0px')
        }
        else {
           //write the codes related to upward-scrolling here
           $('header .navigation').css('margin-top', '-80px')
           
        }

        if ($(window).scrollTop() < 50) {
            $('header .navigation').removeClass('fixed-menu')

          }
  
        CurrentScroll = NextScroll;  //Updates current scroll position
    });

})


