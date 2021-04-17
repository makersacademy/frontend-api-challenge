document.addEventListener("DOMContentLoaded", function() {
  let peeps = [];
  let peepList = document.getElementById("peep-list");
  let singlePeep = document.getElementById("single-peep");
  let fullPeepText = document.getElementById("full-text");
  reloadPeeps();
  checkSession();
  hideFullPeep();

  function reloadPeeps () {
    console.log("in reload peeps")
    getPeeps();
    setTimeout(function(){
      printPeeps();
    },3000);
  }

  function getPeeps () {
    console.log("in get peeps")
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
    .then(response => response.json())
    .then(data => {
      let i;
      peeps = [];
      for (i = 0; i < 10; i++) {
        console.log(data);
        console.log(data[i].body);
        peeps.push({id: data[i].id, body: data[i].body, created: data[i].created_at, userId: data[i].user.id, userHandle: data[i].user.handle, likes: data[i].likes});
      }
    });
  }

  async function postData (url = '', data = {}, header = "") {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }

  function login(handle, password){
    postData('https://chitter-backend-api-v2.herokuapp.com/sessions', data = {session: {"handle": handle, "password": password}})
    .then(data => {
      if (data.hasOwnProperty('errors')){
        console.log("login failed");
        return false;
      } else {
        console.log("login successful");
        window.localStorage.setItem("user_id", data.user_id);
        window.localStorage.setItem("session_key", data.session_key);
        window.localStorage.setItem("handle", handle);
        window.localStorage.setItem("logged_in", "true");
        return true;
      }
    });
    console.log(localStorage);
  }

  function logout(){
    window.localStorage.clear();
  }

  function printPeeps(){
    console.log("in print peeps")
    peepList.innerHTML = "";
    peeps.forEach(function(peep){
      var div = document.createElement('div');
      div.setAttribute("id", peeps.indexOf(peep));
      div.innerHTML += peep.body;
      peepList.appendChild(div);
      console.log("added peep");
    });
  }

  function hideFullPeep(){
    singlePeep.style.display = "none";
    singlePeep.style.visibility = "hidden";
  }

  function showFullPeep(){
    singlePeep.style.display = "block";
    singlePeep.style.visibility = "visible";
  }

  function showPeepsList (){
    peepList.style.display = "block";
  }

  function hidePeepsList (){
    peepList.style.display = "none";
  }

  function checkSession(){
    if (window.localStorage.getItem("logged_in") == "true"){
      console.log("check - logged in");
      document.getElementById("welcome").style.display = "block";
      document.getElementById("login").style.display = "none";
    } else {
      console.log("check - logged out");
      document.getElementById("welcome").style.display = "none";
      document.getElementById("login").style.display = "block";
    }
  }

  function createUser (handle, password) {
    postData('https://chitter-backend-api-v2.herokuapp.com/users', data = {user: {"handle": handle, "password": password}})
    .then (data => {
      if (data.hasOwnProperty('id')){
        window.alert('User created');
        console.log(data);
        return true;
      } else {
        window.alert('User creation failed');
        console.log(data);
        return false;
      }
    });
  }

  async function postDataPeep (url = '', data = {}, token) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token token=${token}`
      },
      body: JSON.stringify(data)
    }).then(reloadPeeps());
  }

  async function deleteDataPeep (url = '', token) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token token=${token}`
      },
      //body: JSON.stringify(data)
    }).then(console.log(response));
      //reloadPeeps());
  }

  function postPeep (peep) {
    let token = window.localStorage["session_key"];
    let id = window.localStorage["user_id"];
    postDataPeep('https://chitter-backend-api-v2.herokuapp.com/peeps', data = {"peep": {"user_id":id, "body":peep}}, token);
    setTimeout(function () {
      reloadPeeps();
      console.log("reloading2")
    }, 5000);
  }

  function deletePeep (peep_id) {
    let token = window.localStorage["session_key"];
    let url = 'https://chitter-backend-api-v2.herokuapp.com/peeps/' + peep_id;
    deleteDataPeep(url, token);
    reloadPeeps();
  }

// Delete a peep when a button is clicked
  document.getElementById('delete').addEventListener('click', function(event){
    console.log(window.localStorage.getItem("peepId"))
    let peepId = window.localStorage["peepId"];
    deletePeep(peepId);
    showPeepsList();
    hideFullPeep();
  })

// Post a peep when the button is clicked
  document.getElementById('post_peep').addEventListener('click', function(event){
    let peep = document.getElementById('peep_text').value;
    postPeep(peep);
    document.getElementById('peep_text').value = ' ';
  });

// Show single peep when peep is clicked
  peepList.addEventListener('click', function(event){
     if (event.target !== this) {
       showFullPeep();
       let num = event.target.id;
       peepList.style.display = "none";
       // call show peep api??
       fullPeepText.textContent = peeps[num].body;
       window.localStorage.setItem("peepId",peeps[num].id);
       console.log(peeps[num].id);
     }
  });

// Sign out when button clicked
  document.getElementById('signout').addEventListener('click', function(event){
    logout();
    setTimeout(function () {
      checkSession();
    }, 1000);
  });

// Create new user when button clicked
  document.getElementById('create').addEventListener('click', function(event){
    let handle = document.getElementById('handle').value;
    let password = document.getElementById('password').value;
    createUser(handle, password);
  });

// Sign in user when sign in button clicked
  document.getElementById("signin").addEventListener('click', function(event){
    let handle = document.getElementById('handle').value;
    let password = document.getElementById('password').value;
    login(handle, password);
    setTimeout(function () {
      checkSession();
    }, 1000);
  });

// Show list of all peeps when button clicked
  document.getElementById("allPeeps-button").addEventListener('click', function(event){
      window.localStorage.removeItem("peepId");
      hideFullPeep();
      showPeepsList();
   });

});
