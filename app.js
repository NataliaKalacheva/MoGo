$(function() {

    var header = document.querySelector('.header-wrapper');
    var heightIntro = $('#intro').innerHeight();
    var scrollOffset = $(window).scrollTop();
    
    /*fixed menu*/
    checkScroll(scrollOffset);

    $(window).on('scroll', function() {
         scrollOffset = $(this).scrollTop();
         checkScroll(scrollOffset);

      });

      function checkScroll(scrollOffset) {

        if (scrollOffset >= heightIntro) {
          header.classList.add('fixed');
        } else {
          header.classList.remove('fixed');
        }
      }

      /*smooth scroll*/
      $('[data-scroll]').on('click', function(event) { //отслеживаем клик у атрибута дата скролл и выполняем функцию
        event.preventDefault();
        
        var $this = $(this);
        var elementId = $this.data('scroll'); //сохраняем айдишник элемента, на который кликнули
        var elementOffset = $(elementId).offset().top; //получаем отступ элемента от топа страницы
        
        $('.header-navigation a').removeClass('active');
        $this.addClass('active'); // придадим активный класс нажатой ссылке

        $('html, body').animate({ //применяем метод анимэйт для плавного скрола по странице
          scrollTop: elementOffset 
        }, 500);
        
      });

/*MENU NAV TOGGLE*/
        $('.nav-toggle').on('click', function(event) {
           event.preventDefault();
           $('.nav-toggle').toggleClass('active');
           console.log('add active');
           var menu = $('.header-navigation');
           menu.toggleClass('active');
        });


    });