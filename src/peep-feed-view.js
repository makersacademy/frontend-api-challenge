function PeepFeedView () {
  this.peepsText = []
}

PeepFeedView.prototype = (function () {

  function display () {
    var self = this
    $.ajax({
      url: "https://chitter-backend-api.herokuapp.com/peeps",
      type: 'GET',
      dataType: 'json',
      success: function(response) {
        response.forEach(function (peep) {
          self.peepsText.push(peep.body)
        })
      }
    });
  }

  return {
    display: display
  }
})()

