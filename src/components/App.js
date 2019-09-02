import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Router,Route,Switch} from 'react-router-dom';
import './App.css';
import QuestionCreate from './qa/QuestionCreate';
import QaDetail from './qa/QaDetail';
import TopPage from './qa/TopPage';
import SignUp from './qa/SignUp';
import MyPage from './qa/MyPage';
import Login from './qa/Login';
import history from '../history';
import Header from './Header';





const App = () => {

    return (
      <div>
        <Router history={history}>
          <div>
            <Header/>
            <Switch>
              <Route path="/" exact component={TopPage}/>
              <Route path="/qa/new" exact component={QuestionCreate}/>
              <Route path="/qa/signup" exact component={SignUp}/>
              <Route path="/qa/login" exact component={Login}/>
              <Route path="/qa/mypage" exact component={MyPage}/>
              {/* qa/:idのあとにrouteを追加するとpathがqa:idに設定され、Qadetailを読み込んでしまう 。routeは、このrouteより上に追加する。*/}
              <Route path="/qa/:id" exact component={QaDetail}/>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }


export default App;
