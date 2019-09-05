import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchAnswers,answerGoodCount} from '../../actions';
import { Link } from 'react-router-dom';
import GoodButton from '../../components/qa/GoodButton';
import ResponseButton from './response_create/ResponseButton';
import ResponseList from './ResponseList';



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
                < div className = "wrap" >
                    {/* propsにするかstateにするかで表示変わる。propsにすると */}
                    {this.props.data.map((item, i) => (
                        <div key={i}>
                            <div className="ui fluid card" >
                                <div className="content">
                                    <div className="description">
                                        <p>{item.answer}</p>
                                    </div>
                                    <div className="meta">{item.name}</div>
                                    <ResponseButton questionId={item.questionId} answerId={item.answerId}/>
                                    <GoodButton onClick={this.onClick} postData={item}/>
                                </div>
                            </div>
                                <ResponseList questionId={item.questionId} answerId={item.answerId}/>
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