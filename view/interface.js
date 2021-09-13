document.addEventListener('DOMContentLoaded', () => { 

  const peepList = new PeepList();
  let loggedInUser;

  displayWelcomeMessage = () => {
    document.getElementById('welcome-user').innerHTML =`Welcome ${loggedInUser}`
  }

  // Retrieves peeps from the API and asigns them to Peep objects
  async function fetchPeeps() {
    try {
      const response = await fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const peeps = await response.json();
      console.log(peeps)
      peeps.forEach(peep => {
        peepList.addPeep(peep.id, peep.body);
      });
      return peeps
    } catch(error) {
      console.log('Error: ', error);
    }

  }

  // Post create user info
  async function createUser(handle, password) {
    try {
      const response = await fetch(`https://chitter-backend-api-v2.herokuapp.com/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        user: {"handle": handle, "password": password}
      });
      const user = await response.json();
      console.log("Response: ", response)
      console.log("User: ", user)
      return response
    } catch(error) {
      console.log('Error: ', error);
    }

  }

  // Post login info
  async function postUserInfo(handle, password) {
    try {
      const response = await fetch('https://chitter-backend-api-v2.herokuapp.com/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        sessions: {"handle": handle, "password": password}
      });
      const user = await response.json();
      console.log("Response: ", response)
      console.log("User: ", user)
      loggedInUser = new User()
      return response
    } catch(error) {
      console.log('Error: ', error);
    }

  }

  // Creates list tags from the PeepList array
  fetchPeeps().then(() => {
    peepList.list.forEach(peep => {
      let li = document.createElement('li')
      let link = document.createElement('a')
      link.id = peep.id
      link.innerText = peep.text;
      link.href = `#peep-${peep.id}`;
      li.appendChild(link)
      document.querySelector('#peeps-list').appendChild(li);
    })
  })

  // Create User
    document.getElementById('sign-up').addEventListener('click', () => {
      let handle = document.getElementById('name').innerText;
      let password = document.getElementById('password').innerText;
      postUserInfo(handle, password, "users");
      loggedInUser = new User(handle, password);
      displayWelcomeMessage();
    })

  // Login User
    document.getElementById('login').addEventListener('click', () => {
      let handle = document.getElementById('login-handle').innerText;
      let password = document.getElementById('login-password').innerText;
      postUserInfo(handle, password, "sessions");
      loggedInUser = new User(handle, id);
      displayWelcomeMessage();
    })

})