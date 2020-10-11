$(function () {
  var player = new Plyr('#player');
  var bannerSlick = $('.banner')
    .slick({
      autoplay: true,
      accessibility: false,
      dots: false,
      draggable: false,
      arrows: true,
      cssEase: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      speed: 900,
    })
    .on('afterChange', function (event, slick) {
      console.log(event);
      // left
    });

  var w = $('.banner-item').width();
  $('.banner-infos').css('width', w + 'px');

  // $('.parameter__item').slick({
  //   autoplay: true,
  //   accessibility: false,
  //   dots: true,
  //   dotsClass: 'tab-banner-dots slick-dots',
  //   draggable: false,
  //   arrows: false,
  // });

  $('.parameter-list').slick({
    autoplay: true,
    accessibility: false,
    dots: true,
    dotsClass: 'parameter-list-dots slick-dots',
    draggable: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
  });
});
