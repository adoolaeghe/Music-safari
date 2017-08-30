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
      var trackList = document.createElement("ul");
      tracks.forEach(function(track) {
        var trackLi = document.createElement("li");
        var trackName = document.createTextNode(track.name);
        var trackText = trackLi.appendChild(trackName);
        trackLi.appendChild(trackText);
        trackList.appendChild(trackLi);
      });

      $(".song-list").append(trackList);
    };
    displayTrackList(searchResults);
  }
});

$("#open-map").click(function() {
  var googleApiRequester = new GoogleApiRequester();
  googleApiRequester.findLocation();
});
