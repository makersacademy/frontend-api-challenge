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
        h2.textContent = `🌰${peep.name}`
  
        const p = document.createElement('p')
        peep.description =`${peep.body.substring(0, 20)}...`
        p.textContent = `${peep.description}`

        const h6 = document.createElement('h6')
        h6.textContent = 'Likes:'+`${peep.likes.length}`
  
        container.appendChild(card)
        card.appendChild(h2)
        card.appendChild(p)
        card.appendChild(h6)
      })
      .catch(function(error) {
        console.log(error);
      }); 
    })
  }

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
  .catch(function(error) {
    console.log(error);
  }); 
})
}


function getPeep(id) {
  fetch('https://chitter-backend-api.herokuapp.com/peeps/'+id)
 .then((resp) => resp.json())
  .then(function(data) {
  let peep = data
      const card = document.createElement('div')
      card.setAttribute('class', 'card')
  
      const h2 = document.createElement('h2')
        h2.textContent = `${peep.user.handle}`
  
        const p = document.createElement('p')
        p.textContent = `${peep.body}`

        const h6 = document.createElement('h6')
        h6.textContent = 'Likes:'+`${peep.likes.length}`

      container.appendChild(card)
      card.appendChild(h2)
      card.appendChild(p)
      card.appendChild(h6)
    })
    .catch(function(error) {
      console.log(error);
    }); 
  }


