// const ChitterApi = require('./chitterApi');

// require('jest-fetch-mock').enableMocks()

// describe(ChitterApi,() => {
//   it('returns a list of the most recent peeps in reverse order',() => {
//     const api = new ChitterApi();
//     const fakePeep = {
//       "id":1444,
//       "body":"test peep",
//       "created_at":"2022-09-04T12:24:57.177Z",
//       "updated_at":"2022-09-04T15:24:57.177Z",
//       "user":{"id":1,"handle":"you"},
//       "likes":[]}

//     fetch.mockResponseOnce(JSON.stringify([fakePeep, fakePeep]));

//     api.loadPeeps((peeps) => {
//       expect(peeps).toEqual([fakePeep, fakePeep])
//     })
//   })
// })