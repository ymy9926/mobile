/* eslint-disable */
import '../../common/css/base.less';
import './contactus.less'
import 'amfe-flexible'
import '../../common/js/header'
import '../../common/js/footer'

(function () {

    function submit() {
        var form = document.contactus;
        var param = {
            "first_name": form.first_name.value,
            "last_name": form.first_name.value,
            "email": form.email.value,
            "description": form.description.value,
            "phone": form.phone.value,
            "title": form.title.value
        }
        submitEmail(param);
    }

    function sign() {
        var email = document.querySelector('#txt_email');
        submitEmail({ email: email });
        //location.href = "/login.html";
    }

    document.querySelector("#btn_submit").onclick = submit;
    document.querySelector("#btn-sign").onclick = sign;
})();