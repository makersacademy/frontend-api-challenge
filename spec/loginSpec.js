function testLogin() {
  login('{"user": {"handle":"kay", "password":"mypassword"}}')
  setTimeout(() => {
    expect(userID === 1, 'userID from login')
    expect(userHandle === "kay", 'userHandle from login')
  }, 2000);
}
setTimeout(() => {
  testLogin()
}, 4000);
