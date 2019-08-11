$(document).ready(function(){

  $.get('https://chitter-backend-api.herokuapp.com/peeps', function(data) {
    data.forEach(function(element) {
      $(".shows-peeps").append("<p>" + " user: " + element.user["handle"] + "<p>" + " body: " + element.body + "<p>" + "created at: " + element.created_at +"<p>" + "-------");
    });
  });


});
