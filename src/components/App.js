import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Router,Route,Switch} from 'react-router-dom';
import './App.css';
import QaCreate from './qa/QaCreate';
import QaDetail from './qa/QaDetail';
import QaList from './qa/QaList';
import history from '../history';
import Header from './Header';





const App = () => {

    return (
      <div>
        <Router history={history}>
          <div>
            <Header/>
            <Switch>
              <Route path="/" exact component={QaList}/>
              <Route path="/qa/new" exact component={QaCreate}/>
              <Route path="/qa/:id" exact component={QaDetail}/>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }


export default App;
