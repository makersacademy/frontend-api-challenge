$(document).ready(function(){
  $.get('https://chitter-backend-api.herokuapp.com/peeps', function(data) {
    data.forEach(function(element) {
      $(".peeps").append("<li>" + element.body + "</li>");
    });

    
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
