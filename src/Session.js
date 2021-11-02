class Session {

  constructor(userId, sessionKey) {
    this.userId = userId,
    this.sessionKey = sessionKey
  }

  static async newSession(handle, password) {
    let result = await sessionApi.newSession(handle, password);
    console.log(new Session(result.user_id, result.session_key))
    return new Session(result.user_id, result.session_key)
  }

}

