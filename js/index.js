$(function () {
  $('.banner').slick({
    autoplay: true,
    accessibility: false,
    dots: true,
    draggable: false,
    arrows: false,
  });
  $('.tab-banner').slick({
    autoplay: true,
    accessibility: false,
    dots: true,
    dotsClass: 'tab-banner-dots slick-dots',
    draggable: false,
    arrows: false,
  });

  $('.activity-notice-banner').slick({
    autoplay: true,
    accessibility: false,
    dots: true,
    // dotsClass: 'tab-banner-dots slick-dots',
    draggable: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
  });

  $('[data-toggle="datepicker"]').datepicker({
    autoShow: true,
    inline: true,
    container: '',
    language: 'zh-CN',
  });
});
