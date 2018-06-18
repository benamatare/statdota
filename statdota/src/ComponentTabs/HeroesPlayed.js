import React from 'react';
import { connect } from 'react-redux';
import TimeAgo from 'react-timeago';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import heroes from '../dotaconstants/build/heroes.json';
import { getLastPlayedTime } from '../timeconverter.js';
import './HeroesPlayed.css';
import { Card, CardHeader } from 'material-ui/Card';

const HeroesPlayed = props => {
  console.log('HeroesPlayed props are ->', props);

  const sortHeroesPlayed = () => {
    return props.account_heroes.sort((a,b) => {
      return b.games - a.games })
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
            <h1 style={{fontSize: 25}}>Heroes Played With</h1>
            </div>
          }>
        </Card>
      </div>
      <div className="outside-container">
        <div className="inner-container">
          <Table
            className="edit-me"
            selectable={false}
            multiSelectable={false}>
          <TableHeader
            className="edit-me"
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}
            style={{
              width: 'auto',
              textTransform: 'uppercase',
              fontWeight: 500
            }}>
            <TableRow className="table-row-header">
              <TableHeaderColumn className="heroes-played-header" tooltip="Hero played" tooltipStyle={{top: -5}}>
                <div className="header-info-small" style={{fontSize: 12, textAlign: 'right'}}> HERO </div>
              </TableHeaderColumn>
              <TableHeaderColumn className="heroes-played-header" tooltip="Games played with" tooltipStyle={{top: -5}}>
                <div className="header-info-small" style={{fontSize: 12}}> GP </div>
              </TableHeaderColumn>
              <TableHeaderColumn className="heroes-played-header" tooltip="Winrate with" tooltipStyle={{top: -5}}>
                <div className="header-info-small" style={{fontSize: 12}}> WIN % </div>
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
            <TableBody
              displayRowCheckbox={false}
              deselectOnClickaway={false}
              showRowHover={false}
              stripedRows={false}>
                {sortHeroesPlayed().slice(0,10).map((hero, index) => {
                  return (
                    <TableRow key={index} className="table-row">
                      <TableRowColumn>
                        <div className="img-text-container">
                          <div className="hero-image">
                            <img src={heroes[hero.hero_id].img} alt="hero_img"/>
                          </div>
                          <div className="hero-info">
                            {heroes[hero.hero_id].localized_name}
                            <br></br>
                            <span style={{color: '#686868'}}> {getLastPlayedTime(hero.last_played)}</span>
                          </div>
                        </div>
                      </TableRowColumn>
                      <TableRowColumn><div>{hero.games}</div></TableRowColumn>
                      <TableRowColumn><div>{((hero.win/hero.games) * 100).toFixed(1)}%</div></TableRowColumn>
                  </TableRow>)})}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
)}

  const mapStateToProps = state => { return { account_heroes: state.account.account_heroes, final_fetch_flag: state.final_fetch_flag }};

export default connect(mapStateToProps, null)(HeroesPlayed);
