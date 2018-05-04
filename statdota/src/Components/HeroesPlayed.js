import React from 'react';
import { connect } from 'react-redux';
import TimeAgo from 'react-timeago'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import heroes from '../dotaconstants/build/heroes.json'
import { getLastPlayedTime } from '../timeconverter.js';

const HeroesPlayed = props => {
  console.log('HeroesPlayed props are ->', props);

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
        <TableHeaderColumn tooltip="Matches played with hero"> Games Played </TableHeaderColumn>
        <TableHeaderColumn tooltip="Winrate with hero"> Winrate </TableHeaderColumn>
      </TableRow>
    </TableHeader>
      <TableBody
        displayRowCheckbox={false}
        deselectOnClickaway={false}
        // showRowHover={false}
        // stripedRows={false}
        >
        {sortHeroesPlayed().slice(0,10).map((hero, index) => {
          return (
            <TableRow key={index}>
            <TableRowColumn> <img src={heroes[hero.hero_id].img} alt="hero_img"/> {heroes[hero.hero_id].localized_name}<br></br>{getLastPlayedTime(hero.last_played)}</TableRowColumn>
            <TableRowColumn>{hero.games}</TableRowColumn>
            <TableRowColumn>{((hero.win/hero.games) * 100).toFixed(1)}%</TableRowColumn>
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

export default connect(mapStateToProps, null)(HeroesPlayed);
