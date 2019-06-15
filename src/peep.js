function Peep() {
  this._result = [];
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
