window.onload = function () {
    var login = document.querySelector('#username')
    var a = document.querySelector('#login')
    var usershow = document.querySelector('.usershow p')
    var shopcar = document.querySelector(".shopcar")
    var jd = document.querySelector('#JD')
    var list = document.querySelector('#list')
    var loginInfo = location.search.substring(1);
    var userInfo = loginInfo.split("&");
    var username = userInfo[0].split("=")[1];
    if (username != undefined) {
        login.innerHTML = '欢迎，';
        a.innerHTML = username;
        usershow.innerHTML = "<a href='./login.html' style='color:#c81623'>" + username + '</a>';
        shopcar.href = './shopcar.html?username=' + username;
        jd.href = './index.html?username=' + username;
        list.href = './list.html?username=' + username;
    }
}