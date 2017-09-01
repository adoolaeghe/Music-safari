$(document).ready(function(){
  $('#user-name').hide();
  // var params = getHashParams();
  // musicSafari = new MusicSafari(params.access_token);
  // musicSafari.displayUserName();

$(document).ready(function() {
    $("#searchButton").button().click(function(e) {
        e.preventDefault();
        var input = $(this);
        var trackname = document.getElementById("trackName").value;
        var searchResults = spotifyApiRequester.searchForTrack(trackname);
        trackListView.displayTrackList(searchResults);
        $.scrollTo($('song-list'), 1000);
    });
  });
});
