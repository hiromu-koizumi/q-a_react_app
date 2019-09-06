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