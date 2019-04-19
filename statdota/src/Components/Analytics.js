// React & Redux
import React from 'react';
import { connect } from 'react-redux';
// Styling
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { Card, CardHeader } from 'material-ui/Card';

const Analytics = props => {

  const totalAssists = () => {
    return props.matches.map((match) => {
      return match.assists
    })
  };

  const totalDeaths = () => {
    return props.matches.map((match) => {
      return match.deaths
    })
  };

  const totalKills = () => {
    return props.matches.map((match) => {
      return match.kills
    })
  };

  const totalPlayerSlots = () => {
    return props.matches.map((match) => {
      return match.player_slots
    })
  };

  const totalDurations = () => {
    return props.matches.map((match) => {
      return match.duration
    })
  };

  return(
    <div className="outer-container">
      <div style={{marginTop: 15, marginBottom: 15, width: 'fit-content'}}>
        <Card zDepth={0}
          style={{backgroundColor: '#1f1f1f00'}}
          rounded={false}
          children={
            <div className="header-text" style={{marginLeft: 15, marginRight: 15}}>
            <i style={{marginRight: 5, color: '#FA0013'}} className="material-icons">label_outline</i>
            <h1 style={{fontSize: 25}}> Analytics </h1>
            </div>
          }>
        </Card>
      </div>
    <Table
    height={'100'}
    selectable={false}
    multiSelectable={false}
    headerStyle={{
      backgroundColor: 'red'
    }}>
    <TableHeader
      displaySelectAll={false}
      adjustForCheckbox={false}
      enableSelectAll={false}>
      <TableRow>
        <TableHeaderColumn tooltip="Average kills per game"> Lifetime Average Kills </TableHeaderColumn>
        <TableHeaderColumn tooltip="Average deaths per game"> Lifetime Average Deaths </TableHeaderColumn>
        <TableHeaderColumn tooltip="Average assists per game"> Lifetime Average Assists </TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody
      displayRowCheckbox={false}
      deselectOnClickaway={false}
      showRowHover={false}
      stripedRows={false}>
          <TableRow>
            <TableRowColumn>{(totalKills().reduce((a,b) => a + b) / totalAssists().length).toFixed(2)}</TableRowColumn>
            <TableRowColumn>{(totalDeaths().reduce((a,b) => a + b) / totalDeaths().length).toFixed(2)}</TableRowColumn>
            <TableRowColumn>{(totalAssists().reduce((a,b) => a + b) / totalAssists().length).toFixed(2)}</TableRowColumn>
          </TableRow>
    </TableBody>
  </Table>
  </div>
)}

const mapStateToProps = state => {return { matches: state.account.account_matches,final_fetch_flag: state.final_fetch_flag  }}

export default connect(mapStateToProps, null)(Analytics);
