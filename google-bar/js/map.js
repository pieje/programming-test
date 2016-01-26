
var map;
var geocoder;

function initMap(){
	geocoder = new google.maps.Geocoder();
    map = new google.maps.Map(document.getElementById("map"), {
    	center: {lat: 0, lng: 0},
  		zoom: 3
    });
}

function showCountry(country){
	

	geocoder.geocode({'address' : country}, function(results, status){
		if( status == google.maps.GeocoderStatus.OK){
			google.maps.event.trigger(map, "resize");
			map.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker({
				map: map,
				position: results[0].geometry.location
			});
			
		} else{
			console.log(results);
		}
	})

}