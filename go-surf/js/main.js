$(function() {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows_left" src="./img/arrows-left.png" alt=""></img>',
    nextArrow:
      '<img class="slider-arrows slider-arrows_right" src="./img/arrows-right.png" alt=""></img>',

    asNavFor: ".slider-dotshead"
  });

  $(".slider-dotshead").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".header__slider",

    responsive: [
      {
        breakpoint: 961,
        settings: "unslick"
      }
    ]
  });
  $(".surf-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slider-arrows slider-arrows_left" src="./img/arrows-left.png" alt=""></img>',
    nextArrow:
      '<img class="slider-arrows slider-arrows_right" src="./img/arrows-right.png" alt=""></img>',

    asNavFor: ".slider-map",
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  });

  $(".slider-map").slick({
    slidesToShow: 8,
    slidesToScroll: 8,
    arrows: false,
    focusOnSelect: true,
    asNavFor: ".surf-slider",
    responsive: [
      {
        breakpoint: 1103,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      }
    ]
  });
  $(".holder__slider, .shop__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    infinite: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows_left" src="./img/arrows-left.png" alt=""></img>',
    nextArrow:
      '<img class="slider-arrows slider-arrows_right" src="./img/arrows-right.png" alt=""></img>'
  });

  jQuery(
    '<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg"></div><div class="quantity-button quantity-down"><img src="img/minus.svg"></div></div>'
  ).insertAfter(".quantity input");
  jQuery(".quantity").each(function() {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });
  $(".quantity-button").on("click", function() {
    let summ =
      $(".nights").val() * $(".summ").data("nights") +
      ($(".guests").val() - 1) * $(".summ").data("guests");

    $(".summ").html("$" + summ);
  });

  let summ =
    $(".nights").val() * $(".summ").data("nights") +
    ($(".guests").val() - 1) * $(".summ").data("guests");

  $(".summ").html("$" + summ);

  $(".surfboard-box__circle").on("click", function() {
    $(this).toggleClass("active");
  });

  $(".menu-btn").on("click", function() {
    $(".menu").toggleClass("active");
  });
  new WOW().init();
});
