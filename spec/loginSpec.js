function testLogin() {
  login('kay', 'mypassword')
  setTimeout(() => {
    expect(userID === 34, 'userID from login')
    expect(sessionKey === '_2a_12_jaaimXZyXSbzUAV8eX8Jsu' , 'session from login') // not sure how to stub this response
  }, 3000);
}
setTimeout(() => {
  testLogin()
}, 1000);
