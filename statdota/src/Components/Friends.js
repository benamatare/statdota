import React from 'react';
import { connect } from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const Friends = props => {
  console.log(props);
    return (
      <Table
      selectable={false}
      multiSelectable={false}>
      <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}
        enableSelectAll={false}>
        <TableRow>
          <TableHeaderColumn tooltip="Name of player played with"> Player </TableHeaderColumn>
          <TableHeaderColumn tooltip="Total number of matches played with or against"> Games Played </TableHeaderColumn>
          <TableHeaderColumn tooltip="Winrate"> Result </TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody
        displayRowCheckbox={false}
        deselectOnClickaway={false}
        showRowHover={false}
        stripedRows={false}>
          {props.account_friends.slice(0,5).map((friend, index) => {
            return (
              <TableRow key={index}>
                <TableRowColumn><img alt="friend-avatar" src={friend.avatar}/>{friend.personaname}</TableRowColumn>
                <TableRowColumn>{friend.games}</TableRowColumn>
                <TableRowColumn>{((friend.win/friend.games)*100).toFixed(0)}%</TableRowColumn>
              </TableRow>
            )})}
      </TableBody>
    </Table>
  )}

    const mapStateToProps = state => {
      return {
        account_friends: state.account.account_friends,
        final_fetch_flag: state.final_fetch_flag
      }
    }

export default connect(mapStateToProps, null)(Friends);
