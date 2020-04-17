import React, { Component } from 'react';
import App from './app.jsx';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.search(event.currentTarget.value);
  }

  render() {
    return (
      <input type="text" className="form-control form-search" id="" onChange={this.handleUpdate}/>
    );
  }
}

export default SearchBar;
