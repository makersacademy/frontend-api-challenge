
const handleInput = document.getElementById('handle');
const passwordInput = document.getElementById('password');

const newHandleInput = document.getElementById('newhandle');
const newPasswordInput = document.getElementById('newpassword');
const newPasswordConfirmInput = document.getElementById('password_confirm_signup');

window.onload = function() {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');

  if (loginForm !== null && signupForm === null) {
  loginForm.addEventListener('Submit', function(event) {
    event.preventDefault(); //prevent for from being submitted
    const handle = handleInput.value
    const password = passwordInput.value
    logIn(handle, password)
  });
} else {
  signupForm.addEventListener('Submit', function(event) {
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
  const url = 'https://chitter-backend-api.herokuapp.com/sessions';
  const data = { session: { handle: userHandle, password: userPassword } };

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
   const newHandle = newHandleInput.value
   const newPassword = newPasswordInput.value
   const url = 'https://chitter-backend-api.herokuapp.com/users';
   const data = { user: { handle: newHandle, password: newPassword } };

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

 function clearAllFields() {
   handleInput = ''
   passwordInput = ''
   newHandleInput = ''
   newPasswordInput = ''
   newPasswordConfirmInput = ''
 }
