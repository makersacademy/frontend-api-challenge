const peepsReducerDefaultState = [];

export default (state=peepsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PEEP':
      return [action.peep, ...state]
    case 'REMOVE_PEEP':
      return state.filter(({id}) => id !== action.id)
    case 'SET_PEEPS':
      return action.peeps
    case 'LIKE_PEEP':
      state[state.findIndex((peep) => peep.id === action.id)].likes.push(action.user)
      return state
    case 'UNLIKE_PEEP':
      state[state.findIndex((peep) => peep.id === action.id)].likes = []
      return state
    default:
      return state
  }
}
