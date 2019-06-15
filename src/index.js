$(document).ready(function() {
  peep = new Peep();
  user = new User('', '');

  peep.getPeeps("", displayPeeps);

  $('#HomeBtn').on('click', function() {
    GetHome();
  });

  $('#SignupBtn').on('click', function() {
    GetSignup();
  });
  $('#signupSubmit').on('click', function() {
    user.create($('#inputHandle').val(), $('#inputPassword').val(), DisplaySuccess);
  });

  $('#AddPeepBtn').on('click', function() {
    GetAddPeep();
  });
  $('#addPeepSubmit').on('click', function() {
    peep.postPeep(user._id, $('#peepBodyTextarea').val(), user._sessionKey, GetHome);
  });

  $('#LoginBtn').on('click', function() {
    GetLogin();
  });
  $('#loginSubmit').on('click', function() {
    user.login($('#loginHandle').val(), $('#loginPassword').val(), DisplaySuccessLogin);
  });
});


function displayPeeps(data) {
  $('#peepContainer').html('');
  var list = '';

  if (data.length > 1) {
    data.forEach(function(peep) {
      list += ` <div class="peep row">`;
      list += `   <div class="col-md-8 handle">`;
      list += `   @${peep.user.handle}`;
      list += `   <input type="hidden" value="${peep.id}" />`;
      list += `   </div>`;
      list += `   <div class="col-md-4 created">${formatDate(peep.created_at)}</div>`;
      list += `     <div class="row">`;
      list += `       <div class="col-md-12 peepBody">${peep.body}</div>`;
      list += `     </div>`;
      list += `   </div>`;
    });
  } else {
    list += ` <div class="peep row">`;
    list += `   <div class="col-md-8 handle">`;
    list += `   @${data.user.handle}`;
    list += `   <input type="hidden" value="${data.id}" />`;
    list += `   </div>`;
    list += `   <div class="col-md-4 created">${formatDate(data.created_at)}</div>`;
    list += `     <div class="row">`;
    list += `       <div class="col-md-12 peepBody">${data.body}</div>`;
    list += `     </div>`;
    list += `   </div>`;
  }

  $('#peepContainer').show();
  $(list).appendTo('#peepContainer');

  $('.peep').on('click', function() {
    var peepId = $(this).find(".handle input").val();
    peep.getPeeps(peepId, displayPeeps);
  });
}

function formatDate(date) {
  var nDate = new Date(date).toLocaleString();
  return nDate;
}

function GetSignup() {
  $('#addPeepContainer').hide();
  $('#peepContainer').hide();
  $('#loginContainer').hide();
  $('#signupContainer').show();
  $('#pageTitle').text("Sign up");
}

function GetHome() {
  $('#addPeepContainer').hide();
  $('#signupContainer').hide();
  $('#loginContainer').hide();
  $('#peepContainer').show();
  $('#pageTitle').text("Peeps");
  peep.getPeeps("", displayPeeps);
}

function GetAddPeep() {
  $('#signupContainer').hide();
  $('#peepContainer').hide();
  $('#loginContainer').hide();
  $('#addPeepContainer').show();
  $('#pageTitle').text("Add peep");
  $('#handleUser').val(user._handle);
}

function GetLogin() {
  $('#addPeepContainer').hide();
  $('#peepContainer').hide();
  $('#loginContainer').show();
  $('#signupContainer').hide();
  $('#pageTitle').text("Log in");
}

function DisplaySuccess(handle) {
  $('#SignupBtn').text(`Hi ${handle}!`);
  $('.formContainer.signup').hide();
  $('#LoginBtn').hide();
  $('.successMsg').show().text(`Success! @${handle}, you are now a member of Chitter`)
  $('#SignupBtn').unbind('click');
}

function DisplaySuccessLogin(handle) {
  $('#SignupBtn').hide();
  $('#LoginBtn').text(`Hi ${handle}!`);
  $('#LoginBtn').unbind('click');
  GetHome();
}
