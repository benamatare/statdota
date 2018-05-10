// React & Redux
import React from 'react';
import { connect } from 'react-redux';
import TimeAgo from 'react-timeago'
import { DotLoader } from 'react-spinners';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardHeader, CardActions} from 'material-ui/Card';
import './Profile.css';
import heroes from '../dotaconstants/build/heroes.json'
import ranks from '../dotaconstants/build/ranks.json'

const Profile = props => {
  console.log("Props in Profile are: ", props);

  const sortHeroesPlayed = () => {
    return props.account.account_heroes.sort((a,b) => {
      return b.games - a.games })
  }

  let ACC = props.account
  let ACC_INFO = props.account.account_info
  let ACC_TOTAL_MATCHES = props.account.account_matches.length
  let ACC_WINS = props.account.account_w_l.win
  let ACC_LOSSES = props.account.account_w_l.lose

if (props.fetch_counter === 10) {
  return (
    <div className="container">
      <div className="top-container">
          <div className="img-container">
            {ACC_INFO.profile ?
              <Paper
                className="profile-avatar"
                style={{ margin:0, height:180, width:180}}
                circle={true}
                rounded={false}
                zDepth={0}
                children ={
                  <Avatar
                    className="profile-avatar"
                    style={{height:'100%', width:'100%'}}
                    src={props.account.account_info.profile.avatarfull}
                  />
                }/>
            : null}
          </div>
          <div className="profile-hero-icons-parent">
              <Paper
                className="profile-hero-icons"
                rounded={false}
                zDepth={0}
                children={
                  sortHeroesPlayed().slice(0,5).map(hero => {
                    return <img key={hero.hero_id} style={{margin: 2}} src={heroes[hero.hero_id].icon} alt="hero_icon"/>
                  })
                }/>
          </div>


          <div className="profile-name-info">
            {ACC_INFO.profile.personaname && ACC_INFO.rank_tier ?
              <Paper
                className="profile-paper"
                rounded={false}
                zDepth={0}
                children ={
                  <div className="profile-text">
                    {props.account.account_info.profile.personaname ? <h1 style={{margin: 1}}>{props.account.account_info.profile.personaname}</h1> : null}
                    {props.account.account_info.rank_tier ? <p style={{margin: 1}}> {ranks[props.account.account_info.rank_tier].name}</p> : null}
                  </div>
                }/>
            : null}
          </div>
          <div className="profile-stats">
            {ACC_WINS ?
            <Paper
              className="profile-paper"
              rounded={false}
              zDepth={0}
              children ={
                <div>
                  <p style={{margin: 1}}>WINS</p>
                  <h2 style={{margin: 1, color: 'green'}}>{props.account.account_w_l.win} </h2>
                </div>
              }/>
          : null}
          {ACC_LOSSES ?
            <Paper
              className="profile-paper"
              rounded={false}
              zDepth={0}
              children ={
              <div>
                  <p style={{margin: 1}}>LOSSES</p>
                  <h2 style={{margin: 1, color: 'red'}}>{props.account.account_w_l.lose}</h2>
              </div>
              }/>
          : null}
          {ACC_TOTAL_MATCHES && ACC_WINS ?
            <Paper
              className="profile-paper"
              rounded={false}
              zDepth={0}
              children={
                <div>
                 <p style={{margin: 1}}>WINRATE</p>
                 <h1 style={{margin: 1}}>{((ACC_WINS/ACC_TOTAL_MATCHES)*100).toFixed(0)}%</h1>
                </div>
              }/>
          : null }
          {ACC_TOTAL_MATCHES ?
            <Paper
            className="profile-paper"
            rounded={false}
            zDepth={0}
            children={
              <div>
                <p style={{margin: 1, fontSize: 16}}>RECORD</p>
                <h2 style={{margin: 1, fontSize: 16}}>{ACC_WINS + " - " + ACC_LOSSES + " - " + ACC_TOTAL_MATCHES}</h2>
              </div>
            }/>
          : null}
        </div>
        <div className="profile-mmr">
          {ACC_INFO.solo_competitive_rank ?
            <Paper
              className="profile-paper"
              rounded={false}
              zDepth={0}
              children={
                <div>
                  <p style={{margin: 1}}>SOLO MMR</p>
                  <h2 style={{margin: 1}}>{props.account.account_info.solo_competitive_rank}</h2>
                </div>
              }/>
          : null}
          {ACC_INFO.competitive_rank ?
            <Paper
              className="profile-paper"
              rounded={false}
              zDepth={0}
              children={
                <div>
                  <p style={{margin: 1}}>PARTY MMR</p>
                  <h2 style={{margin: 1}}>{props.account.account_info.competitive_rank}</h2>
                </div>
              }/>
          : null}
          {/* {ACC_INFO.mmr_estimate.estimate ?
            <Paper
              className="profile-paper"
              rounded={false}
              zDepth={0}
              children={
                <div>
                  <p style={{margin: 1}}>ESTIMATED MMR</p>
                  <h2 style={{margin: 1}}>{props.account.account_info.mmr_estimate.estimate}</h2>
                </div>
              }/>
          : null} */}
          {ACC_INFO.rank_tier ?
             <div className="rank-img-container">
              <Paper
                className="profile-rank"
                style={{backgroundColor: 0, position: 'relative', margin:0, height:180, width:180}}
                rounded={false}
                zDepth={0}
                children={
                  <div>
                    <Avatar className="stars-avatar" style={{backgroundColor: 0, position: 'absolute', borderRadius: 0, height:'100%', width:'100%'}} src={ranks[props.account.account_info.rank_tier].rank_stars}/>
                    <Avatar className="rank-avatar" style={{backgroundColor: 0, position: 'absolute', borderRadius: 0, height:'100%', width:'100%'}} src={ranks[props.account.account_info.rank_tier].rank_icon}/>
                  </div>
                }/>
            </div>
          : null}
        </div>
      </div>
    </div>
  )} else {
    return <DotLoader />
  }
}

  const mapStateToProps = state => {
    return {
      fetch_counter: state.fetch_counter,
      account: state.account
    }
  }

export default connect(mapStateToProps, null)(Profile);
