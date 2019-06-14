$(document).ready(function (){

  var chitter = new Chitter();
  var showLoginForm = true;
  loginFormToggle();
  showPostBox();
  getPeeps();
  setInterval(function(){getPeeps()}, 30000);



  $('#logoutButton').click(function(){
    chitter.sessionKey = ""
    chitter.userID = ""
    showPostBox()
  })

  $('#loginSubmit').click(function(){
    var uname = $('#loginName').val();
    var pword = $('#loginPassword').val();
    var data = `{"session": {"handle":"${uname}", "password":"${pword}"}}`;
    var dataJson = JSON.parse(data);
    $.post("https://chitter-backend-api.herokuapp.com/sessions", dataJson, function(data){
      chitter.sessionKey = data.session_key
      chitter.userID = data.user_id
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
  });

  function loginFormToggle() {
    if (showLoginForm){
      showLoginForm = false;
      $('#loginForm').hide();
    } else {
      showLoginForm = true;
      $('#loginForm').show();
    }
  };



  function showPostBox() {
    if (chitter.sessionKey === ""){
      $('#addPeep').hide();
    } else {
      $('#addPeep').show();
    }
  };




  $('#peepSubmit').click(function(){
    var peepBody = $('#peepInput').val();
    console.log(chitter.userID)
    var data = `{"peep": {"user_id":"${chitter.userID}", "body":"${peepBody}"}}`;
    var dataJson = JSON.parse(data);
    console.log(chitter.sessionKey)
    $.ajax({
      type: 'POST',
      url: "https://chitter-backend-api.herokuapp.com/peeps",
      headers: {'Authorization': `Token token=${chitter.sessionKey}`},
      data: dataJson,
      success: function(response){
        console.log('succes added a post');
        getPeeps();
      }
    })
    $('#peepInput').val('')
  });

});
