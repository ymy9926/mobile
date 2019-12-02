/* eslint-disable */
import 'amfe-flexible'
import '../../common/css/base.less';
import './referfriend.less'

function sign() {
    var email = document.querySelector('#txt_email');
    console.log(email.value);
    location.href = "/login.html";
}

document.querySelector("#btn-sign").onclick = sign;