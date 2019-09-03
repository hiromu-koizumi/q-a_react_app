import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchAnswers,answerGoodCount} from '../../actions';
import { Link } from 'react-router-dom';
import GoodButton from '../../components/qa/GoodButton';
import ResponseButton from './ResponseButton';
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
        if (this.props.nodata){
            return(
                <div>回答なし</div>
            );
        }

        return (
                < div className = "wrap" >
                    {/* propsにするかstateにするかで表示変わる。propsにすると */}
                    {this.props.data.map((item, i) => (
                        <div key={i}>
                            <div className="ui fluid card" >
                                <div className="content">
                                    <div className="meta">{item.name}</div>
                                    <div className="description">
                                        <p>{item.answer}</p>
                                    </div>
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
        if (!state.answer){
            return　{
                nodata:state
            }
        }
        console.log(Object.values(state.answer))
        return { 
            data: Object.values(state.answer),
        };
    }

export default connect(mapStateToProps,{fetchAnswers,answerGoodCount})(AnswerList);