(function(exports){

  var CHITTER_API_URL = 'https://chitter-backend-api.herokuapp.com'
  
  var getPeepFeed = function(callback) {
    $.ajax({url: CHITTER_API_URL + '/peeps', success: function(data, status) {
        callback(data)
      }
    })
  }

  var ChitterModel = {
    getPeepFeed: getPeepFeed
  }

  exports.ChitterModel = ChitterModel
})(this)