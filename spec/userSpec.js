describe("User", function() {
  describe("#createUser", function() {
    it('can create a user', function() {
      var user = new User();

      var valueId, valueHandle;
      user = {
        create: function(handle, password) {
          valueId = 1;
          valueHandle = handle;
        },
        getId: function() {
          return valueId;
        },
        getHandle: function() {
          return valueHandle;
        }
      }

      spyOn(user, 'getId');
      spyOn(user, 'getHandle')
      user.create('handle', 'pass123');
      expect(valueId).toEqual(1);
      expect(valueHandle).toEqual('handle');
    });
  });

});
