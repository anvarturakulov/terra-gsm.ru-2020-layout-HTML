$(function(){
    if($('ul.category__list').find('li').length > 2){
        $('.show_hide_list').click(function(){
            $('.category__list').not($(this).prev()).removeClass('open__list');
            $(this).toggleClass('active');
            $(this).prev().addClass('open__list');
            $('ul.open__list li:nth-child(n+3)').slideToggle('');
            if ($(this).hasClass('active')) {
                $(this).html('скрыть категорий');
            } else {
                $(this).html('+ '+String($(this).prev().find('li').length-2)+' категорий');
            }
        });
    }else{$('.show_hide_list').hide();}

    $('.header__catalog-dots').click(function(){
        $('ul.header__catalog').toggleClass('open');
    });

    let search__input = document.getElementById('search__input');
    let search__input_two = document.getElementById('search__input-two');
    let search__popup = document.getElementById('search__popup');
    let user__ico_desktop = document.getElementById('user__desktop');
    let user__ico_mobayl = document.getElementById('user__mobayl');
    let drop__menu = document.getElementById('drop__menu');

    function position__popup__search(elem, bl) {
        let coords = elem.getBoundingClientRect();
        bl.style.left = coords.left +"px";
        bl.style.top = coords.bottom + 2+"px";
        bl.style.width = coords.width + "px";
    }

    function position__drop__menu(elem, bl) {
        let coords1 = elem.getBoundingClientRect();
        bl.style.left = coords1.right-170+"px";
        bl.style.top = coords1.bottom +"px";
    }

    user__ico_desktop.onmouseover= function(){
        position__drop__menu(user__ico_desktop,drop__menu);
    };

    user__ico_desktop.onclick= function(){
        $('.drop__menu').toggleClass('open');
    };

    user__ico_mobayl.onmouseover= function(){
        position__drop__menu(user__ico_mobayl,drop__menu);
    };

    user__ico_mobayl.onclick= function(){
        $('.drop__menu').toggleClass('open');
    };

    search__input.oninput = function() {
        if (!$('.search__popup-box').hasClass('open')) {
            position__popup__search(search__input,search__popup);
            $('.search__popup-box').addClass('open');
        }
    };

    search__input.onblur = function() {
        $('.search__popup-box').removeClass('open');
    };
    
    search__input_two.oninput = function() {
        if (!$('.search__popup-box').hasClass('open')) {
            position__popup__search(search__input_two,search__popup);
            $('.search__popup-box').addClass('open');
        }
    };
    search__input_two.onblur = function() {
        $('.search__popup-box').removeClass('open');
    };

    var modal__phone = document.getElementById('modal__phone');
    $('.header__btn-phone').click(function(){
        modal__phone.style.display = "block";
    });
    $('#close__phone').click(function(){
        modal__phone.style.display = "none";
    });

    var modal__login = document.getElementById('modal__login');
    $('.header__btn-login').click(function(){
        modal__login.style.display = "block";
    });
    $('#close__login').click(function(){
        modal__login.style.display = "none";
    });

    var modal__registr = document.getElementById('modal__registr');
    $('#link__reg').click(function(){
        modal__registr.style.display = "block";
        modal__login.style.display = "none";
    });
    $('#close__registr').click(function(){
        modal__registr.style.display = "none";
    });

    $('#link__login').click(function(){
        modal__registr.style.display = "none";
        modal__login.style.display = "block";
    });

    var modal__quest = document.getElementById('modal__quest');
    $('.ask__question-btn').click(function(){
        modal__quest.style.display = "block";
    });
    $('#close__quest').click(function(){
        modal__quest.style.display = "none";
    });



    $(".product__rate").rateYo({
        rating: 4,
        starWidth: "12px",
        readOnly: true
    });
    
    $(".review__rate").rateYo({
        rating: 4,
        starWidth: "19px",
        readOnly: true
    });

    $(".person__rate").rateYo({
        rating: 4,
        starWidth: "18px",
        readOnly: true
    });

    $(".cart__rate").rateYo({
        rating: 4,
        starWidth: "18px",
        readOnly: true
    });

    $('.catalog__category-btn').click(function(){
        $(this).toggleClass('active');
        $('.catalog__category-ul').toggleClass('open-ul');
        if ($(this).hasClass('active')) {
            $(this).html('Скрыть '+String($('.catalog__category-ul').find('li').length-5)+' тегов');
        } else {
            $(this).html('Открыть все '+String($('.catalog__category-ul').find('li').length)+' тегов');
        }
    });

    $(".catalog__view-list").on('click',function(){
        $('.product__item').addClass('list');
        $('.catalog__view-list').removeClass('active');
        $('.catalog__view-box').addClass('active');
    });
    
    $(".catalog__view-box").on('click',function(){
        $('.product__item').removeClass('list');
        $('.catalog__view-box').removeClass('active');
        $('.catalog__view-list').addClass('active');
    });

    
    $(".checkmark").on('click',function(){
        $('.checkmark').not($(this)).removeClass('down');    
        $(this).toggleClass('down');    
    });

    $('.btn__box').on('click',function(){
        $('.header').toggleClass('big');
        $('.top__menu').slideToggle();
    });
    
    
    $('.product__heart').on('click',function(){
        $(this).toggleClass('svg__red');
    });
    
    $('.catalog__filtr-type').on('click',function(){
        $(this).toggleClass('filtr__namearrow');
    });

    $('.nalojeniye__img').on('click',function(){
        $(this).next().slideToggle();
    });

    $(document).ready(function() {
        $(window).scroll(function(){
            var winTop = $(window).scrollTop();
            console.log(winTop);
            if(winTop >= 30){
              $("body").addClass("sticky-header");
            }else{
              $("body").removeClass("sticky-header");
            }
        });
    });
});






