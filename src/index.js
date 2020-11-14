$(document).ready(function() {

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
        console.log('New user created' + data)
      },
      error: function(e){ console.log(e)}
      });
  }

  function sendNewSessionData(callback) {
    callback();
    
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
