/* eslint-disable */
import axios from 'axios'
import '../../common/js/layer_mobile/need/layer.css'
import '../../common/js/layer_mobile/layer.js'
(function (window) {
    var html = `<span>顶部</span>`;
    var header = document.createElement('header');
    header.innerHTML = html;


    var layout = document.querySelector('.lg-layout');
    layout.parentNode.insertBefore(header, layout);

    window.submitEmail = function (data) {
        var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;

        if (data.email != "") {
            if (reg.test(data.email)) {
                var http = axios.post('https://member.lingoace.com/api/v2/student/potential_user/', data);
                http.then(function ({ status, data } = res) {
                    console.log(status, data);
                }, function (err) {
                    console.log(err);
                });

                layer.open({
                    content: 'Thank you for submitting your enquiry. Our course consultant will revert back to you within 24hours.'
                    , skin: 'msg'
                    , time: 3 //2秒后自动关闭
                });

            }
            else {
                layer.open({
                    content: 'Invalid email. '
                    , btn: 'OK'
                });
            }
        } else {
            console.log('error');
        }

    }
})(window);