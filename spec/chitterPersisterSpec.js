describe('UserPersister', function() {
  var resultObject = {}

  beforeEach(function(done) {
    userPersister = new UserPersister();
    handle = randomUsername()
    password = '12345'
    spy = { 
      callback: function(result) { 
        resultObject = result
        done()
      } 
    }
    spyOn(spy, 'callback').and.callThrough()
    userPersister.create(handle, password, spy.callback)
  });
  

  
  it('runs the callback when creating a user', function() {
      expect(spy.callback).toHaveBeenCalled()
  })

  it('will create a new user sucessfully', function() {
    expect(resultObject.handle).toEqual(handle)
    expect(resultObject.id).toEqual(jasmine.any(Number))
  })

})

describe('SessionPersister', function(){
  var resultObject = {}

  beforeEach(function(done) {
    sessionPersister = new SessionPersister();
    handle = 'Zoe'
    password = '12345'
    spy = { 
      callback: function(result) { 
        resultObject = result
        done()
      } 
    }
    spyOn(spy, 'callback').and.callThrough()
    sessionPersister.create(handle, password, spy.callback)
  });

  it('runs the callback when creating a session', function() {
    expect(spy.callback).toHaveBeenCalled()
  })

  it('will create a new session sucessfully', function() {
    expect(resultObject.user_id).toEqual(1052)
    expect(resultObject.session_key).toEqual(jasmine.any(String))
  })

})

describe('PeepsPersister', function() {

  describe('creating peeps', function() {
    var resultObject = {}

    beforeEach(function(done) {
      sessionPersister = new SessionPersister();
      peepsPersister = new PeepsPersister();
      sessionModel = new Session();
      userId = 1052
      body = 'Persister test peep 🎉'
      handle = 'Zoe'
      password = '12345'
  
      spy = { 
        callback: function(result) { 
          resultObject = result
          done()
        } 
      }
  
      function callback(result) { 
        sessionModel.sessionKey = result.session_key
        sessionModel.userId = result.user_id
        peepsPersister.create(sessionModel, body, spy.callback)
      }
      sessionPersister.create(handle, password, callback)
   
      spyOn(spy, 'callback').and.callThrough()
    });
  
    it('runs the callback when creating a peep', function() {
      expect(spy.callback).toHaveBeenCalled()
    })
  
    it('Successfully creates a peep', function() {
      expect(resultObject.id).toEqual(jasmine.any(Number))
      expect(resultObject.body).toEqual('Persister test peep 🎉')
      expect(resultObject.user.id).toEqual(1052)
      expect(resultObject.user.handle).toEqual('Zoe')
    })


  })
  
  describe('retrieving peeps', function() {
    var resultObject = []
    
    beforeEach(function(done) {
      spy = { 
        callback: function(result) { 
          resultObject = result
          console.log(resultObject)
          done()
        } 
      }
      spyOn(spy, 'callback').and.callThrough()
      peepsPersister = new PeepsPersister();
      peepsPersister.get(spy.callback)
    })

    it('Successfully retrieves a list of peeps', function() {
      peepsPersister = new PeepsPersister();
      expect(resultObject).toEqual(jasmine.any(Array))
      expect(resultObject[0].id).toEqual(jasmine.any(Number))
      expect(resultObject[0].user.handle).toEqual(jasmine.any(String))
    })
  })
})