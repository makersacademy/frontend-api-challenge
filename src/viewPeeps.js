const viewPeeps = () => {
  let count = 1
  fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
  .then(response => response.json())
  .then(data => {
    data.forEach(peep => {
      const div = document.createElement('div')
      div.className = 'peeps'
      const div1 = document.createElement('div')
      const div2 = document.createElement('div')
      const div3 = document.createElement('div')
      div.className = 'peeps'
      div.id = `peep-${count}`
      div1.className = 'peep_body'
      div1.innerText = peep.body
      div3.className = 'liked by'
      div3.innerText = `posted_by ${data.user_id}`
      div2.className = 'likes'
      div2.innerText = data.likes
      div.append(div1)
      div.append(div2)
      div.append(div3)
      document.body.append(div)
      count++
    })
  })
}

module.exports.viewPeeps = viewPeeps