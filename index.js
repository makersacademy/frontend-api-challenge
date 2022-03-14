// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.
const PeepsApi   = require('./peepsApi.js');
const PeepsModel = require('./peepsModel.js')
const PeepsView  = require('./peepsView.js')

console.log('Hello from the developer console!');
const api   = new PeepsApi()
const model = new PeepsModel()
const view  = new PeepsView(api,model)


api.getPeeps((peeps) => {
  model.setPeeps(peeps)
  view.displayPeeps(peeps)
})
// view.displayPeeps()
// console.log(view.displayPeeps())
