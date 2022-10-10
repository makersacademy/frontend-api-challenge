const PeepsApi = require('./peepsApi')
const PeepsModel = require('./peepsModel')
const PeepsView = require('./peepsView')

const api = new PeepsApi();
const model = new PeepsModel();
const view = new PeepsView(model, api);

view.loginHeader();
view.signupHeader();

view.loadPeepsFromApi();