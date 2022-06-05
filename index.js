const ChitterModel = require("./chitterModel")
const ChitterView = require("./chitterView")
const ChitterApi = require("./chitterApi")

const chitterModel = new ChitterModel;
const api = new ChitterApi();
const chitterView = new ChitterView(chitterModel, api)
chitterModel.addChit('chitterModel.addChit works');

//now I need to take the below and store the session in the model
//then once the user is logged in they can peep to their 
//heart's content
//how is another matter... 

// chitterView.displayChits() 
// api.createUser('stevie208', '1234', userdata => {
//    api.createSession(userdata, '1234', sessiondata => {
//      api.createChit(sessiondata, "blah")
//    })
// })

// chitterView.displayChits() 
//tried to make it so this only happens if openSession is empty...
//seem to have hit a snag. It's measuring the length of the 
//array, but it does't use the else, just tries to carry out the first
// command...
//should I not even callback the username in the session?
//i.e. should I keep separate, unnested methods for all three
//functions??
if(chitterModel.session.length === 0){
api.createUser('stevie235', '1234', userdata => {
   api.createSession(userdata, '1234', sessiondata => {
    chitterModel.openSession(sessiondata)
    console.log('just made a session')
    console.log('session array length:', chitterModel.session.length)
   })
})}
else {
  console.log('session already created')
}



// chitterView.displayChits() 
// api.createUser('stevie210', '1234', userdata => {
//    api.createSession(userdata, '1234', sessiondata)
//      chitterModel.openSession(sessiondata)
// })

// chitterView.addChit('hello')
api.loadChits((chits) => {
  chitterModel.setChits(chits)
  chitterView.displayChits();
  console.log('is console.log a callback here (index.js)?', chits)
});

