class Session {

  constructor(userId, sessionKey) {
    this.userId = userId,
    this.sessionKey = sessionKey
  }

  static async newSession(handle, password) {
    let result = await sessionApi.newSession(handle, password);
    return new Session(result.user_id, result.session_key)
  }

}

