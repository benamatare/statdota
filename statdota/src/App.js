// React & Redux
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { DotLoader } from 'react-spinners';
// Componenets / Containers / Actions
import { fetchAccounts } from './actions.js';
import AccountCard from './Components/AccountCard.js';
import AccountPage from './Components/AccountPage.js';
import Header from './Components/Header.js';
import LiveTracker from './Components/LiveTracker.js';
// Styling
import './App.css';

const App = props => {
  const renderAccountCards = () => {
    var accounts = Object.values(props.accounts)
      return accounts.map(account => <AccountCard key={account.account_id} account={account}/>)
  }
//Render to the page <--
  return (
    <div className="app-div">
      <Header />
      {/* <Searchbar /> */}
      <h1>120652372</h1>
      <LiveTracker />
      <div className="account-page-container" style={{ paddingBottom: 4 }}>
        {props.last_fetch_hit === true && props.account_clicked === true ? <AccountPage /> : null}
      </div>
      <div className="account-cards-container">
        {!props.account_clicked ? renderAccountCards() : null }
      </div>


    </div>
//   <div style={{width: 300, marginBottom: 20}}>
//     <Table
//       style={{tableLaylout: 'auto'}}
//       selectable={false}
//       multiSelectable={false}
//       bodyStyle={{height: 'auto', textAlign: 'left'}}
//       headerStyle={{}}
//       // wrapperStyle={{}}
//       height={'300px'}>
//       <TableHeader
//         displaySelectAll={false}
//         adjustForCheckbox={false}
//         enableSelectAll={false}
//         style={{
//           display: 'flex',
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           textAlign: 'center',
//           textTransform: 'uppercase',
//           fontWeight: 500
//         }}>
//         <TableRow
//           displayRowCheckbox={false}
//           style={{
//             padding: 0,
//           }}>
//           <TableHeaderColumn>Hero</TableHeaderColumn>
//           <TableHeaderColumn>Games Played</TableHeaderColumn>
//           <TableHeaderColumn>kills</TableHeaderColumn>
//         </TableRow>
//       </TableHeader>
//       <TableBody
//         displayRowCheckbox={false}
//         deselectOnClickaway={false}
//         showRowHover={false}
//         stripedRows={false}>
//         <TableRow>
//           <TableRowColumn> Storm Spirit </TableRowColumn>
//           <TableRowColumn> 834 </TableRowColumn>
//         </TableRow>
//         <TableRow>
//           <TableRowColumn> Ember Spirit </TableRowColumn>
//           <TableRowColumn> 89 </TableRowColumn>
//         </TableRow>
//       </TableBody>
//     </Table>
// </div>

    )}


const mapStateToProps = state => {
  return {
    account_clicked: state.account_clicked,
    final_fetch_flag: state.final_fetch_flag,
    last_fetch_hit: state.last_fetch_hit,
    accounts: state.accounts
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getAccounts: bindActionCreators(fetchAccounts, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
