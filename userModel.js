class UserModel {
  constructor() {
    this.userDetails;
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
} 

module.exports = UserModel;