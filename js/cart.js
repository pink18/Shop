$(window).on('load', function () {
    //     parent.$('.loading').css({
    //         display: 'block'
    //     })
    //     setTimeout(function () {
    //         parent.$('.loading').css({
    //             display: 'none'
    //         })
    //     }, 500)

    // 购物车tab切换
    parent.$(`li`).css({
        borderBottom: 'none',
        color: '#000'
    });
    parent.$(`.index li:nth-child(2)`).css({
        borderBottom: '2px solid #860c86',
        color: '#860c86'
    });
})