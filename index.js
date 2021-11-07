const displayPeeps = require('./lib/display/displayPeeps')
const displayLogin = require('./lib/display/displayLogin')
const getPeeps = require('./lib/fetches/getPeeps')
const throwError = require('./lib/throwError')
const createPeep = require('./lib/display/createPeep.js')
const displayRegister = require('./lib/display/displayRegister')

//get peeps then display peeps
getPeeps(displayPeeps);

//display login screen, with link to create new user
displayLogin(
  throwError, createPeep
);
