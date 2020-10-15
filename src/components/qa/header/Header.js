import React from 'react';
import {Link} from 'react-router-dom';
import FirebaseAuth from '../../FirebaseAuth'
import { connect } from 'react-redux';
import './style.scss'

const Header = ({isSignedIn}) => {
    return(
        // <div className="ui secondary pointing menu">
        //     <Link to="/" className="item">
        //         QA
        //     </Link>

        //     {isSignedIn ?
        //         <Link to="/qa/mypage" className="item">
        //             マイページ
        //         </Link> :
        //         <Link to="/qa/signup" className="item">
        //             登録
        //         </Link>
        //     }
        //     <FirebaseAuth/>
        // </div>
        <div className="header-wrap">
            <svg xmlns="http://www.w3.org/2000/svg" width="105" height="51" viewBox="0 0 45 21">
            <text id="キュー" transform="translate(0 16)" fill="#e18992" fontSize="15" fontFamily="Mplus1p-ExtraBold, 'Mplus 1p'" fontWeight="800"><tspan x="0" y="0">キュー</tspan></text>
            </svg>
        </div>
    )
};

const mapStateToProps = (state) => {
    
    return {
        isSignedIn:state.auth.isSignedIn
    }
}


export default connect(mapStateToProps)(Header);
// export default Header;