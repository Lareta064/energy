$(document).ready(function () {
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
    let breadcrumbsBlock = document.querySelector('.breadcrumbs');
    searchForm.addEventListener('click', function (e) {
        e.preventDefault();
        $target = $(e.target);
        if (searchInput.classList.contains('search-open') && searchInput.value == '' && !$target.hasClass('header-form-input')) {
            searchInput.classList.remove('search-open');
            searchForm.classList.remove('search-open');
            searchHeader.classList.remove('header-search-open');
            if (window.innerWidth > 991) {
                breadcrumbsBlock.classList.remove('hide');
            }

        } else if (searchInput.classList.contains('search-open') && searchInput.value != '') {
            searchForm.submit();
            if (window.innerWidth > 991) {
                breadcrumbsBlock.classList.remove('hide');
            }
        } else {
            searchInput.classList.add('search-open');
            searchForm.classList.add('search-open');
            searchHeader.classList.add('header-search-open');
            if (window.innerWidth > 991) {
                breadcrumbsBlock.classList.add('hide');
            }

        }
    });


    //-tabs Products
    const tabsToggleTable = document.querySelector('#tabOne');
    const tabsToggleDescrip = document.querySelector('#tabTwo');
    const tabsTableContent = document.querySelector('#tabOneContent');
    const tabsDescripContent = document.querySelector('#tabTwoContent');

    tabsToggleTable.addEventListener('click', function () {

        this.classList.add('active');
        tabsToggleDescrip.classList.remove('active');
        tabsTableContent.classList.add('active');
        tabsDescripContent.classList.remove('active');

    });
    tabsToggleDescrip.addEventListener('click', function () {

        this.classList.add('active');
        tabsToggleTable.classList.remove('active');
        tabsDescripContent.classList.add('active');
        tabsTableContent.classList.remove('active');

    });

})