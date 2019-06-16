$(document).ready(function(){

  var $handle = $('#username');
  var $password = $('#password');
  var $newSession = '';
  var $peep = $('#peep')

  $('#login').on('click',function() {
    var data = {
      session: {
        handle: $handle.val(),
        password: $password.val(),
      }
    }

    $.ajax({
      type:'POST',
      url:'https://chitter-backend-api.herokuapp.com/sessions/',
      data: data,
      success: function(newSession) {
        $newSession = newSession.session_key;
      },
      error: function() {
        alert('error logging in')
      }
    });
  });


});
// User.prototype.session = function(name,password) {
//   this.sessionId =
//
//   $.post('https://chitter-backend-api.herokuapp.com/sessions', function(session) {
//     console.log(session)
//     });
//
// }
//
//
// https://chitter-backend-api.herokuapp.com/users
// {"session": {"handle":"sarah123", "password":"sarah123"}}
//
// https://chitter-backend-api.herokuapp
// .com/sessions
// {"user_id":1145,"session_key":"_2a_10_jJWvTTQxis9w9ZAdCsn0QO"}
