
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
    .catch(function(error="Oh no!") {
      console.log(error);
    }); 
  }

