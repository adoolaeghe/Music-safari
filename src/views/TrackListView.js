(function (exports){
  function TrackListView(){

  }

  TrackListView.prototype = {
    displayTrackList: function (searchResults) {
      var tracks = searchResults.tracks.items;

      var outputHtml = "<ul>";
      tracks.forEach(function(track){
        outputHtml += "<li><img class='album-thumbnail' src=" + track.album.images[0].url + ">";
        outputHtml += track.name + ", ";
        outputHtml += track.artists[0].name;
        outputHtml += "</li>";
      });
      outputHtml += "</ul>";
      $(".song-list").append(outputHtml);
    }
  };
  exports.TrackListView = TrackListView;
})(this);
