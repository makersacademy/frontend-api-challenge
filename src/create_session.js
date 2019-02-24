// Information to reach API

const sessionUrl = 'https://chitter-backend-api.herokuapp.com/sessions'

// Some page elements
const sessionHandleField = document.querySelector('#session-handle');
const sessionPasswordField = document.querySelector('#session-password');
const submit = document.querySelector('#submit');


// AJAX function
const createSession = () => {

const sessionHandle = sessionHandleField.value
const sessionPassword = sessionPasswordFieldd.value
const data = JSON.stringify({session:{handle:sessionHandle, password:sessionPassword}});

const xhr = new XMLHttpRequest
  xhr.responseType = 'json'

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  renderSessionResponse(xhr.response);
}
  }
  xhr.open('POST',sessionUrl)
  xhr.setRequestHeader('Content-type', 'application/json');

  xhr.send(data)

};

// Clear page and call AJAX functions
const displaySucces = (event) => {
  event.preventDefault();
  while(responseField2.firstChild){
    responseField2.removeChild(responseField2.firstChild);
  }
  createSession();
}

submit.addEventListener('click', displaySucces);
