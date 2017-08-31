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
      var self = this;
      var locationPromise = new Promise(function(resolve, reject) {
        googleApiRequester.findLocation();
        if (self.getCurrentLocation() !== null){
          resolve();
        }
      });
      locationPromise.then(function(){
        var trackPinObject = {
          location: self._currentLocation,
          trackId: trackId
        };
        self._markers.push(trackPinObject);
        console.log(self._markers);
      })
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
