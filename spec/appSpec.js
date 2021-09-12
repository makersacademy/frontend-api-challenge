describe("chitterApp", () => {
  let chitterApp = createApp();

  beforeEach(() => {});

  it("it should on instantiation instantiate ChitterApi() as chitterApi", () => {
    expect(chitterApp.chitterApi instanceof chitterApi).toEqual(true);
  });

  it("it expect the fulfilled promise chitterApp.chitterApi.allPeeps to be an array of 50 elements(peeps)", function () {
    return chitterApp.chitterApi.fetchAll().then(function (result) {
      expect(result.length).toEqual(50);
    });
  });
});
