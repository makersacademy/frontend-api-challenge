const Client = require("./client");
const PeepModel = require("./peepModel");
const UserModel = require("./userModel");
const View = require("./view");

const client = new Client;
const peepModel = new PeepModel;
const userModel = new UserModel;
const view = new View(peepModel, userModel, client);

view.displayPeepsFromApi();