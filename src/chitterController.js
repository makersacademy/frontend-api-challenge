class ChitterController {
  constructor (view) {
    this._view = view
  }

  async getPeeps () {
    await fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
      .then(response => response.json())
      .then(peeps => this._view.displayPeeps(peeps))
  }
}

module.exports = ChitterController
