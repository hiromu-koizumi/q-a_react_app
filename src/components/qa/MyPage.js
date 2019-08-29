import React from 'react';
import {connect} from 'react-redux';
import {fetchMyQuestions,signInAction} from '../../actions';
import AnswerForm from './AnswerForm';
import MyQuestionList from './MyQuestionList';


class MyPage extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.props.signInAction();
    //     console.log('uu')
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     // Are we adding new items to the list?
    //     // Capture the scroll position so we can adjust scroll later.
    //     if (this.props.userId) {
    //         this.props.fetchMyQuestions(this.props.userId)
    //     }
    //     return null;
    //   }

    //   componentDidUpdate(prevProps) {
    //     // 典型的な使い方(props を比較することを忘れないでください)
    //     if (this.props.userId) {
    //         this.props.fetchMyQuestions(this.props.userId)
    //     }
    //   }

    
    // componentDidMount(){
    //     if(this.props.userId){
    //         this.props.fetchMyQuestions(this.props.userId)
    //     }
    // }

    render(){ 

        // if (this.props.answers)
        return (
            <div>
                <MyQuestionList/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {userId:state.auth.userId,answers:state.myData.answers}
}

export default connect(mapStateToProps,{fetchMyQuestions,signInAction})(MyPage);