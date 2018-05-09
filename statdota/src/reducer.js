
  const defaultState = {
    account_query: "",
    live: [],
    account_clicked: false,
    loaded: false,
    error: "",
    accounts: [],
    final_fetch_flag: false,
    last_fetch_hit: false,
    match_id: null,
    match: null,
    match_flag: false,
    account: {
      account_id: "",
      account_info: {},
      account_recent_matches: [],
      account_matches: [],
      account_heroes: [],
      account_w_l: {},
      account_friends: [],
      matches:[],
    }
  }

export function rootReducer(state = defaultState, action)  {
  switch (action.type) {
    case 'SET_MATCH_FLAG':
      return {...state,
        match_flag: !state.match_flag
    }
    case 'SET_MATCH_ID':
      return {...state,
        match_id: action.payload
    }
    case 'GET_SINGLE_MATCH_DATA':
      return {...state,
        match: action.payload
      }
    case 'SET_LIVE_STATUS':
      return {...state,
        live: action.payload
      }
    case 'GET_MATCH_ID_DATA':
      return {...state,
        account: {...state.account,
          matches: action.payload
        }
      }
    case 'GET_MATCH_DATA':
      return {...state,
      account: {...state.account,
        match: action.payload
      }
    }
    case 'SET_ACCOUNT_CLICKED':
      return {...state,
        account_clicked: false
      }
    case 'FINAL_FETCH_FLAG':
      return {...state,
        final_fetch_flag: true
      }
    case 'SET_ACCOUNT_ID':
      return {...state,
        account_clicked: !state.account_clicked,
        account: {...state.account,
          account_id: action.payload
        }
      }
    case 'LOAD_DATA_FLAG':
      return {...state,
        loaded: !state.loaded,
    }
    case 'ADD_ACCOUNTS':
      return {...state,
        loaded: !state.loaded,
        accounts: action.payload
      }
    case 'SET_ACCOUNT_QUERY':
      return {...state,
        account_query: action.payload
      }
    case 'SET_ACCOUNT_INFO':
      return {...state,
        account: {...state.account,
          account_info: action.payload
        }
      }
    case 'SET_ACCOUNT_RECENT_MATCHES':
      return {...state,

        account: {...state.account,
          account_recent_matches: action.payload
        }
      }
    case 'SET_ACCOUNT_MATCHES':
      return {...state,
        last_fetch_hit: !state.last_fetch_hit,
        account: {...state.account,
          account_matches: action.payload
        }
      }
    case 'SET_ACCOUNT_HEROES':
      return {...state,
        account: {...state.account,
          account_heroes: action.payload
        }
      }
    case 'SET_ACCOUNT_W_L':
      return {...state,
        account: {...state.account,
          account_w_l: action.payload
        }
      }
    case 'SET_ACCOUNT_FRIENDS':
      return {...state,
        loaded: !state.loaded,
        account: {...state.account,
          account_friends: action.payload
        }
      }
    default:
      return state;
    }
}
