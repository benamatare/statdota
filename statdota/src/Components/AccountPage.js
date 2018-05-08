import React from 'react';
import { connect } from 'react-redux';
import TimeAgo from 'react-timeago'
import { DotLoader } from 'react-spinners';

import Profile from './Profile.js';
import Heroes from '../ComponentTabs/Heroes.js';
import HeroesPlayed from '../ComponentTabs/HeroesPlayed.js';
import Matches from '../ComponentTabs/Matches.js';
import RecentMatches from '../ComponentTabs/RecentMatches.js';
import Friends from '../ComponentTabs/Friends.js';
import RecentFriends from '../ComponentTabs/RecentFriends.js';
import Analytics from './Analytics.js';
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
          <Tabs style={{marginLeft: '15%', marginRight: '13.5%'}}>
            <Tab label="Overview" style={{background:'blue'}}>
              <div className="overview-container">
                <div className="item1">
                <RecentMatches />
                </div>
                <div className="item2">
                <HeroesPlayed />
                <div style={{paddingTop: 20}}>
                <RecentFriends />
                </div>
              </div>
              </div>
            </Tab>
            <Tab label="Matches" style={{background:'yellow'}}>
              <div>
                <Matches />
              </div>
            </Tab>
            <Tab label="Heroes" style={{background:'red'}}>
                <div>
                  <Heroes />
                </div>
            </Tab>
            <Tab label="Analytics" style={{background:'red'}}>
              <div>
                <MatchAnalytics />
                <Analytics />
              </div>
            </Tab>
            <Tab label="Pros" style={{background:'red'}}>

            </Tab>
            <Tab label="Friends" style={{background:'red'}}>
              <div>
                <Friends />
              </div>
            </Tab>
            <Tab label="Records" style={{background:'red'}}>

            </Tab>
            <Tab label="Totals" style={{background:'red'}}>

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
