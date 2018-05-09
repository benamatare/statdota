import React from 'react';
import { connect } from 'react-redux';
import TimeAgo from 'react-timeago'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import heroes from '../dotaconstants/build/heroes.json'
import { matchSkillLevel, laneRole, lobbyType, matchType } from '../switches.js';
import { getLastPlayedTime } from '../timeconverter.js';
import RaisedButton from 'material-ui/RaisedButton';
import './Matches.css';
import { Card, CardHeader } from 'material-ui/Card';


class Matches extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentMatches: [],
      counter: 25
    }
  }

  componentDidMount(){
    this.setState({
      currentMatches: [this.props.matches.slice(0,25)]
    })
  }

  resultStyling = match => {
  if (match === "Won"){
    return <span style={{color: 'green'}}> Won </span>
  } else {
    return <span style={{color: 'red'}}> Lost </span>
  }}

  next = () => {
    this.setState({
      currentMatches: [this.props.matches.slice(this.state.counter, (this.state.counter + 25))],
      counter: this.state.counter + 25
    })
  }

  prev = () => {
    this.setState({
      currentMatches: [this.props.matches.slice((this.state.counter - 50), (this.state.counter - 25))],
      counter: this.state.counter - 25
    })
  }


render() {
  return(
    <div className="outer-container">
      <div style={{marginTop: 15, marginBottom: 15, width: 'fit-content'}}>
        <Card zDepth={0}
          style={{backgroundColor: '#1f1f1f00'}}
          rounded={false}
          children={
            <div className="header-text" style={{marginLeft: 15, marginRight: 15}}>
            <i style={{marginRight: 5, color: '#FA0013'}} className="material-icons">label_outline</i>
            <h1 style={{fontSize: 25}}>Match History</h1>
            </div>
          }>
        </Card>
      </div>
      <div className="outside-container">
        <div className="inner-container">
          <Table
            style={{overflow: 'hidden'}}
            className="edit-me"
            selectable={false}
            multiSelectable={false}>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}
            style={{
              width: 'auto',
              textTransform:'uppercase',
              fontWeight: 500
            }}>
            <TableRow className="table-row-header">
              <TableHeaderColumn className="matches-header" tooltip="Hero played, what team & lane" tooltipStyle={{top: -5}}>
                <div className="header-info-small" style={{fontSize: 12}}> Hero </div>
              </TableHeaderColumn>
              <TableHeaderColumn className="matches-header" tooltip="ID of the match, game mode & ranked or unranked" tooltipStyle={{top: -5}}>
                <div className="header-info-small" style={{fontSize: 12}}> Game Mode </div>
              </TableHeaderColumn>
              <TableHeaderColumn className="matches-header" tooltip="Player lost or Won & skill level" tooltipStyle={{top: -5}}>
                <div className="header-info-small" style={{fontSize: 12}}> Result </div>
              </TableHeaderColumn>
              <TableHeaderColumn className="matches-header" tooltip="Length of match" tooltipStyle={{top: -5}}>
                <div className="header-info-small" style={{fontSize: 12}}> Duration </div>
              </TableHeaderColumn>
              <TableHeaderColumn className="matches-header" tooltip="Number of kills by player" tooltipStyle={{top: -5}}>
                <div className="header-info-small" style={{fontSize: 12}}> K </div>
              </TableHeaderColumn>
              <TableHeaderColumn className="matches-header" tooltip="Number of deaths by player" tooltipStyle={{top: -5}}>
                <div className="header-info-small" style={{fontSize: 12}}> D </div>
              </TableHeaderColumn>
              <TableHeaderColumn className="matches-header" tooltip="Number of assist by player" tooltipStyle={{top: -5}}>
                <div className="header-info-small" style={{fontSize: 12}}> A </div>
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
            <TableBody
              displayRowCheckbox={false}
              deselectOnClickaway={false}
              showRowHover={false}
              stripedRows={false}>
                {this.state.currentMatches.map((matches) => {
                  // debugger
                    return( matches.map((match, index) => {
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
                              <span>
                                {match.match_id}
                              </span>
                              <span style={{color: '#686868', fontSize: 12}}>
                                {matchType(match.game_mode) + " / " + lobbyType(match.lobby_type)}
                              </span>
                             </div>
                          </TableRowColumn>
                          <TableRowColumn>
                            <div className="match-result">
                              {this.resultStyling(match.player_slot <= 127 && match.radiant_win === true ? "Won" : "Lost")}
                              <span style={{color: '#686868', fontSize: 12}}>{matchSkillLevel(match.skill)}</span>
                            </div>
                          </TableRowColumn>
                          <TableRowColumn>
                            <div className="match-duration">
                              <span>{new Date(match.duration * 250).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0]}</span>
                              <span style={{color: '#686868', fontSize: 12}}>{getLastPlayedTime(match.start_time)}</span>
                            </div>
                          </TableRowColumn>
                          <TableRowColumn><div>{match.kills}</div></TableRowColumn>
                          <TableRowColumn><div>{match.deaths}</div></TableRowColumn>
                          <TableRowColumn><div>{match.assists}</div></TableRowColumn>
                        </TableRow>
                      )}
                    ))}
                  )}
                </TableBody>
              </Table>
            {this.props.matches.length > 25 ?
              <div className="button-nav" style={{textAlign: 'center', marginTop: 5}}>
                {this.state.counter !== 25 ? <RaisedButton style={{marginLeft: 5, marginRight: 5}} onClick={this.prev} label="LESS"/> : null}
                <RaisedButton style={{marginLeft: 5, marginRight: 5}} onClick={this.next} label="MORE" />
              </div>
            : null}
            </div>
          </div>
        </div>
  )}
}

  const mapStateToProps = state => { return { matches: state.account.account_matches, final_fetch_flag: state.final_fetch_flag }}

export default connect(mapStateToProps, null)(Matches);
