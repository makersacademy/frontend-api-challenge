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
