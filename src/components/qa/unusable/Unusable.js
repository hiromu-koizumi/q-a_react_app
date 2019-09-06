import React from 'react'
import {Link} from 'react-router-dom';
import './style.scss'

const Unusable = ({questionId,answerId,response}) => {
    return (
        <div className = "ui container">
            <div className="signup">
                <p>
                すいません。。投稿・マイページ機能を使うには登録が必要です。<br/>
                登録はすぐに終わるので、ぜひ試しに使ってみて下さい！
                </p>
                <div className="signup-button">
                    <div　className="ui teal button">
                        <Link to={"/qa/signup"} className="header">
                            登録
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <div className="signin-button">
                        <Link to={"/qa/signin"} className="header">
                            ログインする
                        </Link>
                </div>
            </div>
        </div>
    );
}


export default Unusable
