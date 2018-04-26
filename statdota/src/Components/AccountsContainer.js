import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchAccountInfo } from '../actions.js';
import { bindActionCreators } from 'redux';

import Playercard from './Playercard.js';
import Playerlist from './Playerlist.js';
import Search from './Search.js';



const AccountsContainer = props => {
  console.log('Props in main.js are: ', props)

  // const renderAccounts = () => {
  //
  // }

  return(
    <div>
      <Search />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAccounts: bindActionCreators(fetchAccountInfo, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AccountsContainer);






// export default class Main extends Component {
//
//   handleChange = e => {
//     this.setState({
//       query: e.target.value
//     }, () => console.log('The state in main.js is:', this.state.query))
//   }
//
//   handleSubmit = (e) => {
//       e.preventDefault();
//     console.log('hit me');
//     fetch(`https://api.opendota.com/api/search?q=${this.state.query}`)
//       .then(res => res.json())
//       .then(json => this.setState({
//         players: json
//       }), () => {
//         console.log(this.state.players)
//       })
//   }
//
//   renderPlayers = () => {
//     return this.state.players.map( player => {
//       return <Playerlist onClick={ this.setAccountId } key={ player.account_id } player={player} />
//     })
//   }
//
//   setAccountId = e => {
//     this.setState({
//       account_id: e.target.id,
//       clicked: true,
//     })
//   }
//
//
//
//
//   render() {
//     return (
//       <div>
//         <p>this is the main</p>
//         <div> { this.state.clicked ? <Playercard player={ this.state.account_id } /> : null }</div>
//         <form onSubmit={ (e) => this.handleSubmit(e) }>
//           <input
//             type="text"
//             placeholder="search me bitch"
//             onChange={(e) => this.handleChange(e) }
//           />
//           <input
//             type="submit"
//           />
//         </form>
//         <br></br>
//         <p> what were searching:  { this.state.query }</p>
//         { this.renderPlayers() }
//       </div>
//   )
//   }
// }
