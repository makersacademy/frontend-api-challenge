export const addPeep = (peep) => ({
  type: 'ADD_PEEP',
  peep
})

export const startAddPeep = (peepData = {}) => {
  return (dispatch, getState) => {
    const session = getState().sessions
    const requestHeader = {
      method: "POST",
      headers: new Headers({
        'Authorization': `Token token=${session.session_key}`,
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({"peep": {"user_id": session.user_id, ...peepData}})
    }
    return fetch("https://chitter-backend-api.herokuapp.com/peeps", requestHeader).then(response => {
      return response.json()
    }).then(json => {
      dispatch(addPeep(json))
    }).catch(e => console.log(e))
  }
}

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

export const likePeep = (id, user) => ({
  type: 'LIKE_PEEP',
  id,
  user
})

export const startLikePeep = (id = {}) => {
  return (dispatch, getState) => {
    const session = getState().sessions
    const requestHeader = {
      method: "PUT",
      headers: new Headers({
        'Authorization': `Token token=${session.session_key}`,
      }),
    }
    return fetch(`https://chitter-backend-api.herokuapp.com/peeps/${id}/likes/${session.user_id}`, requestHeader).then(response => {
      switch (response.status) {
        case 201:
          return response.json()
        default:
          throw(`Status: ${response.status} not set in fetch`)
      }
    }).then(json => {
      dispatch(likePeep(id, json.user))
      return {id, user: json.user}
    }).catch(e => console.log(e))
  }
}

export const unlikePeep = (id) => ({
  type: 'UNLIKE_PEEP',
  id
})

export const startUnlikePeep = (id = {}) => {
  return (dispatch, getState) => {
    const session = getState().sessions
    const requestHeader = {
      method: "DELETE",
      headers: new Headers({
        'Authorization': `Token token=${session.session_key}`,
      }),
    }
    return fetch(`https://chitter-backend-api.herokuapp.com/peeps/${id}/likes/${session.user_id}`, requestHeader).then(response => {
      switch (response.status) {
        case 204:
          return response
        default:
          throw(`Status: ${response.status} not set in fetch`)
      }
    }).then(response => {
      dispatch(unlikePeep(id))
    }).catch(e => console.log(e))
  }
}

export const removePeep = (id) => ({
  type: 'REMOVE_PEEP',
  id
})

export const startRemovePeep = (id = {}) => {
  return (dispatch, getState) => {
    const session = getState().sessions
    const reqestHeader = {
      method: "DELETE",
      headers: new Headers({
        'Authorization': `Token token=${session.session_key}`,
      })
    }
    return fetch(`https://chitter-backend-api.herokuapp.com/peeps/${id}`, reqestHeader).then(response => {
      return response
    }).then(response => {
      if(response.status === 204) dispatch(removePeep(id))
    }).catch(e => console.log(e))
  }
}
