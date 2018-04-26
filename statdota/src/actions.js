

  export function setGlobalAccountQuery(account_query) {
    return { type: 'SET_ACCOUNT_QUERY', payload: account_query}
  }


  export function setGlobalAccountId(account_id) {
    return { type: 'SET_ACCOUNT_ID', payload: account_id}
  }

  export function fetchAccounts(query_id) {
    return (dispatch) => {
      dispatch({ type: 'FETCH_ACCOUNTS' });
      return fetch(`https://api.opendota.com/api/search?q=${query_id}`)
        .then(res => res.json())
        .then(json => dispatch({ type: 'ADD_ACCOUNTS', payload: json }))
    }
  }


  export function fetchAccountInfo(account_id) {
    return (dispatch) => {
      dispatch({ type: 'FETCH_ACCOUNTS' });
      return fetch(`https://api.opendota.com/api/players/${account_id}`)
        .then(res => res.json())
        .then(json => dispatch({ type: 'SET_ACCOUNT_INFO', payload: json }))
      }
  }



// do 5 fetches
// set the result of those to keys inside data
//   send data to reducer as payload
//   build an objet that has everything that i fucking need to send over
//
// }


 //
 //
 //  fetchAccountRecentMatches = () => {
 //   fetch(`https://api.opendota.com/api/players/${this.state.account_id}/recentMatches`)
 //     .then(res => res.json())
 //     .then(json => {
 //       this.setState({
 //         account_recent_matches: json,
 //       })
 //     })
 // }
 //  fetchAccountMatches = () => {
 //   fetch(`https://api.opendota.com/api/players/${this.state.account_id}/matches`)
 //     .then(res => res.json())
 //     .then(json => {
 //       this.setState({
 //         account_matches: json,
 //       })
 //     })
 // }
 //  fetchAccountHeroes = () => {
 //   fetch(`https://api.opendota.com/api/players/${this.state.account_id}/heroes`)
 //     .then(res => res.json())
 //     .then(json => {
 //       this.setState({
 //         account_heroes: json,
 //       })
 //     })
 // }
 //  fetchAccountWl = () => {
 //   fetch(`https://api.opendota.com/api/players/${this.state.account_id}/wl`)
 //     .then(res => res.json())
 //     .then(json => {
 //       this.setState({
 //         account_w_l: json,
 //       })
 //     })
 // }
