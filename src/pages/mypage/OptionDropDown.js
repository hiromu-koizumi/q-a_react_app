import React from 'react';
import {connect} from 'react-redux';
import {signOutAction} from '../../actions'


const OptionDropDown = ({signOutAction}) => {

    const onSignOutClick = () => {
        var result = window.confirm('本当にログアウトしますか？');
    if( result ) {
        signOutAction();
    }
    else {
            }
    }


    return(
        <div className="option-drop-down">
            <a href="/qa/terms">利用規約</a>
            <div className="divider"></div>
            <a href="/qa/privacy">プライバシーポリシー</a>
            <div className="divider"></div>
            <a onClick={onSignOutClick}><span>ログアウト</span></a>
        </div>
    )

}

export default connect(null,{signOutAction})(OptionDropDown);