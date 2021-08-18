$(window).scroll(function() {
    var el = $('.skill_per');
    if ($(this).scrollTop() > el.offset().top - 500) {
        $(function() {

            $(".skill_per").each(function() {
                $this = $(this);
                var per = $(this).attr("per");
                $this.css("width", per + "%");
                $this.find(".value").text(per + "%").css("opacity", "1");
            });

        });
    }
});

document.querySelector('.header__list-btn').addEventListener('click', function() {
    document.querySelector('.modal').classList.add('open');
});
document.querySelector('.burger__list-btn').addEventListener('click', function() {
    document.querySelector('.modal').classList.add('open');
});

document.querySelector('#close').addEventListener('click', function() {
    document.querySelector('.modal').classList.remove('open');
});



document.querySelector('#request__btn').addEventListener('click', function() {
    document.querySelector('.modal__request').classList.add('open');
});

document.querySelector('#close__btn').addEventListener('click', function() {
    document.querySelector('.modal__request').classList.remove('open');
});



document.querySelector('.input__form-btn').addEventListener('click', function() {
    document.querySelector('.modal__compare').classList.add('open');
});

document.querySelector('#compare__close').addEventListener('click', function() {
    document.querySelector('.modal__compare').classList.remove('open');
});



document.querySelector('#ration__btn').addEventListener('click', function() {
    document.querySelector('.modal__order').classList.add('open');
});

document.querySelector('#order__close').addEventListener('click', function() {
    document.querySelector('.modal__order').classList.remove('open');
});


/*accordeon*/
$(function() {
        var Accordion = function(el, multiple) {
            this.el = el || {};
            // more then one submenu open?
            this.multiple = multiple || false;

            var dropdownlink = this.el.find('.dropdownlink');
            dropdownlink.on('click', { el: this.el, multiple: this.multiple },
                this.dropdown);
        };

        Accordion.prototype.dropdown = function(e) {
            var $el = e.data.el,
                $this = $(this),
                //this is the ul.submenuItems
                $next = $this.next();

            $next.slideToggle();
            $this.parent().toggleClass('open');

            if (!e.data.multiple) {
                //show only one menu at the same time
                $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
            }
        }

        var accordion = new Accordion($('.accordion-menu'), false);
    })
    /*accordeon end*/

/*partners slides*/
let slideTop = 0;
const partnersCards = document.querySelector('.partners__cards');

document.querySelector('.partners__slider-next').addEventListener('click', function() {
    slideTop = slideTop + 305;
    if (slideTop > 610) {
        slideTop = 0;
    }
    partnersCards.style.top = -slideTop + 'px';
});
document.querySelector('.partners__slider-prev').addEventListener('click', function() {
    slideTop = slideTop - 305;
    if (slideTop < 0) {
        slideTop = 610;
    }
    partnersCards.style.top = -slideTop + 'px';
});
/*partners slides end*/


/*slides start*/
let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider__line');

const isMobile = () => window.innerWidth <= 320;

document.querySelector('.slider__next').addEventListener('click', function() {
    if (isMobile()) {
        offset = offset + 310;
        if (offset > 930) offset = 0;
    } else {
        offset = offset + 500;
        if (offset > 500) offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});
document.querySelector('.slider__prev').addEventListener('click', function() {
    if (isMobile()) {
        offset = offset - 310;
        if (offset < 0) offset = 930;
    } else {
        offset = offset - 500;
        if (offset < 0) offset = 500;
    }
    sliderLine.style.left = -offset + 'px';
});
/*slides end*/

document.querySelector('.burger__menu').addEventListener('click', function() {
    var divs = document.querySelectorAll('.header__nav-lists, .header__nav-list, .burger__list-btn, .burger__menu, .header__nav-bg');
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.toggle('menu__active');
    }
});