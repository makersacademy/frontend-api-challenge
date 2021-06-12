class ChitterController {
  constructor (view) {
    this._view = view
  }

  async getPeeps () {
    await fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
      .then(response => response.json())
      .then(peeps => this._view.displayPeeps(peeps))
  }

  async getPeep (peepId) {
    await fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peepId}`)
      .then(response => response.json())
      .then(peep => this._view.displayPeep(peep))
  }
}

module.exports = ChitterController
