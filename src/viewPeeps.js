const viewPeeps = () => {
  let count = 1
  fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
  .then(response => response.json())
  .then(data => {
    console.log(data)
    data.forEach(peep => {
      const div = document.createElement('div')
      div.className = 'peeps'
      const div1 = document.createElement('div')
      const div2 = document.createElement('div')
      const div3 = document.createElement('div')
      div.className = 'peeps'
      div.id = `peep-${count}`
      div1.className = 'peep-body'
      div1.innerText = peep.body
      div2.className = 'posted-by'
      div2.innerText = `posted by ${peep.user.handle}`
      div3.className = 'likes'
      div3.innerText = `likes: ${peep.likes.length}`
      div.append(div1)
      div.append(div2)
      div.append(div3)
      document.body.append(div)
      count++
    })
  })
}

module.exports.viewPeeps = viewPeeps