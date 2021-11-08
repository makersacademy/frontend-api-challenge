const count = 50;
var ul = document.getElementById("list");
var sessionKey = localStorage.getItem("sessionKey");
var username = localStorage.getItem("username");
var id = localStorage.getItem("id");

const buttonEl = document.querySelector('#add-user');
const userEl = document.querySelector('#username');
const contentEl = document.querySelector('#content');
const postEl = document.querySelector('#add-note');
const passwordEl = document.querySelector('#password');
const warningEl = document.querySelector('#warning');
const signupEl = document.querySelector('#signup-form');
const userloggedEl = document.querySelector('#user-logged');
const logoutEl = document.querySelector('#logout');
const loginEl = document.querySelector('#login');
const addpostEl = document.querySelector('#add-post');

buttonEl.addEventListener('click', () => {
	const newUser = userEl.value;
	const newPassword = passwordEl.value;
	addUser(newUser, newPassword);
});

loginEl.addEventListener('click', () => {
	const logUser = userEl.value;
	const logPassword = passwordEl.value;
	addSession(logUser, logPassword);
});

logoutEl.addEventListener('click', () => {
	sessionKey = null;
	username = null;
	id = null;
	localStorage.removeItem("sessionKey")
	localStorage.removeItem("username")
	localStorage.removeItem("id")
	checkpage();
});

const fetchPosts = (onDataFetched) => {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
      .then(response => response.json())
      .then(jsonData => {
          onDataFetched(jsonData);
      });
}

fetchPosts((postData) => {
	postData.forEach((element) => { 
		var br3 = document.createElement("br");	
    ul.append(br3);
    ul.append(elementProcess(element));
	});
});

function elementProcess(element) {
	var li = document.createElement("li");
	var br = document.createElement("br");
  var br2 = document.createElement("br");
  var br4 = document.createElement("br");
	var details = document.createElement("details");
  var summary = document.createElement("summary");
  var details2 = document.createElement("details");
  var summary2 = document.createElement("summary");
  li.append(`${JSON.stringify(element.created_at.substr(0, 16).replace('T', ' '))}, Author: ${JSON.stringify(element.user['handle'])}`)
  if (element.body.length > count) {
    summary.append(`${JSON.stringify(element.body.slice(0, count) + (element.body.length > count ? "..." : ""))}`)
    details.append(`${JSON.stringify(element.body)}`)
    details.append(summary);
    li.append(details);
  } else {
		li.append(br, `${JSON.stringify(element.body)}`)
  };
  if (element.likes.length > 0) {
    summary2.append(`Likes: ${element.likes.length}`)
    element.likes.forEach((like) => {
    details2.append(element.likes.length > 1 ? br4 : "", `${JSON.stringify(like.user['handle'])}`)
  })
    details2.append(summary2);
    li.append(details2);
  } else {
    if (element.body.length > count) {
      li.append(`No likes`)
    } else {
      li.append(element.body.length > count ? "" : br2, `No likes`)
    }
  };
  return li
}

function addUser(newUsername, newPassword) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST", 'https://chitter-backend-api-v2.herokuapp.com/users');
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlhttp.send(JSON.stringify({"user": {"handle": newUsername, "password": newPassword}}));
  xmlhttp.onload = function () {
    if (xmlhttp.status >= 200 && xmlhttp.status < 400) {
      var response = JSON.parse(xmlhttp.responseText)
      addSession(response.handle, newPassword)
    } else {
      var response = JSON.parse(xmlhttp.responseText)
      warningEl.innerText = 'Username: ' + response.handle
    }
  }
}

function addSession(myUsername, myPassword) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST", 'https://chitter-backend-api-v2.herokuapp.com/sessions');
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlhttp.send(JSON.stringify({"session": {"handle": myUsername, "password": myPassword}}));
  xmlhttp.onload = function () {
    if (xmlhttp.status >= 200 && xmlhttp.status < 400) {
      var response = JSON.parse(xmlhttp.responseText)
      sessionKey = response.session_key
      username = myUsername
      id = response.user_id
      localStorage.setItem("sessionKey", response.session_key);
      localStorage.setItem("username", myUsername);
      localStorage.setItem("id", response.user_id);
      checkpage();
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    } else {
      warningEl.style.visibility = "visible";
      warningEl.innerText = 'Erorr when creating session. Try again'
      setTimeout(function() {
        warningEl.style.visibility = "hidden";
      }, 7000);
    }
  }
}

postEl.addEventListener('click', () => {
	const body = contentEl.value;
	postMessage(body);
});

function postMessage(body) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST", 'https://chitter-backend-api-v2.herokuapp.com/peeps');
	xmlhttp.setRequestHeader("Authorization", `Token token=${sessionKey}`);
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlhttp.send(JSON.stringify({"peep": {"user_id": id, "body": body}}));
  xmlhttp.onload = function () {
    if (xmlhttp.status >= 200 && xmlhttp.status < 400) {
      var response = JSON.parse(xmlhttp.responseText)
      var br3 = document.createElement("br");
      ul.prepend(elementProcess(response));
      ul.prepend(br3);
      document.getElementById("content").value = "";
    } else {
      warningEl.style.visibility = "visible";
      warningEl.innerText = 'Error when creating peep. Try again'
      setTimeout(function() {
        warningEl.style.visibility = "hidden";
      }, 7000);
    }
  }
}

function checkpage() {
	if (id !== null && username !== null) {
		userloggedEl.innerText = 'Welcome ' + username
		addpostEl.style.visibility = "visible";
		buttonEl.style.visibility = "hidden";
		signupEl.style.visibility = "hidden";
		loginEl.style.visibility = "hidden";
		logoutEl.style.visibility = "visible";
	} else {
		addpostEl.style.visibility = "hidden";
		userloggedEl.innerText = "Welcome to Chitter"
		signupEl.style.visibility = "visible";
		buttonEl.style.visibility = "visible";
		loginEl.style.visibility = "visible";
		logoutEl.style.visibility = "hidden";
	}
}
checkpage() 
