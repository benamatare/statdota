import React from 'react';
import { connect } from 'react-redux';
import { fetchAccounts } from '../actions.js';
import { bindActionCreators } from 'redux';
import AccountCard from './AccountCard.js';
import Search from './Search.js';
import './AccountsContainer.css';


  const AccountsContainer = props => {
    // console.log('Props in AccountsContainer are: ', props)
    const renderAccountCards = () => {
      var accounts = Object.values(props.accounts)
        return accounts.map(account => <AccountCard
          key={ account.account_id }
          account={ account }
      />)
    }
    return(
      <div>
        <div>
          <Search />
        </div>
        <div>
          { renderAccountCards() }
        </div>
      </div>

    )
  }

  const mapStateToProps = state => {
    return {
      accounts: state.accounts
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      getAccounts: bindActionCreators(fetchAccounts, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AccountsContainer);
