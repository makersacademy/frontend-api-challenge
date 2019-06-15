function User(id, handle, sessionKey) {
 this._id = id;
 this._handle = handle;
 this._sessionKey = sessionKey;
}

User.prototype.session = function(handle, password) {
  $.ajax({
    url: "https://chitter-backend-api.herokuapp.com/sessions",
    type: "POST",
    data: {
      session: {
        handle: handle,
        password: password
      }
    },
    success: function(result) {
      this._sessionKey = result.session_key;
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
      console.log($_this._id);
      console.log($_this._handle);
      callback($_this._handle);
    }
  });
}

User.prototype.handle = function() {
  return this._handle;
}
