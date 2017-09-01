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
        // Save to firebase
        self.saveToDatabase(trackPinObject);
        // Add map marker
        googleMapObject.addMapMarker(trackId, location);
      });
    },

    saveToDatabase: function(trackPinObj){
      database.ref('trackPinObjects/').push(trackPinObj);
    },

    loadFromDatabase: function(){
      database.ref('trackPinObjects').once('value')
      .then(function(snapshot){ var s = snapshot.val(); console.log(s)})
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
