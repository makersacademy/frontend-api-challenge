export const addPeep = (peep) => ({
  type: 'ADD_PEEP',
  peep
})

export const removePeep = ({id} = {}) => ({
  type: 'REMOVE_PEEP',
  id
})

// export const editPeep = (id, udpates) => ({})

export const setPeeps = (peeps) => ({
  type: 'SET_PEEPS',
  peeps
})

export const startSetPeeps = () => {
  return (dispatch) => {
    return fetch("https://chitter-backend-api.herokuapp.com/peeps").then(response => {
      return response.json()
    }).then(json => {
      return json
    })
  }
}
