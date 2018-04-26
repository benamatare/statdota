
  const defaultState = {
    account_query: "",
    accounts: [],
    account: {
      account_id: "",
      account_info: {},
      account_recent_matches: [],
      account_matches: [],
      account_heroes: [],
      account_w_l: {},
      account_friends: [],

    }
  }


export function rootReducer(state = defaultState, action)  {
    switch (action.type) {
      case 'ADD_ACCOUNTS':
        return {...state,
          accounts: action.payload
         }
       case 'SET_ACCOUNT_QUERY':
         return {...state,
           account_query: action.payload
         }
       case 'SET_ACCOUNT_ID':
        return {...state,
            account: {...state.account,
              account_id: action.payload
            }
        }
        case 'SET_ACCOUNT_INFO':
          return {...state,
            account: {...state.account,
              account_info: action.payload
            }
          }
      default:
        return state;
    }
}
