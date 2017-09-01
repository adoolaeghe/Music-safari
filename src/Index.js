var spotifyApiRequester = new SpotifyApiRequester();
var trackListView = new TrackListView();
var googleMapObject = new GoogleMapObject();
var musicSafari = new MusicSafari();
googleMapObject.findLocation(function(location){
googleMapObject.initMap(location);
console.log('here')
});
