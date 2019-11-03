(function(exports){

  var CHITTER_API_URL = 'https://chitter-backend-api.herokuapp.com'
  function APIModel() {

  }
  APIModel.prototype = {
    getPeepFeed: function(callback) {
      $.ajax({
        url: CHITTER_API_URL + '/peeps',
        success: function(data, status) {
          callback(data)
        }
      })
    },
    getPeep: function(peepId, callback) {
      $.ajax({
        url: CHITTER_API_URL + `/peeps/${peepId}`,
        success: function(data, status) {
          callback(data)
        }
      })
    },
    login: function(creds, callback) {
      $.ajax({
        url: CHITTER_API_URL + '/sessions',
        type: 'POST',
        dataType: 'json',
        data: loginParams(creds),
        headers: {
          'Content-Type':'application/json'
        },
        success: function(data) {callback(data)}
      })
    }
  }

  var loginParams = function(params) {
    return `{"session": {"handle":"${params.handle}", "password":"${params.password}"}}`
  }

  exports.APIModel = APIModel
})(this)
