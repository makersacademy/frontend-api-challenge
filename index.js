const Client = require("./client");
const Model = require("./model");
const View = require("./view");

const client = new Client;
const model = new Model;
const view = new View(model, client);

view.getPeepsFromApi();