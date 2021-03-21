
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

var session = {};
var signingIn = false;  // the state of the signin in process
async function signin(username, password) {
  signingIn = true;
  const dataObj = {"session": {"handle": username, "password": password}};
  
  postData("sessions", dataObj)
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
    session = data;
    signingIn = false;
  }).catch(error => {
    signingIn = false;
    warnBadLogin();
    console.log("Invalid username or password")});
}

async function postPeepToServer(peepText){
  const dataObj = {"peep": {"user_id":session.user_id, "body": peepText}}

  
  var headers = {"Content-Type": "application/json",
  "Authorization": 'Token token=' + session.session_key}

  postData("peeps", data=dataObj, 'POST', headerObj=headers).then(
    data => {
      console.log(data);
    }
  )
}

async function postData(urlPath = '', data = {}, method='POST', headerObj = null) {
  var url = "https://chitter-backend-api-v2.herokuapp.com/" + urlPath
  console.log('data:' + JSON.stringify(data)); console.log(data);
  if (headerObj == null){
    headerObj = {
      'Content-Type': 'application/json'
    }
  }

  const requestObj = new Request(url, {
    method: method,
    headers: headerObj,
    body: JSON.stringify(data)
  })

  const response = await fetch(requestObj);
  return response.json(); // parses JSON response into native JavaScript objects
}
