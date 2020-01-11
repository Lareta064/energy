$(document).ready(function () {
    $('.benefits-carousel').owlCarousel({
        loop: true,
        nav: true,
        margin: 40,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1366: {
                items: 3
            }
        }
    });
    // let gumburger = document.querySelector('.fa-bars');
    // let aside = document.querySelector('.aside');

    // gumburger.addEventListener('click', function () {
    //     aside.classList.toggle('show');
    // });
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
            console.log('555');
            for (let j = 0; j < mobCategoryDrop.length; j++) {
                mobCategoryDrop[j].classList.remove('active');
            }
            this.nextElementSibling.classList.add('active');

        })

    }
    // прокрутка страницы
    const sectionScroll = document.querySelectorAll('.main-section');
    window.addEventListener("wheel", function (e) {
        for (let i = 0; i < sectionScroll.length; i++) {
            // const visibleSection =
            console.log(sectionScroll[i].getBoundingClientRect().top);
        }
        // console.log(e.deltaY)
    });


})