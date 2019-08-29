import React from 'react';
import {connect} from 'react-redux';
import {createAnswer,resetAnswer,fetchPost,fetchAnswers} from '../../actions';
import AnswerForm from './AnswerForm';
import AnswerList from './AnswerList';


class QaDetail extends React.Component{

    componentDidMount(){
        this.props.fetchPost(this.props.match.params.id)
    }

    componentWillUnmount(){
        //ページを離れる時にstateのanswerの値を削除している
        //消さないと、回答のないページを開いた時に以前開いたページの回答を表示してしまう
       this.props.resetAnswer()
    }

    onSubmit = (formValues,id) => {
        this.props.createAnswer(formValues,id,this.props.auth);
        
        //再読み込みして新規投稿を取得している
        this.props.fetchAnswers(id)
    }

    render(){
        if(!this.props.post){
            return <div>Loading...</div>
        }

        const  {name,title,question} = this.props.post
    

        return (
            <div>
                <h1>{title}</h1>
                <h5>{name}</h5>
                <h5>{question}</h5>
                <AnswerList id={this.props.match.params.id}/>
                <AnswerForm　onSubmit={this.onSubmit} id={this.props.match.params.id}/>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return {post:state.data[ownProps.match.params.id],auth:state.auth.userId}
}

export default connect(mapStateToProps,{createAnswer,resetAnswer,fetchPost,fetchAnswers})(QaDetail);