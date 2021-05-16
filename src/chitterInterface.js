'user strict';

document.addEventListener("DOMContentLoaded", function() {

  function getAllPeepData() {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data);
      const html = data.map(peep => {
        return `
        <div class="peep">
          <p class="header">@${peep.user.handle} said at ${peep.created_at}:</p>
          <p>${peep.body}</p>
          <p>Likes: ${peep.likes.length}</p>
        </div>`
      }).join("")
      document
        .querySelector('#peep-feed')
        .insertAdjacentHTML('afterbegin', html);
    }).catch(error => {
      console.log(error);
    });
  }
    getAllPeepData()
});
