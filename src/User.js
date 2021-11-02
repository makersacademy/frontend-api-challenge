class User {

  constructor(id, handle) {
    this.id = id,
    this.handle = handle
  }

  static addUser(handle, password) {
    userApi.addUser(handle, password);
  }

}

