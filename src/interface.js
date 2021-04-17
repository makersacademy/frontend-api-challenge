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
        peeps.push({body: data[i].body, created: data[i].created_at, userId: data[i].user.id, userHandle: data[i].user.handle, likes: data[i].likes});
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

  function postPeep (peep) {
    let token = window.localStorage["session_key"];
    let id = window.localStorage["user_id"];
    postDataPeep('https://chitter-backend-api-v2.herokuapp.com/peeps', data = {"peep": {"user_id":id, "body":peep}}, token);
    setTimeout(function () {
      reloadPeeps();
      console.log("reloading2")
    }, 5000);
  }

  document.getElementById('post_peep').addEventListener('click', function(event){
    let peep = document.getElementById('peep_text').value;
    postPeep(peep);
    document.getElementById('peep_text').value = ' ';
  });

  peepList.addEventListener('click', function(event){
     if (event.target !== this) {
       showFullPeep();
       let num = event.target.id;
       peepList.style.display = "none";
       fullPeepText.textContent = peeps[num].body;
     }
  });

  document.getElementById('signout').addEventListener('click', function(event){
    logout();
    setTimeout(function () {
      checkSession();
    }, 1000);
  });

  document.getElementById('create').addEventListener('click', function(event){
    let handle = document.getElementById('handle').value;
    let password = document.getElementById('password').value;
    createUser(handle, password);
  });

  document.getElementById("signin").addEventListener('click', function(event){
    let handle = document.getElementById('handle').value;
    let password = document.getElementById('password').value;
    login(handle, password);
    setTimeout(function () {
      checkSession();
    }, 1000);
  });

  document.getElementById("allPeeps-button").addEventListener('click', function(event){
      hideFullPeep();
      showPeepsList();
   });

});
