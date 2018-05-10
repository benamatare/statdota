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
import MatchDetail from '../ComponentTabs/MatchDetail.js';
import RadarChart from '../ComponentTabs/RadarChart.js';
import LoadingScreen from './LoadingScreen.js';

import './AccountPage.css';
import { Tabs, Tab } from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

const AccountPage = props => {
  console.log('Props in the AccountPage are ->', props.account )

  if (props.fetch_counter === 10) {
    return (
      <div className="account-page">
        <Profile />
          <Tabs className="tab-container" inkBarStyle={{backgroundColor: '#3B90E4'}}>
            <Tab className="tabs" label="Overview">
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
            <Tab className="tabs" label="Matches">
              <div>
                <Matches />
              </div>
            </Tab>
            <Tab className="tabs" label="Heroes">
                <div>
                  <Heroes />
                </div>
            </Tab>
            <Tab className="tabs" label="Friends">
              <div>
                <Friends />
              </div>
            </Tab>
            <Tab className="tabs" label="Analytics">
              <div style={{display: 'block'}}>
                <Analytics />
                <RadarChart />
              </div>
            </Tab>
        </Tabs>
      </div>
    )} else {
    return <LoadingScreen />
    }
}

  const mapStateToProps = state => {
    return {
      fetch_counter: state.fetch_counter,
      account: state.account
    }
  }

export default connect(mapStateToProps, null)(AccountPage);
