import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import FirebaseAuth from '../../FirebaseAuth'
import { connect } from 'react-redux';
import './style.scss'
import {signInAction} from '../../../actions'

const NaviBar = ({ isSignedIn,signInAction}) => {

    useEffect(() => {
        signInAction();
    });
    
    return(
        <div className="navi-bar">
            <div className="container">
                <Link to="/" className="navi-bar-link">
                    <i className="icon comment outline navi-bar-icon"></i>
                </Link>
                {/* <FirebaseAuth/> */}
                {isSignedIn ?
                <Link to="/qa/new" className="navi-bar-link big-icon">
                    <i className="icon plus square outline navi-bar-icon"></i>
                </Link> :
                <Link to="/qa/unusable" className="navi-bar-link big-icon">
                    <i className="icon plus square outline navi-bar-icon"></i>
                </Link>}

                {isSignedIn ?
                <Link to="/qa/mypage" className="navi-bar-link">
                    <i className="icon home navi-bar-icon"></i>
                </Link>:
                <Link to="/qa/unusable" className="navi-bar-link">
                    <i className="icon home navi-bar-icon"></i>
                </Link>}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    
    return {
        isSignedIn:state.auth.isSignedIn
    }
}


export default connect(mapStateToProps,{signInAction})(NaviBar);