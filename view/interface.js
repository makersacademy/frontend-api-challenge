document.addEventListener('DOMContentLoaded', () => { 

  const peepList = new PeepList();


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

  // Post form input for create User
  async function postUser(handle, password) {
    try {
      const response = await fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        user: {"handle": handle, "password": password}
      });
      const user = await response.json();
      console.log(user)
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
      link.href = '#';
      li.appendChild(link)
      document.querySelector('#peeps-list').appendChild(li);
    })
  })

  // Create User
  createUser = () => {
    document.querySelector('#submit').addEventListener('click', () => {
      let handle = document.getElementById('name').innerText;
      let password = document.getElementById('password').innerText;
      postUser(handle, password)
    })
  }




})