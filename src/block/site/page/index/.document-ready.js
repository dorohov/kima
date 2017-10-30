
var t = $('.index-page__slider-item').eq(0).attr("data-heading");
$('.index-page__slider-legend-name').text(t);


$('#carousel-index').on('slid.bs.carousel', function () {
	var t = $('.index-page__slider-item.active').attr("data-heading");
	$('.index-page__slider-legend-name').fadeIn(100).text(t);
});