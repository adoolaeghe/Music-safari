(function(exports){
  function User(authToken){
      this._authToken = authToken;
      this._apiUrl = 'https://api.spotify.com/v1/me';
  }

  User.prototype = {
    getUserData: function (){
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open('GET', this._apiUrl, false);
      xmlhttp.setRequestHeader("Authorization", "Bearer " + this._authToken);
      xmlhttp.send();
    }
  }


})(this);
