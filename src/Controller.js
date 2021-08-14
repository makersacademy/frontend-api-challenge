document.addEventListener("DOMContentLoaded", () => { 

 
getPeeps = () => {
  fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
  .then(response => {
    console.log(response)
     return response.json()
  })
  .then(json => {
    json.forEach((peep) => {
      console.log(peep);
      populateDiv(peep);
    });
  });
};

populateDiv = (peep) => {
  const div = document.createElement('div');
  div.className = 'peep-div'
  div.id = peep.id
  div.innerText = peep.body
  document.querySelector('#peeps').appendChild(div);
}

getPeeps();















});

