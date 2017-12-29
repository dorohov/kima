function initMap() {
	
	if($('#map-google').length) {
		
		var map_data = JSON.parse($('#map-google').attr('data-map-data') || '{}');
		
		var coordMapOfficeOne = map_data.map.center;//{lat: 59.9217, lng: 30.2868},
		zoomMapOfficeOne = 17,
		styleMapOfficeOne = [{"featureType":"all","elementType":"all","stylers":[{"hue":"#ffaa00"},{"saturation":"-33"},{"lightness":"10"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"visibility":"on"}]}],
		optionsMapOfficeOne = {
			zoom: zoomMapOfficeOne,
			center: new google.maps.LatLng(coordMapOfficeOne.lat, coordMapOfficeOne.lng),
			//scrollwheel: false,	
			styles: styleMapOfficeOne
		},
		idOfficeOne = document.getElementById('map-google'),
		mapOfficeOne = new google.maps.Map(idOfficeOne, optionsMapOfficeOne),		
		iconOfficeOne = '/wp-content/themes/azbn7theme/img/default/icon-map.png',
		/*iconOfficeOne = {        
			path: "M269.5,218.8l-147-59.9L-24,220.1l-60.2,146.8L-22.7,513l145.2,170.8l148.3-172.2L331,365.1L269.5,218.8z M182.5,424.8l-58.6,24.6l-58.8-24l-24.6-58.5l24-58.8l58.6-24.6l58.8,24l24.6,58.5L182.5,424.8z M-75.5,361.6l56-136.9l139.1-58.3  l0.5,112L-75.5,361.6z M125.6,176.4L179.2,300l-53.2-21.8L125.6,176.4z M128.3,167.5l136.9,56.1l3,265.9L128.3,167.5z M324.8,365.6  l-50.6,123.7l-3.4-252.1L324.8,365.6z M210.6,372.2L268,504.4l-1.9,4.5L125.6,672.4l1.3-217.7l60.2-25.2L210.6,372.2z M120.8,454.7  l-1.3,217.6L-17.9,510.2L-75.4,373L120.8,454.7z M57.2,422.1l-130.7-54.8l130.3-56.1L34.6,368L57.2,422.1z",
			fillColor: '#c68a50',
			strokeColor: '#000000',
			fillOpacity: 1,
			//anchor: new google.maps.Point(200,350),
			anchor: new google.maps.Point(145,480),
			strokeWeight: 0,
			scale: 0.25
		},*/
		iconCoordOfficeOne = map_data.placemarks[0].center;//{lat: 59.921627,  lng: 30.286577}, 
		OfficeOne = new google.maps.Marker({
			position: iconCoordOfficeOne,
			map: mapOfficeOne,
			icon: iconOfficeOne
		});
		
		$(window).on('resize', function() {
			google.maps.event.trigger(mapOfficeOne, "resize");
			mapOfficeOne.setCenter(coordMapOfficeOne);
		});
		
	}
	
};
$(function () {
	$(document.body).on('shown.bs.modal', '.modal', {}, function(event){
		event.preventDefault();
		$(window).trigger('resize');      
	});  
});