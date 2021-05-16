'use strict';

describe ('User', () => {
  let user;

  beforeEach(function() {
    user = new User(24, "kerri_mcm");
  });

  it('has a id', function() {
    expect(user.id).toEqual(24);
  });

  it('had a handle', function() {
    expect(user.handle).toEqual("kerri_mcm");
  });
});