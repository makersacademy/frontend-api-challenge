$(document).ready(function (){

  var showSignupForm = true;
  signupFormToggle();

  $('#signupSubmit').click(function(){
    var uname = $('#signupName').val();
    var pword = $('#signupPassword').val();
    var data = `{"user": {"handle":"${uname}", "password":"${pword}"}}`;
    var dataJson = JSON.parse(data);
    $.post("https://chitter-backend-api.herokuapp.com/users", dataJson)
      .done(function(){
        alert('User created');
      })
      .fail(function() {
        alert( "Unable to create user" );
      })
    signupFormToggle();
    $('#signupName').val('')
    $('#signupPassword').val('')
  });

  $('#signupButton').click(function(){
    signupFormToggle()
  })

  function signupFormToggle() {
    if (showSignupForm){
      showSignupForm = false;
      $('#signupForm').hide();
    } else {
      showSignupForm = true;
      $('#signupForm').show();
    }
  }


})
