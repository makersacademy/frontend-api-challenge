document.addEventListener('DOMContentLoaded', () => { 

  const array = [];


  // Retrieves peeps from the API and asigns them to Peep objects
  async function fetchPeeps() {
    try {
      const response = await fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const peeps = await response.json();
      console.log(peeps)
      peeps.forEach(peep => {
        array.push(new Peep(peep.id, peep.body));
      });
      return response
    } catch(error) {
      console.log('Error: ', error);
    }

  }

  // Creates list tags from the peeps
  fetchPeeps().then(() => {
    array.forEach(peep => {
      let li = document.createElement('li')
      let link = document.createElement('a')
      link.id = peep.id
      link.innerText = peep.text;
      link.href = '#';
      li.appendChild(link)
      document.querySelector('#peeps-list').appendChild(li);
    })
  })



})