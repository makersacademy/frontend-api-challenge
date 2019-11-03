const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)

function getPeeps() {
  fetch('https://chitter-backend-api.herokuapp.com/peeps')
  .then((resp) => resp.json())
  .then(function(data) {
      data.forEach(peep => {
        const card = document.createElement('div')
        card.setAttribute('class', 'card')
  
        const h2 = document.createElement('h2')
        peep.name = peep.user.handle
        h2.textContent = `${peep.name}`
  
        const p = document.createElement('p')
        peep.description = peep.body.substring(0, 300)
        p.textContent = `${peep.description}`
  
        container.appendChild(card)
        card.appendChild(h2)
        card.appendChild(p)
      })
      .catch(function(error) {
        console.log(error);
      }); 
    })
  }