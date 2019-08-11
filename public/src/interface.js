$( document ).ready(function() {

  $.ajax({
    type: "GET",
    url: "https://chitter-backend-api.herokuapp.com/peeps",
    success: listEachPeep,
    error: function(jqXHR, textStatus, error) {
      alert('error loading data');
    }
  })

  function listEachPeep(data) {

    $.each(data, function(i, peep) {

      $(".latestPeeps").append("<li>" + "<a href='#" + peep.id + "' id='" + peep.id + "'>" + peep.body + "</a>" + "</li>")

      $(".latestPeeps").append('<p class="peepUser" id="' + peep.user.id + '">Posted by: <a href="user/' + peep.user.id +'">' + peep.user.handle + '</a></p>')

      var peepDate = peep.created_at.split('T')[0]
      var peepTime = peep.created_at.split('T')[1].substring(0,8)

      $(".latestPeeps").append('<p id="peepTime">Posted on ' + peepDate + ' at ' + peepTime + '</p>')
      if (data.likes !== undefined && peep.likes.length !== 0) {
        $.each(data.likes, function(i, like) {
          $(".latestPeeps").append('<p id="likes">Liked by ' + like.user.handle + '</p>')
        })
      }
    });
  }

  $('#registerButton').click(function(){

    $('.register').append('<h1>Enter your details to login:</h1><br><br>Handle:<input id="newUserHandle" type="text" name="handle" required><br><br>Password:<input id="newUserPassword" type="password" name="password" required><br><br><input id="createUser" type="submit" value="Submit"><br>')

    $('#createUser').click(function() {

      var newUserData = {
        user: {
          handle: $('#newUserHandle').val(),
          password: $('#newUserPassword').val()
        }
      }


      $.ajax({
        type: 'POST',
        url: "https://chitter-backend-api.herokuapp.com/users",
        data: newUserData,
        success: console.log("registration has worked!"),// newSession(newUserData),
        error: function() {
          alert('error creating new user')
        }
      })
    })

  })

  function newSession(userData) {
    $.ajax({
      type: 'POST',
      url: "https://chitter-backend-api.herokuapp.com/sessions" ,
      data: newSessionData,
      success: alert('New session started'),
      error: function() {
        alert('error starting new session')
      }
    })
  }

});
