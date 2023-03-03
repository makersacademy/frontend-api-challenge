const UserModel = require("../Models/UserModel");

describe('UserModel', () => {

  it('should return an empty list of Users', () => {
    const userModel = new UserModel();

    const userCount = userModel.GetUsers();

    expect(userCount).toEqual([]);
  });


  it('should add a new user and return the list of users', () => {
    const userModel = new UserModel();

    // Declaring User to be added to the list
    const user = {id: 1, handle: "MS"}

    // Adding User to the list
    userModel.AddUser(user);

    // Expecting the response back from the list of users
    expect(userModel.GetUsers()).toEqual([{id: 1, handle: "MS"}])
  });


  it('should add multiple users and return the list of users', () => {
    const userModel = new UserModel();

    // Declaring Users to be added to the list
    const user1 = {id: 1, handle: "MS"}
    const user2 = {id: 2, handle: "LS"}
    const user3 = {id: 3, handle: "FS"}

    // Adding the desclared users to the list
    userModel.AddUser(user1);
    userModel.AddUser(user2);
    userModel.AddUser(user3);

    // Expecting the response back from the list of added users
    expect(userModel.GetUsers()).toEqual([
      {id: 1, handle: "MS"},
      {id: 2, handle: "LS"},
      {id: 3, handle: "FS"}
    ]);
  });


  it('should return a single user via its "id"', () => {
    const userModel = new UserModel();

    // Declaring Users to be added to the list
    const user1 = {id: 1, handle: "MS"}
    const user2 = {id: 2, handle: "LS"}
    const user3 = {id: 3, handle: "FS"}

    // Adding the desclared users to the list
    userModel.AddUser(user1);
    userModel.AddUser(user2);
    userModel.AddUser(user3);

    expect(userModel.GetUser_ID(1)).toEqual({id: 1, handle: "MS"});
  });

  it('should return a single user via its "handle"', () => {
    const userModel = new UserModel();

    // Declaring Users to be added to the list
    const user1 = {id: 1, handle: "MS"}
    const user2 = {id: 2, handle: "LS"}
    const user3 = {id: 3, handle: "FS"}

    // Adding the desclared users to the list
    userModel.AddUser(user1);
    userModel.AddUser(user2);
    userModel.AddUser(user3);

    expect(userModel.GetUser_Handle("MS")).toEqual({id: 1, handle: "MS"});
  });


  it('should remove a user from the list via its "id"', () => {
    const userModel = new UserModel();

    // Declaring Users to be added to the list
    const user1 = {id: 1, handle: "MS"}
    const user2 = {id: 2, handle: "LS"}
    const user3 = {id: 3, handle: "FS"}
    
    userModel.AddUser(user1);
    userModel.AddUser(user2);
    userModel.AddUser(user3);

    userModel.DeleteUser_ID(3);

    expect(userModel.GetUsers()).toEqual([
      {id: 1, handle: "MS"},
      {id: 2, handle: "LS"},
    ])
  });


  it('should remove a user from the list via its "handle"', () => {
    const userModel = new UserModel();

    // Declaring Users to be added to the list
    const user1 = {id: 1, handle: "MS"}
    const user2 = {id: 2, handle: "LS"}
    const user3 = {id: 3, handle: "FS"}
    
    userModel.AddUser(user1);
    userModel.AddUser(user2);
    userModel.AddUser(user3);

    userModel.DeleteUser_Handle("LS");

    expect(userModel.GetUsers()).toEqual([
      {id: 1, handle: "MS"},
      {id: 3, handle: "FS"},
    ]);
  });
});