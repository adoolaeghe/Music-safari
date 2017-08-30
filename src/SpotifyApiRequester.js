(function(exports){
  function SpotifyApiRequester(){
    this._accessToken = getHashParams().access_token;
  }

  SpotifyApiRequester.prototype = {
    searchForTrack: function(trackname){
      var url = "https://api.spotify.com/v1/search?query=" + trackname + "&type=track&market=US" ;
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open('GET', url, false);
      xmlhttp.setRequestHeader("Authorization", "Bearer " + this._accessToken);
      xmlhttp.send();
      var data = xmlhttp.responseText;
      return JSON.parse(data);
    }
  };

  exports.SpotifyApiRequester = SpotifyApiRequester
})(this);
