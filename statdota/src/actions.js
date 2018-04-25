  let fetchPlayersFromApi = search_player_input => {
    return(
      type: 'FETCH_PLAYERS',
      payload: {
        search_player_input: search_player_input
      }
    )
  }
