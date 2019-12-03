/* eslint-disable */
(function () {
    var html = `
        <div class="lg-icon lg-logo"></div>
        <p class="info">
            LingoAce is the premiere provider of online Chinese classes
            for students aged 6-15. Our mission is to help make the world
            a better place through the joy of language learning.
        </p>
        <ul class="icon-warpper">
            <li><a href="https://apps.apple.com/cn/app/lingoace/id1155911183"><i class="lg-icon lg-icon-appstore"></i></a></li>
            <li><a href="http://www.kidsafeseal.com/certifiedproducts/lingoace.html"><i class="lg-icon lg-icon-kidsafe"></i></a></i></li>
            <li></li>
        </ul>
        <ul class="footer-menus">
            <li><a href="./contactus.html"><i></i> Contact Us</a></li>
            <li><a href="./rule.html"><i></i> Terms &amp; Conditions</a></li>
        </ul>
        <p class="copy">Copyright © 2019 LingoAce</p>
    `;
    var footer = document.createElement('footer');
    footer.innerHTML = html;
    document.body.appendChild(footer);
})();