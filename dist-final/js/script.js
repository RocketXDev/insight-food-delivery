window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})
$(document).ready(function() {
    $('ul.programm_tabs').on('click', 'li:not(.programm_tab_active)', function() {
        $(this)
          .addClass('programm_tab_active').siblings().removeClass('programm_tab_active')
          .closest('div.container').find('div.catalog_content').removeClass('catalog_content_active').eq($(this).index()).addClass('catalog_content_active');
      });
    $('.carousel_inner').slick({
    speed: 2500, 
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 16000,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="logo/back.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="logo/next.svg"></button>', 
    });
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal_close').on('click', function() {
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow')
  });
  $('.catalog_btn_consult').each(function(i){
    $(this).on('click', function(){
        $('#consultation .modal_descr').text($('.catalog_title').eq(i).text());
        $('.overlay, #consultation').fadeIn('slow');
    });
});

//Catalog

    $('.catalog_btn_order').each(function(i){
        $(this).on('click', function(){
            $('#consultation .modal_descr').text($('.catalog_title').eq(i).text());
            $('.overlay, #consultation').fadeIn('slow');
        });
    });

//End of catalog



  $('.btn_last').each(function(i){
    $(this).on('click', function(){
      $('#consultation .modal_descr');
        $('.overlay, #consultation').fadeIn('slow');
    });
});
    $('.open_btn').each(function(i){
        $(this).on('click', function(){
            $('#consultation .modal_descr');
                $('.overlay, #consultation').fadeIn('slow');
            });
        });
  $('input[name=phone]').mask("+7 (999) 999-99-99")
  function validateForms(form){
      $(form).validate({
          rules: {
              name: {
                  required: true,
                  minlength: 2
              },
              phone: "required",
              email: {
                  required: true,
                  email: true
              }
          },
          messages: {
              name: {
                  required: "Пожалуйста, введите свое имя",
                  minlength: jQuery.validator.format("Введите {0} символа!")
                },
              phone: "Пожалуйста, введите свой номер телефона",
              email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес почты"
              }
          }
      });
  };
  validateForms('#consultation form')
  $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
      }).done(function() {
          $(this).find("input").val("");
          $('#consultation').fadeOut();
          $('.overlay, #thanks').fadeIn('slow');
          $('form').trigger('reset');
      });
      return false;
  });
  $(window).scroll(function(){
    if($(this).scrollTop()>1600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
  });
  $("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
    });
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       false,       // default
        live:         true        // default
      }
      )
      wow.init();
});