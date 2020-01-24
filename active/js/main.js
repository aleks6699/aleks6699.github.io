$(function() {
  let heightHeader = $("header").innerHeight();
  let posScroll = $(window).scrollTop();

  //   Fixed HEader
  $(window).on("scroll load resize", function() {
    heightHeader = $("header").innerHeight();
    posScroll = $(window).scrollTop();

    posScroll = $(this).scrollTop();
    if (posScroll > heightHeader) {
      $(".header__inner").addClass("fixed");
    } else {
      $(".header__inner").removeClass("fixed");
    }
  });

  //   Scroal Smooth

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault(); // отменяет стандартое поведение ссылки
    let elementID = $(this).data("scroll");
    let elementOffset = $(elementID).offset().top; // отступ данного елемента от верха
    $(".nav__link").removeClass("active");
    $("html, body").animate(
      {
        scrollTop: elementOffset - 70
      },
      1000
    );
  });

  $("#navToggle").on("click", function(event) {
    event.preventDefault();
    $(".nav__link").toggleClass("active");
  });

  $(".slider__reviews").slick({
    infinite: true,
    slidesToShow: 1,
    fade: true,
    arrows: false,
    dots: true
  });
});
