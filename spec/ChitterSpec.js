const examplePeepData = `[
  {
    "id": 808,
    "body": "Holy Guacamole",
    "created_at": "2019-06-15T12:16:08.077Z",
    "updated_at": "2019-06-15T12:16:08.077Z",
    "user": {
      "id": 1113,
      "handle": "RickV"
    },
    "likes": []
  }
]`
describe("Chitter", function () {
  beforeEach(function () {
    chitter = new Chitter();
  });

  it('should call Fetch on api feed', function (done) {
    spyOn('https://chitter-backend-api.herokuapp.com/peeps', 'fetch').and.returnValue(Promise.resolve(promisedData));
  });

  it("can fetch a list of previous peeps", function () {
    chitter.fetchFeed();
    console.log(chitter.feed)
    
  });
});

