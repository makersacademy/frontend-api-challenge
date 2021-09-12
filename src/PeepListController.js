class PeepListController {
  displayPeeps() {
    let container = document.querySelector('#main');
    return fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then(response => response.json())
      .then(data => {
        let text = [`<ul>`]
        let peeps = data.forEach(peep => text.push(
          `<li id="${peep.id}"><a href="file:///Users/kerrimcmahon/Documents/full-time/frontend-api-challenge/index.html#${peep.id}">${peep.body}</a></li>`
        ))
        text.push(`</ul>`)
        container.innerHTML = text.join('')
    });
  }

  displaySinglePeep(id) {
    let container = document.querySelector('#single');
    fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${id}`)
    .then(response => response.json())
    .then(data => console.log(data));
  }
}