import React from 'react';
import { connect } from 'react-redux';
// import { GridLoader } from 'react-spinners';

import './AccountPage.css';

const AccountPage = props => {

  // let MMR_ESTIMATE = props.account.account_info.mmr_estimate.estimate
  // let ACCOUNT_NAME = props.account.account_info.profile.personaname
  // let ACCOUNT_IMAGE_FULL = props.account.account_info.profile.avatarfull
  //
  // let RANK_TIER = props.account.account_info.profile.rank_tier
  // let SOLO_MMR = props.account.account_info.profile.solo_competitive_rank
  // let PARTY_MMR = props.account.account_info.profile.competitive_rank
  //
  let TOTAL_MATCHES = props.account.account_matches.length
  let WINS = props.account.account_w_l.win
  let LOSE = props.account.account_w_l.lose
  let W_L = (WINS/TOTAL_MATCHES)*100

  let PROP_CHECK = props && props.account.account_info
  let PROP_CHECK_PROFILE = props && props.account.account_info.profile
  let PROP_CHECK_WIN_LOSS = props && props.account.account_w_l

  // __________________________________________________________________-

  console.log('Props in the AccountPage are: ', props.account )

  return (<div>
    i am the account page kill me please
    { PROP_CHECK_PROFILE ? <h1>Solo MMR{props.account.account_info.profile.solo_competitive_rank} </h1> : "doesnt exist my dude"}
    { PROP_CHECK_PROFILE ? <h1>Party MMR {props.account.account_info.profile.competitive_rank} </h1> : "doesnt exist my dude"}
    { PROP_CHECK.mmr_estimate ? <h1>MMR Estimate: {props.account.account_info.mmr_estimate.estimate} </h1> : 'MMR is not a thiung my dude' }

    { PROP_CHECK_PROFILE ? <h1>Account Name: {props.account.account_info.profile.personaname} </h1> : 'Nope'}
    { PROP_CHECK_PROFILE ? <img src={props.account.account_info.profile.avatarfull} alt="account_avatar"/> : 'nope'}

    { PROP_CHECK_WIN_LOSS ? <h1>Wins: {props.account.account_w_l.win} </h1> : "doesnt exist my dude"}
    { PROP_CHECK_WIN_LOSS ? <h1>Losses: {props.account.account_w_l.lose} </h1> : "doesnt exist my dude"}
    { WINS && TOTAL_MATCHES ? <h1>Winrate: {  W_L.toFixed(2) }%</h1> : 'nah'}
    { TOTAL_MATCHES ? <h1> total games played: {props.account.account_matches.length} </h1> : 'nope'}

  </div>)
}


const mapStateToProps = state => {
  return {
    account: state.account
  }
}


export default connect(mapStateToProps, null)(AccountPage);
