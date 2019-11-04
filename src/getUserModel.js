function getUsers() {
  fetch('https://chitter-backend-api.herokuapp.com/users')
    .then((resp) => resp.json())
  .then(function(data) {
  data.forEach(user => {
    const card = document.createElement('div')
    card.setAttribute('class', 'card')

    const h2 = document.createElement('h2')
    h2.textContent = `${user.handle}`

    const p = document.createElement('p')
    p.textContent = `${user.id}`
    container.appendChild(card)
    card.appendChild(h2)
    card.appendChild(p)
  })
  .catch(function(error="Oh no!") {
    console.log(error);
  }); 
})
}