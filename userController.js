import User from './user.js'

const newUser = new User()

function grabUserData(){
  let signup = document.getElementById("signup")
  if(!signup) return;
  signup.addEventListener('submit', function(event){
    event.preventDefault();
    let handle = event.srcElement[0].value
    let password = event.srcElement[1].value
    signUp(handle, password)
  })
}

async function signUp(handle, password) {
  try {
    const result = await fetch(
      "https://chitter-backend-api-v2.herokuapp.com/users", {
      method: 'POST',
      body: JSON.stringify({user: {handle: `${handle}`, password:`${password}`}}),
      dataType: 'json',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const user = await result.json()
    if (user.handle == "has already been taken") {
      var signUpError = document.createElement("div")
      signUpError.setAttribute("id", "sign-up-error")
      signUpError.innerHTML = "That username is taken!"
      document.body.appendChild(signUpError)
      return
    }
    newUser.createUser(user)
  } catch (e) {
    console.log(e)
    return null;
  }
};

grabUserData()

export { grabUserData }
export { signUp }