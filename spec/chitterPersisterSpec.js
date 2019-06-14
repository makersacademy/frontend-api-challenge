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