import React from 'react';
import { connect } from 'react-redux';

import './AccountPage.css';

const AccountPage = props => {

    console.log('Props in the AccountPage are: ', props.account.account_info.mmr_estimate)


  return (<div>
    <Spinner text="Loading..." style="fa fa-spinner fa-spin" />
    {/* <p>{props.account.account_info.mmr_estimate.estimate}</p> */}
    {/* <h1>MMR Estimate: {props.account.account_info.mmr_estimate.estimate}</h1> */}
    {/* <h1>Account Name: {props.account.account_info.profile.personaname}</h1>
    <img
      src={props.account.account_info.profile.avatar}
      alt="account_avatar"
    />
    <h1> Rank Tier: {props.account.account_info.profile.rank_tier}</h1>
    <h1> Solo MMR: {props.account.account_info.profile.solo_competitive_rank ? null : props.account.account_info.profile.solo_competitive_rank }</h1>
    <h1>Wins: {props.account.account_w_l.win}</h1>
    <h1>Loses: {props.account.account_w_l.lose}</h1>
     i am the account page */}
  </div>)
}


const mapStateToProps = state => {
  return {
    account: state.account
  }
}

export default connect(mapStateToProps, null)(AccountPage);
