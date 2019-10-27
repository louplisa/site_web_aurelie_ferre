window.addEventListener('scroll', function (e) {
  let nDefillement = window.pageYOffset;
  const oFond = document.querySelector('.cParallaxe1');
  oFond.style.backgroundPosition = "0 "+ -(nDefillement * 0.2) + 'px';
});

jQuery(document).ready(function(){
  jQuery('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').animate({
      width:jQuery(this).attr('data-percent')
    },2000);
  });
});
$( function () {

  let charts = $(".skillbar-bar");

  function isVisible(element) {
    let
      viewPortHeight = $(window).height(), // Viewport Height
      scrollTop = $(window).scrollTop(), // Scroll Top
      currElementPosY = $(element).offset().top,
      elementHeight = $(element).height();

    return (currElementPosY + elementHeight > scrollTop && currElementPosY < (viewPortHeight + scrollTop))
  }

  // Animate chart only when you see it
  function animateChartWhenVisible(chart) {
    for (let i = 0, count = chart.length; i < count; i++) {
      if (isVisible(chart[i])) {
        $(chart[i]).addClass("mymove-animation");
      }
    }
  }
  // On scroll
  $( window ).scroll( function () {
    animateChartWhenVisible( charts );
  } );

  /* On load */
  animateChartWhenVisible( charts );
});

