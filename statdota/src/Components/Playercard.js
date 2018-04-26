import React, { Component } from 'react';

export default class Playercard extends Component {
  constructor(props) {
    super(props);
      this.state = {
        account_id: props.player,
        account_info: [],
        account_recent_matches: [],
        account_matches: [],
        account_heroes: [],
        account_w_l: "",
      }
  }
  componentDidMount(){
    this.fetchAccountInfo();
    this.fetchAccountRecentMatches();
    this.fetchAccountMatches();
    this.fetchAccountHeroes();
    this.fetchAccountWl();
  }

   fetchAccountInfo = () => {
    fetch(`https://api.opendota.com/api/players/${this.state.account_id}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          account_info: json,
        })
      }
    )
  }

   fetchAccountRecentMatches = () => {
    fetch(`https://api.opendota.com/api/players/${this.state.account_id}/recentMatches`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          account_recent_matches: json,
        })
      })
  }
   fetchAccountMatches = () => {
    fetch(`https://api.opendota.com/api/players/${this.state.account_id}/matches`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          account_matches: json,
        })
      })
  }
   fetchAccountHeroes = () => {
    fetch(`https://api.opendota.com/api/players/${this.state.account_id}/heroes`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          account_heroes: json,
        })
      })
  }
   fetchAccountWl = () => {
    fetch(`https://api.opendota.com/api/players/${this.state.account_id}/wl`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          account_w_l: json,
        })
      })
  }

  // handleClick = (e) => {
  //   debugger
  // }


  render() {
    return (
      <div>
        hi there
        <p> Account ID: { this.state.account_id } </p>
        <p> { this.state.}</p>
        {/* Account Recent Matches: { this.fetchAccountRecentMatches } */}
        {/* Account Matches: { this.fetchAccountMatches } */}
        {/* Account Heroes: { this.fetchAccountHeroes } */}
        {/* Account W/L: { this.fetchAccountWl } */}
      </div>
    )
  }
}
