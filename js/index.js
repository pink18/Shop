$(window).on('load', function () {
    $('#resgiter').on('click', function (e) {
        if ($('#resgiter').html() == '退出登录') {
            $('#login').html('登录');
            $('#resgiter').html('注册');
            $("#resgiter").attr('href', 'javascript:;');
            $(`li`).css({
                borderBottom: 'none',
                color:'#000'
            });
            window.localStorage.removeItem('token')
        } else {
            $("#resgiter").attr('href', './view/resgiter.html');
        }
    })
    $('#login').on('click', function () {
        if ($('#login').html() == '购物车') {
            $("#login").attr('href', './view/cart.html');
        } else {
            $("#login").attr('href', './view/login.html');
        }
    })
    $("#main").on('load', function () {
        var mainheight = $(this).contents().find("body").height();
        $(this).height(mainheight);
    });

    $('.index a').on('click',function(){
        $('.loading').css({
            display: 'block'
        })
        setTimeout(function () {
            $('.loading').css({
                display: 'none'
            })
        }, 500)
    })
    $('.loading').css({
        display: 'block'
    })
    setTimeout(function () {
        $('.loading').css({
            display: 'none'
        })
    }, 500)

    if(localStorage.getItem('token')){
        $('#login').html('购物车');
        $('#resgiter').html('退出登录');
    }
    // $('.index').on('click', 'li', function () {
    //     $(`li`).css({
    //         borderBottom: 'none',
    //         color:'#000'
    //     });
    //     var x = $(this).index();
    //     // console.log(`${x}`);
    //     $(`li:eq(${x})`).css({
    //         borderBottom: '2px solid #860c86',
    //         color:'#860c86'
    //     });
    // })
    $('.t-return').on('click',function(){
        $('html,body').scrollTop(0);
    })
    $(window).scroll(function(){
        var scrollTop=document.documentElement.scrollTop;
        // console.log(scrollTop);
        if(scrollTop>=800){
            $('.t-return').css({
                display:'block'
            })
        }else{
            $('.t-return').css({
                display:'none'
            })
        }
    })
})