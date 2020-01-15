$(document).ready(function () {
    $('.benefits-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        centerPadding: '60px',
        autoplay: true,
        prevArrow: '<span class="slick-arrow--custom-left"><i class="fas fa-angle-left"></span>',
        nextArrow: '<span class="slick-arrow--custom-right" ><i class="fas fa-angle-right"></span>'

    });

    //читать далее блок Партнеры
    const btnMoreInfo = document.querySelector('.more-info');
    const hideInfo = document.querySelector('.section-paragraph--hide');

    btnMoreInfo.addEventListener('click', function () {
        hideInfo.style.display = 'block';
        this.style.display = 'none'
    })

    //подкатегории в моб меню
    const mobCategory = document.querySelectorAll('.mobile-item-category');
    const mobCategoryDrop = document.querySelectorAll('.menu-mobile-drop');
    const btnDropClose = document.querySelectorAll('.close-drop');

    for (let i = 0; i < btnDropClose.length; i++) {
        btnDropClose[i].addEventListener('click', function () {
            this.parentElement.classList.remove('active');
        })
    }
    for (let i = 0; i < mobCategory.length; i++) {

        mobCategory[i].addEventListener('click', function () {

            for (let j = 0; j < mobCategoryDrop.length; j++) {
                mobCategoryDrop[j].classList.remove('active');
            }
            this.nextElementSibling.classList.add('active');

        })

    }

    // search
    let searchForm = document.getElementById('searchform');
    let searchHeader = document.querySelector('.header-search');
    let searchInput = document.querySelector('.header-form-input');
    searchForm.addEventListener('click', function (e) {
        e.preventDefault();
        $target = $(e.target);
        if (searchInput.classList.contains('search-open') && searchInput.value == '' && !$target.hasClass('header-form-input')) {
            searchInput.classList.remove('search-open');
            searchForm.classList.remove('search-open');
            searchHeader.classList.remove('header-search-open');
        } else if (searchInput.classList.contains('search-open') && searchInput.value != '') {
            searchForm.submit();
        } else {
            searchInput.classList.add('search-open');
            searchForm.classList.add('search-open');
            searchHeader.classList.add('header-search-open');

        }
    });
    // const bodyElement = document.querySelector('body')
    // const callBtn = document.querySelector('.aside-footer-callback')
    // const priceBtn = document.querySelector('.aside-footer-price')
    // const callModal = document.querySelector('.modal-call')
    // const closeModal = document.querySelector('.close-modal')

    // callBtn.addEventListener('click', function () {

    //     callModal.classList.add('show')
    //     bodyElement.classList.add('noscroll')
    // })

    // closeModal.addEventListener('click', function () {
    //     callModal.classList.remove('show')
    //     bodyElement.classList.remove('noscroll')
    // })
    // closeModal.addEventListener('click', function () {
    //     callModal.classList.remove('show')
    //     bodyElement.classList.remove('noscroll')
    // })

    // //-tabs Products
    // const tabsToggleTable = document.querySelector('#tabOne');
    // const tabsToggleDescrip = document.querySelector('#tabTwo');
    // const tabsTableContent = document.querySelector('#tabOneContent');
    // const tabsDescripContent = document.querySelector('#tabTwoContent');

    // tabsToggleTable.addEventListener('click', function () {
    //     console.log('456');
    //     this.classList.add('active');
    //     tabsToggleDescrip.classList.remove('active');
    //     tabsTableContent.classList.add('active');
    //     tabsDescripContent.classList.remove('active');

    // });
    // tabsToggleDescrip.addEventListener('click', function () {
    //     console.log('789');
    //     this.classList.add('active');
    //     tabsToggleTable.classList.remove('active');
    //     tabsDescripContent.classList.add('active');
    //     tabsTableContent.classList.remove('active');

    // });




})