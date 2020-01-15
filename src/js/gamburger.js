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
    const sectionElement = document.querySelectorAll('section')
    const mobileMenuToggle = document.querySelector('#nav-menu-toggle')
    const mobileMenu = document.querySelector('.aside')

    mobileMenuToggle.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            mobileMenu.classList.add('show')
            for (let i = 0; i < sectionElement.length; i++) {
                sectionElement[i].classList.add('blur')
            }

        } else {
            mobileMenu.classList.remove('show')
            for (let i = 0; i < sectionElement.length; i++) {
                sectionElement[i].classList.remove('blur')
            }
        }
    })

    //modal
    const bodyElement = document.querySelector('body');
    const callBtn = document.querySelector('.aside-footer-callback');
    const priceBtn = document.querySelector('.aside-footer-price');
    const callModal = document.querySelector('.modal-call');
    const priceModal = document.querySelector('.modal-price');
    const closeModal1 = document.querySelector('.close-modal1');
    const closeModal2 = document.querySelector('.close-modal2');

    callBtn.addEventListener('click', function () {
        showedModal(callModal, priceModal);

    });
    if (closeModal1) {
        closeModal1.addEventListener('click', function () {
            closedModal(callModal);
        })

    }
    priceBtn.addEventListener('click', function () {
        showedModal(priceModal, callModal);
    });
    if (closeModal2) {
        closeModal2.addEventListener('click', function () {
            closedModal(priceModal);
        })
    }

    function showedModal(el1, el2) {
        el1.classList.add('show');
        el2.classList.remove('show');
        bodyElement.classList.add('noscroll');

    }

    function closedModal(el) {
        el.classList.remove('show');
        bodyElement.classList.remove('noscroll');
        mobileMenuToggle.classList.remove('active');
        for (let i = 0; i < sectionElement.length; i++) {
            sectionElement[i].classList.remove('blur');
        }
    }


    //resize
    window.addEventListener('resize', function () {

        mobileMenu.classList.remove('show');
        mobileMenuToggle.classList.remove('active');
        for (let i = 0; i < sectionElement.length; i++) {
            sectionElement[i].classList.remove('blur')
        }

    })
})();