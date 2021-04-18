describe("Interface", function() {

  // let dummyRequest = function(theFunction, stub = stubbedData) {
  //   return stubbedData
  // }

  beforeEach(function() {
    let testDiv = document.createElement("div");
    testDiv.setAttribute('id', 'cryer-div');
    document.body.appendChild(testDiv)
    document.body.insertAdjacentHTML('beforeend',
      `<div id="welcome-wagon-div">
        <div id="signup-Login-Div">
        <button type="button" id="sign-up">Sign Up!</button>
        <button type="button" id="log-in">Log In!</button>
      </div>
      <form id="signup-form">
        <input type="text" placeholder="username" required>
        <input type="text" placeholder="password" id="password-entry" required>
        <input type="submit" value="Submit">
      </form>
      </div>`
    )
  })

  afterEach(function() {
    document.getElementById("cryer-div").remove();
    document.getElementById("signup-Login-Div").remove();
    document.getElementById("signup-form").remove();
  });

  describe("#displayCries", function() {
    it("gets the list of cries from the database and displays them on the web page", function() {
      //arrange
      let stubbedData = [
        { body: "This is a cry!", updated_at: "2021-02-16T19:48:17.065Z", user: {id: 34, handle: "kay"}},
        { body: "This is another cry!", updated_at: "2021-02-16T19:48:17.065Z", user: {id: 34, handle: "kay"}}
      ]
      let testInterface = new Interface((url, callback) => {
          callback(stubbedData)
      }, makePostRequest)

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

  describe("#submitNewUser", function() {
    it("signups a new user to the service", function() {
      //arrange
      let stubbedInputData = {
        handle: `kay`,
        password: `strongPassword`
      }
      let stubbedReturnData = {
        "id" : 1,
        "handle" : "kay"
      }

      let testInterface2 = new Interface(makeGetRequest, (url, data, callback) => {
        callback(stubbedReturnData)
      })

      //act
      testInterface2.submitNewUser(stubbedInputData)
      // document.getElement('alert').close()
      //assert
      expect().toEqual()


      //reset
      document.getElementById("welcome-wagon-div").remove();
    })
  })
})
