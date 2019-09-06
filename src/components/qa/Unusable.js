import React from 'react'
import {Link} from 'react-router-dom';

const Unusable = ({questionId,answerId,response}) => {
    return (
        < div className = "wrap" >
            すいません。。投稿・マイページ機能を使うには登録が必要です。<br/>
            登録はすぐに終わるので、ぜひ試しに使ってみて下さい！<br/>
            <Link to={"/qa/signup"} className="header">
                登録ページ
            </Link>
        </div>
    );
}


export default Unusable
