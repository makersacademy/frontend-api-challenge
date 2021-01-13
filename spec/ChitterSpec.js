describe('Chitter', () => {
  let mockClient
  let mockElement
  let chitter

  beforeEach(() => {
    mockClient = { get: () => Promise.resolve(mockPeeps),
    post: () => {},
    postPeep: () => {},
    authorizedRequest: () => {} }
    mockElement = {}
    chitter = new Chitter(mockElement, mockClient)
  })

  it('can render all the peeps', async() => {
    await chitter.showAllPeeps()
    expect(mockElement.innerHTML).toEqual("my first peep :)")
  })

  it('can create a new user', () => {
    spyOn(mockClient, 'post').and.returnValue({
      "user_id": 1,
      "session_key": "a_valid_session_key"
    })
    chitter.createNewUser('kay', 'mypassword')
    expect(mockClient.post).toHaveBeenCalledWith("https://chitter-backend-api-v2.herokuapp.com/users",
    '{"user": {"handle":"kay", "password":"mypassword"}}')
  })

  // it('can create a new user', () => {
  //   spyOn(mockClient, 'post').and.returnValue({
  //     "user_id": 1,
  //     "session_key": "a_valid_session_key"
  //   })
  //   expect(chitter.createNewUser('kay', 'mypassword')).toEqual({
  //     "user_id": 1,
  //     "session_key": "a_valid_session_key"
  //   })
  // })

  it('can login a user', () => {
    spyOn(mockClient, 'post')
    chitter.loginUser('kay', 'mypassword')
    expect(mockClient.post).toHaveBeenCalledWith("https://chitter-backend-api-v2.herokuapp.com/sessions",
    '{"session": {"handle":"kay", "password":"mypassword"}}')
  })

  it('can get a peep by its id', () => {
    spyOn(mockClient, 'get')
    chitter.getSinglePeep(1)
    expect(mockClient.get).toHaveBeenCalledWith("https://chitter-backend-api-v2.herokuapp.com/peeps/1")
  })

  it('can post a peep', () => {
    spyOn(mockClient, 'postPeep')
    chitter.postPeep('my first note')
    expect(mockClient.postPeep).toHaveBeenCalledWith("https://chitter-backend-api-v2.herokuapp.com/peeps", chitter.sessionKey, chitter.userId, 'my first note')
  })

  it('can delete a peep created by the user', () => {
    spyOn(mockClient, 'authorizedRequest')
    chitter.deletePeep(1)
    expect(mockClient.authorizedRequest).toHaveBeenCalledWith("https://chitter-backend-api-v2.herokuapp.com/peeps/1", chitter.sessionKey, 'DELETE')
  })

  it('can like a peep', () => {
    spyOn(mockClient, 'authorizedRequest')
    chitter.likePeep(2)
    expect(mockClient.authorizedRequest).toHaveBeenCalledWith(`https://chitter-backend-api-v2.herokuapp.com/peeps/2/likes/${chitter.userId}`, chitter.sessionKey, 'PUT')
  })

  it('can delete a like created by a user', () => {
    spyOn(mockClient, 'authorizedRequest')
    chitter.deleteLike(2)
    expect(mockClient.authorizedRequest).toHaveBeenCalledWith(`https://chitter-backend-api-v2.herokuapp.com/peeps/2/likes/${chitter.userId}`, chitter.sessionKey, 'DELETE')
  })

  // it returns the body of the peep as a html?
})
