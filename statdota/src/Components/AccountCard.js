import React from 'react';
import { connect } from 'react-redux';
import { setLoadFlag, setAccountId, fetchAccountInfo, fetchAccountRecentMatches, fetchAccountMatches, fetchAccountHeroes, fetchAccountWinLoss, fetchAccountFriends } from '../actions.js';
import { bindActionCreators } from 'redux';
import './AccountCard.css';

const AccountCard = props => {
  // console.log('Props in AccountCard are: ', props);
  const handleClick = e => {
    e.preventDefault();
    props.setLoadFlag()
    props.setAccountId(props.account.account_id)
    props.getAccountInfo(props.account.account_id)
    props.getAccountRecentMatches(props.account.account_id)
    props.getAccountMatches(props.account.account_id)
    props.getAccountHeroes(props.account.account_id)
    props.getAccountWinLoss(props.account.account_id)
    props.getAccountFriends(props.account.account_id)

    console.log('You clicked card:', props.account.account_id);
  }

  return (
    <div
      className="account_card"
      onClick={ handleClick }
      >
      <img
        src={ props.account.avatarfull}
        alt="account_card_img"
      />
      <div className="account_container">
        <h4>{ props.account.personaname }</h4>
        <p>{ props.account.last_match_time }</p>
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
    return bindActionCreators({
      setAccountId: setAccountId,
      setLoadFlag: setLoadFlag,
      getAccountInfo: fetchAccountInfo,
      getAccountRecentMatches: fetchAccountRecentMatches,
      getAccountMatches: fetchAccountMatches,
      getAccountHeroes: fetchAccountHeroes,
      getAccountWinLoss: fetchAccountWinLoss,
      getAccountFriends: fetchAccountFriends
    },dispatch)

  }

export default connect(mapStateToProps, mapDispatchToProps)(AccountCard);
