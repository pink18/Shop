$(window).on('load', function () {
    //     parent.$('.loading').css({
    //         display: 'block'
    //     })
    //     setTimeout(function () {
    //         parent.$('.loading').css({
    //             display: 'none'
    //         })
    //     }, 500)
    parent.$('html,body').scrollTop(0);
    parent.$('.left').css({
        display: 'block'
    })
    shoplist = localStorage.getItem('shoplist');
    shoplist = JSON.parse(shoplist);
    category = sessionStorage.getItem('category');

    $('.n-title').on('click', 'li', function () {
        var classify = [];
        $(`.n-title>li`).css({
            borderRadius: '0',
            backgroundColor: 'transparent',
            color: '#666'
        })
        var x = $(this).index();
        $(`.n-title>li:eq(${x})`).css({
            borderRadius: '50px',
            backgroundColor: '#800080',
            color: '#fff'
        })

        category = $(`.n-title>li:eq(${x})>a`).html();
        sessionStorage.setItem('category', category);
        sessionStorage.setItem('type_one', category);
        for (var i = 0; i < shoplist.length; i++) {
            if (shoplist[i].type_one == category) {
                classify.push(shoplist[i]);
            }
        }

        // console.log(classify);
        $('.shop').html('');
        parent.$('.left').html('');


        var one = [];
        var two = [];

        $.each(classify, function (index, item) {
            // console.log(index, item)
            var {
                img_list_url,
                title,
                price,
                mack,
                type_two
            } = item;

            one.push(type_two);


        })

        for (var i = 0; i < one.length; i++) {
            if (two.indexOf(one[i]) == -1) {
                two.push(one[i]);
            }
        }
        for (var j = 0; j < two.length; j++) {
            var tmp = `
        <h2 class="title">${two[j]}</h2>
    `
            var tmp1 = `<p>${two[j]}</p>`
            $('.shop').append(tmp)
            parent.$('.left').append(tmp1)
            for (var x = 0; x < classify.length; x++) {
                if (classify[x].type_two == `${two[j]}`) {
                    // console.log(`${two[j]}`);
                    var tmp = `
        <div class='product'>
            <a href="./details.html">
                <img src=${classify[x].img_list_url} alt="">
                <h3 class="name">${classify[x].title}</h3>
                <p class="introduce">
                    <span class="price">￥${classify[x].price}</span>
                    <span class="recommend">
                        ${classify[x].mack}
                    </span>
                </p>
            </a>
        </div>
    `
                    $('.shop').append(tmp)
                };
            }

        }
        parent.$(`.left>p:eq(${0})`).css({
            fontWeight: 'bolder',
            color: 'purple',
            filter: 'drop-shadow(0 0 10px purple)',
        })
        for (var i = 0; i < parent.$('.left>p').length; i++) {
            (function (i) {
                $(parent.$('.left>p')[i]).on('click', function () {
                    parent.$('html,body').scrollTop($('.shop h2')[i].offsetTop - 100);
                })
            })(i)
        };
        var product = document.querySelectorAll('.product');
        for (var i = 0; i < product.length; i++) {
            (function (i) {
                product[i].onclick = function () {
                    var id = classify[i].Id;
                    sessionStorage.setItem('Id', id);
                }
            })(i)
        }
        parent.$('iframe').height(document.documentElement.scrollHeight);
    })

    var x = 0;
    parent.$('.left').on('click', 'p', function () {
        parent.$(`.left>p:eq(${x})`).css({
            fontWeight: 'normal',
            color: '#000',
            filter: 'none',
        })
        x = $(this).index();
        parent.$(`.left>p:eq(${x})`).css({
            fontWeight: 'bolder',
            color: 'purple',
            filter: 'drop-shadow(0 0 10px purple)',
        })
    })

    sessionStorage.setItem('type_one', category);

    for (var i = 0; i < $(`.n-title>li`).length; i++) {
        if ($(`.n-title>li:eq(${i})>a`).html() == category) {

            $(`.n-title>li:eq(${i})`).css({
                borderRadius: '50px',
                backgroundColor: '#800080',
                color: '#fff'
            })
            break;
        }
    }

    var classify = [];
    for (var i = 0; i < shoplist.length; i++) {
        if (shoplist[i].type_one == category) {
            classify.push(shoplist[i]);
        }
    }

    var one = [];
    var two = [];
    $('.shop').html('');
    parent.$('.left').html('');
    $.each(classify, function (index, item) {
        // console.log(index, item)
        var {
            img_list_url,
            title,
            price,
            mack,
            type_two
        } = item;

        one.push(type_two);

    })

    for (var i = 0; i < one.length; i++) {
        if (two.indexOf(one[i]) == -1) {
            two.push(one[i]);
        }
    }
    for (var j = 0; j < two.length; j++) {
        var tmp = `
        <h2 class="title">${two[j]}</h2>
    `
        var tmp1 = `<p>${two[j]}</p>`
        $('.shop').append(tmp)
        parent.$('.left').append(tmp1)

        for (var x = 0; x < classify.length; x++) {
            if (classify[x].type_two == `${two[j]}`) {
                // console.log(`${two[j]}`);
                var tmp = `
        <div class='product'>
            <a href="./details.html">
                <img src=${classify[x].img_list_url} alt="">
                <h3 class="name">${classify[x].title}</h3>
                <p class="introduce">
                    <span class="price">￥${classify[x].price}</span>
                    <span class="recommend">
                        ${classify[x].mack}
                    </span>
                </p>
            </a>
        </div>
    `
                $('.shop').append(tmp)
            };
        }

    }

    var product = document.querySelectorAll('.product');
    for (var i = 0; i < product.length; i++) {
        (function (i) {
            product[i].onclick = function () {
                var id = classify[i].Id;
                sessionStorage.setItem('Id', id);
            }
        })(i)
    }
    parent.$(`.left>p:eq(${0})`).css({
        fontWeight: 'bolder',
        color: 'purple',
        filter: 'drop-shadow(0 0 10px purple)',
    })
    parent.onscroll = function () {

        var scrollTop = parent.document.documentElement.scrollTop || parent.document.body.scrollTop;

        var headerH = parent.$('header')[0].offsetHeight;

        var iframeH = scrollTop - headerH;
        // console.log(scrollTop);
        // console.log($($('.shop h2')[0]).offset().top);
        for (var i = 0; i < $('.shop h2').length; i++) {
            if (iframeH >= $($('.shop h2')[i]).offset().top - 500) {
                for (var j = 0; j <= $('.shop h2').length; j++) {
                    parent.$(`.left>p:eq(${j})`).css({
                        fontWeight: 'normal',
                        color: '#000',
                        filter: 'none',
                    })
                }
                // console.log(i);
                parent.$(`.left>p:eq(${i})`).css({
                    fontWeight: 'bolder',
                    color: 'purple',
                    filter: 'drop-shadow(0 0 10px purple)',
                })
            }
        }

    }



    for (var i = 0; i < parent.$('.left>p').length; i++) {
        (function (i) {
            $(parent.$('.left>p')[i]).on('click', function () {
                parent.$('html,body').scrollTop($('.shop h2')[i].offsetTop + 150);
            })
        })(i)
    };
    parent.$('iframe').height(document.documentElement.scrollHeight);
})