const viewPeeps = () => {
  let count = 1
  fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
  .then(response => response.json())
  .then(data => {
    data.forEach(peep => {
      const div = document.createElement('p')
      div.innerText = peep.body
      div.id = `peep-${count}`
      document.body.append(div)
      count++
    })
  })
}

module.exports.viewPeeps = viewPeeps