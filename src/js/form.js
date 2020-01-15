$(document).ready(function () {
    //-PLACEHOLDER
    const formRows = document.querySelectorAll('.form-row')
    const formRowsInputs = document.querySelectorAll('input')

    for (let i = 0; i < formRows.length; i++) {

        formRows[i].addEventListener('click', function () {
            const placeholderElement = this.querySelector('.form-row__fake-placeholder')
            placeholderElement.classList.add('active')

        })

    }

    for (let i = 0; i < formRowsInputs.length; i++) {
        formRowsInputs[i].addEventListener('blur', function () {
            const thisFakePlaceholder = this.nextElementSibling
            if (this.value == '') {
                thisFakePlaceholder.classList.remove('active')
            }
            if (this.value.length > 0) {
                this.classList.add('valid')
            }
        })

    }

    document.querySelector('textarea').addEventListener('blur', function () {

        if (this.value.length > 0) {
            this.classList.add('valid')
        }
    })
    const callBtn = document.querySelector('.aside-footer-callback')
    const priceBtn = document.querySelector('.aside-footer-price')
    const callModal = document.querySelector('.modal-call')
    const closeModal = document.querySelector('.close-modal')

    callBtn.addEventListener('click', function () {
        callModal.classList.add('show')
    })

    closeModal.addEventListener('click', function () {
        callModal.classList.remove('show')
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

})