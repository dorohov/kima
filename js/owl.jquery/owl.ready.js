"use strict";$(function(){$(document.body).on("translated.owl.carousel",".owl-carousel",{},function(s){s.preventDefault();var e=$(this),n=e.find(".owl-item:not(.cloned)"),i=n.filter(".active"),o=i.find("div").attr("data-owl-item");$(".owl-count__item.is--count").html(o)}),$(".owl-carousel").trigger("translated.owl.carousel"),$(".owl-portfolio").owlCarousel({navText:['<svg class="icon-svg icon-owl-prev-400" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#owl-prev-400"></use></svg>','<svg class="icon-svg icon-owl-next-400" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#owl-next-400"></use></svg> '],nav:!0,dots:!1,smartSpeed:500,loop:!0,responsive:{0:{items:1,margin:0},480:{items:2,margin:2},1025:{autoWidth:!0,margin:0,items:2},1400:{autoWidth:!0,items:2,margin:0}}}),screenJS.isXS()||$(".owl-news").owlCarousel({navText:['<svg class="icon-svg icon-owl-prev-400" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#owl-prev-400"></use></svg>','<svg class="icon-svg icon-owl-next-400" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#owl-next-400"></use></svg> '],nav:!0,dots:!1,smartSpeed:500,loop:!0,items:1,margin:0,responsive:{768:{margin:15},1025:{margin:38}}}),$(".owl-about").owlCarousel({navText:['<svg class="icon-svg icon-owl-prev-400" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#owl-prev-400"></use></svg>','<svg class="icon-svg icon-owl-next-400" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#owl-next-400"></use></svg> '],nav:!0,dots:!1,smartSpeed:500,loop:!0,items:1,margin:0,responsive:{0:{margin:15,items:1},480:{items:2,margin:15},768:{items:1,margin:0},1025:{margin:0}}}),$(".owl-block").owlCarousel({navText:['<svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme2/img/svg/sprite.svg#owl-prev"></use></svg>','<svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme2/img/svg/sprite.svg#owl-next"></use></svg> '],nav:!0,dots:!1,smartSpeed:500,margin:30,responsive:{0:{items:1,margin:0},570:{items:2},980:{items:4},1400:{items:5}}}),$(".owl-one").owlCarousel({navText:['<svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme2/img/svg/sprite.svg#owl-prev"></use></svg>','<svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme2/img/svg/sprite.svg#owl-next"></use></svg> '],nav:!0,dots:!1,smartSpeed:500,loop:!0,margin:0,items:1}),$(".owl-big").owlCarousel({navText:['<svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme2/img/svg/sprite.svg#owl-prev-400"></use></svg>','<svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme2/img/svg/sprite.svg#owl-next-400"></use></svg> '],nav:!0,dots:!1,smartSpeed:500,loop:!0,margin:0,items:1}),$(".owl-center").owlCarousel({navText:['<svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme2/img/svg/sprite.svg#owl-prev-400"></use></svg>','<svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme2/img/svg/sprite.svg#owl-next-400"></use></svg> '],nav:!0,dots:!1,smartSpeed:500,loop:!0,center:!0,autoWidth:!0,mouseDrag:!1,touchDrag:!1,margin:50,items:1,responsive:{0:{margin:30},400:{margin:20},1e3:{margin:50}}}),screenJS.isXS()&&$(".portfolio-tabs__pane-row").owlCarousel({navText:['<svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme2/img/svg/sprite.svg#owl-prev"></use></svg>','<svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme2/img/svg/sprite.svg#owl-next"></use></svg> '],nav:!1,dots:!1,smartSpeed:500,margin:30,responsive:{0:{items:1},570:{items:2}}})});