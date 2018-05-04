// React & Redux
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TimeAgo from 'react-timeago'
// Componenets / Containers / Actions
import { finalFetchFlag, setLoadFlag, setAccountId, fetchAccountInfo, fetchAccountRecentMatches, fetchAccountMatches, fetchAccountHeroes, fetchAccountWinLoss, fetchAccountFriends } from '../actions.js';
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

  const lastMatchTime = time => {
    if (time === null) {
      return (
        <CardHeader
          style={{
            height: 42,
            'whiteSpace': 'nowrap',
            width: '33.33%',
            verticalAlign: 'text-top',
            padding: 4,
            marginRight: '4%',
            textAlign:'left',
            display:'inline-block'
          }}
          title={props.account.personaname.substr(0,13)+"..."}
        />)} else {
      return (
        <CardHeader
          style={{
            height: 42,
            'whiteSpace': 'nowrap',
            width: 'auto',
            verticalAlign: 'text-top',
            padding: 4,
            marginRight: '4%',
            textAlign:'left',
            display:'inline-block'
          }}
          title={props.account.personaname.length < 12 ? props.account.personaname : props.account.personaname.substr(0,12) + "..."}
          subtitle={<TimeAgo
            style={{whiteSpace: 'nowrap'}}
            date={props.account.last_match_time}/>
          }
        />)}
  }

  return (
    <section className="cards">
      <article className="card">
        <Paper
          rounded={false}
          onClick={handleClick}
          style={{
            height: 65,
            'whiteSpace': 'nowrap',
            width: 195,
            verticalAlign: 'text-top',
            padding: 4,
            margin: 4,
            textAlign:'left',
            display:'inline-block'
          }}
          zdepth={5}
          children={
            <div style={{ 'whiteSpace': 'nowrap'}}>
              <Avatar
                src={props.account.avatarfull}
                size={30}
                style={{
                  float: 'left',
                  height: 'auto',
                  width: 50,
                  borderRadius: 0,
                  display:'inline-block'
                }}
              />
              {lastMatchTime(props.account.last_match_time)}
            </div>
          }
        />
      </article>
    </section>)
  }

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
