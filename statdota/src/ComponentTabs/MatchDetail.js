import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMatch } from '../actions.js';
import TimeAgo from 'react-timeago'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import heroes from '../dotaconstants/build/heroes.json'
import { matchSkillLevel, laneRole, lobbyType, matchType } from '../switches.js';
import { getLastPlayedTime } from '../timeconverter.js';
import RaisedButton from 'material-ui/RaisedButton';

import { Card, CardHeader } from 'material-ui/Card';

const MatchDetail = props => {
  console.log(props.match)
  console.log(props.match_id);



  return (
    <div>

          {props.match_id !== null  ? <h1 style={{color: 'white'}}>{props.match.match_id}</h1>: null}

          {/* {props.match.duration !== null ? <p>{new Date (props.match.duration * 1000).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0]}</p> : null} */}
          {/* {props.match.dire_score !== null  ? <p> Dire Score {props.match.dire_score}</p>: null}
          {props.match.radiant_score !== null  ? <p>Radiant Score {props.match.radiant_score}</p> : null}
          {props.match.radiant_win !== null  ? <h1>RADIANT FUCKING WON</h1> : <h1>DIRE FUCKING WON</h1>}
          {props.match.skill !== null  ? <p>{matchSkillLevel(props.match.skill)}</p> : null}
          {props.match.game_mode !== null  ? <p>{matchType(props.match.game_mode)}</p> : null}
          {props.match.lobby_type !== null  ? <p>{lobbyType(props.match.lobby_type)}</p> : null}
          {props.match.human_players !== null  ? <p>How many humans were in this match?{props.match.human_players}</p> : null} */}

          {/* <p>{props.match.}</p>
          <p>{props.match.}</p>
          <p>{props.match.}</p> */}
    </div>
  )
}


const mapStateToProps = state => {
  return {
    match_id: state.match_id,
    match: state.match
  }
}

export default connect(mapStateToProps, null)(MatchDetail);
