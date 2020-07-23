$(window).on('load', function () {
    var left = document.querySelector('.left');
    var right = document.querySelector('.right');
    var wraper = document.querySelector('.rotation');
    var pic = document.querySelector('.pic');
    var img = document.querySelectorAll('.pic>img');
    var count = 0;
    // parent.$('.loading').css({
    //     display: 'block'
    // })
    // setTimeout(function () {
    //     parent.$('.loading').css({
    //         display: 'none'
    //     })
    // }, 500)
    parent.$(`li`).css({
        borderBottom: 'none',
        color: '#000'
    });
    parent.$(`.index li:nth-child(1)`).css({
        borderBottom: '2px solid #860c86',
        color: '#860c86'
    });

    pic.onmouseover = function () {
        stop();
    }

    pic.onmouseout = function () {
        play();
    }

    right.addEventListener('click', function () {
        stop();
        if (count == img.length - 1) {
            count = 0;
            pic.style.left = count * -wraper.offsetWidth + 'px';
            pic.style.transition = 'none';
        }
        count++;
        pic.style.left = count * -wraper.offsetWidth + 'px';
        pic.style.transition = 'all 0.3s linear';
        play();
    })
    left.addEventListener('click', function () {
        stop();
        if (count <= 0) {
            count = img.length - 1;
            pic.style.left = count * -wraper.offsetWidth + 'px';
            pic.style.transition = 'none';
        }
        count--;
        pic.style.left = count * -wraper.offsetWidth + 'px';
        pic.style.transition = 'all 0.3s linear';

        play();
    })

    function stop() {
        clearInterval(timer);
    }

    function play() {
        timer = setInterval(function () {
            if (count == img.length - 1) {
                count = 0;
                pic.style.left = count * -wraper.offsetWidth + 'px';
                pic.style.transition = 'none';
            }
            count++;
            pic.style.left = count * -wraper.offsetWidth + 'px';
            pic.style.transition = 'all 0.3s linear';
        }, 2000)
    }
    play();
    wraper.onmouseover = function () {
        left.style.left = '20px';
        right.style.right = '20px';
    }
    wraper.onmouseout = function () {
        left.style.left = '-50px';
        right.style.right = '-50px';
    }
    left.onmouseover = function () {
        left.style.left = '20px';
        right.style.right = '20px';
    }
    right.onmouseover = function () {
        left.style.left = '20px';
        right.style.right = '20px';
    }
    // $(window.parent.document).find("#main").on('load', function () {
    //     var main = $(window.parent.document).find("#main");
    //     var thisheight = $(document).height();
    //     main.height(thisheight);
    // });
    shoplist = localStorage.getItem('shoplist');
    if (shoplist) {
        shoplist = JSON.parse(shoplist);
        $.each(shoplist, function (index, item) {
            // console.log(index, item)
            var {
                img_list_url,
                title,
                price,
                mack,
            } = item;
            var tmp = `<li>
            <a href="./details.html">
            <img src=${img_list_url} alt="">
            <h3 class="name">${title}</h3>
            <p class="introduce">
                <span class="price">￥${price}</span>
                <span class="recommend">
                    <span class="together">${mack}</span>
                </span>
            </p>
            </a>
            </li>`
            $('.item').append(tmp)
        })
        return;
    } else {
        $.ajax({
            url: 'http://vebcoder.cn:9527/api/goodList',
            data: {
  
            },
            method: 'get',
            success: function (data) {
                data = JSON.stringify(data);
                localStorage.setItem('shoplist', data);
            },
            error: function () {
                console.log('系统维护中');
            }
        })
    }
})
setTimeout(function(){
    $('.item').children().on('click',function(){
        var index=$(this).index();
        var id=shoplist[index].Id;
        var one=shoplist[index].type_one;
        sessionStorage.setItem('Id',id);
        sessionStorage.setItem('type_one',one);
    })
},16.7)


var nav = document.querySelector('nav');
var main = document.querySelector('main');
var footer = document.querySelector('footer');
var a=parent.$('iframe').outerHeight();
parent.onscroll = function () {
    var H = parent.innerHeight; // 获取视图窗口高度
    var scrollTop = parent.document.documentElement.scrollTop || parent.document.body.scrollTop;
    var pageH = document.body.offsetHeight;
    var headerH=parent.$('header')[0].offsetHeight;
    if (H + scrollTop - headerH >= pageH) {
        a+=300;
        parent.$('iframe').css({
            height: a + 'px'
        })
        // bug:慢 在0.5s内多次触底 --> 解决方式 防抖      
        
    }
}
