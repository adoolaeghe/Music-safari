(function (exports){
  function TrackListView(){

  }

  TrackListView.prototype = {
    displayTrackList: function (searchResults) {
      var tracks = searchResults.tracks.items;

      var outputHtml = "<div class='container'><ul class='list-group list-group-flush'>";
      tracks.forEach(function(track){
        outputHtml += "<li class='list-group-item'><div class='row'><div class='col-4'><img class='img-fluid' src=" + track.album.images[0].url + "></div>";
        outputHtml += "<div class='col-4'><p>" + track.name + " by ";
        outputHtml += track.artists[0].name + "</p></div>";
        // outputHtml += "<input type=submit value='Add to map' onclick=musicSafari.createTrackPinObject('" + track.id + "')></input>";
        outputHtml += "<div class='col-4'><button type='button' class='btn btn-secondary add-button' onclick=musicSafari.createTrackPinObject('" + track.id + "')>Add</button>";
        outputHtml += "</div></div></li>";
      });
      outputHtml += "</ul></div>";
      $(".song-list").html(outputHtml);
    }
  };
  exports.TrackListView = TrackListView;
})(this);
