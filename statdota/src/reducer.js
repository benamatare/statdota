
  const defaultState = {
    account_query: "",
    fetch_counter: 0,
    
    filler: null,
    live: [],
    loaded: false,

    accounts: [],

    match_id: null,
    match: null,

    account_cards_loaded: false,
    account_card_clicked: false,


    account: {
      account_lane_roles: null,
      account_card_graph: null,
      account_performance: null,
      account_id: "",
      account_info: null,
      account_recent_matches: [],
      account_matches: [],
      account_heroes: [],
      account_w_l: null,
      account_friends: [],
      matches:[],
    }
  }

export function rootReducer(state = defaultState, action)  {
  switch (action.type) {
    case 'SET_PLAYER_LANE_ROLES':
      return {...state,
        fetch_counter: state.fetch_counter += 1,
        account: {...state.account,
          account_lane_roles: action.payload
        }
      }
    case 'SET_PLAYER_PERFORMANCE':
      return {...state,
        fetch_counter: state.fetch_counter += 1,
        account: {...state.account,
          account_performance: action.payload
        }
      }
    case 'SET_PLAYER_CARD_GRAPH':
      return {...state,
        fetch_counter: state.fetch_counter += 1,
        account: {...state.account,
          account_card_graph: action.payload
        }

      }
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
        account_cards_loaded: false,
        fetch_counter: state.fetch_counter += 1,
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
        account_cards_loaded: true,
        accounts: action.payload
      }
    case 'SET_ACCOUNT_QUERY':
      return {...state,
        fetch_counter: 0,
        account_query: action.payload
      }
    case 'SET_ACCOUNT_INFO':
      return {...state,
        fetch_counter: state.fetch_counter += 1,
        account: {...state.account,
          account_info: action.payload
        }
      }
    case 'SET_ACCOUNT_RECENT_MATCHES':
      return {...state,
        fetch_counter: state.fetch_counter += 1,
        account: {...state.account,
          account_recent_matches: action.payload
        }
      }
    case 'SET_ACCOUNT_MATCHES':
      return {...state,
        fetch_counter: state.fetch_counter += 1,
        account: {...state.account,
          account_matches: action.payload
        }
      }
    case 'SET_ACCOUNT_HEROES':
      return {...state,
        fetch_counter: state.fetch_counter += 1,
        account: {...state.account,
          account_heroes: action.payload
        }
      }
    case 'SET_ACCOUNT_W_L':
      return {...state,
      fetch_counter: state.fetch_counter += 1,
        account: {...state.account,
          account_w_l: action.payload
        }
      }
    case 'SET_ACCOUNT_FRIENDS':
      return {...state,
        fetch_counter: state.fetch_counter += 1,
        account: {...state.account,
          account_friends: action.payload
        }
      }
      case '----':
        return {...state,
          filler: null
         }
    default:
      return state;
    }
}
