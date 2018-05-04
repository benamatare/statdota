import React from 'react';
import { connect } from 'react-redux';
import TimeAgo from 'react-timeago'
import heroes from '../dotaconstants/build/heroes.json'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { getLastPlayedTime } from '../timeconverter.js';

const Heroes = props => {
  console.log(props.account_heroes)

  const sortHeroesPlayed = () => {
    return props.account_heroes.sort((a,b) => {
      return b.games - a.games })
  }

  return (
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
          <TableHeaderColumn tooltip="Hero played"> Hero </TableHeaderColumn>
          <TableHeaderColumn tooltip="Matches played with hero"> Total Games Played </TableHeaderColumn>
          <TableHeaderColumn tooltip="Winrate with this hero"> Total Winrate </TableHeaderColumn>
          <TableHeaderColumn tooltip="Number of games with this hero on the team">With Games Played</TableHeaderColumn>
          <TableHeaderColumn tooltip="Winrate with this hero on the team">With Winrate</TableHeaderColumn>
          <TableHeaderColumn tooltip="Number of games against this hero">Against Games Played</TableHeaderColumn>
          <TableHeaderColumn tooltip="Winrate against this hero">Against Winrate</TableHeaderColumn>
        </TableRow>
      </TableHeader>
        <TableBody
          displayRowCheckbox={false}
          deselectOnClickaway={false}
          // showRowHover={false}
          // stripedRows={false}
          >
          {sortHeroesPlayed().map((hero, index) => {
            return (
              <TableRow key={index}>
              <TableRowColumn> <img src={heroes[hero.hero_id].img} alt="hero_img"/> {heroes[hero.hero_id].localized_name}<br></br>{getLastPlayedTime(hero.last_played)}</TableRowColumn>
              <TableRowColumn>{hero.games}</TableRowColumn>
              <TableRowColumn>{((hero.win/hero.games) * 100).toFixed(2)}%</TableRowColumn>
              <TableRowColumn>{hero.against_games}</TableRowColumn>
              <TableRowColumn>{((hero.against_win / hero.against_games)*100).toFixed(2)}%</TableRowColumn>
              <TableRowColumn>{hero.with_games}</TableRowColumn>
              <TableRowColumn>{((hero.with_win / hero.with_games)*100).toFixed(2)}%</TableRowColumn>
              </TableRow>
            )})}
          </TableBody>
    </Table>
  )}

  const mapStateToProps = state => {
    return {
      account_heroes: state.account.account_heroes,
      final_fetch_flag: state.final_fetch_flag
    }
  }

export default connect(mapStateToProps, null)(Heroes);
