const ChitterModel = require("./chitterModel")
const ChitterView = require("./chitterView")
const ChitterApi = require("./chitterApi")

const chitterModel = new ChitterModel;
const api = new ChitterApi();
const chitterView = new ChitterView(chitterModel, api)
chitterModel.addChit('chitterModel.addChit works');

chitterView.displayChits() 
api.createUser('stevie204', '1234', userdata => {
   api.createSession(userdata, '1234', sessiondata => {
     api.createChit(sessiondata, "all in all we're just throwing chits at the wall")
   })
})
// api.createSession()
// chitterView.addChit('hello')
api.loadChits((chits) => {
  chitterModel.setChits(chits)
  chitterView.displayChits();
  console.log('is console.log a callback here (index.js)?', chits)
});
// api.createUser(data) => {
  //assign data to different variables
  //
// }



