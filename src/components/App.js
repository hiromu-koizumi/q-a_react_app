import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import QaForm from './qa/QaForm';
import QaList from './qa/QaList';


class App extends Component {

  render() {
    return (
      <div>
        <QaForm />
        <QaList/>
      </div>
    )
  }
}

export default connect()(App);
