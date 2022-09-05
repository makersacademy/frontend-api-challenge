class ChitterAPI {
  loadPosts(callback) {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then(response => response.json())
      .then(data => {
        callback(data);
      })
  }

  createPost(userId, session_key, post, callback){
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps', {
        method: 'POST',
        headers: {
          'Authorization': `Token token=${session_key}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          peep: {
            user_id: `${userId}`,
            body: `${post}`
          }
        })
      })
      .then(response => response.json())
      .then(data => callback(data))
  }

  newSession(username, password, callback){
    fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        session: {
          handle: `${username}`,
          password: `${password}`
        }
      })
    })
      .then(response => response.json())
      .then(data => callback(data))
  }
}

module.exports = ChitterAPI;