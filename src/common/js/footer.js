/* eslint-disable */
(function () {

    var trustpilot = `
    <!-- TrustBox widget - Carousel -->
    <div class="trustpilot-widget" data-locale="en-US" data-template-id="53aa8912dec7e10d38f59f36" data-businessunit-id="5d27000b4739100001b1f28f" data-style-height="130px" data-style-width="74%" data-theme="light" data-stars="1,2,3,4,5">
    <a href="https://www.trustpilot.com/review/lingoace.com" target="_blank" rel="noopener">Trustpilot</a>
    </div>`;

    var trustpilotEle = document.createElement('div');
    trustpilotEle.attributes['class'] = 'trustpilot';
    trustpilotEle.innerHTML = trustpilot;
    document.body.appendChild(trustpilotEle);

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
        <p class="copy">Copyright © 2019 LingoAce</p>`;

    var footer = document.createElement('footer');
    footer.innerHTML = html;
    document.body.appendChild(footer);

    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    document.body.appendChild(script);


})();