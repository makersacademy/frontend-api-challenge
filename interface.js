document.addEventListener("DOMContentLoaded", () => {
  let peepsArray = [];
  getPeeps();
  listenForUrlChange();
  
  function getPeeps() {
    clearPeeps();
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then(response => response.json())
      .then(data => data.forEach(createPeepDiv));
  }

  function createPeepDiv(peep) {
    const link = document.createElement('a')
    link.href = `#${peep.id}`
    const div = document.createElement('div');
    div.className = 'peep-div';
    div.innerHTML = formatPeepsHTML(peep);
    link.appendChild(div);
    document.querySelector('#peeps').appendChild(link);
    peepsArray.push(peep)
  }

  function formatTime(time) {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"]
    const hours = time.getHours()
    const minutes = ("0" + time.getMinutes()).slice(-2)
    const day = days[time.getDay()]
    const date = time.getDate()
    const month = time.getMonth() + 1
    const year = time.getYear() % 100
    return `${hours}:${minutes} ${day} ${date}/${month}/${year}`
  }

  function formatPeepsHTML(peep) {
    const peepTime = formatTime(new Date(peep.updated_at))
    return `<div class="inner-peep-div">
      <p class="peep-name">${peep.user.handle}</p>
      <p class="peep-body">${peep.body}</p>
      <p class="peep-time">${peepTime}</p>
    </div>
    <div class="likes-div">
      <img class="heart" src="images/heart.png" alt="Likes" width="30" height="30">
      <p class="peep-likes">${peep.likes.length}</p>
    </div>`;
  }

  function listenForUrlChange() {
    window.addEventListener('hashchange', viewPeep);
  }

  function viewPeep() {
    const peep = getPeepByID(getIDFromUrl());
    if(typeof peep === 'undefined') {
      getPeeps();
    } else {
      document.querySelector('#peeps').innerHTML = formatSinglePeepHTML(peep);
    };
  }
  
  function formatSinglePeepHTML(peep) {
    const peepTime = formatTime(new Date(peep.updated_at))
    return `<div class="view-peep-div">
      <p class="peep-name">${peep.user.handle}</p>
      <p class="view-peep-body">${peep.body}</p>
      <p class="peep-time">${peepTime}</p>
      ${viewLikes(peep.likes)}
    </div`;
  }

  function getPeepByID(id) {
    return peepsArray.find(peep => peep.id == id);
  }

  function getIDFromUrl() {
    return window.location.hash.split("#")[1]
  }

  function clearPeeps() {
    peepsArray = [];
    document.querySelector('#peeps').innerHTML = "";
  }

  function viewLikes(likes) {
    const likesHTML = likes.map((like) => {
      return `<div class='likes-div'>
      <img class="heart" src="images/heart.png" alt="Likes" width="30" height="30"></img>
      <p class="peep-likes">${like.user.handle}</p>
      </div>`
    });
    return likesHTML.join("");
  }
})
