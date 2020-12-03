import Session from './session.js'

const newSession = new Session();

function getSessionData(){
  let signin = document.getElementById("signin")
  if(!signin) return;
  signin.addEventListener('submit', function(event){
    event.preventDefault();
    let handle = event.srcElement[0].value
    let password = event.srcElement[1].value
    signIn(handle, password)
  })
}

async function signIn(handle, password) {
  try {
    const result = await fetch(
      "https://chitter-backend-api-v2.herokuapp.com/sessions", {
      method: 'POST',
      body: JSON.stringify({session: {handle: `${handle}`, password:`${password}`}}),
      dataType: 'json',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const session = await result.json()
    completeSignIn(session)
  } catch (e) {
    invalidSession()
    return null;
  }
};

function invalidSession() {
  var signInError = document.getElementById("sign-in-error")
  signInError.innerHTML = "Incorrect user or password!"
  return
}

function completeSignIn(session) {
  newSession.createSession(session)
}

getSessionData()

export { getSessionData }
export { signIn }