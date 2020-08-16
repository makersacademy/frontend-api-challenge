function testNewUser() {
  newUser('bowrw', 'password1')
  setTimeout(() => {
    expect(user.id === 1, 'userID from new user')
    expect(user.handle === 'bowrw', 'userHandle from new user')
  }, 2000);
}
setTimeout(() => {
  testNewUser()
}, 4000);


// CAN'T think of a way to test this without manipulating the backend, or studding the API which ..
