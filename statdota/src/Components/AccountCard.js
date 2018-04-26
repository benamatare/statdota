import React, { Component } from 'react';
import './AccountCard.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const AccountCard = props => {
  console.log('Props in AccountCard are: ', props);

  return (
    <div className="account_card">
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



export default connect(mapStateToProps, null)(AccountCard);
