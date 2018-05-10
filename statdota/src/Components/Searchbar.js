import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAccountClicked, setLoadFlag, setGlobalAccountQuery, fetchAccounts } from '../actions.js';
import SearchBar from 'material-ui-search-bar';

class Searchbar extends Component {
  constructor(props){
    super(props);
      this.state = {
        search_query: "",
      }
  }


  handleSearch = event => {
    this.setState({
      search_query: event
    })
  }

  handleSearchSubmit = () => {
    this.props.setQuery(this.state.search_query)
    this.props.getAccounts(this.state.search_query)

    
    this.props.account_clicked ? this.props.setAccountClicked() : false
    // console.log('Hit setLoadFlag, setQuery, setAccountClicked & getAccounts')
  }

  render() {
    return(
      <SearchBar
        className="search-bar-comp"
        value={this.state.search_query}
        onChange={this.handleSearch}
        onRequestSearch={this.handleSearchSubmit}
        style={{
          margin: '0 auto',
          width: 932,
          height: 41,
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

  const mapStateToProps = state => {
    return {
      account_clicked: state.account_clicked
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
