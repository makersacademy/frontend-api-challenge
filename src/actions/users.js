export const createUser = (user) => ({
  type: 'CREATE_USER',
  user
})

export const startCreateUser = (userData = {}) => {
  return (dispatch) => {
    const requestHeader = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({'user': userData})
    }
    return fetch("https://chitter-backend-api.herokuapp.com/users", requestHeader).then(response => {
      return response.json()
    }).then(json => {
      dispatch(createUser(json))
    }).catch(e => console.log(e))
  }
}
