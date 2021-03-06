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
import TermsPage from '../pages/terms_of_service/TermsPage';
import PrivacyPage from '../pages/privacy_policy/PrivacyPage';
import PasswordPage from '../pages/password/PasswordPage';
import history from '../history';
import Header from './qa/header/Header';
import NaviBar from '../components/qa/navi_bar/NaviBar'
import Unusable from './qa/unusable/Unusable'
import ScrollMemory from 'react-router-scroll-memory';



const App = () => {
  

    return (
      <div>
          <Router history={history}>
          <div className="container">
          <ScrollMemory />
            <Switch>
              <Route path="/" exact component={TopPage}/>
              <Route path="/qa/new" exact component={QuestionCreatePage}/>
              <Route path="/qa/signup" exact component={SignUp}/>
              <Route path="/qa/login" exact component={Login}/>
              <Route path="/qa/mypage" exact component={MyPage}/>
              <Route path="/qa/unusable" exact component={Unusable}/>
              <Route path="/qa/terms" exact component={TermsPage}/>
              <Route path="/qa/privacy" exact component={PrivacyPage}/>
              <Route path="/qa/password" exact component={PasswordPage}/>
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
