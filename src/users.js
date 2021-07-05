
var handleInput = document.getElementById('handle');
var passwordInput = document.getElementById('password');

var newHandleInput = document.getElementById('newhandle');
var newPasswordInput = document.getElementById('newpassword');
var newPasswordConfirmInput = document.getElementById('password_confirm_signup');

window.onload = function() {
  var loginForm = document.getElementById('login-form');
  var signupForm = document.getElementById('signup-form');
  console.log(loginForm)

  if (signupForm === null) {
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); //prevent for from being submitted
    var handle = handleInput.value
    var password = passwordInput.value
    logIn(handle, password)
  });
}
  if (loginForm === null){
  signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    signUp()
  });
}
};

function returnHome(){
  window.location.href = './index.html';
}

function setSessionItems(response, username){
  sessionStorage.setItem('username', username);
  sessionStorage.setItem('id', response.user_id);
  sessionStorage.setItem('sessionkey', response.session_key);
}

function logIn(userHandle, userPassword){
  var url = 'https://chitter-backend-api.herokuapp.com/sessions';
  var data = { session: { handle: userHandle, password: userPassword } };

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => response.json())
    .then((response) => {
      if (response.user_id){
        setSessionItems(response, userHandle);
        returnHome()
      } else {
        alert('Log In failed, please re-enter credentials');
        clearAllFields();
      }
    })
    .catch((error) => {
      console.log('Error: ', error);
      clearAllFields();
      alert('Log In failed. Username does not exist. Please sign up to Chitter to log in.');
    });
}

 function signUp(){
   var newHandle = newHandleInput.value
   var newPassword = newPasswordInput.value
   var newPasswordConfirm = newPasswordConfirmInput.value
   var url = 'https://chitter-backend-api.herokuapp.com/users';
   var data = { user: { handle: newHandle, password: newPassword } };

   if (newPassword !== newPasswordConfirm){
     throw new Error('Passwords do not match')
     clearAllFields();
   } else {
   fetch(url, {
     method: 'POST',
     body: JSON.stringify(data),
     headers: {
       'Content-Type': 'application/json',
     },
   }).then((res) => {
     if (res.status === 422) {
       alert('Username already exists. Please choose another username.');
     } else {
       alert(`Account created, username: ${newHandleInput.value}`);
       logIn(newHandle, newPassword);
     }
     clearAllFields();
   })
   .catch(error => console.log(error));
 }
};

 function clearAllFields() {
   handleInput.value = ''
   passwordInput.value = ''
   newHandleInput.value = ''
   newPasswordInput.value = ''
   newPasswordConfirmInput.value = ''
 }
