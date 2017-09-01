$(document).ready(function(){
  $('#user-name').hide();

$(document).ready(function() {
    $("#searchButton").button().click(function(e) {
        e.preventDefault();
        var input = $(this);
        var trackname = document.getElementById("trackName").value;
        var searchResults = spotifyApiRequester.searchForTrack(trackname);
        trackListView.displayTrackList(searchResults);
    });
  });
});
