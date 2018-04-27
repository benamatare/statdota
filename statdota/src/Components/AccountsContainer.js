import React from 'react';
import { connect } from 'react-redux';
import { fetchAccounts } from '../actions.js';
import { bindActionCreators } from 'redux';
import AccountCard from './AccountCard.js';
import AccountPage from './AccountPage.js';
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
        { props.account_clicked ? <AccountPage /> : null }
        <div>
          {!props.account_clicked ? <Search /> : null }
        </div>
        <div>
          { !props.account_clicked ? renderAccountCards() : null }
        </div>
      </div>

    )
  }

  const mapStateToProps = state => {
    return {
      account_clicked: state.account_clicked,
      accounts: state.accounts
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      getAccounts: bindActionCreators(fetchAccounts, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AccountsContainer);
