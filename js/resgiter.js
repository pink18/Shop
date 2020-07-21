var btn = document.querySelector('.signup');
var userValue = document.querySelector('.userValue');
var passValue = document.querySelector('.passValue');
var username = document.querySelector('.username');
var password = document.querySelector('.password');
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
    if (!passReg.test(pass)) {
        passValue.style.opacity = 1;
    }
    if (userReg.test(user) && passReg.test(pass)) {
        alert('注册成功，赶快去登录吧');
        var obj = {
            username: user,
            password: pass
        }
        for (var x in obj) {
            localStorage.setItem(x, obj[x]);
        }
        location.href = '../view/login.html';

    }
})