$(document).on('keypress', '#trackname', function() {
  if(event.which === 13) { // check the key was <enter>
    var input = $(this);
    var trackname = input.val();
    var spotifyApiRequester = new SpotifyApiRequester();
    var searchResults = spotifyApiRequester.searchForTrack(trackname);
    console.log(searchResults);
    $(".song-list").append(searchResults.tracks.items[0].name);
  }
});

$("#open-map").click(function() {
  var googleApiRequester = new GoogleApiRequester();
  googleApiRequester.findLocation();
});
