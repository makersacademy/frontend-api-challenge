document.addEventListener("DOMContentLoaded", () => { 

  const userForm = document.querySelector('#user-details');
  const peepForm = document.querySelector('#peep-form')
  const signUp = document.querySelector('#sign-up');
  const logIn = document.querySelector('#log-in');
  const post = document.querySelector('#post');
  const logOut = document.querySelector('#log-out');

  signUp.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(userForm);
    const userData = formatUserCredentials(formData);
    postUserData(getSession, userData);
    let session = JSON.parse(localStorage.getItem('SESSION'));
    if (session === null) {
      console.log('NOPE')
    } else {
      userForm.className = 'hide';
      logOut.className = 'show';
      peepForm.className = 'show';
      
    }
  });

  logIn.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(userForm);
    const userData = formatUserCredentials(formData);
    getSession(userData);
    let session = JSON.parse(localStorage.getItem('SESSION'));
    if (session === null) {
      console.log('NOPE')
    } else {
      userForm.className = 'hide';
      logOut.className = 'show';
      peepForm.className = 'show';
      }
  });

  logOut.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.clear();
    location.reload();

  });


  post.addEventListener('click', (e) => {
    e.preventDefault();
    const peepData = new FormData(peepForm);
    const content = peepData.get('content');
    postPeep(content);
  })
  

getPeeps = () => {
  fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
  .then(response => {
     return response.json()
  })
  .then(json => {
    json.forEach((peep) => {
      populateDiv(peep);
    });
  });
};

populateDiv = (peep) => {
  const div = document.createElement('div');
  div.className = 'peep-div'
  div.id = peep.id
  div.innerText = peep.body
  document.querySelector('#peeps').appendChild(div);
}

formatUserCredentials = (formData) => {
  const handle = formData.get('handle');
  const password = formData.get('password');
  const userData = { "handle":handle, "password":password };
  return userData
}

postUserData = (callback, userData) => {
  fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
    method: "POST",
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify({"user": userData })
    })
  .then(response => {
    callback(userData)
    // console.log(response);
  });
}

getSession = (userData) => {
  fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
    method: "POST",
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify({"session": userData })
    })
  .then(response => {
    console.log(response);
    return response.json()
  })
  .then(json => {
    console.log(json)
    if (Object.keys(json).includes("user_id")) {
      localStorage.setItem('SESSION', JSON.stringify(json));
    } else {
      return
    }
  })
}

postPeep = (content) => {
  let session = JSON.parse(localStorage.getItem('SESSION'));
  console.log(session)
  fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
    method: "POST",
    headers: { 'Authorization' : `Token token=${session.session_key}`,
                'Content-Type' : 'application/json' 
              },
    body: JSON.stringify({"peep": {"user_id":session.user_id, "body":content}})
    })
  .then(response => {
    console.log(response);
    return response.json()
  })
  .then(json => {
    console.log(json)
  })
};


getPeeps();
















});

