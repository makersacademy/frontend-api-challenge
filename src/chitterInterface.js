'user strict';

document.addEventListener("DOMContentLoaded", function() {

  let submitNewUser = document.querySelector('#add-new-user');

  function newUser(id, handle) {
    let user = new User(id, handle);
    return user;
  }

  getAllPeepData()

  function getAllPeepData() {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
    .then(response => {
      return response.json()
    })
    .then(data => {
      const html = data.map(peep => {
        return `
        <div class="peep">
          <p class="header">@${peep.user.handle} said:</p>
          <p class="body">${peep.body}</p>
          <p class="likes">Likes: ${peep.likes.length}</p>
        </div>`
      }).join("")
      document
        .querySelector('#peep-feed')
        .insertAdjacentHTML('afterbegin', html);
    })
    .catch(error => {
      console.log(error);
    });
  }

    submitNewUser.addEventListener('submit', (event) => {
        event.preventDefault();
        let handleValue = document.querySelector('#user-handle').value;
        let passwordValue = document.querySelector('#user-password').value;
        postPeepData(handleValue, passwordValue);
      })

    function addNameToPage(userHandle) {
      document.querySelector('#user-handle-appear').innerText = `Welcome ${userHandle}`;
    }

    function postPeepData(userHandle, userPassword) {
        fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"user": {"handle":userHandle, "password":userPassword}}),
        })
        .then(response => {
          return response.json()
        })
        .then(data => {
          addNameToPage(data.handle);
          return newUser(data.id, data.handle)
        })
        .catch(error => {
          console.log(error);
        });
    }
});
