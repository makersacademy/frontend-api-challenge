(function(exports){

  var CHITTER_API_URL = 'https://chitter-backend-api.herokuapp.com'
  
  var getPeepFeed = function(callback) {
    $.ajax({url: CHITTER_API_URL + '/peeps', success: function(data, status) {
        callback(data)
      }
    })
  }

  var APIModel = {
    getPeepFeed: getPeepFeed
  }

  exports.APIModel = APIModel
})(this)