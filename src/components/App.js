import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Router,Route,Switch} from 'react-router-dom';
// import './App.css';
// import '../../public/style/css'
// import './app.scss'
import QuestionCreatePage from '../pages/question_create/QuestionCreatePage';
import QaDetail from '../pages/question_detail/QuestionDetailPage';
import TopPage from '../pages/top/TopPage';
import SignUp from '../pages/signup/SignUpPage';
import MyPage from '../pages/mypage/MyPage';
import Login from '../pages/login/LoginPage';
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
              <Route path="/qa/new" exact component={QuestionCreatePage}/>
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
