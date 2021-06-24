class PeepListController {
  display() {
    let container = document.querySelector('#main');
    return fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then(response => response.json())
      .then(data => {
        let text = [`<ul>`]
        let peeps = data.forEach(peep => text.push(
          `<li> ${peep.body}</li>`
        ))
        text.push(`</ul>`)
        container.innerHTML = text.join('')
    });
  }
}