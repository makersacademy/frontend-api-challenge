const displayPeeps = require('./lib/display/displayPeeps')
const getPeeps = require('./lib/fetches/getPeeps')

//get peeps then display peeps
getPeeps(displayPeeps);
