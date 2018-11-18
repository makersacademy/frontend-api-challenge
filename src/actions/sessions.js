export const login = (session) => ({
  type: 'LOGIN',
  session
})

export const startLogin = (auth = {}) => ({
  return (dispatch) => {
    const requestHeader = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({'session': auth})
    }
    return fetch("https://chitter-backend-api.herokuapp.com/sessions", requestHeader).then(response => {
      return respones.json()
    }).then(json => {
      dispatch(login(json))
    }).catch(e => console.log(e))
  }
})

export const logout = () => ({
  type: 'LOGOUT'
})
