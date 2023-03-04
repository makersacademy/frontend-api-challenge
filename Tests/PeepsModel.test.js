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

  it('should add multiple peeps and return one via its "id"', () => {
    const peepModel = new PeepModel();

     // Declares a new peep
     const peep1 = {
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

    const peep2 = {
      id: 2,
      body: "My second peep",
      created_at: "2018-06-23T13:21:23.317Z",
      updated_at: "2018-06-23T13:21:23.317Z",
      user: {
        id: 2,
        handle: "LS"
      },
      likes: [{
        user: {
          id: 2, 
          handle: "LS"
        }
      }]
    }

    const peep3 = {
      id: 3,
      body: "My third peep",
      created_at: "2018-06-23T13:21:23.317Z",
      updated_at: "2018-06-23T13:21:23.317Z",
      user: {
        id: 3,
        handle: "FS"
      },
      likes: [{
        user: {
          id: 3, 
          handle: "FS"
        }
      }]
    }

    peepModel.AddPeep(peep1);
    peepModel.AddPeep(peep2);
    peepModel.AddPeep(peep3);

    expect(peepModel.GetPeep_ID(2)).toEqual({
      id: 2,
      body: "My second peep",
      created_at: "2018-06-23T13:21:23.317Z",
      updated_at: "2018-06-23T13:21:23.317Z",
      user: {
        id: 2,
        handle: "LS"
      },
      likes: [{
        user: {
          id: 2, 
          handle: "LS"
        }
      }]
    })
  });

  it('should add multiple peeps and return them in a list', () => {
    // Initialiazes PeepModel class
    const peepModel = new PeepModel();

    // Declares a new peep
    const peep1 = {
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

    const peep2 = {
      id: 2,
      body: "My second peep",
      created_at: "2018-06-23T13:21:23.317Z",
      updated_at: "2018-06-23T13:21:23.317Z",
      user: {
        id: 2,
        handle: "LS"
      },
      likes: [{
        user: {
          id: 2, 
          handle: "LS"
        }
      }]
    }

    const peep3 = {
      id: 3,
      body: "My third peep",
      created_at: "2018-06-23T13:21:23.317Z",
      updated_at: "2018-06-23T13:21:23.317Z",
      user: {
        id: 3,
        handle: "FS"
      },
      likes: [{
        user: {
          id: 3, 
          handle: "FS"
        }
      }]
    }

    // Add the new peep to the list
    peepModel.AddPeep(peep1);
    peepModel.AddPeep(peep2);
    peepModel.AddPeep(peep3);

    // Expect response
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
    }, {
      id: 2,
      body: "My second peep",
      created_at: "2018-06-23T13:21:23.317Z",
      updated_at: "2018-06-23T13:21:23.317Z",
      user: {
        id: 2,
        handle: "LS"
      },
      likes: [{
        user: {
          id: 2, 
          handle: "LS"
        }
      }]
    }, {
      id: 3,
      body: "My third peep",
      created_at: "2018-06-23T13:21:23.317Z",
      updated_at: "2018-06-23T13:21:23.317Z",
      user: {
        id: 3,
        handle: "FS"
      },
      likes: [{
        user: {
          id: 3, 
          handle: "FS"
        }
      }]
    }])
  });

  it('should delete a peep via its "id"', () => {
    const peepModel = new PeepModel();

    // Declares a new peep
    const peep1 = {
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

    const peep2 = {
      id: 2,
      body: "My second peep",
      created_at: "2018-06-23T13:21:23.317Z",
      updated_at: "2018-06-23T13:21:23.317Z",
      user: {
        id: 2,
        handle: "LS"
      },
      likes: [{
        user: {
          id: 2, 
          handle: "LS"
        }
      }]
    }

    const peep3 = {
      id: 3,
      body: "My third peep",
      created_at: "2018-06-23T13:21:23.317Z",
      updated_at: "2018-06-23T13:21:23.317Z",
      user: {
        id: 3,
        handle: "FS"
      },
      likes: [{
        user: {
          id: 3, 
          handle: "FS"
        }
      }]
    }

    // Add the new peep to the list
    peepModel.AddPeep(peep1);
    peepModel.AddPeep(peep2);
    peepModel.AddPeep(peep3);

    peepModel.DeletePeep(2);

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
    }, {
      id: 3,
      body: "My third peep",
      created_at: "2018-06-23T13:21:23.317Z",
      updated_at: "2018-06-23T13:21:23.317Z",
      user: {
        id: 3,
        handle: "FS"
      },
      likes: [{
        user: {
          id: 3, 
          handle: "FS"
        }
      }]
    }])
  });
});