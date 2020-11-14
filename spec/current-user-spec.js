'use strict';

describe('CurrentUser', function(){
  var testCurrentUser = new CurrentUser();
  testCurrentUser._id = '1';
  testCurrentUser._handle = 'testHandle';
  testCurrentUser._sessionKey = 'testSessionKey';

  it('can store and return id number', function(){
    expect(testCurrentUser.id).toEqual('1')
  })
  it('can store and return id number', function(){
    expect(testCurrentUser.handle).toEqual('testHandle')
  })
  it('can store and return id number', function(){
    expect(testCurrentUser.sessionKey).toEqual('testSessionKey')
  })
})
