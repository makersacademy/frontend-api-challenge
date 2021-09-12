beforeEach(() => {
    window.backupFetch = window.fetch;
  })
  
  describe("User can view single peep", () => {
    it("shows a single peep", (done) => {
        window.fetch = (url) => {
          if (url == `https://chitter-backend-api-v2.herokuapp.com/peeps/${id}`) {
            return Promise.resolve({
              json: () => Promise.resolve([
                {
                  id: 1,
                  body: "Fake Test Data"
                }
              ])
            });
          }
       };
      
      let controller = new PeepListController();
      controller.displaySinglePeep().then(() => {
        let container = document.querySelector('#single');
        expect(container.innerHTML).toEqual("<ul><li> Fake Test Data</li></ul>");
        done();
      });
    });
  });
  
  afterEach(() => {
    window.fetch = window.backupFetch;
    document.querySelector('#single').innerHTML = "";
  })