document.addEventListener("DOMContentLoaded", () => {
  displayPeeps();
  
  function displayPeeps() {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then(response => response.json())
      .then(data => data.forEach(createPeepDiv));
  }

  function createPeepDiv(peep) {
    const link = document.createElement('a')
    link.href = `#${peep.id}`
    const div = document.createElement('div');
    div.className = 'peep-div';
    const peepTime = formatTime(new Date(peep.updated_at))
    div.innerHTML = `<p class="peep-name">${peep.user.handle}</p>
    <p class="peep-body">${peep.body}</p>
    <p class="peep-time">${peepTime}</p>`;
    link.appendChild(div);
    document.querySelector('#peeps').appendChild(link);
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
})
