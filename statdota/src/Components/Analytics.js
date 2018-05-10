// React & Redux
import React from 'react';
import { connect } from 'react-redux';
// Styling
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const Analytics = props => {
  console.log(props.matches);

  // const average = thing => { thing.reduce((sume, el) => sume + el, 0) / thing.length

  const totalAssists = () => {
    return props.matches.map((match) => {
      return match.assists
    })
}


  const totalDeaths = () => {
    return props.matches.map((match) => {
      return match.deaths
    }
  )}
  const totalKills = () => {
    return props.matches.map((match) => {
      return match.kills
    }
  )}
  const totalPlayerSlots = () => {
    return props.matches.map((match) => {
      return match.player_slots
    }
  )}
  const totalDurations = () => {
    return props.matches.map((match) => {
      return match.duration
    }
  )}


  return(
    // <div>
    // <p> Lifetime Average Kills {(totalKills().reduce((a,b) => a + b) / totalAssists().length).toFixed(2)}</p>
    // <p> Lifetime Average Deaths {(totalDeaths().reduce((a,b) => a + b) / totalDeaths().length).toFixed(2)}</p>
    // <p> Lifetime Average Assists {(totalAssists().reduce((a,b) => a + b) / totalAssists().length).toFixed(2)}</p>
    // <p> Radiant or Dire on Average? {(totalPlayerSlots().reduce((a,b) => a + b) / totalAssists().length).toFixed(2)}</p>
    // {/* <p> Lifetime Average Assists {new Date((totalDurations().reduce((a,b) => a + b) / totalAssists().length).toFixed(2)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0]}%</p> */}
    // </div>
    // <p>hahah</p>

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
  )
}

const mapStateToProps = state => {
  return {
    matches: state.account.account_matches,
    final_fetch_flag: state.final_fetch_flag
  }
}

export default connect(mapStateToProps, null)(Analytics);
