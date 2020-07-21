var btn = document.querySelector('.signup');
var username = document.querySelector('.username');
var password = document.querySelector('.password');

btn.addEventListener('click', function () {
    if (username.value == localStorage.getItem('username') && password.value == localStorage.getItem('password')) {
        alert('登录成功，欢迎' + localStorage.getItem('username'));

        parent.$('#login').html('购物车');
        parent.$('#resgiter').html('退出登录');

        location.href = '../view/home.html';
    } else {
        alert('用户名或密码错误');
    }
})