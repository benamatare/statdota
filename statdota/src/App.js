// React & Redux
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { DotLoader } from 'react-spinners';
// Componenets / Containers / Actions
import { fetchAccounts } from './actions.js';
import AccountCard from './Components/AccountCard.js';
import AccountPage from './Components/AccountPage.js';
import Header from './Components/Header.js';
import LiveTracker from './Components/LiveTracker.js';
// Styling
import './App.css';

const App = props => {
  console.log(props);

  const renderAccountCards = () => {
    var accounts = Object.values(props.accounts)
      return accounts.map(account => <AccountCard key={account.account_id} account={account}/>)
  }

  return (
    <div className="app-div">
      <Header />
        <h1 style={{color: 'white'}}> 120652372 </h1>
          <LiveTracker />
      <div className="account-page-container" style={{ paddingBottom: 4 }}>
        {props.last_fetch_hit === true && props.account_clicked === true ? <AccountPage /> : null}
      </div>
      <div className="account-cards-container">
        {!props.account_clicked ? renderAccountCards() : null }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    search_results: state.account_query,
    account_clicked: state.account_clicked,
    final_fetch_flag: state.final_fetch_flag,
    last_fetch_hit: state.last_fetch_hit,
    accounts: state.accounts
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getAccounts: bindActionCreators(fetchAccounts, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
