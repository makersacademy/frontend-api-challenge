export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        user_id: action.session.user_id,
        session_key: action.session.session_key
      }
    case 'LOGOUT':
      return {}
    default:
      return state
  }
}
