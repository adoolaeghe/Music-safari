(function(exports){
  function MusicSafari(authToken){
      this._authToken = authToken;
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
    }
  };

  exports.MusicSafari = MusicSafari;
})(this);
