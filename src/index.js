$(document).ready(function() {

  updatePeepList(exportPeepListAsHTML);
  const currentUser = new CurrentUser();

  $('#sign-up').click(function() {
    event.preventDefault();
    $('#sign-up-form').removeClass('invisible');
  });

  $('#sign-up-form').submit(function(event) {
    event.preventDefault();
    let newUserHandle = $('#sign-up-handle').val();
    let newUserPassword = $('#sign-up-password').val();
    console.log($('#sign-up-handle').val());
    sendNewUserData(newUserHandle, newUserPassword);
    sendNewSessionData(newUserHandle, newUserPassword);
  });

  $('#log-in').click(function() {
    event.preventDefault();
    $('#log-in-form').removeClass('invisible');
  });

  function updatePeepList() {
    $.get("https://chitter-backend-api-v2.herokuapp.com/peeps", function(data) {
      let peepListHTML = exportPeepListAsHTML(data);
      $('#peep-list').html(peepListHTML);
    });
  };

  function sendNewUserData(handle, password) {
    $.ajax({
      url: 'https://chitter-backend-api-v2.herokuapp.com/users',
      type: 'POST',
      data: JSON.stringify({user: {handle: `${handle}`, password:`${password}`}}),
      dataType: 'json',
      contentType: 'application/json',
      success: function(data){
        console.log(data);
        currentUser._handle = data.handle;
        console.log(currentUser.handle)
        sendNewSessionData(handle, password)
      },
      error: function(e){ console.log(e)}
      });
  }

  function sendNewSessionData(handle, password) {
    $.ajax({
      url: 'https://chitter-backend-api-v2.herokuapp.com/sessions',
      type: 'POST',
      data: JSON.stringify({session: {handle: `${handle}`, password:`${password}`}}),
      dataType: 'json',
      contentType: 'application/json',
      success: function(data){
        currentUser._id = data.user_id;
        currentUser._sessionKey = data.session_key;
        console.log(currentUser);

      },
      error: function(e){ console.log(e)}
      });
  }
})

  // function postNewPeep() {
  //   $.ajax({
  //   url: 'https://chitter-backend-api-v2.herokuapp.com/peeps',
  //   type: ‘POST’,
  //   headers: {“Authorization”: 'Token _2a_12_TS6ot62h5KbjB_Z_3xmP6e'},
  //   data: JSON.stringify({peep: {user_id:'135', body:'my first peep'}}),
  //   dataType: 'json',
  //   contentType: 'application/json',
  //   success: function(data){
  //     console.log('HI')
  //     console.log(data)
  //   },
  //   error: function(e){ console.log(e)}
  //   });
  //   }
