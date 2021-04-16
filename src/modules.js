function reloadPeeps () {
  getPeeps();
  setTimeout(function(){
    printPeeps();
  },2000);
}

function getPeeps () {
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

async function postData (url = '', data = {}) {
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
  postData('https://chitter-backend-api-v2.herokuapp.com/sessions', data={session: {"handle": handle, "password": password}})
  .then(data => {
    console.log(data);
    if (data.hasOwnProperty('errors')){
      console.log("login failed");
      return false;
    } else {
      console.log("login successful");
      window.localStorage.setItem("user_id", data.user_id);
      window.localStorage.setItem("session_key", data.session_key);
      window.localStorage.setItem("handle", handle);
      window.localStorage.setItem("logged_in", "true");
      console.log(handle);
      return true;
    }
  });
  console.log(localStorage)
}

function logout(){
  window.localStorage.clear();
  console.log(localStorage);
}

function printPeeps(){
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
  fullPeepText.style.display = "none";
}

function showFullPeep(){
  fullPeepText.style.display = "block";
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

module.exports = {getPeeps: getPeeps};
