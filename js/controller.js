$(document).ready(function () {

  var $usernameAlert = $("#usernameAlert");

  $usernameAlert.on("close.bs.alert", function () {
    $usernameAlert.attr('hidden','true');
    return false;
  });

  createFeed = function () {
      // Can use the JQuery Load() function here?
    $.get('https://chitter-backend-api.herokuapp.com/peeps', function (response) {
      var myHTML = '';
      for (i = 0; i < response.length; i++) {
        myHTML += `<div class="card">
                  <div class="card-header">
                   ${response[i]['user']['handle']}
                  </div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                   <p>${response[i]['body']}</p>
                   <footer class="blockquote-footer">${response[i]['created_at']}</footer>
                  </blockquote>
                </div>
                </div>`
      };
      $("#feed").html(myHTML);
    });
  };
  
  setTimeout(function () { createFeed(); }, 10);

    createUser = function(handle, password) {
      $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "https://chitter-backend-api.herokuapp.com/users",
        data: `{"user": {"handle":"${handle}", "password":"${password}"}}`,
        dataType: "json"
      });
    };

  $("#login-form").submit(function (event) {
    event.preventDefault(); 
    form_data = $(this).serialize(); //Encode form elements for submission
    var handle = $("input#username").val();
    var password = $("input#password").val();
    $.ajax({
      url: 'https://chitter-backend-api.herokuapp.com/users',
      contentType: "application/json; charset=utf-8",
      type: 'POST',
      data: `{"user": {"handle":"${handle}", "password":"${password}"}}`,
      dataType: "json",
      statusCode: {
        422: function () {
          $("#usernameAlert").removeAttr('hidden');
          // AfterSavedAll();
        },
        200: function () {
          alert('2');
          AfterSavedAll();
        },
        error: function (e) {
          alert("Server error - " + e);
        } 
      }
    }).done(function (response) { //
      $("#server-results").html(response);
    });
  });
      // Leave the following one - it's the whole thing
    });

