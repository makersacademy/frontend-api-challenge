import store from '../store/configureStore'

export const addPeep = (peep) => ({
  type: 'ADD_PEEP',
  peep
})

export const startAddPeep = (peepData = {}) => {
  return (dispatch) => {
    const session = store.getState().sessions
    const data = new FormData()
    const requestHeader = {
      method: "POST",
      headers: new Headers({
        'Authorization': `Token token=${session.session_key}`,
        'Content-Type': 'application/json'
      }),
      body: data.append("json", JSON.stringify({"peep": {"user_id": session.user_id, ...peepData}))
    }
    return fetch("https://chitter-backend-api.herokuapp.com/peeps", requestHeader).then(response => {
      return response.json()
    }).then(json => {
      dispatch(addPeep(json))
    }).catch(e => console.log(e))
  }
}

export const removePeep = ({id} = {}) => ({
  type: 'REMOVE_PEEP',
  id
})

export const setPeeps = (peeps) => ({
  type: 'SET_PEEPS',
  peeps
})

export const startSetPeeps = () => {
  return (dispatch) => {
    return fetch("https://chitter-backend-api.herokuapp.com/peeps").then(response => {
      return response.json()
    }).then(json => {
      dispatch(setPeeps(json))
    }).catch((e) => console.log(e))
  }
}
