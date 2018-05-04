// React & Redux
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMatchData } from '../actions.js';


const MatchAnalytics = props => {
  // console.log(props.account_matches);
  // console.log(props.matches);

  return (
    <h1>testing some shit in here</h1>
  )
}



const mapStateToProps = state => {
  return {
    account_matches: state.account.account_matches,
    matches: state.account.matches,
    final_fetch_flag: state.final_fetch_flag
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getMatchData: fetchMatchData,
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(MatchAnalytics);
