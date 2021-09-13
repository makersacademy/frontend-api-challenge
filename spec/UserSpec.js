'use strict';

describe('User', () => {

  let user;

  beforeEach(() => {
    user = new User(0, 'Bob');
  })

  describe('new', () => {

    it('is expected to be an instance of User', () => {
      expect(user).toBeInstanceOf(User);
    })

    it('is expected to have attributes', () => {
      expect(user).toEqual(jasmine.objectContaining({id: 0, handle: 'Bob'}))
    })
  })

})