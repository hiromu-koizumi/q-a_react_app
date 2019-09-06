import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Router,Route,Switch} from 'react-router-dom';
import './app.scss'
import QuestionCreatePage from '../pages/question_create/QuestionCreatePage';
import QaDetail from '../pages/question_detail/QuestionDetailPage';
import TopPage from '../pages/top/TopPage';
import SignUp from '../pages/signup/SignUpPage';
import MyPage from '../pages/mypage/MyPage';
import Login from '../pages/login/LoginPage';
import history from '../history';
import Header from '../components/qa/Header';
import NaviBar from '../components/qa/navi_bar/NaviBar'
import Unusable from '../components/qa/Unusable'
import ScrollMemory from 'react-router-scroll-memory';


const App = () => {
  

    return (
      <div>
          <Router history={history}>
          <div className="container">
          <ScrollMemory />
            <Header/>
            <Switch>
              <Route path="/" exact component={TopPage}/>
              <Route path="/qa/new" exact component={QuestionCreatePage}/>
              <Route path="/qa/signup" exact component={SignUp}/>
              <Route path="/qa/login" exact component={Login}/>
              <Route path="/qa/mypage" exact component={MyPage}/>
              <Route path="/qa/unusable" exact component={Unusable}/>
              {/* qa/:idのあとにrouteを追加するとpathがqa:idに設定され、Qadetailを読み込んでしまう 。routeは、このrouteより上に追加する。*/}
              <Route path="/qa/:id" exact component={QaDetail}/>
            </Switch>
            <NaviBar/>
          </div>
        </Router>
      </div>
    )
  }


export default App;
