// async function getEmoji(text) {

//   var data = {"text": text};
//   const request = async () => {
//   const response = await fetch("https://makers-emojify.herokuapp.com",
//   {method: 'POST',
//   headers: {'Content-Type': 'application/json'},
//   body: JSON.stringify(data)});
//   const json = await response.json();

//   console.log(json);
//   return json.emojified_text;
//    }
//    return await request();
// }

var peeps;
var peepsReady = false; // sets to true when peeps are ready to be read
var gettingPeeps = false; // set to true when getPeeps is called, set to false when 
async function getPeeps() {
  gettingPeeps = true;

  const request = async () => {
  const response = await fetch("https://chitter-backend-api-v2.herokuapp.com/peeps",
  {method: 'GET'}).then(response => response.json())
  .then(data => {
    console.log(data);
    peeps = data;
    peepsReady = true;
    gettingPeeps = false;
  });
  }
  return await request();
}
getPeeps();

var responseObject;
var user;
async function createUser(username, password) {

  const requestJSON = {method: 'POST',
  headers: {"Content-Type": "application/json"},
  data: {"user": {"handle":username, "password":password}}
  }
  const request = async (requestJSON) => {
  const response = await fetch("https://chitter-backend-api-v2.herokuapp.com/users",
  requestJSON)
  .then(response => { console.log("requestJSON: "); console.log(requestJSON);
    console.log(response);
    responseObject = response;
    response.json()})
  .then(data => {console.log(data); user = data;});
  }
  return await request(requestJSON);
}

var session;
async function signin(username, password) {
  const dataObj = {"session": {"handle": username, "password": password}};

  const requestJSON = {method: 'GET',
  headers: {"Content-Type": "application/json"},
  data: JSON.stringify(dataObj)
  }

  postData("sessions", dataObj)
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
    session = data;
  });
}

async function postData(urlPath = '', data = {}) {
  var url = "https://chitter-backend-api-v2.herokuapp.com/" + urlPath
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
