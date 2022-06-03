const ChitterModel = require("./chitterModel")
const ChitterView = require("./chitterView")

const chitterModel = new ChitterModel;
chitterModel.addChit('example chit');
chitterModel.addChit('example chit2');
chitterModel.addChit('example chit3');
chitterModel.addChit('example chit4');
console.log(chitterModel.chits)
//the model is being loaded correctly as seen in lines above - I can add a chit and log it to the console
const chitterView = new ChitterView(chitterModel)
// chitterView.anotherTest()
chitterView.displayChits() 
//the above line works on the webpage. It runs getChits on the model, runs a forEach block on this, and
// then it appends this to the main container. 
// However, while this would suggest that the injection in the index.js file was successful, it's still failing on the 
// tests and in node
// chitterView.testChits()
//the line above shows that the view is being loaded correctly as I can use it to append a 'hello' to the 
//main container div
//so the problem lies in the injection into the view


