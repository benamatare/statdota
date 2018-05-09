import React from 'react';
import { connect } from 'react-redux';
import TimeAgo from 'react-timeago';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import heroes from '../dotaconstants/build/heroes.json';
import { matchSkillLevel, laneRole, lobbyType, matchType } from '../switches.js';
import { getLastPlayedTime } from '../timeconverter.js';
import './RecentMatches.css';
import { Card, CardHeader } from 'material-ui/Card';
import { bindActionCreators } from 'redux';
import { setMatchId, fetchMatch, setMatchFlag } from '../actions.js';


const RecentMatches = props => {
  console.log(props.account_recent_matches);

  const resultStyling = match => {
    if (match === "Won"){
      return <span style={{color: 'green'}}> Won </span>
    } else {
      return <span style={{color: 'red'}}> Lost </span>
    }}

    const handleClick = e => {
      var match_id = e.target.innerText
      props.setMatchId(match_id)
      props.fetchMatch(match_id)
      props.setMatchFlag()
    }


  return (
    <div className="outer-container">
      <div style={{marginTop: 15, marginBottom: 15, width: 'fit-content'}}>
        <Card zDepth={0}
          style={{backgroundColor: '#1f1f1f00'}}
          rounded={false}
          children={
            <div className="header-text" style={{marginLeft: 15, marginRight: 15}}>
            <i style={{marginRight: 5, color: '#FA0013'}} className="material-icons">label_outline</i>
            <h1 style={{fontSize: 25}}>Recent Matches</h1>
            </div>
          }>
        </Card>
      </div>
      <div className="outside-container">
        <div className="inner-container">
          <Table
            style={{overflow: 'hidden', backgroundColor: '#212121'}}
            className="edit-me"
            selectable={false}
            multiSelectable={false}>
          <TableHeader
            className="edit-me-header"
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}
            style={{
              width: 'auto',
              textTransform:'uppercase',
              fontWeight: 500
            }}>
            <TableRow className="table-row-header">
              <TableHeaderColumn style={{paddingLeft: 77, paddingRight: 24}} className="recent-matches-header" tooltip="Hero played, Team & Role" tooltipStyle={{top: -3}}>
                <div className="header-info-small" style={{fontSize: 12}}> Hero</div>
              </TableHeaderColumn>
              <TableHeaderColumn style={{paddingLeft: 80, paddingRight: 4}}className="recent-matches-header" tooltip="Match ID, Game Mode & Ranked or Unranked" tooltipStyle={{top: -3}}>
                <div className="header-info-small" style={{fontSize: 12}}> Game Mode</div>
              </TableHeaderColumn>
              <TableHeaderColumn style={{paddingLeft: 66, paddingRight: 24}}className="recent-matches-header" tooltip="Win or Lost & Skill Level" tooltipStyle={{top: -3}}>
                <div className="header-info-small" style={{fontSize: 12}}> Result</div>
              </TableHeaderColumn>
              <TableHeaderColumn style={{paddingLeft: 85, paddingRight: 40}}className="recent-matches-header" tooltip="Length of match" tooltipStyle={{top: -3}}>
                <div className="header-info-small" style={{fontSize: 12}}> Duration</div>
              </TableHeaderColumn>
              <TableHeaderColumn style={{paddingLeft: 39, paddingRight: 8}} className="recent-matches-header" tooltip="Kills" tooltipStyle={{top: -3}}>
                <div className="header-info-small" style={{fontSize: 12}}> K</div>
              </TableHeaderColumn>
              <TableHeaderColumn style={{paddingLeft: 35, paddingRight: 33}} className="recent-matches-header" tooltip="Deaths" tooltipStyle={{top: -3}}>
                <div className="header-info-small" style={{fontSize: 12}}> D</div>
              </TableHeaderColumn>
              <TableHeaderColumn style={{paddingLeft: 2, paddingRight: 15}} className="recent-matches-header" tooltip="Assists" tooltipStyle={{top: -3}}>
                <div className="header-info-small" style={{fontSize: 12}}> A</div>
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
            <TableBody
              displayRowCheckbox={false}
              deselectOnClickaway={false}
              showRowHover={false}
              stripedRows={false}>
                {props.account_recent_matches.map((match, index) => {
                  return(
                    <TableRow key={index} className="table-row">
                      <TableRowColumn>
                        <div className="img-text-container">
                          <div className="hero-image">
                            <img src={heroes[match.hero_id].img} alt="hero_img"/>
                          </div>
                          <div className="hero-info">
                            {heroes[match.hero_id].localized_name}
                            <br></br>
                            <span style={{color: '#686868', fontSize: 12}}>
                              {match.player_slot <= 127 ? "Dire" : "Radiant" }
                            </span>
                            <span style={{color: '#dca24d', fontSize: 11}}>
                              {laneRole(match.lane)}
                            </span>
                          </div>
                        </div>
                      </TableRowColumn>
                      <TableRowColumn>
                        <div className="match-info">
                          <span onClick={handleClick}>
                            {match.match_id}
                          </span>
                          <span style={{color: '#686868', fontSize: 12}}>
                            {matchType(match.game_mode) + " / " + lobbyType(match.lobby_type)}
                          </span>
                         </div>
                      </TableRowColumn>
                      <TableRowColumn>
                        <div className="match-result">
                          {resultStyling(match.player_slot <= 127 && match.radiant_win === true ? "Won" : "Lost")}
                          <span style={{color: '#686868', fontSize: 12}}>{matchSkillLevel(match.skill)}</span>
                        </div>
                      </TableRowColumn>
                      <TableRowColumn>
                        <div className="match-duration">
                          <span>{new Date(match.duration * 1000).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0]}</span>
                          <span style={{color: '#686868', fontSize: 12}}>{getLastPlayedTime(match.start_time)}</span>
                        </div>
                      </TableRowColumn>
                      <TableRowColumn><div>{match.kills}</div></TableRowColumn>
                      <TableRowColumn><div>{match.deaths}</div></TableRowColumn>
                      <TableRowColumn><div>{match.assists}</div></TableRowColumn>
                    </TableRow>)})}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
  )}

  const mapStateToProps = state => {
    return {
      account_recent_matches: state.account.account_recent_matches,
      final_fetch_flag: state.final_fetch_flag,
      match: state.match,
      match_flag :state.match_flag
     }
   }

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({
      setMatchId: setMatchId,
      fetchMatch: fetchMatch,
      setMatchFlag: setMatchFlag
    }, dispatch)
  }
export default connect(mapStateToProps, mapDispatchToProps)(RecentMatches);
