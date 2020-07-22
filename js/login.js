$(window).ready( function () {
    parent.$('html,body').scrollTop(0);
    var btn = document.querySelector('.signup');
    var username = document.querySelector('.username');
    var password = document.querySelector('.password');
    var userValue = document.querySelector('.userValue');
    var passValue = document.querySelector('.passValue');
    parent.$(`li`).css({
        borderBottom: 'none',
        color:'#000'
    });
    parent.$(`.index li:nth-child(2)`).css({
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
    btn.addEventListener('click', function () {
        // if (username.value == localStorage.getItem('username') && password.value == localStorage.getItem('password')) {
        //     alert('登录成功，欢迎' + localStorage.getItem('username'));

        //     parent.$('#login').html('购物车');
        //     parent.$('#resgiter').html('退出登录');

        //     location.href = '../view/home.html';
        // } else {
        //     alert('用户名或密码错误');
        // }
        // e.preventDefault();

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
            $.ajax({
                url: 'http://vebcoder.cn:9527/api/login',
                method: 'get',
                data: {
                    userName: user,
                    password: pass
                },
                dataType: 'JSON',
                success: function (data) {
                    // console.log(data.token);
                    if (data.code == 1) {
                        parent.$('.loading').css({
                            display: 'none'
                        });
                        var obj = {
                            token: data.token,
                            userId: data.userId,
                            userName: data.userName
                        }
                        obj=JSON.stringify(obj);
                        // console.log(obj);
                        localStorage.setItem('token', obj);

                        obj=JSON.parse(obj);
                        // console.log(obj);
                        alert('登录成功，欢迎' + user);
                        location.href = '../view/home.html';
                        parent.$('#login').html('购物车');
                        parent.$('#resgiter').html('退出登录');
                    }
                    if (data.code == 0) {
                        parent.$('.loading').css({
                            display: 'none'
                        });
                        alert('用户名或密码错误');
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