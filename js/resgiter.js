$(window).on('load', function () {
    parent.$('html,body').scrollTop(0);
    var btn = document.querySelector('.signup');
    var userValue = document.querySelector('.userValue');
    var passValue = document.querySelector('.passValue');
    var username = document.querySelector('.username');
    var password = document.querySelector('.password');
    parent.$(`li`).css({
        borderBottom: 'none',
        color:'#000'
    });
    parent.$(`.index li:nth-child(3)`).css({
        borderBottom: '2px solid #860c86',
        color:'#860c86'
    });
    $('.username').on('focus', function () {
        $('.username').css({
            borderColor: '#6e496e'
        })
    })
    $('.password').on('focus', function () {
        $('.password').css({
            borderColor: '#6e496e'
        })
    })
    $('.username').on('blur', function () {
        $('.username').css({
            borderColor: '#dcdfe6'
        })
    })
    $('.password').on('blur', function () {
        $('.password').css({
            borderColor: '#dcdfe6'
        })
    })
    // parent.$('.loading').css({
    //     display: 'block'
    // })
    // setTimeout(function () {
    //     parent.$('.loading').css({
    //         display: 'none'
    //     })
    // }, 500)

    btn.addEventListener('click', function (e) {
        e.preventDefault();
        var user = username.value;
        var pass = password.value;
        var userReg = /^[0-9a-zA-Z]{8,12}$/;
        var passReg = /^\w{8,12}$/;
        userValue.style.opacity = 0;
        passValue.style.opacity = 0;
        if (!userReg.test(user)) {
            userValue.style.opacity = 1;
        }

        if (userReg.test(user)) {
            if (!passReg.test(pass)) {
                passValue.style.opacity = 1;
            }
        }

        if (userReg.test(user) && passReg.test(pass)) {
            parent.$('.loading').css({
                display: 'block'
            });
            // alert('注册成功，赶快去登录吧');
            $.ajax({
                url: 'http://vebcoder.cn:9527/api/register',
                method: 'get',
                data: {
                    userName: user,
                    password: pass
                },
                dataType: 'JSON',
                success: function (data) {
                    //   console.log(data)
                    //   var res = JSON.parse(data)
                    if (data.code == 1) {
                        parent.$('.loading').css({
                            display: 'none'
                        });
                        alert('注册成功，赶快去登录吧');
                        location.href = '../view/login.html';
                    }
                    if (data.code == 0) {
                        parent.$('.loading').css({
                            display: 'none'
                        });
                        alert('用户已存在');
                    }
                },
                error: function (err) {
                    parent.$('.loading').css({
                        display: 'none'
                    });
                    alert('系统维护中');
                }
            })

        }
    })
})