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
      console.log(userName);
      userName.innerText = "Logged in as " + this.getUserId();
      console.log(userName);
    }
  }

  exports.MusicSafari = MusicSafari
})(this);
