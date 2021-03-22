// username: CamelTrain_Case_Is_BestCase; password: mypassword

var username = "";
var signinInterval;
function signInForm(){
  
  username = document.getElementById("loginUsername").value
  var password = document.getElementsByName('password')[0].value
  _signIn(username, password)
}

function _signIn(username, password){
  // helper function that down the signing in process
  signin(username, password)
  signinInterval = setInterval(_checkSignIn, 100)
  document.getElementsByName('password')[0].value = ""
}

function createNewUser(){
  
  username = document.getElementById("loginUsername").value
  var password = document.getElementsByName('password')[0].value
  createUser(username, password)

  _signIn(username, password)
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
}

function signOutForm(){
  session = {}
  username = null
  checkLoggedIn();
}

function postPeep(){
  peepMessage = document.getElementById('peepMessage').value
  console.log('peep message = ' + peepMessage);
  postPeepToServer(peepMessage)
}

