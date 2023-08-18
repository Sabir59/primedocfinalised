$(document).ready(function () {
  $(".testimonial-slider").slick({
    infinite: true,
    speed: 6000, // Adjust transition speed
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for smoother autoplay
    centerMode: true,
    cssEase: "linear", // Use linear easing for smoother motion
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    gap: 20,
  });

  //   Loader Removal
  // setTimeout(() => {
  $(".loader-container").fadeOut("slow", function () {
    $(this).remove();
  });
  // }, 500);
  $(window).on("load resize scroll", function () {
    updateBackgroundPosition();
  });

  function updateBackgroundPosition() {
    const headerHeight = $(".header__sub").outerHeight();
    const mainElement = $(".header__main");
    const scrollY = $(window).scrollTop();

    if (scrollY >= headerHeight) {
      mainElement.css({
        position: "fixed",
      });
    } else {
      mainElement.css({
        position: "static",
      });
    }
  }

  // Mobile Navigation
  $(".mobile-navigation__open").on("click", function () {
    $(".mobile-navigation").addClass("u-trans-none");
  });
  $(".mobile-navigation__close").on("click", function () {
    $(".mobile-navigation").removeClass("u-trans-none");
  });
  $(".search-form-icon").on("click", function () {
    $(".search-form").toggleClass("expanded");
  });
});
