function openCoin(id1,id2){
    document.getElementById(id1).style.display='none';
    document.getElementById(id2).style.display='block';
};
function hideCoin(id1,id2){
    document.getElementById(id1).style.display='block';
    document.getElementById(id2).style.display='none';
};

$(document).ready(function(){
    $('.my-slider').slick({
        arrows: true,
        dots: false,
        infinite: false,
        slidesToShow: 18,
        slidesToScroll: 1,
        prevArrow: $('#prev'),
        nextArrow: $('#next'),
        responsive:[
            {
                breakpoint:1600,
                settings:{
                    slidesToShow: 17,
                }
            },
            {
                breakpoint:1500,
                settings:{
                    slidesToShow: 15,
                }
            },
            {
                breakpoint:1400,
                settings:{
                    slidesToShow: 14,
                }
            },
            {
                breakpoint:1300,
                settings:{
                    slidesToShow: 12,
                }
            },
            {
                breakpoint:1200,
                settings:{
                    slidesToShow: 10,
                }
            },
            {
                breakpoint:1000,
                settings:{
                    slidesToShow: 8,
                }
            }
        ]
    });
});

$(function(){
    $('a[href*=\\#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = (window.innerWidth<980) ? $target.offset().top - 150 : $target.offset().top - 10;
                $('html,body').animate({scrollTop: targetOffset}, 500);//скорость прокрутки
                return false;
            }
        }
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 11,
    centeredSlides: false,
    grabCursor: true,
    breakpoints: {
        700: {
            slidesPerView: 9,
        },
        580: {
            slidesPerView: 8,
        },
        480: {
            slidesPerView: 7,
        },
        1: {
            slidesPerView: 5,
        },
    }
});

function setHeaderHeight(isShow) {
    if(window.outerWidth > 980){
        var height = isShow ? '92' : $(".news-info").height() + 60;
        $('.news-hide').css({
            height:92+'px'
        });
    }else{
        var height = isShow ? '70' : $(".news-info").height() + 60;
        $('.news-hide').css({
            height:70+'px'
        });
    }
    $('.news-hide-show').css({
        height:height+'px'
    });
}

window.addEventListener('scroll', function() {
        var elementPosition = document.getElementsByClassName('sticky-nav-box')[0].getBoundingClientRect().top;
        if (elementPosition <= 0 && window.innerWidth <= 980) {
            document.getElementsByClassName('sticky-nav-background')[0].style.display = 'block';
        }
        else {
            document.getElementsByClassName('sticky-nav-background')[0].style.display = 'none';
        }
});

document.addEventListener("DOMContentLoaded", function() {
    // Получаем все элементы с классом "item"
    var items = document.querySelectorAll(".slide-image");
    console.log('asdasd');

    // Добавляем обработчик события клика для каждого элемента
    items.forEach(function(item) {
        item.addEventListener("click", function() {
            // Удаляем класс "selected" у всех элементов
            items.forEach(function(item) {
                item.classList.remove("slide-image-active");
            });

            // Добавляем класс "selected" только к элементу, по которому кликнули
            item.classList.add("slide-image-active");
        });
    });
});