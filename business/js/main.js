$(function() {
  $(".intro__slider").slick({
    infinite: true,
    fade: true,
    dots: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows_left" src="./img/arrows-left.png" alt=""></img>',
    nextArrow:
      '<img class="slider-arrows slider-arrows_right" src="./img/arrows-right.png" alt=""></img>',
    responsive: [
      {
        breakpoint: 655,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $(".testimonials__slider").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 902,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".burger").on("click", function() {
    $(".menu, ").toggleClass("active");
  });

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault(); // отменяет стандартое поведение ссылки
    let elementID = $(this).data("scroll");
    let elementOffset = $(elementID).offset().top; // отступ данного елемента от верха
     $(".menu").removeClass(".active");

    $("html, body").animate(
      {
        scrollTop: elementOffset - 70
      },
      1000
    );
  });
});
