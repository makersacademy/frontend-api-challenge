document.addEventListener("DOMContentLoaded", () => { 

  const userForm = document.querySelector('#user-details');

  userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    postUserData();
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

getUserData = () => {
  console.log('form submitted');
  const formData = new FormData(userForm);
  const handle = formData.get('handle');
  // console.log(handle);
  const password = formData.get('password');
  // console.log(password);
  const userData = { "handle":handle, "password":password
  };
  // console.log(userData)
  return userData
}

postUserData = () => {
  fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
    method: "POST",
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify({"user": getUserData() })
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

