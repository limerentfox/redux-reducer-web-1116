export function manageFriends(state, action){
  if (action.type === 'ADD_FRIEND') {
    return {
        ...state,
        friends: [...state.friends, action.payload]
      }
    } else if (action.type === 'REMOVE_FRIEND') {
        let indexToRemove = state.friends.findIndex( friend =>
        friend.id === action.payload )

        let newFriends = [
        ...state.friends.slice(0, indexToRemove),
        ...state.friends.slice(indexToRemove + 1)
      ]

      return {...state, friends: newFriends}

  } else {
    return state
  }
}
