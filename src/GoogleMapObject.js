(function(exports){
  function GoogleMapObject(){
  }

  GoogleMapObject.prototype = {
    findLocation: function(callback){
      navigator.geolocation.getCurrentPosition(function(position){
        var location = {lat: position.coords.latitude, lng: position.coords.longitude};
        musicSafari.setCurrentLocation(location);
        callback();
      });
    },

    initMap: function(currentLocation) {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: currentLocation
      });
    },

    addVisualMarker: function(){

      var contentString ='<h3>Here is the title</h3>'+
      '<iframe src="https://open.spotify.com/embed?uri=spotify:track:3Ed0puq5yeszk6bZkBOop0" frameborder="0" allowtransparency="true"></iframe>';
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
  };

  exports.GoogleMapObject = GoogleMapObject;
})(this);
