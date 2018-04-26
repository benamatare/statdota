
  export function fetchAccountInfo() {
    return (dispatch) => {
      dispatch({ type: 'FETCH_ACCOUNTS' });
      return fetch(`https://api.opendota.com/api/search?q=${this.state.account_query}`)
        .then(res => res.json())
        .then(json => dispatch({ type: 'ADD_ACCOUNTS', payload: json }))
    }
  }



  export function setGlobalAccountQuery(account_query) {
    return { type: 'SET_ACCOUNT_QUERY', payload: account_query}
  }
