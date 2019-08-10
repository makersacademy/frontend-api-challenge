$( document ).ready(function() {

  var $latestPeeps = $("#latestPeeps")
  $.get("https://chitter-backend-api.herokuapp.com/peeps", function(peeps) {
   $.each(peeps, function(i, peep) {
     $latestPeeps.append('<li>Peep: ' + peep.body + '</li>')
     $latestPeeps.append('<p id="peepUser">Posted by: ' + peep.user.handle + '</p>')
     var peepDate = peep.created_at.split('T')[0]
     var peepTime = peep.created_at.split('T')[1].substring(0,8)
     $latestPeeps.append('<p id="peepTime">Posted on ' + peepDate + ' at ' + peepTime + '</p>')
     if (peep.likes !== undefined && peep.likes.length !== 0) {
       $.each(peeps.likes, function(i, like) {
         $latestPeeps.append('<p id="likes">Liked by ' + like.user.handle + '</p>')
       })
     }
   })
  });

});
