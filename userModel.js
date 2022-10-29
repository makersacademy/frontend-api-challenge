class UserModel {
  constructor() {
    this.userDetails;
    this.username;
  }

  setUserDetails = (details) => {
    this.userDetails = details;
  }

  getUserDetails = () => {
    return this.userDetails;
  }

  isUserLoggedIn = () => {
    return this.userDetails.session_key != undefined;
  }

  setUsername = (username) => {
    this.username = username;
  }
} 

module.exports = UserModel;