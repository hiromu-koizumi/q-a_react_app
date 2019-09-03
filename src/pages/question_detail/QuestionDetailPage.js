import React from 'react';
import {connect} from 'react-redux';
import {createAnswer,resetAnswer,fetchQuestion,fetchAnswers,questionGoodCount} from '../../actions';
import AnswerForm from './AnswerForm';
import AnswerList from './AnswerList';
import AnswerButton from './AnswerButton';
import GoodButton from '../../components/qa/GoodButton';


class QaDetail extends React.Component{

    componentDidMount(){
        this.props.fetchQuestion(this.props.match.params.id)
    }

    componentWillUnmount(){
        //ページを離れる時にstateのanswerの値を削除している
        //消さないと、回答のないページを開いた時に以前開いたページの回答を表示してしまう
       this.props.resetAnswer()
    }

    onClick = (questionData) => {
        this.props.questionGoodCount(questionData);       
    }

    render(){
        if(!this.props.questionData){
            return <div>Loading...</div>
        }

        const  {name,question} = this.props.questionData
    

        return (
            <div>
                <h5>{question}</h5>
                <p className="ui description">{name}</p>
                <AnswerButton questionId={this.props.match.params.id}/>
                <GoodButton onClick={this.onClick} postData={this.props.questionData}/>
                <AnswerList id={this.props.match.params.id}/>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return {questionData:state.questions[ownProps.match.params.id],auth:state.auth}
}

export default connect(mapStateToProps,{createAnswer,resetAnswer,fetchQuestion,fetchAnswers,questionGoodCount})(QaDetail);