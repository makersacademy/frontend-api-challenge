function User(id, handle, sessionKey) {
 this._id = id;
 this._handle = handle;
 this._sessionKey = sessionKey;
}

User.prototype.create = function(handle, password, callback) {
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
      this._id = result.id;
      this._handle = result.handle;
      this.session(this._handle, password)
      callback(this._handle);
    }
  });
}

User.prototype.session = function(handle, password, callback) {
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

User.prototype.handle = function() {
  return this._handle;
}
