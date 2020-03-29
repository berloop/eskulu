(function ($) {
  $(document).ready(function () {
    "use strict";
	  
	  // SPLITTING
			Splitting();
	  
	  
	  
	  // TESTIMONIALS
			new Swiper('.testimonials-slider', {
		  slidesPerView: '1',
		  spaceBetween: 0,
				centeredSlides: true,
				loop: true,
		  pagination: {
			el: '.swiper-pagination',
			clickable: true,
		  },
		});
	  
	  
	  
	  // SLIDER
		var carouselslider = new Swiper('.carousel-slider', {
			spaceBetween: 0,
			slidesPerView: 3,
			centeredSlides: true,
			autoplay: {
			delay: 9500,
			disableOnInteraction: false,
			},
			navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
			},
			pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
			},
			loop: true,
			breakpoints: {
			1024: {
			  slidesPerView: 3
			},
			768: {
			  slidesPerView: 2
			},
			640: {
			  slidesPerView: 1
			},
			320: {
			  slidesPerView: 1
			}
		  }
		});
	  
	  
	  
	  // FOOTER HEIGHT CALCULATION	
    		$('main').css({'margin-bottom': $('.footer').innerHeight()});
	  
	  
	  
	  // ICON CONTENT BLOCK
			$('.wpb_wrapper .icon-content-block').mouseenter(function() {
				$('.selected').removeClass('selected').addClass('icon-content-block');
				$(this).removeClass('.wpb_wrapper icon-content-block').addClass('selected');
			});
	  
	  // HAMBURGER MENU
		$('.hamburger').on('click', function(e) {
			if ($(".site-navigation").hasClass("active")) {
				$("body").toggleClass("overflow");
				$(".site-navigation").removeClass("active");
				$(".site-navigation").css("transition-delay", "0.7s");
				$(".site-navigation .layer").css("transition-delay", "0.3s");
				$(".site-navigation .inner").css("transition-delay", "0s");
			} else
			{
				$(".site-navigation").addClass('active');
				$("body").toggleClass("overflow");
				$(".site-navigation.active").css("transition-delay", "0s");
				$(".site-navigation.active .layer").css("transition-delay", "0.4s");
				$(".site-navigation.active .inner").css("transition-delay", "0.7s");
			}
			$(this).toggleClass("is-opened-navi");
		});
	  
	  
	  
	  
	  // ALL CASES
		$('.all-cases-link b').on('click', function(e) {
			if ($(".all-cases").hasClass("active")) {
				$("body").toggleClass("overflow");
				$(".all-cases").removeClass("active");
				$(".all-cases").css("transition-delay", "0.7s");
				$(".all-cases .layer").css("transition-delay", "0.3s");
				$(".all-cases .inner").css("transition-delay", "0s");
			} else
			{
				$(".all-cases").addClass('active');
				$("body").toggleClass("overflow");
				$(".all-cases.active").css("transition-delay", "0s");
				$(".all-cases.active .layer").css("transition-delay", "0.4s");
				$(".all-cases.active .inner").css("transition-delay", "0.7s");
			}
		$(".all-cases-link b").toggleClass("closed");
		});
	  
	  
	  
	  

    // MOBILE MENU
    if ($(window).width() < 980) {

      $('.menu-horizontal li.dropdown i').on('click', function (e) {
        $(this).parent().children('.menu-horizontal li ul').toggle();
        return true;
      });

    }


    // HORIZONTAL MENU
    if ($(window).width() > 980) {
      $('.menu-horizontal li.dropdown').hover(function (e) {
        $(this).children('ul').toggle();
      }, function () {
        $(this).children('ul').toggle();
      });

    }


    // SANDWICH MENU
    $('.menu-container li.dropdown i').on('click', function (e) {
      $(this).parent().children('.menu-container li ul').toggle();
      return true;
    });


    // CONTENT SLIDER
    var swiper = new Swiper('.content-slider', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 0,
      loop: true,
      pagination: {
        el: '.content-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      }
    });


    // SLIDER
		var mainslider = new Swiper('.gallery-top', {
			spaceBetween: 0,
			autoplay: {
			delay: 9500,
			disableOnInteraction: false,
			},
			navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
			},
			pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
			},
			loop: true,
			loopedSlides: 3,
			thumbs: {
			swiper: sliderthumbs
		  }
		});
	  $('.slider .slide-progress span.total-slides').text(swiper.activeIndex);
	 

	  
	  

	
	
	// SLIDER THUMBS
		var sliderthumbs = new Swiper('.gallery-thumbs', {
			spaceBetween: 10,
			centeredSlides: true,
			slidesPerView: 3,
			touchRatio: 0.2,
			slideToClickedSlide: true,
			loop: true,
			loopedSlides: 3,
			breakpoints: {
			1024: {
			  slidesPerView: 3
			},
			768: {
			  slidesPerView: 1
			},
			640: {
			  slidesPerView: 1
			},
			320: {
			  slidesPerView: 1
			}
		  }
			});

		if ($(".gallery-top")[0]){
			mainslider.controller.control = sliderthumbs;
			sliderthumbs.controller.control = mainslider;
			} 
		else {

			}


    // SCROLL DOWN
    $(".scrolldown a").on('click', function (e) {
      $('html, body').animate({
        scrollTop: $(".content-section").offset().top
      }, 500);
    });


    // PARALLAX
    $.stellar({
      horizontalScrolling: false,
      verticalOffset: 0,
      responsive: true
    });


    // PAGE TRANSITION
    $('body a').on('click', function (e) {
      var target = $(this).attr('target');
      var fancybox = $(this).data('fancybox');
      var url = this.getAttribute("href");
      if (target != '_blank' && typeof fancybox == 'undefined' && url.indexOf('#') < 0) {


        e.preventDefault();
        var url = this.getAttribute("href");
        if (url.indexOf('#') != -1) {
          var hash = url.substring(url.indexOf('#'));


          if ($('body ' + hash).length != 0) {
            $('.page-transition').removeClass("active");


          }
        } else {
          $('.page-transition').toggleClass("active");
          setTimeout(function () {
            window.location = url;
          }, 1300);

        }
      }
    });


    // SANDWICH MENU
    $('.sandwich').on('click', function (e) {
      if ($("body").hasClass("display-nav")) {
        $(".sandwich .sand span:nth-child(1)").css("transition-delay", "0.6s");
        $(".sandwich .sand span:nth-child(2)").css("transition-delay", "0.75s");
        $(".page-header .container").css("transition-delay", "0.8s");
        $(".video-bg .container").css("transition-delay", "0.8s");
        $(".slider .slide-content").css("transition-delay", "0.8s");
        $(".kinetic-slider ").css("transition-delay", "0.8s");

        window.setTimeout(function () {
          $(".sandwich .sand span:nth-child(1)").css("transition-delay", "0s");
          $(".sandwich .sand span:nth-child(2)").css("transition-delay", "0s");
        }, 1000);

      } else {

        $(".sandwich .sand span:nth-child(1)").css("transition-delay", "0s");
        $(".sandwich .sand span:nth-child(2)").css("transition-delay", "0.15s");
        $(".page-header .container").css("transition-delay", "0s");
        $(".video-bg .container").css("transition-delay", "0s");
        $(".slider .slide-content").css("transition-delay", "0s");
        $(".kinetic-slider").css("transition-delay", "0s");

      }
      $("body").toggleClass("display-nav");
    });


    
	  
	  
	  // DATA BACKGROUND IMAGE
			var pageSection = $("*");
			pageSection.each(function(indx){
				if ($(this).attr("data-background")){
					$(this).css("background-image", "url(" + $(this).data("background") + ")");
				}
			});


    /* MAGNET CURSOR*/
    var cerchio = document.querySelectorAll('.magnet-link');
    cerchio.forEach(function (elem) {
      $(document).on('mousemove touch', function (e) {
        magnetize(elem, e);
      });
    })

    function magnetize(el, e) {
      var mX = e.pageX,
        mY = e.pageY;
      const item = $(el);

      const customDist = item.data('dist') * 20 || 80;
      const centerX = item.offset().left + (item.width() / 2);
      const centerY = item.offset().top + (item.height() / 2);

      var deltaX = Math.floor((centerX - mX)) * -0.35;
      var deltaY = Math.floor((centerY - mY)) * -0.35;

      var distance = calculateDistance(item, mX, mY);

      if (distance < customDist) {
        TweenMax.to(item, 0.5, {
          y: deltaY,
          x: deltaX,
          scale: 1
        });
        item.addClass('magnet');
      } else {
        TweenMax.to(item, 0.6, {
          y: 0,
          x: 0,
          scale: 1
        });
        item.removeClass('magnet');
      }
    }

    function calculateDistance(elem, mouseX, mouseY) {
      return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2)));
    }

    function lerp(a, b, n) {
      return (1 - n) * a + n * b
    }

    // Inizio Cursor
    class Cursor {
      constructor() {
        this.bind()
        //seleziono la classe del cursore
        this.cursor = document.querySelector('.js-cursor')

        this.mouseCurrent = {
          x: 0,
          y: 0
        }

        this.mouseLast = {
          x: this.mouseCurrent.x,
          y: this.mouseCurrent.y
        }

        this.rAF = undefined
      }

      bind() {
        ['getMousePosition', 'run'].forEach((fn) => this[fn] = this[fn].bind(this))
      }

      getMousePosition(e) {
        this.mouseCurrent = {
          x: e.clientX,
          y: e.clientY
        }
      }

      run() {
        this.mouseLast.x = lerp(this.mouseLast.x, this.mouseCurrent.x, 0.2)
        this.mouseLast.y = lerp(this.mouseLast.y, this.mouseCurrent.y, 0.2)

        this.mouseLast.x = Math.floor(this.mouseLast.x * 100) / 100
        this.mouseLast.y = Math.floor(this.mouseLast.y * 100) / 100

        this.cursor.style.transform = `translate3d(${this.mouseLast.x}px, ${this.mouseLast.y}px, 0)`

        this.rAF = requestAnimationFrame(this.run)
      }

      requestAnimationFrame() {
        this.rAF = requestAnimationFrame(this.run)
      }

      addEvents() {
        window.addEventListener('mousemove', this.getMousePosition, false)
      }

      on() {
        this.addEvents()

        this.requestAnimationFrame()
      }

      init() {
        this.on()
      }
    }

    if ($('.js-cursor').length > 0) {
      const cursor = new Cursor()

      cursor.init();


      $('a, .sandwich, .equalizer, .swiper-pagination-bullet, .swiper-button-prev, .swiper-button-next, .main-nav').hover(function () {
        $('.cursor').toggleClass('light');
      });

    }


  });
  // END JQUERY	


  // MASONRY
  function masonry_init() {
    $('.masonry').masonry({
      itemSelector: '.masonry-grid',
      columnWidth: '.masonry-grid',
      percentPosition: true
    });
  }

  window.onload = masonry_init;


  // EQUALIZER TOGGLE
  if (data.enable_sound_bar == true) {
    var source = data.audio_source;
    var audio = new Audio(); // use the constructor in JavaScript, just easier that way
    audio.addEventListener("load", function () {
      audio.play();
    }, true);
    audio.src = source;
    audio.autoplay = false;
    audio.loop = true;
    audio.volume = 0.2;

    $('.equalizer').click();
    var playing = false;
    $('.equalizer').on('click', function (e) {
      if (playing == false) {
        audio.play();
        playing = true;

      } else {
        audio.pause();
        playing = false;
      }
    });
  }


  // EQUALIZER
  function randomBetween(range) {
    var min = range[0],
      max = range[1];
    if (min < 0) {
      return min + Math.random() * (Math.abs(min) + max);
    } else {
      return min + Math.random() * max;
    }
  }

  $.fn.equalizerAnimation = function (speed, barsHeight) {
    var $equalizer = $(this);
    setInterval(function () {
      $equalizer.find('span').each(function (i) {
        $(this).css({
          height: randomBetween(barsHeight[i]) + 'px'
        });
      });
    }, speed);
    $equalizer.on('click',function(){
					$equalizer.toggleClass('paused');
				
    });
  }

  var barsHeight = [
    [2, 13],
			  [5, 22],
			  [17, 8],
			  [4, 18],
			  [11, 3]
  ];
  $('.equalizer').equalizerAnimation(180, barsHeight);

  // COUNTER
  $(document).scroll(function () {
    $('.odometer').each(function () {
      var parent_section_postion = $(this).closest('section').position();
      var parent_section_top = parent_section_postion.top;
      if ($(document).scrollTop() > parent_section_top - 300) {
        if ($(this).data('status') == 'yes') {
          $(this).html($(this).data('count'));
          $(this).data('status', 'no')
        }
      }
    });
  });


  // PRELOADER

  if ($('#preloader').length > 0) {

    let settings = {
      progressSize: 320,
      progressColor: '#ffffff',
      lineWidth: 2,
      lineCap: 'round',
      preloaderAnimationDuration: 1000,
      startDegree: -90,
      finalDegree: 270
    }

    function setAttributes(elem, attrs) {

      for (let key in attrs) {
        elem.setAttribute(key, attrs[key]);
      }

    }

    let preloader = document.createElement('div'),
      canvas = document.createElement('canvas'),
      size;


    (function () {

      let width = window.innerWidth,
        height = window.innerHeight;

      if (width > height) {

        size = Math.min(settings.progressSize, height / 2);

      } else {

        size = Math.min(settings.progressSize, width - 50);

      }

    })();


    setAttributes(preloader, {
      class: "preloader",
      id: 'preloader',
      style: 'transition: opacity ' + settings.preloaderAnimationDuration / 1000 + 's'
    });
    setAttributes(canvas, {
      class: 'progress-bar',
      id: 'progress-bar',
      width: settings.progressSize,
      height: settings.progressSize
    });


    preloader = document.getElementById('preloader');

    let progressBar = document.getElementById('progress-bar'),
      images = document.images,
      imagesAmount = images.length,
      imagesLoaded = 0,
      barCtx = progressBar.getContext('2d'),
      circleCenterX = progressBar.width / 2,
      circleCenterY = progressBar.height / 2,
      circleRadius = circleCenterX - settings.lineWidth,
      degreesPerPercent = 3.6,
      currentProgress = 0,
      showedProgress = 0,
      progressStep = 0,
      progressDelta = 0,
      startTime = null,
      running;


    (function () {

      return requestAnimationFrame
        || mozRequestAnimationFrame
        || webkitRequestAnimationFrame
        || oRequestAnimationFrame
        || msRequestAnimationFrame
        || function (callback) {
          setTimeout(callback, 1000 / 60);
        };

    })();

    Math.radians = function (degrees) {
      return degrees * Math.PI / 180;
    };


    progressBar.style.opacity = settings.progressOpacity;
    barCtx.strokeStyle = settings.progressColor;
    barCtx.lineWidth = settings.lineWidth;
    barCtx.lineCap = settings.lineCap;
    let angleMultiplier = (Math.abs(settings.startDegree) + Math.abs(settings.finalDegree)) / 360;
    let startAngle = Math.radians(settings.startDegree);
    document.body.style.overflowY = 'hidden';
    preloader.style.backgroundColor = settings.preloaderBackground;


    for (let i = 0; i < imagesAmount; i++) {

      let imageClone = new Image();
      imageClone.onload = onImageLoad;
      imageClone.onerror = onImageLoad;
      imageClone.src = images[i].src;

    }


    function onImageLoad() {

      if (running === true) running = false;

      imagesLoaded++;

      if (imagesLoaded >= imagesAmount) hidePreloader();

      progressStep = showedProgress;
      currentProgress = ((100 / imagesAmount) * imagesLoaded) << 0;
      progressDelta = currentProgress - showedProgress;

      setTimeout(function () {

        if (startTime === null) startTime = performance.now();
        running = true;
        animate();

      }, 10);

    }

    function animate() {

      if (running === false) {
        startTime = null;
        return;
      }

      let timeDelta = Math.min(1, (performance.now() - startTime) / settings.preloaderAnimationDuration);
      showedProgress = progressStep + (progressDelta * timeDelta);

      if (timeDelta <= 1) {


        barCtx.clearRect(0, 0, progressBar.width, progressBar.height);
        barCtx.beginPath();
        barCtx.arc(circleCenterX, circleCenterY, circleRadius, startAngle, (Math.radians(showedProgress * degreesPerPercent) * angleMultiplier) + startAngle);
        barCtx.stroke();
        requestAnimationFrame(animate);

      } else {
        startTime = null;
      }

    }


    function hidePreloader() {

      setTimeout(function () {

        $("body").addClass("page-loaded");

        document.body.style.overflowY = '';

      }, settings.preloaderAnimationDuration + 100);

    }
    var resizeTimer;
  }
	
	
	
	// WOW ANIMATION 
			wow = new WOW(
			{
				animateClass: 'animated',
				offset:       50
			}
			);
			wow.init();
	
	
	
	
	// PRELOADER
			$(window).load(function(){
				$("body").addClass("page-loaded");	
			});

})(jQuery);
