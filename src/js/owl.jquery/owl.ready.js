'use strict';
$(function() {
	$(document.body).on('translated.owl.carousel', '.owl-portfolio', {}, function(event){
		event.preventDefault();		
		var block = $(this);		
		var items = block.find('.owl-item');//:not(.cloned)
		var active = items.filter('.active');		
		var i = active.find('div').attr('data-owl-item');		
		block.next('.owl-count__block').find('.owl-count__item.is--count').html(i);
		//console.log(i);
	});	
	$('.owl-portfolio').trigger('translated.owl.carousel');
	$('.owl-portfolio').owlCarousel({
		navText: ['<svg class="icon-svg icon-owl-prev-400" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme/img/svg/sprite.svg#owl-prev-400"></use></svg>', '<svg class="icon-svg icon-owl-next-400" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme/img/svg/sprite.svg#owl-next-400"></use></svg> '],
		nav: true,
		dots: false,
		mouseDrag: false,
		smartSpeed: 500,		
		loop:true,
		onInitialized: function(event) {
	    	$('.owl-portfolio .cloned .portfolio-card__slider-link').attr('data-fancybox', '');
		},
		responsive : { 
			0 : {
				items:1,
				margin: 0,
			},
			480 : {
				items:2,
				margin: 2,
			},
			1025 : {
				margin: 0,
				items:1,
			}
		}
	});
	if(!screenJS.isXS()) {
		$('.owl-news').owlCarousel({
			navText: ['<svg class="icon-svg icon-owl-prev-400" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme/img/svg/sprite.svg#owl-prev-400"></use></svg>', '<svg class="icon-svg icon-owl-next-400" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme/img/svg/sprite.svg#owl-next-400"></use></svg> '],
			nav: true,
			dots: false,
			smartSpeed: 500,		
			loop:true,
			items:1,
			margin: 0,
			responsive : {
				768 : {
					margin: 15,
				},
				1025 : {
					margin: 38,
				}
			}
		}); 
	}
	$('.owl-about').owlCarousel({
		navText: ['<svg class="icon-svg icon-owl-prev-400" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme/img/svg/sprite.svg#owl-prev-400"></use></svg>', '<svg class="icon-svg icon-owl-next-400" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme/img/svg/sprite.svg#owl-next-400"></use></svg> '],
		nav: true,
		dots: false,
		smartSpeed: 500,		
		loop:true,
		items:1,
		margin: 0,
		responsive : {
			0 : {
				margin: 15,
				items: 1,
			},
			480 : {
				items: 2,
				margin: 15,
			},
			768 : {
				items: 1,
				margin: 0,
			},
			1025 : {
				margin: 0,
			}
		}
	});
});