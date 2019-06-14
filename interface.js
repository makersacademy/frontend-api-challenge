$(document).ready(function(){
  var response;
  var i;
  $.get('https://chitter-backend-api.herokuapp.com/peeps', function(data) {
    var response = data;
    for (var i = 0; i < response.length; i++) {
      peep = "<li id="+response[i].id+">"+ "<div class='peep-info'>" + response[i].user.handle + "</div> <div class='peep'>" + response[i].body + "</div> </li>"
      $('.peeps').append(peep);
      individualPeep(response[i].id);
    };
  });
  
  function individualPeep(id) {
    $('#'+id).click(function () {
      popup();
      $.get('https://chitter-backend-api.herokuapp.com/peeps/'+id, function(peep) {
        console.log(peep);
        $('.singlePeepInfo').text(peep.user.handle);
        $('.singlePeep').text(peep.body);
      });
    });
  };

  function popup() {
    $('.popup').fadeIn(500);

    $(".close").click(function () {
      $(".popup").fadeOut(500);
    });
  };
  
});