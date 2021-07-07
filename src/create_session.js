// Information to reach API

const sessionUrl = 'https://chitter-backend-api.herokuapp.com/sessions'

// Some page elements
const sessionHandleField = document.querySelector('#session-handle');
const sessionPasswordField = document.querySelector('#session-password');
const sessionSubmit = document.querySelector('#session-submit');


// AJAX function
const createSession = () => {

const sessionHandle = sessionHandleField.value //Refer to value from page elements const declared above
const sessionPassword = sessionPasswordField.value
const sessionData = JSON.stringify({session:{handle:sessionHandle, password:sessionPassword}});

const xhr = new XMLHttpRequest
  xhr.responseType = 'json'

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  renderSessionResponse(xhr.response);
}
  }
  xhr.open('POST',sessionUrl)
  xhr.setRequestHeader('Content-type', 'application/json');

  xhr.send(sessionData)

};

// Clear page and call AJAX functions
const displaySignInSucces = (event) => {
  event.preventDefault();
  while(responseField2.firstChild){
    responseField2.removeChild(responseField2.firstChild);
  }

  createSession();
}

sessionSubmit.addEventListener('click', displaySignInSucces);
