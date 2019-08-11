$( document ).ready(function() {

var latestPeepsJSON = "https://chitter-backend-api.herokuapp.com/peeps"

function viewAllPeeps() {

  var $latestPeeps = $(".latestPeeps")
  $.get(latestPeepsJSON, function(peeps) {
   $.each(peeps, function(i, peep) {

     $latestPeeps.append("<li class='abbrevPeep'>" + "<a href='#" + peep.id + "' id='" + peep.id + "'>" + peep.body + "</a>" + "</li>")

     $latestPeeps.append('<p class="peepUser" id="' + peep.user.id + '">Posted by: <a href="user/' + peep.user.id +'">' + peep.user.handle + '</a></p>')

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
}

  // $("li.abbrevPeep a").click(function() {
  //   console.log("BEING CALLED")
  //   var link = $(this).attr("href");
  //   $("#latestPeepsDiv").load(link);
  //   peepID = location.hash.split("#")[1]
  //   console.log(peepID + " ...peepID")
  //
  //   $.get(latestPeepsJSON, function(peeps) {
  //     $.each(peeps, function(i, peep) {
  //       if (peep.id === peepID) {
  //         $("#individualPeep").text(peep.body)
  //       }
  //     });
  //   })
  //   $("#latestPeepsDiv").remove();
  //   event.preventDefault();
  // });
  viewAllPeeps()

});
