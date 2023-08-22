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

$(document).ready(function () {
  let isWideScreen = $(window).width() > 991;

  function updateSidebarPosition() {
    // Get references to the elements
    const $sidebar = $(".sidebar-content");
    const $blogContent = $(".blog-card");

    // Calculate the position where the sidebar should start scrolling
    const startPosition = $blogContent.offset().top;
    const bottomPosition = $blogContent.offset().bottom;

    // Listen for the 'scroll' event on the window
    $(window).scroll(function () {
      const scrollY = $(window).scrollTop();

      // Calculate the distance between the bottom of the blog content and the bottom of the viewport
      const contentBottomPosition =
        $blogContent.offset().top + $blogContent.outerHeight();
      const viewportBottomPosition = scrollY + $(window).height();
      const distanceToViewport =
        contentBottomPosition - viewportBottomPosition;

      if (scrollY <= startPosition && isWideScreen) {
        $sidebar.css({
          position: "fixed",
          top: `${startPosition + 48}px`,
        });
      } else if (distanceToViewport <= 0 && isWideScreen) {
        $sidebar.css({
          position: "relative",
          top: "initial",
          transition: "all .6s ease",
        });
      }
    });
  }

  // Initial setup
  updateSidebarPosition();

  // Handle resizing
  $(window).resize(function () {
    const newScreenWidth = $(window).width();
    if (isWideScreen && newScreenWidth <= 991) {
      // Screen has become narrow, reset sidebar position
      isWideScreen = false;
      $(".sidebar-content").css({
        position: "static",
        top: "initial",
        transition: "none",
      });
    } else if (!isWideScreen && newScreenWidth > 991) {
      // Screen has become wide, update sidebar position
      isWideScreen = true;
      updateSidebarPosition();
    }
  });
});

// Utils
// function scroll2FixedUntil(element2Target, element2Fix, viewPort) {}

function textTrimmer(maxLength, pattern, elements) {
  elements.each(function () {
    const textContent = $(this).text();
    const trimmedText =
      textContent.length > maxLength
        ? textContent.substring(0, maxLength) + pattern
        : textContent;
    $(this).text(trimmedText);
  });
}

textTrimmer(300, "...", $(".blog-card__text"));
