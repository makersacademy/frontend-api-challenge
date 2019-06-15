function User(id, handle, sessionKey) {
 this._id = id;
 this._handle = handle;
 this._sessionKey = sessionKey;
}

User.prototype.session = function(handle, password) {
  $_this = this;
  $.ajax({
    url: "https://chitter-backend-api.herokuapp.com/sessions/",
    type: "POST",
    data: {
      session: {
        handle: handle,
        password: password
      }
    },
    success: function(result) {
      $_this._sessionKey = result.session_key;
    }
  });
}

User.prototype.create = function(handle, password, callback) {
  $_this = this;
  $.ajax({
    url: "https://chitter-backend-api.herokuapp.com/users",
    type: "POST",
    data: {
      user: {
        handle: handle,
        password: password
      }
    },
    error: function() {
      return "Error submitting details. Please try again later.";
    },
    success: function(result) {
      $_this._id = result.id;
      $_this._handle = result.handle;
      $_this.session($_this._handle, password);
      callback($_this._handle);
    }
  });
}

User.prototype.login = function(handle, password, callback) {
  var $_this = this;
  this.getUserId(handle, function(id) {
    $.ajax({
      url: "https://chitter-backend-api.herokuapp.com/users/" + id,
      type: "GET",
      error: function() {
        return "Error getting login info. Please try again later.";
      },
      success: function(result) {
        $_this._id = result.id;
        $_this._handle = result.handle;
        $_this.session(handle, password);
        callback($_this._handle);
      }
    });
  });

}

User.prototype.getUserId = function(handle, callback) {
  $_this = this;
  $.ajax({
    url: "https://chitter-backend-api.herokuapp.com/users/",
    type: "GET",
    success: function(result) {
      result.forEach(function(user) {
        if(user.handle == handle) {
          $_this._id = user.id;
        }
      });
      callback($_this._id);
    }
  });
}
