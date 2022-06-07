class ChitterApi {

  loadChits(callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
      .then(response => response.json())
      .then(jsonData => {
        callback(jsonData)
      });
  }

  createUser(username, password, callback) {
    fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
    method: "POST",
    headers: {
      "Content-Type": 'application/json'
    },
    body: (`{"user": {"handle":"${username}", "password":"${password}"}}`)
    })
    .then(response => response.json())
    .then(data => {
      callback(data)
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  createSession(data, password, callback) {
    console.log("here's the data from createUser", data)
    console.log(data.handle)
    fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
    method: "POST",
    headers: {
      "Content-Type": 'application/json'
    },
    body: (`{"session": {"handle":"${data.handle}", "password":"${password}"}}`)
  })
    .then(response => response.json())
    .then(data => {
      callback(data)
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  createChit(sessiondata, chit) {
    console.log('data from the session:', sessiondata)
    console.log('the chit:', chit)
    console.log('user id', sessiondata.user_id)
    console.log('sessionkey', sessiondata.session_key)
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps', {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        "Authorization": `Token token=${sessiondata.session_key}`,
      },
      body: `{"peep": {"user_id":${sessiondata.user_id}, "body":"${chit}"}}`
    })
  }

}



module.exports = ChitterApi;
