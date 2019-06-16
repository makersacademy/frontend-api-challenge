
$(document).ready(function () {
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

  setUser = function(handle) {
    
  }
      // Leave the following one - it's the whole thing
    });

