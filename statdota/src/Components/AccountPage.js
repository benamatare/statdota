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


import './AccountPage.css';
import { Tabs, Tab } from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

const AccountPage = props => {
  console.log('Props in the AccountPage are ->', props.account )

  return (<div>
    <div> {props.match_flag ? <MatchDetail /> : null}</div>

    <div> {props.final_fetch_flag ?
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
              <div>
                {/* <MatchDetail /> */}
                {/*
                <MatchAnalytics />
                <Analytics /> */}
              </div>
            </Tab>
        </Tabs>
      </div> : <DotLoader />}
  </div>
  </div>)}

  const mapStateToProps = state => {
    return {
      account: state.account,
      final_fetch_flag: state.final_fetch_flag,
      match_flag: state.match_flag
    }
  }

export default connect(mapStateToProps, null)(AccountPage);
