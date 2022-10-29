const Client = require("./client");
const PeepModel = require("./peepModel");
const View = require("./view");

const client = new Client;
const peepModel = new PeepModel;
const view = new View(peepModel, client);

view.displayPeepsFromApi();