$(document).ready(function(){
  $('#user-name').hide();

  $(document).on('keypress', '#trackname', function() {
    if(event.which === 13) { // check the key was <enter>
      var input = $(this);
      var trackname = input.val();
      var spotifyApiRequester = new SpotifyApiRequester();
      var searchResults = spotifyApiRequester.searchForTrack(trackname);
      var displayTrackList = function (searchResults) {
      var tracks = searchResults.tracks.items;
      console.log(tracks);
      var trackList = document.createElement("ul");
      tracks.forEach(function(track) {
        var trackName = document.createTextNode(track.name);
        var trackLi = document.createElement("li");
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
  
  var params = getHashParams();
  musicSafari = new MusicSafari(params.access_token)
  musicSafari.displayUserName();
});
