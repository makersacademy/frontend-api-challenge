describe('user', function() {
  describe('.createNewUser', function() {
    it('makes an ajax request to save a new user', async function() {
      newUserId = makeid(20)
      const newUser = await User.createNewUser($.ajax, newUserId, 'password')
      expect(newUser.handle).toEqual(newUserId)
    })
  })
})

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}