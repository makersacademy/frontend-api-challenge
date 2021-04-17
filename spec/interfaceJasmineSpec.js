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
      let stubbedData = [{ body: "This is a cry!"}, { body: "This is another cry!"}]
      let testInterface = new Interface((url, callback) => {
          callback(stubbedData)
      })

      //act
      testInterface.displayCries()

      //assert
      let testCryDiv = document.getElementById("cryer-div")
      expect(testCryDiv.children[0].innerText).toEqual("This is a cry!");
      expect(testCryDiv.children[1].innerText).toEqual("This is another cry!");
    })
  })
})
