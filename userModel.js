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
}

module.exports = UserModel;