$(document).ready(function(){

  $.get('https://chitter-backend-api.herokuapp.com/peeps', function(response) {
    for (var i = 0; i < response.length; i++) {
      let dateTime = response[i].created_at
      peep = "<li id="+response[i].id+">"+ "<div class='peep-metadata'>@" + response[i].user.handle + " - " +  
            "</div> <div class='peep'>" + response[i].body + "</div></li>"
      $('.peeps').append(peep);
    };
  });
});