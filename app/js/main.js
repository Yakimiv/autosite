$(".mob-menu").css('display', 'none');            //По дфеаулту моб меню не активне
$('.sm-menu-btn').on('click', function(e){        //Кнопка
  e.preventDefault();
  $(this).toggleClass('sm-menu-btn-active');
  $(".mob-menu").fadeToggle( "fast", "linear" );
});
