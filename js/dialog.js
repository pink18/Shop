$.fn.extend({
    initDialog(status, message) {
        var node = document.createElement("div");
        node.className = "dialog";
        if (message) {
            node.innerHTML = message;
        } else {
            node.innerHTML = '宝宝忘记提示你了'
        }
        document.querySelector("body").appendChild(node);
        var dialog = document.querySelector(".dialog");
        dialog.style.minWidth = "380px";
        dialog.style.minHeight = "45px";
        if (status === "success") {
            dialog.style.backgroundColor = "#f0f9eb";
            dialog.style.color = "#67c23a";
            dialog.style.border = "1px solid #c2e7b0";
        } else if (status == 'warning') {
            dialog.style.backgroundColor = "#fdf6ec";
            dialog.style.color = "#e6a23c";
            dialog.style.border = "1px solid #f5dab1";
        } else if (status === 'danger') {
            dialog.style.backgroundColor = "#fef0f0";
            dialog.style.color = "#f56c6c";
            dialog.style.border = "1px solid #fbc4c4";
        } else if (status === 'default') {
            dialog.style.backgroundColor = "#ecf5ff";
            dialog.style.color = "#409eff";
            dialog.style.border = "1px solid #b3d8ff";
        } else {
            dialog.style.backgroundColor = "#f4f4f5";
            dialog.style.color = "#909399";
            dialog.style.border = "1px solid #d3d4d6";
        }

        dialog.style.fontSize = "20px";
        dialog.style.textAlign = "center";
        dialog.style.lineHeight = "45px";
        dialog.style.position = "fixed";
        dialog.style.left = "50%";
        dialog.style.transform = "translate(-50%, 0)";
    },
    showDialog(status, message) {
        $(this).initDialog(status,message);
        var dialog = document.querySelector(".dialog");
        var start = getComputedStyle(dialog, null)["height"];
        start = -parseFloat(start);
        // console.log(start);
        var timer = setInterval(() => {
            start += 1;
            $(dialog).css({ top: start + "px" });
            if (start >= 30) {
                start = 30;
                $(dialog).css({
                    top: start + "px",
                    display: "block",
                    opacity: 1,
                });
                clearInterval(timer);
            }
        }, 10);
    },
    hideDialog() {
        var opacity = 1;
        var dialog = document.querySelector(".dialog");
        var timer = setInterval(function () {
            opacity -= 0.1;
            dialog.style.opacity = opacity;
            if (opacity <= 0) {
                dialog.style.opacity = 0;
                dialog.style.display = "none";
                clearInterval(timer);
            }
        }, 16.7);
    },
});