parent.$('html,body').scrollTop(0);
parent.$('iframe').css({
    height: 1120 + 'px'
})

var id = sessionStorage.getItem('Id');
var one = sessionStorage.getItem('type_one');

getDetail(function () {
    var x = 0;
    $(`.big>img:eq(${x})`).css({
        display: 'block'
    });
    $(`.small>img:eq(${x})`).css({
        border: '2px solid #6e496e'
    });

    // 鼠标移入
    $('.small').on('click', 'img', function () {
        $(`.small>img:eq(${x})`).css({
            border: '2px solid #fff'
        });
        $(`.big>img:eq(${x})`).css({
            display: 'none'
        });
        x = $(this).index(); // 获取当前元素的索引值
        $(`.small>img:eq(${x})`).css({
            border: '2px solid #6e496e'
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
})

function getDetail(callback) {
    $.ajax({
        url: 'http://vebcoder.cn:9527/api/detail',
        method: 'get',
        async: false,
        data: {
            goodId: id
        },
        dataType: 'JSON',
        success: function (data) {
            // console.log(data);
            $.each(data, function (index, item) {
                var {
                    img_list_url,
                    img_url,
                    imgs,
                    mack,
                    supplier,
                    price,
                    title,
                    type_one,
                    type_two
                } = item;
                imgs = JSON.parse(imgs);
                // img_list_url=JSON.stringify(img_list_url);
                // img_list_url=JSON.parse(img_list_url)

                // console.log(img_list_url);
                // console.log(imgs);
                var tmp = `<div class="header">
                    <div class="big">
                    
                        <div class="mark"></div>
                    </div>
                    <div class="glass">
                    
                    </div>
                    
                    <div class="message">
                        <p class="title">${title}</p>
                        <p class="place">${supplier}</p>
                        <p class="h-price">￥${price}</p>
                        <div></div>
                        <button class="shopping">添加到购物车</button>
                    </div>
                </div>
                <div class="small">
                
                </div>`;
                $('.m-top').append(tmp);

                for (var i = 0; i < imgs.length; i++) {
                    // console.log(imgs[i]);
                    var simg = document.createElement('img');
                    var bimg=document.createElement('img');
                    var gimg=document.createElement('img');

                    simg.src = imgs[i];
                    bimg.src=imgs[i];
                    gimg.src=imgs[i];
                    // console.log(simg);
                    // var small=document.querySelector('.small');
                    $('.small').append(simg);
                    $('.big').append(bimg);
                    $('.glass').append(gimg);

                }
            })
        },
        error: function () {
            alert('系统维护中');
        }
    })

    $.ajax({
        url: 'http://vebcoder.cn:9527/api/goodList',
        method: 'get',
        data: {
            type_one: one
        },
        dataType: 'JSON',
        success: function (data) {
            var a=[];
            for(var i=0;i<10;i++){
                a.push(data[i]);
                // console.log(a);
            }
            $.each(a, function (index, item) {
                var {
                    img_list_url,
                    mack,
                    supplier,
                    price,
                    title,
                    type_one,
                    type_two
                } = item;

                var tmp = `<li><a href="./details.html">
                <img src=${img_list_url} alt="">
                <h3 class="name">${title}</h3>
                <p class="introduce">
                    <span class="price">￥${price}</span>
                    <span class="recommend">
                        ${mack}
                    </span>
                </p>
            </a>
        </li>`;
                $('.item').append(tmp);
            })
            $('.item').children().on('click', function () {
                var index = $(this).index();
                var id = a[index].Id;
                var one = a[index].type_one;
                sessionStorage.setItem('Id', id);
                sessionStorage.setItem('type_one', one);
            })
        },
        error: function () {
            alert('系统维护中');
        }
    })

    callback()
}