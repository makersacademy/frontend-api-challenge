const ChitterApi = require('./chitterApi');

const api = new ChitterApi;
api.loadPeeps((peeps) => {
  console.log(peeps);
});