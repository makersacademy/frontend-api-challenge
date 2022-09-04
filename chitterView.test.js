/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 
 const ChitterView = require('./chitterView');
 
 describe(ChitterView,() => {
    beforeEach(() => {
        document.body.innerHTML = fs.readFileSync('./index.html');
      });
   it('returns the list of peeps ',() => {
     const peepData = {
       "id":2000,
       "body":"test peep",
       "created_at":"2022-09-04T12:24:57.177Z",
       "updated_at":"2022-09-04T15:24:57.177Z",
       "user":{"id":1,"handle":"you"},
       "likes":[]}
     this.mockApi = {
       loadPeeps: (callback) => {callback([peepData, peepData])}
     }
     const view = new ChitterView(this.mockApi);
     view.displayPeeps();
     expect(document.querySelectorAll('div.peep').length).toEqual(2);
   });
 });