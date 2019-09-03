import React from 'react'
import {Link} from 'react-router-dom';

const Unusable = ({questionId,answerId,response}) => {
    return (
        < div className = "wrap" >
            登録してね
            <Link to={"/qa/signup"} className="header">
                登録ページ
            </Link>
        </div>
    );
}


export default Unusable
