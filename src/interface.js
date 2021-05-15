
async function fetchMe(url){
  const response = await fetch(url)
  return response.json()
}

users = 'https://chitter-backend-api-v2.herokuapp.com/users'
peeps = 'https://chitter-backend-api-v2.herokuapp.com/peeps'

// fetchMe(users).then(results => console.log(results))
// fetchMe(peeps).then(results => console.log(results))

var allPeepsDiv = document.querySelector('#allPeeps')
fetchMe(peeps).then((result) => {
  result.forEach(peep => allPeepsDiv.innerHTML += peep.body + "<br />");
})
