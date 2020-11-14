import PeepView from './peepView.js';

const peepView = new PeepView()

async function allPeeps() {
  try {
    const result = await fetch(
      "https://chitter-backend-api-v2.herokuapp.com/peeps"
    );
    const data = await result.json()
    peepView.makeHTML(data)
  } catch (e) {
    console.log(e)
    return null;
  }
}

window.addEventListener("hashchange", function(){
  document.body.style.backgroundColor = "grey"
  var peepsDiv = document.getElementById("peeps")
})



console.log(allPeeps())


export { allPeeps }
