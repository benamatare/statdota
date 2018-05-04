import React from 'react';
import { connect } from 'react-redux';
import TimeAgo from 'react-timeago'
import { bindActionCreators } from 'redux';
import { fetchLive } from '../actions.js';



  const LiveTracker = props => {
    console.log(props);
    const clicker = e => {
      props.fetchLive()
    }
    return (
      <div onClick={clicker}>
        <h1> CLICK ME </h1>
      </div>
    )



  }

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({
      fetchLive: fetchLive,
    }, dispatch)
  }


export default connect(null, mapDispatchToProps)(LiveTracker);
