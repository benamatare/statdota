import React from 'react';
import { connect } from 'react-redux';
import { fetchAccountInfo, setGlobalAccountId } from '../actions.js';
import { bindActionCreators } from 'redux';
import './AccountCard.css';


const AccountCard = props => {
  console.log('Props in AccountCard are: ', props);

  const handleClick = e => {
    props.getAccountInfo(props.account.account_id)
    props.setAccountId(props.account.account_id)
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
    return bindActionCreators({getAccountInfo: fetchAccountInfo, setAccountId: setGlobalAccountId},dispatch)

  }

export default connect(mapStateToProps, mapDispatchToProps)(AccountCard);
