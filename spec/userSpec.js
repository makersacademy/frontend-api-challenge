'use strict';

describe ('User', () => {
  let user;

  beforeEach(function() {
    user = new User("kerri_mcm", "radiohead04");
  });

  it('has a handle', function() {
    expect(user.handle).toEqual("kerri_mcm");
  });

  it('had a password', function() {
    expect(user.password).toEqual("radiohead04");
  });
});