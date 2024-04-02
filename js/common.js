jQuery(document).ready(function ($) {
  // document start
  // Navbar
  $("<span class='clickD'></span>").insertAfter(
    ".navbar-nav li.menu-item-has-children > a"
  );
  $(".navbar-nav li .clickD").click(function (e) {
    e.preventDefault();
    var $this = $(this);
    if ($this.next().hasClass("show")) {
      $this.next().removeClass("show");
      $this.removeClass("toggled");
    } else {
      $this.parent().parent().find(".sub-menu").removeClass("show");
      $this.parent().parent().find(".toggled").removeClass("toggled");
      $this.next().toggleClass("show");
      $this.toggleClass("toggled");
    }
  });

  $(window).on("resize", function () {
    if ($(this).width() < 1025) {
      $("html").click(function () {
        $(".navbar-nav li .clickD").removeClass("toggled");
        $(".toggled").removeClass("toggled");
        $(".sub-menu").removeClass("show");
      });
      $(document).click(function () {
        $(".navbar-nav li .clickD").removeClass("toggled");
        $(".toggled").removeClass("toggled");
        $(".sub-menu").removeClass("show");
      });
      $(".navbar-nav").click(function (e) {
        e.stopPropagation();
      });
    }
  });
  // Navbar end

  //  curser

  $(document).mousemove(function (e) {
    $(".cursor")
      .eq(0)
      .css({
        left: e.pageX,
        top: e.pageY - $(window).scrollTop(),
      });
  });

  $(".service-card")
    .mouseenter(function () {
      $(".cursor").addClass("hover");
    })
    .mouseleave(function () {
      $(".cursor").removeClass("hover");
    });

  // video



  /* ===== For menu animation === */
  $(".navbar-toggler").click(function () {
    $(".navbar-toggler").toggleClass("open");
    $(".navbar-toggler .stick").toggleClass("open");
    $("body,html").toggleClass("open-nav");
  });

  // Navbar end

  // Sticky Nav

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 150) {
      $(".page-header").addClass("hide");
    } else {
      $(".page-header").removeClass("hide");
    }

    if (scroll > 250) {
      $(".page-header").addClass("fixed");
      $(".page-header").removeClass("hide");

    } else {
      $(".page-header").removeClass("fixed");
    }
  });

  // back to top
  if ($("#scroll").length) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $("#scroll").fadeIn(200);
      } else {
        $("#scroll").fadeOut(200);
      }
    });
    $("#scroll").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 500);
      return false;
    });
  }

  // search toggle for mobile
  $('.fake-search-field').on('click', function() {
    $('.header-search').addClass("open");
    $('.header-search-inner [type="text"]').focus();
  })

  $('.search-back').on('click', function() {
    $('.header-search').removeClass("open");
  })

  // logo slider
  // $(".js-logo-slider").slick({
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   autoplay: true,
  //   centerPadding: "0px",
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 321,
  //       settings: {
  //         centerMode: false,
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // });

  $(".home-masthead-slider").slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    autoplay: true,
    centerMode: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".product-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    autoplay: true,
    // centerMode: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // testimonial
  // $(".js-testimonial").slick({
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   autoplay: true,
  //   slidesToScroll: 1,
  // });
  // document end
});
