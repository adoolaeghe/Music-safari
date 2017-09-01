var spotifyApiRequester = new SpotifyApiRequester();
var trackListView = new TrackListView();
var googleMapObject = new GoogleMapObject();
var musicSafari = new MusicSafari();


async function waitForMapAndData(){

  // Get data from firebase
  await musicSafari.loadFromDatabase();

  // Initialse map
  await googleMapObject.findLocation(function(location){
    googleMapObject.initMap(location);
  });

}
