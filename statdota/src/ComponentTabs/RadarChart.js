// React & Redux
import React from 'react';
import { connect } from 'react-redux';
import { Bar, Line, Radar, Polar } from 'react-chartjs-2';
import './RadarChart.css';

const RadarChart = props => {

  const totalAssists = () => {
    return props.matches.map((match) => {
      return match.assists
    }
  )}
  const totalDeaths = () => {
    return props.matches.map((match) => {
      return match.deaths
    }
  )}
  const totalKills = () => {
    return props.matches.map((match) => {
      return match.kills
    }
  )}

  const KDA_AVG = {
    labels: [
      'K',
      'D',
      'A',
    ],
    datasets: [
      {label: 'Recent Average',
        backgroundColor: '#74aee72e',
        borderColor: '#3B90E4' ,
        data: [
          props.account_performance.avgNumKills.toFixed(2),
          props.account_performance.avgNumDeaths.toFixed(2),
          props.account_performance.avgNumAssists.toFixed(2)
      ]},
      {label: 'Lifetime Average',
        backgroundColor: '#fa00138c',
        borderColor: '#FA0013' ,
        data: [
        (totalKills().reduce((a,b) => a + b) / totalAssists().length).toFixed(2),
        (totalDeaths().reduce((a,b) => a + b) / totalDeaths().length).toFixed(2),
        (totalAssists().reduce((a,b) => a + b) / totalAssists().length).toFixed(2)
      ]}
    ]
  }


  const GPM_XPM_LHPM = {
    labels: [
      'GPM',
      'XPM',
      'LHPM',
    ],
    datasets: [
      {label: 'Average',
        backgroundColor: '#74aee72e',
        borderColor: '#3B90E4' ,
        data: [
          props.account_performance.avgGoldPerMinute.toFixed(0),
          props.account_performance.avgExperiencePerMinute.toFixed(0),
          props.account_performance.avgNumLastHits.toFixed(0),
      ]},
      {label: 'Max',
        backgroundColor: '#fa00138c',
        borderColor: '#FA0013' ,
        data: [
          props.account_performance.maxGoldPerMinute.toFixed(0),
          props.account_performance.maxExperiencePerMinute.toFixed(0),
          props.account_performance.maxNumLastHits.toFixed(0),
      ]}
    ]
  }

    if (props.account_performance !== null) {
      return (<div className="charts-container">
        <div className="kda-radar">
          <h1 className="header"> Kills/Deaths/Assist </h1>
            <h2 className="subheader"> Lifetime vs Recent </h2>
            <Radar data={KDA_AVG}
              height={500}
              width={1000}
              options={{
                legend: {
                  position: 'bottom'
                },
                scale: {
                  gridLines: {
                    lineWidth: 1.3
                },
                ticks: {
                  maxTicksLimit: 4,
                  display: false
                },
                pointLabels: {
                  fontSize: 22,
                  fontColor: '#ffffff'
                }}
              }}/>
        </div>
        <div className="gpm-xpm-lhpm-radar">
          <h1 className="header"> Gold/Experience/Last-Hits </h1>
            <h2 className="subheader"> Average vs Max </h2>
            <Radar data={GPM_XPM_LHPM}
              height={500}
              width={1000}
              options={{
                legend: {
                  position: 'bottom'
                },
                scale: {
                  gridLines: {
                    lineWidth: 1.3
                },
                ticks: {
                  maxTicksLimit: 4,
                  display: false
                },
                pointLabels: {
                  fontSize: 22,
                  fontColor: '#ffffff'
                }}
              }}/>
        </div>
      </div>)
    } else {
      return null
    }
}


  const mapStateToProps = state => {
    return {
      matches: state.account.account_matches,
      account_lane_roles: state.account.account_lane_roles,
      account_card_graph: state.account.account_card_graph,
      account_performance: state.account.account_performance,
      final_fetch_flag: state.final_fetch_flag
    }
  }

export default connect(mapStateToProps, null)(RadarChart);
