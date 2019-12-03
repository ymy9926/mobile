/* eslint-disable */
import 'amfe-flexible'
import '../../common/css/base.less';
import './parents.less'
import '../../common/js/header'
import '../../common/js/footer'

function sign() {
    var email = document.querySelector('#txt_email');
    console.log(email.value);
    location.href = "/login.html";
}

document.querySelector("#btn-sign").onclick = sign;
