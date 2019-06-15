function User(id, handle) {
 this._id = id;
 this._handle = handle;
}

User.prototype.create = function(handle, password) {
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
      return "Error loading peeps";
    },
    success: function(result) {
      this._id = result.id;
      this._handle = result.handle;
    }
  });
}
