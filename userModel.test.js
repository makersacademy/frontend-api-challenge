const UserModel = require("./userModel");

describe('User Model', () => { 
  it('Sets given details and returns them', () => {
    const userModel = new UserModel;
    const details = {"user_id":1,"session_key":"random"};
    userModel.setUserDetails(details);
    expect(userModel.getUserDetails()).toBe(details);
  });

  it('Returns true if login successfull', () => {
    const userModel = new UserModel;
    userModel.setUserDetails({"user_id":1,"session_key":"random"});
    expect(userModel.isUserLoggedIn()).toBe(true);
  });

  it('Returns false if login unsuccessfull', () => {
    const userModel = new UserModel;
    userModel.setUserDetails({"errors":{"password":"Invalid username or password"}});
    expect(userModel.isUserLoggedIn()).toBe(false);
  });

  it('Returns user id and session key', () => {
    const userModel = new UserModel;
    const details = {"user_id":1,"session_key":"random"};
    userModel.setUserDetails(details);
    expect(userModel.getUserId()).toBe(1);
    expect(userModel.getSessionKey()).toBe("random");
  });
 });