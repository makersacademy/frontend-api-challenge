// username: CamelTrain_Case_Is_BestCase; password: mypassword

var username = "";
var signinInterval;
function signInForm(){
  
  username = document.getElementById("loginUsername").value
  var password = document.getElementsByName('password')[0].value
  signin(username, password)
  signinInterval = setInterval(_checkSignIn, 100)
}

function _checkSignIn(){
  if (signingIn){return 0;}
  else{
    clearInterval(signinInterval)
    if (session.user_id == null){
      warnBadLogin()
    }
    else{
      // console.log('signing in');
      checkLoggedIn()
    }
  }
}

function warnBadLogin(){
  // this function is called from signin in apiWrapper.js
  errorSpan = document.getElementById('loginError');
  errorSpan.innerText = "Invalid username or password"
  errorSpan.setAttribute
}