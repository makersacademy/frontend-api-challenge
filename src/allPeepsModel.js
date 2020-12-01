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

        const a = document.createElement('a')
        id = peep.id
        peep.description =`${peep.body.substring(0, 20)}...`
        a.textContent = `${peep.description}`
        a.href="javascript:getPeep("+`${peep.id}`+")"
       
       
        const h5 = document.createElement('h5')
        h5.textContent = 'Likes:'+`${peep.likes.length}`

        const h6 = document.createElement('h6')
        h6.textContent = `${peep.id}`
  
        container.appendChild(card)
        card.appendChild(h2)
        card.appendChild(a)
        card.appendChild(h5)
        card.appendChild(h6)
      })
      .catch(function(error="Oh no!") {
        console.log(error);
      }); 
    })
  }