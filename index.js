let viewPeepsButton = document.getElementById('get-peeps') // => the get-peeps button
let hidePeepsButton = document.getElementById('hide-peeps') // => the hide-peeps button

viewPeepsButton.addEventListener('click', event => { // waits for the button to be clicked, and then runs.
  let peepsDiv = document.getElementById('listofpeeps') // grabs the part of my web page I want to manipulate
  peepsDiv.innerHTML = "" // this clears the list of peeps so that multiple presses doesn't result in a repeating list
  fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
    .then(response => response.json())
    .then(nextResponse => { //nextResponse is an array of hashes - discovered this by adding a console.log above to check
      nextResponse.forEach(the_hash => { // the_hash is the individual hash that forEach grabs
        let node = document.createTextNode(the_hash.body) // the_hash.body => .body is the part of the hash that I want
        peepsDiv.appendChild(node) // had to use node - don't know what it is but had an error telling me to use it
        peepsDiv.appendChild(insertBreakLine()) // makes it one result after another
      });
    });
});

hidePeepsButton.addEventListener('click', event => {
  let peepsDiv = document.getElementById('listofpeeps')
  peepsDiv.innerHTML = ""
});

function insertBreakLine() {
  let br = document.createElement('br');
  return br
}

  //
  // catButton.addEventListener('click', event => {
  //   let catDiv = document.getElementById('cat-pic')
  //   fetch('https://api.thecatapi.com/v1/images/search?')
  //     .then(response => response.json())
  //     .then(returned_array => {
  //       returned_array.forEach(my_hash => {
  //         catDiv.innerHTML = `<h3>Here is a picture of a Kool Kat for you:</h3>
  //         <img src="${my_hash.url}" alt="kittykat" />`
  //       });
  //     });
  // });
