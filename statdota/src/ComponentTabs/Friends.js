import React from 'react';
import { connect } from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import './Friends.css';
import { Card, CardHeader } from 'material-ui/Card';

const Friends = props => {
  console.log(props);
    return (
      <div className="outer-container">
        <div style={{marginTop: 15, marginBottom: 15, width: 'fit-content'}}>
          <Card zDepth={0}
            style={{backgroundColor: '#1f1f1f00'}}
            rounded={false}
            children={
              <div className="header-text" style={{marginLeft: 15, marginRight: 15}}>
              <i style={{marginRight: 5, color: '#FA0013'}} className="material-icons">label_outline</i>
              <h1 style={{fontSize: 25}}>Friends Played With</h1>
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
              textTransform: 'uppercase',
              fontWeight: 500
            }}>
            <TableRow className="table-row-header">
              <TableHeaderColumn className="friends-header" tooltip="Player name" tooltipStyle={{top: -5}}>
                <div className="header-info-small" style={{fontSize: 12}}> PLAYER </div>
              </TableHeaderColumn>
              <TableHeaderColumn className="friends-header" tooltip="Games played together" tooltipStyle={{top: -5}}>
                  <div className="header-info-small" style={{fontSize: 12}}> GP </div>
              </TableHeaderColumn>
              <TableHeaderColumn className="friends-header" tooltip="Games with" tooltipStyle={{top: -5}}>
                  <div className="header-info-small" style={{fontSize: 12}}> GAMES WITH </div>
              </TableHeaderColumn>
              <TableHeaderColumn className="friends-header" tooltip="Winrate with" tooltipStyle={{top: -5}}>
                  <div className="header-info-small" style={{fontSize: 12}}> WIN WITH % </div>
              </TableHeaderColumn>
              <TableHeaderColumn className="friends-header" tooltip="Games against" tooltipStyle={{top: -5}}>
                  <div className="header-info-small" style={{fontSize: 12}}> AGAINST </div>
              </TableHeaderColumn>
              <TableHeaderColumn className="friends-header" tooltip="Winrate against" tooltipStyle={{top: -5}}>
                  <div className="header-info-small" style={{fontSize: 12}}> WIN AGAINST % </div>
              </TableHeaderColumn>
              <TableHeaderColumn className="friends-header" tooltip="Gold per minute" tooltipStyle={{top: -5}}>
                  <div className="header-info-small" style={{fontSize: 12}}> GPM WITH </div>
              </TableHeaderColumn>
              <TableHeaderColumn className="friends-header" tooltip="Experience per minute" tooltipStyle={{top: -5}}>
                  <div className="header-info-small" style={{fontSize: 12}}> XPM WITH </div>
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
            <TableBody
              displayRowCheckbox={false}
              deselectOnClickaway={false}
              showRowHover={false}
              stripedRows={false}>
                {props.account_friends.map((friend, index) => {
                  return (
                    <TableRow key={index} className="table-row">
                      <TableRowColumn>
                        <div className="img-text-container">
                          <div className="friend-image">
                            <img src={friend.avatar} alt="friend-avatar"/>
                          </div>
                          <div className="friend-info" stlye={{marginLeft: 5}}>
                            {friend.personaname}
                          </div>
                        </div>
                      </TableRowColumn>
                      <TableRowColumn>
                        <div>{friend.games}</div>
                      </TableRowColumn>
                      <TableRowColumn>
                        <div>{friend.with_games}</div>
                      </TableRowColumn>
                      <TableRowColumn>
                        <div>{((friend.win/friend.games) * 100).toFixed(2)}%</div>
                      </TableRowColumn>
                      <TableRowColumn>
                        <div>{friend.against_games}</div>
                      </TableRowColumn>
                      <TableRowColumn>
                        <div>{friend.against_games ? (friend.against_win/friend.against_games).toFixed(0) : 0}</div>
                      </TableRowColumn>
                      <TableRowColumn>
                        <div>{(friend.with_gpm_sum/friend.with_games).toFixed(0)}</div>
                      </TableRowColumn>
                      <TableRowColumn>
                        <div>{(friend.with_xpm_sum/friend.with_games).toFixed(0)}</div>
                      </TableRowColumn>
                    </TableRow>)})}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
)}

  const mapStateToProps = state => { return { account_friends: state.account.account_friends, final_fetch_flag: state.final_fetch_flag}};

export default connect(mapStateToProps, null)(Friends);
