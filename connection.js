$(document).ready(function (){

  var peepsJson;
  var showSignupForm = true;
  var showLoginForm = true;
  var sessionKey = "";
  var userID = "";
  getPeeps();
  signupFormToggle();
  loginFormToggle();
  showPostBox();




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






  function getPeeps() {
    $.get('https://chitter-backend-api.herokuapp.com/peeps', function(data){
      loadPeeps(data);
    })
  }

  function loadPeeps(peepsJson) {
    $('#peepsHolder').empty();
    for (var i = 0; i < peepsJson.length; i++) {
      $('#peepsHolder').append(`<div id="peep${i}" class="w3-card"></div>`);
      $(`#peep${i}`).append(`<p>${peepsJson[i].body}<p>`);
      $(`#peep${i}`).append(`<p>User: ${peepsJson[i].user.handle}<p>`);
      $(`#peep${i}`).append(`<p>${getTimeValue(peepsJson[i].created_at)}<p>`);
    }
  }

  function dateConversion(date) {
    var date = Date.parse(date);
    var readableDate = new Date(date*1000);
    return readableDate;
  }

  function getTimeValue(datetime) {
   var tTime=new Date(datetime);
   var cTime=new Date();
   var sinceMin=Math.round((cTime-tTime)/60000);
   if(sinceMin==0)
   {
       var sinceSec=Math.round((cTime-tTime)/1000);
       if(sinceSec<10)
         var since='less than 10 seconds ago';
       else if(sinceSec<20)
         var since='less than 20 seconds ago';
       else
         var since='half a minute ago';
   }
   else if(sinceMin==1)
   {
       var sinceSec=Math.round((cTime-tTime)/1000);
       if(sinceSec==30)
         var since='half a minute ago';
       else if(sinceSec<60)
         var since='less than a minute ago';
       else
         var since='1 minute ago';
   }
   else if(sinceMin<45)
       var since=sinceMin+' minutes ago';
   else if(sinceMin>44&&sinceMin<60)
       var since='about 1 hour ago';
   else if(sinceMin<1440){
       var sinceHr=Math.round(sinceMin/60);
   if(sinceHr==1)
     var since='about 1 hour ago';
   else
     var since='about '+sinceHr+' hours ago';
   }
   else if(sinceMin>1439&&sinceMin<2880)
       var since='1 day ago';
   else
   {
       var sinceDay=Math.round(sinceMin/1440);
       var since=sinceDay+' days ago';
   }
   return since;
  };

});
