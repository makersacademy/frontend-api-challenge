$(document).ready(function() {
  peep = new Peep();
  user = new User('', '');

  $('#HomeBtn').on('click', function() {
    GetHome();
  });
  $('#SignupBtn').on('click', function() {
    GetSignup();
  });
  peep.getPeeps("", displayPeeps);

  $('#signupSubmit').on('click', function() {
    user.create($('#inputHandle').val(), $('#inputPassword').val(), DisplaySuccess);
  });
  $('#AddPeepBtn').on('click', function() {
    GetAddPeep();
  });
  $('#addPeepSubmit').on('click', function() {
    peep.postPeep(user._id, $('#peepBodyTextarea').val(), user._sessionKey, GetHome);
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
  $('#signupContainer').show();
  $('#pageTitle').text("Sign up");
}

function GetHome() {
  $('#addPeepContainer').hide();
  $('#signupContainer').hide();
  $('#peepContainer').show();
  $('#pageTitle').text("Peeps");
}

function GetAddPeep() {
  $('#signupContainer').hide();
  $('#peepContainer').hide();
  $('#addPeepContainer').show();
  $('#pageTitle').text("Add peep");
}

function DisplaySuccess(message) {
  $('#SignupBtn').text(`Hi ${message}!`);
  $('.formContainer.signup').hide();
  $('.successMsg').show().text(`Success! @${message}, you are now a member of Chitter`)
  $('#SignupBtn').unbind('click');
}
