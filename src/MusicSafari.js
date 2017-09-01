(function(exports){
  function MusicSafari(){
    this._authToken = "";
    this._markers = [];
    this._currentLocation = null;
  }

  MusicSafari.prototype = {
    setAuthToken: function(token){
      this._authToken = token;
    },

    getUserId: function (){
      user = new User(this._authToken);
      userId = user.getUserId();
      return userId;
    },

    displayUserName: function() {
      var userName = document.getElementById("user-name");
      userName.innerText = "Logged in as " + this.getUserId();
    },

    createTrackPinObject: function(trackId) {
      var self = this;
      googleMapObject.findLocation(function(location){
        var trackPinObject = {
          location: location,
          trackId: trackId
        };
        self._markers.push(trackPinObject);
        console.log(self._markers);
        googleMapObject.addMapMarker(trackId, location);
      });
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
