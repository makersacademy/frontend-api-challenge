function testLogin() {
  newUser('bowrw', 'password1')
  setTimeout(() => {
    expect(user.id === 1, 'userID from login')
    expect(user.handle === 'bowrw', 'userHandle from login')
  }, 2000);
}
setTimeout(() => {
  testLogin()
}, 4000);


// CAN'T think of a way to test this without manipulating the backend, or studding the API which ..
