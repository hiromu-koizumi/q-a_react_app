import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                QA
            </Link>
            <Link to="/qa/signup" className="item">
                登録
            </Link>
            <Link to="/qa/mypage" className="item">
                マイページ
            </Link>
        </div>
    )
};

export default Header;