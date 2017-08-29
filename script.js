function findLocation(){
  navigator.geolocation.getCurrentPosition(locationCallback);
}
  function locationCallback(position){
    var location = {lat: position.coords.latitude, lng: position.coords.longitude
    };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: location
    });
    var contentString ='<h3>Here is the title</h3>'+
    '<iframe src="https://open.spotify.com/embed?uri=spotify:track:6LBgZ55deQADeOctdYAVM8" frameborder="0" allowtransparency="true"></iframe>';
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: 'My Song'
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }
