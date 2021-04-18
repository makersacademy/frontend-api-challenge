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
        <h3 id="welcome-wagon-header">Welcome Guest Cryer!</h3>
        <h4 id="welcome-wagon-subheader">Without signing in you can look but you can't cry!</h4>
        <div id="signup-Login-Div">
        <button type="button" id="sign-up">Sign Up!</button>
        <button type="button" id="log-in">Log In!</button>
      </div>
      <form id="signup-form">
        <input type="text" placeholder="username" required>
        <input type="text" placeholder="password" id="password-entry" required>
        <input type="submit" value="Submit">
      </form>
      <form id="login-form">
        <input type="text" placeholder="username" required>
        <input type="text" placeholder="password" id="password-entry" required>
        <input type="submit" value="Submit">
      </form>
      <form id="cry-entry-box" hidden="true">
        <textarea id='cryArea' rows="15" cols="42" placeholder="Write your Cry here!"></textarea>
        <input type="submit" value="Submit">
      </form>
      </div>`
    )
  })

  // afterEach(function() {
  //   document.getElementById("signup-Login-Div").remove();
  //   document.getElementById("signup-form").remove();
  // });

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

      //reset
      document.getElementById("cryer-div").remove();
      document.getElementById("welcome-wagon-div").remove();
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
        id: 1,
        handle: "kay"
      }


      let testInterface2 = new Interface(makeGetRequest, (url, data, callback) => {
        callback(stubbedReturnData)
      })

      //act
      testInterface2.submitNewUser(stubbedInputData)

      //assert
      testContent = document.getElementById('welcome-wagon-subheader').innerText
      expect(testContent).toEqual(`New User kay created, please Login.`)

      //reset
      document.getElementById("welcome-wagon-div").remove();
    })
  })

  describe("#submitLogin", function() {
    it("logins a user and starts a new session", function() {
      //arrange
      let stubbedInputData = {
        handle: `kay`,
        password: `strongPassword`
      }
      let stubbedReturnData = {
        user_id: 1,
        session_key: "a_valid_session_key"
      }

      let testInterface3 = new Interface(makeGetRequest, (url, data, callback) => {
        callback(stubbedReturnData)
      })

      //act
      testInterface3.submitLogin(stubbedInputData)

      //assert
      expect(document.getElementById("welcome-wagon-header").innerText).toEqual("Welcome User!")

      //reset
      document.getElementById("welcome-wagon-div").remove();
    })
  })

  // do not have the mental capacity to create a test for create Cry as it involves multiple calls, so need to figure out the cry
  // describe("#createCry", function() {
  //   it("creates a cry and uploads it to the screen", function() {
  //     //arrange
  //     let stubbedReturnData = {}
  //
  //     let testInterface4 = new Interface(makeGetRequest, (url, data, callback) => {
  //       callback(stubbedReturnData)
  //     })
  //
  //     //act
  //     testInterface4.createCry()
  //
  //     //assert
  //
  //     //reset
  //   })
  // })
})
