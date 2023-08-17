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
  $(".loader-container").fadeOut("slow", function () {
    $(this).remove();
  });
});
