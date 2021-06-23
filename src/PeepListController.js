class PeepListController {
  display() {
    let container = document.querySelector('#main');
    return fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        let peep = data[0]
        container.innerHTML = `<ul><li>${peep.body}</li></ul>`;
    });
  }
}