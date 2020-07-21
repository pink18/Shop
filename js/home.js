var left=document.querySelector('.left');
var right=document.querySelector('.right');
var wraper = document.querySelector('.rotation');
var pic = document.querySelector('.pic');
var img = document.querySelectorAll('img');
var count = 0;
right.addEventListener('click', function () {
    stop();
    if (count == img.length - 2) {
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
        count = img.length - 2;
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
        if (count == img.length - 2) {
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
wraper.onmouseover=function(){
    left.style.left='20px';
    right.style.right='20px';
}
wraper.onmouseout=function(){
    left.style.left='-50px';
    right.style.right='-50px';
}
left.onmouseover=function(){
    left.style.left='20px';
    right.style.right='20px';
}
right.onmouseover=function(){
    left.style.left='20px';
    right.style.right='20px';
}
$(window.parent.document).find("#main").on('load',function(){
    var main = $(window.parent.document).find("#main");
    var thisheight = $(document).height()+30;
    main.height(thisheight);
});
