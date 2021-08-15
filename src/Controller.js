document.addEventListener("DOMContentLoaded", () => { 

  const userForm = document.querySelector('#user-details');
  const signUp = document.querySelector('#sign-up');
  const logIn = document.querySelector('#log-in');

  signUp.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(userForm);
    const userData = formatUserCredentials(formData);
    postUserData(userData);
    getSession(userData);
  });

  logIn.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(userForm);
    const userData = formatUserCredentials(formData);
    getSession(userData);
  });
  

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

postUserData = (userData) => {
  fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
    method: "POST",
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify({"user": userData })
    })
  .then(response => {
    console.log(response);
    return response.json()
  })
  .then(json => {
    console.log(json)
  })
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
  })
}

getPeeps();
















});

