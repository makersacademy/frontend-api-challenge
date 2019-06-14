describe('User', function() {

  

  it('can set and get handle', function() {
    user.handle = 'Jay'
    expect(user._handle).toEqual('Jay')
    expect(user.handle).toEqual('Jay')

  })

  it('can set and get password', function() {
    user.password = '12345678'
    expect(user._password).toEqual('12345678')
    expect(user.password).toEqual('12345678')
  })

})

describe ('Session', function() {
  beforeEach(function() {
    session = new Session();
  });

  it('can set and get userId', function() {
    session.userId = '1'
    expect(session.userId).toEqual('1')
    expect(session._userId).toEqual('1')

  })

  it('can set and get sessionKey', function() {
    session.sessionKey = 'a&*^@nbk2jb'
    expect(session._sessionKey).toEqual('a&*^@nbk2jb')
    expect(session.sessionKey).toEqual('a&*^@nbk2jb')
  })


})