document.addEventListener("DOMContentLoaded", () => {
  displayPeeps();
  
  function displayPeeps() {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then(response => response.json())
      .then(data => data.forEach(createPeepDiv));
  }

  function createPeepDiv(peep) {
    const div = document.createElement('div');
    div.className = 'peep-div';
    div.id = peep.id
    div.innerHTML = `<p class="peep-name">${peep.user.handle}</p>
    <p class="peep-body">${peep.body}</p>`;
    document.querySelector('#peeps').appendChild(div);
  }
})
