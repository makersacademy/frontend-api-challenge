const PeepModel = require("../Models/PeepsModel");

describe('PeepModel', () => {
  it('should return an empty list of peeps', () => {
    const peepModel = new PeepModel();

    expect(peepModel.GetPeeps()).toEqual([]);
  });

  it('should add one peep and return it', () => {
    // Initialiazes PeepModel class
    const peepModel = new PeepModel();

    // Declares a new peep
    const peep = {
      id: 1,
      body: "My first peep",
      created_at: "2018-06-23T13:21:23.317Z",
      updated_at: "2018-06-23T13:21:23.317Z",
      user: {
        id: 1,
        handle: "MS"
      },
      likes: [{
        user: {
          id: 1, 
          handle: "MS"
        }
      }]
    }

    // Add the new peep to the list
    peepModel.AddPeep(peep);

    // Expects the response to return the peep that has been added.
    expect(peepModel.GetPeeps()).toEqual([{
      id: 1,
      body: "My first peep",
      created_at: "2018-06-23T13:21:23.317Z",
      updated_at: "2018-06-23T13:21:23.317Z",
      user: {
        id: 1,
        handle: "MS"
      },
      likes: [{
        user: {
          id: 1, 
          handle: "MS"
        }
      }]
    }])
  });
});