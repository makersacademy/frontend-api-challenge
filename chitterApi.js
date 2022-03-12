class ChitterApi {


  postUserInfo(username, password) {
    const correctBody = {user: { handle:`${username}`,password:`${password}`}};
    fetch('https://chitter-backend-api-v2.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(correctBody),
    }).then(response => response.json())
      .then(data => {
      console.log('Success:', data);
    })
  }

  createSession(username, password, callback) {
    const correctBody = {session: { handle:`${username}`,password:`${password}`}};
    fetch('https://chitter-backend-api-v2.herokuapp.com/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(correctBody),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      console.log(callback(data))
    })
  }

  loadPosts(callback, errorFunction) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
    .then(response => response.json())
    .then(data => console.log(callback(data)))
    // .catch((error) => {
    //   errorFunction(error)
    //   console.log(`${error}`)
    // });
  }

   postPeeps(post, userId, sessionKey, errorFunction) {
    const correctBody = {peep: {user_id:`${userId}`, body:`${post}`}};
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps', {
      method: 'POST',
      headers: {
        'Authorization': `Token token=${sessionKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(correctBody),
    }).catch((error) => {
      errorFunction(error)
      console.log(`Posting: ${error}`)
    });
  }

  getIndividualPeep(peepId, callback) {
    fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peepId}`)
    .then(response => response.json())
    .then(data => console.log(callback(data)))
    .catch((error) => {
      errorFunction(error)
      console.log(`${error}`)
    });
  }

  deleteIndividualPost(peepId, sessionKey) {
    fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peepId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${sessionKey}`,
    }
  })
}

  likePost(peepId, userId, sessionKey) {
    fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peepId}/likes/${userId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Token token=${sessionKey}`,
    }
  }).then(response => response.json())
    .then(data => console.log((data)))
}

  dislikePost(peepId, userId, sessionKey) {
    fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peepId}/likes/${userId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${sessionKey}`,
    }
  })
}

  deletePosts() {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps', {
      method: 'DELETE'
    });
  }
}

module.exports = ChitterApi

 


  // async function loadPosters(table) {
    //    const tableBody = table.querySelector("tbody");
    //    const response = await fetch('https://chitter-backend-api-v2.herokuapp.com/peeps');
    //    const { data } = await response.json();
    //    console.log(data)
    //  }
    // loadPosters(document.querySelector("table"))