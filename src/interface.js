$(document).ready(function(){

  $.get('https://chitter-backend-api.herokuapp.com/peeps', function(data) {
    data.forEach(function(element) {
      $(".shows-peeps").append("<p>" + " user: " + element.user["handle"] + "<p>" + " body: " + element.body + "<p>" + "created at: " + element.created_at +"<p>" + "-------");
    });
    console.log(data);
  });

  var handle = $('#username');
  var password = $('#password');
  var newSession = '';
  var userId = '';
  var peep = $('#peep')

  //create new user
  $('#register').on('click', function() {
    var newAccount = {
      user: {
        handle: handle.val(),
        password: password.val()
      }
    }
    $.ajax({
      type: 'POST',
      url: 'https://chitter-backend-api.herokuapp.com/users',
      data: newAccount,
      success: function(newUser) {
        alert("Sign up succeeded, please login to peep");
        console.log(newUser);
      }
    });
  });

  //login
  $('#login').on('click', function() {
    var data = {
      session: {
        handle: handle.val(),
        password: password.val(),
      }
    }
    $.ajax({
      type: 'POST',
      url: 'https://chitter-backend-api.herokuapp.com/sessions/',
      data: data,
      success: function(result) {
        newSession = result.session_key;
        userID = result.user_id;
        alert("You are logged in");
        console.log(newSession);
      },
      error: function() {
        alert('Did not logged in')
      }
    });
  });

});
