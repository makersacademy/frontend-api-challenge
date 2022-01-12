const viewPeeps = () => {
  let count = 1
  fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
  .then(response => response.json())
  .then(data => {
    data.forEach(peep => {
      const peep_div = document.createElement('div')
      peep_div.className = 'peeps'
      peep_div.id = `peep-${count}`

      const peep_body = document.createElement('div')
      peep_body.className = 'peep-body'
      peep_body.innerText = peep.body

      const posted_by = document.createElement('div')
      posted_by.className = 'posted-by'
      posted_by.innerText = `posted by ${peep.user.handle}`

      const likes = document.createElement('div')
      likes.className = 'likes'
      likes.innerText = `likes: ${peep.likes.length}`

      peep_div.append(peep_body)
      peep_div.append(posted_by)
      peep_div.append(likes)
      document.querySelector('.all_peeps').append(peep_div)
      count++
    })
  })
}

module.exports.viewPeeps = viewPeeps