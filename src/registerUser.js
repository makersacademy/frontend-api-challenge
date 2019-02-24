// Information to reach API

const endpoint = 'https://chitter-backend-api.herokuapp.com/users'

// Some page elements
const handleField = document.querySelector('#handle');
const passwordField = document.querySelector('#password');
const submit = document.querySelector('#submit');

// AJAX function
const registerUser = () => {

const newHandle = handleField.value
const newPassword = passwordField.value
const data = JSON.stringify({user:{handle:newHandle, password:newPassword}});

const xhr = new XMLHttpRequest
  xhr.responseType = 'json'

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  renderRegisterResponse(xhr.response);
}
  }
  xhr.open('POST',endpoint)
  xhr.setRequestHeader('Content-type', 'application/json');

  xhr.send(data)

};

// Clear page and call AJAX functions
const displaySucces = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  registerUser();
}

submit.addEventListener('click', displaySucces);
