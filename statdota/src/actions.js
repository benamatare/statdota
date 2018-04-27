

  export function setGlobalAccountQuery(account_query) {
    return {
      type: 'SET_ACCOUNT_QUERY', payload: account_query,
    }
  }

  export function setAccountId(account_id) {
    return {
      type: 'SET_ACCOUNT_ID', payload: account_id
    }
  }
  export function setLoadFlag() {
    return {
      type: 'LOAD_DATA_FLAG'
    }
  }

  export function fetchAccounts(query_id) {
    return (dispatch) => {
      dispatch({ type: 'LOAD_DATA_FLAG' });
      return fetch(`https://api.opendota.com/api/search?q=${query_id}`)
        .then(res => res.json())
        .then(json => dispatch({ type: 'ADD_ACCOUNTS', payload: json }))
    }
  }

  export function fetchAccountInfo(account_id) {
    return (dispatch) => {
      dispatch({ type: 'LOAD_DATA_FLAG' });
      return fetch(`https://api.opendota.com/api/players/${account_id}`)
        .then(res => res.json())
        .then(json => dispatch({ type: 'SET_ACCOUNT_INFO', payload: json }))
      }
  }

  export function fetchAccountRecentMatches(account_id) {
    return (dispatch) => {
     dispatch({ type: 'LOAD_DATA_FLAG' });
     return fetch(`https://api.opendota.com/api/players/${account_id}/recentMatches`)
       .then(res => res.json())
       .then(json => dispatch({ type: 'SET_ACCOUNT_RECENT_MATCHES', payload: json }))
     }
   }

   export function fetchAccountMatches(account_id) {
     return (dispatch) => {
      dispatch({ type: 'LOAD_DATA_FLAG' });
      return fetch(`https://api.opendota.com/api/players/${account_id}/matches`)
        .then(res => res.json())
        .then(json => dispatch({ type: 'SET_ACCOUNT_MATCHES', payload: json }))
      }
    }
    export function fetchAccountHeroes(account_id) {
      return (dispatch) => {
       dispatch({ type: 'LOAD_DATA_FLAG' });
       return fetch(`https://api.opendota.com/api/players/${account_id}/heroes`)
         .then(res => res.json())
         .then(json => dispatch({ type: 'SET_ACCOUNT_HEROES', payload: json }))
       }
     }
     export function fetchAccountWinLoss(account_id) {
       return (dispatch) => {
        dispatch({ type: 'LOAD_DATA_FLAG' });
        return fetch(`https://api.opendota.com/api/players/${account_id}/wl`)
          .then(res => res.json())
          .then(json => dispatch({ type: 'SET_ACCOUNT_W_L', payload: json }))
        }
      }
      export function fetchAccountFriends(account_id) {
        return (dispatch) => {
         dispatch({ type: 'LOAD_DATA_FLAG' });
         return fetch(`https://api.opendota.com/api/players/${account_id}/peers`)
           .then(res => res.json())
           .then(json => dispatch({ type: 'SET_ACCOUNT_FRIENDS', payload: json }))
         }
       }
