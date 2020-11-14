export default class PeepView {
  makeHTML(list) {
    console.log(list)
    list.map(function(peep){
      let peepdiv = document.createElement('div')
      peepdiv.innerHTML = peep.body
      document.body.appendChild(peepdiv)
    })
  }
}

// if using export default, you don't need curly brackets when importing
// if using export only, you do need curly brackets