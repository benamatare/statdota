// React & Redux
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TimeAgo from 'react-timeago'
// Componenets / Containers / Actions
import {
  finalFetchFlag,
  setLoadFlag,
  setAccountId,
  fetchAccountInfo,
  fetchAccountRecentMatches,
  fetchAccountMatches,
  fetchAccountHeroes,
  fetchAccountWinLoss,
  fetchAccountFriends
} from '../actions.js';
// Styling
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import { CardHeader } from 'material-ui/Card';
import './AccountCard.css';

const AccountCard = props => {
  const handleClick = e => {
    e.preventDefault()
    props.setLoadFlag()
    props.setAccountId(props.account.account_id)
    props.getAccountInfo(props.account.account_id)
    props.getAccountRecentMatches(props.account.account_id)
    props.getAccountMatches(props.account.account_id)
    props.getAccountHeroes(props.account.account_id)
    props.getAccountWinLoss(props.account.account_id)
    props.getAccountFriends(props.account.account_id)
    props.setFetchFlag()
  }

  return (
    <div className="cards-container">
      <div className="card">
        <Paper
          className="card-paper"
          zdepth={5}
          rounded={false}
          onClick={handleClick}
          children={
            <div className="paper-container">
              <div className="card-avatar-container">
              <Avatar
                className="card-avatar"
                src={props.account.avatarfull}
                size={40}/>
              </div>
              <div>
                <p className="card-account-name">{props.account.personaname}</p>
                <p className="card-account-id">{props.account.account_id}</p>
              </div>
            </div>
          }/>
      </div>
    </div>
  )}

  const mapStateToProps = state => {return {
    accounts: state.accounts,
    final_fetch_flag: state.final_fetch_flag
  }}

  const mapDispatchToProps = dispatch => {return bindActionCreators({
    setFetchFlag: finalFetchFlag,
    setAccountId: setAccountId,
    setLoadFlag: setLoadFlag,
    getAccountInfo: fetchAccountInfo,
    getAccountRecentMatches: fetchAccountRecentMatches,
    getAccountMatches: fetchAccountMatches,
    getAccountHeroes: fetchAccountHeroes,
    getAccountWinLoss: fetchAccountWinLoss,
    getAccountFriends: fetchAccountFriends
  },dispatch)}

export default connect(mapStateToProps, mapDispatchToProps)(AccountCard);
