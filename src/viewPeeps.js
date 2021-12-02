const viewPeeps = () => {
  fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
  .then(response => response.json())
  .then(data => {
    data.forEach(peep => {
      const div = document.createElement('p')
      div.innerText = peep.body
      document.body.append(div)
    })
  })
}

module.exports.viewPeeps = viewPeeps