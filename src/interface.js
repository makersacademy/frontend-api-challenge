$(document).ready(function(){

  var $items = $('#showPeeps')
  var handle = $('#username');
  var password = $('#password');
  var newSession = '';
  var userId = '';
  var peep = $('#peep');

  var peepsTemplate = '<li>User: {{user.handle}} <p> Body: {{body}} <p> Created at: {{created_at}} </li>';
  //show peeps
  $.ajax({
    type: 'GET',
    url: 'https://chitter-backend-api.herokuapp.com/peeps',
    success: function(items) {
      $.each(items, function(i, item) {
        // $items.append('<li>user: '+ item.user["handle"] + '<p>' + 'body: ' + item.body + '<p>' + 'created at: ' + item.created_at +'</li>' + '<p>' + "-------" + '<input class="button" id="delete" type="button" value="Delete" />');
        $items.append(Mustache.render(peepsTemplate, item));
      })
    }
  });

  //create new user
  $('#signUp').on('click', function() {
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
        console.log(data);
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
        userId = result.user_id;
        alert("You are logged in");
      },
      error: function() {
        alert('Username or password wrong')
      }
    });
  });

  //send peeps
  $('#sendPeep').on('click', function() {
    var newPeep = {
      peep: {
        user_id: userId,
        body: peep.val(),
      }
    }
    $.ajax({
      type: 'POST',
      url: 'https://chitter-backend-api.herokuapp.com/peeps',
      data: newPeep,
      headers: {'Authorization': 'Token token=' + newSession},
      success: function(result) {
        alert("You posted a peep");
      }
    });
  });

  //like
  // $('#delete').on('click', function() {
  //   var deletePeep = {
  //     newSession = result.session_key;
  //     userId = result.user_id;
  //   }
  // })

});
