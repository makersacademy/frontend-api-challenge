const Api = require("./api");
const PeepsView = require('./views/peepsView')
const PeepModel = require ('./model/user')

const api = new Api
const peepModel = new PeepModel
const peepsView = new PeepsView(peepModel, api)
 