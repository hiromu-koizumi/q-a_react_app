import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import AddForm from './qa/AddForm';
import Item from './qa/Item';


class App extends Component {
  render() {
    return (
      <div>
        <AddForm />
        <Item/>
      </div>
    )
  }
}

export default connect()(App);
