/* eslint-disable */
(function () {
    var html = `<span>顶部</span>`;
    var header = document.createElement('header');
    header.innerHTML = html;


    var layout = document.querySelector('.lg-layout');
    layout.parentNode.insertBefore(header, layout);
})();