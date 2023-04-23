window.onload = function () {
    /* 验证手机号码合法性 */
    var telElt = document.querySelector("#tel")
    var telError = document.querySelector(".tel_error");
    telElt.onblur = function () {
        var tel = telElt.value;
        tel = tel.trim();
        if (tel == "") {
            telError.innerHTML = '手机号码不能为空';
        } else {
            var reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
            var ok = reg_tel.test(tel);
            if (ok) {
                telError.innerHTML = '';
            } else {
                telError.innerHTML = "手机号码不合法"
            }
        }
    }
    telElt.onfocus = function () {
        telError.innerHTML = ""
    }

    /* 验证密码合法性 */
    var pwdElt = document.querySelector("#pwd");
    var pwdError = document.querySelector(".pwd_error");
    pwdElt.onblur = function () {
        var pwd = pwdElt.value;
        pwd = pwd.trim();
        if (pwd == "") {
            pwdError.innerHTML = "密码不能为空";
        } else {
            if (pwd.length < 6 || pwd.length > 14) {
                pwdError.innerHTML = "密码长度必须在6~14之间"
            } else {
                var reg_pwd = /^[a-zA-Z0-9]+$/
                var ok = reg_pwd.test(pwd);
                if (ok) {
                    pwdError.innerHTML = "";
                } else {
                    pwdError.innerHTML = "密码只能由数字和字母组成";
                }
            }
        }
    }
    pwdElt.onfocus = function () {
        pwdError.innerHTML = "";
    }

    /* 验证确认密码和密码是否一致 */
    var confirmpwdElt = document.querySelector("#confirmpwd");
    var confirmError = document.querySelector(".confirm_error");
    confirmpwdElt.onblur = function () {
        var confirmpwd = confirmpwdElt.value;
        var pwd = pwdElt.value;
        if (confirmpwd != pwd) {
            confirmError.innerHTML = "与密码不一致";
        } else {
            confirmError.innerHTML = "";
        }
    }

    confirmpwdElt.onfocus = function () {
        confirmError.innerHTML = "";
    }

    var checkElt = document.querySelector("#check");
    var pactElt = document.querySelector(".pact");
    document.querySelector(".reg_btn").onclick = function () {
        /* 通过获得并失去焦点复用上方函数来对填写信息验证 */
        telElt.focus();
        telElt.blur();
        pwdElt.focus();
        pwdElt.blur();
        if (checkElt.checked == false) {
            pactElt.style.color = "red";
        }
        if (telError.innerHTML == "" && pwdError.innerHTML == "" && checkElt.checked) {
            var formObj = document.querySelector("#reg-form");
            /* 使用js完成信息提交 */
            formObj.submit()
        }
    }
}