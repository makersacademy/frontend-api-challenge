const peepsReducerDefaultState = [];

export default (state=peepsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PEEP':
      return [action.peep, ...state]
    case 'REMOVE_PEEP':
      return state.filter(({id}) => id !== action.id)
    // case 'EDIT_PEEP':
    //   return state.map((peep) => peep.id === action.id ? {...peep, ...action.updates} ? peep;
    case 'SET_PEEPS':
      return action.peeps
    case 'LIKE_PEEP':
      // const index = state.findIndex((peep) => peep.id === action.id))
      state[state.findIndex((peep) => peep.id === action.id)].likes.push(action.user)
      return state
    default:
      return state
  }
}
