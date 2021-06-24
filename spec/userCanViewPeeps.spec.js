beforeEach(() => {
  window.backupFetch = window.fetch;
})

describe("User can view a list of peeps", () => {
  it("shows a list of peeps", (done) => {
      window.fetch = (url) => {
        if (url == "https://chitter-backend-api-v2.herokuapp.com/peeps") {
          return Promise.resolve({
            json: () => Promise.resolve([
              {
                body: "Fake Test Data"
              }
            ])
          });
        }
     };
    
    let controller = new PeepListController();
    controller.display().then(() => {
      let container = document.querySelector('#main');
      expect(container.innerHTML).toEqual("<ul><li> Fake Test Data</li></ul>");
      done();
    });
  });
});

afterEach(() => {
  window.fetch = window.backupFetch;
  document.querySelector('#main').innerHTML = "";
})