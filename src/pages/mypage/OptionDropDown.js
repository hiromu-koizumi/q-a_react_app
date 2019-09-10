import React from 'react';
import {connect} from 'react-redux';
import {signOutAction} from '../../actions'


const OptionDropDown = ({signOutAction}) => {

    const onSignOutClick = () => {
            signOutAction();
       }

    return(
        <div className="option-drop-down">
            <a href="/qa/terms">利用規約</a>
            <div className="divider"></div>
            <a href="/qa/privacy">プライバシーポリシー</a>
            <div className="divider"></div>
            <a onClick={onSignOutClick}>ログアウト</a>
        </div>
    )

}

export default connect(null,{signOutAction})(OptionDropDown);