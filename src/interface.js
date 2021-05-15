
async function fetchMe(url){
  const response = await fetch(url)
  return response.json()
}

users = 'https://chitter-backend-api-v2.herokuapp.com/users'
peeps = 'https://chitter-backend-api-v2.herokuapp.com/peeps'

// fetchMe(users).then(results => console.log(results))
// fetchMe(peeps).then(results => console.log(results))

var allPeeps = document.querySelector('#allPeeps')
fetchMe(peeps).then((result) => {
  result.forEach(peep =>
    // allPeeps.innerHTML += peep.body + "<br />");
    allPeeps.innerHTML += `<a href="PLACEHOLDER">${peep.body}</a> <br>`);
})
