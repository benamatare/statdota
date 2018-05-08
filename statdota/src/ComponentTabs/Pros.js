import React from 'react';
import { connect } from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import './Pros.css';

const Pros = props => {
  console.log(props);
    return (
      <div className="outer-container">
        <div style={{marginTop: 15, marginBottom: 15}}>
          <span className="header-text">
            Pros Played With
          </span>
        </div>
        <div className="outside-container">
          <div className="inner-container">
          <Table
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
            <TableRow>
              <TableHeaderColumn tooltip="Player name" tooltipStyle={{top: -5}}>
                <div className="header-info-small" style={{fontSize: 12}}> PLAYER </div>
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Games played with" tooltipStyle={{top: -5}}>
                  <div className="header-info-small" style={{fontSize: 12}}> GP </div>
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Winrate with" tooltipStyle={{top: -5}}>
                  <div className="header-info-small" style={{fontSize: 12}}> GAMES WITH </div>
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Winrate with" tooltipStyle={{top: -5}}>
                  <div className="header-info-small" style={{fontSize: 12}}> WIN WITH % </div>
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Winrate with" tooltipStyle={{top: -5}}>
                  <div className="header-info-small" style={{fontSize: 12}}> AGAINST </div>
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Winrate with" tooltipStyle={{top: -5}}>
                  <div className="header-info-small" style={{fontSize: 12}}> WIN AGAINST % </div>
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Winrate with" tooltipStyle={{top: -5}}>
                  <div className="header-info-small" style={{fontSize: 12}}> GPM WITH </div>
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Winrate with" tooltipStyle={{top: -5}}>
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
                    <TableRow key={index}>
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

export default connect(mapStateToProps, null)(Pro);
