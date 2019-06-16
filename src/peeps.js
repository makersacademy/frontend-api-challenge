$(document).ready(function(){

  $.get('https://chitter-backend-api.herokuapp.com/peeps', function(data) {
    data.forEach(function(element) {
      $(".peep-container").append("<p>" + "user: " + element.user["handle"] + " " + element.body + " " + element.created_at +"<p>");
    });
  });

});
