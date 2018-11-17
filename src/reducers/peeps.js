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
    default:
      return state
  }
}
