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

    createTrackPinObject: function(trackId) {
      var self = this;
      googleMapObject.findLocation(function(){
        var trackPinObject = {
          location: self.getCurrentLocation(),
          trackId: trackId
        };
        self._markers.push(trackPinObject);
        console.log(self._markers);
      });


      // var self = this;
      // var locationPromise = new Promise(function(resolve, reject) {
      //   googleMapObject.findLocation(resolve);
      //   // if (self.getCurrentLocation() !== null){
      //   //   resolve();
      //   // }
      // });
      // locationPromise.then(function(){
      //   var trackPinObject = {
      //     location: self.getCurrentLocation(),
      //     trackId: trackId
      //   };
      //   self._markers.push(trackPinObject);
      //   console.log(self._markers);
      // }).catch(function(e){
      //   console.log(e);
      // })
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
