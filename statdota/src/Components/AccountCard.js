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
  fetchAccountFriends,
  fetchPlayerPerformance,
  fetchPlayerCardGraph,
  fetchPlayerLaneRole
} from '../actions.js';
// Styling
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import { CardHeader } from 'material-ui/Card';
import LoadingScreen from './LoadingScreen.js';
import './AccountCard.css';

const AccountCard = props => {
  var ac_id = props.account.account_id
  const handleClick = e => {
    e.preventDefault()
    props.setAccountId(ac_id)
    props.getAccountInfo(ac_id)
    props.getAccountRecentMatches(ac_id)
    props.getAccountMatches(ac_id)
    props.getAccountHeroes(ac_id)
    props.getAccountWinLoss(ac_id)
    props.getAccountFriends(ac_id)
    props.fetchPlayerCardGraph(ac_id)
    props.fetchPlayerPerformance(ac_id)
    props.fetchPlayerLaneRole(ac_id)
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
    account_cards_loaded: state.account_cards_loaded,
    accounts: state.accounts,
    fetch_counter: state.fetch_counter
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
    getAccountFriends: fetchAccountFriends,
    fetchPlayerPerformance: fetchPlayerPerformance,
    fetchPlayerCardGraph: fetchPlayerCardGraph,
    fetchPlayerLaneRole: fetchPlayerLaneRole
  },dispatch)}

export default connect(mapStateToProps, mapDispatchToProps)(AccountCard);
