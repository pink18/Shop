$(window).ready(function () {
    var x=0;
    $(`.big>img:eq(${x})`).css({
        display: 'block'
    });
    $(`.small>img:eq(${x})`).css({
        opacity: 1
    });

    // 鼠标移入
    $('.small').on('mouseover', 'img', function () {
        $(`.small>img:eq(${x})`).css({
            opacity: 0.3
        });
        $(`.big>img:eq(${x})`).css({
            display: 'none'
        });
        x = $(this).index();// 获取当前元素的索引值
        $(`.small>img:eq(${x})`).css({
            opacity: 1
        });
        $(`.big>img:eq(${x})`).css({
            display: 'block'
        });
    })
    $('.big').on('mouseover', function () {
        $('.mark').css({
            display: 'block'
        });
        $(`.glass`).css({
            display: 'block',
        });
        $(`.glass>img:eq(${x})`).css({
            display: 'block',
        });
    })
    $('.big').on('mouseout', function () {
        $('.mark').css({
            display: 'none'
        });
        $(`.glass`).css({
            display: 'none',
        });
        $(`.glass>img:eq(${x})`).css({
            display: 'none'
        });
    })
    $('.big').on('mousemove', function (ev) {
        var pageX = ev.pageX - $('.big').offset().left;
        var pageY = ev.pageY - $('.big').offset().top;
        var maskX = pageX - $('.mark').outerWidth() / 2;
        var maskY = pageY - $('.mark').outerHeight() / 2;
        // console.log(maskY)
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= $('.big').outerWidth() - $('.mark').outerWidth()) {
            maskX = $('.big').outerWidth() - $('.mark').outerWidth();
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= $('.big').outerHeight() - $('.mark').outerHeight()) {
            maskY = $('.big').outerHeight() - $('.mark').outerHeight();
        }
        $('.mark').css({
            left: maskX + 'px',
            top: maskY + 'px'
        });
        $(`.glass>img:eq(${x})`).css({
            left:-maskX * 2 +'px',
            top:-maskY * 2 +'px'
        });
    })

})