function User(id, handle) {
 this._id = id;
 this._handle = handle;
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
      callback(this._handle);
    }
  });
}

User.prototype.handle = function() {
  return this._handle;
}
