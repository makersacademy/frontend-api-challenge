$(document).ready(function (){

  var peepsJson;
  var showLoginForm = true;
  var sessionKey = "";
  var userID = "";
  getPeeps();
  loginFormToggle();
  showPostBox();


  $('#loginSubmit').click(function(){
    var uname = $('#loginName').val();
    var pword = $('#loginPassword').val();
    var data = `{"session": {"handle":"${uname}", "password":"${pword}"}}`;
    var dataJson = JSON.parse(data);
    $.post("https://chitter-backend-api.herokuapp.com/sessions", dataJson, function(data){
      sessionKey = data.session_key
      userID = data.user_id
      showPostBox();
    })
    .done(function(){
      alert('Successfully Logged in');
    })
    .fail(function() {
      alert( "Incorrect details" );
    })
    loginFormToggle();
    $('#loginName').val('')
    $('#loginPassword').val('')

  });

  $('#loginButton').click(function(){
    loginFormToggle()
  })

  $('#logoutButton').click(function(){
    sessionKey = ""
    userID = ""
    showPostBox()
  })

  function loginFormToggle() {
    if (showLoginForm){
      showLoginForm = false;
      $('#loginForm').hide();
    } else {
      showLoginForm = true;
      $('#loginForm').show();
    }
  }

  function showPostBox() {
    if (sessionKey === ""){
      $('#addPeep').hide();
    } else {
      $('#addPeep').show();
    }
  }

  $('#peepSubmit').click(function(){
    var peepBody = $('#peepInput').val();
    console.log(userID)
    var data = `{"peep": {"user_id":"${userID}", "body":"${peepBody}"}}`;
    var dataJson = JSON.parse(data);
    console.log(sessionKey)
    $.ajax({
      type: 'POST',
      url: "https://chitter-backend-api.herokuapp.com/peeps",
      headers: {'Authorization': `Token token=${sessionKey}`},
      data: dataJson,
      success: function(response){
        console.log('succes');
        getPeeps();
      }
    })
    $('#peepInput').val('')
  });

});
