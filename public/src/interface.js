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

    $('.register').append('<h1>Enter your details to register:</h1><br><br>Handle:<input id="newUserHandle" type="text" name="handle" required><br><br>Password:<input id="newUserPassword" type="password" name="password" required><br><br><input id="createUser" type="submit" value="Submit"><br>')

    $("#registerButton").hide()

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
        success: registrationComplete(),
        error: function() {
          alert('error creating new user')
        }
      })
    })

  })

  $('#logInButton').click(function(){

    $('.logIn').append('<h1>Enter your details to login:</h1><br><br>Handle:<input id="logInHandle" type="text" name="handle" required><br><br>Password:<input id="logInPassword" type="password" name="password" required><br><br><input id="logInUser" type="submit" value="Log in"><br>')

    $("#logInButton").hide()

    $('#logInUser').click(function(){
      var sessionHandle = $('#logInHandle').val()
      var sessionPassword = $('#logInPassword').val()
      newSession(sessionHandle, sessionPassword);
    })

  })


  function registrationComplete() {
    $('.header').append('<h2>Registration Complete</h2>');
    $('.register').hide()

  }

  function newSession(handle, password) {

    var userID
    var sessionKey

    $.ajax({
      type: 'POST',
      url: "https://chitter-backend-api.herokuapp.com/sessions" ,
      data: { session: {
        handle: handle,
        password: password
        }
      },

      success: function(sessionData) {
        var userID = sessionData.user_id;
        var sessionKey = sessionData.session_key;

        $('.header').append('<h2>Log in Succesful</h2>');
        $('#registerButton').hide()
        $('.logIn').hide()
        $('.newPeepForm').append('<button id="newPeepButton" type="button" name="newPeepButton">Make a new post</button>')
        $('#newPeepButton').click(function() {
          $('#newPeepButton').hide()
          $('.newPeepForm').append('What\'s Happening? <input id="newPeepBody" type="text" name="newPeepBody"><br><input id="postNewPeepButton" type="submit" value="Post"><br>');
          $('#postNewPeepButton').click(function() {
            var peepBody = $('#newPeepBody').val()
            postNewPeep(userID, sessionKey, peepBody);
          })
        })
      },
      error: function() {
        alert('error starting new session')
      }
    })
  }

  function postNewPeep(userID, sessionKey, peepBody) {

    console.log(userID + " ....userID")
    console.log(sessionKey + " ....sessionKey")
    console.log(peepBody + " ...peepBody")

    $.ajax({
      type: 'POST',
      url: "https://chitter-backend-api.herokuapp.com/peeps",
      beforeSend: function(request) {
              request.setRequestHeader("Authorization", "Token token="+ sessionKey);
            },
      data: {peep: {
        user_id: userID,
        body: peepBody
        }
      },
      success: function(newPeep) {

        $(".latestPeeps").append("<li>" + "<a href='#" + newPeep.id + "' id='" + newPeep.id + "'>" + newPeep.body + "</a>" + "</li>")

        $(".latestPeeps").append('<p class="peepUser" id="' + newPeep.user.id + '">Posted by: <a href="user/' + newPeep.user.id +'">' + newPeep.user.handle + '</a></p>')

        var peepDate = newPeep.created_at.split('T')[0]
        var peepTime = newPeep.created_at.split('T')[1].substring(0,8)

        $(".latestPeeps").append('<p id="peepTime">Posted on ' + peepDate + ' at ' + peepTime + '</p>')

      },
      error: function() {
        alert('error posting peep')
      }
    })
  }
});
