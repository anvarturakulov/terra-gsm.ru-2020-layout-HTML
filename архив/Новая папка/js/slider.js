$(function(){

    $(".header__slider").slick({
        slidesToShow: 1,
        dots:true,
        arrows:false,
        speed:3000,
        autoplay: true,
        autoplaySpeed: 3000
    });

    
    $(".catalog__slider-sale").on("init", function(event, slick){
        $(".dots__info-box-sale").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
    });

    $(".catalog__slider-new").on("init", function(event, slick){
      $(".dots__info-box-new").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
    });

    $(".catalog__slider-hit").on("init", function(event, slick){
      $(".dots__info-box-hit").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
    });

    $(".catalog__slider-last").on("init", function(event, slick){
      $(".dots__info-box-last").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
    });


    $(".catalog__slider-sale").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots:false,
        arrows:true,
        speed:1000,
        infinite:false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 5,
                }
            },
            {
                breakpoint: 900,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                }
            },
            {
                breakpoint: 750,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                }
            },
            {
                breakpoint: 500,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
            },
            {
              breakpoint: 321,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth:true,
              }
            }
          ]
    });

    $(".catalog__slider-new").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      dots:false,
      arrows:true,
      speed:1000,
      infinite:false,
      responsive: [
          {
              breakpoint: 1400,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
          },
          {
              breakpoint: 1100,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
              }
          },
          {
              breakpoint: 900,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              }
          },
          {
              breakpoint: 750,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
          },
          {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
          },
          {
            breakpoint: 321,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth:true,
            }
          }
        ]
  });

  $(".catalog__slider-hit").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots:false,
    arrows:true,
    speed:1000,
    infinite:false,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
        },
        {
            breakpoint: 1100,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
            }
        },
        {
            breakpoint: 900,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            }
        },
        {
            breakpoint: 750,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
        },
        {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
        },
        {
          breakpoint: 321,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth:true,
          }
        }
      ]
});

$(".catalog__slider-last").slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  dots:false,
  arrows:true,
  speed:1000,
  infinite:false,
  responsive: [
      {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
      },
      {
          breakpoint: 1100,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          }
      },
      {
          breakpoint: 900,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
      },
      {
          breakpoint: 750,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
      },
      {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth:true,
        }
      }
    ]
});



    $(".catalog__slider-sale").on("afterChange", function(event, slick, currentSlide){
        $(".dots__info-box-sale").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
    });

    $(".catalog__slider-new").on("afterChange", function(event, slick, currentSlide){
      $(".dots__info-box-new").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
    });

    $(".catalog__slider-hit").on("afterChange", function(event, slick, currentSlide){
      $(".dots__info-box-hit").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
    });

    $(".catalog__slider-last").on("afterChange", function(event, slick, currentSlide){
      $(".dots__info-box-last").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
    });

    // $('.catalog__slider-prev').on('click',function(){
    //     $('.catalog__slider').slick('slickPrev');
    // });
    // $('.catalog__slider-next').on('click',function(){
    //     $('.catalog__slider').slick('slickNext');
    // });
});






