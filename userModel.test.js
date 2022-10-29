const UserModel = require("./userModel");

describe('User Model', () => { 
  it('Sets given details and returns them', () => {
    const userModel = new UserModel;
    const details = {"user_id":1,"session_key":"random"};
    userModel.setUserDetails(details);
    expect(userModel.getUserDetails()).toBe(details);
  });
 });