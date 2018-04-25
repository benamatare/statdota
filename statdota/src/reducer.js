const defaultState = {
  search_input: "",
  players: {
    loading: false,
    player_id: "",
    player_data: [],
  }

}


export function rootReducer(state = defaultState, action)  {
    switch (action.type) {
      case: 'LOADING_PLAYERS'
      default:
        return state;
    }
}
