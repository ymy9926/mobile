/* eslint-disable */
import '../../common/js/layer_mobile/need/layer.css'
import '../../common/js/layer_mobile/layer.js'
import close from '../../images/header/close.png'
import no_remember from '../../images/header/remmber.png'
import remember from '../../images/header/remmbersel.png'
import logo from '../../images/header/move_headerlogo_03.png'
import location from '../../images/header/location.png'
import bottomLocation from '../../images/header/bottom_location.png'
import jumpArrow from '../../images/header/jump-arrow.png'


(function (window) {

    var html = `<header>
                    <div class="masklogin"></div>
                    <a href="./index.html" class="logo">
                        <img src="${logo}" alt="">
                    </a>
                    <div class="location">
                        <img src="${location}">
                        <span>Singapore</span>
                    </div>
                    <i class="lg-icon lg-icon-menu"></i>
                    <i class="lg-icon lg-icon-close"></i>
                </header>
                <div class="menu">
                    <ul class="lg-menu">
                        <li><a href="./freeassessment.html">Free Chinese Assessment</a></li>
                        <li><a href="./methodology.html">The LingoAce Methodology</a></li>
                        <li><a href="./studentexp.html">The Student Experience</a></li>
                        <li><a href="./teacher.html">LingoAce Teachers</a></li>
                        <li><a href="./difference.html">The LingoAce Difference</a></li>
                        <li><a href="./parents.html">For Parents</a></li>
                        <li><a href="./referfriend.html">Refer A Friend</a></li>
                        <li><a href="./login.html">Sign up</a></li>
                    </ul>
                    <div class="btn-box">
                        <button class="btn1 btn-login">LOGIN</button><button class="btn-register">REGISTER</button>
                    </div>
                </div>`;
    //登录
    var signinhtml = `
    <form class="masksign" action="https://member.lingoace.com/accounts/login/" method="POST" id="login" >
        <p class="sgintitle"><span class="close"><img src="${close}" /></span><span>Login</span><span class="signup">Sign up</span></p>
        <p class="emailipt"><input type="text" class="username"  name="login" placeholder="Username"><span class="emailtextnone"></span></p>
        <p class="emailwrong">The account password is wrong or does not exist</p>
        <p class="passwordipt"><input type="password" name="password" class="passwordinput passwordlogin" placeholder="Password"><img class="paswordnone" src="" alt=""></p>
        <p class="passwordwrong">The account password is wrong or does not exist</p>
        <div class="pasword">
            <p>
                <img class="paswordnone" src="${remember}" alt="">
                <span>Remember me</span>
            </p>
                
            <p class="forgotpassword"><a href="https://member.lingoace.com/accounts/password/reset/" target="_blank">Forgot Password?</a></p>
        </div>
        <button type="submit" class="loginbtn loginjump">Login</button>
    </form>
    `

    //注册
    var registerhtml = `<form class="masksign" action="https://member.lingoace.com/accounts/signup/" id="signup_form" method="post">
        <p class="sgintitle"><span class="close"><img src="${close}" /></span><span>Sign up</span><span class="login">Login</span></p>
        <p class="usernameipt"><input type="text" class="username" name="username" placeholder="Username"><span class="emailtextnone usernamepic"></span></p>
        <p class="emailipt"><input type="text" class="email" name="email" placeholder="Email"><span class="emailtextnone emailpic"></span></p>
        <p class="passwordipt"><input class="passwordinput" type="password" name="password1" placeholder="Password"><img class="paswordnone" src="" alt=""></p>
        <input type="hidden" name="password2" class="password2" />
        <button type="submit" class="loginbtn registerbtn">Sign up</button>
        <div class="gotomethod">
            <span class="text">By Signing up,you hereby agree to</span><a href="./rule.html" class="jump Lawsandregulations"> LingoAce Course Agreement /Terms of Use</a href="./rule.html"><span class="text"> and </span><a href="./rule.html" class="jump Lawsandregulations">Privacy Policy</a href="./rule.html">
        </div>
    </form>`

    //底部弹框
    var bottomModal = `
        <div class="bottom-modal">
            <div class="bottom-item" id="international">
                <div>
                    <img src="${bottomLocation}" alt="">International - ENG
                </div>
                <img src="${jumpArrow}" alt="">
            </div>
            <div class="bottom-item" id="singapore">
                <div>
                    <img src="${bottomLocation}" alt="">Singapore -ENG
                </div>
                <img src="${jumpArrow}" alt="">
            </div>
        </div>
    `

    var header = document.createElement('div');
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

    var isRememberUser = true

    document.querySelector(".lg-icon-menu").onclick = function () {
        this.style.display = "none"
        document.querySelector(".lg-icon-close").style.display = "inline-block"
        document.querySelector(".menu").style.display = "inline-block"
        stop();
    }

    document.querySelector(".lg-icon-close").onclick = function () {
        this.style.display = "none"
        document.querySelector(".lg-icon-menu").style.display = "inline-block"
        document.querySelector(".menu").style.display = "none"
        move();
    }

    window.showRegister = function () {
        if (location.pathname != '/mobile/login.html') {
            window.location = "/mobile/login.html"
            return 
        }

        document.querySelector(".masklogin").style.display = "block"
        document.querySelector(".masklogin").innerHTML = registerhtml
        document.querySelector(".close img").onclick = function () {
            document.querySelector(".masklogin").style.display = "none"
        }
        document.querySelector(".login").onclick = function () {
            showLogin()
        }
    }

    function showLogin() {
        if (location.pathname != '/mobile/login.html') {
            window.location = "/mobile/login.html"
            return 
        }


        document.querySelector(".masklogin").style.display = "block"
        document.querySelector(".masklogin").innerHTML = signinhtml
        document.querySelector(".close img").onclick = function () {
            document.querySelector(".masklogin").style.display = "none"
        }
        document.querySelector(".signup").onclick = showRegister;

        document.querySelector(".pasword p img").onclick = function () {
            isRememberUser = !isRememberUser
            isRememberUser ? this.setAttribute("src", remember) : this.setAttribute("src", no_remember)
        }

    }

    function showBottomModal() {
        stop()
        document.querySelector(".masklogin").style.display = "block"
        document.querySelector(".masklogin").innerHTML = bottomModal
        document.querySelector(".bottom-modal").onclick = function(e) {
            e.stopPropagation()
        }
        document.querySelector("#international").onclick = function() {
            window.location = "https://www.lingoace.com?from=sg"
            return 
        }
        document.querySelector("#singapore").onclick = function() {
            document.querySelector(".masklogin").style.display = "none"
            move()
        }
        document.querySelectorAll(".bottom-item").forEach(function(item) {
            item.addEventListener("touchstart", function() {
                this.style.background = "#F4F4F4"
            })
            item.addEventListener("touchend", function() {
                this.style.background = "#fff"
            })
        })
    }

    document.querySelector(".btn-login").onclick = showLogin;
    document.querySelector(".btn-register").onclick = showRegister;
    document.querySelector(".location").onclick = showBottomModal
    document.querySelector(".masklogin").onclick = function() {
        this.style.display = "none"
    }

    var mo = function (e) { e.preventDefault(); };
    function stop() {
        document.body.style.overflow = 'hidden';
        document.addEventListener("touchmove", mo, { passive: false });//禁止页面滑动
    }

    /***取消滑动限制***/
    function move() {
        document.body.style.overflow = '';//出现滚动条
        document.removeEventListener("touchmove", mo, { passive: false });
    }

})(window);
