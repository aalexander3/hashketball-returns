import gamesData from '../gamesData'

const defaultState = {
  teams: gamesData.teams,
  selectedPlayer: null
}

const rootReducer = (state=defaultState, action) => {
  console.log(action);

  switch(action.type){
    case "SELECT_PLAYER":
      return { ...state, selectedPlayer: action.payload }
      // handle different actions and types
    default:
      return state
  }
}

export default rootReducer
