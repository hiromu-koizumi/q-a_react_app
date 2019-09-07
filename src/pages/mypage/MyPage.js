import React from 'react';
import {connect} from 'react-redux';
import MyQuestionList from './MyQuestionList';
import MyAnswerList from './MyAnswerList';


class MyPage extends React.Component{
   
    render(){ 

        return (
            <div>
                <MyQuestionList/>
                <MyAnswerList/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {userId:state.auth.userId,answers:state.myData.answers}
}

export default connect(mapStateToProps)(MyPage);