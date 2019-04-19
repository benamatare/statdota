// React & Redux
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
      return accounts.map(account =>
        <AccountCard key={account.account_id} account={account}/>)
  }

  const renderLogic = () => {
    if(props.account_cards_loaded === true){
      if(props.account_card_clicked === false){
        return renderAccountCards()
      } else if (props.account_card_clicked === true && props.fetch_counter !== 10){
        // debugger
        return <LoadingScreen/>
      }
    } else if (props.account_card_clicked === true && props.fetch_counter < 10){
      return <LoadingScreen/>

  } else if (props.account_card_clicked === false && props.account_cards_loaded === false){
      if (props.accounts.length !== 0) {
        return <LoadingScreen/>
      }
    } else {
      return (
        <div className="account-page-container" style={{ paddingBottom: 4 }}>
           <AccountPage/>
        </div>)
    }
}

  return (<div>
    {/* <LoadingScreen /> */}
     <div className="app-div">
      <Header />
      {!props.accounts.length > 0 ? <iframe
        style={{
          margin: 0,
          position: 'absolute'
        }}
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/SmnqsdeHFT0?autoplay=1;rel=0&amp;controls=0&amp;showinfo=0&amp;start=7"
        frameborder="0" allow="autoplay; encrypted-media"
        allowFullScreen></iframe> : null}
      <div className="account-cards-container">{ renderLogic() }  </div>
    </div>
  </div>)
}

const mapStateToProps = state => {
  return {
    fetch_counter: state.fetch_counter,
    account_card_clicked: state.account_card_clicked,
    account_cards_loaded: state.account_cards_loaded,
    accounts: state.accounts
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getAccounts: bindActionCreators(fetchAccounts, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
