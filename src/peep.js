function Peep(user_handle, peep_body) {
  this._result = [];
  this.user_handle = user_handle;
  this.body = peep_body;
}

Peep.prototype.getPeeps = function(peepId, callback) {
  $.ajax({
    url: "https://chitter-backend-api.herokuapp.com/peeps/" + peepId,
    type: "GET",
    error: function() {
      return "Error loading peeps";
    },
    success: function(result) {
      this._result = result;
      callback(result);
    }
  });
}

Peep.prototype.postPeep = function(userId, msg_body, sessionKey, callback) {
  $.ajax({
    url: "https://chitter-backend-api.herokuapp.com/peeps",
    type: "POST",
    headers: {
      "Authorization":`Token token=${sessionKey}`
    },
    data: {
      peep: {
        user_id: userId,
        body: msg_body
      }
    },
    error: function() {
      return "Error loading peeps";
    },
    success: function(result) {
      this.user_handle = result.user.handle;
      this.body = result.body;
      callback(result);
    }
  });
}
