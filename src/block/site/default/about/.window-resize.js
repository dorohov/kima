if(screenJS.device()){
	$(".team-card__preview").removeAttr("data-toggle");  
	//$(".team-card__preview").attr("href", "#");  
} else{
	$(".team-card__preview").attr("data-toggle", "tab");  
}