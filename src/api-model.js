(function(exports){

    var chitterUrl = 'https://chitter-backend-api.herokuapp.com'
  
    function APIModel () {}

    APIModel.prototype = {
      getPeeps: function(callback) {
        $.ajax({
          url: chitterUrl + '/peeps',
          success: function(data, status) {
            callback(data)
          }
        })
      }
    }
  
  exports.APIModel = APIModel
})(this)