const ChitterModel = require('./chittermodel');

describe("ChitterModel class", () => {
  
  it('returns empty array of notes when none have been added', () => {
    const model = new ChitterModel;
    expect(model.returnLoadedPeeps()).toEqual([]);
  });

  it('returns peeps loaded into model', () => {
    const testPeep = [{
      "id":12345,
      "body":"this is a test",
      "created_at":"2022-06-03T17:43:02.492Z",
      "updated_at":"2022-06-03T17:43:02.492Z",
      "user":{
        "id":678,
        "handle":"testUser"
      },
      "likes":[]
    }];

    const model = new ChitterModel(testPeep);
    expect(model.returnLoadedPeeps()).toEqual(testPeep);
  })

  it('loads peeps into the model', () => {
    const testPeep = [{
      "id":12345,
      "body":"this is a test",
      "created_at":"2022-06-03T17:43:02.492Z",
      "updated_at":"2022-06-03T17:43:02.492Z",
      "user":{
        "id":678,
        "handle":"testUser"
      },
      "likes":[]
    }];

    const model = new ChitterModel
    model.loadPeeps(testPeep);
    expect(model.returnLoadedPeeps()).toEqual(testPeep);
  })
  
})
