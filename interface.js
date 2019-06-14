$(document).ready(function(){
  $.get('https://chitter-backend-api.herokuapp.com/peeps', function(data) {
    response = data 
    for (var i = 0; i < response.length; i++) {
      console.log(response[i]);
      peep = "<li>"+ '<div>' + response[i].user.handle +'</div> <div>' + response[i].body + "</div> </li>"
      $('.peeps').append(peep);
    };
  });

});