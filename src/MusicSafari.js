(function(exports){
  function MusicSafari(authToken){
      this._authToken = authToken;
      this._markers = [];
  }

  MusicSafari.prototype = {
    getUserId: function (){
      user = new User(this._authToken);
      userId = user.getUserId();
      return userId;
    },

    displayUserName: function() {
      var userName = document.getElementById("user-name");
      userName.innerText = "Logged in as " + this.getUserId();
    },

    addMarker: function(trackId) {
      var trackPinObject = {
        location: googleApiRequester.findLocation(),
        trackId: trackId
      }
      this._markers.push(trackPinObject);
      console.log(this._markers);
    }
  };

  exports.MusicSafari = MusicSafari;
})(this);
