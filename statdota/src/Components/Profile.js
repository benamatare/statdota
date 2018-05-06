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

  var TOTAL_MATCHES = props.account.account_matches.length
  var WINS = props.account.account_w_l.win
  var W_L = (WINS/TOTAL_MATCHES)*100
  var PROP_CHECK = props && props.account.account_info
  var PROP_CHECK_WIN_LOSS = props && props.account.account_w_l

  return(
    <div className="container">
      <div className="top-container">
          <div className="img-container">
            <Paper
              className="profile-avatar"
              style={{ margin:0, height:180, width:180}}
              circle={true}
              rounded={false}
              zDepth={5}
              children ={
                PROP_CHECK.profile ? <Avatar className="profile-avatar" style={{height:'100%', width:'100%'}} src={props.account.account_info.profile.avatarfull}/> : <DotLoader />
              }/>
          </div>
          <div className="profile-hero-icons-parent">
              <Paper
                className="profile-hero-icons"
                rounded={false}
                zDepth={2}
                children={
                  sortHeroesPlayed().slice(0,5).map(hero => {
                    return <img style={{margin: 2}} src={heroes[hero.hero_id].icon} alt="hero_icon"/>
                  })
                }/>
          </div>
          <div className="profile-name-info">
            <Paper
              className="profile-paper"
              rounded={false}
              zDepth={4}
              children ={
              PROP_CHECK.profile ?  <div className="profile-text">
                  <h1 style={{margin: 1}}>{props.account.account_info.profile.personaname}</h1>
                  <p style={{margin: 1}}> {ranks[props.account.account_info.rank_tier].name}</p>
                  <img src={ranks[props.account.account_info.rank_tier].rank_stars}/>
                  <img src={ranks[props.account.account_info.rank_tier].rank_icon}/>
                </div> : null
              }/>
              <div className="profile-rank-image">
                <Paper
                  className="rank-image-paper"
                />

              </div>
          <div className="profile-stats">
            <Paper
              className="profile-paper"
              rounded={false}
              zDepth={4}
              children ={
              PROP_CHECK_WIN_LOSS ?  <div>
                  <p style={{margin: 1}}>WINS</p>
                  <h2 style={{margin: 1, color: 'green'}}>{props.account.account_w_l.win} </h2>
                </div> : null
              }/>
          <Paper
            className="profile-paper"
            rounded={false}
            zDepth={4}
            children ={
            PROP_CHECK_WIN_LOSS ?  <div>
                <p style={{margin: 1}}>LOSSES</p>
                <h2 style={{margin: 1, color: 'red'}}>{props.account.account_w_l.lose}</h2>
              </div> : null
            }/>
            <Paper
              className="profile-paper"
              rounded={false}
              zDepth={4}
              children ={
              WINS && TOTAL_MATCHES ?  <div>
                   <p style={{margin: 1}}>WINRATE</p>
                   <h1 style={{margin: 1}}>{W_L.toFixed(0)}%</h1>
                </div> : null
              }/>
          <Paper
            className="profile-paper"
            rounded={false}
            zDepth={4}
            children ={
            TOTAL_MATCHES ?  <div>
                <p style={{margin: 1, fontSize: 16}}>RECORD</p>
                <h2 style={{margin: 1, fontSize: 16}}>{props.account.account_w_l.win + " - " + props.account.account_w_l.lose + " - " + TOTAL_MATCHES}</h2>
              </div> : null
            }/>

          </div>

          <div className="profile-mmr">
          <Paper
            className="profile-paper"
            rounded={false}
            zDepth={2}
            children ={
            PROP_CHECK.solo_competitive_rank !== null  ?  <div>
                <p style={{margin: 1}}>SOLO MMR</p>
                <h2 style={{margin: 1}}>{props.account.account_info.solo_competitive_rank}</h2>
              </div> : null
            }/>
          <Paper
            className="profile-paper"
            rounded={false}
            zDepth={2}
            children ={
            PROP_CHECK.competitive_rank !== null ?  <div>
                <p style={{margin: 1}}>PARTY MMR</p>
                <h2 style={{margin: 1}}>{props.account.account_info.competitive_rank}</h2>
              </div> : null
            }/>
          <Paper
            className="profile-paper"
            rounded={false}
            zDepth={2}
            children ={
            PROP_CHECK.solo_competitive_rank || PROP_CHECK.competitive_rank ?  <div>
              <p style={{margin: 1}}>ESTIMATED MMR</p>
              <h2 style={{margin: 1}}>{props.account.account_info.mmr_estimate.estimate}</h2>
            </div> : null
            }/>
            </div>
          </div>
        </div>
    </div>
  )}

  const mapStateToProps = state => {
    return {
      account: state.account,
      final_fetch_flag: state.final_fetch_flag
    }
  }

export default connect(mapStateToProps, null)(Profile);
