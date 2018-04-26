
  const defaultState = {
    account_query: "",
    account_id: "",
    accounts: [],
    loading: false,
    account: {
      account_id: "",
      account_recent_matches: [],
      account_matches: [],
      account_heroes: [],
      account_w_l: "",
    }
  }


export function rootReducer(state = defaultState, action)  {
    switch (action.type) {
      case 'FETCH_ACCOUNTS':
        return {...state,
          loading: {
          ...!state.loading
          }
        }
      case 'ADD_ACCOUNTS':
      return {...state,
        accounts: action.payload
       }
       case 'SET_ACCOUNT_QUERY':
       return {...state,
         account_query: action.payload
       }
      default:
        return state;
    }
}
