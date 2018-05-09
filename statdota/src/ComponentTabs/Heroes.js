import React from 'react';
import { connect } from 'react-redux';
import TimeAgo from 'react-timeago'
import HEROES from '../dotaconstants/build/heroes.json'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { getLastPlayedTime } from '../timeconverter.js';
import RaisedButton from 'material-ui/RaisedButton';
import './Heroes.css';
import { Card, CardHeader } from 'material-ui/Card';


class Heroes extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentHeroes: [],
      counter: 15
    }
  }

  componentDidMount(){
    this.setState({
      currentHeroes: [this.sortHeroesPlayed().slice(0,15)]
    })
  }

  sortHeroesPlayed = () => {
    return this.props.account_heroes.sort((a,b) => {
      return b.games - a.games })
  }

  next = () => {
    this.setState({
      currentHeroes: [this.props.account_heroes.slice(this.state.counter, (this.state.counter + 15))],
      counter: this.state.counter + 15
    })
  }

  prev = () => {
    this.setState({
      currentHeroes: [this.props.account_heroes.slice((this.state.counter - 30), (this.state.counter - 15))],
      counter: this.state.counter - 15
    })
  }

render() {
  console.log(this.state.currentHeroes[0]);
  console.log(this.state.counter);
  return(
    <div className="outer-container">
      <div style={{marginTop: 15, marginBottom: 15, width: 'fit-content'}}>
        <Card zDepth={0}
          style={{backgroundColor: '#1f1f1f00'}}
          rounded={false}
          children={
            <div className="header-text" style={{marginLeft: 15, marginRight: 15}}>
            <i style={{marginRight: 5, color: '#FA0013'}} className="material-icons">label_outline</i>
            <h1 style={{fontSize: 25}}>Heroes Played</h1>
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
              <TableHeaderColumn className="heroes-header" className="heroes-header" tooltip="Hero played">
                <div className="img-text-container" style={{fontSize: 12}}>Hero</div>
              </TableHeaderColumn>
              <TableHeaderColumn className="heroes-header" tooltip="Matches played with hero">
                <div className="header-info-small" style={{fontSize: 12}}>GP</div>
              </TableHeaderColumn>
              <TableHeaderColumn className="heroes-header" tooltip="Winrate with this hero">
                <div className="header-info-small" style={{fontSize: 12}}>WIN %</div>
              </TableHeaderColumn>
              <TableHeaderColumn className="heroes-header" tooltip="Number of games with this hero on the team">
                <div className="header-info-small" style={{fontSize: 12}}>WITH</div>
              </TableHeaderColumn>
              <TableHeaderColumn className="heroes-header" tooltip="Winrate with this hero on the team">
                <div className="header-info-small" style={{fontSize: 12}}>WIN WITH %</div>
              </TableHeaderColumn>
              <TableHeaderColumn className="heroes-header" tooltip="Number of games against this hero">
                <div className="header-info-small" style={{fontSize: 12}}>AGAINST</div>
              </TableHeaderColumn>
              <TableHeaderColumn className="heroes-header" tooltip="Winrate against this hero">
                <div className="header-info-small" style={{fontSize: 12}}>WIN AGAINST %</div>
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
            <TableBody
              displayRowCheckbox={false}
              deselectOnClickaway={false}
              showRowHover={false}
              stripedRows={false}>
                {this.state.currentHeroes.map((heroes) => {
                  // console.log(this.state.currentHeroes);
                  return( heroes.map((hero, index) => {
                    return(
                      <TableRow key={index} className="table-row">
                        <TableRowColumn>
                          <div className="img-text-container">
                            <div className="hero-image">
                              <img src={HEROES[hero.hero_id].img} alt="hero_img"/>
                            </div>
                            <div className="hero-info">
                              {HEROES[hero.hero_id].localized_name}
                              <br></br>
                              <span style={{color: '#686868'}}> {getLastPlayedTime(hero.last_played)}</span>
                            </div>
                          </div>
                        </TableRowColumn>
                        <TableRowColumn>
                          <div>{hero.games}</div>
                        </TableRowColumn>
                        <TableRowColumn>
                          <div>{hero.games ? ((hero.win/hero.games) * 100).toFixed(1) + "%" : 0}</div>

                        </TableRowColumn>
                        <TableRowColumn>
                          <div>{hero.against_games}</div>
                        </TableRowColumn>
                        <TableRowColumn>
                          <div>{((hero.against_win / hero.against_games)*100).toFixed(1)}%</div>
                        </TableRowColumn>
                        <TableRowColumn>
                          <div>{hero.with_games}</div>
                        </TableRowColumn>
                        <TableRowColumn>
                          <div>{((hero.with_win / hero.with_games)*100).toFixed(1)}%</div>
                        </TableRowColumn>
                      </TableRow>
                    )}
                  ))}
                )}
            </TableBody>
          </Table>
            <div className="button-nav" style={{textAlign: 'center', marginTop: 5}}>
              {this.state.counter !== 15 ? <RaisedButton style={{marginLeft: 5, marginRight: 5}} onClick={this.prev} label="LESS"/> : null}
              {this.state.counter !== 120 ? <RaisedButton style={{marginLeft: 5, marginRight: 5}} onClick={this.next} label="MORE"/> : null}
            </div>
        </div>
      </div>
    </div>
  )}
}
  const mapStateToProps = state => { return { account_heroes: state.account.account_heroes, final_fetch_flag: state.final_fetch_flag }}

export default connect(mapStateToProps, null)(Heroes);
