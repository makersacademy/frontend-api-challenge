const ChitterController = require('./chitterController')
const ChitterView = require('./chitterView')

const rootDiv = document.getElementById('root')
const chitterView = new ChitterView(rootDiv)
const chitterController = new ChitterController(chitterView)

document.getElementById('menu-item-peeps').addEventListener('click', () => {
  chitterController.getPeeps()
})

window.addEventListener('hashchange', (event) => {
  const peepId = window.location.hash.substr(1)
  chitterController.getPeep(peepId)
})
