

$(function(){

    $(".btn-mob-menu i").click(function(){
        $(".mob-menu").addClass('active')
    })

    $('.mob-menu').click(function(){
        $(this).removeClass('active')
    })
    
    if($(window).width() > 1024){
        let url = $('.news .content img').attr('src')
        console.log(url)
        $('.news .content img').remove();
        $('.news .content ').prepend('<div class="img" style="background: url(' + url + ') no-repeat 50% 50%;background-size: cover;"></div>')
    }
})