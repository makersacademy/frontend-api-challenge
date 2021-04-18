// let cryerContainer = document.getElementById('cryer-div');

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
      'Content-Type': 'application/json'
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

// function request(theFunction) {
//     return theFunction
// }

// function add(a,b) {
//   console.log(a + b)
//   return a + b
// }
//
// request(add)(1,2)
//
// let test = request(add)
// test(1,2)

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
        <div id='reply_div' class="replies">
          <p id='reply_text'><a href="_self" target="_self" id="replies"  name="replies">replies</a></p>
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
        window.alert(`New User ${output.handle} created, please Login.`)
        document.getElementById('signup-form').remove()
        document.getElementById('welcome-wagon-div').insertAdjacentHTML('beforeend',
        `<div id="signup-Login-Div">
          <button type="button" id="sign-up">Sign Up!</button>
          <button type="button" id="log-in">Log In!</button>
        </div>`)
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

  // I cannot get the _display function to see this function as this is not defined.
  // _dateFormat(str) {
  //   return `${str.slice(11, 13)}:${str.slice(14, 16)}, ${str.slice(8, 10)}-${str.slice(5, 7)}-${str.slice(0, 4)}`
  // }
}



// actions


// GUMF


//"https://chitter-backend-api-v2.herokuapp.com/peeps"


//
// // Example POST method implementation:
// async function postData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }
//
// postData('https://example.com/answer', { answer: 42 })
//   .then(data => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });



//   curl "https://chitter-backend-api-v2.herokuapp.com/peeps"
//
//   GET /peeps
//
//   [
//   {
//     "id": 3,
//     "body": "my first peep :)",
//     "created_at": "2018-06-23T13:21:23.317Z",
//     "updated_at": "2018-06-23T13:21:23.317Z",
//     "user": {
//       "id": 1,
//       "handle": "kay"
//     },
//     "likes": [{
//       "user": {
//         "id": 1,
//         "handle": "kay"
//       }
//     }]
//   }
// ]
