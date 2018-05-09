import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAccountClicked, setLoadFlag, setGlobalAccountQuery, fetchAccounts } from '../actions.js';
import SearchBar from 'material-ui-search-bar';

class Searchbar extends Component {
  state = {
    account_query: "",
  }

  handleSearch = event => {
    this.setState({
      account_query: event
    })
  }

  handleSearchSubmit = () => {
    this.props.setLoadFlag()
    this.props.setQuery(this.state.account_query)
    this.props.getAccounts(this.state.account_query)
    this.props.setAccountClicked()
    // console.log('Hit setLoadFlag, setQuery, setAccountClicked & getAccounts')
  }

  render() {
    return(
      <SearchBar
        className="search-bar-comp"
        value={this.state.account_query}
        onChange={this.handleSearch}
        onRequestSearch={this.handleSearchSubmit}
        style={{
          margin: '0 auto',
          width: 932,
          height: 41,
          // boxShadow: 2
        }}
      />
  )}}

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({
      setQuery: setGlobalAccountQuery,
      getAccounts: fetchAccounts,
      setLoadFlag: setLoadFlag,
      setAccountClicked: setAccountClicked
    }, dispatch)
  }

export default connect(null, mapDispatchToProps)(Searchbar);
