import React from 'react';
import {connect} from 'react-redux';
import {resetAnswer,fetchQuestion,fetchAnswers,questionGoodCount} from '../../actions';
import AnswerForm from './answer_create/AnswerForm';
import AnswerList from './AnswerList';
import AnswerButton from './answer_create/AnswerButton';
import GoodButton from '../../components/qa/good_button/GoodButton';


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

        // const  {name,question} = this.props.questionData
        const  {question} = this.props.questionData
    

        return (
            <div className="ui container">
                <button className='back-button' onClick={() => this.props.history.goBack()}><i className="angle left icon"></i></button>
                <p className="question-top">{question}</p>
                <div className="flex-end">
                    {/* <p className="name">{name}</p> */}
                    <GoodButton onClick={this.onClick} postData={this.props.questionData}/>
                </div>
                <AnswerButton questionId={this.props.match.params.id} questionData={this.props.questionData}/>
                <AnswerList id={this.props.match.params.id}/>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        questionData:state.questions[ownProps.match.params.id],
        auth:state.auth,
    }
}


export default connect(mapStateToProps,{resetAnswer,fetchQuestion,fetchAnswers,questionGoodCount})(QaDetail);