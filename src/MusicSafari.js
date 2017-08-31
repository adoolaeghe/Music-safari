(function(exports){
  function MusicSafari(authToken){
      this._authToken = authToken;
      this._markers = [];
      this._currentLocation = null;
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
      googleApiRequester.findLocation();
      var trackPinObject = {
        location: this._currentLocation,
        trackId: trackId
      };
      this._markers.push(trackPinObject);
      console.log(this._markers);
    },

    setCurrentLocation: function(location) {
      this._currentLocation = location;
    },

    getCurrentLocation: function() {
      return this._currentLocation;
    }
  };

  exports.MusicSafari = MusicSafari;
})(this);
