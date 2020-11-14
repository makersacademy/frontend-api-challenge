$(document).ready(function() {

  const currentUser = new CurrentUser();
  updateButtonDisplay();
  updatePeepList(exportPeepListAsHTML);

  $('#sign-up').click(function() {
    event.preventDefault();
    $('#sign-up-form').removeClass('invisible');
  });

  $('#sign-up-form').submit(function(event) {
    event.preventDefault();
    let newUserHandle = $('#sign-up-handle').val();
    let newUserPassword = $('#sign-up-password').val();
    sendNewUserData(newUserHandle, newUserPassword);
    sendNewSessionData(newUserHandle, newUserPassword);
    $('#sign-up-form').addClass('invisible');
    // $('#form-space').text(`Welcome, ${currentUser.handle}`)
  });

  $('#log-in').click(function() {
    event.preventDefault();
    $('#log-in-form').removeClass('invisible');
  });

  $('#log-in-form').submit(function(event) {
    event.preventDefault();
    let userHandle = $('#log-in-handle').val();
    let userPassword = $('#log-in-password').val();
    sendNewSessionData(userHandle, userPassword);
    $('#log-in-form').addClass('invisible');
    updatePeepList(exportPeepListAsHTML);
  });

  $('#sign-out').click(function(event) {
    event.preventDefault();
    $('#user-messages').text('');
    currentUser._handle = null;
    currentUser._id = null;
    currentUser._sessionKey = null;
    updateButtonDisplay();
  })

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
        currentUser._handle = handle;
        currentUser._id = data.user_id;
        currentUser._sessionKey = data.session_key;
        updateButtonDisplay()
        newSessionGreeter();
      },
      error: function(e){ console.log(e)}
      });
  }

  function newSessionGreeter() {
    $('#user-messages').text(`Welcome, ${currentUser.handle}`);
  }

  function updateButtonDisplay() {
    if (currentUser.sessionKey) {
      $('#sign-up').addClass('invisible');
      $('#log-in').addClass('invisible');
      $('#sign-out').removeClass('invisible');
    } else {
      $('#sign-up').removeClass('invisible');
      $('#log-in').removeClass('invisible');
      $('#sign-out').addClass('invisible');
      }
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
