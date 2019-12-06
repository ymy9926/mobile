(function() {
    var trustpilot = `
    <!-- TrustBox widget - Carousel -->
    <div class="trustpilot-widget" data-locale="en-US" data-template-id="53aa8912dec7e10d38f59f36" data-businessunit-id="5d27000b4739100001b1f28f" data-style-height="130px" data-style-width="74%" data-theme="light" data-stars="1,2,3,4,5">
    <a href="https://www.trustpilot.com/review/lingoace.com" target="_blank" rel="noopener">Trustpilot</a>
    </div>`;

    var trustpilotEle = document.createElement('div');
    trustpilotEle.attributes['class'] = 'trustpilot';
    trustpilotEle.innerHTML = trustpilot;
    document.body.appendChild(trustpilotEle);
  })()