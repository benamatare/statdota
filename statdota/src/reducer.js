
  const defaultState = {
    account_query: "",
    account_clicked: false,
    loaded: false,
    error: "",
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

    case 'SET_ACCOUNT_ID':
      return {...state,
        account_clicked: !state.account_clicked,
        account: {...state.account,
          account_id: action.payload
        }
      }
    case 'LOAD_DATA_FLAG':
      return {...state,
    loaded: {...!state.loaded}
    }
    case 'ADD_ACCOUNTS':
      return {...state,
        loaded: true,
        accounts: action.payload
      }
    case 'SET_ACCOUNT_QUERY':
      return {...state,
        loaded: true,
        account_query: action.payload
      }
    case 'SET_ACCOUNT_INFO':
      return {...state,
        loaded: true,
        account: {...state.account,
          account_info: action.payload
        }
      }
    case 'SET_ACCOUNT_RECENT_MATCHES':
      return {...state,
        loaded: true,
        account: {...state.account,
          account_recent_matches: action.payload
        }
      }
    case 'SET_ACCOUNT_MATCHES':
      return {...state,
        loaded: true,
        account: {...state.account,
          account_matches: action.payload
        }
      }
    case 'SET_ACCOUNT_HEROES':
      return {...state,
        loaded: true,
        account: {...state.account,
          account_heroes: action.payload
        }
      }
    case 'SET_ACCOUNT_W_L':
      return {...state,
        loaded: true,
        account: {...state.account,
          account_w_l: action.payload
        }
      }
    case 'SET_ACCOUNT_FRIENDS':
      return {...state,
        loaded: true,
        account: {...state.account,
          account_friends: action.payload
        }
      }
    default:
      return state;
    }
}
