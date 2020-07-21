$('#resgiter').on('click', function () {
    if ($('#resgiter').html() == '退出登录') {
        $('#login').html('登录');
        $('#resgiter').html('注册');
        $("#resgiter").attr('href', './view/login.html');
    } else {
        $("#resgiter").attr('href', './view/resgiter.html');
    }
})
$("#main").on('load',function () {
    var mainheight = $(this).contents().find("body").height() + 30;
    $(this).height(mainheight);
});