/* Thinny Theme Scripts */

(function($){ "use strict";
             
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });


/*=========================================================================
	Sticky Header
=========================================================================*/ 
	$(function() {
		var header = $("#header"),
			yOffset = 0,
            headerHeight = $('.header_section').height(),
			triggerPoint = 10;
		$(window).on( 'scroll', function() {
			yOffset = $(window).scrollTop();

			if (yOffset >= triggerPoint) {
				header.addClass("fixed-top");
			} else {
				header.removeClass("fixed-top");
			}

		});
        $('.header_height').css( 'margin-top', headerHeight );
	})

         
/*=========================================================================
    Typed js Active
=========================================================================*/
    $(".typed").typed({
        strings: ["Whitney Shirk.", "Product Management.", "Creative."],
        loop: true,
        typeSpeed: 150
    });

/*=========================================================================
	NiceScroll Active
=========================================================================*/
    $(window).on('load', function() {
        $("html").niceScroll({
            background: "#fff",
            cursorcolor:"#ddd",
            cursorwidth:"10px",
            scrollspeed: 40,
            mousescrollstep: 60,
            cursorborder:"0px solid #eaeaea",
            cursorborderradius: "0px",
            autohidemode: false,
            zindex: "999"
        });  
    });

/*=========================================================================
	Service Carousel
=========================================================================*/
	$('#service-carousel').owlCarousel({
        loop:true,
        margin: 20,
        autoplay: true,
        smartSpeed: 500,
        dots: false,
        nav:true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2,
	            margin:10
	        },
	        1000:{
	            items:4
	        }
	    }
        
    });             
             
/*=========================================================================
    Isotope Active
=========================================================================*/
	$('.portfolio_items').imagesLoaded( function() {

		 // Add isotope click function
		$('.portfolio_filter li').on( 'click', function(){
	        $(".portfolio_filter li").removeClass("active");
	        $(this).addClass("active");
	 
	        var selector = $(this).attr('data-filter');
	        $(".portfolio_items").isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false,
	            }
	        });
	        return false;
	    });

	    $(".portfolio_items").isotope({
	        itemSelector: '.single_item',
	        layoutMode: 'masonry',
	    });
	});

			 
/*=========================================================================
    Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 60
	});

/*=========================================================================
        Active venobox
=========================================================================*/
	var vbSelector = $('.img_popup');
	vbSelector.venobox({
		numeratio: true,
		infinigall: true
	}); 
				 
/*=========================================================================
    Scroll To Top
=========================================================================*/     
    $(window).on( 'scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

})(jQuery);
