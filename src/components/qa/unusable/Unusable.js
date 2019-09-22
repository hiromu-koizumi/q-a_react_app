import React from 'react'
import {Link} from 'react-router-dom';
import './style.scss'

const Unusable = ({questionId,answerId,response}) => {
    return (
        <div className = "unusable-wrap ui container">
            <div className="signup">
                <div className="signup-please">
                    すいません。。投稿・マイページ機能を使うには登録が必要です。<br/>
                    登録はすぐに終わるので、ぜひ試しに使ってみて下さい！
                </div>
                <div className="unusable-signup-button-wrap">
                    <div　className="unusable-signup-button">
                        <Link to={"/qa/signup"} className="">
                            新規登録
                        </Link>
                    </div>
                </div>
            </div>
            <div className="unusable-or">
                または
            </div>
            <div>
                <div className="unusable-signin-button">
                    <Link to={"/qa/login"} className="">
                        ログインする
                    </Link>
                </div>
            </div>
            <div>
                <div className="unusable-password-button">
                        <Link to={"/qa/password"} className="">
                            パスワードを忘れた方
                        </Link>
                </div>
            </div>
        </div>
    );
}


export default Unusable
