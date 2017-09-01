$(document).ready(function(){
  $('#user-name').hide();

  $(document).on('keypress', '#trackname', function() {
    if(event.which === 13) { // check the key was <enter>
      var input = $(this);
      var trackname = input.val();
      var searchResults = spotifyApiRequester.searchForTrack(trackname);
      trackListView.displayTrackList(searchResults);
    }
  });
});
