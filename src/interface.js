// let cryerContainer = document.getElementById('cryer-div');

async function getRequest(url = '') {
  const response = await fetch(url);
  return response.json();
}

function makeGetRequest(url, callback) {
  getRequest(url).then(callback)
}

// function display(data) {
//   data.forEach(cry => {
//     let cryContent = `<p>${cry.body}</p>`
//     cryerContainer.innerHTML += cryContent
//   });
// }

// makeGetRequest("https://chitter-backend-api-v2.herokuapp.com/peeps", displayCries)

class Interface {
  constructor(makeRequest) {
    this.makeRequest = makeRequest
  }

  displayCries() {
    this.makeRequest("https://chitter-backend-api-v2.herokuapp.com/peeps", this._display)
  }

  _display(cries) {
    let cryerContainer = document.getElementById('cryer-div');
    cries.forEach(cry => {
      let cryContent = `<p>${cry.body}</p>`
      cryerContainer.innerHTML += cryContent
    });
  }
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
