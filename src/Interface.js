$(document).ready(function(){
  $('#user-name').hide();
  // var params = getHashParams();
  // musicSafari = new MusicSafari(params.access_token);
  // musicSafari.displayUserName();

  $(document).on('keypress', '#trackname', function() {
    if(event.which === 13) { // check the key was <enter>
      var input = $(this);
      var trackname = input.val();
      var searchResults = spotifyApiRequester.searchForTrack(trackname);
      trackListView.displayTrackList(searchResults);
    }
  });

  $("#open-map").click(function() {
    googleMapObject.findLocation();
  });
});
