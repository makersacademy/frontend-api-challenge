'use strict';

describe('User', () => {

  let user;

  beforeEach(() => {
    user = new User('Bob', 1, 1234);
  })

  describe('new', () => {

    it('is expected to be an instance of User', () => {
      expect(user).toBeInstanceOf(User);
    })

    it('is expected to have attributes', () => {
      expect(user).toEqual(jasmine.objectContaining({handle: 'Bob', password: 1234, peeps: []}))
    })
  })

})