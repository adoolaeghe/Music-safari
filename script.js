$(document).on('keypress', '#trackname', function() {
  if(event.which === 13) { // check the key was <enter>
    var input = $(this);
    console.log(input);
    var trackname = input.val();
    getSpotifyInfo(trackname);
  }
});

function getSpotifyInfo(trackname) {
  var authtoken = "";
  var url = "https://api.spotify.com/v1/search?query=" + trackname + "&type=track&market=US" ;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', url, false);
  xmlhttp.setRequestHeader("Authorization" , "Bearer " + authtoken)
  xmlhttp.send();

  var data = xmlhttp.responseText;
  var dataToJson = JSON.parse(data)
  console.log(dataToJson);
  $(".song-list").append(dataToJson.tracks.items[0].name);
}

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
