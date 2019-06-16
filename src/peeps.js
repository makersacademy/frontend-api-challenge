$(document).ready(function(){
  $.get('https://chitter-backend-api.herokuapp.com/peeps', function(data) {
    data.forEach(function(element) {
      $(".peep-container").append("<p>" + "user: " + element.user["handle"] + " " + element.body + " " + element.created_at +"<p>");
    });

// {"id":828,"body":"Final test.","created_at":"2019-06-15T23:41:43.288Z","updated_at":"2019-06-15T23:41:43.288Z","user":{"id":1144,"handle":"meg1704"},"likes":[]}

  });

  // $(document).ready(function(){
  //   $("#btn1").click(function(){
  //     $("p").append(" <b>Appended text</b>.");
  //   });
  //
  //   $("#btn2").click(function(){
  //     $("ol").append("<li>Appended item</li>");
  //   });
  // });
  //
});
