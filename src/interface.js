$(document).ready(function() {

   $('#getPeeps').on('click', function() {
    var url = 'https://chitter-backend-api.herokuapp.com/peeps'; // given api
    $.get(url, function(data) {
      $('#listPeeps').text(data.map(peep => peep.body));
    })
  });

 })
