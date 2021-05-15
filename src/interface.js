
async function fetchMe(url){
  const response = await fetch(url)
  return response.json()
}

const users = 'https://chitter-backend-api-v2.herokuapp.com/users'
const peeps = 'https://chitter-backend-api-v2.herokuapp.com/peeps'

// fetchMe(users).then(results => console.log(results))
// fetchMe(peeps).then(results => console.log(results))

const allPeeps = document.querySelector('#allPeeps')
const returnHome = document.querySelector('#backHome')

// homepage
fetchMe(peeps).then((result) => {
  result.forEach(peep =>
    // allPeeps.innerHTML += peep.body + "<br />");
    allPeeps.innerHTML += `<a href="#${peep.id}">${peep.body}</a> - <small> said ${peep.user.handle}</small> <br>`
  );
})

// for seeing individual peeps
window.addEventListener('hashchange',()=>{
  allPeeps.innerHTML = '';
  returnHome.innerHTML = `<a href="">back to main page</a>`;
  console.log(location.hash.slice(1))
  fetchMe(`https://chitter-backend-api-v2.herokuapp.com/peeps/${location.hash.slice(1)}`)
    .then(result => allPeeps.innerHTML += `${result.body}`)
})
