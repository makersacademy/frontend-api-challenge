const ChitterModel = require('./chitterModel')
const ChitterApi = require('./chitterApi')
const ChitterView = require('./chitterView')

const model = new ChitterModel
const api = new ChitterApi
const view = new ChitterView(model, api)

api.getChitterData((data) => {
  model.set(data)
  view.display()
})