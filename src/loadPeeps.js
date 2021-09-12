let peepsDB = [];

function loadPeepsHistory() {
  return fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
    .then((response) => response.json())
    .then((data) => {
      data.forEach(loadPeepDB);
      console.log(data);
    })
    .catch((err) => {
      console.warn('Peep history did not load', err);
    });
}

function loadPeepDB(data) {
  const link = document.createElement('a');
  link.href = `#${data.id}`;
  const div = document.createElement('div');
  div.className = 'peep-list';
  div.innerHTML = arrangeData(data);
  link.appendChild(div);
  document.querySelector('#all-peeps').appendChild(link);
  peepsDB.push(data);
}

function arrangeData(data) {
  return `<div class="inner-peep-div">
  <h3 class="peep-body">${data.body}</h3>
  <h6 class="peep-name">${data.user.handle}</h6>
  <h6 class="peep-time">${data.updated_at}</h6>
  <h6 class="peep-likes">Likes: ${data.likes.length}</h6>
  </div>
  <hr>`;
}
