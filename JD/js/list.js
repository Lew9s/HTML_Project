window.onload = function () {
    var login = document.querySelector('#username')
    var a = document.querySelector('#login')
    var jd = document.querySelector('#JD')
    var shopcar = document.querySelector(".shopcar")
    var loginInfo = location.search.substring(1);
    var userInfo = loginInfo.split("&");
    var username = userInfo[0].split("=")[1];
    if (username != undefined) {
        login.innerHTML = '欢迎，';
        a.innerHTML = username;
        shopcar.href = './shopcar.html?username=' + username;
        jd.href = './index.html?username=' + username;
    }
}