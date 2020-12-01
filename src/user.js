$(document).ready(function(){

  var handle = $('#username');
  var password = $('#password');
  var newSession = '';
  var userId = '';
  var peep = $('#peep')

  //create new user
  $('#register').on('click', function() {
    console.log("hello")
    var newAccount = {
      user: {
      handle: handle.val(),
      password: password.val()
      }
    }
    $.ajax({
      type:'POST',
      url: 'https://chitter-backend-api.herokuapp.com/users',
      data: newAccount,
      success: function(newUser) {
        alert("You are now registered on chitter, please login to peep");
        console.log(newUser);
      }
    });
  });

  // user can log in, username taj485 and password taj4855
  $('#login').on('click',function() {
    var data = {
      session: {
        handle: handle.val(),
        password: password.val(),
      }
    }

    $.ajax({
      type:'POST',
      url:'https://chitter-backend-api.herokuapp.com/sessions/',
      data: data,
      success: function(result) {
        newSession = result.session_key;
        userId = result.user_id;
      },
      error: function() {
        alert('error logging in')
      }
    });
    console.log(userId);
  });

  //user can send peeps once logged in
  $('#submitPeep').on('click', function() {
    var newPeep = {
      peep: {
        user_id: 1200,
        body: peep.val(),
      }
    }

    $.ajax({
      type: 'POST',
      url: 'https://chitter-backend-api.herokuapp.com/peeps',
      headers:{'Authorization': 'Token token=' + newSession},
      data: newPeep,
      success: function(result) {
        console.log(result);
      }
    });
  });
});
