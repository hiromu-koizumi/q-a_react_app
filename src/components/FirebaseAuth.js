import React from 'react';
import {connect} from 'react-redux';
import {signInAction,signOutAction} from '../actions';
import {Link} from 'react-router-dom';


class FirebaseAuth extends React.Component{

  componentDidMount(){
        this.props.signInAction();
   }


   //サインアウトの処理
   onSignOutClick = () => {
    this.props.signOutAction();
   }

   renderAuthButton() {
       if(this.props.isSignedInMap){
           return (
            <button className="ui red google button" onClick={this.onSignOutClick}>
              ログアウト
        </button>
           )
       }else{
           return (
                <Link to="/qa/login" className="ui button primary">
                    ログイン
                </Link>
            )
       }
   }

   render(){
       return <div>{this.renderAuthButton()}</div>
   }
}

//storeが更新されると呼び出される。初回起動時も。その後renderが呼び出され表示が更新される。
const mapStateToProps = (state) =>{
    return {isSignedInMap: state.auth.isSignedIn};
}

export default connect(mapStateToProps,{signInAction,signOutAction})(FirebaseAuth);