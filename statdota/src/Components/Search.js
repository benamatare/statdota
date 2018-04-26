import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setGlobalAccountQuery } from '../actions.js';
import { bindActionCreators } from 'redux';

class Search extends Component {

  state = {
    account_query: "",
  }

  handleQuery = e => {
      this.setState({
        account_query: e.target.value
      }, () => { console.log(this.state.account_query) })
  }

  handleQuerySubmit = e => {
    e.preventDefault();
    this.props.setQuery(this.state.account_query)
  }

  render() {
    console.log(this.props)
    return(
      <div>
       <form onSubmit={ this.handleQuerySubmit }>
         <input
            type="text"
            placeholder="Search for an account..."
            onChange={ this.handleQuery }
          />
          <input
            type="submit"
          />
        </form>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({setQuery: setGlobalAccountQuery}, dispatch)
}

export default connect(null, mapDispatchToProps)(Search);
