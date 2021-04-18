describe("Interface", function() {


  beforeEach(function() {
    let testDiv = document.createElement("div");
    testDiv.setAttribute('id', 'cryer-div');
    document.body.appendChild(testDiv)
  })

  afterEach(function() {
    document.getElementById("cryer-div").remove();
  });

  describe("#displayCries", function() {
    it("gets the list of cries from the database and displays them on the web page", function() {
      //arrange
      let stubbedData = [{ body: "This is a cry!", updated_at: "2021-02-16T19:48:17.065Z", user: {id: 34, handle: "kay"}}, { body: "This is another cry!", updated_at: "2021-02-16T19:48:17.065Z", user: {id: 34, handle: "kay"}}]
      let testInterface = new Interface((url, callback) => {
          callback(stubbedData)
      })

      //act
      testInterface.displayCries()

      //assert
      let testCryDiv = document.getElementById("cryer-div")
      expect(testCryDiv.children[0].children[0].children[0].innerText).toEqual(`kay`);
      expect(testCryDiv.children[0].children[0].children[1].innerText).toEqual(`19:48, 16-02-2021`);
      expect(testCryDiv.children[0].children[1].innerText).toEqual("This is a cry!");
      expect(testCryDiv.children[1].children[1].innerText).toEqual("This is another cry!");
    })
  })
})
