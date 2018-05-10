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
import LoadingScreen from './Components/LoadingScreen.js';

const App = props => {
  console.log(props);

  const renderAccountCards = () => {
    var accounts = Object.values(props.accounts)
      return accounts.map(account => <AccountCard key={account.account_id} account={account}/>)
  }

  return (
    <div className="app-div">
      <Header />

      <div className="account-page-container" style={{ paddingBottom: 4 }}>
        {props.fetch_counter === 10 && props.account_clicked ? <AccountPage /> : null}
      </div>

      <div className="account-cards-container">
        {props.account_clicked ? null : renderAccountCards()}
      </div>

    </div>
  )
}

const mapStateToProps = state => {
  return {
    fetch_counter: state.fetch_counter,
    account_clicked: state.account_clicked,
    accounts: state.accounts
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getAccounts: bindActionCreators(fetchAccounts, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
