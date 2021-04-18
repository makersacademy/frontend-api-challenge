let sessionKey
let sessionUserID

async function getRequest(url = '') {
  let response = await fetch(url);
  return response.json();
}

function makeGetRequest(url, callback) {
  getRequest(url).then(callback)
}

// example code taken from Mozilla - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
async function postRequest(url = '', data = {}) {
  let response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token token=${sessionKey}`
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json()
}

function makePostRequest(url, data, callback) {
  postRequest(url, data).then(callback)
}

class Interface {
  constructor(makeGetRequest, makePostRequest) {
    this.makeGetRequest = makeGetRequest;
    this.makePostRequest = makePostRequest
  }

  displayCries() {
    this.makeGetRequest("https://chitter-backend-api-v2.herokuapp.com/peeps", this._display)
  }

  _display(cries) {
    let thisIs = this
    let cryerContainer = document.getElementById('cryer-div');
    cryerContainer.innerHTML="";
    cries.forEach(cry => {
      // console.log(cry);
      let cryTime = `${cry.updated_at.slice(11, 13)}:${cry.updated_at.slice(14, 16)}, ${cry.updated_at.slice(8, 10)}-${cry.updated_at.slice(5, 7)}-${cry.updated_at.slice(0, 4)}`

      let cryDisplay = `
      <div id="individual-cry">
        <div id='author-time-div'>
          <p id='author_text'>${cry.user.handle}</p>
          <p id='time_text'>${cryTime}</p>
        </div>
        <div id='cry_content_div'>
          <p id='cry_content'>${cry.body}</p>
        </div>
      </div>
      `
      cryerContainer.innerHTML += cryDisplay
    });
  }


  submitNewUser(handlePassword) {
    let newUserData = { user: handlePassword }
    this.makePostRequest("https://chitter-backend-api-v2.herokuapp.com/users", newUserData, function(output) {
      console.log(output)
      if (output.handle === handlePassword.handle) {
        console.log("User Created")
        document.getElementById("welcome-wagon-subheader").innerHTML = `New User ${output.handle} created, please Login.`
        document.getElementById('signup-form').remove()
        document.getElementById("sign-up").hidden = false
        document.getElementById("log-in").hidden = false
      } else if (output.handle[0] === "has already been taken") {
        console.log("This username is already taken.");
        window.alert(`Username already taken, please try again.`)
        document.getElementById("password-entry").value = ''
      } else {
        console.log("unknown error");
        window.alert(`An unknown error has occured, please contact your adminstrator.`)
      }
      console.log(output)
    })
  }

  submitLogin(handlePassword) {
    let loginInfo = { session: handlePassword }
    this.makePostRequest("https://chitter-backend-api-v2.herokuapp.com/sessions", loginInfo, function(output) {
      console.log(output)
      if (output.errors !== undefined) {
        console.log("Incorrect username or password supplied")
        window.alert('Please enter credentials again, username or password incorrect.')
        document.getElementById("password-entry").value = ''
      } else {
        let key = output.session_key
        let id = output.user_id
        console.log("did not find an error")
        sessionKey = key;
        sessionUserID = id;
        document.getElementById("welcome-wagon-header").innerHTML = `Welcome User!`;
        document.getElementById("welcome-wagon-subheader").remove()

        document.getElementById('login-form').remove()
        document.getElementById('cry-entry-box').hidden = false
      }
    })
  }


  createCry(inputCry) {
    let cryInfo = { peep: { user_id: `${sessionUserID}`, body: `${inputCry}`}}
    this.makePostRequest("https://chitter-backend-api-v2.herokuapp.com/peeps", cryInfo, function(output) {
      console.log(output)
      theInterface.displayCries()
    })
  }
  // I cannot get the _display function to see this function as this is not defined.
  // _dateFormat(str) {
  //   return `${str.slice(11, 13)}:${str.slice(14, 16)}, ${str.slice(8, 10)}-${str.slice(5, 7)}-${str.slice(0, 4)}`
  // }
}
