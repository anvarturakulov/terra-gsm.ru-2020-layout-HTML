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
    let header = document.getElementById('header');
    
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

    function close__popup(){
        $('.search__popup-box').removeClass('open');
    }

    search__input.oninput = function() {
        if (!$('.search__popup-box').hasClass('open')) {
            position__popup__search(search__input,search__popup);
            $('.search__popup-box').addClass('open');
        }
    };
    
    search__input.onblur = function() {
        setTimeout(close__popup, 200);
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

    
    var modal__catalog = document.getElementById('modal__catalog');
    
    var content__catalog = document.getElementById('content__catalog');
    var header__catalog_logo = document.getElementById('header__catalog-logo');

    function position__catalog(elem, bl) {
        let coords1 = elem.getBoundingClientRect();
        bl.style.left = coords1.right-100+"px";
        bl.style.top = coords1.bottom +0+"px";
    }

    $('.header__catalog-logo').mouseenter(function(){
        if (document.documentElement.clientWidth > 485) {
            position__catalog(header__catalog_logo, content__catalog);
            content__catalog.style.display = "block";
        }
    });

    $('.header__catalog-logo').mouseleave(function(){
        content__catalog.style.display = "none";
    });

    $('.header__catalog-logo').click(function(){
        if (document.documentElement.clientWidth > 485) {
            return false;
        }
    });


    $('#content__catalog').mouseenter(function(){
        content__catalog.style.display = "block";
    });

    $('#content__catalog').mouseleave(function(){
        content__catalog.style.display = "none";
    });

    function position__catalog__menu(elem, bl) {
        let coords1 = elem.getBoundingClientRect();
        bl.style.left = 0+"px";
        bl.style.top = coords1.bottom+"px";
    }

    $('.menu__catalog').click(function(){
        if (document.documentElement.clientWidth > 485) {
            position__catalog__menu(menu__catalog, content__catalog);
            content__catalog.style.display = "block";
            return false;
        }
    });

    $('#modal__catalog').click(function(){
        modal__catalog.style.display = "none";
    });

    // check input's
    
    let phone_name_input = document.getElementById('phone-name-input');
    let phone_phone_input = document.getElementById('phone-phone-input');
    let robot1 = document.getElementById('robot1');
    
    $('#phone-form-btn').click(function(){
        let inc = 0;
        if (phone_name_input.value === '') {
            $('.phone-name .modal__input-box').addClass('has-error');
            inc ++;
        } else {
            $('.phone-name .modal__input-box').removeClass('has-error');
        }
        //**
        if (phone_phone_input.value === '') {
            $('.phone-phone .modal__input-box').addClass('has-error');
            inc ++;
        } else {
            $('.phone-phone .modal__input-box').removeClass('has-error');
        }
        //**
        if (robot1.checked  == false) {
            $('.phone-captcha .robot-div').addClass('has-error');
            inc ++;
        } else {
            $('.phone-captcha .robot-div').removeClass('has-error');
        }
        if (inc > 0) {return false}
    });

    let enter_email_input = document.getElementById('enter-email-input');
    let enter_password_input = document.getElementById('enter-password-input');
    let robot2 = document.getElementById('robot2');
    $('#enter-form-btn').click(function(){
        let inc = 0;
        if (enter_email_input.value === '') {
            $('.enter-email .modal__input-box').addClass('has-error');
            inc ++;
        } else {
            $('.enter-email .modal__input-box').removeClass('has-error');
        }
        //**
        if (enter_password_input.value === '') {
            $('.enter-password .modal__input-box').addClass('has-error');
            inc ++;
        } else {
            $('.enter-password .modal__input-box').removeClass('has-error');
        }
        
        if (inc > 0) {
            return false
        }
    });

    let reg_login_input = document.getElementById('reg-login-input');
    let reg_email_input = document.getElementById('reg-email-input');
    let reg_password_input = document.getElementById('reg-password-input');
    let reg_repassword_input = document.getElementById('reg-repassword-input');
    $('#reg-form-btn').click(function(){
        let inc = 0;
        if (reg_login_input.value === '') {
            $('.reg-login .modal__input-box').addClass('has-error');
            inc ++;
        } else {
            $('.reg-login .modal__input-box').removeClass('has-error');
        }
        //**
        if (reg_email_input.value === '') {
            $('.reg-email .modal__input-box').addClass('has-error');
            inc ++;
        } else {
            $('.reg-email .modal__input-box').removeClass('has-error');
        }
        //**
        if (reg_password_input.value === '') {
            $('.reg-password .modal__input-box').addClass('has-error');
            inc ++;
        } else {
            $('.reg-password .modal__input-box').removeClass('has-error');
        }
        //**
        if (reg_repassword_input.value === '') {
            $('.reg-repassword .modal__input-box').addClass('has-error');
            inc ++;
        } else {
            $('.reg-repassword .modal__input-box').removeClass('has-error');
        }
        if (inc > 0) {return false}
    });

    id="quest-form-btn"
    let quest_name_input = document.getElementById('quest-name-input');
    let quest_phone_input = document.getElementById('quest-phone-input');
    let quest_email_input = document.getElementById('quest-email-input');
    let quest_quest_input = document.getElementById('quest-quest-input');
    let robot3 = document.getElementById('robot3');
    
    $('#quest-form-btn').click(function(){
        let inc = 0;
        if (quest_name_input.value === '') {
            $('.quest-name .modal__input-box').addClass('has-error');
            inc ++;
        } else {
            $('.quest-name .modal__input-box').removeClass('has-error');
        }
        //**
        if (quest_phone_input.value === '') {
            $('.quest-phone .modal__input-box').addClass('has-error');
            inc ++;
        } else {
            $('.quest-phone .modal__input-box').removeClass('has-error');
        }
        //**
        if (quest_email_input.value === '') {
            $('.quest-email .modal__input-box').addClass('has-error');
            inc ++;
        } else {
            $('.quest-email .modal__input-box').removeClass('has-error');
        }
        //**
        if (quest_quest_input.value === "") {
            $('.quest-quest .modal__input-box').addClass('has-error');
            inc ++;
        } else {
            $('.quest-quest .modal__input-box').removeClass('has-error');
        }
        //**
        if (robot3.checked  == false) {
            $('.quest-captcha .robot-div').addClass('has-error');
            inc ++;
        } else {
            $('.quest-captcha .robot-div').removeClass('has-error');
        }
        if (inc > 0) {return false}
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
        $('.top__menu').toggleClass('open');
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
            //console.log(winTop);
            if(winTop >= 30){
              $("body").addClass("sticky-header");
              if ($('.header').hasClass('big')) {
                // $('.header').toggleClass('big');
                // $('.top__menu').toggleClass('open');
              }
            }else{
              $("body").removeClass("sticky-header");
              //$(".header__top").removeClass("visible-no");
            }
        });
    });
});






