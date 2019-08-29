import React from 'react';
import {connect} from 'react-redux';
import {signInAction,signOutAction} from '../actions';

class FirebaseAuth extends React.Component{

  componentDidMount(){
        this.props.signInAction();
   }

   //表示を更新させている
   onAuthChange = uid => {
       if (uid){
           //reducerを呼び出し、storeに値を渡してる.
           //引数はユーザーID
           this.props.signInAction(uid);
       }else{
           this.props.signOutAction();
       }
   }

   //サインインの処理
   onSignInClick = () =>{
    //googleにサインインしている。signInはGoogleの関数
       this.auth.signIn();
   }

   //サインアウトの処理
   onSignOutClick = () => {
       this.auth.signOut();
   }

   renderAuthButton() {
       if (this.props.isSignedInMap === null){
           return null;
       }else if(this.props.isSignedInMap){
           return (
            <button className="ui red google button" onClick={this.onSignOutClick}>
              ログアウト
        </button>
           )
       }else{
           return (
            <button className="ui red google button" onClick={this.onSignInClick}>
                  ログイン
            </button>
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