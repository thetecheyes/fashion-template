(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        // Product Area
        $(".product-list").masonry();

        // Header Slider Area
        $(".header-slider").owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
        });

        // Product Promotion Area
        $(".product-promotion").owlCarousel({
            items: 1,
            loop: true
        });


        // Off Canvas Menu
        $(".menu-trigger").on("click", function () {
            $(".off-canvas-menu, .overlay").addClass("active");
            return false;
        });

        $(".close-menu, .overlay").on("click", function () {
            $(".off-canvas-menu, .overlay").removeClass("active");
            return false;
        });

    });

    
    
    jQuery(window).load(function(){

        
    });

}(jQuery));	
