import React from 'react';
import {connect} from 'react-redux';
import {signOutAction,userDeleteAction} from '../../actions'


const OptionDropDown = ({signOutAction,userDeleteAction}) => {

    const onSignOutClick = () => {
        var result = window.confirm('本当にログアウトしますか？');
        if( result ) {
            var confirmation = window.confirm('押し間違いもあるので最終確認します。ログアウトしますか？');
            if(confirmation){
                signOutAction();
            }
        }
    }

    const onUserDeleteClick = () => {
        var result = window.confirm('本当に退会しますか？');
        if( result ) {
            var confirmation = window.confirm('押し間違いもあるので最終確認します。退会しますか？');
            if(confirmation){
                userDeleteAction();
            }
        }
    }


    return(
        <div className="option-drop-down">
            <a href="/qa/terms">利用規約</a>
            <div className="divider"></div>
            <a href="/qa/privacy">プライバシーポリシー</a>
            <div className="divider"></div>
            <a onClick={onSignOutClick}><span>ログアウト</span></a>
            <div className="divider"></div>
            <a onClick={onUserDeleteClick}><span>退会する</span></a>
        </div>
    )

}

export default connect(null,{signOutAction,userDeleteAction})(OptionDropDown);