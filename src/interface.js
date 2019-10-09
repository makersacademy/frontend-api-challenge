$(document).ready(function(){

  var $showPeeps = $('#showPeeps')
  var handle = $('#username');
  var password = $('#password');
  var newSession = '';
  var userId = '';
  var $peep = $('#peep');

  var peepsTemplate = "" +
  "<li>" +
  "<p><strong>User:</strong> {{user.handle}} </p>" +
  "<p><strong>Body:</strong> {{body}} </p>" +
  "<p><strong>Created at</strong>: {{created_at}}</p>" +
  '<input class="delete" data-id="{{id}}" type="button" value="Delete" />' +
  '<input class="like" data-id="{{id}}" type="button" value="Like" />' +
  "</li>";

  //show peeps
  $.ajax({
    type: 'GET',
    url: 'https://chitter-backend-api.herokuapp.com/peeps',
    success: function(peeps) {
      $.each(peeps, function(i, peep) {
        $showPeeps.append(Mustache.render(peepsTemplate, peep));
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
        body: $peep.val(),
      }
    }
    $.ajax({
      type: 'POST',
      url: 'https://chitter-backend-api.herokuapp.com/peeps/',
      data: newPeep,
      headers: {'Authorization': 'Token token=' + newSession},
      success: function(peep) {
        alert("You posted a peep");
        $showPeeps.append("<li>" +
        "<p><strong>User:</strong>" + peep.user["handle"] + "</p>" +
        "<p><strong>Body:</strong>" + peep.body + "</p>" +
        "<p><strong>Created at</strong>:" + peep.created_at + "</p>" +
        '<input class="delete" data-id="{{id}}" type="button" value="Delete" />' +
        "</li>");
      },
      error: function() {
        alert('New peep not saved')
      }
    });
    console.log(newPeep);
  });

  //delete
  $showPeeps.delegate('.delete','click', function() {

    var $li = $(this).closest('li');

    $.ajax({
      type: 'DELETE',
      url: 'https://chitter-backend-api.herokuapp.com/peeps/' + $(this).attr('data-id'),
      headers: {'Authorization': 'Token token=' + newSession},
      data: userId,
      success: function() {
        $li.remove();
      }
    });
  });

  //Like
  $showPeeps.delegate('.like','click', function() {

    var $li = $(this).closest('li');

    $.ajax({
      type: 'PUT',
      url: 'https://chitter-backend-api.herokuapp.com/peeps/' + $(this).attr('data-id') + '/likes/' + userId,
      headers: {'Authorization': 'Token token=' + newSession},
      data: userId,
      success: function() {
        $li.remove();
      }
    });
  });

});
