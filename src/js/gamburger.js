(function () {

    "use strict";

    var toggles = document.querySelectorAll(".cmn-toggle-switch");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            (this.classList.contains("active") === true) ? this.classList.remove("active"): this.classList.add("active");
        });
    }
    //-показать мобильное меню
    const bodyElement = document.querySelector('body')
    const mobileMenuToggle = document.querySelector('#nav-menu-toggle')
    const mobileMenu = document.querySelector('.aside')

    mobileMenuToggle.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            mobileMenu.classList.add('show')
            // bodyElement.classList.add('noscroll')

        } else {
            mobileMenu.classList.remove('show')
            // bodyElement.classList.remove('noscroll')
        }
    })

    window.addEventListener('resize', function () {

        mobileMenu.classList.remove('show');
        mobileMenuToggle.classList.remove('active');

    })
})();