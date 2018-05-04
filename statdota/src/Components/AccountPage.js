import React from 'react';
import { connect } from 'react-redux';
import TimeAgo from 'react-timeago'
import { DotLoader } from 'react-spinners';

import RecentMatches from './RecentMatches.js';
import Friends from './Friends.js';
import HeroesPlayed from './HeroesPlayed.js';
import Analytics from './Analytics.js';
import Profile from './Profile.js';
import Matches from './Matches.js';
import Heroes from './Heroes.js';
import MatchAnalytics from './MatchAnalytics.js';

import './AccountPage.css';
import { Tabs, Tab } from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

const AccountPage = props => {
  console.log('Props in the AccountPage are ->', props.account )

  return (
    <div> {props.final_fetch_flag ?
      <div className="account-page">
        <Profile />
          <Tabs
            style={{
              padding: '5%'
              // paddingTop: '5%',
              // paddingBottom: '5%'
            }}>
            <Tab label="Overview" style={{background:'#3e3e3e'}}>
              <div style={{display: 'flex'}}>
              <div><h1>Top Heroes</h1></div>
              <HeroesPlayed />
              <div><h1>Recent Matches</h1></div>
              <RecentMatches />
              <div><h1>Friends</h1></div>
              <Friends />
              </div>
            </Tab>
            <Tab label="Matches"   style={{background:'#3e3e3e'}}>
              {/* <Matches /> */}
              {/* {props.final_fetch_flag ? <Matches /> : <DotLoader />} */}
            </Tab>
            <Tab label="Heroes"   style={{background:'#3e3e3e'}}>
                <h1>display all heroes here as a fucking table</h1>
                <Heroes />
            </Tab>
            <Tab label="Analytics"   style={{background:'#3e3e3e'}}>
                <h1>display some charts or some shit here</h1>
                <MatchAnalytics />
                {/* <Analytics /> */}
            </Tab>
        </Tabs>
      </div> : <DotLoader />}
  </div>
  )}

  const mapStateToProps = state => {
    return {
      account: state.account,
      final_fetch_flag: state.final_fetch_flag
    }
  }

export default connect(mapStateToProps, null)(AccountPage);
