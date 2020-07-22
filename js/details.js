$(window).ready(function () {
    parent.$('html,body').scrollTop(0);
    var x = 0;
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
        x = $(this).index(); // 获取当前元素的索引值
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
            left: -maskX * 2 + 'px',
            top: -maskY * 2 + 'px'
        });
    })

    // var detail = localStorage.getItem('detail');
    // if (detail) {
    //     detail = JSON.parse(detail);
    //     $.each(detail, function (index, item) {
    //         var {
    //             img_list_url,
    //             img_url,
    //             imgs,
    //             mack,
    //             supplier,
    //             price,
    //             title,
    //             type_one,
    //             type_two
    //         } = item;
    //         var tmp = `    <div class="header">
    //     <div class="big">
    //         <img src=${img_list_url} alt="">
    //         <div class="mark"></div>
    //     </div>
    //     <div class="glass">
    //         <img src=${img_url} alt="">
    //     </div>
        
    //     <div class="message">
    //         <p class="title">${title}</p>
    //         <p class="place">${supplier}</p>
    //         <p class="h-price">${price}</p>
    //         <div></div>
    //         <button class="shopping">添加到购物车</button>
    //     </div>
    // </div>
    // <div class="small">
    //     <img src=${imgs} alt="">
    // </div>

    // <div>
    //     <p class="same">相似商品推荐</p>
    //     <div class="shop">
    //         <ul class="item">
    //             <li><a href="./details.html">
    //                     <img src="../img/手冲咖啡.jpg" alt="">
    //                     <h3 class="name">手冲咖啡6杯装(定制款)</h3>
    //                     <p class="introduce">
    //                         <span class="price">￥59</span>
    //                         <span class="recommend">
    //                             <span class="together">一起拼</span>
    //                             <span class="sales">爆品</span>
    //                         </span>
    //                     </p>
    //                 </a>
    //             </li>
    //         </ul>
    //     </div>
    // </div>`;
    //         $('main').append(tmp);
    //     })
    //     return;
    // } else {
    //     $.ajax({
    //         url: 'http://vebcoder.cn:9527/api/detail',
    //         data: {
    //             goodId: '1'
    //         },
    //         method: 'get',
    //         succrss: function (data) {
    //             data = JSON.stringify(data);
    //             localStorage.setItem('detail', data);
    //         },
    //         error: function () {
    //             alert('系统维护中');
    //         }
    //     })
    // }

})