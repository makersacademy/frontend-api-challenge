(function(exports){

  var CHITTER_API_URL = 'https://chitter-backend-api.herokuapp.com'
  
  function APIModel() {

  }
  APIModel.prototype = {
    getPeepFeed: function(callback) {
      $.ajax({url: CHITTER_API_URL + '/peeps', success: function(data, status) {
          callback(data)
        }
      })
    },
    getPeep: function(peepId, callback) {
      $.ajax({url: CHITTER_API_URL + `/peeps/${peepId}`, success: function(data, status) {
        callback(data)
        }
      })
    }
  }

  exports.APIModel = APIModel
})(this)