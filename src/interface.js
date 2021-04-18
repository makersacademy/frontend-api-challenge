$( document ).ready(function() {
  // Declare variables
  let peeps = [];
  var fetchHeaders = new Headers({'Content-Type': 'application/json'});
  let token;

  // Load page
  listPeepsOnPage();
  checkSession();
  // get peeps from server (get peeps), print them on the page
  function reloadPeeps () {
    getPeeps();
    setTimeout(function(){
      printPeeps();
    },3000);
  }
  // get peeps from server, print on page, hide single peep div and show peeps list div
  function listPeepsOnPage() {
    reloadPeeps();
    hideFullPeep();
    showPeepsList();
  }
  // show single peep div and hide peeps list div
  function showIndividualPeep () {
    hidePeepsList();
    showFullPeep();
  }
  // get peeps from server
  function getPeeps () {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
    .then(response => response.json())
    .then(data => {
      let i;
      peeps = [];
      for (i = 0; i < 10; i++) {
        peeps.push({id: data[i].id, body: data[i].body, created: data[i].created_at, userId: data[i].user.id, userHandle: data[i].user.handle, likes: data[i].likes});
      }
    });
  }

  async function postData (url = '', data = {}, headers = fetchHeaders) {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    }).then(reloadPeeps());
    return response.json();
  }

  function login(handle, password){
    postData('https://chitter-backend-api-v2.herokuapp.com/sessions', data = {session: {"handle": handle, "password": password}})
    .then(data => {
      if (data.hasOwnProperty('errors')){
        window.alert("login failed");
      } else {
        createSession(data, handle);
      }
    });
  }
// If login is successful, add data to localStorage
  function createSession(data, handle) {
    window.alert("login successful");
    window.localStorage.setItem("userId", data.user_id);
    window.localStorage.setItem("sessionKey", data.session_key);
    window.localStorage.setItem("handle", handle);
    window.localStorage.setItem("loggedIn", "true");
    handle = window.localStorage.getItem("handle");
    $("#welcome-text").html("Welcome, " + handle);
  }

// Clear local storage on logout
  function logout(){
    window.localStorage.clear();
  }

// Print peeps list to the page
  function printPeeps(){
    $("#peep-list").html("");
    peeps.forEach(function(peep){
      var div = document.createElement('div');
      let likes = peep.likes.length;
      div.setAttribute("id", peeps.indexOf(peep));
      div.innerHTML += peep.body + "<br>";
      div.innerHTML += "<img src = '../public/like.png'> " + likes + " likes<p>";
      $("#peep-list").append(div);
    });
    console.log(peeps);
  }

  function hideFullPeep(){
    $("#single-peep").hide();
  }

  function showFullPeep(){
    $("#single-peep").show();
  }

  function showPeepsList (){
    $("#peep-list").show();
  }

  function hidePeepsList (){
    $("#peep-list").hide();
  }

  function checkSession(){
    if (window.localStorage.getItem("loggedIn") == "true"){
      $("#welcome").show();
      $("#login").hide();
    } else {
      $("#welcome").hide();
      $("#login").show();
    }
  }

  function createUser (handle, password) {
    postData('https://chitter-backend-api-v2.herokuapp.com/users', data = {user: {"handle": handle, "password": password}})
    .then (data => {
      if (data.hasOwnProperty('id')){
        window.alert('User created');
      } else {
        window.alert('User creation failed');
      }
    });
  }

  async function deleteDataPeep (url = '', token) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token token=${token}`
      },
    }).then(listPeepsOnPage());
  }

  async function putDataPeep (url = '', token) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token token=${token}`
      },
    }).then(listPeepsOnPage()
  );
  }

  function postPeep (peep) {
    let userId = window.localStorage["userId"];
    let authHeaders = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Token token=${window.localStorage["sessionKey"]}`});
    postData('https://chitter-backend-api-v2.herokuapp.com/peeps', data = {"peep": {"user_id":userId, "body":peep}}, authHeaders);
    setTimeout(function () {
      reloadPeeps();
    }, 5000);
  }

  function deletePeep (peep_id) {
    let token = window.localStorage["sessionKey"];
    let url = 'https://chitter-backend-api-v2.herokuapp.com/peeps/' + peep_id;
    deleteDataPeep(url, token);
    reloadPeeps();
  }

  function likePeep (peep_id) {
    let token = window.localStorage["sessionKey"];
    let userId = window.localStorage["userId"];
    let url = 'https://chitter-backend-api-v2.herokuapp.com/peeps/' + peep_id + '/likes/' + userId;
    putDataPeep(url, token);
    listPeepsOnPage();
  }

  function deleteLike(peep_id) {
    let token = window.localStorage["sessionKey"];
    let userId = window.localStorage["userId"];
    let url = 'https://chitter-backend-api-v2.herokuapp.com/peeps/' + peep_id + '/likes/' + userId;
    deleteDataPeep(url, token);
    listPeepsOnPage();
  }

// Delete a peep when a button is clicked
$("#delete").click(function(event){
    deletePeep(window.localStorage["peepId"]);
    listPeepsOnPage();
  });

// Post a peep when the button is clicked
$("#post-peep").click(function(event){
    let peep = document.getElementById('peep-text').value;
    postPeep(peep);
    $("#peep-text").val(" ");
  });

// Show single peep when peep is clicked
$("#peep-list").click(function(event){
     if (event.target !== this) {
       showIndividualPeep();
       let num = event.target.id;
       let likes = peeps[num].likes.length;
       $("#full-text").html(peeps[num].body + "<br>");
       $("#full-text").append("<img src = '../public/like.png' id='like-peep'> " + likes + " likes");
       $("#full-text").append("      <img src = '../public/unlike.png' id='unlike-peep'> ");
       window.localStorage.setItem("peepId",peeps[num].id);
       listenForUnlike();
       listenForLike();
     }
  });

// Add a like when like button is clicked in full peep text
function listenForLike () {
  $("#like-peep").click(function(event){
    likePeep(window.localStorage["peepId"]);
  });
}

// Delete a like when un-like button is clicked in full peep text
function listenForUnlike () {
  $("#unlike-peep").click(function(event){
    deleteLike(window.localStorage["peepId"]);
  });
}

// Sign out when button clicked
$("#sign-out").click(function(event){
    logout();
    setTimeout(function () {
      checkSession();
    }, 1000);
  });

// Create new user when button clicked
$("#create").click(function(event){
    createUser($("#handle").val(), $("#password").val());
  });

// Sign in user when sign in button clicked
$("#sign-in").click(function(event){
    login($("#handle").val(), $("#password").val());
    setTimeout(function () {
      checkSession();
    }, 1000);
  });

// Show list of all peeps when button clicked
$("#all-peeps-button").click(function(event){
      window.localStorage.removeItem("peepId");
      listPeepsOnPage();
   });

});
