Chitter = function() {
  this.user_id = null;
  this.username = null;
  this.session_id = null;
}

Chitter.prototype.createFeed = function() {
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

Chitter.prototype.loginUser = function(handle, password) {
  $this = this
  var Data;
  request = $.ajax({
    url: 'https://chitter-backend-api.herokuapp.com/sessions',
    contentType: "application/json; charset=utf-8",
    type: 'POST',
    data: `{"session": {"handle":"${handle}", "password":"${password}"}}`,
    dataType: "json",
    success: function (response) {
      Data = response;
    },
    statusCode: {
      422: function () {
        $("#loginPasswordAlert").removeAttr('hidden');
      },
      500: function () {
        $("#loginUsernameAlert").removeAttr('hidden');
      },
      201: function () {
        $("#banner-and-nav-logged-in").removeAttr('hidden');
        $("#banner-and-nav-register").attr('hidden', 'true');
      },
      error: function (e) {
        alert("Server error - " + e);
      }
    }
  });
  request.done(function(Data){
    $this.username = handle;
    $this.user_id = Data['user_id'];
    $this.session_id = Data['session_key'];
  });  
}

Chitter.prototype.register = function(handle, password) {
  $.ajax({
    url: 'https://chitter-backend-api.herokuapp.com/users',
    contentType: "application/json; charset=utf-8",
    type: 'POST',
    data: `{"user": {"handle":"${handle}", "password":"${password}"}}`,
    dataType: "json",
    statusCode: {
      422: function () {
        $("#registerUsernameAlert").removeAttr('hidden');
      },
      201: function () {
        $("#banner-and-nav-logged-in").removeAttr('hidden');
        $("#banner-and-nav-register").attr('hidden', 'true');
        $('#registerModal').modal('toggle');
      },
      error: function (e) {
        alert("Server error - " + e);
      }
    }
  })
}

