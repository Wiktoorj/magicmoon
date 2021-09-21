//
//pop up
$('button').on('click', function () {
    $('section.main, section.popup, div.modal').addClass('active')
})

$('i.far').on('click', function () {
    $('section.main, section.popup, div.modal').removeClass('active')
})

//
//kolo losu
$('.btn_start').on('click', function () {
    $('div.hand').addClass("start");
    if ($('div.hand').hasClass('stop_button')) {
        $(this).text('stop')
        $('div.hand').removeClass('stop_button');
    } else {
        $(this).text('start')
        $('div.hand').addClass('stop_button');
    }
})

//
//burger
$('i.fas').on('click', function () {
    $('.burger').toggleClass('active');
    $('i.fas').toggleClass('hide');
})

//
//nav animate scroll window
$('nav a').on('click', function () {
    const goToSection = "#" + $(this).attr('class')
    $('body, html').animate({
            scrollTop: $(goToSection).offset().top
        },
        500)
    $('.burger').toggleClass('active');
    $('i.fas').toggleClass('hide');
})

//
//pasek top info which section
function changeText() {
    const wielkoscSkrola = $(document).scrollTop() + 1;

    const wysokoscSekcji = $('.team').outerHeight(true);
    const wysokoscSekcji1 = $('.s1').outerHeight(true);
    const wysokoscSekcji2 = $('.s2').outerHeight(true);
    const wysokoscSekcji3 = $('.s3').outerHeight(true);
    const wysokoscSekcji4 = $('.s4').outerHeight(true);

    const odlegloscOdPoczatkuSekcji2w = $('.s2').offset().top;
    const odlegloscOdPoczatkuSekcji3w = $('.s3').offset().top;
    const odlegloscOdPoczatkuSekcji4w = $('.s4').offset().top;

    if (wielkoscSkrola < wysokoscSekcji) {
        $('div.info').removeClass('infon');
    } else if (wielkoscSkrola < wysokoscSekcji1) {
        $('div.info').addClass('infon');
        $('div.info').text('o mnie')
    } else if (wielkoscSkrola < wysokoscSekcji2 + odlegloscOdPoczatkuSekcji2w) {
        $('div.info').addClass('infon')
        $('div.info').text('hobby')
    } else if (wielkoscSkrola < wysokoscSekcji3 + odlegloscOdPoczatkuSekcji3w) {
        $('div.info').addClass('infon')
        $('div.info').text('plany')
    } else if (wielkoscSkrola < wysokoscSekcji4 + odlegloscOdPoczatkuSekcji4w) {
        $('div.info').addClass('infon')
        $('div.info').text('social media')
    } else {
        $('div.info').addClass('infon')
        $('div.info').text('inne')
    }


    //
    //section article slide left/right animation

    //download articles
    const $art2 = $('.art2');
    const $art3 = $('.art4');
    const $art4 = $('.art3');
    const $art5 = $('.art5');
    const $art6 = $('.art6');
    const $art7 = $('.art7');

    //download quotes
    const $op1 = $('.op1');
    const $op2 = $('.op2');
    const $op3 = $('.op3');
    const $op4 = $('.op4');

    //wysokosc okna przegladarki
    const windowHeight = $(window).height();

    //pozycja skrolla
    const scrollP = $(window).scrollTop();

    //wysokosc elementu
    const art2height = $art2.outerHeight(true);
    const art3height = $art3.outerHeight(true);
    const art4height = $art4.outerHeight(true);
    const op1height = $op1.outerHeight(true);
    const op2height = $op2.outerHeight(true);
    const op3height = $op3.outerHeight(true);
    const op4height = $op4.outerHeight(true);

    //wysokosc od poczatku strony
    const art2FromTop = $art2.offset().top;
    const art3FromTop = $art3.offset().top;
    const art4FromTop = $art4.offset().top;
    const op1FromTop = $op1.offset().top;
    const op2FromTop = $op2.offset().top;
    const op3FromTop = $op3.offset().top;
    const op4FromTop = $op4.offset().top;

    //instrukcaj: dodanie klasy active 

    if (scrollP > art2FromTop + art2height / 2 - windowHeight) {
        $art2.addClass('active');
    }

    if (scrollP > art3FromTop + art3height / 2 - windowHeight) {
        $art3.addClass('active');
    }

    if (scrollP > art4FromTop + art4height / 2 - windowHeight) {
        $art4.addClass('active');
    }
    
    if (scrollP > op1FromTop + op1height / 4 - windowHeight) {
        $op1.addClass('active');
    }

    if (scrollP > op2FromTop + op2height / 4 - windowHeight) {
        $op2.addClass('active');
    }

    if (scrollP > op3FromTop + op3height / 4 - windowHeight) {
        $op3.addClass('active');
    }

    if (scrollP > op4FromTop + op4height / 4 - windowHeight) {
        $op4.addClass('active');
    }
    if (scrollP < 100) {
        $('article').removeClass('active');
    }
}

$(document).on('scroll', changeText)




//
//header slider 

let Sorce = 0;
const imgColorHtml = document.querySelector('.color');
const imgGrayHtml = document.querySelector('.gray');
const h1Html = document.querySelector('.member h1');
const h2Html = document.querySelector('.member h2');

//tablice z wartosciami do podmienienia
const imgColor = ['img/s1.png', 'img/s2.png', 'img/s3.png'];
const imgGray = ['img/s1a.png', 'img/s2a.png', 'img/s3a.png'];
const h1 = ['Jackowiak', 'Future', '50 shades'];
const h2 = ['Wiktor', 'Front End Developer', 'of ME'];

const OneOfAll = imgColor.length;
const TimeImg = 4000;

function changeImg() {
    Sorce++;
    if (Sorce == OneOfAll) Sorce = 0;
    imgColorHtml.src = imgColor[Sorce];
    imgGrayHtml.src = imgGray[Sorce];
    h1Html.textContent = h1[Sorce];
    h2Html.textContent = h2[Sorce];
}

setInterval(changeImg, TimeImg);