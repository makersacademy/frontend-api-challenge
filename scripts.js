function signup() {
  var handle = document.getElementById("handle")
  var password = document.getElementById("password")

  var url = 'https://chitter-backend-api.herokuapp.com/users';
  var data = {user: {handle: handle.value, password: password.value}};

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }
  })
}

function userLogIn() {
  var handleSignin = document.getElementById("handleSignIn")
  var passwordSignin = document.getElementById("passwordSignIn")

  var urlSession = 'https://chitter-backend-api.herokuapp.com/sessions';
  var dataSession = {session: {handle: handleSignin.value, password: passwordSignin.value}};

  $.ajax({
    url: urlSession,
    type: 'post',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
        var logInDetails = data;
        loadPeeps(logInDetails);
    },
    data: JSON.stringify(dataSession)
  });
};

function newPeep(logInDetails) {
  
  var header = document.createElement("h3");
  header.appendChild(document.createTextNode(logInDetails.user_id));
  document.body.appendChild(header);
  var x = document.createElement("textarea");
  x.setAttribute("id", "peep")
  document.body.appendChild(x);
  var btn = document.createElement("BUTTON");
  btn.onclick = function() {submitPeep({peep: {user_id:logInDetails.user_id, body:document.getElementById('peep').value}}, logInDetails)}
  document.body.appendChild(btn)
}

function submitPeep(peep, logInDetails) {
  $.ajax({
      url: "https://chitter-backend-api.herokuapp.com/peeps",
      type: 'post',
      dataType: 'json',
      contentType: 'application/json',
      beforeSend: function(request) {
        request.setRequestHeader("Authorization", "Token token="+ logInDetails.session_key);
      },
      data: JSON.stringify(peep)
  })
}

function loadPeeps(logInDetails) {
  newPeep(logInDetails)
  var request = new XMLHttpRequest()

  request.open('GET', "https://chitter-backend-api.herokuapp.com/peeps", true);

  request.onload = function () {
    var data = JSON.parse(this.response)

    data.forEach(function(peep) {
      var header = document.createElement("h3");
      header.appendChild(document.createTextNode(peep.user.handle));
      document.body.appendChild(header);
      var div = document.createElement("div");
      br = document.createElement("br");
      div.className = "peep_class";
      div.innerHTML = peep.body;
      document.body.appendChild(div);
      document.body.appendChild(br);
    });
  }
  request.send()
};



