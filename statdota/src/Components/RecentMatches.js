import React from 'react';
import { connect } from 'react-redux';
import TimeAgo from 'react-timeago';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import heroes from '../dotaconstants/build/heroes.json';
import { matchSkillLevel, laneRole, lobbyType, matchType } from '../switches.js';
import { getLastPlayedTime } from '../timeconverter.js';

const RecentMatches = props => {
  console.log(props.account_recent_matches);

  return (
    <div style={{display: 'flex'}}>
        <Table
          selectable={false}
          multiSelectable={false}>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}>
            <TableRow
              stripedrows={true}
              showrowhover={true}
              style={{padding: 5}}>
              <TableHeaderColumn tooltip="Hero played, what team & lane"> Hero </TableHeaderColumn>
              <TableHeaderColumn tooltip="ID of the match, game mode & ranked or unranked"> Game Mode </TableHeaderColumn>
              <TableHeaderColumn tooltip="Player lost or Won & skill level"> Result </TableHeaderColumn>
              <TableHeaderColumn tooltip="Length of match"> Duration </TableHeaderColumn>
              <TableHeaderColumn tooltip="Number of kills by player"> Kills </TableHeaderColumn>
              <TableHeaderColumn tooltip="Number of deaths by player"> Deaths </TableHeaderColumn>
              <TableHeaderColumn tooltip="Number of assist by player"> Assists </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            deselectOnClickaway={false}
            // showRowHover={false}
            // stripedRows={false}
            >
          {props.account_recent_matches.map((match, index) => {
            return(
              <TableRow key={index}>
                <TableRowColumn> <img src={heroes[match.hero_id].img}/>  {heroes[match.hero_id].localized_name} <br></br> {match.player_slot <= 127 ? "Dire" : "Radiant" } {laneRole(match.lane)}</TableRowColumn>
                <TableRowColumn> {match.match_id} <br></br> {matchType(match.game_mode) + " / " + lobbyType(match.lobby_type)} </TableRowColumn>
                <TableRowColumn> { match.player_slot <= 127 && match.radiant_win === true ? "Won" : "Lost"} <br></br> {matchSkillLevel(match.skill)}</TableRowColumn>
                <TableRowColumn> {new Date(match.duration * 1000).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0]}<br></br>{getLastPlayedTime(match.start_time)} </TableRowColumn>
                <TableRowColumn> {match.kills} </TableRowColumn>
                <TableRowColumn> {match.deaths} </TableRowColumn>
                <TableRowColumn> {match.assists} </TableRowColumn>
              </TableRow>
            )})}
          </TableBody>
        </Table>
      </div>
  )}

  const mapStateToProps = state => {
    return {
      account_recent_matches: state.account.account_recent_matches,
      final_fetch_flag: state.final_fetch_flag
    }
  }

export default connect(mapStateToProps, null)(RecentMatches);
