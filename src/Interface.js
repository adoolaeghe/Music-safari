$(document).on('keypress', '#trackname', function() {
  if(event.which === 13) { // check the key was <enter>
    var input = $(this);
    var trackname = (input.val()).split(' ').join('&');
    var spotifyApiRequester = new SpotifyApiRequester();
    var searchResults = spotifyApiRequester.searchForTrack(trackname);
    console.log(searchResults);
    var displayTrackList = function (searchResults) {
      var tracks = searchResults.tracks.items;
      console.log(tracks);
      tracks.forEach(function(track) {
        var trackLi = document.createElement("div");
        var trackName = document.createTextNode(track.name);
        trackLi.appendChild(trackName);
        console.log(trackName);
        $(".song-list").append(trackLi);
      });
    };
    displayTrackList(searchResults);
  }
});

$("#open-map").click(function() {
  var googleApiRequester = new GoogleApiRequester();
  googleApiRequester.findLocation();
});
