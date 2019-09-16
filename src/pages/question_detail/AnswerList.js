import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchAnswers,answerGoodCount} from '../../actions';
import { Link } from 'react-router-dom';
import GoodButton from '../../components/qa/good_button/GoodButton';
import ResponseButton from './response_create/ResponseButton';
import ResponseList from './ResponseList';
import './style.scss'


//質問の表示処理
class AnswerList extends Component{
    
    componentDidMount() {
        this.props.fetchAnswers(this.props.id);
    }

    onClick = (answerData) => {
        this.props.answerGoodCount(answerData);       
    }

    render() {

        return (
                < div className = "" >
                    {/* propsにするかstateにするかで表示変わる。propsにすると */}
                    {this.props.data.map((item, i) => (
                        <div className = "answer-list-wrap" key={i}>
                            <div className="ui fluid card">
                                <div className="content">
                                    <div className="description">
                                        <p>{item.answer}</p>
                                    </div>
                                    <div className="flex-end">
                                        {/* <div className="meta name">{item.name}</div> */}
                                        <GoodButton onClick={this.onClick} postData={item}/>
                                    </div>
                                        <ResponseButton answerUserId={item.userId} questionId={item.questionId} answerId={item.answerId}/>
                                </div>
                            </div>
                                <ResponseList answerUserId={item.userId} questionId={item.questionId} answerId={item.answerId}/>
                        </div>
                    ))
                    }
                </div>
            );
        }
    }

    const mapStateToProps = (state) =>{  

        return { 
            data: Object.values(state.answer),
        };
    }

export default connect(mapStateToProps,{fetchAnswers,answerGoodCount})(AnswerList);