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

    it('can create a session for the user', function() {
      var user = new User();

      var userId, sessionKey;
      user = {
        session: function(handle, password) {
          userId = 1;
          sessionKey = "qwerty";
        },
        getId: function() {
          return userId;
        },
        getKey: function() {
          return sessionKey;
        }
      }

      spyOn(user, 'getId');
      spyOn(user, 'getKey');
      user.session('handle', 'pass123');
      expect(userId).toEqual(1);
      expect(sessionKey).toEqual('qwerty');
    });
  });

});
